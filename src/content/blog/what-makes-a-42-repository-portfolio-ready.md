---
title: "What makes a 42 repository portfolio-ready"
description: "A practical checklist for turning 42 project repositories into something other developers can actually evaluate."
pubDate: 2026-03-12
category: "setup"
tags: ["42", "documentation", "ci", "portfolio"]
featured: true
draft: false
---

# What makes a 42 repository portfolio-ready

## The problem with a pass-only repository

A repository can be good enough for submission and still be weak as a portfolio artifact. For a reviewer, missing context is friction:

- no clear README structure
- no repeatable verification command
- unclear release or submission snapshot
- undocumented testing story
- no indication of how changes should be reviewed

The result is that the code may be solid, but the repository does not help anyone see that quickly.

## The checklist I want each repo to satisfy

The strongest idea in the manual pack is simple: one repository should explain how it builds, how it is checked, and what state should be treated as the official submission snapshot.

That leads to a practical checklist:

- README with Overview / Build / Usage / Design / Testing / Quality / Versioning
- a single `scripts/ci.sh` command that captures build-and-test truth
- GitHub Actions calling that script instead of duplicating logic elsewhere
- a stable submission tag such as `v1.0-42-submission`
- a PR template and branch protection that keep `main` from drifting into a broken state

## Why `scripts/ci.sh` matters so much

I like the `scripts/ci.sh` pattern because it reduces explanation debt. Instead of documenting a workflow in three places, the repo can point to one script that says:

1. build
2. run the available checks
3. fail loudly if expectations are not met

That makes the GitHub Action smaller and the README easier to trust.

## The README should reduce reviewer effort

A portfolio README is not a place for inflated claims. It is a place to lower the cost of evaluation.

The reader should be able to answer these quickly:

- what does this project implement?
- how do I build it?
- how do I run it?
- what design choices matter?
- how was it validated?

If the repository cannot answer those, it feels unfinished even when the code compiles.

## Portfolio quality is mostly clarity

The point is not to imitate enterprise ceremony. The point is to make a student project legible:

- preserve the submission snapshot
- document the important decisions
- make verification runnable
- avoid forcing the reviewer to reverse-engineer the repo layout

That is the standard I want the 42 project entries on this site to reflect.
