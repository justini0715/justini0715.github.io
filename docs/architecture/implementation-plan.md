# Implementation Plan

## Project Summary
- Goal: Rebuild `justini0715.github.io` into an Astro static personal developer website with portfolio, blog, project showcase, and 42 series support.
- Target repository: `justini0715/justini0715.github.io`
- Deployment target: GitHub Pages user site (`https://justini0715.github.io/`)
- Domain target: `https://changwpa.kro.kr`

## Current Phase
- Phase: Phase 6 — Studio Hardening
- Branch: `phase/6-studio-hardening`
- Status: Complete

## Official Phase List
1. Phase 1 — Foundation
2. Phase 2 — Portfolio Structure
3. Phase 3 — Blog System
4. Phase 4 — Polish and Deployment
5. Phase 5 — Writing Studio
6. Phase 6 — Studio Hardening

## Current Phase Scope
- Make the writing studio meaningfully local-only so the deployed site does not expose an active editor to the public.
- Redesign the writing experience to feel closer to a polished velog-like editor rather than a raw admin panel.
- Refine tag/editor interactions and update the documentation for the new local-only behavior.

## Current Phase Non-Scope
- Replacing the static content architecture with a hosted CMS.
- Adding external backend, database, or authentication.
- Building a full multi-user publishing product.

## Architecture Summary
- Astro static output with content collections for blog posts and projects.
- Source-first repository layout replacing generated legacy output while preserving a recovery branch.
- Pages-first deployment workflow that keeps the `github.io` fallback usable before custom-domain cutover.

## Content Strategy Summary
- 42 support: first-class blog taxonomy, reusable 42 post template, and series metadata for assignment-by-assignment publishing.
- project support: structured project entries backed by real repository evidence.
- blog taxonomy: `42`, `project`, `devlog`, `setup`, `retrospective`.

## Deliverables Checklist
- [x] Studio production exposure reduced to a local-only locked experience
- [x] Velog-inspired studio UX pass implemented
- [x] Tag/editor interaction flow improved
- [x] Documentation updated for the new local-only behavior
- [x] Phase 6 verification completed

## Verification Plan
1. Run local build and type checks after hardening the studio.
2. Verify `/studio` is usable on localhost but presents only a locked informational surface on production.
3. Confirm the refined editor UI, tag flow, and docs match the intended local-only workflow.

## Work Log
- Cloned the remote user-site repository into the writable workspace.
- Confirmed the current repo is legacy Hexo-generated output with a minimal README and generated HTML/CSS/JS assets.
- Created `recovery/legacy-site-20260313` and checked out `phase/1-foundation`.
- Seeded the required manual/docs files into the working branch.
- Replaced the generated Hexo output with an Astro v6 static scaffold, base layout, route skeleton, content-collection schema, global styles, and public assets.
- Installed Astro dependencies locally and verified the scaffold with `npm run build`, `npm run check`, output-route inspection, and project-wide TypeScript diagnostics.
- Branched `phase/2-portfolio-structure` from the verified foundation commit.
- Collected the launch-content roster from brownfield sources: featured projects should center on Inception, cub3d, philosopher, and push_swap.
- Added four repository-backed project entries sourced from the current 42 workspace remotes and README material.
- Updated the home, about, and projects pages to reflect a coherent portfolio-first experience with responsive content blocks.
- Branched `phase/3-blog-system` from the verified portfolio commit.
- Prepared the launch-post roster: one migration/devlog, one 42-repository-quality post, and two 42 systems-series entries for push_swap and philosopher.
- Added four launch posts to the blog collection: two technical posts plus two 42 systems-series posts.
- Updated the blog index and post template to show tags, category metadata, and previous/next series navigation.
- Branched `phase/4-polish-deployment` from the verified blog-system commit.
- Identified final-phase tasks: SEO polish, workflow alignment, preview verification, and explicit custom-domain/DNS runbook steps.
- Updated metadata handling for theme color, robots directives, canonical tags, and article pages.
- Aligned the deploy workflow with Astro’s current GitHub Pages action pattern and documented the user-site/no-`base` rule.
- Expanded the README, deployment runbook, and launch checklist with explicit local commands, GitHub Pages setup, and custom-domain cutover steps.
- Started `phase/5-writing-studio` from the merged `main` branch after the GitHub Pages launch was confirmed on the default domain.
- Chosen direction: no-backend personal writing studio built on top of the existing Markdown content structure rather than introducing a CMS.
- Added `src/pages/studio.astro` plus a large client-side writing UI component that handles local post CRUD, preview, tag reuse, and series helpers.
- Added `src/lib/studio/blogStudio.ts` for frontmatter parsing/serialization, validation, slug generation, simple preview rendering, and tag/series aggregation.
- Added `docs/runbooks/writing-studio.md` and README guidance so the new authoring flow is documented.
- Started `phase/6-studio-hardening` from the latest merged `main`.
- New goals: hide the active editor on the deployed site and raise the studio UI quality to a more product-like writing experience.
- Reworked the studio into a local-only “writing desk” with a locked production surface, a stronger editorial layout, grouped publish settings, and more curated tag flows.
- Excluded `/studio` from sitemap output and updated the writing-studio docs to reflect the new local-only behavior.
- Tightened the production story further by rendering the full editor only during `npm run dev`, while production builds output only the locked informational surface.
- Fixed the local dev runtime by overriding `tinyexec` to `1.0.4`, restoring `npm run dev` for the studio workflow.

## Verification Results
- `npm install -D astro @astrojs/sitemap @astrojs/check typescript` → dependencies installed successfully.
- `npm run build` → success; built `/`, `/about`, `/projects`, `/blog`, `404`, and `sitemap-index.xml`.
- `npm run check` → success (`tsc --noEmit`).
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics → 0 errors, 0 warnings.
- `npm run build` after portfolio updates → success; featured project content rendered into `/` and `/projects`.
- `grep` checks against `dist/index.html` and `dist/projects/index.html` → confirmed Inception, cub3d, philosopher, and push_swap content is present in built output.
- `npm run build` after blog updates → success; built all four blog post routes plus `/blog`.
- `grep` checks against `dist/blog/index.html` and `dist/blog/42-philosopher/index.html` → confirmed all launch post titles render and the 42 series navigation links philosopher back to push_swap.
- `npm run build` after polish/deployment updates → success; built `/`, `/about`, `/projects`, `/blog`, all four posts, `404`, and `sitemap-index.xml`.
- `npm run preview -- --host 127.0.0.1 --port 4321` (outside sandbox with telemetry disabled) → preview server started successfully.
- `curl http://127.0.0.1:4321/{,/about,/projects,/blog,/blog/42-push-swap,/404}` → all routes returned HTML with the expected page-specific metadata and content.
- `npm run check` after writing-studio implementation → success.
- `npm run build` after writing-studio implementation → success; built `/studio` in addition to the existing public routes.
- `grep dist/studio/index.html` → confirmed Writing Studio UI text, connect button, quick presets, tag library, and series helper are present in built output.
- `curl http://127.0.0.1:4321/studio` via preview → returned the expected Writing Studio HTML and metadata.
- `npm run check` after studio hardening → success.
- `npm run build` after studio hardening → success; `/studio` still builds cleanly.
- `grep dist/studio/index.html` → confirmed production HTML renders the locked local-only notice and keeps the active app hidden by default.
- `grep dist/sitemap*.xml` → confirmed `/studio` is excluded from sitemap output.
- `playwright screenshot http://127.0.0.1:4324/studio /tmp/studio-local-full.png` → confirmed localhost activates the polished editor surface instead of the locked screen.
- `npm ls tinyexec` → confirmed Astro now resolves `tinyexec@1.0.4`.
- `npm run dev -- --host 127.0.0.1 --port 4326` → localhost studio boots successfully again.
- `playwright screenshot --full-page http://127.0.0.1:4326/studio /tmp/studio-dev-final.png` → verified the localhost dev route shows the refined editor, not the locked production screen.
- `curl https://justini0715.github.io/studio/` → verified production contains the locked notice, with no `레포 연결`, no `id="studio-app"`, and no studio app bundle reference.

## Known Blockers / User-Action-Required Items
- GitHub push/PR and Pages settings updates will require the user's GitHub auth later.
- Custom domain DNS changes must wait until the end and will require registrar/DNS access.

## Next Phase Preview
- After hardening, the next likely follow-up is deeper tag/project authoring utilities, not backend infrastructure.
