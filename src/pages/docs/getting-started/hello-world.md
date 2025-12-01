---
layout: '../../../layouts/DocsLayout.astro'
title: 'Hello World'
description: 'Your first EZ program.'
---

# Hello World

The classic first program.

## Basic Hello World

The simplest EZ program:

```ez
import @std

do main() {
    std.println("Hello, World!")
}
```

Run it:

```bash
ez hello.ez
```

Output:

```
Hello, World!
```

## With Variables

Store values and use string interpolation with `${}`:

```ez
import @std

do main() {
    temp name string = "World"
    temp count int = 3

    std.println("Hello, ${name}!")
    std.println("Count: ${count}")
}
```

## With Functions and Loops

A more complete example showing functions, arrays, and control flow:

```ez
import @std

do greet(name string, isFormal bool) {
    if isFormal {
        std.println("Good day, ${name}.")
    } otherwise {
        std.println("Hey ${name}!")
    }
}

do main() {
    temp names [string] = {"Alice", "Bob", "Charlie"}

    for_each name in names {
        greet(name, false)
    }

    greet("Dr. Smith", true)
}
```

Output:

```
Hey Alice!
Hey Bob!
Hey Charlie!
Good day, Dr. Smith.
```

## Next Steps

Now that you've seen the basics, explore more:

- [Using the REPL](/docs/getting-started/repl) — Try EZ interactively
- [Variables](/docs/language/variables) — Learn about `temp` and `const`
- [Functions](/docs/language/functions) — Create your own functions
- [Control Flow](/docs/language/control-flow) — Conditionals and loops
