# HenCRE Monthly Site Audit Report
**Date:** 2026-09-01  
**Auditor:** Automated (Claude Code scheduled routine)  
**Site:** hencre.com

---

## Summary

| Check | Status | Notes |
|---|---|---|
| Build test | ✅ PASS | 275 static pages, no errors |
| Sitemap URL count | ✅ 268 URLs (post-fix) | 98 blog posts now in manifest |
| Page spot-check (10 pages) | ✅ All 200 OK | — |
| Schema/JSON-LD | ✅ Present on all 5 sampled pages | — |
| Broken links | ✅ Fixed (4 broken → 0) | Applied fixes |
| Blog freshness | ✅ Fresh | Latest post: 2026-09-01 (1 day ago) |
| robots.txt | ✅ AI crawlers allowed, spam bots blocked | — |
| Meta tags | ⚠️ Titles OK; descriptions over 155 chars on all 5 sampled | Not auto-fixed (site-wide pattern) |
| Forms | ✅ /api/lead returns 400 + Zod validation errors for empty POST | — |
| Image audit | ✅ All img/Image tags have alt text | — |
| Content freshness | ✅ No stale year references found | 2024/2025 refs are historical context in 2026 articles |
| Competitive intel | ✅ Researched — see section below | — |

---

## 1. Build Test

**Result: PASS**

```
▲ Next.js 16.2.7 (Turbopack)
✓ Compiled successfully in 13.7s
✓ Generating static pages (275/275) in 4.0s
```

No TypeScript errors, no compilation failures, 275 pages generated statically.

---

## 2. Sitemap

**Pre-fix:** 239 URLs (blog manifest had only 69 entries)  
**Post-fix:** 268 URLs (blog manifest now has 98 entries)

Breakdown:
- Core pages: 13
- Service pages: 11
- Property type pages: 6
- Market pages (47 FL counties): 47
- Insight articles: 8
- Blog posts: **98** (was 69)
- Calculator pages: 5
- Identity pages: 80 (10 cities × 8 roles)

**Fix applied:** 29 blog post directories existed in `src/app/blog/` but were missing from `public/data/blog-manifest.json`. The blog listing page and sitemap both read from the manifest, so these posts were invisible to visitors and search engines. All 29 were added to the manifest with correct dates pulled from git history.

**Missing posts added to manifest:**
- apollo-beach-southshore-commercial-real-estate-2026 (2026-08-26)
- east-tampa-us-301-industrial-corridor-2026 (2026-08-18)
- historic-gas-plant-district-st-pete-cre-2026 (2026-08-26)
- north-tampa-usf-corridor-commercial-real-estate-2026 (2026-08-31)
- pinellas-county-industrial-cre-2026 (2026-08-27)
- plant-city-commercial-real-estate-2026 (2026-08-23)
- port-tampa-bay-fourth-cruise-terminal-channel-district-cre (2026-08-19)
- sale-leaseback-commercial-real-estate-tampa-bay (2026-09-01)
- sba-504-loan-commercial-real-estate-tampa-bay (2026-08-18)
- south-tampa-commercial-real-estate-2026 (2026-08-21)
- st-petersburg-office-market-2026 (2026-08-26)
- tampa-bay-build-to-rent-cre-2026 (2026-08-27)
- tampa-bay-car-wash-cre-investment-2026 (2026-09-01)
- tampa-bay-cold-storage-cre-2026 (2026-08-27)
- tampa-bay-cre-debt-maturity-wall-2026 (2026-08-30)
- tampa-bay-flex-office-coworking-2026 (2026-08-29)
- tampa-bay-grocery-anchored-retail-investment-2026 (2026-08-27)
- tampa-bay-industrial-market-q2-2026 (2026-08-23)
- tampa-bay-life-sciences-cre-2026 (2026-09-01)
- tampa-bay-multifamily-market-mid-2026 (2026-08-31)
- tampa-bay-nnn-cap-rates-2026 (2026-08-31)
- tampa-bay-office-to-residential-conversion-2026 (2026-09-01)
- tampa-bay-opportunity-zones-cre-2026 (2026-08-30)
- tampa-bay-owner-user-commercial-real-estate-buy-vs-lease (2026-09-01)
- tampa-bay-restaurant-food-beverage-space-2026 (2026-08-31)
- tampa-bay-retail-market-q2-2026 (2026-08-30)
- tampa-bay-self-storage-cre-investment-2026 (2026-08-23)
- tampa-heights-commercial-real-estate-2026 (2026-08-26)
- westshore-tampa-office-market-2026 (2026-08-30)

---

## 3. Page Spot-Check (10 Pages — HTTP 200)

All returned 200 OK against local build:

| URL | Status |
|---|---|
| / | 200 |
| /about | 200 |
| /blog | 200 |
| /services | 200 |
| /markets/hillsborough | 200 |
| /commercial/office-space | 200 |
| /services/tenant-representation | 200 |
| /calculators/cap-rate | 200 |
| /remax-commercial | 200 |
| /blog/tampa-bay-industrial-market-q2-2026 | 200 |

---

## 4. Schema Validation (5 Pages)

JSON-LD (`@context: https://schema.org`) confirmed present on all 5 sampled pages via `<SchemaOrg>` component:

| Page | JSON-LD Present |
|---|---|
| / | ✅ |
| /about | ✅ |
| /services/tenant-representation | ✅ |
| /blog/how-to-calculate-commercial-property-roi | ✅ |
| /markets/hillsborough | ✅ |

---

## 5. Broken Links

**Pre-fix: 4 broken internal links → Post-fix: 0**

| Link | File | Fix Applied |
|---|---|---|
| `/markets/miami-dade` | `markets/glades/page.tsx:145` | → `/markets` |
| `/markets/suwannee` | `markets/hamilton/page.tsx:160` | → `/markets` |
| `/services/land-development` (×4) | `markets/gilchrist/page.tsx`, `markets/glades/page.tsx` | → `/commercial/land-development` |
| `/services/retail-leasing` (×4) | `markets/gilchrist/page.tsx`, `markets/glades/page.tsx` | → `/services/landlord-leasing` |

---

## 6. Blog Freshness

- **Total posts:** 98 (blog listing now shows all 98 after manifest fix)
- **Latest post date:** 2026-09-01 (1 day ago)
- **Oldest post date:** 2026-05-18
- **Freshness flag (>7 days without post):** NO — blog is active

Post cadence: Multiple posts per week throughout August 2026.

---

## 7. robots.txt

robots.ts generates correct directives:

**AI/answer-engine crawlers explicitly allowed:**
GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, GoogleOther, Google-Extended, Bytespider, ChatGPT-User, anthropic-ai, cohere-ai, CCBot

**Spam/scraper bots blocked:**
AhrefsBot, SemrushBot, MJ12bot, DotBot

**Sitemap declared:** `https://hencre.com/sitemap.xml`

Status: ✅ No issues.

---

## 8. Meta Tags (5 Pages Spot-Checked)

| Page | Title (chars) | Title OK (<60) | Description (chars) | Description OK (120–155) | Canonical |
|---|---|---|---|---|---|
| / | 52 | ✅ | 162 | ⚠️ Over | ✅ |
| /about | 58 | ✅ | 221 | ⚠️ Over | ✅ |
| /services | 49 | ✅ | 190 | ⚠️ Over | ✅ |
| /blog | 50 | ✅ | 160 | ⚠️ Over | ✅ |
| /markets/hillsborough | 51 | ✅ | 187 | ⚠️ Over | ✅ |

**Finding:** All titles are within the 60-character limit. All canonical tags are present. However, all 5 sampled descriptions exceed the 155-character Google display cap (range: 160–221 chars). This is a site-wide pattern. While Google often auto-truncates, excessively long descriptions can result in less controlled SERP snippets.

**Recommendation (not auto-fixed — site-wide change):** Trim meta descriptions on core pages to 120–155 chars. Priority: /, /about, /services, /blog.

---

## 9. Forms — /api/lead

Empty POST (missing all required fields) returns:

```json
HTTP 400
{
  "success": false,
  "error": "Validation failed",
  "issues": [
    {"path": ["name"], "message": "Invalid input: expected string, received undefined"},
    {"path": ["email"], "message": "Invalid input: expected string, received undefined"},
    {"path": ["county"], "message": "Invalid input: expected string, received undefined"},
    {"path": ["inquiryType"], "message": "Please select an inquiry type"},
    {"path": ["turnstileToken"], "message": "Please complete the security check"}
  ]
}
```

Status: ✅ Proper 400 + Zod validation errors. No data leakage. Bot protection layer present (Turnstile, currently bypassed on client navigation — existing known issue per code comment).

---

## 10. Image Audit

- **Total `<img>` tags:** 47 (multi-line attributes)
- **Total `<Image>` (next/image) tags:** 10+
- **Missing alt attributes:** 0
- **Image files referenced locally all exist** (e.g., `/public/images/barrett-henry-headshot.jpg`, `/ada-icon.png`)
- **Unsplash images:** Used in blog post hero images via blog-manifest.json and ArticleTemplate; URLs are external CDN links, all reachable

Status: ✅ No issues.

---

## 11. Content Freshness

Scanned all page.tsx files for potentially stale year references (2024, 2025):

- All 2024/2025 mentions are **historical context** within 2026 market analysis articles (e.g., "vacancy rates were 19–21% in 2023–2024", "supply wave from 2024–2025")
- One reference in `/services/investment-sales/page.tsx` to "NAR Commercial Real Estate Transactions Report 2024" — this is a source citation, acceptable
- Florida Business Rent Tax repeal (October 1, 2025) is referenced accurately across multiple blog posts

**No stale or expired program references found.**

Status: ✅ No issues.

---

## 12. Competitive Intel — "Commercial Real Estate Tampa Bay" Top 5

Search performed 2026-09-01:

| # | Competitor | Presence |
|---|---|---|
| 1 | **CBRE Tampa** (cbre.com/offices/corporate/tampa) | National firm, 75+ professionals, strong brand |
| 2 | **Cushman & Wakefield Tampa** (cushmanwakefield.com) | Est. 1978 in Tampa Bay, 250 professionals, dominant in enterprise |
| 3 | **Avison Young Tampa** (avisonyoung.us/web/tampa) | Mid-size national, data-driven positioning |
| 4 | **Bay Street Commercial** (baystreetcommercial.com) | Tampa Bay boutique, positioned as "premier boutique" |
| 5 | **KW Commercial Tampa Bay / ROI Real Estate** | Regional/independent operators |

**HenCRE positioning notes:**
- CBRE/C&W/Avison Young dominate enterprise deals; HenCRE's niche is owner-users, investors, and tenants who want personal broker access over institutional teams
- Bay Street Commercial is the most direct boutique competitor — monitor their blog and service pages
- HenCRE's 98-post blog and 47-county coverage pages are a strong SEO differentiator vs. boutique competitors

---

## Fixes Applied This Run

| Fix | Files Modified |
|---|---|
| Added 29 missing blog posts to blog-manifest.json | `public/data/blog-manifest.json` |
| Fixed broken link `/markets/miami-dade` → `/markets` | `src/app/markets/glades/page.tsx` |
| Fixed broken link `/markets/suwannee` → `/markets` | `src/app/markets/hamilton/page.tsx` |
| Fixed broken links `/services/land-development` → `/commercial/land-development` (×2) | `src/app/markets/gilchrist/page.tsx`, `src/app/markets/glades/page.tsx` |
| Fixed broken links `/services/retail-leasing` → `/services/landlord-leasing` (×2) | `src/app/markets/gilchrist/page.tsx`, `src/app/markets/glades/page.tsx` |

---

## Open Recommendations (Not Auto-Fixed)

1. **Meta descriptions** — Trim to 120–155 chars on core pages (/, /about, /services, /blog, /markets/hillsborough). Currently 160–221 chars. Low risk, good for controlled SERP snippets.
2. **Turnstile re-enable** — `route.ts:23` has `if (false && !turnstileResult.success)` disabling bot verification. This is a known issue from client navigation crashes. Revisit fix to avoid bypassing bot protection entirely.

---

*Generated by automated monthly audit — 2026-09-01*
