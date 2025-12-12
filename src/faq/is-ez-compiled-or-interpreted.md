---
question: "Is EZ compiled or interpreted?"
order: 2
---

# Is EZ compiled or interpreted?

**Right now:** Interpreted.

**The goal:** Compiled (v2.0).

## Current State

EZ is currently an interpreted language. The interpreter is written in Go and executes your code directly

```bash
ez myprogram.ez    # Runs immediately
```

This means:
- Fast iteration — change code, run it, see results
- No build step to wait for
- Easy to get started

## The Future: Compilation

The goal is to one day add compilation. This would let you:

```bash
ez compile myprogram.ez -o myprogram    # Compile to binary (planned)
./myprogram                              # Run standalone
```

> **Note:** This syntax is hypothetical — compilation is not yet implemented.

Benefits of compilation:
- **Single binary distribution** — Give someone one file, it just works
- **Better performance** — Native code runs faster than interpretation
- **Cross-compilation** — Build for any platform from any platform
- **Production-ready** — Deploy without requiring EZ to be installed

## Why Start Interpreted?

It was easier.

Building an interpreter is significantly simpler than building a compiler. Starting interpreted allowed me to:
- Nail down the language design
- Iterate quickly on features
- Get something working and usable

Many successful languages followed this path — prove the language works, then optimize.

## Will Both Modes Exist?

Honestly? I'm not sure yet.

The path forward will become more clear later on down the line. Right now, the focus is on making this version solid.

---
