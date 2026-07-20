// ═══════════════════════════════════════════════════════════════════
// BUSINESS CONFIG — the single source of truth for the entire site.
//
// Every page pulls NAP, phone, hours, and schema data from THIS file,
// which is what mechanically guarantees Rule 12's consistency signals:
// the address and phone can never drift out of sync with the GBP
// because they only exist in one place.
//
// DUPLICATION STEP: this is the first file you edit for a new business.
// Copy every value CHARACTER-FOR-CHARACTER from the Google Business
// Profile. "St." vs "Street" mismatches cost trust with the algorithm.
// ═══════════════════════════════════════════════════════════════════

export const business = {
  // ── Identity ──────────────────────────────────────────────────────
  name: 'Gulf Coast Tree Removal',            // confirm exact casing against the GBP before launch
  brandLockup: ['Gulf Coast', 'Tree Removal'], // two-line header wordmark next to the logo
  // Primary GBP category — the #1 local ranking factor. Most specific
  // option available. Drives the homepage title tag + H1 formulas.
  primaryCategory: 'Tree Service',            // VERIFY on the GBP: most specific category, seasonal switch n/a

  // ── NAP (must match GBP character-for-character — Rule 12) ────────
  address: {
    street: '913 Crenshaw Rd',
    city: 'Pasadena',
    state: 'Texas',
    stateAbbr: 'TX',
    zip: '77504',
    country: 'US',
  },
  phone: '+12817572938',            // E.164 for tel: links + schema
  phoneDisplay: '(281) 757-2938',   // exactly as displayed on the GBP

  // ── Geo + service area ────────────────────────────────────────────
  geo: { lat: 29.6388129, lng: -95.1976134 },  // GBP pin (from the listing's own Maps embed)
  // Every town that gets a town page MUST also be listed here — this
  // feeds areaServed in LocalBusiness + Service schema, which is what
  // Google and AI assistants read to decide if you serve a searcher's town.
  serviceAreas: ['Pasadena', 'Deer Park', 'La Porte', 'South Houston'], // confirm with Robert

  // ── Hours (match GBP exactly — Rule 7: open-at-time-of-search is top-5) ──
  // days: schema.org day names. 24/7 answering (AI receptionist)? Extend
  // legitimately — SABs rank through every hour competitors are closed.
  hours: [
    // Mirrors the GBP as scraped July 2026. NOTE: GBP shows Tuesday closing
    // at 6 PM while every other weekday closes at 7. Ask Robert if that is
    // real. If not, fix the GBP FIRST, then make this match it exactly.
    { days: ['Monday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
    { days: ['Tuesday'], opens: '07:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '19:00' },
  ],

  // ── Google Business Profile hooks ─────────────────────────────────
  gbp: {
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.7909997695315!2d-95.1976134!3d29.638812899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640996ef4776047%3A0xdb69e7f6437edf01!2sGULF%20COAST%20TREE%20REMOVAL!5e0!3m2!1sen!2s!4v1740410487934!5m2!1sen!2s',
    profileUrl: 'https://maps.google.com/?cid=15810423011741196033',  // canonical Maps listing link
    ratingValue: 5.0,   // owner-confirmed live number
    reviewCount: 88,    // owner-confirmed live number
  },

  // ── Schema ────────────────────────────────────────────────────────
  // Most specific schema.org LocalBusiness subtype that applies
  // (e.g. 'HomeAndConstructionBusiness', 'Plumber', 'RoofingContractor',
  // 'Electrician', 'HVACBusiness'). Falls back to 'LocalBusiness'.
  schemaType: 'HomeAndConstructionBusiness', // no tree-specific subtype exists; this is the closest
  siteUrl: 'https://www.gulfcoasttreeremoval.com',   // must match astro.config.mjs `site`
  sameAs: [
    'https://www.facebook.com/profile.php?id=100084997745447',
    'https://www.yelp.com/biz/gulf-coast-tree-removal-pasadena',
  ],

  // ── SEO ───────────────────────────────────────────────────────────
  seo: {
    // Homepage title formula (Rule 17): [Primary category] + [City, ST] + [Brand]
    // is built automatically in src/pages/index.astro from the fields above.
    //
    // titleTail = the OFFENSIVE LONG-TITLE zone: keyword space past the
    // ~60-char display truncation that no human sees but Google reads.
    // Load with neighborhood names + topical variants, pipe-separated.
    // Leave '' to skip. e.g. 'Stump Grinding | Emergency Storm Cleanup | Pine Tree Removal | [Neighborhood 1] | [Neighborhood 2]'
    titleTail: 'Tree Removal | Stump Grinding | Emergency Storm Cleanup | Lot Clearing | Deer Park | La Porte | South Houston',
    // Social share image — path under /public (e.g. '/og-image.webp'),
    // 1200×630. Leave '' to skip.
    ogImage: '/images/og-gulf-coast-tree-removal-pasadena-tx.jpg', // 1200×630 JPEG — some platforms mishandle WebP in og:image
    homepageMetaDescription:
      'Hazardous tree removal in Pasadena, TX from an ISA Certified Arborist. Free estimates, free stump grinding with every removal, no money due up front.',
  },
} as const;

// Convenience strings used across templates
export const cityState = `${business.address.city}, ${business.address.stateAbbr}`;
export const telHref = `tel:${business.phone}`;
