---
layout: '../../../layouts/DocsLayout.astro'
title: '@std'
description: 'Core standard utilities for EZ programs.'
---

# @std

The `@std` module provides the most essential functions for any EZ program,
including output to the console and basic type information.

## Import

```ez
import @std
```

## Functions

### `println()`
`(values ...any) -> void`

Prints one or more values to stdout, followed by a newline.

```ez
std.println("Hello, World!")
std.println("The answer is:", 42)
std.println("x =", x, "y =", y)
```

**Parameters:** Any number of values of any type.

**Returns:** Nothing.

### `printf()`
`(values ...any) -> void`

Prints one or more values to stdout without a trailing newline.

```ez
std.printf("Enter your name: ")
temp name string = input()
std.println("Hello, " + name)
```

**Parameters:** Any number of values of any type.

**Returns:** Nothing.

## Example Program

```ez
import @std

do main() {
    // Print with newline
    std.println("Welcome to EZ!")
    std.println("The answer is:", 42)

    // Print without newline
    std.printf("Enter your name: ")
    temp name string = input()
    std.println("Hello, " + name + "!")
}
```
