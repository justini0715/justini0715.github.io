---
title: "42 - philosopher"
description: "A concurrency project where timing, monitoring, and synchronization are more important than making threads look busy."
pubDate: 2026-03-10
category: "42"
tags: ["42", "c", "threads", "philosopher"]
series: "42-systems"
seriesTitle: "42 Systems"
seriesOrder: 2
difficulty: "Concurrency and timing"
featured: false
draft: false
---

# 42 - philosopher

## What this project is

`philosopher` is one of the clearest introductions to concurrency failure modes. It looks small at first, but timing, shared state, and monitoring quickly become the real problem.

## Requirements / Constraints

- multiple philosophers share limited fork resources
- starvation and death detection depend on timing accuracy
- synchronization must be correct even when the output loop stays readable
- debugging needs better tooling than “it worked once on my machine”

## What I built

The repository structure shows a useful separation of responsibilities:

- `parse.c` and `init.c` for argument handling and setup
- `fork_handle.c` for resource coordination
- `monitor.c` for the observer logic that checks liveness constraints
- `philo_handler.c`, `philo_utils.c`, and `do_op.c` for the active philosopher lifecycle
- `ft_utils/` for a small set of support functions

That layout matters because concurrency code gets hard to reason about the moment setup, monitoring, and action loops become tangled.

## Architecture / Design choices

The monitoring layer is usually the center of the project. If the monitor is vague or delayed, the rest of the simulation becomes hard to trust. Separating it into its own file is the right instinct because it makes the liveness rules visible.

The other key choice is how fork ownership is modeled. Any ambiguity there tends to surface as deadlocks, hidden races, or output that lies about the actual state transitions.

## Hard parts

The project is difficult because the bugs are temporal, not just logical. A program can appear correct for several runs and still have timing windows that show up only under a different machine load or scheduling pattern.

## Bugs / Mistakes

This is exactly the kind of project where external tools become part of the workflow. The repository README already points to useful checks like:

- `valgrind --leak-check=full --show-leak-kinds=all`
- `valgrind --tool=helgrind`

That is a good sign because concurrency bugs rarely stay obvious from source inspection alone.

## What I learned

`philosopher` makes it obvious that good structure is part of correctness. Cleanly separated monitoring and resource-handling code is not just nice style; it is a survival tactic when timing bugs appear.

## If I rebuilt it now

I would document the lock-order strategy and death-detection timing assumptions right next to the implementation so the next refactor cannot silently invalidate them.

## Links

- repository: [justini0715/philosopher](https://github.com/justini0715/philosopher)
