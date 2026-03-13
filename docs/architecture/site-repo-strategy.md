# Site Repository Strategy

## Recommended Target
Use the existing GitHub user-site repository:
- `justini0715/justini0715.github.io`

## Why
- root Pages URL is already established
- custom domain migration is cleaner
- portfolio/blog is naturally a user-site concern
- the currently published contents appear to be legacy generated output, so rebuilding source-first is reasonable

## Execution Rule
Before replacing existing contents:
1. inspect the current repository
2. create a recovery branch
3. preserve only what is genuinely useful
4. rebuild the repo as an Astro source-first project

## Fallback Option
If the current user-site repo is irreparably messy, create a new Astro source branch first and migrate in controlled steps.
