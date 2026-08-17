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
 * Charlotte County Market Page
 * Punta Gorda, Port Charlotte, Englewood — SW Florida CRE.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Real Estate in Charlotte County, Florida | HenCRE",
  description:
    "Charlotte County CRE market — US-41 retail, medical office, flex space in Punta Gorda and Port Charlotte. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/charlotte" },
  openGraph: {
    title: "Commercial Real Estate in Charlotte County, Florida | HenCRE",
    description:
      "Explore Charlotte County commercial real estate — retail, medical office, and flex space in Punta Gorda, Port Charlotte, and Englewood.",
    url: "https://hencre.com/markets/charlotte",
  },
};

const faqs = [
  {
    question: "Is Charlotte County a good market for medical office investments?",
    answer:
      "Yes. The retiree demographic is substantial and stable, which drives consistent tenant demand for medical services. Medical office is the strongest asset class here, and it is where you see the most active leasing and sales activity. That does not mean every property works — location and condition matter — but the demand is real and predictable. Medical office in Charlotte County with strong tenant credit typically trades in the 6.5 to 7.5 percent cap rate range.",
  },
  {
    question: "What is the difference between Charlotte County and Lee County or Collier County commercial markets?",
    answer:
      "Charlotte County is smaller, less saturated, and less expensive. You are not competing against the same number of properties or investors. For users, that often means better lease economics. For investors, it means less competition and more straightforward fundamental analysis. Lee and Collier are larger, faster-growing metros with more institutional players. Charlotte County is more local and more relationship-driven.",
  },
  {
    question: "Is there enough retail demand in Charlotte County to lease retail space profitably?",
    answer:
      "It depends on the space type and location. Neighborhood retail anchored by grocery or serving immediate residential demand performs well. You are not going to see the same regional draw as Fort Myers or Naples, but the residential base supports consistent neighborhood retail activity. Service tenants, medical uses, and convenience-oriented businesses do well. Large-format retail or specialty retail is more selective.",
  },
  {
    question: "What cap rates can investors expect for commercial properties in Charlotte County?",
    answer:
      "Cap rates in Charlotte County generally run slightly higher than equivalent assets in larger Southwest Florida markets, reflecting the smaller investor pool. Medical office with strong tenant credit trades in the 6.5 to 7.5 percent range. Neighborhood retail typically commands 6.5 to 8 percent. Light industrial and flex space trades at 7 to 8.5 percent. The county's smaller investor pool means less competition for quality assets, which can work to buyers' advantage.",
  },
  {
    question: "Which areas of Charlotte County have the strongest commercial activity?",
    answer:
      "US-41 through Port Charlotte and Punta Gorda is the primary commercial spine with the highest concentration of retail, medical, and service tenants. Punta Gorda's waterfront and downtown are emerging as secondary nodes for mixed-use and professional office tenants. The I-75 corridor in the northern part of the county is seeing increasing commercial interest as residential development continues to expand.",
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
        { "@type": "ListItem", position: 3, name: "Charlotte County", item: "https://hencre.com/markets/charlotte" },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "REMAX Commercial Real Estate — Barrett Henry",
      description: "Commercial real estate advisory and brokerage services for Charlotte County.",
      telephone: "(813) 733-7907",
      email: "barrett@hencre.com",
      url: "https://hencre.com/markets/charlotte",
      areaServed: { "@type": "AdministrativeArea", name: "Charlotte County, Florida" },
      employee: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate, Commercial Real Estate",
      },
    },
    {
      "@type": "Service",
      name: "Charlotte County Commercial Real Estate Services",
      description:
        "CRE advisory, tenant and buyer representation, and investment analysis in Charlotte County, Florida.",
      provider: { "@type": "RealEstateAgent", name: "Barrett Henry" },
      areaServed: { "@type": "AdministrativeArea", name: "Charlotte County, Florida" },
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
  { title: "Sarasota County", href: "/markets/sarasota", description: "High-end retail, office, and medical CRE north of Charlotte County." },
  { title: "Manatee County", href: "/markets/manatee", description: "Bradenton and Anna Maria Island commercial market." },
  { title: "All Florida Markets", href: "/markets", description: "Overview of every market Barrett Henry serves." },
  { title: "Investment Sales Services", href: "/services/investment-sales", description: "Buyer and seller representation for CRE investment." },
  { title: "What Makes a Good Commercial Investment?", href: "/blog/what-makes-a-good-commercial-investment", description: "Investment criteria from a broker's perspective." },
];

export default function CharlotteMarketPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Markets", href: "/markets" },
          { label: "Charlotte County", href: "/markets/charlotte" },
        ]}
      />

      <Hero
        title="Commercial Real Estate in Charlotte County, Florida"
        subtitle="Punta Gorda, Port Charlotte, and Englewood are driven by retiree migration, post-Ian rebuilding, and consistent healthcare and retail demand along the US-41 corridor."
        ctaText="Discuss Your CRE Goals"
        ctaHref="#lead-form"
      />

      {/* ---- Market Overview ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Market Overview</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Charlotte County is one of Southwest Florida&apos;s most underrated commercial markets.
              After 23+ years as a Broker Associate at REMAX Collective, I can tell you that markets
              like Charlotte do not stay quiet for long. The combination of retiree migration, post-Hurricane
              Ian reconstruction, and infrastructure improvements along the US-41 corridor has created
              genuine opportunity for both users and investors. For perspective on the broader region, see the{" "}
              <Link href="/markets" className="text-accent underline">Florida markets Barrett Henry serves</Link>.
            </p>
            <p>
              The retiree demographic is the market&apos;s foundation. Charlotte County attracts a steady
              stream of residents seeking lower-density alternatives to{" "}
              <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link> or Lee and
              Collier counties. This drives medical office, pharmacy, and personal services demand
              consistently -- the kind of tenant base that does not evaporate when the economic cycle turns.
              For investors comparing Charlotte County to the premium end of Southwest Florida, see the{" "}
              <Link href="/blog/naples-collier-county-commercial-real-estate-2026" className="text-accent underline">Naples Collier County CRE guide</Link>.
            </p>
            <p>
              Hurricane Ian&apos;s impact on Charlotte County accelerated commercial rebuilding and brought
              newer, code-compliant inventory to a market that had aging stock in many corridors.
              Post-Ian rebuilding is largely complete, and the commercial inventory that emerged is
              better suited to current tenant needs. For investors evaluating income properties, that
              translates to lower deferred maintenance risk than you might expect from headline descriptions
              of the market.
            </p>
            <p>
              While my primary practice is in Tampa Bay, I work as a trusted advisor and referral partner
              for serious commercial real estate needs in Charlotte County. I provide market analysis,
              comparable data, and connections to qualified local specialists — so clients get my
              perspective on how Charlotte County fits within broader{" "}
              <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">commercial real estate investment</Link>{" "}
              strategy while also having local expertise on the ground.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
              alt="Commercial retail corridor along US-41 in Charlotte County Florida"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
            <p className="mt-2 text-sm text-[#666666] italic">US-41 through Port Charlotte and Punta Gorda is Charlotte County&apos;s primary commercial spine, anchoring retail, medical office, and service tenants that serve the county&apos;s growing residential base.</p>
          </div>
        </div>
      </section>

      {/* ---- Key Corridors ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Primary Commercial Corridors</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              <strong className="text-black">US-41 (Tamiami Trail):</strong> Charlotte County&apos;s
              commercial backbone. It runs north-south through the county, connecting Port Charlotte
              and Punta Gorda, and it is where you will find the highest concentration of{" "}
              <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>,
              service, and{" "}
              <Link href="/commercial/office-space" className="text-accent underline">office space</Link>.
              This corridor continues to see new development and tenant activity that makes sense for
              neighborhood-scale retailers, medical practices, and light industrial users.
            </p>
            <p>
              <strong className="text-black">Punta Gorda Waterfront and Downtown:</strong> An emerging
              secondary node for mixed-use and professional office tenants. The city has been active
              about waterfront redevelopment and attracting professional services, which creates different
              opportunities than what you see along the highway corridor. Boutique retail, restaurants,
              and professional suites are the primary tenant types.
            </p>
            <p>
              <strong className="text-black">Port Charlotte:</strong> As the larger population center,
              Port Charlotte supports broader retail demand and increasingly attracts service-oriented
              businesses — everything from healthcare to personal services to quick-service restaurants.
              Grocery-anchored centers and neighborhood retail perform consistently here.
            </p>
            <p>
              <strong className="text-black">I-75 Corridor (North County):</strong> The northern part
              of the county along I-75 is seeing increasing commercial interest as residential development
              expands. This corridor is earlier in its development cycle than US-41, which can represent
              a better entry point for investors willing to wait for the next development phase.
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
              <strong className="text-black">Medical Office and Healthcare:</strong> This is the marquee
              asset class in Charlotte County. The retiree demographic drives consistent demand for
              medical offices, urgent care, physical therapy, and ancillary healthcare services.
              Medical office space commands tenant interest that outpaces most other commercial
              categories in this market. Use the{" "}
              <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link>{" "}
              to model income from medical office acquisitions.
            </p>
            <p>
              <strong className="text-black">Neighborhood Retail and Service Space:</strong> Retail
              real estate in Charlotte County is not about big-box anchors or regional centers — it is
              about neighborhood convenience, and that is a genuine strength. Grocery-anchored centers,
              small strip retail, and inline service space see steady demand from both local operators
              and regional chains looking to serve the residential base. See available{" "}
              <Link href="/commercial/retail-space" className="text-accent underline">retail listings</Link>.
            </p>
            <p>
              <strong className="text-black">Flex and Light Industrial:</strong> Post-Ian rebuilding
              accelerated interest in{" "}
              <Link href="/commercial/industrial-warehouse" className="text-accent underline">flex and light industrial properties</Link>.
              Contractors, building supply businesses, and light manufacturing tenants needed space
              quickly during the recovery period. That activity has stabilized into ongoing demand,
              particularly for spaces that can handle both warehouse and small office components.
            </p>
            <p>
              <strong className="text-black">Professional Office:</strong> Traditional office space is
              more selective here. You see activity in small professional suites and medical offices,
              but Charlotte County is not a corporate office market. What works is practical,
              smaller-scale space for professional services, insurance, real estate, and healthcare
              administration. Understand the difference between{" "}
              <Link href="/insights/gross-vs-net-lease" className="text-accent underline">gross and net leases</Link>{" "}
              before comparing quoted rates across properties.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Why Charlotte County ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">Why Charlotte County Matters</h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              Charlotte County is not a headline market, and that is part of its appeal. You are not
              competing against the same saturation you see in Tampa Bay or Southwest Florida&apos;s
              larger metros. The fundamentals are solid: steady demographic inflow, essential healthcare
              demand, and infrastructure that supports commercial growth.
            </p>
            <p>
              For users, quality space is available at reasonable lease rates. For{" "}
              <Link href="/services/investment-sales" className="text-accent underline">investors</Link>,
              you are entering a market with clear demand drivers and less cyclical pressure than larger
              metros. Cap rates in Charlotte County generally run higher than equivalent assets in Sarasota
              or Lee County, reflecting the smaller investor pool — which means better yield for disciplined buyers.
            </p>
            <p>
              The post-Ian period also means you are looking at newer, upgraded inventory in many cases —
              construction that is recent, code-compliant, and built for current tenant needs. Understanding{" "}
              <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">what a cap rate means</Link>{" "}
              in the context of this specific market is the starting point for any serious analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
            How Barrett Henry Serves This Market
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p>
              While my primary practice is in Tampa Bay, I work Charlotte County deals through a
              combination of direct market knowledge and a trusted network of local specialists.
              My goal is to provide the commercial real estate strategy and analysis while connecting
              you with the right local practitioners for execution.
            </p>
            <p>
              Services available for Charlotte County include{" "}
              <Link href="/services/investment-sales" className="text-accent underline">buyer and seller representation</Link>,{" "}
              <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link>{" "}
              for users seeking medical, retail, or office space, market intelligence on corridor strength
              and competitive positioning, and coordination with local brokers and REMAX network partners
              for deal execution. Reach out through the{" "}
              <Link href="/contact" className="text-accent underline">contact page</Link>{" "}
              to discuss what you are trying to accomplish.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Lead Form ---- */}
      <section id="lead-form" className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl">
            Charlotte County CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedLinks links={relatedMarkets} heading="Explore More Markets" />

      <CTASection
        heading="Exploring Charlotte County Commercial Real Estate?"
        body="Whether you are leasing space, acquiring an investment property, or evaluating land, I provide the market perspective and network to get deals done in Charlotte County."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
