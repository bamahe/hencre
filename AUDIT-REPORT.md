# HenCRE Monthly Site Health Audit
**Date:** 2026-08-01  
**Auditor:** Automated (Claude Code)  
**Build:** Next.js 16.2.7 | React 19.2.4 | 208 static pages

---

## Executive Summary

3 issues found and fixed (build errors, broken internal link, 17 blog posts missing from sitemap manifest). 2 advisory issues flagged. Build is clean, content is fresh, robots config is correct, all image refs are valid.

---

## 1. Build Test

**Status: FIXED ✅ (was broken)**

`npm run build` failed with errors in two newly added market pages.

**Root causes in `src/app/markets/flagler/page.tsx` and `src/app/markets/franklin/page.tsx`:**
- Named imports (`{ Hero }`, `{ CTASection }`, `{ SchemaOrg }`, `{ Breadcrumbs }`) used against default-export components
- Invalid `variant="primary"` prop passed to `CTASection` (no variant prop exists — component is black/white only)
- Raw HTML `class=` attribute in `franklin/page.tsx` instead of JSX `className=`

**Fixes applied:**
- Changed all 4 named imports to default imports in both pages
- Removed `variant="primary"` from both pages
- Changed `class=` to `className=` in franklin page

**Result:** Build passes cleanly — 208 static pages generated, 0 type errors.

---

## 2. Sitemap

**Status: FIXED ✅ (was incomplete)**

- **Sitemap total URLs:** 167 (pre-fix) → **184** (post-fix)
  - Core pages: 13
  - Service pages: 11
  - Property type pages: 6
  - Tier-1 market pages: 8
  - Insight articles: 8
  - Blog posts: 36 → **53** (after manifest fix)
  - Calculator pages: 5
  - Identity pages: 80

**Issue:** 17 blog post directories existed in `src/app/blog/` but were absent from `public/data/blog-manifest.json`. Because the sitemap reads exclusively from that manifest, these posts were invisible to search engines.

**Missing posts added to manifest:**
| Slug | Date |
|------|------|
| commercial-earnest-money-deposits-florida-investors | 2026-07-20 |
| florida-business-rent-tax-repeal-tampa-bay | 2026-07-30 |
| midtown-tampa-commercial-real-estate-2026 | 2026-07-29 |
| port-tampa-bay-expansion-industrial-cre-investors | 2026-07-26 |
| riverview-fl-commercial-real-estate-2026 | 2026-07-29 |
| st-petersburg-commercial-real-estate-2026 | 2026-07-20 |
| tampa-bay-data-center-cre-2026 | 2026-07-25 |
| tampa-bay-hospitality-hotel-cre-2026 | 2026-07-31 |
| tampa-bay-medical-office-real-estate-2026 | 2026-07-21 |
| tampa-bay-office-market-q2-2026 | 2026-07-20 |
| tampa-bay-residential-slowdown-cre-opportunity-2026 | 2026-07-19 |
| tampa-bay-senior-housing-cre-investment-2026 | 2026-07-22 |
| tampa-bay-small-bay-industrial-flex-2026 | 2026-07-27 |
| tampa-mall-redevelopment-mixed-use-2026 | 2026-07-21 |
| water-street-tampa-33-story-tower-downtown-cre-2026 | 2026-07-25 |
| wesley-chapel-commercial-real-estate-2026 | 2026-07-19 |
| ybor-city-commercial-real-estate-tampa-2026 | 2026-07-23 |

**Root cause:** Content engine publishes blog page files but does not always update `blog-manifest.json`. The manifest update step is likely missing from the auto-publish workflow. **Recommendation:** Add a manifest-sync step to the content engine pipeline.

---

## 3. Page Spot-Check (10 Pages)

**Status: PASS ✅**

Build generates 208 static pages successfully. All route directories verified. The following routes were spot-checked for presence and structure:

1. `/` (homepage)
2. `/markets/hillsborough`
3. `/markets/flagler` *(fixed)*
4. `/markets/franklin` *(fixed)*
5. `/services/tenant-representation`
6. `/commercial/office-space`
7. `/blog/ybor-city-commercial-real-estate-tampa-2026`
8. `/blog/tampa-bay-hospitality-hotel-cre-2026`
9. `/calculators/cap-rate`
10. `/insights/what-is-a-cap-rate`

All routes resolve to valid `page.tsx` files with no build errors.

*Note: Live HTTP status checks (curl) are not possible from this CI environment. Verified via static build output instead.*

---

## 4. Schema Validation (JSON-LD)

**Status: PASS ✅**

All 5 sampled pages use the `SchemaOrg` server component, which renders a valid `<script type="application/ld+json">` tag using `JSON.stringify()`. No hand-coded JSON strings that could be malformed.

Pages sampled:
- `/` — LocalBusiness / Person schema
- `/blog/ybor-city-commercial-real-estate-tampa-2026` — Article + Person
- `/markets/hillsborough` — Article + Person
- `/services/tenant-representation` — Service + Person  
- `/commercial/office-space` — Product / Service + Person

All schema blocks are well-structured objects passed as props and serialized server-side.

---

## 5. Broken Links

**Status: FIXED ✅ (1 found)**

**Broken:** `/markets/palm-beach` in `src/app/markets/broward/page.tsx:258`  
No `src/app/markets/palm-beach/` directory exists.

**Fix:** Removed the `<a>` anchor wrapper; "Palm Beach County" text retained as plain text.

**Scan result:** 97 unique internal hrefs checked across all `.tsx` source files. After fix: **0 broken internal links**.

---

## 6. Blog Freshness

**Status: PASS ✅**

- **Total posts (after manifest fix):** 53
- **Latest post date:** 2026-07-31 (`tampa-bay-hospitality-hotel-cre-2026`)
- **Days since last post:** 1 day (audit date: 2026-08-01)
- **Posts published in July 2026:** 17
- **Oldest post:** `how-commercial-leases-differ-from-residential` (2026-05-18)

Blog cadence is healthy — multiple posts per week. No freshness flag triggered.

---

## 7. robots.txt

**Status: PASS ✅**

AI/answer-engine crawlers explicitly allowed:
- GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended
- GoogleOther, Google-Extended, Bytespider
- ChatGPT-User, anthropic-ai, cohere-ai, CCBot

Spam/scraper bots blocked:
- AhrefsBot, SemrushBot, MJ12bot, DotBot

Sitemap directive: `https://hencre.com/sitemap.xml` ✓

---

## 8. Meta Tags

**Status: ADVISORY ⚠️**

All 5 sampled pages have canonical tags. Schema: PASS.

| Page | Title (chars) | Title OK | Desc (chars) | Desc OK | Canonical |
|------|--------------|----------|--------------|---------|-----------|
| Homepage | 61 | ⚠️ +1 over 60 | 164 | ⚠️ over 155 | ✓ |
| Ybor City blog | 81 | ⚠️ long | 261 | ⚠️ over 155 | ✓ |
| Hillsborough market | 51 | ✓ | 187 | ⚠️ over 155 | ✓ |
| Tenant rep service | 59 | ✓ | 178 | ⚠️ over 155 | ✓ |
| Office space | 58 | ✓ | 163 | ⚠️ over 155 | ✓ |

**Advisory:** Most pages have meta descriptions exceeding the 155-char soft limit. Google truncates these in SERPs, which can reduce click-through impact. Titles are borderline but acceptable (Google shows ~60-65 chars before truncation).

*No code changes made* — these are content quality issues, not structural bugs. Recommend trimming key landing page descriptions to ≤155 chars in the next content pass.

---

## 9. Forms — /api/lead

**Status: PASS ✅**

The lead endpoint (`src/app/api/lead/route.ts`) correctly handles empty/invalid POST:
1. Parses JSON body
2. Validates with Zod `LeadFormSchema` 
3. Returns `{ success: false, error: "Validation failed", issues: [...] }` with HTTP 400 for missing/invalid fields

**Advisory — Turnstile bypass:** Line 20 contains `if (false && !turnstileResult.success)` — the bot-protection check is permanently short-circuited. This means the Turnstile widget shows on the form but never actually blocks bots server-side. Likely intentional (disabled to prevent client nav crashes per the inline comment), but worth tracking. The Zod validation still prevents garbage submissions.

---

## 10. Image Audit

**Status: PASS ✅**

All local image references verified against `/public/` directory:
- `/images/remax-commercial-white.png` — exists ✓
- `/images/barrett-henry-headshot.jpg` — exists ✓
- `/ada-icon.png` — exists ✓
- `/og-image.png` — exists ✓

No `<img>` or Next.js `<Image>` tags found without `alt` attributes. Blog post images from Unsplash (in manifest) include alt text in their manifest entry. 

---

## 11. Content Freshness

**Status: PASS ✅ (with notes)**

20 pages contain references to years 2020–2024. After review, all instances are **historical data citations** in market analysis posts (e.g., "vacancy peaked at 22% in Q2 2023"), not claims about the current year. This is appropriate editorial content.

No pages found incorrectly claiming the current year is anything other than 2026.

Key examples reviewed as acceptable historical context:
- `tampa-bay-multifamily-cap-rates-2026`: 2021–2024 cap rate comparison data
- `tampa-bay-office-market-q2-2026`: Multi-year absorption trend data
- `florida-insurance-crisis-investment-properties`: Historical timeline 2020–2023

---

## 12. Competitive Intelligence

**Search:** "commercial real estate tampa bay" (August 2026)

**Top 5 competitors in Tampa Bay CRE:**

1. **CBRE Tampa** — Market leader, 75+ professionals, Tampa-focused since 1981. Tampa rose to #7 in CBRE's 2026 North America Investor Intentions Survey.
2. **Cushman & Wakefield Tampa** — 250 professionals, deep local roots with global platform.
3. **Avison Young Tampa** — Data-driven positioning, growing presence.
4. **SVN | Saunders Ralston Dantzler** — Ranked among Tampa Bay's largest CRE brokerages.
5. **Bay Street Commercial** — Tampa Bay's leading boutique CRE firm.

**HenCRE positioning:** Barrett Henry / REMAX Collective occupies the independent broker/boutique advisor niche — differentiated from institutional firms by personal service, local depth, and identity-page SEO targeting specific city+role keyword combinations. The 53-post blog and 80 identity pages are a meaningful content moat that larger firms rarely match at this granularity.

---

## Changes Applied This Audit

| File | Change |
|------|--------|
| `src/app/markets/flagler/page.tsx` | Fixed named→default imports, removed invalid `variant` prop |
| `src/app/markets/franklin/page.tsx` | Fixed named→default imports, removed invalid `variant` prop, fixed `class=`→`className=` |
| `src/app/markets/broward/page.tsx` | Removed broken `/markets/palm-beach` link |
| `public/data/blog-manifest.json` | Added 17 missing blog posts (36 → 53 entries) |

---

## Open Recommendations (Not Auto-Fixed)

| Priority | Issue | Action |
|----------|-------|--------|
| High | Content engine doesn't always update `blog-manifest.json` | Add manifest-sync step to auto-publish pipeline |
| Medium | Meta descriptions on most pages exceed 155 chars | Trim key landing page descriptions in next content pass |
| Low | Turnstile bot check permanently disabled in `/api/lead` | Investigate original crash; re-enable or document as intentional |
| Low | Homepage title is 61 chars (1 over soft limit) | Shorten slightly in next SEO pass |

---

*Next audit: 2026-09-01*
