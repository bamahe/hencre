import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import RelatedLinks from "@/components/RelatedLinks";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Lafayette County FL Commercial Real Estate | HenCRE",
  description:
    "Lafayette County is Florida's least populated county -- and a genuine opportunity for agricultural land, timber property, and rural commercial real estate. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/lafayette" },
  openGraph: {
    title: "Lafayette County FL Commercial Real Estate | HenCRE",
    description:
      "Lafayette County is Florida's least populated county -- and a genuine opportunity for agricultural land, timber property, and rural commercial real estate.",
    url: "https://hencre.com/markets/lafayette",
    siteName: "HenCRE",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What types of commercial real estate are available in Lafayette County?",
    answer:
      "The primary commercial asset classes in Lafayette County are agricultural land (working farms and ranch operations), managed timber properties, rural highway commercial buildings in and around Mayo, and ag-related industrial facilities like feed mills, equipment storage, and processing operations. Small office and service-retail buildings exist in Mayo but inventory is very limited.",
  },
  {
    question: "Who buys commercial real estate in Lafayette County?",
    answer:
      "Buyers typically include larger farming operations seeking acreage expansion, institutional and private timber investors building diversified natural resource portfolios, local business owners seeking affordable owner-user space, and out-of-state investors evaluating rural Florida land as a portfolio component. This isn't institutional urban capital -- it's operators and informed private investors.",
  },
  {
    question: "What drives commercial real estate demand in Lafayette County?",
    answer:
      "Agricultural consolidation, timber investment cycles, local business expansion, regional land banking, and conservation and legacy planning are the core demand drivers. Lafayette County's CRE demand is fundamentally different from suburban Florida markets -- it's driven by operational needs and long-term land value, not population growth or retail expansion.",
  },
  {
    question: "Is Lafayette County a good place to invest in commercial real estate?",
    answer:
      "For the right investor with a rural land or operational thesis, yes. The market rewards informed buyers who understand timber cycles, agricultural economics, and the county's distinct dynamics. Reduced competition and market friction relative to Florida's major metros create genuine opportunity. It is not the right fit for investors expecting lease-up velocity or cap rate compression typical of urban markets.",
  },
  {
    question: "Does Barrett Henry serve Lafayette County?",
    answer:
      "Yes. Barrett Henry at REMAX Collective covers Lafayette County as a referral territory, providing land transaction advisory, property valuations, tenant placement, market intelligence, and investment consultation. With 23+ years of Florida CRE experience and a statewide network, he connects serious clients with real opportunities in this unique rural market.",
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
        { "@type": "ListItem", position: 3, name: "Lafayette County", item: "https://hencre.com/markets/lafayette" },
      ],
    },
    {
      "@type": "Article",
      headline: "Lafayette County FL Commercial Real Estate Market Guide",
      description:
        "Lafayette County is Florida's least populated county -- and a genuine opportunity for agricultural land, timber property, and rural commercial real estate.",
      datePublished: "2026-07-20",
      dateModified: "2026-08-11",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/markets/lafayette",
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
  {
    title: "Jefferson County Commercial Real Estate",
    href: "/markets/jefferson",
    description: "Neighboring Jefferson County -- rural North Florida with Tallahassee proximity.",
  },
  {
    title: "Hamilton County Commercial Real Estate",
    href: "/markets/hamilton",
    description: "Rural North Florida commercial real estate in Hamilton County.",
  },
  {
    title: "Columbia County Commercial Real Estate",
    href: "/markets/columbia",
    description: "Lake City and Columbia County -- a more active North Florida commercial market.",
  },
  {
    title: "Gilchrist County Commercial Real Estate",
    href: "/markets/gilchrist",
    description: "Small rural commercial market in Gilchrist County, North Central Florida.",
  },
  {
    title: "Dixie County Commercial Real Estate",
    href: "/markets/dixie",
    description: "Rural Big Bend commercial real estate in Dixie County.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps buyers and sellers execute Florida commercial investment transactions.",
  },
  {
    title: "Land Development Properties",
    href: "/commercial/land-development",
    description: "Agricultural land, timber properties, and rural development parcels across Florida.",
  },
  {
    title: "What Is a Cap Rate",
    href: "/insights/what-is-a-cap-rate",
    description: "Cap rate fundamentals for evaluating rural Florida land and commercial property.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Exchange into or out of Lafayette County agricultural and timber assets tax-efficiently.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "The evaluation framework every Lafayette County investor should apply before committing capital.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Lafayette County", href: "/markets/lafayette" },
        ]}
      />

      <Hero
        title="Lafayette County FL Commercial Real Estate"
        subtitle="Florida&apos;s least populated county is a genuine opportunity for agricultural land, timber investment, and rural commercial real estate -- for buyers who understand what drives this unique market."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          I&apos;m Barrett Henry, Broker Associate with REMAX Collective, and I&apos;ve spent 23+ years navigating Florida&apos;s commercial real estate landscape. Lafayette County represents exactly the kind of market most brokers overlook: not for everyone, but for the right investor or operator, it&apos;s where land value and rural development potential converge. Let me be direct: Lafayette County isn&apos;t a high-velocity commercial market. It&apos;s Florida&apos;s least populated county, anchored by agriculture and timber operations. But that&apos;s precisely why savvy investors and operators are paying attention.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Lafayette County Market at a Glance</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Lafayette County operates on a different rhythm than your typical Florida commercial corridor. You won&apos;t find the density, the tenant roster, or the cap rate compression you see in Tampa Bay, Miami, or Jacksonville. What you will find is raw acreage, agricultural operations, timber properties, and land positioned for long-term value appreciation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Mayo serves as the county seat and the de facto commercial hub, though &quot;hub&quot; requires context here. This is a rural market where commercial activity clusters around essential services, agricultural support operations, and light industrial uses tied directly to the region&apos;s economic foundation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Primary CRE Corridors and Activity Centers</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Unlike urban markets defined by highway corridors and dense commercial nodes, Lafayette County&apos;s activity is geographically dispersed and asset-type specific.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Mayo Commercial Area:</strong> The primary concentration point for retail, office, and service-related commercial activity. This is where you&apos;ll find local business services, agricultural supply operations, and county-focused commerce.
          </li>
          <li>
            <strong>Agricultural Land Base:</strong> The largest CRE asset class by far. Working farms, ranch operations, and row crop properties dominate the landscape. These aren&apos;t speculative holdings -- they&apos;re operating businesses with established tenant relationships and revenue streams. See our overview of <a href="/commercial/land-development" className="text-accent underline">land development and agricultural properties</a> across Florida.
          </li>
          <li>
            <strong>Timber Property Corridor:</strong> Significant forestland throughout the county represents stable, long-term value. Timber operations have predictable harvest cycles and established management structures.
          </li>
          <li>
            <strong>Rural Highway Frontage:</strong> Properties along major routes serving the county see occasional retail or light commercial development, but activity is sporadic and opportunity-driven.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Active Property Types and Investment Opportunities</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Lafayette County, your CRE opportunities break down into three primary categories:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Land -- Agricultural:</strong> Productive farmland with operating tenants or owned and operated by sellers. These assets generate income and serve as vehicles for farm operator expansion or consolidation.
          </li>
          <li>
            <strong>Land -- Timber/Forestry:</strong> Managed timber stands with long-term appreciation and income potential. These appeal to investors seeking stable, tax-efficient returns over multi-year holding periods. A <a href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</a> is frequently used to move into or out of these assets efficiently.
          </li>
          <li>
            <strong>Land -- Development/Speculation:</strong> Raw acreage positioned for future commercial or mixed-use development. Activity here is slower, but investor interest emerges when regional growth patterns shift or infrastructure improvements occur.
          </li>
          <li>
            <strong>Small Commercial Buildings:</strong> Limited inventory of retail, office, and agricultural service buildings in and around Mayo. These typically house local businesses and are owner-occupied or held by long-term local investors.
          </li>
          <li>
            <strong>Ag-Related Industrial:</strong> Feed mills, equipment facilities, processing operations, and storage tied directly to agricultural output. These are operational assets with established customer bases.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Drives Demand in This Market?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Lafayette County&apos;s CRE demand is fundamentally different from suburban Florida markets. It&apos;s not about population growth or retail expansion. It&apos;s about these core drivers:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Agricultural Consolidation:</strong> Larger farming operations acquire land to expand acreage, optimize operations, or vertically integrate. These are strategic, not speculative, transactions.</li>
          <li><strong>Timber Investment Cycles:</strong> Institutional and private timber investors pursue property as part of diversified natural resource portfolios. Harvest schedules and market conditions dictate transaction timing.</li>
          <li><strong>Local Business Expansion:</strong> Owner-operators in agriculture, equipment, and services occasionally need larger facilities or additional land. These are smaller-scale deals but steady.</li>
          <li><strong>Regional Land Banking:</strong> Investors with longer time horizons acquire land anticipating future development or infrastructure improvements that could reshape property values.</li>
          <li><strong>Conservation and Legacy Planning:</strong> Landowners use conservation easements, charitable transfers, and estate planning to optimize tax outcomes on multi-generational holdings.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Market Positioning and Why It Matters</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Lafayette County is a Tier 2 referral market for my business, and I treat it that way -- with the same professionalism and expertise I bring to primary markets, but with clarity about its distinct characteristics.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you&apos;re looking for rapid lease-up cycles or tight cap rate compression, look elsewhere. But if you&apos;re an operator seeking to expand your agricultural footprint, an investor evaluating rural land as a portfolio component, or a timber company assessing acquisition opportunities, this market deserves serious attention. Use our <a href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</a> and review <a href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">what makes a good commercial investment</a> before approaching any Lafayette County deal.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The advantage here is reduced competition and market friction. Fewer brokers specialize in Lafayette County CRE. That means opportunity for informed buyers and sellers who have the right representation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">My Services in Lafayette County</h2>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Land Transactions:</strong> Buy-sell-exchange advisory for agricultural, timber, and development land. I handle due diligence, market positioning, and negotiation.</li>
          <li><strong>Property Valuations:</strong> Market analysis and appraisal support for land and operating ag/timber properties tied to financing, refinance, or strategic planning.</li>
          <li><strong>Tenant Placement:</strong> For the limited commercial space that turns over, I help identify qualified tenants and structure lease terms.</li>
          <li><strong>Market Intelligence:</strong> Ongoing insight into local transaction activity, operator needs, and value trends -- essential when market data is sparse.</li>
          <li><strong>Investment Consultation:</strong> Advisory for out-of-state or institutional investors evaluating rural Florida land as part of diversified portfolios.</li>
          <li><strong>Referral Network:</strong> When specialized expertise is needed -- forestry consultants, ag economists, conservation specialists -- I facilitate connections.</li>
        </ul>

        <div className="my-10 rounded-lg bg-[#1a1a1a] p-8 text-center text-white">
          <p className="text-lg font-bold">Talk to a REMAX Commercial Broker</p>
          <p className="mt-2 text-white/80">
            Call <a href="tel:8137337907" className="underline">(813) 733-7907</a> or{" "}
            <a href="/contact" className="underline">send a message</a>.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      <RelatedLinks heading="Explore More Florida Markets" links={relatedLinks} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <img
            src="/images/barrett-henry-headshot.jpg"
            alt="Barrett Henry, Broker Associate at REMAX Collective"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | 23+ Years of Real Estate Experience</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett Henry is a licensed Florida REALTOR and Broker Associate at REMAX Collective, operating under the REMAX Commercial division. He serves all 67 Florida counties from offices in Tampa, Largo, and Brandon.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Consult qualified professionals before making real estate decisions.
        </p>
      </section>

      <CTASection
        heading="Ready to Talk Lafayette County Commercial Real Estate?"
        body="If you&apos;re operating in Lafayette County or considering entry into this market, get honest, expert guidance backed by 23+ years of Florida CRE experience. Call (813) 733-7907 or reach out through hencre.com."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
