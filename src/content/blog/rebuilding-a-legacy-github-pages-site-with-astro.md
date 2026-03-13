---
title: "Rebuilding a legacy GitHub Pages site with Astro"
description: "Why I replaced a generated Hexo snapshot with a source-first Astro site for portfolio and blog work."
pubDate: 2026-03-13
category: "devlog"
tags: ["astro", "github-pages", "migration", "static-site"]
featured: true
draft: false
---

# Rebuilding a legacy GitHub Pages site with Astro

## What the starting point looked like

The existing `justini0715.github.io` repository was not a maintainable source repo. It was a deployed-output snapshot from a default Hexo site: generated HTML, bundled CSS and JavaScript, and even the starter `Hello World` post.

That matters because a portfolio/blog site needs to be easy to evolve. If the content source, build config, and page components are missing, every future update becomes more expensive than it should be.

## Why Astro was the right replacement

I wanted a site that stays static, fast, and easy to deploy on GitHub Pages while still supporting a long-running archive. Astro fits that well:

- static output works cleanly with GitHub Pages
- content collections keep blog posts and project entries structured
- page components stay simple when most of the site is content-first
- Markdown lets the 42 archive grow one post at a time without a CMS

## What changed in the rebuild

The first pass replaced the generated Hexo output with a source-first Astro layout:

- `src/pages/` for routes
- `src/content/` for blog posts and project entries
- `src/content.config.ts` for schema enforcement
- `docs/` for implementation plan, deployment runbook, and launch checklist
- GitHub Actions workflow for Pages deployment

I also kept the replacement safe by creating a recovery branch before deleting the old generated files.

## Design goal for the new site

The homepage should answer three questions quickly:

1. who is this site for?
2. what projects are worth opening first?
3. where can I read technical writing?

That is why the rebuild puts the portfolio, blog, and 42 archive under the same navigation instead of treating the blog as an afterthought.

## What I am optimizing for next

The next steps are less about “having a blog” and more about making the site useful on launch day:

- stronger project entries
- real technical posts
- 42 series navigation that works assignment-by-assignment
- deploy docs that keep the `github.io` fallback live before the custom domain cutover
