# Deployment Runbook

## Target
- GitHub Pages user site
- custom domain target: `changwpa.kro.kr`

## Expected GitHub Pages behavior
- fallback URL should work first
- custom domain is layered on later

## DNS notes for custom domain
At the moment the site itself should remain usable on `github.io`.
When custom domain setup time comes, the session should stop and report:
- exact DNS record type
- exact DNS value
- whether `CNAME` file must be committed

## Deployment checklist
- main branch deploy workflow green
- site builds statically
- `404` works
- no obvious broken links
