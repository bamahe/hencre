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
 * Pasco County Market Page
 * New Port Richey, Wesley Chapel — growth corridor, SR 54/56 retail
 * expansion, emerging industrial parks.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Pasco County Commercial Real Estate | Barrett Henry, REMAX Collective",
  description:
    "Pasco County CRE market — SR 54/56 retail corridor, Wesley Chapel growth, I-75 industrial expansion. Barrett Henry, CRE Advisor. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/pasco" },
  openGraph: {
    title: "Pasco County Commercial Real Estate | Barrett Henry, REMAX Collective",
    description:
      "Explore Pasco County's booming CRE market — Wesley Chapel, SR 54/56 retail, and I-75 industrial growth.",
    url: "https://hencre.com/markets/pasco",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate brokerage serving Pasco County and the Tampa Bay region.",
      telephone: "(813) 733-7907",
      email: "barrett@nowtb.com",
      url: "https://hencre.com/markets/pasco",
      areaServed: { "@type": "AdministrativeArea", name: "Pasco County, Florida" },
      employee: { "@type": "Person", name: "Barrett Henry", jobTitle: "Commercial Real Estate Advisor" },
    },
    {
      "@type": "Service",
      name: "Pasco County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Pasco County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Pasco County, Florida" },
    },
  ],
};

const faqs = [
  {
    question: "Why is Pasco County one of Florida's fastest-growing CRE markets?",
    answer:
      "Pasco County has experienced rapid residential growth, which in turn drives commercial demand. Wesley Chapel and the SR 54/56 corridor have become major retail and mixed-use destinations. The county's proximity to Tampa, available developable land, and lower land costs compared to Hillsborough and Pinellas make it attractive for national retailers, healthcare systems, and industrial users looking to serve the growing population base.",
  },
  {
    question: "What types of commercial properties are most in demand in Pasco?",
    answer:
      "Retail pad sites and neighborhood shopping centers lead demand along the SR 54/56 corridor and near I-75 interchanges. Medical office is growing rapidly as healthcare systems expand to serve new residents. Industrial and flex space near I-75 and the Suncoast Parkway is attracting distribution and light manufacturing tenants. Mixed-use development is emerging in Wesley Chapel and Wiregrass-area master-planned communities.",
  },
  {
    question: "What CRE services does Barrett Henry provide in Pasco County?",
    answer:
      "Barrett offers comprehensive commercial real estate services in Pasco County including buyer and seller representation for investment and owner-occupied properties, tenant and landlord lease negotiation, site selection for retailers and healthcare operators, land acquisition for developers, and disposition strategy for property owners looking to exit at the right time.",
  },
  {
    question: "How does the Suncoast Parkway expansion affect Pasco County CRE?",
    answer:
      "The Suncoast Parkway extension is opening previously inaccessible areas of central and western Pasco to development. New interchange locations are creating demand for retail outparcels, gas stations, medical office, and neighborhood services. Industrial users also benefit from improved north-south connectivity between Pasco and Hernando counties.",
  },
];

const relatedMarkets = [
  { title: "Hillsborough County", href: "/markets/hillsborough", description: "Tampa CRE market" },
  { title: "Pinellas County", href: "/markets/pinellas", description: "St. Pete & Clearwater CRE" },
  { title: "Hernando County", href: "/markets/hernando", description: "Spring Hill & Brooksville CRE" },
  { title: "Polk County", href: "/markets/polk", description: "Lakeland & I-4 logistics" },
];

export default function PascoMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/markets" className="hover:underline no-underline">Markets</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Pasco County</li>
        </ol>
      </nav>

      <Hero
        title="Pasco County Commercial Real Estate"
        subtitle="Florida's growth frontier — where rooftops meet retail, and new corridors are being built from the ground up along SR 54, SR 56, I-75, and the Suncoast Parkway."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Pasco County sits on the northern edge of the Tampa Bay metro and has emerged as one
              of the most dynamic growth markets in Florida. The county&apos;s transformation from
              a largely rural area to a suburban commercial hub has been driven by massive
              residential development — particularly in the Wesley Chapel and Wiregrass corridors —
              which has pulled national retailers, restaurant groups, healthcare systems, and
              service businesses into the market at an accelerating pace.
            </p>
            <p>
              Unlike the built-out, land-constrained markets to the south, Pasco still has
              significant developable acreage, particularly along the SR 54/56 corridor east
              of I-75, along the Suncoast Parkway, and in unincorporated areas between Zephyrhills
              and Dade City. That land availability, combined with lower per-acre costs than
              Hillsborough, makes Pasco especially attractive for developers and end-users who
              need scale — whether for a 50,000-square-foot retail center or a large-format
              industrial building.
            </p>
            <p>
              The county&apos;s western side, anchored by New Port Richey and the US-19 corridor,
              has a more established commercial fabric. Redevelopment and repositioning of older
              retail centers is active here, as is medical office growth tied to the area&apos;s
              large retiree population. The contrast between east Pasco&apos;s greenfield growth
              and west Pasco&apos;s redevelopment cycle makes the county interesting for
              investors and operators with different strategies.
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
              <strong className="text-black">SR 54 / SR 56 Retail Corridor</strong> — This
              east-west corridor is the commercial spine of eastern Pasco. Anchored by The
              Shops at Wiregrass and the Tampa Premium Outlets, it attracts national retailers,
              quick-service restaurants, and service-oriented businesses. New retail pads near
              I-75 interchanges and along SR 56 toward Zephyrhills continue to come to market.
            </p>
            <p>
              <strong className="text-black">Wesley Chapel / Wiregrass</strong> — The fastest-growing
              submarket in the county. Master-planned communities have created the rooftop density
              needed to support grocery-anchored centers, medical office campuses, and mixed-use
              town centers. Several new hospital and outpatient campuses have opened here,
              creating additional CRE demand in surrounding areas.
            </p>
            <p>
              <strong className="text-black">US-19 Corridor (West Pasco)</strong> — The
              traditional commercial backbone of western Pasco running through New Port
              Richey, Port Richey, and Hudson. While newer than the east-side boom, this
              corridor sees steady demand from medical office users, auto-related businesses,
              and value-oriented retailers. Repositioning of older shopping centers is an active
              investment strategy here.
            </p>
            <p>
              <strong className="text-black">I-75 Industrial Zone</strong> — Industrial parks
              near the I-75 / SR 52 and I-75 / SR 54 interchanges are attracting light
              manufacturing, distribution, and contractor-services tenants. The area benefits
              from proximity to both the Tampa core and the growing population centers in
              Wesley Chapel and Lutz.
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
              <strong className="text-black">Retail</strong> — The dominant asset class in Pasco,
              driven by rapid residential growth. National and regional retailers are actively
              seeking pad sites and inline space in high-traffic centers along SR 54/56 and
              near I-75 interchanges.
            </p>
            <p>
              <strong className="text-black">Medical Office</strong> — Healthcare systems are
              expanding into Pasco to serve the growing and aging population. New outpatient
              campuses, urgent care centers, and specialty medical offices are opening across
              the county.
            </p>
            <p>
              <strong className="text-black">Industrial &amp; Flex</strong> — Growing demand
              from distribution, trades-oriented businesses, and light manufacturing. Available
              land near I-75 makes new development feasible, though spec construction is still
              measured.
            </p>
            <p>
              <strong className="text-black">Land</strong> — Entitled and pre-entitled commercial
              land is one of the most active asset types in Pasco. Developers and end-users
              acquire parcels along growth corridors to build retail centers, medical campuses,
              and industrial facilities.
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
              Barrett Henry is a Commercial Real Estate Advisor at REMAX Collective with
              experience working growth markets where timing and positioning matter. In
              Pasco County, he helps retailers find high-visibility pad sites, medical
              operators secure campus-ready parcels, investors identify value-add opportunities
              in western Pasco, and developers acquire entitled land along active corridors.
            </p>
            <p>
              Services include buyer and seller representation, tenant and landlord lease
              negotiation, land acquisition, investment analysis, and disposition strategy
              across all commercial property types.
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
            Pasco County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Exploring CRE Opportunities in Pasco County?"
        body="From Wesley Chapel retail pads to industrial land near I-75, Barrett can help you capitalize on Pasco's growth trajectory."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
