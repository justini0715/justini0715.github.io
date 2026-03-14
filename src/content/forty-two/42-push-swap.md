---
title: "42 - push_swap"
description: "Sorting under a constrained instruction set, where the real problem is not just correctness but the operations budget."
pubDate: 2026-03-11
category: "42"
tags: ["42", "c", "algorithms", "push_swap"]
series: "42-systems"
seriesTitle: "42 Systems"
seriesOrder: 1
difficulty: "Operations-constrained algorithm design"
featured: true
draft: false
---

# 42 - push_swap

## What this project is

`push_swap` is a sorting project where the interesting constraint is not merely “sort these numbers.” The challenge is to sort them using a limited set of stack operations and to keep the total number of operations competitive under the project’s scoring rules.

## Requirements / Constraints

- input is parsed into stack data structures before any strategy can run
- operations are limited to push / swap / rotate variants instead of arbitrary mutation
- operation count matters, not just correctness
- edge-case handling still has to be reliable while optimizing the happy path

## What I built

The current repository layout shows a structure that maps well onto the problem:

- `main.c` for the entry point
- `init.c` and `parse*.c` for setup and input handling
- `swap.c`, `push.c`, `rotate.c`, and `reverse_rotate.c` for the allowed primitive operations
- `sort.c` and `sort_case.c` for higher-level strategy choices
- `terminator.c` for controlled exits and cleanup

That separation is useful because the project is easy to drown in branchy logic if parsing, operations, and strategy all mix together.

## Architecture / Design choices

One design choice I like in this kind of project is treating primitive operations as a small language. If those operations are reliable, the strategy layer gets room to focus on “when” and “why” instead of re-implementing mutation details everywhere.

Another important split is parsing in stages. The presence of `parse_step_1.c` and `parse_step_2.c` suggests a deliberate effort to keep validation from collapsing into one oversized function.

## Hard parts

The hard part is the tradeoff between cleanliness and the score target. A solution can be very readable and still perform badly if it emits too many moves. A solution can also become too clever too early and turn debugging into guesswork.

## Bugs / Mistakes

This kind of project usually punishes small mistakes:

- duplicate or invalid input handling
- inconsistent stack state after rotations
- strategy branches that work for one size band and fall apart for another

The more optimized the strategy becomes, the more valuable it is to keep the primitive operations boring and predictable.

## What I learned

`push_swap` is a good reminder that “algorithm” and “API contract” are inseparable. The move set becomes the API, and the strategy succeeds only if it respects that API consistently.

## If I rebuilt it now

I would document the strategy bands more aggressively: what changes for tiny inputs, medium inputs, and large inputs, and what metric I use to decide whether a refactor is actually better.

## Links

- repository: [justini0715/push_swap](https://github.com/justini0715/push_swap)
