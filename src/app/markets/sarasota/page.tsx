import Link from "next/link";
import Image from "next/image";
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

/* FAQ items specific to Sarasota County CRE */
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

/* JSON-LD: LocalBusiness + Service + FAQPage */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Sarasota County.",
      telephone: "(813) 733-7907",
      email: "barrett@hencre.com",
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
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

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

      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }, { label: "Sarasota County", href: "/markets/sarasota" }]} />

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
              management, healthcare, <a href="/commercial/retail-space" className="text-accent underline">high-end retail</a>, and hospitality. The city of Sarasota
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
              it tends to be high-quality construction targeting premium tenants. Investors
              evaluating these assets can use our <a href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</a> to assess return profiles.
              The county also borders <a href="/markets/manatee" className="text-accent underline">Manatee County</a>, and the Lakewood Ranch corridor straddles
              both markets.
            </p>
            <p>
              The southern part of the county around North Port and Wellen Park represents a
              different opportunity. Rapid residential construction has outpaced commercial
              development, creating demand for the <a href="/commercial/retail-space" className="text-accent underline">retail</a>, medical <a href="/commercial/office-space" className="text-accent underline">office</a>, and service
              businesses that new residents need. Developers and operators who enter this
              submarket early can position themselves ahead of the curve. For more on the
              Sarasota office market, see our <a href="/blog/sarasota-office-market-trends-2026" className="text-accent underline">Sarasota office market trends</a> post.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&h=500&fit=crop"
          alt="downtown waterfront streetscape representing the high-end commercial environment in Sarasota"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

      {/* ---- Key Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Key CRE Corridors and Districts</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Downtown Sarasota</strong> — The cultural
              and commercial heart of the county. Class A <a href="/commercial/office-space" className="text-accent underline">office space</a>, high-end retail,
              restaurants, and luxury condominiums create a dense, walkable urban
              environment. Professional services firms — law, financial planning,
              architecture — are the primary office tenants. Ground-floor <a href="/commercial/retail-space" className="text-accent underline">retail</a> benefits
              from a combination of resident foot traffic and tourism. <a href="/services/tenant-representation" className="text-accent underline">Tenant representation</a>
              in this submarket requires patience and market relationships, since prime
              space rarely comes available through public listings.
            </p>
            <p>
              <strong className="text-black">US-41 (Tamiami Trail)</strong> — The
              county&apos;s primary commercial corridor running north-south through Sarasota.
              It hosts the broadest mix of commercial uses: auto dealerships, strip
              retail, medical office, restaurants, and service businesses. Traffic
              counts make this corridor attractive for retailers and service-oriented
              tenants. <a href="/services/investment-sales" className="text-accent underline">Investment sales</a> along US-41 often involve multi-tenant retail centers
              and NNN-leased properties with national tenants.
            </p>
            <p>
              <strong className="text-black">St. Armands Circle</strong> — One of
              Florida&apos;s most iconic retail destinations. High-end boutiques,
              galleries, and restaurants serve both tourists and affluent local
              residents. <a href="/commercial/retail-space" className="text-accent underline">Retail space</a> here commands premium rents and has extremely
              low turnover. Understanding <a href="/insights/nnn-lease-explained" className="text-accent underline">NNN lease structures</a> is important
              for evaluating the investment characteristics of properties here.
            </p>
            <p>
              <strong className="text-black">North Port / Wellen Park</strong> — The
              county&apos;s growth frontier. New residential communities are creating
              demand for grocery-anchored retail, medical offices, and neighborhood
              services. <a href="/commercial/land-development" className="text-accent underline">Land</a> is available and more affordable than in the Sarasota core,
              making it a viable entry point for developers who want Sarasota County
              exposure without premium land pricing.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <Image
          src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=900&h=500&fit=crop"
          alt="upscale retail corridor representing the high-end commercial real estate environment in Sarasota County"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

      {/* ---- Property Types ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Active Property Types</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">Retail</strong> — From St. Armands luxury
              boutiques to North Port neighborhood centers, <a href="/commercial/retail-space" className="text-accent underline">retail space</a> spans the full
              spectrum. Well-located space in established areas rarely stays vacant long.
              National credit tenants entering this market often seek <a href="/insights/nnn-lease-explained" className="text-accent underline">NNN lease</a>
              structures on outparcels with strong traffic counts.
            </p>
            <p>
              <strong className="text-black">Office</strong> — Downtown Sarasota leads
              with Class A professional <a href="/commercial/office-space" className="text-accent underline">office</a>. Medical office is active countywide,
              particularly near hospitals and along the major corridors. The Lakewood
              Ranch corridor, shared with <a href="/markets/manatee" className="text-accent underline">Manatee County</a>, adds suburban office inventory
              that serves both markets.
            </p>
            <p>
              <strong className="text-black">Hospitality</strong> — Hotels and resort
              properties on Siesta Key, Lido Key, and in downtown Sarasota benefit from
              the county&apos;s nationally ranked beaches and cultural attractions.
              Hospitality-adjacent retail benefits from the same tourism demand.
            </p>
            <p>
              <strong className="text-black">Industrial</strong> — Limited but valuable.
              Existing <a href="/commercial/industrial-warehouse" className="text-accent underline">warehouse and flex space</a> in the Sarasota core is scarce and
              commands strong rents. North Port offers more land for light industrial
              development. For distribution-focused operators, the <a href="/blog/sarasota-warehouse-distribution-space-guide" className="text-accent underline">Sarasota warehouse
              and distribution space guide</a> covers the specific options in this market.
            </p>
            <p>
              <strong className="text-black">Land</strong> — <a href="/commercial/land-development" className="text-accent underline">Commercial land</a> in North Port
              and along the Fruitville and Bee Ridge corridors is actively sought by
              developers building retail centers and medical campuses. Land in the core
              Sarasota market is rare and commands a significant premium when it surfaces.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=500&fit=crop"
          alt="professional office building in Sarasota County representing the Class A office market"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
      </div>

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
            <p>
              Services include <Link href="/services/investment-sales" className="text-accent underline">buyer and seller representation</Link>,
              <Link href="/services/tenant-representation" className="text-accent underline"> tenant and landlord lease negotiation</Link>,
              <Link href="/services/cre-valuation" className="text-accent underline"> investment property analysis</Link>, land acquisition, and
              <Link href="/services/dispositions" className="text-accent underline"> disposition strategy</Link> across all commercial property types.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Lead Form ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="lead-form">
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

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
