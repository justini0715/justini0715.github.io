# changwpa developer site

Astro-based personal developer site for the `justini0715.github.io` GitHub Pages user-site repository.

## What this site includes
- portfolio-first homepage
- about page with focus/stack summary
- structured projects page backed by Markdown content
- technical blog with content collections
- 42 assignment series posts with previous/next flow
- GitHub Pages deployment workflow
- custom-domain readiness for `changwpa.kro.kr`

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Content model
- `src/content/projects/*.md` — project cards used on home and `/projects`
- `src/content/blog/*.{md,mdx}` — general technical posts used on `/blog` and `/blog/[slug]`
- `src/content/forty-two/*.{md,mdx}` — 42 posts used on `/42` and `/42/[slug]`
- `src/content.config.ts` — collection schema for categories, tags, series metadata, and project metadata

## Repository structure
- `src/pages/` — route files
- `src/components/` — shared UI building blocks
- `src/data/site.ts` — site metadata + copy constants
- `docs/architecture/implementation-plan.md` — phase-by-phase implementation log
- `docs/runbooks/deployment.md` — Pages/custom-domain deployment runbook
- `docs/checklists/launch-checklist.md` — launch and cutover checklist
- `public/CNAME.example` — custom-domain marker file to copy from during cutover


## Editing workflow
- create or edit routes directly in `src/pages/`
- create or edit content directly in `src/content/blog`, `src/content/forty-two`, and `src/content/projects`
- see `docs/runbooks/사이트-수정-실전-메뉴얼.md` for the practical editing manual


## Deployment notes
- `astro.config.mjs` defaults `site` to `https://justini0715.github.io` so the fallback GitHub Pages URL stays correct before the custom domain is connected.
- `.github/workflows/deploy.yml` follows the official Astro GitHub Pages workflow pattern.
- The repository name already matches the special `username.github.io` pattern, so no Astro `base` value is needed.
- Custom-domain cutover steps are documented in `docs/runbooks/deployment.md`.

## Editing notes
- This repo now uses direct file-based editing only.
- Routes live in `src/pages/`.
- Content lives in `src/content/projects/`, `src/content/blog/`, and `src/content/forty-two/`.
- See `docs/runbooks/사이트-수정-실전-메뉴얼.md` for the full editing manual.
