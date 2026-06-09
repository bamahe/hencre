/**
 * blog-topics.ts
 * City weights, business types, and topic category definitions
 * for the hencre.com auto-blog content engine.
 */

/* ---- City Pool with Weights ---- */

export interface CityEntry {
  name: string;
  county: string;
  tier: "high" | "medium" | "low";
}

/** High-frequency cities (60% of posts) */
const HIGH_TIER: CityEntry[] = [
  { name: "Tampa", county: "Hillsborough", tier: "high" },
  { name: "Brandon", county: "Hillsborough", tier: "high" },
  { name: "Valrico", county: "Hillsborough", tier: "high" },
  { name: "Riverview", county: "Hillsborough", tier: "high" },
  { name: "St. Petersburg", county: "Pinellas", tier: "high" },
  { name: "Clearwater", county: "Pinellas", tier: "high" },
  { name: "Wesley Chapel", county: "Pasco", tier: "high" },
  { name: "Land O' Lakes", county: "Pasco", tier: "high" },
  { name: "Largo", county: "Pinellas", tier: "high" },
];

/** Medium-frequency cities (30% of posts) */
const MEDIUM_TIER: CityEntry[] = [
  { name: "Lakeland", county: "Polk", tier: "medium" },
  { name: "Winter Haven", county: "Polk", tier: "medium" },
  { name: "Bradenton", county: "Manatee", tier: "medium" },
  { name: "Sarasota", county: "Sarasota", tier: "medium" },
  { name: "New Port Richey", county: "Pasco", tier: "medium" },
  { name: "Dunedin", county: "Pinellas", tier: "medium" },
  { name: "Palm Harbor", county: "Pinellas", tier: "medium" },
];

/** Low-frequency cities (10% of posts) */
const LOW_TIER: CityEntry[] = [
  { name: "Spring Hill", county: "Hernando", tier: "low" },
  { name: "Brooksville", county: "Hernando", tier: "low" },
  { name: "Crystal River", county: "Citrus", tier: "low" },
  { name: "Inverness", county: "Citrus", tier: "low" },
  { name: "Ruskin", county: "Hillsborough", tier: "low" },
  { name: "Plant City", county: "Hillsborough", tier: "low" },
];

/** Pick a weighted-random city. 60% high, 30% medium, 10% low. */
export function pickCity(): CityEntry {
  const roll = Math.random();
  const pool = roll < 0.6 ? HIGH_TIER : roll < 0.9 ? MEDIUM_TIER : LOW_TIER;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ---- Business Types ---- */

export const BUSINESS_TYPES = [
  "restaurant or food service",
  "medical office, dental practice, or urgent care",
  "retail storefront",
  "warehouse or distribution center",
  "office space or coworking",
  "auto repair shop, car wash, or dealership",
  "fitness center, gym, or wellness studio",
  "professional services firm (law, accounting, insurance)",
  "multifamily apartment complex",
  "land development or new construction",
  "commercial leasing",
  "commercial property management",
] as const;

/** Pick a random business type */
export function pickBusinessType(): string {
  return BUSINESS_TYPES[Math.floor(Math.random() * BUSINESS_TYPES.length)];
}

/* ---- Topic Categories ---- */

export type TopicCategory = "city-market" | "business-guide" | "investor";

/**
 * Pick category by day of week.
 * Monday = city-market, Wednesday = business-guide, Friday = investor
 * Fallback: rotate in order.
 */
export function pickCategory(): TopicCategory {
  const day = new Date().getDay(); // 0=Sun, 1=Mon, 3=Wed, 5=Fri
  if (day === 1) return "city-market";
  if (day === 3) return "business-guide";
  if (day === 5) return "investor";
  // Fallback for manual triggers
  const cats: TopicCategory[] = ["city-market", "business-guide", "investor"];
  return cats[Math.floor(Math.random() * cats.length)];
}

/* ---- Existing Pages for Internal Linking ---- */

/** Service page slugs for cross-linking in blog posts */
export const SERVICE_SLUGS = [
  "tenant-representation",
  "landlord-leasing",
  "investment-sales",
  "dispositions",
  "cre-valuation",
];

/** Property type slugs for cross-linking */
export const PROPERTY_TYPE_SLUGS = [
  "office-space",
  "retail-space",
  "industrial-warehouse",
  "multifamily",
  "nnn-net-lease",
  "land-development",
];

/** County slugs for market page links */
export const COUNTY_SLUGS = [
  "hillsborough",
  "pinellas",
  "pasco",
  "polk",
  "manatee",
  "sarasota",
  "citrus",
  "hernando",
];
