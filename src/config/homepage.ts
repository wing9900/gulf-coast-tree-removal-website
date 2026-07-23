// ═══════════════════════════════════════════════════════════════════
// HOMEPAGE COPY — the human-written content slots for the GBP landing
// page (Rule 13 blueprint). Edit per business. Structure lives in
// src/pages/index.astro; words live here.
// ═══════════════════════════════════════════════════════════════════

export const homepage = {
  hero: {
    // H1 formula (Rule 18): primary category + city + HOOK. Reworded from
    // the title tag, not copied — humans see this one, so spend the extra
    // words on a benefit, differentiator, or social proof.
    // e.g. "[City]'s Highest-Rated Tree Removal — 300+ Five-Star Reviews, Licensed & Insured"
    h1: "Pasadena Tree Services by an ISA Certified Arborist",
    benefits: ['30 Years of Experience', 'Free Estimates', 'Satisfaction Guaranteed'],
    pillText: 'Trusted by Your Neighbors',

    // Speaks to the visitor's desired OUTCOME and works in core services.

    ctaLabel: 'Get a Free Estimate',

    // Hero photo (Rule 21: static, single best real shot of the core
    // offering — Rule 26 filename + alt requirements). Variants are
    // pre-generated compressed WebP; sizes list = the real widths on disk.
    image: {
      src: '/images/tree-removal-crew-pasadena-tx.webp',
      // Art-directed portrait crop served to phones so nothing important
      // gets cover-cropped away (worker, chipper, branded truck all in frame)
      mobileSrc: '/images/tree-removal-crew-pasadena-tx-mobile.webp',
      srcset:
        '/images/tree-removal-crew-pasadena-tx-640w.webp 640w, ' +
        '/images/tree-removal-crew-pasadena-tx-960w.webp 960w, ' +
        '/images/tree-removal-crew-pasadena-tx.webp 1354w',
      alt: 'Gulf Coast Tree Removal crew cutting a felled pine into logs with the bucket truck and wood chipper staged on a residential Pasadena, TX street',
      width: 1354,
      height: 1020,
    },
  },

  // Opening paragraph (Rule 13 #5 + Rule 21): talks TO the visitor about
  // their situation and why to convert. States the USP. Banned openers:
  // "Welcome to…", "We were founded in…", leading with the business name.
  // Authorized intro H2 (desktop-polish brief, Change 2)
  introH2: 'Full-Service Tree Care in Pasadena, TX',

  openingParagraph:
    "When you need tree services, you shouldn't have to worry whether the company you're calling can do the job safely and efficiently. Every project here is handled by an ISA Certified Arborist with 30 years of tree care experience on the Gulf Coast, because that's what your property deserves. Technical removals, crown pruning, stump grinding, and storm cleanup are just a few examples of the services guided by the same certified expertise. Every job is completed to the industry standards set by the American National Standards Institute (ANSI) using professional equipment to ensure it's done right, and to your satisfaction, guaranteed.",

  // Why Choose Us (Rule 13 #6) — high on the page, never buried.
  // Static grid, no carousel (Rule 24). Specifics beat adjectives (Rule 22).
  // Card themes are pulled from what real reviewers actually praise
  // (punctuality, dealing with Robert directly, cleanup) plus the one
  // technical differentiator competitors can't claim (ANSI A300 work).
  whyChooseUs: [
    { title: 'A Certified Arborist on Every Job', text: 'Robert Ebbecke holds ISA credential TX-5075A. You get a certified arborist deciding what comes down and what can be saved, not a guess from a guy with a chainsaw.' },
    { title: 'You Deal With Robert, Start to Finish', text: 'The person who answers your call is the arborist who walks your property, writes your price, and runs the crew. Reviewers mention Robert by name because he is the one who shows up.' },
    { title: 'Work Done to the ANSI A300 Standard', text: 'Every cut lands at the branch collar. No topping, no climbing spikes in a tree that stays, never more than a quarter of the live canopy in a season. The same written standard cities and utilities require.' },
    { title: 'A Cleaner Yard Than We Found', text: 'Limbs chipped, wood hauled, sawdust raked, driveway blown off. Read the reviews and you will see the cleanup praised almost as often as the tree work itself.' },
  ],

  // Social-proof band (Rule 23): badges/credential names shown under the
  // hero next to the live rating + review count (pulled from business.ts).
  // Link each to its proof (press article, certification page) when filled.
  // Google reviewer avatars for the proof band. Renders only when
  // populated: NEVER invent reviewers the profile can't back up.
  // FILL-IN (2 minutes, real reviewers only):
  //  1. Open the Google listing (business.ts gbp.profileUrl) > Reviews.
  //  2. For 4-5 recent reviewers: tap the reviewer photo, save it, drop
  //     the file into /public/images/reviewers/ (any name).
  //  3. Add one entry per reviewer: { img: '/images/reviewers/file.jpg' }
  //     If a reviewer has no photo, use Google-style initials instead:
  //     { initials: 'JM', bg: '#7b1fa2' }
  googleReviewers: [
    { img: '/images/reviewers/reviewer-1.webp' },
    { img: '/images/reviewers/reviewer-2.webp' },
    { img: '/images/reviewers/reviewer-3.webp' },
    { img: '/images/reviewers/reviewer-4-couple.webp' },
    { img: '/images/reviewers/reviewer-5.webp' },
  ] as ReadonlyArray<{ img?: string; initials?: string; bg?: string }>,


  // Homepage FAQs (Rule 13 #10, Rule 30 pattern): GENERAL questions only —
  // service-specific FAQs live on their service pages. Reword PAA questions,
  // never copy verbatim. Answer briefly; editorial-link to a supporting
  // page for depth (HTML allowed in answers for exactly that).
  faqs: [
    {
      q: 'What does an estimate cost?',
      a: 'Nothing. Call or text (281) 757-2938, describe the tree, and you get a free on-site estimate with a firm price before any work starts.',
    },
    {
      q: 'Do I have to pay anything up front?',
      a: 'No. You pay when the job is complete and you are happy with the result. No deposits, no draws, no money down.',
    },
    {
      q: 'Is stump grinding included with a tree removal?',
      a: 'Yes. Every removal includes grinding the stump at no added cost, so you get your yard back instead of a stump to mow around.',
    },
  ],
} as const;
