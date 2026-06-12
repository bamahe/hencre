# hencre.com Auto-Blog System — Design Spec

**Date:** 2026-06-09
**Status:** Approved

## Overview

Automated blog content system for hencre.com that publishes 3 CRE-focused blog posts per week targeting Tampa Bay cities and commercial business types. Posts include Unsplash hero images, proper schema markup, and follow all existing site conventions.

## Schedule

Monday / Wednesday / Friday at 10 AM ET (14:00 UTC) via Vercel cron.

## Topic Rotation

Three categories, cycled in order:

1. **City-specific CRE market content** — "Commercial Real Estate in [City]: What Business Owners Need to Know"
2. **Business-type guides** — "Opening a [Business] in [City]: Commercial Space Guide"
3. **Investor/landlord content** — NNN investment, leasing strategies, commercial PM, valuations by area

## City Weighting

### High frequency (60%)
Tampa, Brandon, Valrico, Riverview, St. Petersburg, Clearwater, Wesley Chapel, Land O' Lakes, Largo

### Medium frequency (30%)
Lakeland, Winter Haven, Bradenton, Sarasota, New Port Richey, Dunedin, Palm Harbor

### Low frequency (10%)
Spring Hill, Brooksville, Crystal River, Inverness, Ruskin, Plant City

## Business Types (12)

Restaurant/food service, medical/dental/urgent care, retail storefronts, warehouse/distribution, office/coworking, auto repair/car wash/dealerships, fitness/gym/wellness, professional services (law/accounting/insurance), multifamily/apartment investing, land development/new construction, leasing, commercial property management

## Blog Post Structure

Every auto-generated post follows the CLAUDE.md blog post rules:

- **Hero image:** Unsplash photo downloaded to `public/images/blog/`, served via `next/image` with descriptive alt text
- **Word count:** 800-1,300 words
- **Headings:** Question-format H2s, single H1 with target keyword
- **First paragraph:** Direct answer to the page's main question in 2-3 sentences
- **Title tag:** < 60 chars, keyword first, include year and benefit
- **Meta description:** 120-155 chars with CTA
- **Canonical URL:** Set
- **4-5 FAQs** with FAQPage schema, answers start with direct complete first sentence
- **Article schema** with full Barrett Henry author (jobTitle, image, sameAs)
- **Mid-article CTA box:** Navy background, phone number + form link
- **Related Guides section:** 6-8 links to other blog posts and relevant pages
- **Author bio** with headshot
- **Social share buttons**
- **Legal disclaimer**
- **Free resources block:** HUD 1-800-569-4287, FHA 1-800-225-5342, HOPE 1-888-995-4673
- **Date published:** Auto-set to publish date (never backdated)
- **Cross-links:** 2-3 links to other blog posts + relevant service/market pages
- **BreadcrumbList schema** (Blog > Post Title)
- **Internal links:** 5-10 throughout content body
- **Phone number visible**
- **"According to [source]" citations** where applicable

## Technical Architecture

### Cron Route: `/api/cron/auto-blog`

**Authentication:** `CRON_SECRET` env var validated against `Authorization` header (Vercel cron sends this automatically).

**Flow:**

1. **Topic selection:**
   - Read recent posts from a tracking file (`public/data/blog-history.json`) to avoid duplicate cities/topics
   - Pick category (city / business-type / investor) based on day of week (Mon=city, Wed=business, Fri=investor)
   - Select city using weighted random from the three tiers
   - Select business type from the 12-item pool (if applicable)
   - Generate a unique slug

2. **Content generation:**
   - Call Claude API (claude-sonnet-4-6 for cost efficiency at this volume) with a detailed system prompt that enforces all CLAUDE.md blog rules
   - Prompt includes: target city, county, business type, category, Barrett's credentials, existing blog slugs for cross-linking, existing service/market page slugs for internal linking
   - Claude returns: title, meta description, slug, full JSX content body, FAQ array, keywords

3. **Image acquisition:**
   - Use existing `src/lib/unsplash.ts` to fetch a relevant photo
   - Download image to `public/images/blog/[slug].jpg`
   - Store photographer attribution for credit in the post

4. **File generation:**
   - Generate a complete `page.tsx` file matching the structure of existing blog posts
   - Uses shared components: `Hero`, `Breadcrumbs`, `CTASection`, `RelatedLinks`, `SchemaOrg`, `FAQAccordion`
   - Write to `src/app/blog/[slug]/page.tsx`

5. **Tracking update:**
   - Append new post to `public/data/blog-history.json` (slug, title, date, city, county, category, business type)

6. **Sitemap update:**
   - Append the new slug to the BLOG_POSTS array in `src/app/sitemap.ts`

7. **Git commit via GitHub API:**
   - Commit all new/changed files (page.tsx, image, blog-history.json, sitemap.ts)
   - Commit message: `Auto-publish: [Post Title]`

8. **Deploy trigger:**
   - Hit Vercel deploy hook URL to trigger rebuild

### Environment Variables Required

- `CRON_SECRET` — Vercel cron auth
- `ANTHROPIC_API_KEY` — Claude API (already exists)
- `UNSPLASH_ACCESS_KEY` — Unsplash API (already exists)
- `GITHUB_TOKEN` — GitHub API for commits
- `VERCEL_DEPLOY_HOOK` — Vercel deploy hook URL

### Vercel Configuration

New `vercel.json` at project root:

```json
{
  "crons": [
    {
      "path": "/api/cron/auto-blog",
      "schedule": "0 14 * * 1,3,5"
    }
  ]
}
```

## Blog Index Fix

The current blog index page (`src/app/blog/page.tsx`) has a hardcoded POSTS array listing 5 phantom posts that don't exist. This will be rebuilt to:

- Dynamically read from `public/data/blog-history.json` + a seed array of the 5 existing manual posts
- Display posts as cards with hero images, titles, dates, and excerpts
- Use `<Link>` components (not `<span>` tags)
- Sort by date descending
- Show category tags (City Market, Business Guide, Investor)

## Content Guidelines for Claude Prompt

The system prompt for content generation will enforce:

- "REMAX Commercial®" with ® every time
- "owners suite" never "master suite"
- Never mention mobile/manufactured homes
- Barrett Henry personal brand > team branding
- "23+ years of real estate experience" (NEVER tied to Tampa Bay)
- No creepy CTAs asking for personal details
- Vary CTA copy (never repeat "Ready to Make [City] Home?")
- No naming individuals in crime-related content
- Plain English, benefit-driven, punchy
- Optimize for traditional search AND AI answer engines (AEO)
- "According to [source]" citations throughout

## Files to Create/Modify

### New files:
- `vercel.json` — cron schedule
- `src/app/api/cron/auto-blog/route.ts` — main cron handler
- `src/lib/blog-generator.ts` — topic selection, Claude prompt, file generation logic
- `src/lib/blog-topics.ts` — city weights, business types, category definitions
- `public/data/blog-history.json` — post tracking (seeded with 5 existing posts)

### Modified files:
- `src/app/blog/page.tsx` — rebuild to dynamically list real posts
- `src/app/sitemap.ts` — auto-updated by cron (but also refactored to read from blog-history.json)
