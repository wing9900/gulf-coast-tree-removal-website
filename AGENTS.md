# Instructions for AI coding agents

READ README.md IN FULL before creating, editing, or deleting anything in this repo — it is the complete operating manual: file map, frontmatter schemas, the two build workflows (new single-location vs established multi-area), content rules, and verification steps.

Non-negotiables (details and rationale in README §4–5):
- NAP/phone/hours exist ONLY in src/config/business.ts — never hardcode them elsewhere.
- Never add accordions, tabs, carousels, popups-on-load, client-side JS, or anything that hides content on first load.
- Filenames in src/content/ are URL slugs = target keywords. _-prefixed files are templates, not content.
- Every content page needs: required frontmatter (build enforces), reworded (never verbatim) PAA FAQs, 3–5 editorial links, ≥1 external validation link, genuinely local wording.
- After changes: `npm run build` must pass; verify against README §6. If deleted content still builds, clear node_modules/.astro.
