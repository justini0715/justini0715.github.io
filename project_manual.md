# changwpa.kro.kr Astro Blog + Portfolio Manual for Codex / OMX

> 목적: 이 문서는 Astro 기반의 **개인 개발 블로그 + 포트폴리오 사이트**를 처음부터 끝까지 구축하기 위한 실행 매뉴얼이다.
> 사람 브레인스토밍 문서가 아니라, **Codex/OMX 실행 source of truth**로 사용한다.

---

## 0. Source of Truth and Scope

### Primary source of truth
- This file

### Product type
- Astro static site

### Site goal
Build a polished personal website that combines:
- developer portfolio
- technical blog
- project showcase
- 42 assignment series posts
- custom domain readiness for `changwpa.kro.kr`
- GitHub Pages deployment

### Preferred repository target
- reuse and rebuild `justini0715/justini0715.github.io`

### Why this repository is preferred
- it already powers the user-site root URL
- fallback URL is simpler (`https://justini0715.github.io/`)
- custom domain migration is easier
- the currently served contents appear to be legacy built output rather than a source-first maintainable repo

### Initial deployment target
- GitHub Pages user site
- fallback URL: `https://justini0715.github.io/`
- desired custom domain: `https://changwpa.kro.kr`

### Future domain options
- `changwpa.dev`
- `iostream.dev`

### Brownfield reference sources for content
- existing user site repo: `justini0715/justini0715.github.io`
- local 42 workspace: `/home/iostream/Desktop/42-repo-workspace`
- optional old planning note: `/home/iostream/Desktop/42_portfolio_manual.md`

### Non-goals for first full pass
- SSR server runtime
- comments system
- backend database
- login/account system
- heavy animations
- CMS dependency unless clearly justified

---

## 1. Product Direction

This site must not feel like a stock blog starter.
It must feel like a real personal developer site.

The final site should be:
- modern
- readable
- fast
- mobile-friendly
- useful both as a portfolio and a writing home
- easy to maintain with Markdown/MDX content
- suitable for long-term accumulation of 42 and non-42 technical posts

The homepage should answer these immediately:
1. who is this person?
2. what projects has this person built?
3. where can I read technical writing?

---

## 2. Preferred Stack

### Required
- Astro
- static output
- GitHub Pages deployment
- Markdown or MDX for posts/content

### Strongly preferred
- Astro content collections
- TypeScript where Astro defaults make it easy
- simple CSS or Tailwind, whichever keeps the site maintainable
- dark mode if it does not add disproportionate complexity

### Avoid unless clearly needed
- React-heavy client code everywhere
- server adapters
- database-backed content
- unnecessary animation libraries
- overengineered CMS setup

---

## 3. Repository Strategy

### Preferred strategy
Rebuild the existing `justini0715.github.io` repo in place.

### How to treat the current contents
- inspect first
- preserve only what is actually useful
- if the current contents are mostly generated legacy output, replace them with a source-first Astro structure
- keep a recovery branch before replacing the old contents

### Required branching pattern
- do not work directly on `main`
- create fresh phase branches
- merge through PR after CI is green

---

## 4. Required Site Information Architecture

At minimum the site must contain:
- `/` home
- `/about`
- `/projects`
- `/blog`
- `/blog/[slug]`
- `404`

### Home
Must include:
- hero intro
- links to GitHub/contact
- featured projects
- recent posts
- clear navigation

### About
Must include:
- short biography
- interests/strengths
- current focus
- stack summary

### Projects
Must include:
- project cards/list
- title
- summary
- stack
- repo/demo/release links if available

### Blog
Must include:
- post index
- category/tag support if practical
- series support if practical
- readable post layout

### 42 content requirements
42 posts must be first-class, not an afterthought.
The site should support:
- 42 category
- series name or equivalent taxonomy
- 42-specific post template
- easy linking between related 42 posts

---

## 5. Content Strategy

The site must be useful on launch day, even before a huge number of posts exist.

### Minimum launch content
- homepage copy
- about page copy
- projects page with at least 3 meaningful entries
- at least 2 technical posts
- at least 2 posts or stubs from the 42 track, preferably backed by real project material

### Required content categories
- `42`
- `project`
- `devlog`
- `setup`
- `retrospective`

### 42 writing approach
Posts should feel like developer writeups, not assignment summaries pasted raw.
Each 42 post should explain:
- what the project is
- constraints
- what you implemented
- what was hard
- what you learned
- what you would improve now

---

## 6. Design Guidance

### Overall direction
- minimalist developer aesthetic
- portfolio-first homepage with strong blog access
- typography and spacing over flashy animation

### Desired qualities
- clean hero section
- readable blog layout
- project cards that look intentional
- clear mobile responsiveness
- obvious navigation

### Avoid
- generic starter-theme look
- too much motion
- low contrast
- bloated component stacks

---

## 7. Domain and Deployment Requirements

### Must support
- GitHub Pages default URL (`justini0715.github.io`)
- custom domain via `CNAME`
- `changwpa.kro.kr` as initial custom domain target

### Deployment expectation
- automatic GitHub Actions deploy on `main`
- static build output compatible with Pages
- explicit DNS instructions for custom domain setup

### Important stop condition
If domain registrar login or DNS editing is needed, stop and report the exact records the user must enter.

---

## 8. Official Phase Order

Do not skip phases.
Each phase must pass verification before moving on.

### Phase 1 — Foundation
Goal:
- create the Astro site scaffold inside the target repo

Must include:
- Astro setup
- repo cleanup or reconstruction plan for existing user-site repo
- `README.md`
- `AGENTS.md`
- `project_manual.md`
- `docs/architecture/implementation-plan.md`
- layout/routing scaffold
- GitHub Pages deployment skeleton

Done when:
- site builds locally
- Astro routes resolve
- deployment path is wired in principle

### Phase 2 — Portfolio Structure
Goal:
- make the home/about/projects experience coherent

Must include:
- homepage
- about page
- projects page
- navigation/header/footer
- responsive layout

Done when:
- site feels like a personal site, not a starter shell

### Phase 3 — Blog System
Goal:
- make the writing flow and post reading experience strong

Must include:
- content collections
- blog index
- post pages
- starter posts
- 42 series taxonomy or equivalent structure
- code block readability

Done when:
- at least 2 posts render correctly
- 42 content strategy is represented in the site structure

### Phase 4 — Polish and Deployment
Goal:
- make it ready for public launch

Must include:
- SEO basics
- 404 page
- final visual polish
- `CNAME` readiness
- deploy workflow verification
- launch docs/checklists

Done when:
- local build passes
- GitHub Pages deploy path is verified
- custom domain instructions are explicit

---

## 9. Required Final File/Doc Set

At minimum in the site repo:
- `README.md`
- `AGENTS.md`
- `project_manual.md`
- `docs/architecture/implementation-plan.md`
- `docs/runbooks/deployment.md`
- `docs/checklists/launch-checklist.md`
- content directories for posts/projects
- `public/CNAME` or equivalent when domain is ready

---

## 10. Verification Policy

### Minimum verification order
1. install sanity
2. local dev sanity
3. local build
4. route sanity
5. responsive content sanity
6. deployment workflow sanity
7. domain setup doc sanity

### Required commands by the end of the project
At minimum the site should provide equivalents of:
- install command
- local dev command
- local build command
- preview command

Typical Astro examples:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

Do not claim complete without fresh verification.

---

## 11. Stop Conditions

Stop and report only when one of these is required:
1. GitHub auth/login
2. domain registrar login
3. DNS record changes
4. destructive operation not already approved
5. paid external service setup requiring user decision

If blocked, report:
- what was completed
- what is blocked
- exact user action required

---

## 12. Reporting Format

### Progress Update
- Current phase:
- Branch:
- Completed:
- In progress:
- Blocked:
- Next:

### Final Phase Completion Report
- Phase:
- Branch:
- Deliverables:
- Verification commands:
- Verification results:
- Risks / limitations:
- User action required:
- Recommended next step:

---

## 13. Exact Prompt for a New Session

Use the stronger one-shot prompt in `docs/prompts/one-shot-build-prompt.md`.
