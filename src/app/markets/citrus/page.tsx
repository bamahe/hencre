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
 * Citrus County Market Page
 * Crystal River, Inverness — emerging market along the US-19
 * corridor, Nature Coast tourism, and growing medical/retail demand.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Citrus County Commercial Real Estate | Barrett Henry, REMAX Collective",
  description:
    "Citrus County CRE market — Crystal River tourism, US-19 retail, Inverness commercial growth, Nature Coast opportunities. Call Barrett Henry at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/citrus" },
  openGraph: {
    title: "Citrus County Commercial Real Estate | Barrett Henry, REMAX Collective",
    description:
      "Explore Citrus County's emerging CRE market — Crystal River, Inverness, and the Nature Coast commercial corridor.",
    url: "https://hencre.com/markets/citrus",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Citrus County.",
      telephone: "(813) 733-7907",
      email: "barrett@nowtb.com",
      url: "https://hencre.com/markets/citrus",
      areaServed: { "@type": "AdministrativeArea", name: "Citrus County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "Commercial Real Estate Advisor" },
    },
    {
      "@type": "Service",
      name: "Citrus County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Citrus County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Citrus County, Florida" },
    },
  ],
};

const faqs = [
  {
    question: "What drives commercial real estate demand in Citrus County?",
    answer:
      "Citrus County is experiencing steady population growth as retirees and remote workers discover the Nature Coast's lower cost of living and outdoor lifestyle. That growth creates demand for the retail, medical office, and service businesses these new residents need. Crystal River's eco-tourism industry — centered on manatee encounters and the springs — adds a hospitality and tourism-adjacent commercial layer that is unique to this market.",
  },
  {
    question: "Where are the main commercial areas in Citrus County?",
    answer:
      "The US-19 corridor between Crystal River and Homosassa is the county's primary commercial strip, hosting retail centers, auto dealerships, restaurants, and medical offices. The US-41 corridor through Inverness is the second major commercial artery. Downtown Inverness, centered on the historic courthouse square, has a growing mix of boutique retail and small office tenants.",
  },
  {
    question: "What types of commercial properties are available in Citrus County?",
    answer:
      "Retail strip centers and freestanding buildings along US-19 and US-41 are the most common. Medical office is growing as healthcare providers expand into the county. Hospitality properties near Crystal River benefit from year-round eco-tourism. Industrial and flex space is limited but serves local trades and services businesses. Developable commercial land is available at prices well below Tampa Bay metro levels.",
  },
  {
    question: "How does Barrett Henry help CRE clients in Citrus County?",
    answer:
      "Barrett provides buyer and seller representation, lease negotiation, investment analysis, and disposition strategy. He helps local business owners find the right retail or office space, investors evaluate income properties, and developers identify land parcels positioned for growth along the county's commercial corridors.",
  },
];

const relatedMarkets = [
  { title: "Hernando County", href: "/markets/hernando", description: "Spring Hill & Brooksville CRE" },
  { title: "Pasco County", href: "/markets/pasco", description: "Wesley Chapel growth corridor" },
  { title: "Hillsborough County", href: "/markets/hillsborough", description: "Tampa CRE market" },
];

export default function CitrusMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Markets", href: "/markets" }, { label: "Citrus County", href: "/markets/citrus" }]} />

      <Hero
        title="Citrus County Commercial Real Estate"
        subtitle="Florida's Nature Coast is growing — and so is demand for retail, medical office, and hospitality along the Crystal River and Inverness corridors."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Citrus County sits on Florida&apos;s Nature Coast, north of the Tampa Bay metro,
              and has long been known for its natural springs, manatee habitats, and outdoor
              recreation. Commercially, the county is an emerging market — smaller and less
              developed than its neighbors to the south, but experiencing the kind of steady
              residential growth that creates genuine commercial opportunity for retailers,
              healthcare providers, and investors who get in early.
            </p>
            <p>
              Crystal River, the county&apos;s most recognizable community, is a year-round
              eco-tourism destination. Visitors come for the springs, fishing, and diving,
              supporting a hospitality sector that includes hotels, outfitters, restaurants,
              and charter services. That tourism base provides consistent revenue for
              commercial operators in ways that purely residential-driven markets cannot match.
            </p>
            <p>
              Inverness, the county seat, offers a different commercial profile. Its downtown,
              centered on the historic courthouse, has a small-town charm that attracts
              boutique retail and professional office tenants. The Withlacoochee State Trail,
              a popular cycling and walking path, runs through the area and drives foot traffic
              to nearby businesses. Healthcare is a major economic driver, with Citrus Memorial
              Hospital and associated medical offices employing a significant portion of the
              workforce.
            </p>
            <p>
              For investors and operators accustomed to Tampa Bay pricing, Citrus County
              offers significantly lower entry costs. Commercial land, retail buildings, and
              office space are all available at a fraction of what comparable assets cost in
              Hillsborough or Pinellas, making it an attractive market for those seeking
              yield and long-term appreciation as the area continues to grow.
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
              <strong className="text-black">US-19 Corridor (Crystal River / Homosassa)</strong> — The
              county&apos;s primary commercial artery. Retail centers, restaurants, hotel and motel
              properties, medical offices, and auto services line this highway from the Hernando
              County border north through Crystal River. Tourism-related businesses cluster near
              the springs and King&apos;s Bay.
            </p>
            <p>
              <strong className="text-black">US-41 / Inverness</strong> — The second major
              commercial corridor, running through Inverness and connecting to the Florida Turnpike.
              Grocery-anchored centers, medical offices, and service businesses serve the Inverness
              residential base.
            </p>
            <p>
              <strong className="text-black">Downtown Inverness</strong> — A compact, walkable
              downtown with historic buildings that host small retail, restaurants, and professional
              offices. The courthouse square and Cooter Pond Park create a town-center feel that
              draws visitors and locals.
            </p>
            <p>
              <strong className="text-black">CR-486 / Lecanto</strong> — This east-west corridor
              connects US-19 to US-41 and passes through Lecanto, a growing residential and
              commercial node. Medical office and neighborhood retail are the primary uses.
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
              <strong className="text-black">Retail</strong> — Neighborhood and strip retail
              along US-19 and US-41 serves the daily needs of a growing population. Tourism-adjacent
              retail near Crystal River benefits from visitor spending.
            </p>
            <p>
              <strong className="text-black">Medical Office</strong> — Healthcare is one of
              the county&apos;s largest employers. Outpatient clinics, specialty practices, and
              urgent care facilities are expanding to meet the needs of an aging population base.
            </p>
            <p>
              <strong className="text-black">Hospitality</strong> — Hotels, lodges, and
              vacation rentals near Crystal River and Homosassa Springs benefit from year-round
              eco-tourism activity.
            </p>
            <p>
              <strong className="text-black">Land</strong> — Commercial land is available at
              accessible price points, making Citrus County attractive for developers and end-users
              who want to build rather than lease.
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
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective who works
              with business owners, investors, and developers in Citrus County. Whether you
              are looking for a retail location along US-19, a medical office near Inverness,
              or investment property in an emerging growth market, Barrett provides the
              guidance and negotiation skills to help you find and close the right deal.
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
            Citrus County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Exploring CRE on Florida's Nature Coast?"
        body="Barrett can help you evaluate opportunities in Crystal River, Inverness, and across Citrus County."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
