import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Investment Sales — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Investment Sales Florida | Buy & Sell Commercial",
  description:
    "Buy or sell income-producing commercial real estate in Florida. Data-driven investment analysis, deal sourcing, and negotiation for investors and family offices. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/investment-sales" },
  openGraph: {
    title: "Investment Sales | REMAX Commercial Real Estate",
    description:
      "Acquire income-producing properties or sell at peak value. Data-driven CRE investment services across Florida.",
    url: "https://hencre.com/services/investment-sales",
  },
};

/* -- FAQ data -- */
const FAQS = [
  {
    question: "What cap rate should I target for CRE investment in Florida?",
    answer: "Cap rate targets depend on property type, location, and risk tolerance. Stabilized NNN retail in strong markets trades at 5-6%. Value-add multifamily may target 7-9%. Barrett helps you understand what cap rates mean in the context of each specific submarket and asset class.",
  },
  {
    question: "How do I evaluate a commercial investment property?",
    answer: "Start with Net Operating Income (NOI), then look at cap rate, cash-on-cash return, debt service coverage ratio, and internal rate of return over your hold period. Barrett builds detailed pro formas that project all of these metrics so you can make data-driven decisions.",
  },
  {
    question: "What is a 1031 exchange and how does it work?",
    answer: "A 1031 exchange allows you to defer capital gains taxes by reinvesting the proceeds from a sold property into a like-kind replacement. You have 45 days to identify and 180 days to close. Barrett coordinates with your qualified intermediary to meet these strict IRS timelines.",
  },
  {
    question: "Do you help with off-market investment deals?",
    answer: "Yes. Barrett sources off-market opportunities through his broker network, direct owner outreach, and the REMAX Commercial referral system. Many of the best investment deals never hit the public market.",
  },
  {
    question: "What is the minimum investment for commercial real estate?",
    answer: "Entry points vary widely. Small retail strips or flex buildings can start under $500,000. NNN properties typically range from $1M to $5M. Multifamily complexes range from $1M to $20M+. Barrett works across all deal sizes and helps investors at every stage.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "Investment Sales", item: "https://hencre.com/services/investment-sales" },
      ],
    },
    {
      "@type": "Service",
      name: "Investment Sales",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Commercial investment property acquisition and disposition — deal sourcing, financial analysis, and negotiation.",
      areaServed: { "@type": "State", name: "Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function InvestmentSalesPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Investment Sales</li>
        </ol>
      </nav>

      <Hero
        title="Investment Sales"
        subtitle="Acquire income-producing properties or sell at peak value. Data-driven analysis for confident decisions."
        ctaText="Discuss an Investment"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial investment sales involve buying or selling income-producing properties like office buildings, retail centers, and multifamily complexes. According to the National Association of REALTORS, commercial real estate transactions in Florida exceeded $85 billion in 2024, driven by population growth, no state income tax, and strong fundamentals across all major metros.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Smart Acquisitions. Strategic Exits.</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            As a REMAX Commercial Real Estate advisor, Barrett brings global market reach and deep analytical expertise to every investment transaction. Commercial real estate investing is about numbers — but the right numbers
            require the right market intelligence. A 7% cap rate in one submarket is a
            steal; in another, it is overpriced. I bring the local context that
            spreadsheets cannot provide.
          </p>
          <p>
            For buyers, I source on-market and off-market opportunities that match your
            investment criteria. I build detailed pro formas projecting cash flow, debt
            service, and returns over your hold period. When we identify a target, I
            negotiate purchase terms, coordinate due diligence, and manage the process
            through closing.
          </p>
          <p>
            For sellers, I position your property to attract the right buyer pool. That
            means accurate pricing based on comparable sales and income analysis,
            professional marketing materials, and targeted outreach to active buyers
            and brokers. I create competitive tension to drive the best possible price
            and terms.
          </p>
          <p>
            Whether you are acquiring your first investment property, adding to a
            portfolio, or executing a 1031 exchange under tight deadlines, I have the
            experience and network to deliver results across Florida.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Individual investors building or diversifying a portfolio",
              "Family offices seeking stable cash-flow assets",
              "1031 exchange buyers under identification deadlines",
              "Syndicators and fund managers",
              "Business owners acquiring owner-occupied properties",
              "Out-of-state investors entering the Florida market",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-black font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">The Process</h2>
          <ol className="mt-8 space-y-6">
            {[
              { step: "Investment Criteria", desc: "We define your target: property type, geography, cap rate range, budget, and hold period." },
              { step: "Deal Sourcing", desc: "I search on-market listings, off-market leads, and my broker network for matching opportunities." },
              { step: "Financial Analysis", desc: "Detailed pro formas with projected cash flow, returns, and debt service coverage." },
              { step: "Offer & Negotiation", desc: "I draft the LOI or purchase contract and negotiate price, terms, and contingencies." },
              { step: "Due Diligence", desc: "Environmental, title, survey, tenant estoppels, and financial verification coordinated." },
              { step: "Closing", desc: "I manage the timeline and stakeholders through a clean closing." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-black">{item.step}</p>
                  <p className="mt-1 text-[#666666]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Invest — or Exit?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your investment goals and I will identify the right opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Contact Barrett
            </Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      {/* ---- Investment metrics table ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Key CRE Investment Metrics Compare?</h2>
          <p className="mt-4 text-[#666666]">According to the Appraisal Institute, investors should evaluate multiple return metrics — not just cap rate.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Metric</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">What It Measures</th>
                  <th className="py-3 text-left font-bold text-black">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/insights/what-is-a-cap-rate" className="underline">Cap Rate</Link></td>
                  <td className="py-3 pr-4">NOI relative to property value (unleveraged)</td>
                  <td className="py-3">Comparing similar properties</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Cash-on-Cash</td>
                  <td className="py-3 pr-4">Annual cash flow relative to equity invested</td>
                  <td className="py-3">Evaluating actual return on your money</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">DSCR</td>
                  <td className="py-3 pr-4">NOI relative to annual debt service</td>
                  <td className="py-3">Lender qualification (1.25x+ typical)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">IRR</td>
                  <td className="py-3 pr-4">Total return over hold period including sale</td>
                  <td className="py-3">Long-term investment planning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Investment Sales — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>National Association of REALTORS — Commercial Real Estate Transactions Report 2024</li>
          <li>Appraisal Institute — <em>The Appraisal of Real Estate</em>, 15th Edition</li>
          <li>IRS Publication 544 — Sales and Other Dispositions of Assets (1031 Exchange Rules)</li>
          <li>CoStar Group — Florida Investment Sales Market Analytics</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
            <Link href="/insights/1031-exchange-basics" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">1031 Exchange Basics</Link>
          </div>
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
