import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * FAQ Page — mega FAQ with 20 CRE questions organized by category.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "REMAX Commercial Florida FAQ | Barrett Henry",
  description:
    "Answers to the most common commercial real estate questions — leasing, investing, selling, cap rates, tenant rep, and working with Barrett Henry in Florida.",
  openGraph: {
    title: "CRE FAQ | REMAX Commercial Florida",
    description:
      "20+ answers to common commercial real estate questions. Leasing, investment, selling, and more.",
    url: "https://hencre.com/faq",
  },
};

/* -- FAQ categories and questions -- */
const FAQ_CATEGORIES = [
  {
    category: "General CRE",
    faqs: [
      {
        q: "What does a commercial real estate broker do?",
        a: "A CRE broker represents clients in buying, selling, or leasing commercial properties. I handle market research, property tours, financial analysis, lease or purchase negotiation, due diligence coordination, and closing. Think of me as your deal quarterback — I manage every moving piece so you can focus on your business.",
      },
      {
        q: "How is commercial real estate different from residential?",
        a: "Commercial deals are income-driven. Properties are valued by net operating income and cap rates, not comparable home sales. Leases are longer (3-10+ years), more complex, and heavily negotiated. Due diligence is deeper — environmental reports, zoning reviews, tenant estoppels. The stakes are higher and the process demands specialized expertise.",
      },
      {
        q: "What property types qualify as commercial real estate?",
        a: "Office, retail, industrial/warehouse, multifamily (5+ units), hospitality, self-storage, medical, mixed-use, and land. If it generates income or houses a business, it is commercial. I handle office, retail, industrial, multifamily, NNN net lease, and land/development across Florida.",
      },
      {
        q: "What areas of Florida do you cover?",
        a: "I am anchored in Tampa Bay with offices in Tampa, Largo, and Brandon. But I serve all 67 Florida counties. For deals outside my core market, I partner with trusted local brokers so you get boots-on-the-ground knowledge everywhere.",
      },
    ],
  },
  {
    category: "Leasing",
    faqs: [
      {
        q: "Do I pay a commission as a tenant?",
        a: "In most commercial lease transactions, the landlord pays the brokerage commission. As your tenant representative, I negotiate on your behalf at no direct cost to you. My incentive is aligned with yours — better terms for you means a better deal for everyone.",
      },
      {
        q: "What is a triple-net (NNN) lease?",
        a: "In a NNN lease, the tenant pays base rent plus all three net expenses: property taxes, insurance, and common area maintenance (CAM). This shifts operating costs from the landlord to the tenant. NNN properties are popular investments because they offer predictable cash flow with minimal landlord responsibility.",
      },
      {
        q: "How long does a commercial lease negotiation take?",
        a: "Most lease negotiations run 30 to 90 days from LOI (letter of intent) to executed lease. Factors that extend timelines include build-out requirements, zoning approvals, and multi-party negotiations. I set clear milestones and keep every party accountable.",
      },
      {
        q: "What is a tenant improvement allowance?",
        a: "A TI allowance is money the landlord contributes toward customizing the space for your business — think build-outs, HVAC modifications, or finish upgrades. TI is negotiable and depends on lease term, credit, and market conditions. A strong tenant rep will push for the maximum allowance.",
      },
    ],
  },
  {
    category: "Investment",
    faqs: [
      {
        q: "What is a cap rate and why does it matter?",
        a: "Capitalization rate equals net operating income divided by purchase price. A 7% cap means the property generates 7% of its value in annual net income. Lower cap rates typically signal lower-risk, higher-demand markets. Cap rates are one metric — I help you evaluate the full picture including debt service, appreciation potential, and tenant quality.",
      },
      {
        q: "How do I evaluate a commercial investment property?",
        a: "Start with the numbers: NOI, cap rate, cash-on-cash return, and debt service coverage ratio. Then look at the fundamentals — tenant creditworthiness, lease terms, location, market trends, and deferred maintenance. I build detailed pro formas so you can compare opportunities side by side.",
      },
      {
        q: "Can you help with 1031 exchanges?",
        a: "I am not a tax advisor, but I regularly work with investors executing 1031 exchanges. I coordinate with your qualified intermediary and identify replacement properties within the strict IRS timelines — 45 days to identify, 180 days to close. Timing is everything, and I keep the process on track.",
      },
      {
        q: "What is a good cap rate for Florida commercial property?",
        a: "Cap rates vary widely by property type, location, and tenant quality. In Tampa Bay, you might see 5-6% for stabilized NNN retail, 6-8% for office, and 4-5% for institutional multifamily. The 'right' cap rate depends on your return requirements, risk tolerance, and hold period. I help you benchmark against the market.",
      },
    ],
  },
  {
    category: "Selling",
    faqs: [
      {
        q: "How do I know when it is time to sell my commercial property?",
        a: "Common triggers include lease expirations approaching, declining occupancy, capital gains exposure, portfolio rebalancing, or simply peak market timing. If your property has appreciated significantly or your investment thesis has played out, it may be time to harvest gains. I provide broker opinions of value to help you decide.",
      },
      {
        q: "What is a broker opinion of value (BOV)?",
        a: "A BOV is a market value estimate prepared by a licensed broker based on comparable sales, income analysis, and market conditions. It is not a formal appraisal, but it gives you a reliable range for pricing and decision-making. I provide BOVs as part of my CRE valuation service.",
      },
      {
        q: "How long does it take to sell a commercial property?",
        a: "Marketing periods typically run 90 to 180 days, depending on property type, price, and market conditions. NNN properties with strong tenants sell faster. Vacant or value-add properties take longer. I create competitive tension through targeted marketing and my broker network to compress timelines.",
      },
    ],
  },
  {
    category: "Working with Barrett",
    faqs: [
      {
        q: "Why should I work with you instead of a large brokerage?",
        a: "When you call me, you get me — not an assistant, not a junior agent, not a voicemail maze. I bring 23+ years of real estate experience with the full backing of REMAX Collective, one of the largest real estate networks in the world. You get personalized service with institutional reach.",
      },
      {
        q: "Do you handle both sides of a transaction?",
        a: "I can, but my preference is to represent one side clearly. Whether I am your tenant rep, your listing broker, or your buyer's agent, my fiduciary duty is to you. Dual agency is disclosed and only pursued when it genuinely benefits both parties.",
      },
      {
        q: "What is the first step to working together?",
        a: "Call me at (813) 733-7907 or fill out the contact form. Tell me what you are looking for — lease space, sell a property, invest, whatever it is. I will respond within one business day with an honest assessment of how I can help. No hard sell, no obligation.",
      },
      {
        q: "Do you offer referral fees to other agents?",
        a: "Yes. If you are a licensed agent with a commercial deal outside your expertise, refer it to me. I pay competitive referral fees and keep you informed throughout the process. Visit the Refer a Deal page for details.",
      },
      {
        q: "What designations and awards do you hold?",
        a: "I am an e-PRO certified agent, Military Relocation Professional (MRP), Seller Representative Specialist (SRS), and REMAX Hall of Fame inductee. These are not just letters — they represent specialized training and a track record of results.",
      },
    ],
  },
] as const;

/* -- Flatten all FAQs for schema -- */
const allFaqs = FAQ_CATEGORIES.flatMap((cat) =>
  cat.faqs.map((f) => ({ q: f.q, a: f.a }))
);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "FAQ", item: "https://hencre.com/faq" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-slate-brand">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-navy" aria-current="page">FAQ</li>
        </ol>
      </nav>

      <Hero
        title="Frequently Asked Questions"
        subtitle="Straight answers to common commercial real estate questions. No jargon, no runaround."
      />

      {/* ---- FAQ categories ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {FAQ_CATEGORIES.map((cat) => (
          <div key={cat.category} className="mb-12">
            <h2 className="text-2xl font-bold text-navy">{cat.category}</h2>
            <dl className="mt-6 space-y-6">
              {cat.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-200 pb-6">
                  <dt className="text-lg font-semibold text-navy">{faq.q}</dt>
                  <dd className="mt-2 text-slate-brand leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-navy px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            I am happy to talk through your specific situation. No charge for the
            conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-[#0a2441] no-underline transition-colors hover:bg-remax-gray hover:no-underline"
            >
              Contact Barrett
            </Link>
            <a
              href="tel:+18137337907"
              className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
            >
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
