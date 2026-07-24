import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  title: "How to Value Commercial Property | 3 CRE Approaches",
  description:
    "Learn the three approaches to commercial real estate valuation — income, comparable sales, and cost — and when to get a formal appraisal. Expert broker guidance.",
  alternates: { canonical: "https://hencre.com/insights/how-to-value-commercial-property" },
  openGraph: {
    title: "How to Value Commercial Property: 3 Valuation Approaches",
    description:
      "Learn the three approaches to commercial real estate valuation — income, comparable sales, and cost — and when to get a formal appraisal.",
    url: "https://hencre.com/insights/how-to-value-commercial-property",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What are the three approaches to commercial property valuation?",
    answer:
      "The three approaches are the income approach (based on the property&apos;s net operating income and a capitalization rate), the sales comparison approach (based on recent sales of similar properties), and the cost approach (based on the cost to rebuild the property minus depreciation, plus land value).",
  },
  {
    question: "Which valuation method is most common for commercial real estate?",
    answer:
      "The income approach is most commonly used for income-producing commercial properties because it directly reflects the property&apos;s ability to generate revenue. The sales comparison approach is more common for owner-occupied properties or land.",
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
  {
    question: "What is the difference between NOI and cap rate in a valuation?",
    answer:
      "Net Operating Income (NOI) is the annual income a property generates after operating expenses but before debt service. The cap rate is the rate of return the market applies to that income stream. Dividing NOI by the cap rate gives you the estimated market value. Both numbers must be accurate for the valuation to be reliable — garbage in, garbage out.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://hencre.com/insights" },
        { "@type": "ListItem", position: 3, name: "How to Value Commercial Property", item: "https://hencre.com/insights/how-to-value-commercial-property" },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Value Commercial Property: 3 Approaches Every Investor Should Know",
      description:
        "Learn the three approaches to commercial real estate valuation — income, comparable sales, and cost.",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      datePublished: "2026-06-10",
      dateModified: "2026-07-24",
      image: "https://hencre.com/og-image.png",
      publisher: {
        "@type": "Organization",
        name: "REMAX Commercial Real Estate",
        url: "https://hencre.com",
        logo: { "@type": "ImageObject", url: "https://hencre.com/icon-512.png" },
      },
      url: "https://hencre.com/insights/how-to-value-commercial-property",
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
    description: "Investment criteria from a broker&apos;s perspective.",
  },
];

export default function ValuationPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
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
          Valuing commercial real estate is fundamentally different from valuing a house. There is no MLS comp sheet that tells you the answer. Commercial property value is driven by income potential, replacement cost, and market comparisons — and understanding all three approaches is essential whether you are buying, selling, or refinancing. As a Broker Associate at REMAX Collective with 23+ years of real estate experience, here is how I walk clients through the valuation process — across markets from <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link> to <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Approach 1: The Income Approach</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The income approach is the most widely used method for income-producing commercial properties like <Link href="/commercial/retail-space" className="text-accent underline">retail centers</Link>, <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial warehouses</Link>, and <Link href="/commercial/multifamily" className="text-accent underline">multifamily</Link> assets. The logic is straightforward: a building is worth what it can earn. There are two main income-based methods:
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Direct Capitalization</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          Take the property&apos;s Net Operating Income (NOI) and divide it by the appropriate <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rate</Link> for the market and property type:
        </p>
        <div className="my-6 rounded-lg bg-[#1a1a1a]/5 p-6 text-center">
          <p className="text-lg font-semibold text-black">
            Value = NOI &divide; Cap Rate
          </p>
        </div>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If a property generates $200,000 in NOI and the market cap rate for similar properties is 7%, the estimated value is approximately $2,857,000. The challenge is determining the right cap rate — it varies by property type, location, tenant quality, and current market conditions. Use our <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> to check your numbers quickly.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Discounted Cash Flow (DCF)</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          DCF analysis projects the property&apos;s income and expenses over a holding period (typically 5-10 years) and discounts those future cash flows back to present value. This is more detailed than direct capitalization and accounts for rent growth, vacancy assumptions, capital expenditures, and eventual sale proceeds. DCF is the standard for institutional-grade properties and complex transactions. It pairs well with a thorough <Link href="/services/cre-valuation" className="text-accent underline">CRE valuation engagement</Link>.
        </p>
      </article>

      {/* ---- Image 1: Financial analysis ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate valuation spreadsheet showing NOI and cap rate analysis"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">The income approach centers on NOI and <Link href="/insights/what-is-a-cap-rate" className="underline">cap rate</Link> — two numbers every <Link href="/blog/what-makes-a-good-commercial-investment" className="underline">serious CRE investor</Link> must understand cold.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">Approach 2: The Sales Comparison Approach</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This method works just like residential comps — you find recent sales of similar properties and adjust for differences in size, age, location, condition, and lease terms. It works best when there are enough comparable sales in the market, which is common for certain property types (small retail, owner-occupied office) but harder to find for specialized properties. I use this frequently for <Link href="/commercial/office-space" className="text-accent underline">office space</Link> valuations and for land across <Link href="/markets/polk" className="text-accent underline">Polk County</Link> and <Link href="/markets/pasco" className="text-accent underline">Pasco County</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Key adjustments include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Price per square foot</strong> — the most common comparison metric</li>
          <li><strong>Location quality</strong> — frontage, visibility, access, and traffic</li>
          <li><strong>Building age and condition</strong> — newer buildings command premiums</li>
          <li><strong>Lease terms</strong> — a building with a long-term national tenant is worth more than one with month-to-month tenants. See our guide on <Link href="/insights/gross-vs-net-lease" className="text-accent underline">gross vs. net lease structures</Link> for more on how lease type affects value.</li>
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
          This approach is most useful for new or nearly new buildings, special-purpose properties (churches, schools, hospitals), and situations where income and comparable data are limited. It is less reliable for older buildings where depreciation is hard to estimate. For new <Link href="/commercial/land-development" className="text-accent underline">land development</Link> projects, the cost approach is often the starting point.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Approach Should You Use?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In practice, a thorough valuation considers all three approaches and weighs them based on the property type and available data:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Income-producing properties</strong> — income approach carries the most weight. See our <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link> to model returns.</li>
          <li><strong>Owner-occupied or vacant properties</strong> — sales comparison approach is usually primary</li>
          <li><strong>New construction or special-purpose</strong> — cost approach is most relevant</li>
          <li><strong>Land</strong> — sales comparison approach (there is no income or improvement to evaluate). Relevant for <Link href="/commercial/land-development" className="text-accent underline">land and development</Link> opportunities.</li>
        </ul>
      </article>

      {/* ---- Image 2: Commercial building exterior ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75"
          alt="Florida commercial office building — sales comparison approach uses recent sales of similar properties"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">The sales comparison approach evaluates similar buildings in the same submarket. Data is strongest in active markets like <Link href="/markets/hillsborough" className="underline">Tampa</Link> and <Link href="/markets/pinellas" className="underline">St. Petersburg</Link>.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">When to Get a Formal Appraisal</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A broker&apos;s opinion of value (BOV) or your own analysis can guide negotiations, but certain situations require a formal appraisal by a licensed MAI appraiser:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>Commercial mortgage financing — lenders always require one. Use our <Link href="/calculators/commercial-mortgage" className="text-accent underline">commercial mortgage calculator</Link> to model loan scenarios.</li>
          <li>Estate planning and probate</li>
          <li>Partnership disputes or buyouts</li>
          <li>Property tax appeals</li>
          <li>Insurance claims</li>
          <li>Any transaction where an independent, defensible valuation is needed — such as a <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link> with a tight timeline</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Commercial property valuation is part science, part market knowledge, and part judgment. Understanding these three approaches gives you the foundation to evaluate any property — but there is no substitute for experience and local market insight. If you need help determining what a property is worth, I provide <Link href="/services/cre-valuation" className="text-accent underline">broker&apos;s opinions of value</Link> and can walk you through the full analysis, whether you are looking at <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN investments</Link>, a <Link href="/commercial/multifamily" className="text-accent underline">multifamily acquisition</Link>, or an <Link href="/services/investment-sales" className="text-accent underline">investment sale</Link>.
        </p>
      </article>

      {/* ---- Image 3: Broker meeting ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=75"
          alt="Barrett Henry discussing commercial property valuation with a client in Florida"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Need a value opinion on a Florida commercial property? Barrett provides <Link href="/services/cre-valuation" className="underline">broker&apos;s opinions of value</Link> for acquisitions, dispositions, and refinancing decisions.</p>
      </section>

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

      <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
