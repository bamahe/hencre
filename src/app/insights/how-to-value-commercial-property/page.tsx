import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: How to Value Commercial Property
 * Evergreen explainer — three valuation approaches.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "How to Value Commercial Property: 3 Approaches Every Investor Should Know",
  description:
    "Learn the three approaches to commercial real estate valuation — income, comparable sales, and cost — and when to get a formal appraisal. Expert broker guidance.",
  openGraph: {
    title: "How to Value Commercial Property: 3 Valuation Approaches",
    description:
      "Learn the three approaches to commercial real estate valuation — income, comparable sales, and cost — and when to get a formal appraisal.",
    url: "https://hencre.com/insights/how-to-value-commercial-property",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Value Commercial Property: 3 Approaches Every Investor Should Know",
  description:
    "Learn the three approaches to commercial real estate valuation — income, comparable sales, and cost.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Real Estate", url: "https://hencre.com" },
  url: "https://hencre.com/insights/how-to-value-commercial-property",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the three approaches to commercial property valuation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The three approaches are the income approach (based on the property's net operating income and a capitalization rate), the sales comparison approach (based on recent sales of similar properties), and the cost approach (based on the cost to rebuild the property minus depreciation, plus land value).",
      },
    },
    {
      "@type": "Question",
      name: "Which valuation method is most common for commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The income approach is most commonly used for income-producing commercial properties because it directly reflects the property's ability to generate revenue. The sales comparison approach is more common for owner-occupied properties or land.",
      },
    },
    {
      "@type": "Question",
      name: "When do I need a formal commercial appraisal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lenders require a formal appraisal for any commercial mortgage. You should also get one for estate planning, partnership disputes, tax appeals, or any situation where an independent, defensible opinion of value is needed.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a commercial appraisal cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial appraisal costs vary widely based on property size, complexity, and location. Simple properties might start at a few thousand dollars, while complex or large properties can cost significantly more. Your lender or broker can provide a realistic estimate for your specific property.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "What are the three approaches to commercial property valuation?",
    answer:
      "The three approaches are the income approach (based on the property's net operating income and a capitalization rate), the sales comparison approach (based on recent sales of similar properties), and the cost approach (based on the cost to rebuild the property minus depreciation, plus land value).",
  },
  {
    question: "Which valuation method is most common for commercial real estate?",
    answer:
      "The income approach is most commonly used for income-producing commercial properties because it directly reflects the property's ability to generate revenue. The sales comparison approach is more common for owner-occupied properties or land.",
  },
  {
    question: "When do I need a formal commercial appraisal?",
    answer:
      "Lenders require a formal appraisal for any commercial mortgage. You should also get one for estate planning, partnership disputes, tax appeals, or any situation where an independent, defensible opinion of value is needed.",
  },
  {
    question: "How much does a commercial appraisal cost?",
    answer:
      "Commercial appraisal costs vary widely based on property size, complexity, and location. Simple properties might start at a few thousand dollars, while complex or large properties can cost significantly more. Your lender or broker can provide a realistic estimate for your specific property.",
  },
];

const relatedLinks = [
  {
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding the capitalization rate used in the income approach.",
  },
  {
    title: "CRE Due Diligence Checklist",
    href: "/insights/cre-due-diligence-checklist",
    description: "Complete checklist for evaluating commercial properties.",
  },
  {
    title: "1031 Exchange Basics",
    href: "/insights/1031-exchange-basics",
    description: "Tax-deferred exchanges for investment property.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Investment criteria from a broker's perspective.",
  },
];

export default function ValuationPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "How to Value Commercial Property", href: "/insights/how-to-value-commercial-property" },
        ]}
      />

      <Hero
        title="How to Value Commercial Property"
        subtitle="Understanding what a commercial building is actually worth requires more than a Zestimate. Here are the three approaches professionals use."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Valuing commercial real estate is fundamentally different from valuing a house. There is no MLS comp sheet that tells you the answer. Commercial property value is driven by income potential, replacement cost, and market comparisons — and understanding all three approaches is essential whether you are buying, selling, or refinancing. Here is how I walk clients through the valuation process.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Approach 1: The Income Approach</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The income approach is the most widely used method for income-producing commercial properties. The logic is straightforward: a building is worth what it can earn. There are two main income-based methods:
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Direct Capitalization</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          Take the property&apos;s Net Operating Income (NOI) and divide it by the appropriate cap rate for the market and property type:
        </p>
        <div className="my-6 rounded-lg bg-[#1a1a1a]/5 p-6 text-center">
          <p className="text-lg font-semibold text-black">
            Value = NOI &divide; Cap Rate
          </p>
        </div>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If a property generates $200,000 in NOI and the market cap rate for similar properties is 7%, the estimated value is approximately $2,857,000. The challenge is determining the right cap rate — it varies by property type, location, tenant quality, and current market conditions.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Discounted Cash Flow (DCF)</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          DCF analysis projects the property&apos;s income and expenses over a holding period (typically 5-10 years) and discounts those future cash flows back to present value. This is more detailed than direct capitalization and accounts for rent growth, vacancy assumptions, capital expenditures, and eventual sale proceeds. DCF is the standard for institutional-grade properties and complex transactions.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Approach 2: The Sales Comparison Approach</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This method works just like residential comps — you find recent sales of similar properties and adjust for differences in size, age, location, condition, and lease terms. It works best when there are enough comparable sales in the market, which is common for certain property types (small retail, owner-occupied office) but harder to find for specialized properties.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Key adjustments include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Price per square foot</strong> — the most common comparison metric</li>
          <li><strong>Location quality</strong> — frontage, visibility, access, and traffic</li>
          <li><strong>Building age and condition</strong> — newer buildings command premiums</li>
          <li><strong>Lease terms</strong> — a building with a long-term national tenant is worth more than one with month-to-month tenants</li>
          <li><strong>Zoning and use</strong> — highest and best use affects value significantly</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Approach 3: The Cost Approach</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The cost approach asks: &ldquo;What would it cost to build this property from scratch today?&rdquo; Start with the current land value, add the estimated construction cost of the improvements, then subtract depreciation (physical wear, functional obsolescence, and external factors).
        </p>
        <div className="my-6 rounded-lg bg-[#1a1a1a]/5 p-6 text-center">
          <p className="text-lg font-semibold text-black">
            Value = Land Value + (Replacement Cost &minus; Depreciation)
          </p>
        </div>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This approach is most useful for new or nearly new buildings, special-purpose properties (churches, schools, hospitals), and situations where income and comparable data are limited. It is less reliable for older buildings where depreciation is hard to estimate.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Approach Should You Use?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In practice, a thorough valuation considers all three approaches and weighs them based on the property type and available data:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Income-producing properties</strong> — income approach carries the most weight</li>
          <li><strong>Owner-occupied or vacant properties</strong> — sales comparison approach is usually primary</li>
          <li><strong>New construction or special-purpose</strong> — cost approach is most relevant</li>
          <li><strong>Land</strong> — sales comparison approach (there is no income or improvement to evaluate)</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">When to Get a Formal Appraisal</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A broker&apos;s opinion of value (BOV) or your own analysis can guide negotiations, but certain situations require a formal appraisal by a licensed MAI appraiser:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>Commercial mortgage financing — lenders always require one</li>
          <li>Estate planning and probate</li>
          <li>Partnership disputes or buyouts</li>
          <li>Property tax appeals</li>
          <li>Insurance claims</li>
          <li>Any transaction where an independent, defensible valuation is needed</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Commercial property valuation is part science, part market knowledge, and part judgment. Understanding these three approaches gives you the foundation to evaluate any property — but there is no substitute for experience and local market insight. If you need help determining what a property is worth, I am happy to provide a broker&apos;s opinion of value and walk you through the analysis.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Need a Property Valuation?"
        body="I provide broker opinions of value for commercial properties across Florida. Let us look at the numbers together."
        buttonText="Request a Valuation"
        buttonHref="/contact"
      />
    </>
  );
}
