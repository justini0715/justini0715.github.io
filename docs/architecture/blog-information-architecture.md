# Blog + Portfolio Information Architecture

## Top-level routes
- `/`
- `/home`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/42`
- `/42/[slug]`
- `/blog`
- `/blog/[slug]`
- `/404`

## Navigation model
Primary nav:
- Home
- Projects
- 42
- Blog
- About

Secondary links:
- GitHub
- profile image → `/about`

## Route roles
- `/` → 첫 방문자를 분기시키는 showcase / gateway
- `/home` → 현재 집중 중인 작업과 최근 업데이트를 모아두는 personal hub
- `/projects` → 프로젝트 상태 / 대표 작업 / 개별 case study 진입점
- `/42` → 42 전용 허브와 읽기 순서 아카이브
- `/blog` → 일반 기술 블로그와 개념 정리 archive

## Blog taxonomy
General blog categories:
- `project`
- `devlog`
- `setup`
- `retrospective`

Suggested metadata per post:
- title
- description
- pubDate
- updatedDate (optional)
- category
- tags
- draft

## 42 structure
42 글은 일반 blog와 분리해 `/42` 아래에서만 읽는다.

Each 42 post should support:
- project name
- circle group
- circle order
- difficulty / constraints
- lessons learned
- real repository evidence

Current 42 circle keys:
- `42-circle-0`
- `42-circle-1`
- `42-circle-2`
- `42-circle-3`
- `42-circle-4`
- `42-circle-5`

Recommended URL style:
- `/42/42-libft`
- `/42/42-ft-printf`
- `/42/42-minishell`
