# HenCRE Monthly Site Audit — November 2026

**Date:** 2026-11-01  
**Auditor:** Claude (automated monthly audit)  
**Branch:** main

---

## Summary

| Check | Status | Notes |
|-------|--------|-------|
| Build | ✅ PASS | 357 static pages, no errors |
| Sitemap | ✅ PASS | 319 sitemap URLs (fixed: 31 posts were missing) |
| Page spot-check | ⚠️ SKIPPED | Outbound HTTPS to hencre.com blocked from CI container |
| JSON-LD schema | ✅ PASS | Present in all blog, market, and core pages |
| Broken links | ✅ FIXED | 1 broken link patched |
| Blog freshness | ✅ PASS | 180 posts; latest 2026-10-31 (1 day ago) |
| robots.txt | ✅ PASS | AI crawlers allowed, spam bots blocked |
| Meta tags — titles | ✅ PASS | All sampled titles under 60 chars |
| Meta tags — descriptions | ⚠️ FLAG | 232 of 270 pages have descriptions >155 chars |
| Forms (/api/lead) | ✅ PASS | Returns 400 with field-level errors on empty POST |
| Image audit | ✅ PASS | No missing OG images, all img tags have alt text |
| Content freshness | ✅ PASS | Historical year refs (2023–2024) are factual context |
| Competitive intel | ✅ DONE | See section below |

**Fixes applied this run:**
1. Blog manifest updated — added 31 missing October 2026 posts to `public/data/blog-manifest.json`
2. Broken link patched — `/services/acquisitions` → `/services/investment-sales` in `clearwater-landings-sports-complex-cre-pinellas-2026`

---

## 1. Build Test

```
✓ Compiled successfully in 17.6s
✓ Generating static pages using 3 workers (357/357) in 4.2s
```

No TypeScript errors, no Turbopack errors (earlier parallel runs conflicted with each other; sequential run is clean).

---

## 2. Sitemap

**Total sitemap URLs: 319**

| Section | Count |
|---------|-------|
| Core pages | 13 |
| Service pages | 11 |
| Property type pages | 6 |
| Market pages (counties) | 47 |
| Insight articles | 8 |
| Blog posts | 180 (was 149 before fix) |
| Calculator pages | 5 |
| Identity/keyword pages | 80 (10 cities × 8 roles) |

**Issue fixed:** 31 October 2026 blog posts had `page.tsx` files but were missing from `public/data/blog-manifest.json`. The sitemap is generated from the manifest, so these posts were invisible to search engines. All 31 have been added.

Missing posts added:
- 2026-10-31: tampa-bay-cre-construction-costs-tariffs-2026
- 2026-10-30: tampa-bay-ev-charging-commercial-real-estate-2026
- 2026-10-29: tampa-bay-bulk-distribution-center-investment-2026
- 2026-10-28: echelon-city-center-north-st-pete-cre-2026
- 2026-10-27: tampa-bay-office-market-q4-2026
- 2026-10-26: thea-downtown-tampa-redevelopment-cre-2026
- 2026-10-25: riverview-fl-industrial-warehouse-space-2026
- 2026-10-24: tampa-bay-industrial-reit-institutional-capital-2026
- 2026-10-23: zephyrhills-east-pasco-county-commercial-real-estate-2026
- 2026-10-22: international-plaza-tampa-simon-westshore-retail-cre-2026
- 2026-10-21: tampa-bay-retail-market-q4-2026
- 2026-10-20: polk-county-medical-office-cre-2026
- 2026-10-19: tampa-bay-industrial-market-q4-2026
- 2026-10-18: sarasota-memorial-manatee-campus-medical-cre-2026
- 2026-10-17: tampa-bay-distressed-apartment-sales-2026
- 2026-10-16: 1031-exchange-tampa-bay-commercial-real-estate-2026
- 2026-10-15: clearwater-landings-sports-complex-cre-pinellas-2026
- 2026-10-14: tampa-bay-auto-dealership-cre-2026
- 2026-10-13: tampa-bay-apartment-market-q4-2026
- 2026-10-13: wesley-chapel-i75-industrial-warehouse-q4-2026
- 2026-10-11: westshore-plaza-redevelopment-cre-impact-tampa-2026
- 2026-10-10: st-pete-edge-district-cre-2026
- 2026-10-09: tampa-bay-office-sublease-market-2026
- 2026-10-08: tampa-bay-veterinary-clinic-nnn-investment-2026
- 2026-10-07: tampa-bay-dst-delaware-statutory-trust-cre-2026
- 2026-10-07: tampa-rays-ballpark-dale-mabry-cre-2026
- 2026-10-05: tampa-bay-urgent-care-medical-clinic-nnn-investment-2026
- 2026-10-04: lutz-fl-commercial-real-estate-2026
- 2026-10-03: florida-commercial-property-tax-appeal-guide-2026
- 2026-10-02: tampa-bay-ground-lease-nnn-investment-2026
- 2026-10-01: tampa-bay-spec-industrial-pipeline-2026-2027

---

## 3. Page Spot-Check

**Status: SKIPPED**  
Outbound HTTPS connections to `hencre.com` are blocked by the CI container's egress proxy. All curl requests returned status `000`. Live production checks should be performed from a non-restricted network. The build itself generates all 357 pages successfully, which provides high confidence the routes are live.

---

## 4. JSON-LD Schema Validation

Checked source code across page types:

- **Blog posts:** Inline `articleSchema` (BlogPosting type) + `faqSchema` rendered via `<SchemaOrg>` component ✅
- **Homepage:** Organization + LocalBusiness schema via `src/lib/schema.ts` ✅
- **Market pages:** SchemaOrg component present in all 47 county pages ✅
- **Services pages:** SchemaOrg component present ✅

No pages found without JSON-LD.

---

## 5. Broken Links

**1 broken link found and fixed:**

| File | Broken Link | Fixed To |
|------|-------------|----------|
| `blog/clearwater-landings-sports-complex-cre-pinellas-2026/page.tsx:277` | `/services/acquisitions` | `/services/investment-sales` |

No other broken internal links found (206 unique internal links checked against 271 page routes).

---

## 6. Blog Freshness

- **Total posts:** 180 (after manifest fix)
- **Latest post date:** 2026-10-31 (1 day ago — fresh ✅)
- **Posts this month (October):** 31

Cadence is healthy. No flag needed.

---

## 7. robots.txt

Generated by `src/app/robots.ts` at `/robots.txt`.

**AI/answer-engine crawlers allowed:** GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, GoogleOther, Google-Extended, Bytespider, ChatGPT-User, anthropic-ai, cohere-ai, CCBot ✅

**Spam bots blocked:** AhrefsBot, SemrushBot, MJ12bot, DotBot ✅

Sitemap URL correctly set to `https://hencre.com/sitemap.xml` ✅

---

## 8. Meta Tags

**Titles (sampled 5 pages):** All under 60 chars ✅

| Page | Title | Length |
|------|-------|--------|
| Homepage | REMAX Commercial Real Estate Florida \| Barrett Henry | 52 |
| About | About Barrett Henry \| Broker Associate, REMAX Hall of Fame | 58 |
| Tenant Rep | Tenant Representation Florida \| Free Market Survey | 50 |
| Hillsborough | Hillsborough County Commercial Real Estate \| HenCRE | 51 |
| Blog post | Crystal River CRE: Citrus County Market Guide 2026 | 50 |

**Descriptions:** ⚠️ Systemic issue — 232 of 270 pages exceed 155 chars

| Category | Too Long (>155) | OK (120–155) | Too Short (<120) |
|----------|----------------|-------------|-----------------|
| All pages | 232 | 38 | 0 |

Longest examples:
- `blog/tampa-bay-industrial-reit-institutional-capital-2026` — 355 chars
- `blog/zephyrhills-east-pasco-county-commercial-real-estate-2026` — 326 chars
- `about/page.tsx` — 221 chars

**Recommendation:** Google truncates descriptions in SERPs at ~155 chars. This won't hurt rankings but reduces click-through quality. The content engine should enforce a 155-char cap on new posts. Backfilling all 232 existing pages is a separate content sprint.

**Canonical tags:** Present on all sampled pages ✅

---

## 9. Forms — /api/lead

Tested with local dev server (port 3099):

**Empty POST `{}`:**
```json
{"success":false,"error":"Validation failed","issues":[
  {"path":["name"],"message":"Invalid input: expected string, received undefined"},
  {"path":["email"],"message":"Invalid input: expected string, received undefined"},
  {"path":["county"],"message":"Invalid input: expected string, received undefined"},
  {"path":["inquiryType"],"message":"Please select an inquiry type"}
]}
```

**POST with empty strings `{"name":"","email":""}`:**
```json
{"success":false,"error":"Validation failed","issues":[
  {"path":["name"],"message":"Name must be at least 2 characters"},
  {"path":["email"],"message":"Please enter a valid email address"}
]}
```

Both return HTTP 400 with structured Zod errors. ✅

---

## 10. Image Audit

- `<img>` tags without `alt`: **0** (all images use `next/image` with required `alt` prop) ✅
- Blog OG images referenced in source with missing files: **0** ✅
- Static images in `public/images/`: `barrett-henry-headshot.jpg`, `remax-commercial-white.png` — both present ✅
- `public/images/blog/` contains 23 blog-specific OG images; remaining blog posts use default OG ✅

---

## 11. Content Freshness

Scanned for outdated year references:

- `services/investment-sales/page.tsx:98` — References "Florida exceeded $85 billion in 2024" citing NAR report. This is a factual citation of a 2024 report, appropriate as historical context. No action needed.
- Blog posts referencing 2023–2024 rates, vacancy numbers, etc. — All used as historical comparisons ("from 2023 highs", "correction years of 2021–2024"). This is proper analytical framing, not stale content.

No pages found referencing expired programs or incorrect current year. ✅

---

## 12. Competitive Intelligence

**Search:** "commercial real estate tampa bay" + broker landscape

**Top 5 competitors in Tampa Bay CRE:**

1. **CBRE** (cbre.com/offices/corporate/tampa) — Self-described market leader since 1981; Tampa ranked top-10 for capital deployment in 2026 per CBRE investor survey.
2. **Cushman & Wakefield** (cushwake.com) — Tampa Bay office since 1978; claims to be first CRE services firm in the region.
3. **JLL** — Tampa office active; no current rank data available from this search.
4. **Colliers International** — Tampa and Sarasota operations; older coverage, no 2026 ranking found.
5. **RIPCO Tampa** — Ranked #8 among largest CRE brokerages in Tampa Bay (March 2026 release).
6. **Marcus & Millichap** — Florida offices active; mentioned in 2026 Green Street ranking.

**TenantBase** (tenantbase.com) appears prominently in office tenant search results — a listings/broker-matching platform competing for top-of-funnel SEO traffic on "tampa commercial office space" queries.

**Positioning note:** HenCRE/Barrett Henry differentiates as a solo practitioner with 23+ years of local depth vs. institutional brokerages. The content engine is generating strong long-tail blog coverage that the institutionals don't produce at this volume.

---

## Fixes Applied This Run

| Fix | File | Description |
|-----|------|-------------|
| Blog manifest update | `public/data/blog-manifest.json` | Added 31 October 2026 posts missing from sitemap |
| Broken link | `src/app/blog/clearwater-landings-sports-complex-cre-pinellas-2026/page.tsx:277` | Changed `/services/acquisitions` → `/services/investment-sales` |

---

## Open Issues (Not Auto-Fixed)

| Priority | Issue | Action Needed |
|----------|-------|---------------|
| Medium | 232 pages with meta descriptions >155 chars | Content sprint to trim descriptions; enforce 155-char cap in content engine |
| Low | Live page spot-check skipped | Run from a non-restricted network or add Vercel preview URL check |
| Low | Blog manifest sync is manual | Content engine should auto-update manifest on new post creation |

---

*Generated by automated monthly audit — 2026-11-01*
