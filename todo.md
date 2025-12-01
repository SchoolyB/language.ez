# Documentation Improvement Todo List

## Priority 1: Bugs (Missing imports in examples) ✅

- [x] **functions.md** - Add `import @math` to struct parameters example
- [x] **structs.md** - Add `import @arrays` to example program

## Priority 2: Beginner Clarity (Add brief explanations) ✅

- [x] **variables.md** - Explain WHY const is required for fixed-size arrays
- [x] **keywords.md** - Add when to use `temp` vs `const`
- [x] **enums.md** - Explain what `skip` means in `@(int, skip, 10)` syntax
- [x] **modules.md** - Define what a "module" actually IS before explaining syntax
- [x] **stdlib/index.md** - Replace "namespace" with beginner-friendly explanation
- [x] **types.md** - Explain why EZ requires explicit types (design choice for clarity)
- [x] **strings.md** - Clarify that `substring()` end index is exclusive
- [x] **repl.md** - Explain the colon prefix convention for REPL commands

## Priority 3: Reduce Verbosity (For advanced users) ✅

- [x] **hello-world.md** - Consolidated 8 examples down to 3
- [x] **keywords.md** - Shortened "Why X?" paragraphs to one-liners
- [x] **modules.md** - Reduced project structure from 165 lines to ~50 lines

## Priority 4: Split Oversized Examples - SKIPPED

Kept as-is per user decision.

## Priority 5: Navigation & Links - SKIPPED

Links confirmed working.

## Optional: Improvements ✅

- [x] **stdlib/index.md** - Added collapsible `<details>` for advanced import styles
