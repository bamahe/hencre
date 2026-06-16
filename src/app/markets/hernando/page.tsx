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
 * Hernando County Market Page
 * Spring Hill, Brooksville — growing suburban market along the
 * Suncoast Parkway with expanding retail, medical, and industrial.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Hernando County Commercial Real Estate | Barrett Henry, REMAX Collective",
  description:
    "Hernando County CRE market — Spring Hill retail, Suncoast Parkway corridor, Brooksville industrial, medical office growth. Call Barrett Henry at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/hernando" },
  openGraph: {
    title: "Hernando County Commercial Real Estate | Barrett Henry, REMAX Collective",
    description:
      "Explore Spring Hill and Brooksville commercial real estate — a growing suburban market along the Suncoast Parkway.",
    url: "https://hencre.com/markets/hernando",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Hernando County.",
      telephone: "(813) 733-7907",
      email: "barrett@nowtb.com",
      url: "https://hencre.com/markets/hernando",
      areaServed: { "@type": "AdministrativeArea", name: "Hernando County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "Commercial Real Estate Advisor" },
    },
    {
      "@type": "Service",
      name: "Hernando County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Hernando County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Hernando County, Florida" },
    },
  ],
};

const faqs = [
  {
    question: "Why is Hernando County a growing CRE market?",
    answer:
      "Hernando County is experiencing significant population growth, driven by affordability relative to Tampa Bay metro pricing and the completion of the Suncoast Parkway extension which dramatically improved north-south connectivity. New residents create demand for the retail, medical, and service businesses that follow rooftops. Commercial land prices remain well below Hillsborough and Pasco levels, attracting developers and end-users who need space to grow.",
  },
  {
    question: "How does the Suncoast Parkway affect commercial real estate in Hernando?",
    answer:
      "The Suncoast Parkway is the county's most important commercial catalyst. Each interchange creates a potential commercial node, and development activity around these interchanges is accelerating. Gas stations, convenience stores, quick-service restaurants, and retail outparcels are the first wave, with medical office, hotels, and larger retail centers following as traffic counts and surrounding residential density increase.",
  },
  {
    question: "What commercial property types are active in Hernando County?",
    answer:
      "Retail is the most active property type, concentrated along US-19 in Spring Hill and at Suncoast Parkway interchanges. Medical office is expanding as hospital systems and specialty providers open satellite facilities. Light industrial and flex space is in demand in Brooksville and along US-41. Commercial land — both entitled and pre-entitled — is one of the most traded asset types as developers position for future growth.",
  },
  {
    question: "What CRE services does Barrett Henry offer in Hernando County?",
    answer:
      "Barrett provides buyer and seller representation, tenant and landlord lease negotiation, investment analysis, land acquisition, and disposition strategy. He works with retailers seeking high-visibility Spring Hill locations, medical operators expanding their footprint, developers acquiring Suncoast Parkway interchange sites, and investors looking for yield in an affordable growth market.",
  },
];

const relatedMarkets = [
  { title: "Citrus County", href: "/markets/citrus", description: "Crystal River & Inverness CRE" },
  { title: "Pasco County", href: "/markets/pasco", description: "Wesley Chapel & SR 54/56 corridor" },
  { title: "Hillsborough County", href: "/markets/hillsborough", description: "Tampa CRE market" },
  { title: "Pinellas County", href: "/markets/pinellas", description: "St. Pete & Clearwater CRE" },
];

export default function HernandoMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/markets" className="hover:underline no-underline">Markets</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Hernando County</li>
        </ol>
      </nav>

      <Hero
        title="Hernando County Commercial Real Estate"
        subtitle="Spring Hill and Brooksville are growing fast — and the Suncoast Parkway is creating new commercial nodes that did not exist five years ago."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Hernando County sits between the Tampa Bay metro and the Nature Coast, occupying
              a sweet spot for residents and businesses seeking affordability without losing
              connectivity. Spring Hill, the county&apos;s population center, has grown into a
              substantial suburban community, while Brooksville, the county seat, maintains a
              more rural character with a historic downtown and growing industrial presence.
            </p>
            <p>
              The Suncoast Parkway has been transformative for Hernando County&apos;s commercial
              landscape. What was once a two-lane county road environment now has a limited-access
              highway creating quick connections south to Tampa and north toward Citrus County.
              Each interchange along the parkway has become a development target — commercial land
              near these interchanges is among the most actively traded in the county.
            </p>
            <p>
              Healthcare is a significant economic driver. Bayfront Health Spring Hill and
              Oak Hill Hospital anchor the medical sector, surrounded by outpatient centers,
              imaging facilities, and specialty practices that serve both local residents and
              the county&apos;s substantial retiree population. Medical office is one of the
              more consistent property types in terms of demand and lease-up velocity.
            </p>
            <p>
              For commercial real estate investors, Hernando County offers entry points that
              are a fraction of Tampa Bay metro pricing. Retail buildings, commercial land,
              and flex-industrial space are all available at costs that can deliver strong
              returns as the county&apos;s population and commercial infrastructure continue
              to mature.
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
              <strong className="text-black">US-19 / Spring Hill Drive</strong> — The busiest
              commercial corridor in the county. Retail centers, restaurants, medical offices,
              auto dealerships, and banks line US-19 through Spring Hill. Spring Hill Drive,
              running east from US-19, is a secondary commercial node with grocery-anchored
              centers and service businesses.
            </p>
            <p>
              <strong className="text-black">Suncoast Parkway Interchanges</strong> — Each
              interchange — at SR 50 (Cortez Boulevard), Spring Hill Drive, and points north —
              is developing into a commercial hub. Early-stage development includes gas stations,
              convenience stores, and fast-food restaurants, with larger retail and medical
              projects in the pipeline.
            </p>
            <p>
              <strong className="text-black">SR 50 (Cortez Boulevard)</strong> — An east-west
              corridor connecting US-19 through Brooksville to the Florida Turnpike. The western
              portion near Spring Hill is heavily commercial, while the eastern stretch through
              Brooksville serves industrial and agricultural-related businesses.
            </p>
            <p>
              <strong className="text-black">Downtown Brooksville</strong> — The county seat&apos;s
              historic downtown has a small but growing commercial core. Professional office,
              boutique retail, and restaurants occupy restored buildings around the courthouse
              square. The area benefits from community events and growing visitor interest.
            </p>
            <p>
              <strong className="text-black">US-41 / Brooksville Industrial</strong> — Light
              industrial and flex space along US-41 and in the Brooksville area serves
              manufacturing, contractor services, and distribution users. Land availability
              makes this corridor attractive for businesses that need larger facilities at
              lower costs.
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
              <strong className="text-black">Retail</strong> — Strip centers, outparcels,
              and freestanding retail buildings along US-19 and near Suncoast Parkway
              interchanges. National and regional tenants are entering the market as
              residential density increases.
            </p>
            <p>
              <strong className="text-black">Medical Office</strong> — One of the strongest
              property types in the county. Hospital systems and independent practitioners
              expand to serve a growing and aging population.
            </p>
            <p>
              <strong className="text-black">Industrial &amp; Flex</strong> — Brooksville
              and the US-41 corridor offer light industrial and flex space for trades,
              manufacturing, and distribution at affordable rents.
            </p>
            <p>
              <strong className="text-black">Land</strong> — Commercial land near Suncoast
              Parkway interchanges and along US-19 is actively traded by developers positioning
              for the county&apos;s next growth phase.
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
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective who helps
              clients navigate Hernando County&apos;s evolving commercial real estate market.
              Whether you are a retailer seeking a Spring Hill storefront, a developer eyeing
              Suncoast Parkway interchange land, or an investor evaluating income properties
              in a growth market, Barrett provides the analysis, negotiation, and deal
              execution to help you succeed.
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
            Hernando County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Looking at Hernando County for CRE?"
        body="Barrett can help you capitalize on this growing market — from Suncoast Parkway land to Spring Hill retail space."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
