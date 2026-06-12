import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: What Is a Cap Rate?
 * Evergreen explainer — cap rate fundamentals for CRE investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "What Is a Cap Rate? How to Calculate & Interpret Capitalization Rates",
  description:
    "Learn what capitalization rates are, how to calculate them, and when they matter for commercial real estate investment decisions. Expert guidance from a licensed Florida broker.",
  openGraph: {
    title: "What Is a Cap Rate? How to Calculate & Interpret Capitalization Rates",
    description:
      "Learn what capitalization rates are, how to calculate them, and when they matter for commercial real estate investment decisions.",
    url: "https://hencre.com/insights/what-is-a-cap-rate",
    type: "article",
  },
};

/* Structured data: Article + FAQPage */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Cap Rate? How to Calculate & Interpret Capitalization Rates",
  description:
    "Learn what capitalization rates are, how to calculate them, and when they matter for commercial real estate investment decisions.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: {
    "@type": "Organization",
    name: "REMAX Commercial Real Estate",
    url: "https://hencre.com",
  },
  url: "https://hencre.com/insights/what-is-a-cap-rate",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good cap rate for commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single 'good' cap rate. It depends on property type, location, tenant quality, and market conditions. Lower cap rates typically indicate lower risk and higher-quality assets, while higher cap rates suggest higher risk but potentially stronger cash flow.",
      },
    },
    {
      "@type": "Question",
      name: "Does a higher cap rate mean a better investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. A higher cap rate means you are paying less relative to the property's income, but it often signals higher risk — vacancy concerns, deferred maintenance, shorter lease terms, or weaker tenant credit. The best investment depends on your risk tolerance and strategy.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate a cap rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the property's Net Operating Income (NOI) by the purchase price or current market value, then multiply by 100 to express as a percentage. For example, a property with $100,000 NOI and a $1,250,000 value has an 8% cap rate.",
      },
    },
    {
      "@type": "Question",
      name: "When should I not rely on cap rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cap rates are less useful for vacant properties, value-add projects where income will change significantly, owner-occupied buildings, and properties with below-market or above-market rents. In those cases, a discounted cash flow analysis or comparable sales approach may be more appropriate.",
      },
    },
  ],
};

/* FAQ items for the accordion component */
const faqItems = [
  {
    question: "What is a good cap rate for commercial real estate?",
    answer:
      "There is no single 'good' cap rate. It depends on property type, location, tenant quality, and market conditions. Lower cap rates typically indicate lower risk and higher-quality assets, while higher cap rates suggest higher risk but potentially stronger cash flow.",
  },
  {
    question: "Does a higher cap rate mean a better investment?",
    answer:
      "Not necessarily. A higher cap rate means you are paying less relative to the property's income, but it often signals higher risk — vacancy concerns, deferred maintenance, shorter lease terms, or weaker tenant credit. The best investment depends on your risk tolerance and strategy.",
  },
  {
    question: "How do you calculate a cap rate?",
    answer:
      "Divide the property's Net Operating Income (NOI) by the purchase price or current market value, then multiply by 100 to express as a percentage. For example, a property with $100,000 NOI and a $1,250,000 value has an 8% cap rate.",
  },
  {
    question: "When should I not rely on cap rates?",
    answer:
      "Cap rates are less useful for vacant properties, value-add projects where income will change significantly, owner-occupied buildings, and properties with below-market or above-market rents. In those cases, a discounted cash flow analysis or comparable sales approach may be more appropriate.",
  },
];

/* Related articles for cross-linking */
const relatedLinks = [
  {
    title: "How to Value Commercial Property",
    href: "/insights/how-to-value-commercial-property",
    description: "Income, comparable, and cost approaches to CRE valuation.",
  },
  {
    title: "NNN Leases Explained",
    href: "/insights/nnn-lease-explained",
    description: "Triple net leases: what tenants and landlords need to know.",
  },
  {
    title: "Gross vs. Net Lease Structures",
    href: "/insights/gross-vs-net-lease",
    description: "Compare lease types and their impact on operating costs.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Investment criteria from a broker's perspective.",
  },
];

export default function CapRatePage() {
  return (
    <>
      {/* Structured data */}
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "What Is a Cap Rate?", href: "/insights/what-is-a-cap-rate" },
        ]}
      />

      {/* Hero */}
      <Hero
        title="What Is a Cap Rate?"
        subtitle="The capitalization rate is one of the most talked-about numbers in commercial real estate. Here is what it actually means and when it matters."
      />

      {/* Article body */}
      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          If you have spent any time looking at commercial real estate, someone has thrown a cap rate at you. It is one of the first numbers investors ask about — and one of the most misunderstood. I have been working in real estate for over 23 years, and I still see experienced buyers make decisions based on cap rate alone. That is a mistake. Let me break down what this number actually tells you, how to calculate it, and — just as importantly — when to ignore it.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is a Cap Rate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The capitalization rate — or cap rate — expresses the relationship between a property&apos;s income and its value. Think of it as the rate of return you would earn on a property if you bought it with all cash. It strips out financing variables so you can compare properties on a level playing field.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At its core, cap rate answers one question: &ldquo;For every dollar I spend on this building, how much annual income does it generate?&rdquo;
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How to Calculate a Cap Rate</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The formula is straightforward:
        </p>
        <div className="my-6 rounded-lg bg-[#1a1a1a]/5 p-6 text-center">
          <p className="text-lg font-semibold text-black">
            Cap Rate = Net Operating Income (NOI) &divide; Property Value &times; 100
          </p>
        </div>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Net Operating Income (NOI)</strong> is your gross rental income minus operating expenses — property taxes, insurance, maintenance, management fees, and utilities the landlord pays. It does not include mortgage payments, depreciation, or capital expenditures.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If a retail strip center generates $150,000 in NOI and is listed at $2,000,000, the cap rate is 7.5%. That means for every dollar of purchase price, you are earning 7.5 cents per year in net income before debt service.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Cap Rates Tell You</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates are a quick snapshot of risk and return. Lower cap rates — say in the 4% to 5% range — generally signal a more stable, lower-risk property. These are typically well-located buildings with strong tenants on long-term leases. Investors accept lower returns because they expect predictable cash flow.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Higher cap rates — 8% and above — suggest the market perceives more risk. Maybe the building has shorter lease terms, a secondary location, deferred maintenance, or less creditworthy tenants. Higher cap rates can mean stronger cash flow, but they come with more headaches.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates also vary by property type. Multifamily properties often trade at lower cap rates than retail or industrial because apartment demand tends to be more resilient. Office cap rates have compressed and expanded over the years as workplace patterns shift.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">When Cap Rates Do Not Tell the Whole Story</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Here is where a lot of investors get tripped up. Cap rate is a snapshot — it tells you about today&apos;s income relative to today&apos;s price. It does not account for:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Future rent growth or decline.</strong> A building with below-market rents might have a high cap rate now but explode in value when leases renew.</li>
          <li><strong>Lease structure.</strong> Two buildings with identical cap rates can have wildly different risk profiles depending on lease term length, rent escalations, and tenant credit.</li>
          <li><strong>Physical condition.</strong> A high cap rate might just mean the roof needs replacing. That income could evaporate fast.</li>
          <li><strong>Financing.</strong> Cap rates ignore leverage entirely. Your actual return depends heavily on your loan terms.</li>
          <li><strong>Vacancy.</strong> A vacant building technically has no cap rate. Sellers will project future income, but that is speculation, not fact.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Cap Rate vs. Cash-on-Cash Return</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors sometimes confuse cap rate with cash-on-cash return. They are related but different. Cash-on-cash measures the return on the actual cash you invested after accounting for debt service. If you buy a property with 25% down and finance the rest, your cash-on-cash return could be significantly higher — or lower — than the cap rate, depending on your interest rate and loan terms.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Use cap rate to compare properties. Use cash-on-cash to evaluate your actual investment performance.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How I Use Cap Rates With My Clients</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          When I am working with investors on commercial acquisitions, cap rate is one of the first filters we apply — but never the last. I look at it as a starting point that tells me where a property fits in the risk spectrum. From there, we dig into the lease terms, tenant quality, building condition, and market trajectory.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A property that looks expensive on a cap rate basis might actually be undervalued if rents are well below market. Conversely, a &ldquo;juicy&rdquo; cap rate might be masking deferred maintenance or a tenant about to vacate. The cap rate gets us in the door. Due diligence tells us whether to stay.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates are a valuable tool in your CRE toolkit, but they are not a decision-making shortcut. Know how to calculate them, understand what drives them up or down, and always look beyond the number to the story underneath. If you are evaluating a commercial property and want an honest assessment of the numbers, that is exactly the kind of conversation I have with investors every day.
        </p>
      </article>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      {/* Related links */}
      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* CTA */}
      <CTASection
        heading="Need Help Evaluating a Commercial Property?"
        body="I walk investors through the numbers — cap rates, lease analysis, and everything in between. Let us talk about your next deal."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
