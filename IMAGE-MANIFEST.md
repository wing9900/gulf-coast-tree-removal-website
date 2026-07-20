# Image Manifest: Gulf Coast Tree Removal (Pasadena, TX)

All photos live in `public/images/`: compressed WebP, SEO filenames (Rule 26), served as-is by Astro (no build processing). Every image already carries its final alt text where placed. This manifest exists so the site-planning build can drop the same photos onto their matching **service pages** (per the kit: gallery photos also belong on the relevant service pages, where they build entity relevance).

## Currently placed

| Image | Placed at | Alt text in use |
|---|---|---|
| `tree-removal-crew-pasadena-tx.webp` (+ `-640w`, `-960w` variants) | **Homepage hero** (config: `homepage.ts → hero.image`) + Recent Work #1 | Crew cutting a felled pine into logs, bucket truck + chipper staged on a Pasadena street |
| `og-gulf-coast-tree-removal-pasadena-tx.jpg` | Social share image (`business.ts → seo.ogImage`) |: (1200×630 JPEG; some platforms mishandle WebP og:image) |
| `bucket-truck-pine-tree-removal-pasadena-tx.webp` | Recent Work #1 | Arborist in Altec bucket truck sectioning a pine beside a brick home |
| `tree-work-ahead-safety-setup-pasadena-tx.webp` | Recent Work #1 | Tree Work Ahead sign + cones protecting the work zone |
| `tree-climber-rigging-trunk-removal-pasadena-tx.webp` | Recent Work #2 | Roped climber rigging down trunk sections near power lines |
| `technical-tree-removal-near-power-lines-pasadena-tx.webp` | Recent Work #2 | Climber at the top of a tall spar beside power lines |
| `large-tree-removal-boom-truck-pasadena-tx.webp` | Recent Work #6 (boom dismantle that produced the logs) | Boom truck behind a large hardwood being dismantled |
| `emergency-storm-damage-tree-removal-pasadena-tx.webp` | Recent Work #3 | Grapple skid steer lifting a storm-fallen oak off a shed |
| `uprooted-tree-root-ball-removal-pasadena-tx.webp` | Recent Work #3 | Uprooted root ball chained for extraction |
| `skid-steer-log-cleanup-pasadena-tx.webp` | Recent Work #3 | Skid steer carrying a log during street-side cleanup |
| `large-stump-grinding-in-progress-pasadena-tx.webp` | Recent Work #4 | Bandit grinder working down a large stump + surface roots |
| `bandit-sg40-stump-grinder-pasadena-tx.webp` | Recent Work #4 | Bandit SG-40 tracked grinder in a fenced backyard |
| `large-tree-pruning-climber-pasadena-tx.webp` | Recent Work #5 | Climber pruning deadwood beside a two-story home |
| `tree-pruning-pine-canopy-pasadena-tx.webp` | Recent Work #5 | Arborist on lines in a tall pine canopy |
| `tree-trimming-over-fence-line-pasadena-tx.webp` | Recent Work #5 | Climber trimming limbs above a backyard fence line |
| `log-bucking-large-tree-removal-pasadena-tx.webp` | Recent Work #6 | Crew member bucking a felled trunk into sections |
| `log-removal-kubota-skid-steer-pasadena-tx.webp` | Recent Work #6 | Kubota SVL75-3 hauling a large oak log |
| `log-hauling-skid-steer-pasadena-tx.webp` | Recent Work #6 | Skid steer carrying a trunk section |
| `tree-debris-cleanup-wood-chipper-pasadena-tx.webp` | Recent Work #6 | Crew member feeding oak limbs into the chipper |
| `dead-tree-topping-climber-pasadena-tx.webp` | Recent Work #2 | Climber working a dead spar down limb by limb above a fence line |
| `crown-pruning-climbing-lines-pasadena-tx.webp` | Recent Work #5 | Arborist ascending climbing lines into a mature crown |
| `forestry-bucket-truck-boom-extended-pasadena-tx.webp` | About page | Bucket truck at full boom extension in tall pines |
| `isa-certified-arborist-logo.webp` | Social-proof band under the hero (links to ISA credential verification) | ISA Certified Arborist TX-5075A |
| `isa-certified-arborist-certificate-tx-5075a.webp` | About page, Who You're Hiring section | ISA certificate issued to Robert Ebbecke, credential TX-5075A |
| `tree-service-team-kubota-tractor-pasadena-tx.webp` | About page | Team member with Kubota tractor at the yard: **fill in real name/role in the figcaption** |
| `tree-service-truck-chipper-fleet-pasadena-tx.webp` | About page | Full rig: bucket truck + chip box + Bandit chipper |
| `bucket-truck-limb-removal-pasadena-tx.webp` | About page | Bucket work at sunrise |

## Service-page placements for the real build (site-planning skill)

When the 20–30 service pages get created, reuse these images in the page bodies (same files, same alt style: vary the wording, never repeat alt text verbatim per Rule 26):

- **tree-removal** → `tree-removal-crew-pasadena-tx.webp`, `large-tree-removal-boom-truck-pasadena-tx.webp`, `bucket-truck-pine-tree-removal-pasadena-tx.webp`
- **technical / crane-assisted / hazardous removal** → `technical-tree-removal-near-power-lines-pasadena-tx.webp`, `tree-climber-rigging-trunk-removal-pasadena-tx.webp`
- **emergency-storm-cleanup** → `emergency-storm-damage-tree-removal-pasadena-tx.webp`, `uprooted-tree-root-ball-removal-pasadena-tx.webp`, `tree-work-ahead-safety-setup-pasadena-tx.webp`
- **stump-grinding** → `large-stump-grinding-in-progress-pasadena-tx.webp`, `bandit-sg40-stump-grinder-pasadena-tx.webp`
- **tree-trimming / pruning / crown reduction** → all three pruning/trimming climbers
- **log & debris removal / lot clearing** → the three skid-steer log shots + chipper shot
- **GBP uploads:** every one of these also goes on the Google Business Profile (20+ photo target): upload the originals from the client's phone, not these compressed copies.

## Project entry slugs → service slugs (must match)

The six Recent Work entries reference these service slugs: `tree-removal`, `emergency-storm-cleanup`, `stump-grinding`, `tree-trimming`. **Use exactly these filenames when creating the service .md files** and the editorial links on /projects/ activate automatically (the page builds fine before then: the link block simply waits).

## Still needed from the client

- Original full-resolution camera files (these were pulled at web size; GBP + future hero swaps want 3000px+ originals).
- Real neighborhood/landmark names for each job: swap into project titles/descriptions for geographic relevance (Rule 31 style, never invented names).
- Name + role for the person in the tractor photo (About figcaption placeholder).
- The 484px `bucket_truck.webp` from earlier was **excluded**: below the quality floor at every placement.
- Three more files arrived as 243px thumbnails and were **excluded**: `large_tree_stump_grinding` (the big front-yard grind with the mulch field), `stump_grindings_clean-up`, and `work_truck`. These were saved from a photo-grid preview instead of the opened full-size photo. **The first two are worth chasing at full resolution**: the massive-grind shot upgrades Recent Work #4, and the leveled-yard shot pairs with it as a rare before/after (after-shots are scarce and convert).

## Brand assets (added)
- `gulf-coast-tree-removal-logo.webp`: header (home link) + footer
- `/favicon.png` + `/apple-touch-icon.png`: generated from the logo
- Google G mark: inline SVG in the proof band (standard reviews-on-Google usage)
