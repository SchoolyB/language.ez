---
question: "Why doesn't EZ have a package manager?"
order: 5
---

# Why doesn't EZ have a package manager?

EZ has no package manager. No `ez install`. No `ez add`. No dependency hell. This is permanent and by design.

## The Short Answer

The language is the only tool you need. Write your own code, use the stdlib, or copy what you find. That's it.

## The Problems with Package Managers

### 1. Tool Fragmentation

JavaScript alone has npm, pnpm, npx, yarn, bun...

Every language seems to spawn multiple competing package managers, each with their own commands, config files, and quirks. You end up spending more time managing tools than writing code.

EZ has one tool: `ez`. That's it.

### 2. Security Nightmares

Every package you install is code you didn't write running on your machine. Supply chain attacks are real:
- Malicious packages with typosquatted names
- Compromised maintainer accounts
- Dependency confusion attacks
- Packages that suddenly disappear, breaking everything

When you write your own code or use the stdlib, you know exactly what's running.

### 3. Dependency Hell

```
my-project depends on A@2.0
A@2.0 depends on B@1.5
B@1.5 depends on C@3.0
C@3.0 conflicts with D@2.0 which you also need
```

Hours wasted. Lockfiles that don't lock. Version conflicts that make no sense. We've all been there.

### 4. The node_modules Problem

```
my-project/
└── node_modules/    # 500MB for a todo app
    └── ... 1,847 packages
```

No thanks.

## How EZ Handles Dependencies

**It doesn't.** EZ has no external dependencies. You have:

1. **The stdlib** — Built into the language. Always available. Always works.
2. **Your own code** — Write what you need. You'll understand it better anyway.
3. **Modules** — Organize your own code into files and directories.

That's the complete list.

## "But What If I Need External Code?"

You have options:

1. **Write it yourself** — This is how you actually learn. And you'll know exactly how it works.

2. **Find it and copy it** — Someone wrote a function that does what you need? Copy the code into your project. It's yours now. No dependency, no breaking changes, no supply chain risk.

3. **Suggest it for the stdlib** — If it's generally useful, propose it. Send a patch. If it fits EZ's philosophy, it might get added for everyone.

4. **Have AI write it** — We're in 2025. Describe what you need, provide the EZ documentation as context, get working code, understand it, own it.

## The C/Odin Philosophy

Think about C and Odin. A C or Odin developer doesn't reach for a package manager when they need something:

- "I need to parse JSON" → Find a header file/Use the Odin JSON package, or write it yourself
- "I need to make HTTP requests" → Find a library/package, or use system calls

C has been around for 50+ years and built operating systems, databases, and games without a package manager. You can too.

## What About EZ's Own Source Code?

EZ is written in Go. The goal is for EZ's source code itself to have **zero external Go dependencies** — only Go's standard library. If something isn't in Go's stdlib, I'll include it directly in EZ's source.

The language depends only on itself. The programmer depends only on the language.

## Will EZ Ever Have a Package Manager?

**No.**

This isn't "not yet" or "maybe later." This is a permanent, philosophical stance. Package managers encourage:
- Not understanding your dependencies
- Trusting strangers' code blindly
- Bloated projects with hundreds of transitive dependencies
- Security vulnerabilities you don't even know exist

EZ rejects all of this.

## What You Gain

- **Simplicity** — One tool, no ecosystem to learn
- **Security** — No supply chain attacks
- **Understanding** — You know every line of code in your project
- **Stability** — No breaking changes from upstream
- **Speed** — No downloading, no resolving, no waiting

## The Philosophy

The only things you need to write EZ code is EZ, a computer, and your brain. No account signups. No package registries. No finding out a critical dependency has stopped being maintained.

Just you and the language.

---

