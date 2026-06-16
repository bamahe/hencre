import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Sarasota County Market Page
 * High-end retail, office, tourism-driven CRE, US-41 corridor.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Sarasota County Commercial Real Estate | Barrett Henry, REMAX Collective",
  description:
    "Sarasota County CRE market — downtown retail and office, US-41 corridor, tourism-driven hospitality, Siesta Key. Call Barrett Henry at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/sarasota" },
  openGraph: {
    title: "Sarasota County Commercial Real Estate | Barrett Henry, REMAX Collective",
    description:
      "Explore Sarasota's high-end commercial real estate market — premium retail, office, and tourism-driven CRE.",
    url: "https://hencre.com/markets/sarasota",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Sarasota County.",
      telephone: "(813) 733-7907",
      email: "barrett@nowtb.com",
      url: "https://hencre.com/markets/sarasota",
      areaServed: { "@type": "AdministrativeArea", name: "Sarasota County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "Commercial Real Estate Advisor" },
    },
    {
      "@type": "Service",
      name: "Sarasota County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Sarasota County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Sarasota County, Florida" },
    },
  ],
};

const faqs = [
  {
    question: "What defines the Sarasota County commercial real estate market?",
    answer:
      "Sarasota's CRE market is defined by high-end retail, a strong tourism and hospitality sector, and a well-established office market serving professional services, wealth management, and healthcare. The market commands premium rents relative to other west Florida counties, reflecting high household incomes, a cultural economy built around arts and dining, and limited developable land in the most desirable locations.",
  },
  {
    question: "Where are the key commercial districts in Sarasota County?",
    answer:
      "Downtown Sarasota is the primary hub for office and upscale retail. The US-41 (Tamiami Trail) corridor is the county's main commercial artery for retail, auto dealerships, medical office, and service businesses. St. Armands Circle is a nationally recognized luxury retail destination. The Fruitville Road and Bee Ridge Road corridors serve suburban retail and office demand, while North Port is emerging as a growth market with more affordable land.",
  },
  {
    question: "Is Sarasota a good market for CRE investment?",
    answer:
      "Sarasota offers strong investment fundamentals — high and growing household incomes, a wealthy retiree and seasonal resident population, consistent tourism revenue, and limited land supply that protects existing asset values. The market tends to be less volatile than metros more dependent on a single industry, though pricing reflects the premium nature of the market.",
  },
  {
    question: "What CRE services does Barrett Henry provide in Sarasota County?",
    answer:
      "Barrett offers buyer and seller representation, tenant and landlord lease negotiation, investment property analysis, and disposition strategy across all commercial property types. He helps retailers find prime US-41 locations, office tenants secure downtown space, and investors evaluate opportunities in one of Florida's most desirable coastal markets.",
  },
  {
    question: "How is North Port changing the Sarasota County CRE landscape?",
    answer:
      "North Port, in southern Sarasota County, has experienced rapid residential growth that is now driving commercial development. New retail centers, medical offices, and service businesses are following the rooftops. Land is more affordable than in the Sarasota core, making it attractive for developers and businesses that want to be in Sarasota County without paying downtown-level prices.",
  },
];

const relatedMarkets = [
  { title: "Manatee County", href: "/markets/manatee", description: "Bradenton CRE market" },
  { title: "Hillsborough County", href: "/markets/hillsborough", description: "Tampa CRE market" },
  { title: "Pinellas County", href: "/markets/pinellas", description: "St. Pete & Clearwater CRE" },
  { title: "Polk County", href: "/markets/polk", description: "Lakeland & I-4 logistics" },
];

export default function SarasotaMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/markets" className="hover:underline no-underline">Markets</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Sarasota County</li>
        </ol>
      </nav>

      <Hero
        title="Sarasota County Commercial Real Estate"
        subtitle="A premium coastal market where high-end retail, professional office, and tourism-driven hospitality converge along one of Florida's most desirable waterfronts."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Sarasota County occupies one of the most affluent and culturally rich positions
              on Florida&apos;s Gulf Coast. The commercial real estate market here reflects that
              affluence — rents and sale prices are among the highest on the west coast outside
              of Naples, and the tenant mix leans heavily toward professional services, wealth
              management, healthcare, high-end retail, and hospitality. The city of Sarasota
              serves as the county&apos;s commercial center, with a walkable downtown, a thriving
              arts and dining scene, and a waterfront that draws both tourists and year-round
              residents.
            </p>
            <p>
              Unlike growth markets further north where new construction dominates, Sarasota&apos;s
              most desirable commercial locations have been built out for years. That scarcity
              drives competition for existing space — particularly in downtown, along US-41,
              and on St. Armands Circle — and makes well-located commercial properties
              particularly valuable as long-term holds. When new product does come to market,
              it tends to be high-quality construction targeting premium tenants.
            </p>
            <p>
              The southern part of the county around North Port and Wellen Park represents a
              different opportunity. Rapid residential construction has outpaced commercial
              development, creating demand for the retail, medical office, and service
              businesses that new residents need. Developers and operators who enter this
              submarket early can position themselves ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Key Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Key CRE Corridors and Districts</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Downtown Sarasota</strong> — The cultural
              and commercial heart of the county. Class A office, high-end retail,
              restaurants, and luxury condominiums create a dense, walkable urban
              environment. Professional services firms — law, financial planning,
              architecture — are the primary office tenants. Ground-floor retail benefits
              from a combination of resident foot traffic and tourism.
            </p>
            <p>
              <strong className="text-black">US-41 (Tamiami Trail)</strong> — The
              county&apos;s primary commercial corridor running north-south through Sarasota.
              It hosts the broadest mix of commercial uses: auto dealerships, strip
              retail, medical office, restaurants, and service businesses. Traffic
              counts make this corridor attractive for retailers and service-oriented
              tenants.
            </p>
            <p>
              <strong className="text-black">St. Armands Circle</strong> — One of
              Florida&apos;s most iconic retail destinations. High-end boutiques,
              galleries, and restaurants serve both tourists and affluent local
              residents. Retail space here commands premium rents and has extremely
              low turnover.
            </p>
            <p>
              <strong className="text-black">North Port / Wellen Park</strong> — The
              county&apos;s growth frontier. New residential communities are creating
              demand for grocery-anchored retail, medical offices, and neighborhood
              services. Land is available and more affordable than in the Sarasota core.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Property Types ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Active Property Types</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Retail</strong> — From St. Armands luxury
              boutiques to North Port neighborhood centers, retail spans the full
              spectrum. Well-located space in established areas rarely stays vacant long.
            </p>
            <p>
              <strong className="text-black">Office</strong> — Downtown Sarasota leads
              with Class A professional office. Medical office is active countywide.
              The Lakewood Ranch corridor (shared with Manatee County) adds suburban
              office inventory.
            </p>
            <p>
              <strong className="text-black">Hospitality</strong> — Hotels and resort
              properties on Siesta Key, Lido Key, and in downtown Sarasota benefit from
              the county&apos;s nationally ranked beaches and cultural attractions.
            </p>
            <p>
              <strong className="text-black">Industrial</strong> — Limited but valuable.
              Existing warehouse and flex space in the Sarasota core is scarce and commands
              strong rents. North Port offers more land for light industrial development.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            How Barrett Henry Serves This Market
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective who
              helps clients navigate Sarasota County&apos;s premium commercial real estate
              market. Whether you are seeking a retail location on St. Armands Circle,
              downtown office space for a professional services firm, or an investment
              property in the North Port growth corridor, Barrett brings deal experience
              and market knowledge to help you execute confidently.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Lead Form ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl">
            Sarasota County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Considering Sarasota County for Your Next CRE Move?"
        body="From downtown Class A office to St. Armands retail, Barrett can help you find and close the right deal in this premium market."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
