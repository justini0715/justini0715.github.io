# Deployment Runbook

## Target
- Primary launch URL: `https://justini0715.github.io/`
- Planned custom domain: `https://changwpa.kro.kr/`
- Hosting: GitHub Pages via GitHub Actions

## Implemented repo-side setup
- Astro static build (`npm run build`)
- preview command (`npm run preview`)
- deploy workflow at `.github/workflows/deploy.yml`
- canonical/sitemap/robots support via `site`, `@astrojs/sitemap`, `public/robots.txt`, and `BaseHead`
- `public/CNAME.example` as the ready-to-apply custom-domain marker

## Local verification commands
```bash
npm install
npm run check
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

## Route sanity checks during preview
```bash
curl --max-time 5 -fsS http://127.0.0.1:4321/
curl --max-time 5 -fsS http://127.0.0.1:4321/about
curl --max-time 5 -fsS http://127.0.0.1:4321/projects
curl --max-time 5 -fsS http://127.0.0.1:4321/blog
curl --max-time 5 -fsS http://127.0.0.1:4321/blog/42-push-swap
curl --max-time 5 -fsS http://127.0.0.1:4321/404
```

## GitHub Pages workflow setup
1. Push the repo contents and phase branches to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Merge the final branch into `main` only after CI/build is green.
6. Confirm the site loads at `https://justini0715.github.io/`.

## Why `base` is not configured
Astro’s GitHub Pages guide says `base` is usually needed for `https://<username>.github.io/<repo>`, but it can be skipped for repositories that already match the special `<username>.github.io` pattern. This repository is a user-site repo, so the site should stay rooted at `/`.

## Custom-domain cutover plan for `changwpa.kro.kr`
Keep the fallback GitHub Pages URL working first. Only do the steps below after `https://justini0715.github.io/` is confirmed working.

### Repo changes for cutover
1. Update `.github/workflows/deploy.yml` build env `SITE_URL` from `https://justini0715.github.io` to `https://changwpa.kro.kr`.
2. Copy `public/CNAME.example` to `public/CNAME` so the intended domain is tracked in the repo.
3. Commit and deploy those changes after DNS is ready.

> Note: GitHub’s current Pages docs say that for a custom GitHub Actions workflow, GitHub does not create or require a `CNAME` file and ignores an existing one. Astro’s GitHub Pages guide still recommends adding `public/CNAME`. This repo keeps `public/CNAME.example` as the explicit domain marker, but the authoritative switch is still GitHub Pages settings plus DNS.

### Exact DNS action the user must take
Because `changwpa.kro.kr` is a subdomain, GitHub’s Pages docs say to create a `CNAME` record that points the custom subdomain directly to the user site’s default domain.

Create this DNS record at the DNS provider for `kro.kr`:

- **Type:** `CNAME`
- **Host / Name:** `changwpa`
- **Value / Target:** `justini0715.github.io`
- **TTL:** provider default is fine

Do **not** point `changwpa.kro.kr` to another subdomain or use a wildcard record.

### Exact GitHub actions the user must take
1. **Optional but recommended for security:** verify the custom domain in **GitHub profile Settings → Pages**.
   - Add domain: `changwpa.kro.kr`
   - GitHub will show a TXT record challenge.
   - Add the TXT record exactly as GitHub provides it (host will follow the `_github-pages-challenge-justini0715...` pattern).
2. In the site repository, open **Settings → Pages**.
3. Under **Custom domain**, enter `changwpa.kro.kr` and save.
4. Wait for DNS propagation (GitHub docs say up to 24 hours).
5. When HTTPS becomes available, enable **Enforce HTTPS**.

## Post-cutover verification
```bash
dig changwpa.kro.kr +nostats +nocomments +nocmd
curl -I https://justini0715.github.io/
curl -I https://changwpa.kro.kr/
```

## Current blockers requiring user action
- GitHub authentication is required to push branches, open PRs, merge to `main`, and change Pages settings.
- Registrar/DNS access is required to create the `CNAME` record for `changwpa.kro.kr`.
- GitHub’s domain verification TXT value must be copied from the GitHub UI by the user at cutover time.
