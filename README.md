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
- `src/content/blog/*.md` — technical posts and 42 entries used on `/blog` and `/blog/[slug]`
- `src/content.config.ts` — collection schema for categories, tags, series metadata, and project metadata

## Repository structure
- `src/pages/` — route files
- `src/components/` — shared UI building blocks
- `src/data/site.ts` — site metadata + copy constants
- `docs/architecture/implementation-plan.md` — phase-by-phase implementation log
- `docs/runbooks/deployment.md` — Pages/custom-domain deployment runbook
- `docs/checklists/launch-checklist.md` — launch and cutover checklist
- `public/CNAME.example` — custom-domain marker file to copy from during cutover


## Writing Studio
- route: `/studio`
- purpose: personal-only writing UI for blog post CRUD without backend/auth
- recommended browser: Chrome / Edge / Brave desktop
- docs: `docs/runbooks/writing-studio.md`
- production behavior: deployed site shows only a locked notice; the full editor is included only in `npm run dev`

Typical flow:
```bash
npm run dev
```
Then open the localhost URL printed by `npm run dev`, add `/studio`, connect the repo folder, write/save the post, and finish with normal git commit/push.

## Deployment notes
- `astro.config.mjs` defaults `site` to `https://justini0715.github.io` so the fallback GitHub Pages URL stays correct before the custom domain is connected.
- `.github/workflows/deploy.yml` follows the official Astro GitHub Pages workflow pattern.
- The repository name already matches the special `username.github.io` pattern, so no Astro `base` value is needed.
- Custom-domain cutover steps are documented in `docs/runbooks/deployment.md`.

## Current local phase branches
- `recovery/legacy-site-20260313`
- `phase/1-foundation`
- `phase/2-portfolio-structure`
- `phase/3-blog-system`
- `phase/4-polish-deployment`
- `phase/5-writing-studio`
- `phase/6-studio-hardening`
