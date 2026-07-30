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
  title: "Bay County Commercial Real Estate | HenCRE",
  description:
    "Panama City and Bay County CRE: Tyndall AFB expansion, beach tourism corridor, post-Hurricane Michael recovery, and Gulf Coast commercial opportunities. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/bay" },
  openGraph: {
    title: "Bay County Commercial Real Estate | HenCRE",
    description:
      "Northwest Florida CRE market: Tyndall Air Force Base expansion, Panama City Beach tourism, industrial and flex demand, and post-Michael reconstruction activity.",
    url: "https://hencre.com/markets/bay",
  },
};

const faqItems = [
  {
    question: "Is Bay County a good commercial real estate investment market right now?",
    answer:
      "Bay County has real, measurable demand drivers that distinguish it from speculative secondary markets: the Tyndall Air Force Base expansion is actively recruiting defense contractors, tourism and hospitality on Panama City Beach remain consistent, and post-Hurricane Michael reconstruction is still generating commercial activity. Investors seeking secondary-market exposure with genuine fundamentals and pricing below Tampa or Jacksonville will find Bay County worth serious evaluation.",
  },
  {
    question: "How does the Tyndall Air Force Base expansion affect Bay County CRE?",
    answer:
      "The Tyndall expansion is a direct commercial catalyst. Defense contractors are actively leasing industrial and flex space. Workforce housing demand is real. Commercial activity in Lynn Haven and Callaway, near the base, has accelerated. If you are evaluating industrial, flex, or workforce-housing-related retail near the base area, the expansion is the primary demand driver and it is ongoing — not theoretical.",
  },
  {
    question: "What commercial property types are performing best in Bay County?",
    answer:
      "Industrial and flex space near the Tyndall corridor is performing well driven by defense contractor demand. Hospitality and retail near Panama City Beach benefits from consistent tourism traffic. Medical office and professional services space in Panama City proper is steady. Mixed-use and workforce housing near the base area is emerging. Traditional suburban office outside the beach and base corridors has been slower to recover.",
  },
  {
    question: "Is Hurricane Michael recovery still affecting Bay County commercial real estate?",
    answer:
      "Yes, and it is still generating opportunity. New construction across all commercial asset classes continues. Infrastructure improvements, property repositioning, and redevelopment activity remain active. This is a multi-year rebuild cycle — not a short-term story. Investors who entered during or after Michael's aftermath have generally seen meaningful appreciation as reconstruction capital continues to flow into the market.",
  },
  {
    question: "Does Barrett Henry handle commercial real estate transactions in Bay County?",
    answer:
      "Yes. Bay County is part of Barrett's referral territory within his statewide Florida practice. He represents buyers, sellers, investors, and occupants on Bay County CRE transactions — from industrial and flex acquisitions near Tyndall to beach-adjacent retail and hospitality properties. With 23+ years of real estate experience as a Broker Associate at REMAX Collective, Barrett provides direct market insight and broker expertise. Call (813) 733-7907 to start a real conversation.",
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
        { "@type": "ListItem", position: 3, name: "Bay County", item: "https://hencre.com/markets/bay" },
      ],
    },
    {
      "@type": "Service",
      name: "Bay County Commercial Real Estate Services",
      description: "CRE leasing, sales, investment, and dispositions in Bay County and the Panama City market, Florida.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        telephone: "(813) 733-7907",
        email: "barrett@hencre.com",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "Bay County, Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const relatedLinks = [
  { title: "Charlotte County CRE", href: "/markets/charlotte", description: "Punta Gorda and Port Charlotte coastal commercial market" },
  { title: "Hernando County CRE", href: "/markets/hernando", description: "Spring Hill and Suncoast Parkway corridor" },
  { title: "Commercial Industrial and Warehouse", href: "/commercial/industrial-warehouse", description: "Industrial and flex space investment strategy" },
  { title: "Investment Sales Advisory", href: "/services/investment-sales", description: "Acquisition and disposition strategy for Florida CRE investors" },
  { title: "What Makes a Good Commercial Investment", href: "/blog/what-makes-a-good-commercial-investment", description: "Framework for evaluating secondary-market CRE opportunities" },
  { title: "Florida 1031 Exchange Guide", href: "/blog/florida-1031-exchange-what-investors-need-to-know", description: "Using 1031 exchanges to reposition Florida CRE holdings" },
];

export default function BayPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Bay County", href: "/markets/bay" },
        ]}
      />

      <Hero
        title="Bay County Commercial Real Estate"
        subtitle="Panama City, Panama City Beach, and the Tyndall AFB corridor: Northwest Florida&apos;s most dynamic commercial market, with real demand drivers and pricing below tier-1 Florida metros."
        ctaText="Talk to Barrett"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Bay County CRE Market Overview</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Bay County is not a minor-league market — it is a tier-2 player with genuine structural demand drivers. Panama City, Panama City Beach, Lynn Haven, and Callaway form one of Northwest Florida&apos;s most dynamic commercial markets. Tyndall Air Force Base expansion, post-Hurricane Michael reconstruction still generating activity, and a tourism and hospitality corridor anchored by Panama City Beach collectively create a market that rewards investors who understand secondary markets with real fundamentals.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Bay County as referral territory. He understands the Tyndall dynamic, the beach tourism market, and the post-Michael reconstruction landscape — and can connect buyers, sellers, and occupants with opportunities that generic market reports miss.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Key Commercial Corridors and Submarkets</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-black">Panama City Beach Tourism Corridor</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              This is the market&apos;s revenue engine. The hospitality sector — hotels, resorts, vacation rental platforms — drives consistent demand for <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>, restaurant space, and ancillary services. Beach-adjacent retail and dining remain resilient and competitive, with seasonal demand patterns that experienced landlords and investors know how to underwrite.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Panama City Central and Downtown</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              The traditional downtown core has seen reinvestment tied to Hurricane Michael recovery. <Link href="/commercial/office-space" className="text-accent underline">Office</Link>, mixed-use, and street-level retail have been repositioned. This corridor attracts professional services, medical offices, and smaller regional firms seeking alternatives to higher-cost markets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Tyndall Air Force Base Corridor — Lynn Haven and Callaway</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              This is the Bay County wildcard. The base expansion has already triggered demand for defense contractor spaces, <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial and flex properties</Link>, and workforce housing. Surrounding municipalities — Lynn Haven and Callaway — are experiencing spillover commercial activity. For investors focused on government contractors or industrial tenancy, this corridor is one of the best emerging opportunities in Northwest Florida.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Inline image ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75"
          alt="Bay County Florida commercial real estate Panama City industrial and logistics corridor"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Bay County&apos;s industrial and flex market is driven by Tyndall Air Force Base expansion, defense contractor demand, and post-Hurricane Michael reconstruction activity in Lynn Haven and Callaway.</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Active Asset Classes in Bay County</h2>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-black">Industrial and Flex Space</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Post-Michael reconstruction generated demand for <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial and flex properties</Link>. Defense contractor activity near Tyndall fuels ongoing interest in warehouse and manufacturing-adjacent space. Use our <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> to evaluate industrial acquisition yields before writing an offer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Hospitality and Hotel</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              The beach market never stopped moving. Hotels, motels, and resort repositioning remain active. This segment benefits directly from tourism recovery and seasonal demand patterns that make Bay County one of the most consistent hospitality markets in Northwest Florida.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Retail</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Experiential and restaurant-driven <Link href="/commercial/retail-space" className="text-accent underline">retail</Link> near the beach performs better than traditional strip retail. Value-oriented and service-driven tenants — hair, nails, quick service, medical — stay busy. Understanding CAM charges before leasing is essential; our <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">tenant&apos;s guide to CAM</Link> walks through what to expect.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Mixed-Use and Workforce Housing</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Workforce housing and residential-over-retail development has emerged as a real opportunity, especially near downtown Panama City and near the base. This trend reflects broader regional housing demand tied to the Tyndall expansion and is attracting developer interest from outside the local market.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Medical Office</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Professional services and <Link href="/commercial/office-space" className="text-accent underline">medical office</Link> hold steady in Bay County. Secondary and tertiary markets like Bay County saw less pandemic-driven office flight than major metros, so office availability exists without the crisis narratives you hear from larger cities. For the broader Florida medical office picture, see our post on <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">medical office real estate in 2026</Link>.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-black">Why Bay County Matters for Your Portfolio</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Bay County operates in the sweet spot: real, measurable demand drivers (Tyndall, tourism, reconstruction) without the supply constraints and valuation compression of tier-1 markets. You are not fighting for scraps in a saturated market. For investors seeking secondary-market exposure with actual fundamentals, Bay County is worth the conversation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The market also offers pricing flexibility. You will find opportunities that do not exist in Tampa or Jacksonville — both in acquisition and in operating economics. For occupants, the cost of occupancy is genuinely lower. Use the <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link> to model your returns and the <Link href="/calculators/commercial-mortgage" className="text-accent underline">commercial mortgage calculator</Link> to understand your debt service before submitting an offer.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before committing to any Bay County acquisition, review our <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence timeline</Link> and our post on <Link href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">Florida&apos;s insurance crisis</Link> — insurance costs in Gulf Coast markets have risen sharply and must be underwritten carefully. Our <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">guide to evaluating commercial investments</Link> provides the full framework for comparing Bay County opportunities against other Florida markets.
        </p>
      </section>

      <section
        id="lead-form"
        className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-black">Inquire About Bay County CRE</h2>
          <p className="mt-2 text-[#666666]">
            Barrett Henry works Bay County transactions strategically and deliberately. Call <strong>(813) 733-7907</strong> or send a message below for direct market insight — no generic pitches, no wasted time.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Bay County CRE: Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <RelatedLinks heading="Explore Related Markets and Resources" links={relatedLinks} />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>

      <CTASection
        heading="Bay County CRE: Let&apos;s Talk"
        body="If you are considering a Bay County transaction — whether investing, expanding, or repositioning — Barrett Henry at REMAX Collective is ready to have a real conversation. With 23+ years of Florida CRE experience, he brings market intelligence that generic brokers cannot. Call (813) 733-7907 today."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
