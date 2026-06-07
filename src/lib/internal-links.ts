/**
 * internal-links.ts
 * Auto-generates related internal links based on page context.
 * Links across the content hierarchy: pillar → county → property-type → identity → blog.
 */

import { FLORIDA_COUNTIES, TIER_1_COUNTIES } from './florida-counties';

/** Page types in the site hierarchy */
export type PageType =
  | 'pillar'         // Top-level service pages (e.g., /lease-space)
  | 'county'         // County landing pages (e.g., /counties/hillsborough)
  | 'property-type'  // Property type pages (e.g., /counties/hillsborough/office-space)
  | 'identity'       // Identity pages (e.g., /for-investors, /for-tenants)
  | 'blog'           // Blog posts (e.g., /blog/some-post)
  | 'service';       // Service pages (e.g., /services/cre-valuation)

/** CRE property types used across the site */
export const PROPERTY_TYPES = [
  { name: 'Office Space', slug: 'office-space' },
  { name: 'Retail Space', slug: 'retail-space' },
  { name: 'Industrial', slug: 'industrial' },
  { name: 'Multifamily', slug: 'multifamily' },
  { name: 'Mixed-Use', slug: 'mixed-use' },
  { name: 'Land', slug: 'land' },
  { name: 'Medical Office', slug: 'medical-office' },
  { name: 'Hospitality', slug: 'hospitality' },
  { name: 'Self-Storage', slug: 'self-storage' },
  { name: 'Flex Space', slug: 'flex-space' },
] as const;

/** Pillar/service page slugs */
const PILLAR_SLUGS = [
  'lease-space',
  'list-space',
  'buy-investment',
  'sell-dispositions',
  'cre-valuation',
] as const;

/** Identity page slugs */
const IDENTITY_SLUGS = [
  'for-investors',
  'for-tenants',
  'for-landlords',
  'for-developers',
  'for-business-owners',
] as const;

/** A related link with label and URL */
export interface RelatedLink {
  label: string;
  url: string;
}

/**
 * Get related internal links for a given page.
 * Returns links that help users navigate to related content.
 *
 * @param pageType - The type of page requesting links
 * @param countySlug - County slug if the page is county-specific
 * @param propertyTypeSlug - Property type slug if applicable
 * @returns Array of related link objects
 */
export function getRelatedLinks(
  pageType: PageType,
  countySlug?: string,
  propertyTypeSlug?: string
): RelatedLink[] {
  const links: RelatedLink[] = [];

  switch (pageType) {
    case 'pillar':
      // Pillar pages link to tier-1 county pages and identity pages
      TIER_1_COUNTIES.forEach((county) => {
        links.push({
          label: `${county.name} County Commercial Real Estate`,
          url: `/counties/${county.slug}`,
        });
      });
      IDENTITY_SLUGS.forEach((slug) => {
        links.push({
          label: formatSlugLabel(slug),
          url: `/${slug}`,
        });
      });
      break;

    case 'county':
      // County pages link to property types within that county + pillar pages
      if (countySlug) {
        PROPERTY_TYPES.forEach((pt) => {
          links.push({
            label: `${pt.name} in ${formatSlugLabel(countySlug)} County`,
            url: `/counties/${countySlug}/${pt.slug}`,
          });
        });
      }
      PILLAR_SLUGS.forEach((slug) => {
        links.push({
          label: formatSlugLabel(slug),
          url: `/${slug}`,
        });
      });
      break;

    case 'property-type':
      // Property type pages link to the parent county, sibling property types, and pillar pages
      if (countySlug) {
        const county = FLORIDA_COUNTIES.find((c) => c.slug === countySlug);
        if (county) {
          links.push({
            label: `All ${county.name} County CRE`,
            url: `/counties/${countySlug}`,
          });
        }
        // Sibling property types (same county, different type)
        PROPERTY_TYPES.filter((pt) => pt.slug !== propertyTypeSlug).forEach((pt) => {
          links.push({
            label: `${pt.name} in ${formatSlugLabel(countySlug)} County`,
            url: `/counties/${countySlug}/${pt.slug}`,
          });
        });
      }
      break;

    case 'identity':
      // Identity pages link to pillar pages and tier-1 counties
      PILLAR_SLUGS.forEach((slug) => {
        links.push({
          label: formatSlugLabel(slug),
          url: `/${slug}`,
        });
      });
      TIER_1_COUNTIES.slice(0, 4).forEach((county) => {
        links.push({
          label: `${county.name} County CRE`,
          url: `/counties/${county.slug}`,
        });
      });
      break;

    case 'blog':
      // Blog posts link to relevant pillar and county pages
      PILLAR_SLUGS.forEach((slug) => {
        links.push({
          label: formatSlugLabel(slug),
          url: `/${slug}`,
        });
      });
      if (countySlug) {
        links.push({
          label: `${formatSlugLabel(countySlug)} County CRE`,
          url: `/counties/${countySlug}`,
        });
      }
      break;

    case 'service':
      // Service pages link to identity and county pages
      IDENTITY_SLUGS.forEach((slug) => {
        links.push({
          label: formatSlugLabel(slug),
          url: `/${slug}`,
        });
      });
      TIER_1_COUNTIES.slice(0, 4).forEach((county) => {
        links.push({
          label: `${county.name} County CRE`,
          url: `/counties/${county.slug}`,
        });
      });
      break;
  }

  return links;
}

/**
 * Convert a URL slug to a human-readable label.
 * e.g., "for-investors" → "For Investors"
 */
function formatSlugLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
