---
layout: '../../../layouts/DocsLayout.astro'
title: 'Language Reference'
description: 'Learn the core concepts of the EZ programming language.'
---

# Language Reference

This section covers the core building blocks of EZ — everything you need to write programs from simple scripts to larger applications.

## What You'll Learn

EZ is designed to be straightforward. There are no hidden tricks or complex rules to memorize. What you see is what you get.

## Topics

| Topic | What it covers |
|-------|----------------|
| [Keywords](/language.ez/docs/language/keywords) | Reserved words in EZ — `temp`, `const`, `do`, `if`, etc. |
| [Variables](/language.ez/docs/language/variables) | Storing values with `temp` and `const` |
| [Functions](/language.ez/docs/language/functions) | Creating reusable blocks of code with `do` |
| [Control Flow](/language.ez/docs/language/control-flow) | Making decisions with `if`/`otherwise` and loops |
| [Types](/language.ez/docs/language/types) | Data types — `int`, `float`, `string`, `bool`, arrays, maps |
| [Structs](/language.ez/docs/language/structs) | Grouping related data together |
| [Enums](/language.ez/docs/language/enums) | Defining a set of named values |
| [Modules](/language.ez/docs/language/modules) | Organizing code into separate files |

## Where to Start

**New to programming?** Start with [Variables](/language.ez/docs/language/variables), then [Functions](/language.ez/docs/language/functions), then [Control Flow](/language.ez/docs/language/control-flow). These three concepts are the foundation of almost every program.

**Coming from another language?** Skim through [Keywords](/language.ez/docs/language/keywords) to see EZ's syntax, then jump to whatever topic you need.

## Quick Example

Here's a small program that shows several language features:

```ez
import @std

// A struct to hold data
const Person struct {
    name string
    age int
}

// A function that uses control flow
do greet(p Person) {
    if p.age < 18 {
        std.println("Hey ${p.name}!")
    } otherwise {
        std.println("Hello, ${p.name}.")
    }
}

do main() {
    // Variables
    temp people [Person] = {
        Person{name: "Alice", age: 25},
        Person{name: "Bob", age: 16}
    }

    // Loop through the array
    for_each person in people {
        greet(person)
    }
}
```

Output:

```
Hello, Alice.
Hey Bob!
```

## Next Steps

Pick a topic and dive in:

- [Keywords](/language.ez/docs/language/keywords) — See all reserved words
- [Variables](/language.ez/docs/language/variables) — Start here if you're new
- [Functions](/language.ez/docs/language/functions) — Create reusable code
- [Control Flow](/language.ez/docs/language/control-flow) — Conditionals and loops
- [Types](/language.ez/docs/language/types) — All the data types
- [Structs](/language.ez/docs/language/structs) — Custom data structures
- [Enums](/language.ez/docs/language/enums) — Named value sets
- [Modules](/language.ez/docs/language/modules) — Organize larger projects
