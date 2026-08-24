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
  title: "Baker County Commercial Real Estate | HenCRE",
  description:
    "Baker County, FL CRE: Macclenny, I-10 and US-90 corridor, agricultural land, light industrial, and rural commercial opportunities. Call Barrett Henry at (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets/baker" },
  openGraph: {
    title: "Baker County Commercial Real Estate | HenCRE",
    description:
      "Rural North Florida market with agricultural land, light industrial, and I-10 corridor commercial opportunities in Macclenny and Glen St. Mary.",
    url: "https://hencre.com/markets/baker",
  },
};

const faqItems = [
  {
    question: "Is Baker County worth buying commercial land or property in right now?",
    answer:
      "It depends entirely on your use case. If you are an operator who needs affordable acreage for agricultural, light industrial, or rural commercial purposes, the land economics in Baker County work well. Per-acre costs are substantially lower than metro Jacksonville or Central Florida alternatives. If you are speculating on development appreciation, this is not the right market. Baker County rewards use-case buyers: farmers, ag support businesses, and light industrial operators.",
  },
  {
    question: "What commercial property types are available in Baker County?",
    answer:
      "Baker County's primary asset classes are agricultural land, rural acreage, neighborhood retail along US-90, light industrial and agricultural support facilities, and owner-occupied properties serving the local Macclenny economy. There are no Class A office parks or major retail centers. The market is functional, rural, and cost-efficient for the right buyer.",
  },
  {
    question: "What is the I-10 and US-90 corridor advantage for Baker County businesses?",
    answer:
      "Baker County sits on a major interstate corridor connecting Jacksonville to Central and Western Florida. For light industrial, distribution-adjacent, or seasonal agricultural operations, this location provides genuine highway access without the congestion or cost of operating inside the Jacksonville metro. Equipment dealers, farm supply companies, and logistics-adjacent operators find real value in this position.",
  },
  {
    question: "How active is the commercial real estate market in Baker County?",
    answer:
      "It is modest but steady. Turnover is low — properties stay in the same hands for years. When deals do move, they are typically between serious operators, not speculators. This creates a different transaction dynamic: longer due diligence, more practical negotiation, fewer financing complications. Deal flow is lower velocity than Duval or Clay counties, but fundamentals are sound for the right buyer.",
  },
  {
    question: "Does Barrett Henry handle commercial real estate transactions in Baker County?",
    answer:
      "Yes. Baker County is part of Barrett's referral territory within his statewide Florida practice. He works with agricultural land buyers and sellers, light industrial operators, and investors seeking rural commercial assets. With 23+ years of real estate experience and a Broker Associate designation at REMAX Collective, Barrett provides institutional-grade analysis for Baker County engagements. Call (813) 733-7907 to discuss your Baker County transaction.",
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
        { "@type": "ListItem", position: 3, name: "Baker County", item: "https://hencre.com/markets/baker" },
      ],
    },
    {
      "@type": "Service",
      name: "Baker County Commercial Real Estate Services",
      description: "CRE land sales, agricultural brokerage, light industrial, and rural commercial transactions in Baker County, Florida.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        telephone: "(813) 733-7907",
        email: "barrett@hencre.com",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "Baker County, Florida" },
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
  { title: "Columbia County CRE", href: "/markets/columbia", description: "Lake City and I-10 corridor commercial market" },
  { title: "Clay County CRE", href: "/markets/clay", description: "Orange Park and Fleming Island in Northeast Florida" },
  { title: "Bradford County CRE", href: "/markets/bradford", description: "Starke and rural North Florida commercial opportunities" },
  { title: "Commercial Land and Development", href: "/commercial/land-development", description: "Florida land acquisition and development strategy with Barrett" },
  { title: "1031 Exchange Basics", href: "/insights/1031-exchange-basics", description: "Using 1031 exchanges to transition rural land holdings" },
  { title: "Investment Sales Advisory", href: "/services/investment-sales", description: "Buyer and seller representation for Florida commercial properties" },
];

export default function BakerPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Baker County", href: "/markets/baker" },
        ]}
      />

      <Hero
        title="Baker County Commercial Real Estate"
        subtitle="Rural North Florida market with agricultural land, light industrial, and I-10 corridor commercial opportunities near Macclenny."
        ctaText="Talk to Barrett"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Baker County CRE Market Overview</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Baker County sits in Northeast Florida as a rural market with real fundamentals. It is not a primary investment corridor — it is a secondary market with specific, practical uses. Barrett Henry, Broker Associate at REMAX Collective with 23+ years of real estate experience, works Baker County because there is genuine opportunity for the right buyer or tenant, and the land economics are compelling for rural agricultural, light industrial, and neighborhood retail operators.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This county is not where you go to buy a Class A office tower. It is where you go to acquire <Link href="/commercial/land-development" className="text-accent underline">commercial land</Link> at favorable pricing, establish agricultural operations, or serve the communities of Macclenny and Glen St. Mary without the overhead of higher-cost markets. That has real value for operators who understand it.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Key Commercial Corridors and Activity Centers</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-black">US-90 and I-10 Interchange</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              This is Baker County&apos;s primary commercial spine. The convergence of these two major routes creates the only meaningful commercial activity in the county. Neighborhood retail, fuel stops, and quick-service operations cluster here. It serves as spillover logistics from Jacksonville with consistent highway traffic. Land is accessible, visibility is decent, and the corridor performs for necessity-retail and light industrial operators.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Macclenny — County Seat</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Downtown Macclenny functions as the service hub for Baker County. Agricultural supply dealers, local equipment services, and essential <Link href="/commercial/retail-space" className="text-accent underline">retail</Link> cluster here. It is a stable, necessary commercial market that serves farming operations and residents who need local services without driving to Jacksonville.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Jacksonville Metro Spillover Zone</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              As Jacksonville-area land costs climb in closer-in Duval County, operators seeking raw acreage, warehouse space, or agricultural support services increasingly look to Baker County. This is a gradual trend, not a dramatic shift — but savvy operators are seeing value here before closer-in markets do. For comparison, see how the <Link href="/markets/clay" className="text-accent underline">Clay County market</Link> and <Link href="/markets/columbia" className="text-accent underline">Columbia County market</Link> serve similar roles in their respective corridors.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Inline image ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=75"
          alt="Baker County Florida rural commercial corridor and agricultural land near Macclenny"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Baker County&apos;s I-10 and US-90 corridor offers highway access without metro-area cost, serving agricultural operators, light industrial users, and necessity retail.</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Active Property Types and Use Cases</h2>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-black">Agricultural Land and Rural Acreage</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              This is Baker County&apos;s primary asset class. Pastureland, timberland, row crop operations, and hunting properties dominate. Land costs are among the lowest in Northeast Florida, making this market attractive for farmers, ranchers, and agricultural investors priced out of closer-in counties. Barrett handles <Link href="/commercial/land-development" className="text-accent underline">land acquisition and sales</Link> across rural Florida and can provide comparables and market analysis for Baker County parcels.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Neighborhood Retail</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Small-format retail serving local demand — gas, food, convenience items. These properties typically cluster along US-90 and in Macclenny proper. They are necessity retail, not destination retail. But they lease and perform because people live here and need services. <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">Understanding the lease structure</Link> before acquiring or leasing these properties is essential.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Light Industrial and Agricultural Support</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Equipment dealers, farm supply operations, feed mills, and <Link href="/commercial/industrial-warehouse" className="text-accent underline">light warehousing</Link> operators benefit from low land cost, I-10 and US-90 access, and proximity to Jacksonville distribution networks without the cost burden of operating inside the metro area. This asset class performs well for use-case buyers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">1031 Exchange Opportunities</h3>
            <p className="mt-2 text-[#666666] leading-relaxed">
              Agricultural and rural operators using <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchanges</Link> often look at Baker County as a lower-cost alternative to hold property or restructure holdings. Barrett facilitates these transactions and can help identify qualifying replacement properties within the required timeline. See our <Link href="/insights/1031-exchange-basics" className="text-accent underline">1031 exchange basics guide</Link> for the fundamentals.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-black">The Realistic Assessment</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Baker County is not flashy. There is no Class A office park, no major corporate relocation, no development boom on the horizon. What is here is functional, rural, and economical. If that matches what you need — affordable land, highway access, agricultural infrastructure — the county offers real value at a price point that does not exist in Tampa Bay or South Florida.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before committing to any acquisition, use the <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> to evaluate yield expectations, and review our <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence timeline</Link> to understand what to check before closing. Florida&apos;s insurance environment also affects rural commercial properties — our post on <Link href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">Florida&apos;s insurance crisis</Link> is worth reading before underwriting any acquisition.
        </p>
      </section>

      <section
        id="lead-form"
        className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-black">Inquire About Baker County CRE</h2>
          <p className="mt-2 text-[#666666]">
            Barrett Henry works Baker County transactions for agricultural buyers, land investors, and light industrial operators. Call <strong>(813) 733-7907</strong> or send a message below for a direct, honest market assessment.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Baker County CRE: Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <RelatedLinks heading="Explore Related Markets and Resources" links={relatedLinks} />

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>

      <CTASection
        heading="Baker County Commercial Real Estate: Let&apos;s Talk"
        body="Barrett Henry, Broker Associate at REMAX Collective, works agricultural land, light industrial, and rural commercial transactions throughout Northeast and North Central Florida. If Baker County fits your strategy, call (813) 733-7907 for a direct, honest market assessment."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
