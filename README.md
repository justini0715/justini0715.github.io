# changwpa developer site

Astro-based personal developer site for the `justini0715.github.io` GitHub Pages user-site repository.

## Goals
- portfolio
- technical blog
- project showcase
- 42 assignment series posts
- GitHub Pages deployment
- custom domain readiness for `changwpa.kro.kr`

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Structure
- `src/pages/` — routes for home, about, projects, blog, post pages, and 404
- `src/content/` — Markdown content for blog posts and project entries
- `src/content.config.ts` — content collection schema
- `docs/architecture/implementation-plan.md` — phase-by-phase implementation log
- `docs/runbooks/deployment.md` — Pages + custom domain runbook
- `docs/checklists/launch-checklist.md` — launch readiness checklist

## Status
This branch is rebuilding a legacy Hexo-generated site into a source-first Astro site. See `docs/architecture/implementation-plan.md` for current phase details.
