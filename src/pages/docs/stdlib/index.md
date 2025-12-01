---
layout: '../../../layouts/DocsLayout.astro'
title: 'Standard Library'
description: 'Built-in modules that come with EZ.'
---

# Standard Library

When you install EZ, it comes with a set of ready-to-use tools called the **standard library** (or "stdlib" for short). These are modules that handle common tasks so you don't have to write everything from scratch.

Think of it like a toolbox that comes with your house — you didn't have to buy the hammer and screwdriver separately, they're just there when you need them.

## What's a Module?

A module is a collection of related functions grouped together. For example, all the math-related functions live in the `@math` module, and all the text-related functions live in the `@strings` module.

The `@` symbol tells EZ "this is a built-in module" (as opposed to a file you created yourself).

## How to Use a Module

### Step 1: Import at the Top

Imports must go at the top of your file, before any other code:

```ez
import @std
import @math

do main() {
    // your code here
}
```

### Step 2: Use with the Module Prefix

Once imported, use functions with the module name as a prefix:

```ez
math.sqrt(16.0)      // 4.0
std.println("Hi")    // prints "Hi"
```

The `math.` and `std.` prefixes tell EZ which module each function comes from. This prevents confusion when two modules have functions with the same name.

## Import Options

Import multiple modules on one line or separate lines:

```ez
import @std, @math, @arrays
```

```ez
import @std
import @math
import @arrays
```

<details>
<summary><strong>Advanced Import Styles</strong></summary>

### Aliasing (Shorter Names)

Give a module a nickname:

```ez
import s@strings
import m@math

do main() {
    s.upper("hello")    // instead of strings.upper()
    m.sqrt(16.0)        // instead of math.sqrt()
}
```

### Using (Drop the Prefix)

Skip the module prefix inside a block:

```ez
import @std
import @math

do main() {
    using std
    using math

    println("No prefix needed!")
    temp x float = sqrt(16.0)
}
```

### Import & Use Combined

Shorthand for importing and using everywhere:

```ez
import & use @std

do main() {
    println("Direct access!")
}
```

</details>

For beginners, stick with the basic `import @std` + `std.println()` style. The prefix makes it clear where each function comes from.

See the [Modules](/language.ez/docs/language/modules) page for more details on the module system.

## Available Modules

EZ includes six built-in modules:

| Module | What it's for |
|--------|---------------|
| [@std](/language.ez/docs/stdlib/std) | Basic input/output — printing text, getting user input |
| [@math](/language.ez/docs/stdlib/math) | Math operations — square roots, powers, random numbers |
| [@arrays](/language.ez/docs/stdlib/arrays) | Working with lists — sorting, filtering, finding items |
| [@strings](/language.ez/docs/stdlib/strings) | Working with text — uppercase, splitting, trimming |
| [@maps](/language.ez/docs/stdlib/maps) | Key-value storage — like a dictionary or phonebook |
| [@time](/language.ez/docs/stdlib/time) | Dates and time — current time, formatting, delays |

## Quick Example

Here's a small program that uses three different modules:

```ez
import @std
import @math
import @strings

do main() {
    // @std for printing
    std.println("Welcome!")

    // @math for calculations
    temp radius float = 5.0
    temp area float = math.PI * math.pow(radius, 2.0)
    std.println("Circle area:", area)

    // @strings for text manipulation
    temp name string = "  alice  "
    temp clean string = strings.trim(name)
    temp upper string = strings.upper(clean)
    std.println("Hello,", upper)  // "ALICE"
}
```

## Tips for Beginners

**Start with @std** — You'll use `std.println()` in almost every program. It's how you see output from your code.

**You don't need to memorize everything** — Bookmark this page. When you need to do something with arrays, check the @arrays page. Need to format a date? Check @time. The docs are here for reference.

**Import only what you need** — If your program only prints text, you only need `import @std`. No need to import @math if you're not doing math.

## Next Steps

Pick a module and explore what it can do:

- [@std](/language.ez/docs/stdlib/std) — Start here, it's the most common
- [@math](/language.ez/docs/stdlib/math) — For calculations and random numbers
- [@arrays](/language.ez/docs/stdlib/arrays) — For working with lists of things
- [@strings](/language.ez/docs/stdlib/strings) — For manipulating text
- [@maps](/language.ez/docs/stdlib/maps) — For key-value data
- [@time](/language.ez/docs/stdlib/time) — For dates, times, and delays
