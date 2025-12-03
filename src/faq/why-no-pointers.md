---
question: "Why doesn't EZ have pointers?"
order: 6
---

EZ uses a simple memory model that varies by type, similar to Python, JavaScript, and other beginner-friendly languages. This means you already get what pointers provide in other languages without the complexity.

## Semantics by Type

```
Type          On Assignment         In Functions
─────────────────────────────────────────────────────────────────
Primitives    Copy (independent)    Copy (independent)
Strings       Copy (independent)    Copy (independent)
Arrays        Reference (shared)    Read-only by default, mutable with &
Maps          Reference (shared)    Read-only by default, mutable with &
Structs       Reference (shared)    Read-only by default, mutable with &
```

Primitives include `int`, `float`, `bool`, `char`, and `byte`.

### What this means in practice

**Primitives and strings** are copied when assigned or passed to functions:

```ez
temp x int = 10
temp y int = x
y = 20
// x is still 10
```

**Arrays, maps, and structs** are shared when assigned:

```ez
temp a [int] = {1, 2, 3}
temp b [int] = a
b[0] = 100
// a[0] is now also 100 — they share the same data
```

**In functions**, parameters are read-only by default. Use `&` to allow modification:

```ez
do birthday(&p Person) {   // & allows modification
    p.age = p.age + 1
}

do get_name(p Person) -> string {   // no & = read-only
    // p.age = 100  // ERROR: cannot modify
    return p.name
}

temp person Person = Person{name: "Alice", age: 30}
birthday(person)  // OK: person.age is now 31
```

## What pointers would add

The only thing explicit pointers add in languages like Go or C is the ability to choose between *value semantics* (copying) and *reference semantics* (sharing). Since EZ already has reference semantics for complex types, EZ provides a `copy()` builtin for when you want an independent copy:

```ez
temp a Person = Person{name: "Alice", age: 30}
temp b Person = copy(a)  // independent deep copy
b.age = 31
// a.age is still 30
```

## Why this design?

1. **Simplicity** — Pointers are a notorious source of confusion for beginners. EZ's model is easier to reason about.
2. **No added capability** — In an interpreted language without manual memory management, explicit pointers don't give you anything you can't already do.
3. **Proven model** — This is how the most popular beginner-friendly languages work, and it scales to real applications.

## Recursive Data Structures

EZ supports recursive data structures naturally. A struct field typed as its own struct defaults to `nil`:

```ez
const Node struct {
    value int
    next Node  // defaults to nil
}

temp n1 Node = Node{value: 1, next: nil}
temp n2 Node = Node{value: 2, next: nil}
n1.next = n2  // linked list works
```

If you're coming from C or Go and miss pointers, you probably just need `copy()`.
