import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap for HenCRE
 * Auto-generates URLs for all static pages, market pages, service pages,
 * property type pages, insights, blog posts, and identity pages.
 * Regenerated on each build (content engine pushes → Vercel rebuilds → sitemap updates).
 */

// Tier 1 counties (deep market pages)
const TIER1_COUNTIES = [
  "hillsborough", "pinellas", "pasco", "polk",
  "manatee", "sarasota", "citrus", "hernando",
];

// Service page slugs
const SERVICES = [
  "tenant-representation", "landlord-leasing", "investment-sales",
  "dispositions", "cre-valuation", "commercial-property-management",
  "commercial-property-management/tenant-relations",
  "commercial-property-management/maintenance-operations",
  "commercial-property-management/financial-reporting",
  "commercial-property-management/lease-administration",
  "commercial-property-management/vacancy-marketing",
];

// Property type slugs
const PROPERTY_TYPES = [
  "office-space", "retail-space", "industrial-warehouse",
  "multifamily", "nnn-net-lease", "land-development",
];

// Insight article slugs
const INSIGHTS = [
  "what-is-a-cap-rate", "nnn-lease-explained", "cam-charges-explained",
  "1031-exchange-basics", "leasing-vs-buying-commercial",
  "how-to-value-commercial-property", "gross-vs-net-lease",
  "cre-due-diligence-checklist",
];

// Blog posts — read from manifest (auto-updated by content engine)
import blogManifest from "@/../public/data/blog-manifest.json";
const BLOG_POSTS = blogManifest.map((p: { slug: string }) => p.slug);

// Identity page cities for Tier 1
const IDENTITY_CITIES = [
  "tampa", "st-petersburg", "clearwater", "lakeland", "bradenton",
  "sarasota", "new-port-richey", "spring-hill", "brandon", "wesley-chapel",
];

const IDENTITY_ROLES = [
  "commercial-real-estate-agent",
  "commercial-realtor",
  "commercial-real-estate-broker",
  "commercial-practitioner",
  "commercial-real-estate",
  "cre-broker",
  "investment-property",
  "commercial-property",
];

const BASE_URL = "https://hencre.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages
  const corePages = [
    "", "about", "contact", "faq", "thank-you", "refer-a-deal",
    "services", "commercial", "markets", "insights", "blog",
    "remax-commercial", "remax-commercial-florida",
  ].map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1.0 : (path === "remax-commercial" || path === "remax-commercial-florida") ? 0.9 : 0.8,
  }));

  // Service pages
  const servicePages = SERVICES.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Property type pages
  const propertyPages = PROPERTY_TYPES.map((slug) => ({
    url: `${BASE_URL}/commercial/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Market pages
  const marketPages = TIER1_COUNTIES.map((county) => ({
    url: `${BASE_URL}/markets/${county}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Insight articles
  const insightPages = INSIGHTS.map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPages = BLOG_POSTS.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Identity/keyword pages
  const identityPages = IDENTITY_CITIES.flatMap((city) =>
    IDENTITY_ROLES.map((role) => ({
      url: `${BASE_URL}/${role}-${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...corePages,
    ...servicePages,
    ...propertyPages,
    ...marketPages,
    ...insightPages,
    ...blogPages,
    ...identityPages,
  ];
}
