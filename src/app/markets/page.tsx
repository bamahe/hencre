import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Markets Index — overview page linking to all 8 Tier-1 county
 * market pages with brief descriptions of each CRE market.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Markets | Tampa Bay & Central Florida 2026",
  description:
    "Explore commercial real estate markets across Tampa Bay and Central Florida. County-by-county CRE insights for Hillsborough, Pinellas, Pasco, Polk, Manatee, Sarasota, Citrus, and Hernando counties.",
  openGraph: {
    title: "Commercial Real Estate Markets — Tampa Bay & Central Florida | REMAX Commercial Real Estate",
    description:
      "Explore commercial real estate markets across Tampa Bay and Central Florida. County-by-county CRE insights from Barrett Henry, Commercial Real Estate Advisor.",
    url: "https://hencre.com/markets",
  },
};

/* Data for each county market card */
const MARKETS = [
  {
    slug: "hillsborough",
    county: "Hillsborough County",
    city: "Tampa",
    description:
      "The largest CRE market in the Tampa Bay region. Home to the Westshore business district, downtown Tampa's growing office and mixed-use corridor, and a massive I-75 industrial pipeline stretching from Ybor City south through Riverview.",
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
      "Central Florida's logistics powerhouse. The I-4 corridor between Tampa and Orlando attracts major warehouse and distribution users, while Lakeland's downtown revitalizes with office and mixed-use projects.",
  },
  {
    slug: "manatee",
    county: "Manatee County",
    city: "Bradenton",
    description:
      "A growing CRE market between Tampa and Sarasota. New retail nodes along I-75 interchanges, an expanding industrial base near Port Manatee, and a revitalizing downtown Bradenton office and retail scene.",
  },
  {
    slug: "sarasota",
    county: "Sarasota County",
    city: "Sarasota",
    description:
      "A high-end market known for premier retail, tourism-driven hospitality, and a well-established office sector. Downtown Sarasota and the US-41 corridor are the primary CRE hubs.",
  },
  {
    slug: "citrus",
    county: "Citrus County",
    city: "Crystal River & Inverness",
    description:
      "An emerging market along the US-19 corridor with growing demand for retail, medical office, and light industrial space as the Nature Coast attracts new residents and businesses.",
  },
  {
    slug: "hernando",
    county: "Hernando County",
    city: "Spring Hill & Brooksville",
    description:
      "A growing suburban market fueled by the Suncoast Parkway extension. Retail pad sites, industrial land, and medical office space are in demand as population growth outpaces existing supply.",
  },
] as const;

/* Structured data: Service schema for the markets page */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Real Estate Brokerage — Tampa Bay & Central Florida Markets",
  description:
    "Commercial real estate brokerage services across eight counties in the Tampa Bay and Central Florida region.",
  provider: {
    "@type": "RealEstateAgent",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: {
      "@type": "RealEstateOrganization",
      name: "REMAX Collective",
    },
    telephone: "(813) 733-7907",
    email: "barrett@nowtb.com",
    url: "https://hencre.com",
  },
  areaServed: MARKETS.map((m) => ({
    "@type": "AdministrativeArea",
    name: `${m.county}, Florida`,
  })),
};

export default function MarketsIndexPage() {
  return (
    <>
      <SchemaOrg schema={serviceSchema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Markets</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Real Estate Markets"
        subtitle="County-by-county insights across Tampa Bay and Central Florida. From established urban cores to high-growth suburban corridors, find the right market for your next CRE opportunity."
        ctaText="Contact Barrett"
        ctaHref="/contact"
      />

      {/* ---- Market cards grid ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
            Explore Our Markets
          </h2>
          <p className="mb-10 max-w-3xl text-[#666666]">
            Barrett Henry provides commercial real estate brokerage services
            across eight key counties in the Tampa Bay and Central Florida
            region. Each market has its own drivers, opportunities, and
            challenges. Select a county below for a deep dive into that
            market.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="group flex flex-col rounded-lg border border-[#666666]/10 bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
              >
                {/* Icon + county name */}
                <div className="mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-black" />
                  <h3 className="text-lg font-bold text-black group-hover:text-black">
                    {market.county}
                  </h3>
                </div>

                {/* City names */}
                <p className="mb-2 text-sm font-semibold text-black">
                  {market.city}
                </p>

                {/* Brief description */}
                <p className="mb-4 line-clamp-3 text-sm text-[#666666]">
                  {market.description}
                </p>

                {/* Read more arrow */}
                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-black">
                  Explore market
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
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
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
