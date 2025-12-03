---
question: "Why does EZ use unique keywords?"
order: 3
---

# Why does EZ use unique keywords?

EZ uses keywords like `do`, `temp`, `as_long_as`, and `or`/`otherwise` instead of the traditional `func`, `let`, `while`, and `else if`/`else`. This is intentional.

## The Short Answer

This is how code reads in plain English. When you read EZ code, it should sound like describing what the program does to another person.

## The Philosophy

When experienced programmers read code, their brain translates it into plain language anyway:

```
// What you see in most languages:
while (x < 10) { ... }

// What your brain thinks:
"As long as x is less than 10, do this..."
```

EZ just writes it the way your brain already reads it:

```ez
as_long_as x < 10 { ... }
```

If that's how we think about code, why not write it that way?

## The Unique Keywords

### `do` instead of `func` / `function` / `def`

```ez
do greet(name string) {
    println("Hello, " + name)
}
```

Read it out loud: "Do greet with name string..."

It's an action. A verb. You're telling the computer to *do* something.

### `temp` instead of `let` / `var`

```ez
temp count int = 0
```

Read it: "Temporary count, an integer, equals zero."

It's a temporary value — it can change. The name says what it is.

### `as_long_as` instead of `while`

```ez
as_long_as count < 10 {
    count += 1
}
```

Read it: "As long as count is less than 10, do this."

That's exactly what a while loop does. Now the code says it.

### `or` / `otherwise` instead of `else if` / `else`

```ez
if score >= 90 {
    println("A")
} or score >= 80 {
    println("B")
} or score >= 70 {
    println("C")
} otherwise {
    println("F")
}
```

Read it: "If score is at least 90, print A. Or if score is at least 80, print B. Or if score is at least 70, print C. Otherwise, print F."

That's plain English. No weird `else if` construction.

## Keywords That Stay The Same

Some keywords are intentionally the same as other languages:

| EZ | Same As | Why |
|----|---------|-----|
| `break` | C, Go, Rust, Python | Universal concept |
| `continue` | C, Go, Rust, Python | Universal concept |
| `if` | Everything | It's already plain English |
| `for` | Most languages | Familiar iteration |
| `return` | Everything | Universal concept |
| `const` | C, Go, JavaScript | Established meaning |
| `struct` | C, Go, Rust | Established meaning |
| `import` | Most languages | Familiar concept |

### Why Keep Some Keywords Standard?

**Beginners won't stay beginners forever.**

One day, EZ learners will move on to other languages — Go, Rust, C, Python, whatever calls to them. When they do, I want them to recognize concepts:

- "Oh, this language has `break` and `continue` too! EZ taught me those."
- "This language uses `else if` instead of `or`, but I know what it means — I'll just read it as 'or' in my head."
- "Structs work the same way here!"

EZ teaches transferable concepts with approachable syntax. The goal isn't to trap you in EZ — it's to give you a foundation that makes learning other languages easier.

## The Balance

EZ strikes a balance:

| Keyword Type | Examples | Philosophy |
|--------------|----------|------------|
| **Unique to EZ** | `do`, `temp`, `as_long_as`, `or`, `otherwise` | Plain English readability |
| **Standard** | `if`, `for`, `break`, `continue`, `return`, `const`, `struct` | Transferable knowledge |

The unique keywords make EZ readable. The standard keywords make your knowledge portable.

## Reading Other Languages After EZ (Example of Go Code)

After learning EZ, when you see this in Go:

```go
func greet(name string) {
    fmt.Println("Hello, " + name)
}

x := 0
for x < 10 {
    x++
}

if score >= 90 {
    fmt.Println("A")
} else if score >= 80 {
    fmt.Println("B")
} else {
    fmt.Println("F")
}
```

Your brain will read:

- `func` → "Oh, that's like `do`"
- `for x < 10` → "That's like `as_long_as`"
- `else if` → "That's just `or`"
- `else` → "That's `otherwise`"

You'll understand it instantly because you learned the concepts, not just the syntax.

---


