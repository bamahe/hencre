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

export const metadata: Metadata = {
  title: "DeSoto County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in DeSoto County, FL: Arcadia downtown, agricultural land, solar transition, and rural tourism growth. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/desoto" },
  openGraph: {
    title: "DeSoto County Commercial Real Estate | HenCRE",
    description:
      "DeSoto County is an emerging Southwest Florida market with agricultural land, Arcadia&apos;s historic antique district, and solar energy transition creating new commercial opportunity.",
    url: "https://hencre.com/markets/desoto",
  },
};

const faqs = [
  {
    question: "What commercial property types are most active in DeSoto County?",
    answer:
      "Agricultural and land is the primary market. Improved pasture, crop land, cattle ranches, and raw acreage with infrastructure or development positioning see regular transaction activity. Downtown Arcadia retail, highway-oriented commercial along US-17 and SR-70, medical offices, and light industrial serving the farming economy round out the active asset classes.",
  },
  {
    question: "How is the solar energy transition affecting commercial land in DeSoto County?",
    answer:
      "Agricultural land is increasingly being evaluated for utility-scale and distributed solar development. Solar leases are providing an income stream alternative to traditional agricultural uses, and some landowners are positioning acreage for sale to solar developers as a long-term exit strategy. This creates both opportunity and uncertainty for land planning -- a qualified CRE advisor can help you evaluate the trade-offs.",
  },
  {
    question: "Is Arcadia&apos;s downtown a good investment for retail or office?",
    answer:
      "Arcadia&apos;s historic antique district has seen improved foot traffic and lease demand as rural tourism interest grows. Commercial inventory is tight -- older brick buildings with limited availability create pricing power for owners but challenges for tenants. Repositioning older buildings for mixed retail and office use is the primary play. This is not a high-velocity market, but stable demand exists for the right concept.",
  },
  {
    question: "What is the investment case for DeSoto County land?",
    answer:
      "Land investment in DeSoto County appeals to three buyer types: agricultural operators seeking acreage at cost-effective rates, solar developers leasing land for utility-scale projects, and patient investors betting on long-term regional growth as Southwest Florida continues expanding inland. DeSoto land prices remain well below coastal Southwest Florida markets, creating a significant entry-price advantage.",
  },
  {
    question: "How does Barrett Henry serve the DeSoto County market?",
    answer:
      "Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of Florida CRE experience. While his primary market is Tampa Bay, DeSoto County is an active referral territory where he handles deals directly -- land sales, commercial leasing, investor advisory, and market analysis. He also connects clients with specialists when dedicated local presence is needed.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://hencre.com/markets" },
        { "@type": "ListItem", position: 3, name: "DeSoto County", item: "https://hencre.com/markets/desoto" },
      ],
    },
    {
      "@type": "Service",
      name: "DeSoto County Commercial Real Estate",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        url: "https://hencre.com/about",
      },
      areaServed: { "@type": "County", name: "DeSoto County", containedIn: { "@type": "State", name: "Florida" } },
      description:
        "Commercial real estate advisory for DeSoto County, Florida -- serving agricultural land transactions, Arcadia commercial leasing, solar development positioning, and rural tourism-driven commercial opportunity.",
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

const relatedLinks = [
  {
    title: "Charlotte County Commercial Real Estate",
    href: "/markets/charlotte",
    description: "Adjacent Southwest Florida market with active retail and medical commercial development.",
  },
  {
    title: "Sarasota Commercial Real Estate",
    href: "/markets/sarasota",
    description: "Southwest Florida growth market directly north of DeSoto with strong investor activity.",
  },
  {
    title: "Land Development Advisory",
    href: "/commercial/land-development",
    description: "Commercial land acquisition, entitlement, and development strategy across Florida.",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description: "Agricultural and commercial land investment advisory across Florida markets.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How 1031 exchanges work for agricultural and commercial land investors in Florida.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "ROI calculation framework for land and commercial acquisitions in emerging Florida markets.",
  },
];

export default function DeSotoMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "DeSoto County", href: "/markets/desoto" },
        ]}
      />

      <Hero
        title="DeSoto County Commercial Real Estate"
        subtitle="Agricultural land, Arcadia&apos;s historic antique district, solar energy transition, and rural tourism growth -- an emerging Southwest Florida market for patient investors and agricultural operators."
        ctaText="Talk to Barrett Henry"
        ctaHref="/contact"
      />

      {/* Quick Answer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            DeSoto County is Southwest Florida&apos;s most underrated emerging market. Agricultural land, solar development, and Arcadia&apos;s
            rural tourism draw define the opportunity set. Commercial inventory is tight in the downtown antique district, creating
            pricing power for existing owners. Land values remain well below coastal Southwest Florida markets. Barrett Henry,
            Broker Associate at REMAX Collective with 23+ years of real estate experience, serves DeSoto County through direct
            transactions and referral partnerships.
          </p>
        </div>
      </section>

      {/* Market overview */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">DeSoto County Commercial Real Estate Market Overview</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            DeSoto County sits in Southwest Florida as one of the state&apos;s most underrated emerging markets. While it is rural in
            character and agricultural in heritage, what is happening here deserves attention -- especially if you are looking at
            land, agricultural transition plays, or early-stage commercial development in a growth corridor that has not yet hit
            peak competition.
          </p>
          <p>
            Two macro trends are reshaping the market. First, agricultural land is increasingly being evaluated for utility-scale
            and distributed{" "}
            <Link href="/commercial/land-development" className="font-semibold text-black underline">solar development</Link>.
            Second, Arcadia&apos;s historic downtown and antique district are becoming destination draws -- creating demand for hospitality,
            retail, and experiential commercial space that did not exist five years ago.
          </p>
          <p>
            For investors comparing DeSoto to adjacent coastal markets, see{" "}
            <Link href="/markets/sarasota" className="font-semibold text-black underline">Sarasota commercial real estate</Link>{" "}
            and{" "}
            <Link href="/markets/charlotte" className="font-semibold text-black underline">Charlotte County CRE</Link> --
            both offer more developed commercial infrastructure with corresponding higher entry prices.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80"
            alt="Rural Florida commercial corridor and agricultural land in DeSoto County"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            DeSoto County&apos;s agricultural landscape is transitioning toward solar development and rural tourism, creating new commercial demand in Arcadia and surrounding corridors.
          </p>
        </div>
      </section>

      {/* Primary corridors */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Primary Commercial Corridors</h2>
          <div className="mt-6 space-y-8 text-lg leading-relaxed text-[#666666]">
            <div>
              <h3 className="text-xl font-bold text-black">Downtown Arcadia -- Historic Core and Antique District</h3>
              <p className="mt-2">
                Arcadia is the county seat and commercial epicenter. Its downtown antique and heritage retail district is the market&apos;s
                most visible asset. Tourism interest has improved foot traffic and lease demand for ground-floor retail and upper-floor
                office and mixed-use space. Commercial inventory here is tight -- building availability is limited, and what exists often
                requires repositioning. This creates pricing power for owners and landlords.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Highway Corridors and Agricultural Support</h3>
              <p className="mt-2">
                US 17 and State Road 70 move commercial traffic through the county. These corridors host feed suppliers, equipment dealers,
                agricultural service providers, and light industrial uses tied to the farming economy. These are functional, occupied, and
                stable -- the backbone of commercial activity in the county outside the downtown antique district.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Land and Rural Frontage</h3>
              <p className="mt-2">
                The real opportunity set in DeSoto is land. Multi-acre parcels with highway frontage, agricultural land with development
                potential, and acreage positioned for solar or alternative use represent the active deal flow. Prices remain significantly
                below coastal Southwest Florida, which creates a meaningful entry-price advantage for investors willing to hold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Active Property Types</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Agricultural and Land",
              body: "The primary market. Improved pasture, crop land, cattle ranches, and raw acreage with infrastructure or development positioning see regular transaction activity. Solar lease positioning is an increasingly important consideration.",
            },
            {
              title: "Retail and Antique District",
              body: "Limited modern retail footprint. Downtown Arcadia antique and specialty retail are active. Highway-oriented retail is minimal but growing with tourist interest. Repositioning older brick buildings for mixed use is the primary play.",
            },
            {
              title: "Office and Medical",
              body: "Professional and medical offices cluster downtown and along commercial corridors. Demand is steady but modest. Buildings are older, often with dated finishes -- repositioning opportunities exist for value-add buyers.",
            },
            {
              title: "Light Industrial and Service",
              body: "Agricultural equipment storage, feed mills, equipment repair, and farm service facilities represent a solid tenant base. These properties are functional and serve essential industries underpinning DeSoto&apos;s agricultural economy.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#E5E5E5] p-6">
              <p className="font-bold text-black">{item.title}</p>
              <p className="mt-2 text-[#666666]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Barrett services */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Barrett Henry Serves the DeSoto Market</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              As a Broker Associate at REMAX Collective with 23+ years of commercial real estate experience, Barrett brings the same
              rigorous approach he uses in Tampa Bay markets to DeSoto transactions: no hype, grounded analysis, and a focus on what
              actually works for your investment or operational goals.
            </p>
            <p>
              Services in DeSoto County include land sales and leasing for agricultural acreage and development land, commercial leasing
              for retail, office, and light industrial space in Arcadia and highway corridors,{" "}
              <Link href="/services/investment-sales" className="font-semibold text-black underline">investor advisory</Link>{" "}
              for land investment analysis and agricultural transition strategies, and{" "}
              <Link href="/services/cre-valuation" className="font-semibold text-black underline">property valuation</Link>{" "}
              for owners considering a disposition.
            </p>
            <p>
              For investors evaluating DeSoto as part of a Florida portfolio or{" "}
              <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="font-semibold text-black underline">1031 exchange strategy</Link>,
              Barrett provides regional market context to help you compare DeSoto land and commercial values against alternatives
              in{" "}
              <Link href="/markets/polk" className="font-semibold text-black underline">Polk County</Link>{" "}
              and neighboring Southwest Florida markets. Use the <Link href="/calculators/cap-rate" className="font-semibold text-black underline">cap rate calculator</Link> to evaluate yield expectations, and review the <Link href="/blog/commercial-property-due-diligence-timeline" className="font-semibold text-black underline">commercial due diligence timeline</Link> before closing on any DeSoto acquisition.
            </p>
            <p>
              <Link href="/contact" className="font-semibold text-black underline">Contact Barrett</Link> at (813) 733-7907 to discuss
              your DeSoto County commercial real estate needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions About DeSoto County CRE</h2>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      <RelatedLinks heading="Explore Related Markets and Services" links={relatedLinks} />

      <CTASection
        heading="Ready to Talk DeSoto County Commercial Real Estate?"
        body="Whether you are a buyer, seller, investor, or tenant evaluating DeSoto County land, retail, or commercial property -- Barrett Henry brings 23+ years of Florida CRE experience and the REMAX Collective network to move your deal forward."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
