# Implementation Plan

## Project Summary
- Goal: Rebuild `justini0715.github.io` into an Astro static personal developer website with portfolio, blog, project showcase, and 42 series support.
- Target repository: `justini0715/justini0715.github.io`
- Deployment target: GitHub Pages user site (`https://justini0715.github.io/`)
- Domain target: `https://changwpa.kro.kr`

## Current Phase
- Phase: Phase 42 — 42 Cursus Circle Reframe
- Branch: `phase/42-cursus-circle-reorg`
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
16. Phase 16 — Layout / Component Split
17. Phase 17 — Route Compatibility Hardening
18. Phase 18 — Project / 42 Hub Enrichment
19. Phase 19 — Layout Chrome Differentiation
20. Phase 20 — Project Detail Routes
21. Phase 21 — Domain Article Differentiation
22. Phase 22 — Home Hub Scaffold
23. Phase 23 — Blog Article Differentiation
24. Phase 24 — Home Hub Features
25. Phase 25 — Projects Hub Features
26. Phase 26 — 42 / Blog Collection Split
27. Phase 27 — Mobile Nav & Header UX
28. Phase 28 — Responsive Shell & Profile Menu
29. Phase 29 — Dedicated Profile Page
30. Phase 30 — Real Profile Image
31. Phase 31 — Public IA Refresh
32. Phase 32 — Studio IA Alignment
33. Phase 33 — Profile Avatar Shape
34. Phase 34 — Theme / Typography / Shared Shell
35. Phase 35 — Targeted Bento Layout
36. Phase 36 — Archive / Article Experience
37. Phase 37 — Performance / SEO / A11y Hardening
38. Phase 38 — Korean Editing Manual
39. Phase 39 — Studio Local Runtime Fix
40. Phase 40 — Remove Studio
41. Phase 41 — 42 Archive Survey Fill
42. Phase 42 — 42 Cursus Circle Reframe

## Current Phase Scope
- Reframe the `/42` archive around public 42 cursus circles instead of the custom systems/graphics/infra/cpp lane split.
- Update the visible 42 taxonomy, hub copy, detail metadata, and archive docs so they all use Circle 0~5 consistently.
- Preserve the repository-evidence-based 42 posts from phase 41 while changing only the grouping model.

## Current Phase Non-Scope
- Rewriting the actual 42 post bodies from scratch again.
- Reworking unrelated public routes outside the 42 archive and its supporting docs/components.
- Claiming a campus-specific cursus is universal where public materials differ; ambiguous placements should be called out as local/archive choices.

## Architecture Summary
- Astro static output with content collections for blog posts and projects.
- Source-first repository layout replacing generated legacy output while preserving a recovery branch.
- Pages-first deployment workflow that keeps the `github.io` fallback usable before custom-domain cutover.

## Content Strategy Summary
- 42 support: first-class blog taxonomy, reusable 42 post template, and series metadata for assignment-by-assignment publishing.
- project support: structured project entries backed by real repository evidence.
- blog taxonomy: `42`, `project`, `devlog`, `setup`, `retrospective`.

## Deliverables Checklist
- [x] 42 taxonomy changed from custom lanes to circle-based grouping
- [x] 42 hub copy and summary cards rewritten around Circle 0~5
- [x] 42 post metadata and same-circle navigation updated
- [x] docs/templates/manual examples updated to the new circle keys
- [x] Phase 42 verification completed

## Verification Plan
1. Run local type checks and a full static build after the circle reframe.
2. Confirm `/42` renders Circle 0~5 in order and that sample detail pages show `circle · Circle X` metadata.
3. Confirm the 42 docs/templates/manual examples use the new `42-circle-*` keys consistently.

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
- Started `phase/16-layout-component-split` immediately after the route split to stop the new route families from duplicating the same hero/aside patterns in each page file.
- Extracted `PublicShell` out of the old `MainLayout` and introduced role-based wrappers (`LandingLayout`, `HubLayout`, `ArchiveLayout`, `ArticleLayout`) so the route families now have clearer structural boundaries.
- Extracted shared route-building blocks (`SplitHero`, `UtilityListPanel`, `LandingEntryCard`) to reduce repeated landing/home/archive/article page markup and make later UI iteration cheaper.
- Started `phase/17-route-compatibility-hardening` immediately after the split because old `/blog/42-*` links would otherwise break once the dedicated `/42` route family went live.
- Added explicit legacy notice/redirect pages for the currently published 42 slugs under their old `/blog/...` paths, pointing readers to the new canonical `/42/...` routes.
- Updated sitemap filtering so those compatibility pages are not promoted as first-class archive pages.
- Started `phase/18-project-42-hub-enrichment` immediately after route compatibility hardening so the new `/projects` and `/42` routes feel like actual hubs instead of shallow archive pages.
- Added project hub summary metrics plus badge-grouped lanes so `/projects` now reads more like an overview / trajectory surface rather than only one flat grid.
- Added 42 hub summary metrics plus ordered series-group sections so `/42` now exposes both archive browsing and reading-order context.
- Added supporting content helpers for grouping projects by badge and 42 posts by series so the hub pages can keep their logic smaller and more reusable.
- Started `phase/19-layout-chrome-differentiation` so the new route-specific layouts stop behaving like thin wrappers and instead carry visible route-family context.
- Added a hub quick-link row to `HubLayout`, an archive switcher to `ArchiveLayout`, and a context/back bar to `ArticleLayout`.
- Started `phase/20-project-detail-routes` so the project hub can lead into full internal project dossiers instead of stopping at external repository links.
- Added `/projects/[slug]` routes, internal project case links from project cards, and a project-detail article-style reading surface with context metadata and repository/demo links.
- Started `phase/21-domain-article-differentiation` so project detail pages and 42 detail pages stop feeling like the same generic article type with only text changes.
- Added `ProjectMetaPanel` and `FortyTwoMetaPanel` so project cases and 42 entries now expose different metadata structures and context density.
- Started `phase/22-home-hub-scaffold` to make `/home` a more realistic personal hub shell before any user-specific functions exist.
- Added quick-access cards, a current-board summary, and a home scaffold panel so `/home` can grow into a richer personal control surface without another structural rewrite.
- Started `phase/23-blog-article-differentiation` so the general technical blog article family also gets its own article-side context instead of remaining the default leftover article shape.
- Added `TechnicalArticleMetaPanel` so project / 42 / general technical articles now each have their own article-side metadata pattern.
- Started `phase/24-home-hub-features` to turn `/home` from a structural shell into a more useful personal start page.
- Added static-first home feature data in `site.ts`, strengthened the current-board module, and introduced a “Next to update” block so `/home` now behaves more like a practical personal hub even without backend state.
- Started `phase/25-projects-hub-features` to make `/projects` read more like a status/materials hub instead of only an archive grid.
- Added project-level `state`, `focus`, `nextStep`, and `updatedDate` fields to the project content model and filled them into the existing project content files.
- Added state-based grouping to the `/projects` hub and expanded project detail context so visitors can see what is stable, what is archived, and what should be updated next.
- Started `phase/26-collection-split-prep` to physically separate 42 content from the general blog content source while keeping the public route split intact.
- Added a dedicated `fortyTwo` collection, moved the 42 markdown files into `src/content/forty-two/`, and updated helpers/routes so `/42/*` reads from the new collection while `/blog/*` reads only the general blog collection.
- Updated the writing studio so it can seed, load, preview, and save both `blog` and `forty-two` content families to the correct directories and public routes.
- Started `phase/27-mobile-nav-and-header-ux` after noticing that the mobile header still stacked navigation awkwardly and stayed fixed on screen while reading.
- Changed the mobile nav to a horizontal scrollable chip row and added a small scroll-direction-aware hide/show behavior for the header on mobile widths.
- Started `phase/26-collection-split-prep` to physically separate 42 content from the general blog content source while keeping the already-shipped route split intact.
- Added a dedicated `fortyTwo` content collection, moved the 42 markdown files into `src/content/forty-two/`, and updated shared content helpers so `/42/*` reads from the new collection while `/blog/*` reads from the general blog collection only.
- Aligned the local writing studio to the split content model by teaching it to seed, load, preview, and save both `blog` and `forty-two` content families safely.
- Started `phase/22-home-hub-scaffold` to make `/home` a more realistic personal hub shell before any user-specific functions exist.
- Added quick-access cards, a current board summary, and a home scaffold panel so `/home` can evolve into a richer personal control surface without another structural rewrite.
- Started `phase/21-domain-article-differentiation` so project detail pages and 42 detail pages stop looking like the same generic article type with only text changes.
- Added `ProjectMetaPanel` and `FortyTwoMetaPanel` so project cases and 42 entries now expose different metadata structures and context density.
- Kept the general technical blog article surface unchanged while making project and 42 article families more distinct.

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
- `npm run check` after phase-16 layout/component split → success (`tsc --noEmit`).
- `npm run build` after phase-16 layout/component split → success; built `/`, `/home`, `/projects`, `/42`, `/42/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `404`, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-16 layout/component split → 0 errors, 0 warnings.
- `find src/layouts -maxdepth 1 -type f` after phase-16 → confirmed `PublicShell`, `LandingLayout`, `HubLayout`, `ArchiveLayout`, and `ArticleLayout` now exist alongside `MainLayout`.
- `grep dist/index.html dist/home/index.html dist/42/index.html dist/blog/index.html` after phase-16 → confirmed landing/home/archive routes still render their intended split surfaces after component extraction.
- `grep dist/studio/index.html` after phase-16 layout/component split → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-17 compatibility hardening → success (`tsc --noEmit`).
- `npm run build` after phase-17 compatibility hardening → success; built the full split route set plus `dist/blog/42-push-swap/index.html` and `dist/blog/42-philosopher/index.html` compatibility pages.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-17 compatibility hardening → 0 errors, 0 warnings.
- `grep dist/blog/42-push-swap/index.html dist/blog/42-philosopher/index.html` after phase-17 → confirmed both legacy pages render redirect/notice surfaces pointing to the new `/42/...` routes.
- `grep dist/studio/index.html` after phase-17 compatibility hardening → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-18 hub enrichment → success (`tsc --noEmit`).
- `npm run build` after phase-18 hub enrichment → success; rebuilt the full split route set plus the existing compatibility pages and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-18 hub enrichment → 0 errors, 0 warnings.
- `grep dist/projects/index.html` after phase-18 → confirmed project hub summary metrics and grouped project lanes render in the built output.
- `grep dist/42/index.html` after phase-18 → confirmed 42 hub summary metrics and ordered reading-lane sections render in the built output.
- `grep dist/studio/index.html` after phase-18 hub enrichment → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-19 layout chrome differentiation → success (`tsc --noEmit`).
- `npm run build` after phase-19 layout chrome differentiation → success; rebuilt the full split route set plus the compatibility pages and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-19 → 0 errors, 0 warnings.
- `grep dist/home/index.html dist/projects/index.html dist/42/index.html dist/blog/rebuilding-a-legacy-github-pages-site-with-astro/index.html dist/42/42-push-swap/index.html` after phase-19 → confirmed the new hub/archive/article chrome markers render in built output.
- `grep dist/studio/index.html` after phase-19 layout chrome differentiation → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-20 project detail routes → success (`tsc --noEmit`).
- `npm run build` after phase-20 project detail routes → success; built `/projects/[slug]` detail routes for every current project plus the existing split route set and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-20 project detail routes → 0 errors, 0 warnings.
- `find dist/projects -maxdepth 2 -type f` after phase-20 → confirmed project detail routes now build under `/projects/inception/`, `/projects/cub3d/`, `/projects/philosopher/`, and `/projects/push-swap/`.
- `grep dist/projects/index.html dist/projects/inception/index.html` after phase-20 → confirmed project cards now link to `Case detail →` and project detail pages expose `Project case` context with internal reading surfaces.
- `grep dist/studio/index.html` after phase-20 project detail routes → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-21 domain article differentiation → success (`tsc --noEmit`).
- `npm run build` after phase-21 domain article differentiation → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-21 → 0 errors, 0 warnings.
- `grep dist/projects/inception/index.html dist/42/42-push-swap/index.html` after phase-21 → confirmed project detail pages now render `Project context` metadata panels while 42 detail pages render richer `Entry context` chips including order/difficulty.
- `grep dist/studio/index.html` after phase-21 domain article differentiation → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-22 home hub scaffold → success (`tsc --noEmit`).
- `npm run build` after phase-22 home hub scaffold → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `grep dist/home/index.html` after phase-22 → confirmed `/home` now renders quick-access cards, current-board items, and a dedicated home scaffold panel.
- `grep dist/studio/index.html` after phase-22 home hub scaffold → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-23 blog article differentiation → success (`tsc --noEmit`).
- `npm run build` after phase-23 blog article differentiation → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-23 → 0 errors, 0 warnings.
- `grep dist/blog/rebuilding-a-legacy-github-pages-site-with-astro/index.html` after phase-23 → confirmed the general technical article route now renders its own `Entry context` panel and blog-specific reading kicker.
- `grep dist/studio/index.html` after phase-23 blog article differentiation → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-24 home hub features → success (`tsc --noEmit`).
- `npm run build` after phase-24 home hub features → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `grep dist/home/index.html` after phase-24 → confirmed `/home` now shows strengthened current-board values plus a `Next to update` section alongside the quick-access hub structure.
- `grep dist/studio/index.html` after phase-24 home hub features → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-25 projects hub features → success (`tsc --noEmit`).
- `npm run build` after phase-25 projects hub features → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-25 → 0 errors, 0 warnings.
- `grep dist/projects/index.html dist/projects/inception/index.html` after phase-25 → confirmed `/projects` now renders project-state grouping and project detail pages expose `state`, `focus`, `next step`, and `updated` metadata.
- `grep dist/studio/index.html` after phase-25 projects hub features → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-26 collection split → success (`tsc --noEmit`).
- `npm run build` after phase-26 collection split → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-26 → 0 errors, 0 warnings.
- `find src/content -maxdepth 2 -type f` after phase-26 → confirmed 42 markdown now lives under `src/content/forty-two/` while general notes remain in `src/content/blog/`.
- `find dist/42 dist/blog -maxdepth 2 -type f` after phase-26 → confirmed `/42/*` and `/blog/*` still build as expected, with legacy `/blog/42-*` compatibility pages preserved.
- source checks against `src/pages/studio.astro`, `src/components/WritingStudioApp.astro`, and `src/lib/studio/blogStudio.ts` after phase-26 → confirmed studio now points 42 content to `src/content/forty-two` and `/42/...` while keeping general notes on `src/content/blog` and `/blog/...`.
- `grep dist/studio/index.html` after phase-26 collection split → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-27 mobile nav/header UX → success (`tsc --noEmit`).
- `npm run build` after phase-27 mobile nav/header UX → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `grep src/components/SiteHeader.astro src/styles/global.css` after phase-27 → confirmed the new scroll-aware mobile header hook and horizontal nav chip behavior are present in source.
- `grep dist/studio/index.html` after phase-27 mobile nav/header UX → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-26 collection split → success (`tsc --noEmit`).
- `npm run build` after phase-26 collection split → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-26 → 0 errors, 0 warnings.
- `find src/content -maxdepth 2 -type f` after phase-26 → confirmed 42 markdown now lives under `src/content/forty-two/` while general notes remain in `src/content/blog/`.
- `find dist/42 dist/blog -maxdepth 2 -type f` after phase-26 → confirmed `/42/*` and `/blog/*` still build as expected, with legacy `/blog/42-*` compatibility pages preserved.
- source checks against `src/pages/studio.astro`, `src/components/WritingStudioApp.astro`, and `src/lib/studio/blogStudio.ts` after phase-26 → confirmed studio now points 42 content to `src/content/forty-two` and `/42/...` while keeping general notes on `src/content/blog` and `/blog/...`.
- `grep dist/studio/index.html` after phase-26 collection split → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-22 home hub scaffold → success (`tsc --noEmit`).
- `npm run build` after phase-22 home hub scaffold → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `grep dist/home/index.html` after phase-22 → confirmed `/home` now renders quick-access cards, current-board items, and a dedicated home scaffold panel.
- `grep dist/studio/index.html` after phase-22 home hub scaffold → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-23 blog article differentiation → success (`tsc --noEmit`).
- `npm run build` after phase-23 blog article differentiation → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-23 → 0 errors, 0 warnings.
- `grep dist/blog/rebuilding-a-legacy-github-pages-site-with-astro/index.html` after phase-23 → confirmed the general technical article route now renders its own `Entry context` panel and blog-specific reading kicker.
- `grep dist/studio/index.html` after phase-23 blog article differentiation → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-22 home hub scaffold → success (`tsc --noEmit`).
- `npm run build` after phase-22 home hub scaffold → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `grep dist/home/index.html` after phase-22 → confirmed `/home` now renders quick-access cards, current-board items, and a dedicated home scaffold panel.
- `grep dist/studio/index.html` after phase-22 home hub scaffold → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-21 domain article differentiation → success (`tsc --noEmit`).
- `npm run build` after phase-21 domain article differentiation → success; rebuilt the full split route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-21 → 0 errors, 0 warnings.
- `grep dist/projects/inception/index.html dist/42/42-push-swap/index.html` after phase-21 → confirmed project detail pages now render `Project context` metadata panels while 42 detail pages render richer `Entry context` chips including order/difficulty.
- `grep dist/studio/index.html` after phase-21 domain article differentiation → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-19 → 0 errors, 0 warnings.
- `grep dist/home/index.html dist/projects/index.html dist/42/index.html dist/blog/rebuilding-a-legacy-github-pages-site-with-astro/index.html dist/42/42-push-swap/index.html` after phase-19 → confirmed the new hub/archive/article chrome markers render in built output.
- `grep dist/studio/index.html` after phase-19 layout chrome differentiation → production output still contains the locked `/studio` notice and excludes the active editor markers.
- `npm run check` after phase-20 project detail routes → success (`tsc --noEmit`).
- `npm run build` after phase-20 project detail routes → success; built `/projects/[slug]` detail routes for every current project plus the existing split route set and `/studio`.
- `npx tsc --noEmit --project tsconfig.json` via LSP diagnostics after phase-20 project detail routes → 0 errors, 0 warnings.
- `find dist/projects -maxdepth 2 -type f` after phase-20 → confirmed project detail routes now build under `/projects/inception/`, `/projects/cub3d/`, `/projects/philosopher/`, and `/projects/push-swap/`.
- `grep dist/projects/index.html dist/projects/inception/index.html` after phase-20 → confirmed project cards now link to `Case detail →` and project detail pages expose `Project case` context with internal reading surfaces.
- `grep dist/studio/index.html` after phase-20 project detail routes → production output still contains the locked `/studio` notice and excludes the active editor markers.
- Started `phase/28-header-profile-popover` from the verified merged `main` state after the phase-27 mobile/header work was live.
- Removed the redundant hub/archive utility bars from hub/archive layouts so the global navbar remains the single primary route switcher.
- Replaced the header GitHub CTA with a right-aligned avatar trigger, a contrasting profile popover card, and a new static avatar asset that keeps the profile affordance consistent across all public routes.
- Tightened the shared shell CSS with page-level horizontal overflow clamping, additional `min-width: 0` safeguards on grid children, and smaller mobile brand/header adjustments to stop narrow screens from drifting sideways.
- `npm run check` after phase-28 responsive shell/profile menu → success (`tsc --noEmit`).
- `npm run build` after phase-28 responsive shell/profile menu → success; rebuilt the full public route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --pretty false --project tsconfig.json` via LSP diagnostics after phase-28 → 0 errors, 0 warnings.
- `rg -n "Hub links|Archive switcher" dist -g '*.html'` after phase-28 → no matches; confirmed the redundant utility bars are gone from built output.
- `rg -n "profile-menu|Detailed bio|profile-avatar" dist -g '*.html'` after phase-28 → confirmed the avatar-triggered profile card renders across the built public routes.
- `rg -n "overflow-x:hidden|overflow-x:clip|profile-menu__popover|site-nav__tools" dist/_astro -g '*.css'` after phase-28 → confirmed the generated CSS now clamps page-level overflow and includes the new profile/header rules.
- `grep dist/studio/index.html` after phase-28 responsive shell/profile menu → production output still contains the locked `/studio` notice and excludes the active editor markers.
- Started `phase/29-profile-page-route` from the merged `main` state after the phase-28 profile popover went live.
- Removed the header popover interaction and turned the right-edge avatar into a stable direct link to `/about`, eliminating the mobile scroll/popover conflict.
- Reworked `/about` into the actual profile destination with a large contrasted profile card, expanded bio copy, current lanes, highlights, and direct route links.
- Removed the obsolete `ProfileMenu.astro` component and the old popover-only CSS rules, keeping the simplified responsive shell intact.
- `npm run check` after phase-29 dedicated profile page → success (`tsc --noEmit`).
- `npm run build` after phase-29 dedicated profile page → success; rebuilt the full public route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --pretty false --project tsconfig.json` via LSP diagnostics after phase-29 → 0 errors, 0 warnings.
- `rg -n "site-profile-link|profile-page-card|Open profile page" dist -g '*.html'` after phase-29 → confirmed public routes now use a direct avatar link and `/about` renders the dedicated profile-card layout.
- `rg -n "profile-menu" dist/_astro -g '*.css'` after phase-29 → no matches; confirmed the old popover styles are gone from generated assets.
- `grep dist/studio/index.html` after phase-29 dedicated profile page → production output still contains the locked `/studio` notice and excludes the active editor markers.

## Known Blockers / User-Action-Required Items
- GitHub push/PR and Pages settings updates will require the user's GitHub auth later.
- Custom domain DNS changes must wait until the end and will require registrar/DNS access.

## Next Phase Preview
- After hardening, the next likely follow-up is deeper tag/project authoring utilities, not backend infrastructure.
- Started `phase/30-profile-photo` from merged `main` after the dedicated profile-page flow was already live.
- Swapped the active profile avatar reference from the temporary generated SVG to the user-provided `public/iostream.webp` image.
- Kept the same dedicated profile-page route and header-link behavior, changing only the actual image asset so the new photo shows everywhere the profile avatar is rendered.
- `npm run check` after phase-30 real profile image → success (`tsc --noEmit`).
- `npm run build` after phase-30 real profile image → success; rebuilt the full public route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --pretty false --project tsconfig.json` via LSP diagnostics after phase-30 → 0 errors, 0 warnings.
- `rg -n "iostream.webp" dist -g '*.html'` after phase-30 → confirmed representative built routes now reference the real profile image.
- `test -f dist/iostream.webp` after phase-30 → confirmed the chosen image is emitted in the static build output.
- `grep dist/studio/index.html` after phase-30 real profile image → production output still contains the locked `/studio` notice and excludes the active editor markers.
- Started `phase/31-public-ia-refresh` from the merged `main` state after the real profile image phase was live.
- Reduced the landing page to a pure showcase/gateway surface and trimmed the footer into a compact archive footer.
- Reworked `/home` into a true now-page hub with only current focus, one featured project, latest general posts, latest 42 posts, and next-to-update sections.
- Rebuilt `/projects`, `/42`, and `/blog` around clearer archive roles: selected work vs all projects, series/read-order vs recent 42 entries, and category chips + grouped archive sections for the general blog.
- Tightened the detail routes so project pages read as case studies, 42 entries keep series-first navigation, and general blog posts fall back to related posts when there is no series navigation.
- Added shared `MetaRow` and `TagChipList` components to standardize metadata and chip rendering across cards and article-side panels.
- `npm run check` after phase-31 public IA refresh → success (`tsc --noEmit`).
- `npm run build` after phase-31 public IA refresh → success; rebuilt the full public route set, project detail routes, compatibility pages, and `/studio`.
- `npx tsc --noEmit --pretty false --project tsconfig.json` via LSP diagnostics after phase-31 → 0 errors, 0 warnings.
- built-output checks against `/`, `/home`, `/projects`, `/projects/[slug]`, `/42`, `/42/[slug]`, `/blog`, `/blog/[slug]`, `/about`, and `/404` after phase-31 → confirmed the new gateway/now-page/archive/case-study section structures render as intended.
- `grep dist/studio/index.html` after phase-31 public IA refresh → production output still contains the locked `/studio` notice and excludes the active editor markers.
- Started `phase/32-studio-ia-alignment` from merged `main` after the public IA refresh was live.
- Reduced the studio top bar to the core now-state signals: folder/save mode, current document title, dirty/saved state, and the primary save action, while keeping library access in the same bar.
- Moved duplicate/download/restore into the document-settings drawer, simplified quick-insert controls to H2/list/quote/code block/link, and kept preview/settings/checks as the only right-side modes.
- Separated technical-post vs 42-post editing inside the form with a document-type selector, a tech-only category selector, and 42-only series/difficulty fields.
- Added `.mdx` seed/loading support and preserved original file extensions when reopening, saving, deleting, or downloading existing documents.
- Added unsupported-browser fallback behavior so non-Chromium browsers use Markdown download as the primary save path while folder connection stays hidden.
- `npm run check` after phase-32 studio IA alignment → success (`tsc --noEmit`).
- `npm run build` after phase-32 studio IA alignment → success; rebuilt the full public route set plus the locked production `/studio` page.
- `npx tsc --noEmit --pretty false --project tsconfig.json` via LSP diagnostics after phase-32 → 0 errors, 0 warnings.
- source and dev-route checks after phase-32 → confirmed `studio-current-document`, `studio-document-type`, `.mdx` support, and the reduced quick-insert toolbar exist in the local dev studio UI.
- `grep dist/studio/index.html` after phase-32 studio IA alignment → production output still contains only the locked `/studio` notice.
- Follow-up after phase-31 deploy: fixed the remaining `/42` read-order pluralization typo (`entryies` → `entries`) and re-verified the static build.

- Started `phase/33-profile-avatar-shape` after the deployed profile image revealed a mismatched rounded-rectangle box around the about-page avatar.
- Changed the large about-page avatar to a background-free circular treatment so the visible frame matches the image silhouette instead of a rounded rectangle.
- `npm run check` after phase-33 profile avatar shape → success (`tsc --noEmit`).
- `npm run build` after phase-33 profile avatar shape → success; rebuilt the public routes plus the locked production `/studio` page.

- Started `phase/34-theme-shell-modernization` from merged `main` before the route-level redesign work.
- Rebuilt the shared token system around dark-first adaptive variables, fluid type sizing, smoother transition timing, and reduced-motion handling.
- Swapped the shared public font stack to Pretendard + Inter while keeping IBM Plex Mono for metadata and code.
- Refined the sticky header, chips, cards, buttons, and shared surfaces toward a softer glassy shell with slightly deeper hover motion.
- `npm run check` after phase-34 theme/shell modernization → success (`tsc --noEmit`).
- `npm run build` after phase-34 theme/shell modernization → success; rebuilt the full public route set plus the locked production `/studio` page.

- Started `phase/35-targeted-bento-layout` from merged `main` after the shared theme/shell modernization was live.
- Added targeted Bento-style overview grids to the landing page, personal home, about page, and project index without changing the route map or content collections.
- Turned `/home` into a five-block now-page Bento composition, `/about` into a denser profile dossier, and `/projects` into a selected-work/state overview before the full grid.
- `npm run check` after phase-35 targeted Bento layout → success (`tsc --noEmit`).
- `npm run build` after phase-35 targeted Bento layout → success; rebuilt the full public route set plus the locked production `/studio` page.

- Started `phase/36-archive-article-modernization` from merged `main` after the targeted Bento layouts were live.
- Replaced card-heavy recent/archive sections on `/blog` and `/42` with denser archive rows and added a reusable archive list item component for text-first reading.
- Tightened `/projects/[slug]`, `/42/[slug]`, and `/blog/[slug]` with clearer hero metadata rows while preserving the side-context panels and related/prev-next flows.
- `npm run check` after phase-36 archive/article experience → success (`tsc --noEmit`).
- `npm run build` after phase-36 archive/article experience → success; rebuilt the full public route set plus the locked production `/studio` page.

- Started `phase/37-perf-seo-a11y-hardening` from merged `main` after the archive/article refinement was live.
- Added stronger shared head metadata (`referrer`, `format-detection`, `og:locale`, and `twitter:image:alt`) and improved accessibility labels on external GitHub/repository/demo links.
- Re-verified the refined public routes and kept production `/studio` locked after the final hardening pass.
- `npm run check` after phase-37 performance/SEO/a11y hardening → success (`tsc --noEmit`).
- `npm run build` after phase-37 performance/SEO/a11y hardening → success; rebuilt the full public route set plus the locked production `/studio` page.

- Started `phase/38-korean-editing-manual` from merged `main` after the redesign phases were fully deployed.
- Added `docs/runbooks/사이트-수정-실전-메뉴얼.md` as a detailed Korean manual covering routing, page creation, shared UI, content collections, Studio behavior, verification commands, Git workflow, and troubleshooting.
- Kept the phase docs-only so the site behavior itself does not change while future edits become much easier to perform safely.
- `git diff --check` after phase-38 Korean editing manual → success.
- `npm run check` after phase-41 42 archive survey fill → success (`tsc --noEmit`).
- `npm run build` after phase-41 42 archive survey fill → success; built the expanded `/42` route set including libft, get_next_line, ft_printf, born2beroot, pipex, push_swap, philosopher, minishell, fdf, cub3d, inception, webserv, cpp modules 00-04, and cpp module 05.
- built-output checks against `dist/42/index.html`, `dist/42/42-libft/index.html`, `dist/42/42-cub3d/index.html`, and `dist/42/42-cpp-module-05/index.html` → confirmed the new Korean archive entries and the updated 42 lane structure render in the static output.
- `npm run check` after phase-42 cursus circle reframe → success (`tsc --noEmit`).
- `npm run build` after phase-42 cursus circle reframe → success; rebuilt `/42` with Circle 0~5 grouping while preserving all expanded 42 detail routes.
- built-output checks against `dist/42/index.html`, `dist/42/42-libft/index.html`, and `dist/42/42-cpp-module-05/index.html` after phase-42 → confirmed the public copy now uses `Circle` labels, ordered circle groups, and same-circle metadata.

- Started `phase/39-studio-local-runtime-fix-v2` after the user reported that Studio buttons like save and folder connect did nothing in local dev.
- Found the root cause: the seed payload script in `WritingStudioApp.astro` was rendering the literal `{JSON.stringify(initialPosts)}` text instead of actual JSON, so `JSON.parse(...)` threw before any button listeners were attached.
- Switched the seed script to `set:html` with escaped JSON so the local Studio bootstraps correctly again.
- `npm run check` after phase-39 Studio runtime fix → success (`tsc --noEmit`).
- `npm run build` after phase-39 Studio runtime fix → success; rebuilt the public routes while keeping production `/studio` locked.
- local dev `/studio` source check after phase-39 → confirmed the `studio-seed` script now contains actual JSON content instead of a literal template expression.

- Started `phase/40-remove-studio` after the user explicitly decided to remove the Studio feature and rely on direct page/content editing instead.
- Deleted the `/studio` route, `WritingStudioApp.astro`, the studio parsing/saving helper, and the dedicated writing-studio runbook.
- Updated the public build config, README, and Korean editing manual to reflect the new direct file-based editing workflow.
- `npm run check` after phase-40 remove studio → success (`tsc --noEmit`).
- `npm run build` after phase-40 remove studio → success; rebuilt the public route set without `/studio`.

- Started `phase/41-42-archive-docs-fill` after the user asked for a full Korean survey of the local 42 workspace under `/home/iostream/Desktop/42-repo-workspace`.
- Audited the local 42 repositories, READMEs, comments, and visible code structure for libft, get_next_line, ft_printf, born2beroot, pipex, push_swap, philosopher, minishell, fdf, cub3d, inception, webserv, and the C++ module repositories.
- Expanded `docs/content/42-series-map.md` into a concrete Korean map covering 42 Core, Systems, Graphics, Infra, and C++ lanes, with explicit local survey paths and writing principles.
- Added Korean 42 archive entries for the newly surveyed projects and refreshed the existing push_swap / philosopher writeups so the full `/42` surface is backed by repository-evidence-based posts.
- Extended the visible 42 taxonomy with a new `42-cpp` lane so the public series overview matches the surveyed repository set.
- Started `phase/42-cursus-circle-reorg` after the user asked to throw away the custom 42 lane split and regroup the archive around the public 42 cursus circle model instead.
- Reframed the `/42` hub, 42 post metadata, and supporting docs from `core/systems/graphics/infra/cpp` lanes into `Circle 0` through `Circle 5`, while keeping the repository-evidence-based Korean writeups from phase 41 intact.
- Used public 42 cursus material as the baseline and treated ambiguous placements such as `fdf` as explicit local archive choices rather than pretending the public curriculum is perfectly uniform.
- Updated templates/manuals so future 42 entries use `42-circle-*` keys instead of the old custom lane keys.

