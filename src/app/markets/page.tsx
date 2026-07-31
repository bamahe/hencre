import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Markets Index — all 20 Florida county market pages.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Markets | Florida Commercial Real Estate 2026",
  description:
    "Explore commercial real estate markets across all 67 Florida counties. County-by-county CRE insights from Barrett Henry, Broker Associate at REMAX Collective. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets" },
  openGraph: {
    title: "Commercial Real Estate Markets Across Florida | HenCRE",
    description:
      "County-by-county CRE market insights from Tampa Bay to South Florida. Barrett Henry, Broker Associate at REMAX Collective, covers all 67 Florida counties.",
    url: "https://hencre.com/markets",
  },
};

/* Core Tampa Bay / Central Florida markets */
const CORE_MARKETS = [
  {
    slug: "hillsborough",
    county: "Hillsborough County",
    city: "Tampa",
    description:
      "The largest CRE market in the Tampa Bay region. Home to the Westshore business district, downtown Tampa, and a massive I-75 industrial pipeline stretching from Ybor City south through Riverview.",
  },
  {
    slug: "pinellas",
    county: "Pinellas County",
    city: "St. Petersburg & Clearwater",
    description:
      "A coastal market with surging office and creative-space demand in downtown St. Petersburg, established retail along US-19, and a tourism-driven hospitality sector anchored by the beaches.",
  },
  {
    slug: "pasco",
    county: "Pasco County",
    city: "New Port Richey & Wesley Chapel",
    description:
      "One of Florida's fastest-growing corridors. The SR 54/56 retail boom, expanding industrial parks near I-75, and rooftops driving new medical office and neighborhood retail development.",
  },
  {
    slug: "polk",
    county: "Polk County",
    city: "Lakeland & Winter Haven",
    description:
      "Central Florida's logistics powerhouse. The I-4 corridor between Tampa and Orlando attracts major warehouse and distribution users, while downtown Lakeland revitalizes with mixed-use projects.",
  },
  {
    slug: "manatee",
    county: "Manatee County",
    city: "Bradenton",
    description:
      "A growing CRE market between Tampa and Sarasota. New retail nodes along I-75 interchanges, an expanding industrial base near Port Manatee, and a revitalizing downtown Bradenton scene.",
  },
  {
    slug: "sarasota",
    county: "Sarasota County",
    city: "Sarasota",
    description:
      "A high-end market known for premier retail, tourism-driven hospitality, and a well-established office sector. Downtown Sarasota and the US-41 corridor are the primary CRE hubs.",
  },
  {
    slug: "hernando",
    county: "Hernando County",
    city: "Spring Hill & Brooksville",
    description:
      "A growing suburban market fueled by the Suncoast Parkway extension. Retail pad sites, industrial land, and medical office space are in demand as population growth outpaces supply.",
  },
  {
    slug: "citrus",
    county: "Citrus County",
    city: "Crystal River & Inverness",
    description:
      "An emerging market along the US-19 corridor with growing demand for retail, medical office, and light industrial space as the Nature Coast attracts new residents and businesses.",
  },
] as const;

/* Statewide coverage markets */
const STATEWIDE_MARKETS = [
  {
    slug: "brevard",
    county: "Brevard County",
    city: "Melbourne & Titusville",
    description:
      "The Space Coast aerospace corridor anchored by SpaceX, Blue Origin, and L3Harris. Port Canaveral drives industrial demand while Melbourne's office market benefits from defense and tech sector growth.",
  },
  {
    slug: "broward",
    county: "Broward County",
    city: "Fort Lauderdale",
    description:
      "South Florida's second-largest commercial market. Port Everglades drives industrial and logistics activity while Fort Lauderdale's downtown office, retail, and mixed-use sectors draw institutional investors.",
  },
  {
    slug: "collier",
    county: "Collier County",
    city: "Naples",
    description:
      "A high-income coastal market anchored by Naples' upscale retail and medical office sectors. Low inventory and strong population growth keep cap rates compressed and demand above supply.",
  },
  {
    slug: "charlotte",
    county: "Charlotte County",
    city: "Port Charlotte & Punta Gorda",
    description:
      "A retirement and medical office market between Sarasota and Fort Myers. Growing population is driving retail pad site development along US-41 and medical office expansion near Port Charlotte.",
  },
  {
    slug: "alachua",
    county: "Alachua County",
    city: "Gainesville",
    description:
      "Home to the University of Florida and UF Health, Alachua County supports a strong medical office market, student housing investment sector, and a growing innovation and research corridor.",
  },
  {
    slug: "clay",
    county: "Clay County",
    city: "Orange Park & Fleming Island",
    description:
      "A rapidly growing suburban Jacksonville market. Population spillover from Duval County is driving retail pad site development, medical office demand, and industrial land acquisition activity.",
  },
  {
    slug: "columbia",
    county: "Columbia County",
    city: "Lake City",
    description:
      "A strategic logistics crossroads where I-75 meets I-10. Distribution and warehousing activity is growing as investors recognize Lake City's position as a regional freight hub for North Florida.",
  },
  {
    slug: "bay",
    county: "Bay County",
    city: "Panama City Beach",
    description:
      "The Panhandle's largest commercial market. Tourism-driven hospitality along PCB, Tyndall Air Force Base expansion generating defense-adjacent industrial demand, and ongoing Hurricane Michael recovery investment.",
  },
  {
    slug: "bradford",
    county: "Bradford County",
    city: "Starke",
    description:
      "A small rural North Florida market positioned along US-301 between Gainesville and Jacksonville. Agriculture, light industrial, and government-related facility use characterize the market.",
  },
  {
    slug: "baker",
    county: "Baker County",
    city: "Macclenny",
    description:
      "A rural county west of Jacksonville along I-10 and US-90. Land acquisition for agricultural, light industrial, and logistics use is the primary CRE activity as Jacksonville metro sprawl reaches Baker County.",
  },
  {
    slug: "calhoun",
    county: "Calhoun County",
    city: "Blountstown",
    description:
      "One of Florida's smallest commercial markets, located in the central Panhandle along the Apalachicola River. Agricultural land, rural retail, and government facilities make up the primary inventory.",
  },
  {
    slug: "desoto",
    county: "DeSoto County",
    city: "Arcadia",
    description:
      "A rural South Central Florida market anchored by agriculture and small-scale commercial along US-17. Land acquisition and agricultural property investment are the primary commercial activities.",
  },
] as const;

/* All markets combined for schema */
const ALL_MARKETS = [...CORE_MARKETS, ...STATEWIDE_MARKETS];

/* Structured data */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://hencre.com/markets" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Real Estate Brokerage — Florida Markets",
      description:
        "Commercial real estate brokerage services across Florida counties, anchored in the Tampa Bay region with statewide coverage through the REMAX network.",
      provider: {
        "@type": "RealEstateAgent",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: {
          "@type": "RealEstateOrganization",
          name: "REMAX Collective",
        },
        telephone: "(813) 733-7907",
        email: "barrett@hencre.com",
        url: "https://hencre.com",
      },
      areaServed: ALL_MARKETS.map((m) => ({
        "@type": "AdministrativeArea",
        name: `${m.county}, Florida`,
      })),
    },
  ],
};

export default function MarketsIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }]} />

      <Hero
        title="Commercial Real Estate Markets"
        subtitle="County-by-county CRE insights across Florida. From established Tampa Bay urban cores to high-growth suburban corridors and statewide coverage through the REMAX network."
        ctaText="Contact Barrett"
        ctaHref="/contact"
      />

      {/* ---- Core markets intro ---- */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Core Tampa Bay Markets
        </h2>
        <p className="mb-10 max-w-3xl text-[#666666]">
          Barrett Henry, Broker Associate at REMAX Collective, provides direct
          commercial real estate brokerage across eight core counties in the Tampa Bay
          and Central Florida region — with offices in Tampa, Largo, and Brandon. Each
          market has its own drivers, opportunities, and challenges. Select a county
          for a deep dive. Also see{" "}
          <Link href="/services" className="font-semibold text-black underline">
            CRE services
          </Link>
          ,{" "}
          <Link href="/commercial" className="font-semibold text-black underline">
            property types
          </Link>
          , and{" "}
          <Link href="/insights" className="font-semibold text-black underline">
            market insights
          </Link>.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CORE_MARKETS.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="group flex flex-col rounded-lg border border-[#666666]/10 bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <div className="mb-3 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-black" />
                <h3 className="text-lg font-bold text-black group-hover:text-black">
                  {market.county}
                </h3>
              </div>
              <p className="mb-2 text-sm font-semibold text-black">
                {market.city}
              </p>
              <p className="mb-4 line-clamp-3 text-sm text-[#666666]">
                {market.description}
              </p>
              <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-black">
                Explore market
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- Statewide markets ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
          Statewide Coverage
        </h2>
        <p className="mb-10 max-w-3xl text-[#666666]">
          For commercial transactions outside the Tampa Bay core, Barrett coordinates
          deals across all 67 Florida counties through the REMAX Commercial referral
          network — connecting clients with the right local specialist for their market
          and property type. See our{" "}
          <Link href="/remax-commercial-florida" className="font-semibold text-black underline">
            REMAX Commercial Florida agents directory
          </Link>{" "}
          for full statewide coverage details.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STATEWIDE_MARKETS.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="group flex flex-col rounded-lg border border-[#666666]/10 bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <div className="mb-3 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-black" />
                <h3 className="text-lg font-bold text-black group-hover:text-black">
                  {market.county}
                </h3>
              </div>
              <p className="mb-2 text-sm font-semibold text-black">
                {market.city}
              </p>
              <p className="mb-4 line-clamp-3 text-sm text-[#666666]">
                {market.description}
              </p>
              <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-black">
                Explore market
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CTASection
        heading="Need Help Navigating These Markets?"
        body="Barrett Henry brings 23+ years of real estate experience to every commercial transaction. Whether you are buying, selling, leasing, or investing, get expert guidance tailored to your target market. Call (813) 733-7907."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
