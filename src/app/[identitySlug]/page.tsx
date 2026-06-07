import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Identity / Keyword Pages
 * Dynamic route targeting "commercial real estate [role] [city]"
 * searches. 10 cities x 4 role variants = 40 pages.
 * Only renders pages returned by generateStaticParams.
 * ----------------------------------------------------------------- */

/* Prevent rendering pages NOT in generateStaticParams — returns 404 */
export const dynamicParams = false;

/* ---- City data: unique CRE content for each city ---- */
interface CityData {
  /** Display name */
  name: string;
  /** County for breadcrumb / linking */
  county: string;
  countySlug: string;
  /** 3-5 sentences about the CRE landscape in this city */
  landscape: string;
  /** What makes this city different from a CRE perspective */
  differentiator: string;
  /** Key commercial corridors or districts */
  corridors: string;
  /** What Barrett offers specifically here */
  whyBarrett: string;
}

const CITIES: Record<string, CityData> = {
  tampa: {
    name: "Tampa",
    county: "Hillsborough",
    countySlug: "hillsborough",
    landscape:
      "Tampa is the commercial capital of Florida's Gulf Coast. The Westshore business district hosts the largest suburban office market in the region, while downtown Tampa's Water Street development has added Class A office, hotel, and mixed-use inventory to the waterfront. The I-75 corridor through Brandon and Riverview is one of the state's most active industrial zones, and South Tampa commands premium rents for boutique retail and neighborhood office space.",
    differentiator:
      "Tampa's advantage is scale and diversity. Unlike single-industry metros, Tampa's CRE market is powered by financial services, healthcare, defense, technology, logistics, and higher education — creating resilient demand across all property types even when individual sectors slow.",
    corridors:
      "Westshore Boulevard, Kennedy Boulevard, Water Street, Fowler Avenue near USF, I-75 from Ybor City through Riverview, Dale Mabry Highway, and the Gandy corridor connecting Tampa to St. Petersburg.",
    whyBarrett:
      "Barrett Henry operates from the Tampa Bay market and works across all commercial property types — office, retail, industrial, land, and special-use. He represents buyers, sellers, tenants, and landlords, providing deal analysis and negotiation from first contact through closing.",
  },
  "st-petersburg": {
    name: "St. Petersburg",
    county: "Pinellas",
    countySlug: "pinellas",
    landscape:
      "St. Petersburg has transformed from a sleepy retirement city into one of the Southeast's most dynamic urban markets. Downtown St. Pete's Innovation District attracts tech startups, venture capital firms, and creative agencies, driving strong demand for Class A and creative office space. The city's walkable downtown, waterfront parks, and nationally recognized dining and arts scene make it a magnet for companies competing for young talent.",
    differentiator:
      "St. Petersburg's combination of urban walkability, cultural vibrancy, and a growing technology ecosystem gives it a tenant profile that is distinct from Tampa's more corporate-driven market. Businesses choose St. Pete specifically for its lifestyle and talent-attraction advantages.",
    corridors:
      "Central Avenue and the 600 Block arts district, the Innovation District near USF St. Petersburg, 4th Street North retail corridor, the Tropicana Field redevelopment site, and the waterfront from the Pier to the Dali Museum.",
    whyBarrett:
      "Barrett helps office tenants find creative and Class A space in downtown St. Petersburg, retailers secure high-foot-traffic locations, and investors evaluate properties in a market where land constraints protect long-term values.",
  },
  clearwater: {
    name: "Clearwater",
    county: "Pinellas",
    countySlug: "pinellas",
    landscape:
      "Clearwater combines a nationally ranked beach tourism market with a suburban commercial core that serves Pinellas County's northern population base. The city's commercial fabric includes the Gulf-to-Bay corridor connecting downtown to US-19, the Clearwater Mall area, and the beach tourism district along Mandalay Avenue and Gulfview Boulevard. Medical office is a strong property type, anchored by Morton Plant Hospital and surrounding specialty practices.",
    differentiator:
      "Clearwater Beach consistently ranks among the top beaches in the United States, driving a hospitality and tourism-adjacent commercial market that generates year-round revenue. The beach district's commercial properties benefit from both tourist spending and the spending power of nearby affluent residential communities.",
    corridors:
      "Gulf-to-Bay Boulevard, Clearwater Beach/Mandalay Avenue, US-19 through Clearwater, the Countryside area near Westfield Countryside mall, and Court Street in downtown Clearwater.",
    whyBarrett:
      "Barrett works with hospitality operators near the beach, medical office tenants along Gulf-to-Bay, and retail operators seeking US-19 visibility. He provides buyer and seller representation, lease negotiation, and investment analysis throughout the Clearwater market.",
  },
  lakeland: {
    name: "Lakeland",
    county: "Polk",
    countySlug: "polk",
    landscape:
      "Lakeland sits at the crossroads of the I-4 corridor between Tampa and Orlando, making it one of Central Florida's most important logistics markets. The city has also experienced a downtown renaissance, with adaptive-reuse projects, new restaurants, and creative businesses bringing energy to a historic core anchored by Munn Park. Beyond logistics and downtown, Lakeland supports a diversified commercial base that includes medical office, retail, and office serving a growing residential population.",
    differentiator:
      "Lakeland offers what Tampa and Orlando cannot: large industrial parcels at accessible price points with direct I-4 access. For logistics and distribution operators, this is a major competitive advantage. At the same time, downtown Lakeland's revival gives creative and professional businesses a walkable, character-rich environment at rents far below either metro core.",
    corridors:
      "I-4 corridor industrial parks, South Florida Avenue retail strip, downtown Munn Park district, US-98/Bartow Road commercial corridor, and Memorial Boulevard connecting I-4 to downtown.",
    whyBarrett:
      "Barrett helps logistics operators secure I-4 corridor warehouse space, retailers find high-traffic outparcels, and investors evaluate income properties in a market with strong fundamentals and room to grow.",
  },
  bradenton: {
    name: "Bradenton",
    county: "Manatee",
    countySlug: "manatee",
    landscape:
      "Bradenton is the commercial center of Manatee County and a market that benefits from its position between Tampa and Sarasota. The city's CRE landscape includes a revitalizing downtown with boutique retail and restaurant space, growing commercial nodes at I-75 interchanges, and an industrial base anchored by Port Manatee — one of the closest deep-water ports to the Panama Canal on Florida's Gulf Coast.",
    differentiator:
      "Bradenton offers investors and tenants the upside of being in a growth market between two strong metros without the pricing premium of either. Port Manatee adds an industrial and logistics dimension that most suburban markets lack, while the Lakewood Ranch corridor provides a polished suburban commercial environment.",
    corridors:
      "Manatee Avenue (SR 64) from I-75 to the beach, US-41 through Palmetto and Bradenton, Cortez Road, downtown Bradenton's Village of the Arts, and the Lakewood Ranch commercial corridor.",
    whyBarrett:
      "Barrett serves Bradenton-area clients with buyer and seller representation, lease negotiation for retail and office tenants, industrial site selection near Port Manatee, and investment property analysis.",
  },
  sarasota: {
    name: "Sarasota",
    county: "Sarasota",
    countySlug: "sarasota",
    landscape:
      "Sarasota is one of Florida's most affluent coastal markets, known for high-end retail, professional office, and a tourism-driven hospitality sector. Downtown Sarasota commands premium rents for office and retail space, while St. Armands Circle is a nationally recognized luxury retail destination. The US-41 corridor is the county's primary commercial artery, hosting everything from auto dealerships to medical offices.",
    differentiator:
      "Sarasota's high household incomes, cultural economy, and limited land supply create a market where well-located commercial properties hold value exceptionally well. The tenant mix skews toward professional services, wealth management, and upscale retail — a profile that generates consistent demand and above-average rents.",
    corridors:
      "Main Street and downtown Sarasota, St. Armands Circle, US-41 (Tamiami Trail), Fruitville Road, Bee Ridge Road, and the North Port/Wellen Park growth area in southern Sarasota County.",
    whyBarrett:
      "Barrett helps professionals and retailers find space in Sarasota's premium market, assists investors with property analysis, and provides disposition strategy for owners looking to sell into a strong market.",
  },
  "new-port-richey": {
    name: "New Port Richey",
    county: "Pasco",
    countySlug: "pasco",
    landscape:
      "New Port Richey anchors western Pasco County's commercial market along the US-19 corridor. The area has a more established commercial fabric than eastern Pasco's greenfield growth, with older retail centers, medical offices, and auto-oriented businesses lining US-19. The city's downtown along the Pithlachascotee River has seen modest revitalization with restaurants and small retail, and the surrounding area benefits from a large residential base that supports neighborhood-level commercial demand.",
    differentiator:
      "New Port Richey offers value-add and repositioning opportunities that are harder to find in high-growth markets where everything is new construction. Older retail centers can be acquired at accessible price points, renovated, and re-tenanted to capture the spending power of the surrounding residential population.",
    corridors:
      "US-19 from Port Richey through New Port Richey, Main Street downtown, the Little Road corridor, SR 54 west of I-75, and the Suncoast Parkway interchange areas.",
    whyBarrett:
      "Barrett works with investors seeking value-add retail opportunities on US-19, business owners looking for office or retail space, and developers evaluating repositioning projects in western Pasco's established commercial corridors.",
  },
  "spring-hill": {
    name: "Spring Hill",
    county: "Hernando",
    countySlug: "hernando",
    landscape:
      "Spring Hill is the population center of Hernando County and its primary commercial market. The US-19 corridor through Spring Hill is the county's busiest retail strip, while the Suncoast Parkway has created new commercial development nodes at each interchange. Medical office is particularly strong, driven by two hospital campuses and a growing network of outpatient facilities serving the area's large retiree population.",
    differentiator:
      "Spring Hill's commercial market is still maturing, which means early entrants can secure locations and build customer bases before competition intensifies. Land costs and lease rates are well below Tampa Bay metro levels, making it accessible for small businesses and first-time commercial investors.",
    corridors:
      "US-19 through Spring Hill, Spring Hill Drive, Mariner Boulevard, Suncoast Parkway interchanges at SR 50 and Spring Hill Drive, and the commercial strip along SR 50 (Cortez Boulevard).",
    whyBarrett:
      "Barrett helps Spring Hill businesses find the right retail or medical office space, investors evaluate income properties at accessible price points, and developers acquire commercial land near Suncoast Parkway interchanges.",
  },
  brandon: {
    name: "Brandon",
    county: "Hillsborough",
    countySlug: "hillsborough",
    landscape:
      "Brandon is one of Tampa Bay's largest suburban commercial hubs, located at the intersection of I-75 and SR 60 in eastern Hillsborough County. The area's commercial identity is built around strong retail — anchored by Westfield Brandon Mall and surrounding power centers — and a growing industrial presence along the I-75 corridor stretching south toward Riverview. Medical office is also active, with multiple hospital and urgent care campuses serving the area's dense residential population.",
    differentiator:
      "Brandon's I-75/SR 60 interchange is one of the highest-traffic intersections in Hillsborough County, giving retailers and service businesses strong visibility and access. The area's dense suburban population provides a reliable consumer base, while its industrial corridor offers warehouse and distribution space close to Tampa's urban core at lower rents.",
    corridors:
      "Brandon Boulevard (SR 60), I-75 interchange area, Causeway Boulevard industrial corridor, Bloomingdale Avenue, and Valrico/FishHawk retail nodes to the east.",
    whyBarrett:
      "Barrett works with retail tenants seeking Brandon's high-traffic locations, industrial users along the I-75 corridor, medical office operators expanding into the area, and investors evaluating suburban commercial properties with strong fundamentals.",
  },
  "wesley-chapel": {
    name: "Wesley Chapel",
    county: "Pasco",
    countySlug: "pasco",
    landscape:
      "Wesley Chapel is the growth engine of Pasco County and one of the fastest-expanding suburban markets in Florida. The area has gone from largely undeveloped to a bustling commercial district in just over a decade, anchored by The Shops at Wiregrass and Tampa Premium Outlets. National retailers, healthcare systems, and restaurant groups have followed the rooftops, creating a dense commercial ecosystem along the SR 54/SR 56 corridor. New hospital campuses and medical office buildings are among the most significant recent additions.",
    differentiator:
      "Wesley Chapel's growth trajectory is still in early innings — new residential communities continue to deliver, and commercial development follows. This creates an unusual opportunity to enter a market that is already proven but still expanding, with new pad sites and commercial parcels coming to market regularly.",
    corridors:
      "SR 54 from I-75 west to the Suncoast Parkway, SR 56 east toward Zephyrhills, Bruce B. Downs Boulevard, the Wiregrass area around Tampa Premium Outlets, and new development nodes near the Suncoast Parkway interchange.",
    whyBarrett:
      "Barrett helps national retailers and healthcare operators find pad sites and inline space in Wesley Chapel's growing corridor, developers acquire entitled commercial land, and investors evaluate properties in one of Florida's most dynamic suburban growth markets.",
  },
};

/* ---- Role variants: 4 identity types per city ---- */
interface RoleVariant {
  /** Slug suffix (e.g., "agent" in "commercial-real-estate-agent-tampa") */
  suffix: string;
  /** Display title for the role */
  roleTitle: string;
  /** Brief description of what this role means in CRE context */
  roleDescription: string;
}

const ROLE_VARIANTS: RoleVariant[] = [
  {
    suffix: "agent",
    roleTitle: "Commercial Real Estate Agent",
    roleDescription:
      "A commercial real estate agent helps businesses and investors find, negotiate, and close transactions involving office, retail, industrial, and other commercial properties. An effective CRE agent understands local market dynamics, property valuations, lease structures, and zoning requirements.",
  },
  {
    suffix: "realtor",
    roleTitle: "Commercial REALTOR\u00AE",
    roleDescription:
      "A commercial REALTOR\u00AE is a licensed real estate professional who is also a member of the National Association of REALTORS\u00AE, adhering to a strict code of ethics. This designation ensures that your broker operates under professional standards that prioritize your interests throughout the transaction.",
  },
  {
    suffix: "broker",
    roleTitle: "Commercial Real Estate Broker",
    roleDescription:
      "A commercial real estate broker holds an advanced license that allows them to manage transactions independently, supervise other agents, and provide a higher level of deal analysis and negotiation. Working with a broker — especially a Broker Associate at a respected firm — ensures experienced oversight on every deal.",
  },
  {
    suffix: "practitioner",
    roleTitle: "Commercial Real Estate Practitioner",
    roleDescription:
      "A commercial real estate practitioner is a professional who works across the full spectrum of CRE activities — leasing, sales, investment analysis, dispositions, and advisory. The term reflects hands-on deal experience across multiple property types and transaction structures.",
  },
];

/* ---- Slug parsing: extract city key and role suffix from the slug ---- */
function parseSlug(slug: string): { cityKey: string; roleSuffix: string } | null {
  /* Possible prefixes that precede the city name in the slug */
  const prefixes = [
    "commercial-real-estate-agent-",
    "commercial-realtor-",
    "commercial-real-estate-broker-",
    "commercial-practitioner-",
  ];

  /* Corresponding role suffixes */
  const suffixes = ["agent", "realtor", "broker", "practitioner"];

  for (let i = 0; i < prefixes.length; i++) {
    if (slug.startsWith(prefixes[i])) {
      const cityKey = slug.slice(prefixes[i].length);
      if (CITIES[cityKey]) {
        return { cityKey, roleSuffix: suffixes[i] };
      }
    }
  }
  return null;
}

/* ---- generateStaticParams: 10 cities x 4 roles = 40 pages ---- */
export function generateStaticParams() {
  const params: { identitySlug: string }[] = [];

  for (const cityKey of Object.keys(CITIES)) {
    params.push({ identitySlug: `commercial-real-estate-agent-${cityKey}` });
    params.push({ identitySlug: `commercial-realtor-${cityKey}` });
    params.push({ identitySlug: `commercial-real-estate-broker-${cityKey}` });
    params.push({ identitySlug: `commercial-practitioner-${cityKey}` });
  }

  return params;
}

/* ---- generateMetadata: unique title/description per page ---- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ identitySlug: string }>;
}): Promise<Metadata> {
  const { identitySlug } = await params;
  const parsed = parseSlug(identitySlug);

  if (!parsed) {
    return { title: "Commercial Real Estate | HenCRE" };
  }

  const city = CITIES[parsed.cityKey];
  const role = ROLE_VARIANTS.find((r) => r.suffix === parsed.roleSuffix)!;

  const title = `${role.roleTitle} in ${city.name} — Barrett Henry | HenCRE`;
  const description = `Looking for a ${role.roleTitle.toLowerCase()} in ${city.name}, ${city.county} County? Barrett Henry is a REALTOR® & Broker Associate at REMAX Collective serving ${city.name} and all of ${city.county} County, Florida.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://hencre.com/${identitySlug}`,
    },
  };
}

/* ---- Page component ---- */
export default async function IdentityPage({
  params,
}: {
  params: Promise<{ identitySlug: string }>;
}) {
  const { identitySlug } = await params;
  const parsed = parseSlug(identitySlug);

  /* This should not happen because of dynamicParams = false, but safety first */
  if (!parsed) {
    return <div>Page not found</div>;
  }

  const city = CITIES[parsed.cityKey];
  const role = ROLE_VARIANTS.find((r) => r.suffix === parsed.roleSuffix)!;

  /* ---- JSON-LD schema ---- */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        name: "Barrett Henry",
        jobTitle: "REALTOR\u00AE & Broker Associate",
        worksFor: {
          "@type": "RealEstateOrganization",
          name: "REMAX Collective",
        },
        telephone: "(813) 733-7907",
        email: "barrett@nowtb.com",
        url: `https://hencre.com/${identitySlug}`,
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: `${city.county} County, Florida`,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
          { "@type": "ListItem", position: 2, name: "Markets", item: "https://hencre.com/markets" },
          {
            "@type": "ListItem",
            position: 3,
            name: `${city.county} County`,
            item: `https://hencre.com/markets/${city.countySlug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${role.roleTitle} in ${city.name}`,
            item: `https://hencre.com/${identitySlug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: `${city.county} County`, href: `/markets/${city.countySlug}` },
          { label: `${role.roleTitle} in ${city.name}`, href: `/${identitySlug}` },
        ]}
      />

      <Hero
        title={`${role.roleTitle} in ${city.name}`}
        subtitle={`Barrett Henry — REALTOR\u00AE & Broker Associate at REMAX Collective, serving ${city.name} and ${city.county} County, Florida.`}
        ctaText="Contact Barrett"
        ctaHref="/contact"
      />

      {/* ---- What This Role Means ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">
            What Is a {role.roleTitle}?
          </h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>{role.roleDescription}</p>
          </div>
        </div>
      </section>

      {/* ---- CRE Landscape in This City ---- */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">
            Commercial Real Estate in {city.name}
          </h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>{city.landscape}</p>
            <p>{city.differentiator}</p>
          </div>
        </div>
      </section>

      {/* ---- Key Corridors ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">
            Key Commercial Corridors in {city.name}
          </h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>{city.corridors}</p>
          </div>
        </div>
      </section>

      {/* ---- Why Barrett ---- */}
      <section className="bg-warm-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-navy sm:text-3xl">
            Why Work with Barrett Henry in {city.name}?
          </h2>
          <div className="space-y-5 text-slate-brand leading-relaxed">
            <p>{city.whyBarrett}</p>
            <p>
              Barrett Henry is a licensed REALTOR® and Broker Associate at REMAX Collective
              with 23+ years of real estate experience. He provides commercial real estate
              services across {city.county} County including buyer and seller representation,
              tenant and landlord lease negotiation, investment property analysis, and
              disposition strategy. Whether you need office, retail, industrial, or land
              in {city.name}, Barrett is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CTASection
        heading={`Find the Right ${city.name} CRE Opportunity`}
        body={`Barrett Henry is ready to help you navigate ${city.name}'s commercial real estate market. Call (813) 733-7907 or use the contact form to get started.`}
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      {/* ---- Related links ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-bold text-navy sm:text-2xl">
            More CRE Resources
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/markets/${city.countySlug}`}
              className="rounded-lg border border-slate-brand/10 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <span className="font-semibold text-navy">{city.county} County Market</span>
              <span className="mt-1 block text-sm text-slate-brand">
                Full county CRE market overview
              </span>
            </Link>
            <Link
              href="/markets"
              className="rounded-lg border border-slate-brand/10 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <span className="font-semibold text-navy">All Markets</span>
              <span className="mt-1 block text-sm text-slate-brand">
                Explore all 8 county markets
              </span>
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-brand/10 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <span className="font-semibold text-navy">Our Services</span>
              <span className="mt-1 block text-sm text-slate-brand">
                Leasing, sales, investment, and more
              </span>
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-brand/10 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <span className="font-semibold text-navy">Contact Barrett</span>
              <span className="mt-1 block text-sm text-slate-brand">
                (813) 733-7907 or fill out the form
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
