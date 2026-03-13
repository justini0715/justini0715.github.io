# Launch Checklist

## Structure
- [x] home/about/projects/blog/post/404 routes exist
- [x] navigation works from a shared layout
- [x] featured projects are meaningful and repository-backed
- [x] at least 2 technical posts exist
- [x] at least 2 42-related posts or structured stubs exist

## Build / Preview
- [x] install command documented
- [x] local build passes
- [x] preview command documented
- [x] TypeScript diagnostics are clean
- [ ] GitHub Pages deploy workflow has run green on `main` (requires push + GitHub Actions)

## GitHub Pages readiness
- [x] workflow file follows the Astro GitHub Pages action pattern
- [x] `site` defaults to the fallback `https://justini0715.github.io`
- [x] repo name matches the special `username.github.io` pattern, so no `base` config is needed
- [ ] GitHub Pages Source is set to **GitHub Actions** in repository settings (user action)

## Domain readiness
- [x] fallback `github.io` URL remains the first launch target
- [x] `public/CNAME.example` documents the intended custom domain value
- [x] exact DNS `CNAME` target is documented (`changwpa` → `justini0715.github.io`)
- [ ] DNS `CNAME` record created at the DNS provider (user action)
- [ ] custom domain saved in GitHub Pages settings (user action)
- [ ] optional domain verification TXT record added and verified in GitHub profile Pages settings (user action)
- [ ] Enforce HTTPS enabled after DNS propagation (user action)

## Content quality
- [x] no placeholder lorem ipsum on launch-critical pages
- [x] about/projects/blog all feel coherent
- [x] 42 content is represented as a first-class series
- [x] project cards and posts are backed by real repo/manual evidence
