# IMAGES — Selection Manifest & Pipeline

Robert's Squarespace gallery holds ~135 real job photos — exactly the raw
material Rule 26/29 demands (real work, no stock, no AI). They currently
have junk filenames (`1000003929.jpg`) and zero alt text; this pipeline
fixes both. **The photos could not be visually graded in the build
environment**, so the shortlist below is chosen on the best available
signals (Robert's own flagship picks + newest uploads). A 10-minute visual
pass by Bob (or Robert) finalizes each slot before launch.

## Slots to fill (in priority order)

| Slot | Requirement | Target file (in /public) | Alt text pattern |
|---|---|---|---|
| Hero (homepage) | Landscape, action or hero tree shot, crew/equipment visible, sharp | `hazardous-tree-removal-pasadena-tx-hero.webp` | "Gulf Coast Tree Removal crew rigging down a large [species] over a Pasadena home" |
| OG / social share | 1200×630 landscape crop of the hero or best single shot | `og-image.webp` | (og images take no alt) |
| About page | Robert and/or crew on the job (real people, real gear) | `robert-isa-certified-arborist-pasadena.webp` | "Robert, ISA-Certified Arborist TX-5075A, [what he's doing in the photo]" |
| Per-project (5 drafts) | 2–4 photos matching each documented job in `src/content/projects/_DRAFT-*.md` | `[service]-pasadena-[detail].webp` | Specific: what's happening, species, equipment |
| Service pages (optional pass 2) | 1 relevant photo per key service page body | `[service-slug]-pasadena-tx.webp` | Specific per photo |

## Already delivered (this build)

- `/public/isa-certified-arborist-logo.webp` (283×480, 15 KB) — proof-band
  badge, linked to ISA's verification tool.
- `/public/robert-ebbecke-isa-certified-arborist-certificate-tx-5075a.webp`
  (1400×1089, 54 KB) — About-page credential figure with verify link.
  Shows expiry 30 Jun 2027 — replace at renewal.

## Shortlisted candidates

**Hero candidates** (Robert's current homepage hero first, then newest uploads):
- `1000003929.jpg` — his existing homepage hero (his own #1 pick)
- `1000006652.jpg`, `1000006281.jpg`, `1000006254.jpg`, `1000006250.jpg`, `1000006240.jpg` — most recent uploads (newest gear/work)

**OG candidate:** `1000006141.jpg` — his current og:image (note: 813×1000 portrait; needs a landscape 1200×630 crop or swap to the chosen hero).

**Logo:** `1000002413.png` — the brand logo from his header (useful for favicon/social; the template header is intentionally text-brand).

**Selection protocol (10 min):** open https://www.gulfcoasttreeremoval.com/gallery, pick the winner per slot favoring: sharp focus → crew/equipment in frame → recognizable Pasadena residential setting → dramatic tree scale. Then match photos to the five `_DRAFT` projects (Robert can identify his own jobs instantly — the ash-tree set is already labeled on his Aug 2025 Facebook post).

## Pipeline

1. Edit the `IMAGES` map in `scripts/fetch-images.sh` (source ID → target name), then run it — it downloads the originals from the Squarespace CDN.
2. Convert to WebP + compress (script auto-converts if `cwebp` is installed; otherwise squoosh.app works fine). Keep the hero ≤ ~200 KB.
3. Drop files in `/public/`, then:
   - Hero: swap the gradient in `src/components/Hero.astro` per its header comment.
   - OG: set `seo.ogImage: '/og-image.webp'` in `src/config/business.ts`.
   - Projects: add the markdown images to each draft, write the alt text, rename the file to drop `_DRAFT-`.
