# AGENTS.md

Follow `project_manual.md` as the execution source of truth.

Additional rules:
- Work phase-by-phase only.
- Do not work directly on `main` or `master`.
- Use a dedicated branch per phase.
- Prefer Astro static output unless a strong requirement forces SSR.
- Treat custom domain setup as a deployment phase concern, not a phase-1 blocker.
- Keep the site usable without the custom domain; `github.io` fallback must still work.
- Do not skip local verification.
- Stop and report if user login, registrar credentials, GitHub auth, or DNS edits are required.
- Update `docs/architecture/implementation-plan.md` before and during execution.
- Do not start the next phase unless explicitly instructed.
