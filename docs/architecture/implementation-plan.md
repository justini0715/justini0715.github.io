# Implementation Plan

## Project Summary
- Goal: Rebuild `justini0715.github.io` into an Astro static personal developer website with portfolio, blog, project showcase, and 42 series support.
- Target repository: `justini0715/justini0715.github.io`
- Deployment target: GitHub Pages user site (`https://justini0715.github.io/`)
- Domain target: `https://changwpa.kro.kr`

## Current Phase
- Phase: Phase 15 — Route / UI Separation
- Branch: `phase/15-route-ui-separation`
- Status: Complete

## Official Phase List
1. Phase 1 — Foundation
2. Phase 2 — Portfolio Structure
3. Phase 3 — Blog System
4. Phase 4 — Polish and Deployment
5. Phase 5 — Writing Studio
6. Phase 6 — Studio Hardening
7. Phase 7 — Studio Usability
8. Phase 8 — Studio Completion
9. Phase 9 — Studio UI Cleanup
10. Phase 10 — Studio UI Polish
11. Phase 11 — Studio Visual Polish
12. Phase 12 — Sitewide UI System Polish
13. Phase 13 — Content / Copy / SEO Polish
14. Phase 14 — Public Reading & Typography Polish
15. Phase 15 — Route / UI Separation

## Current Phase Scope
- Split the public front-end into clearer route-level jobs for landing, home, projects, 42, and general blog surfaces.
- Add a dedicated `/42` route family and stop treating 42 content as only a blog category in the public URL layer.
- Introduce a separate `/home` route so `/` can act as the strongest landing/showcase page.

## Current Phase Non-Scope
- Replacing the static content architecture with a hosted CMS.
- Adding external backend, database, or authentication.
- Building a full multi-user publishing product.
- Changing the underlying Markdown storage/file IO model.
- Reworking the already-polished studio beyond compatibility checks after global style changes.
- Rebuilding the public UI system again immediately after phase 12.
- Another large copy/SEO rewrite immediately after phase 13.
- Splitting the underlying content collection into separate physical `blog` and `forty-two` collections in this phase.

## Architecture Summary
- Astro static output with content collections for blog posts and projects.
- Source-first repository layout replacing generated legacy output while preserving a recovery branch.
- Pages-first deployment workflow that keeps the `github.io` fallback usable before custom-domain cutover.

## Content Strategy Summary
- 42 support: first-class blog taxonomy, reusable 42 post template, and series metadata for assignment-by-assignment publishing.
- project support: structured project entries backed by real repository evidence.
- blog taxonomy: `42`, `project`, `devlog`, `setup`, `retrospective`.

## Deliverables Checklist
- [x] `/` landing and `/home` overview split
- [x] dedicated `/42` and `/42/[slug]` public routes
- [x] `/blog` limited to non-42 technical content
- [x] navigation and route helpers aligned to the new public structure
- [x] Phase 15 verification completed

## Verification Plan
1. Run local build and type checks after the route split pass.
2. Verify `/`, `/home`, `/projects`, `/42`, `/42/[slug]`, `/blog`, and `/blog/[slug]` all render the intended content families.
3. Confirm 42 posts no longer appear in the main `/blog` archive.
4. Re-check `/studio` after any shared layout or routing helper changes for compatibility.
5. Confirm production `/studio` remains locked and the public routes remain static-output compatible.

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
- Started `phase/7-studio-usability` from the latest merged `main`.
- Hid the library and side panels by default, added explicit toggles, and made the center writing area the primary surface.
- Replaced draft/live wording with 공개/비공개/임시저장 semantics and removed some confusing default values in new post templates.
- Updated runbook text so it no longer hardcodes port `4321` and instead follows the actual localhost port shown by `npm run dev`.
- Started `phase/8-studio-completion` from the latest merged `main`.
- Reworked the top bar so 상태와 액션이 시각적으로 더 분리되도록 만들고, 버튼 이름을 더 직관적으로 바꿨다.
- Removed the always-visible meta strip, moved route/file details into settings, and simplified the default screen so the writing area dominates.
- Simplified the hero copy into a short action guide and reduced the amount of explanatory text on the page.
- Re-opened Phase 8 locally to finish the residual studio cleanup after the component-level lock removal patch left a stale localhost guard in the repo connection path.
- Removed the stale localhost guard from `WritingStudioApp.astro` so dev-mode repo connection can proceed again under the page-level `import.meta.env.DEV` gate.
- Cleaned the leftover mobile-only lock-screen CSS selector that became dead after the component-level lock markup was removed.
- Started `phase/9-studio-ui-cleanup` from the verified phase-8 branch after the user explicitly asked to proceed with a cleaner studio redesign.
- Planning direction for phase 9: `Night Desk / Manuscript` aesthetic, one anchored manuscript column, fewer always-visible controls, and drawer-like supporting surfaces for library/preview/settings.
- Compressed the `/studio` intro so dev mode reaches the tool faster while keeping the production lock guidance intact.
- Reworked the studio chrome into a calmer manuscript desk: compact top bar, `새 글 · 도구` menu, lighter tag disclosure, and cleaner `문서 설정` / `점검` naming.
- Turned the library into a drawer-like support surface and kept the editor canvas anchored as the dominant panel.
- Synced the writing-studio runbook with the new labels and default authoring flow.
- Started `phase/10-studio-ui-polish` from the verified phase-9 branch after the user asked to keep going.
- Phase-10 focus: collapse the remaining dev guidance into a smaller disclosure, make library/sidepanel dismissal feel more drawer-like, and reduce the always-visible formatting noise.
- Replaced the dev hero block with a compact expandable “로컬 열기 안내” note so the editor starts higher on the page.
- Added an overlay layer plus `Esc` dismissal so the library and contextual side drawer behave like temporary support surfaces instead of competing layout columns.
- Moved quick-insert formatting buttons behind a compact disclosure to reduce constant control noise above the manuscript area.
- Tightened the remaining labels and notes so the dev surface reads more like a writing desk than a dashboard.
- Started `phase/11-studio-visual-polish` from the verified phase-10 branch after the user asked to keep going again.
- Cleaned up the remaining English-heavy surface labels so the studio now reads more coherently in Korean (`원고 데스크`, `라이브러리`, `오른쪽 패널`, `원본 Markdown`, `시리즈`, `고급`, `주의 영역`, `점검`, `흐름`).
- Removed the now-dead reconnect button from the visible chrome and kept a single adaptive `폴더 연결 / 폴더 변경` action.
- Added a save-shortcut hint and tightened the final microcopy so the surface feels calmer without adding new controls.
- Started `phase/12-sitewide-ui-system-polish` after studio reached a sufficiently polished local state and the user explicitly asked to move on to site-wide UI work.
- Reworked the global design tokens and spacing rhythm in `src/styles/global.css` so the public site reads more like an editorial systems notebook and less like a generic dark starter.
- Upgraded shared shell components (`MainLayout`, `SiteHeader`, `SiteFooter`, `SectionTitle`) to introduce stronger route identity, more deliberate navigation tone, and clearer section hierarchy.
- Differentiated `PostCard` and `ProjectCard` so project work, writing, utility notes, and metadata no longer collapse into one repeated card treatment.
- Redesigned the public route intros across `/`, `/about`, `/projects`, `/blog`, `/blog/[slug]`, and `404` so each page type opens with a more distinct composition while staying in one visual system.
- Phase 12 stopped at a clean PR-ready local snapshot (`phase/12-sitewide-ui-system-polish` at `883e74b`) because actual push / PR / merge / deploy requires GitHub auth.
- Started `phase/13-content-copy-seo-polish` after the user asked to continue with content, copy, and SEO work following the PR-ready phase-12 snapshot.
- Tightened site-wide copy so the public routes talk more directly about developer portfolio work, 42 projects, systems programming, and technical writing instead of over-explaining the site structure.
- Improved metadata with stronger page-specific titles/descriptions plus reusable author and social-image fields in `BaseHead`.
- Added a default social preview asset (`public/og-default.svg`) so Open Graph and Twitter previews resolve to a concrete portfolio/blog image.
- Refined homepage, about, projects, blog, post, and 404 copy toward a calmer, more specific, less meta self-descriptive tone.
- Started `phase/14-public-reading-typography-polish` after the user asked to keep pushing on the visible reading pages and specifically called out typography as a weakness.
- Shifted the public reading system toward a cleaner technical sans/mono pairing and flatter surfaces so the main page, project pages, and article pages feel more static, precise, and less glossy.
- Tightened shared chrome labels (`systems notes · project logs · static publishing`, `GitHub ↗`, `Open note →`, `status · ...`) so metadata and navigation read more like a technical publication.
- Reworked the global spacing, radii, shadows, and prose surfaces in `global.css` so the visible reading routes feel quieter and more legible without touching the studio-specific local writing tool.
- Started `phase/15-route-ui-separation` after the user approved the route split plan and explicitly clarified distinct jobs for landing, home, projects, 42, and blog.
- Split `/` and `/home` so `/` now works as a stronger showcase landing page while `/home` becomes the personal overview hub with featured projects, recent technical notes, and recent 42 entries.
- Added a dedicated `/42` hub and `/42/[slug]` article route without splitting the underlying content collection yet; 42 routing is now derived from `category === '42'`.
- Limited `/blog` and `/blog/[slug]` to non-42 technical posts and updated shared post links/helpers so 42 entries route to `/42/...` instead of `/blog/...`.
- Updated shared navigation and route-class logic so the public shell now understands `/home`, `/42`, and the landing route as separate surfaces.

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
- `playwright screenshot --full-page http://127.0.0.1:4327/studio /tmp/studio-usability.png` → verified the cleaner default local layout with much larger editor area and optional side panels.
- `curl http://127.0.0.1:4326/studio` → confirmed the local studio now exposes `레포 연결`, `저장`, and the active editor rather than the production lock screen.
- `playwright screenshot --full-page http://127.0.0.1:4328/studio /tmp/studio-usability-2.png` → verified the less cluttered completion pass with larger dark writing area, clearer status/action grouping, and optional side panels.
- `grep "state.isLocalHost\\|isLocalHost\\|studio-locked-actions\\|studio-locked-shell\\|studio-locked-card" src/components/WritingStudioApp.astro` → no remaining stale localhost guard or component-level lock-screen leftovers.
- `npm run check` after the cleanup → success (`tsc --noEmit`).
- `npm run build` after the cleanup → success; rebuilt all public routes plus `/studio`.
- `grep dist/studio/index.html` after the cleanup → production output still contains the locked `/studio` notice and no editor markers.
- `npm run check` after phase-9 UI cleanup → success (`tsc --noEmit`).
- `npm run build` after phase-9 UI cleanup → success; rebuilt all public routes plus `/studio`.
- `npm run dev -- --host 127.0.0.1 --port 4347` outside the sandbox + `curl http://127.0.0.1:4347/studio` → confirmed dev `/studio` renders the new `Night desk` header, `라이브러리`, `문서 설정`, `점검`, and `새 글 · 도구` markers.
- `grep dist/studio/index.html` after phase-9 UI cleanup → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-10 polish → success (`tsc --noEmit`).
- `npm run build` after phase-10 polish → success; rebuilt all public routes plus `/studio`.
- `npm run dev -- --host 127.0.0.1 --port 4351` outside the sandbox + `curl http://127.0.0.1:4351/studio` → confirmed dev `/studio` renders the compact `로컬 열기 안내`, `Night desk`, `새 글 · 도구`, `빠른 삽입`, and `studio-overlay` markers.
- `grep dist/studio/index.html` after phase-10 polish → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-11 visual polish → success (`tsc --noEmit`).
- `npm run build` after phase-11 visual polish → success; rebuilt all public routes plus `/studio`.
- `npm run dev -- --host 127.0.0.1 --port 4354` outside the sandbox + `curl http://127.0.0.1:4354/studio` → confirmed dev `/studio` renders `로컬 열기 안내`, `원고 데스크`, `새 글 · 도구`, `빠른 삽입`, `오른쪽 패널`, and `원본 Markdown`.
- `grep dist/studio/index.html` after phase-11 visual polish → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-12 sitewide polish → success (`tsc --noEmit`).
- `npm run build` after phase-12 sitewide polish → success; rebuilt all public routes plus `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-12 sitewide polish → 0 errors, 0 warnings.
- `npm run dev -- --host 127.0.0.1 --port 4364` outside the sandbox + route curls → confirmed refreshed public-route markers such as `editorial systems notebook`, `About the notebook`, `Profile snapshot`, `Project directory`, and the updated project/post card language.
- `npm run dev -- --host 127.0.0.1 --port 4364` outside the sandbox + `curl http://127.0.0.1:4364/studio` → confirmed `/studio` still renders the compact local-only writing surface markers after the global CSS changes.
- `grep dist/studio/index.html` after phase-12 sitewide polish → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-13 copy/SEO polish → success (`tsc --noEmit`).
- `npm run build` after phase-13 copy/SEO polish → success; rebuilt all public routes plus `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-13 copy/SEO polish → 0 errors, 0 warnings.
- `grep dist/index.html dist/about/index.html dist/projects/index.html dist/blog/index.html` after phase-13 copy/SEO polish → confirmed page-specific descriptions plus `meta name="author"`, `og:image`, `og:image:alt`, and `twitter:image` render in built output.
- `curl http://127.0.0.1:4368/studio` against a local dev server after phase-13 copy/SEO polish → confirmed `/studio` still renders the compact local-only writing surface markers after shared metadata updates.
- `grep dist/studio/index.html` after phase-13 copy/SEO polish → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-14 typography polish → success (`tsc --noEmit`).
- `npm run build` after phase-14 typography polish → success; rebuilt all public routes plus `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-14 typography polish → 0 errors, 0 warnings.
- `npm run dev -- --host 127.0.0.1 --port 4368` outside the sandbox + `curl http://127.0.0.1:4368/studio` → confirmed `/studio` still renders the compact local-only writing surface markers after the shared reading/typography changes.
- `grep dist/index.html dist/about/index.html dist/projects/index.html dist/blog/index.html dist/blog/42-push-swap/index.html` after phase-14 typography polish → confirmed the new technical reading tone, card labels, and refined public metadata are present in built output.
- `grep dist/studio/index.html` after phase-14 typography polish → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-15 route split → success (`tsc --noEmit`).
- `npm run build` after phase-15 route split → success; built `/`, `/home`, `/projects`, `/42`, `/42/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `404`, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-15 route split → 0 errors, 0 warnings.
- `grep dist/index.html dist/home/index.html` after phase-15 route split → confirmed the new landing selection surface and the separate personal home hub.
- `grep dist/42/index.html dist/blog/index.html` after phase-15 route split → confirmed `/42` is its own hub and `/blog` points 42 readers to `/42` while listing only non-42 posts.
- `grep dist/studio/index.html` after phase-15 route split → production output still contains the locked `/studio` notice and excludes the active editor markers.

## Known Blockers / User-Action-Required Items
- GitHub push/PR and Pages settings updates will require the user's GitHub auth later.
- Custom domain DNS changes must wait until the end and will require registrar/DNS access.

## Next Phase Preview
- After hardening, the next likely follow-up is deeper tag/project authoring utilities, not backend infrastructure.
