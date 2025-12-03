---
question: "Why doesn't EZ have OOP?"
order: 4
---

# Why doesn't EZ have OOP?

EZ is intentionally anti-OOP. No classes. No inheritance. No `this` or `self`. This is a deliberate design choice, not a limitation.

## The Short Answer

Data is data. Use structs and variables. You don't need a class hierarchy to write good software.

## The Problems with OOP

### 1. Unnecessary Complexity

OOP introduces concepts that get in the way of actually learning to program:
- Class hierarchies and inheritance chains
- Abstract classes vs interfaces vs traits
- Polymorphism, encapsulation, abstraction (the "pillars")
- Constructor overloading, method overriding, visibility modifiers

### 2. Confusing Syntax (Example of Python Code)

```python
# What even is self?
class Person:
    def __init__(self, name):
        self.name = name  # Why self? Why twice?

    def greet(self):
        print(f"Hi, I'm {self.name}")
```

Compare to EZ:

```ez
const Person struct {
    name string
}

do greet(p Person) {
    println("Hi, I'm ${p.name}")
}
```

No `self`. No `this`. No magic. Just data and functions.

### 3. Hidden Behavior

OOP encourages hiding behavior inside objects. EZ encourages making behavior explicit. When you call a function in EZ, you can see exactly what it takes and what it returns. No surprises.

## "But OOP is the Industry Standard!"

EZ isn't trying to replace your favorite language. If you love Python or Java, use them. EZ exists for people who want to try something different — explicit simplicity without the baggage.

Standards change. Good ideas don't need a committee to validate them.

## What EZ Offers Instead

### Structs for Data

```ez
const User struct {
    name string,
    email string,
    age int
}

temp user User = User{name: "Alice", email: "alice@example.com", age: 30}
```

### Functions for Behavior

```ez
do validate_user(u User) -> error {
    if len(u.name) == 0 {
        return error("name cannot be empty")
    }
    if u.age < 0 {
        return error("age cannot be negative")
    }
    return nil
}
```

### Modules for Organization

Got a lot of types? Put them in their own file:

```
myproject/
├── main.ez
└── types/
    └── user.ez      # module types
```

```ez
// types/user.ez
module types

const User struct {
    name string,
    email string
}
```

```ez
// main.ez
import types

do main() {
    temp u types.User = types.User{name: "Alice", email: "a@b.com"}
}
```

No cyclical imports. No dependency injection frameworks. Just organize your code like files in folders.

## What I Want You to Learn

**If you're a beginner:** Learn to program. Learn the basics. Learn to read error messages. Learn that it's okay to make mistakes — that's how you get better. Don't let anyone convince you that you need to understand "object-oriented design patterns" before you can write useful code.

**If you're experienced:** Remember that not everyone has your background. Clarity matters. Documentation matters. Design decisions that seem obvious to you are often confusing to others. EZ tries to be clear to everyone.

## The Philosophy

Why can't things be easy? Why do we accept confusing documentation, implicit behavior, and unnecessary complexity as normal?

EZ rejects that. The language reads like English. The docs follow a clear path. The error messages tell you what's wrong and how to fix it.

Software doesn't have to be a guessing game.

---


