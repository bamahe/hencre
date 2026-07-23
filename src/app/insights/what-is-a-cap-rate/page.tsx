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
 * Insight: What Is a Cap Rate?
 * Evergreen explainer — cap rate fundamentals for CRE investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Cap Rate Explained | How to Calculate Cap Rates 2026",
  description:
    "Learn what capitalization rates are, how to calculate them, and when they matter for CRE investment decisions. Expert guidance from a licensed Florida broker.",
  alternates: { canonical: "https://hencre.com/insights/what-is-a-cap-rate" },
  openGraph: {
    title: "What Is a Cap Rate? How to Calculate & Interpret Capitalization Rates",
    description:
      "Learn what capitalization rates are, how to calculate them, and when they matter for commercial real estate investment decisions.",
    url: "https://hencre.com/insights/what-is-a-cap-rate",
    type: "article",
  },
};

/* FAQ items */
const faqItems = [
  {
    question: "What is a good cap rate for commercial real estate?",
    answer:
      "There is no single good cap rate. It depends on property type, location, tenant quality, and market conditions. Lower cap rates typically indicate lower risk and higher-quality assets, while higher cap rates suggest higher risk but potentially stronger cash flow.",
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
  {
    question: "How does cap rate relate to property value?",
    answer:
      "Cap rate and value move in opposite directions. When cap rates compress (drop), property values rise for the same income. When cap rates expand (rise), values fall. This is why investors in high-demand Florida markets see strong appreciation even without rent growth — buyer competition drives cap rate compression.",
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
        { "@type": "ListItem", position: 3, name: "What Is a Cap Rate?", item: "https://hencre.com/insights/what-is-a-cap-rate" },
      ],
    },
    {
      "@type": "Article",
      headline: "What Is a Cap Rate? How to Calculate & Interpret Capitalization Rates",
      description:
        "Learn what capitalization rates are, how to calculate them, and when they matter for commercial real estate investment decisions.",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      datePublished: "2026-06-07",
      dateModified: "2026-07-23",
      image: "https://hencre.com/og-image.png",
      publisher: {
        "@type": "Organization",
        name: "REMAX Commercial Real Estate",
        url: "https://hencre.com",
        logo: { "@type": "ImageObject", url: "https://hencre.com/icon-512.png" },
      },
      url: "https://hencre.com/insights/what-is-a-cap-rate",
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
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: "What Is a Cap Rate?", href: "/insights/what-is-a-cap-rate" },
        ]}
      />

      <Hero
        title="What Is a Cap Rate?"
        subtitle="The capitalization rate is one of the most talked-about numbers in commercial real estate. Here is what it actually means and when it matters."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          If you have spent any time looking at commercial real estate, someone has thrown a cap rate at you. It is one of the first numbers investors ask about — and one of the most misunderstood. I have been working in real estate for over 23 years, and I still see experienced buyers make decisions based on cap rate alone. That is a mistake. Let me break down what this number actually tells you, how to calculate it, and — just as importantly — when to ignore it.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is a Cap Rate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The capitalization rate — or cap rate — expresses the relationship between a property&apos;s income and its value. Think of it as the rate of return you would earn on a property if you bought it with all cash. It strips out financing variables so you can compare properties on a level playing field.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At its core, cap rate answers one question: &ldquo;For every dollar I spend on this building, how much annual income does it generate?&rdquo; It is especially central to <Link href="/services/cre-valuation" className="text-accent underline">commercial property valuation</Link> — any serious <Link href="/services/dispositions" className="text-accent underline">disposition</Link> or <Link href="/services/investment-sales" className="text-accent underline">investment sale</Link> will involve a cap rate conversation.
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
          If a retail strip center generates $150,000 in NOI and is listed at $2,000,000, the cap rate is 7.5%. That means for every dollar of purchase price, you are earning 7.5 cents per year in net income before debt service. Use our <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> to run your own numbers instantly.
        </p>
      </article>

      {/* ---- Image 1: Cap rate / financial analysis ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate cap rate analysis on a laptop showing financial metrics"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Cap rate analysis is the foundation of every <Link href="/blog/what-makes-a-good-commercial-investment" className="underline">commercial investment evaluation</Link>. The formula is simple; the interpretation requires experience.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">What Cap Rates Tell You</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates are a quick snapshot of risk and return. Lower cap rates — say in the 4% to 5% range — generally signal a more stable, lower-risk property. These are typically well-located buildings with strong tenants on long-term leases. Investors accept lower returns because they expect predictable cash flow. This is especially common in <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN-leased properties</Link> occupied by national credit tenants.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Higher cap rates — 8% and above — suggest the market perceives more risk. Maybe the building has shorter lease terms, a secondary location, deferred maintenance, or less creditworthy tenants. Higher cap rates can mean stronger cash flow, but they come with more headaches.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates also vary by property type. <Link href="/commercial/multifamily" className="text-accent underline">Multifamily properties</Link> often trade at lower cap rates than retail or industrial because apartment demand tends to be more resilient. Office cap rates have compressed and expanded over the years as workplace patterns shift.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">When Cap Rates Do Not Tell the Whole Story</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Here is where a lot of investors get tripped up. Cap rate is a snapshot — it tells you about today&apos;s income relative to today&apos;s price. It does not account for:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Future rent growth or decline.</strong> A building with below-market rents might have a high cap rate now but explode in value when leases renew.</li>
          <li><strong>Lease structure.</strong> Two buildings with identical cap rates can have wildly different risk profiles depending on lease term length, rent escalations, and tenant credit. Understanding <Link href="/insights/gross-vs-net-lease" className="text-accent underline">gross vs. net lease structures</Link> and <Link href="/insights/cam-charges-explained" className="text-accent underline">CAM charges</Link> is essential to reading NOI correctly.</li>
          <li><strong>Physical condition.</strong> A high cap rate might just mean the roof needs replacing. That income could evaporate fast.</li>
          <li><strong>Financing.</strong> Cap rates ignore leverage entirely. Your actual return depends heavily on your loan terms.</li>
          <li><strong>Vacancy.</strong> A vacant building technically has no cap rate. Sellers will project future income, but that is speculation, not fact.</li>
        </ul>
      </article>

      {/* ---- Image 2: Florida commercial property ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75"
          alt="Florida commercial office building — cap rates vary by property type and submarket"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Cap rates across Florida&apos;s major markets — <Link href="/markets/hillsborough" className="underline">Tampa Bay</Link>, <Link href="/markets/sarasota" className="underline">Sarasota</Link>, and <Link href="/markets/pinellas" className="underline">Pinellas</Link> — reflect local supply and demand conditions as much as national trends.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">Cap Rate vs. Cash-on-Cash Return</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors sometimes confuse cap rate with cash-on-cash return. They are related but different. Cash-on-cash measures the return on the actual cash you invested after accounting for debt service. If you buy a property with 25% down and finance the rest, your cash-on-cash return could be significantly higher — or lower — than the cap rate, depending on your interest rate and loan terms. Use our <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link> to model both metrics for any deal.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Use cap rate to compare properties. Use cash-on-cash to evaluate your actual investment performance.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How I Use Cap Rates With My Clients</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          When I am working with investors on commercial acquisitions in <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>, <Link href="/markets/polk" className="text-accent underline">Polk County</Link>, or anywhere across Florida, cap rate is one of the first filters we apply — but never the last. I look at it as a starting point that tells me where a property fits in the risk spectrum. From there, we dig into the lease terms, tenant quality, building condition, and market trajectory. This is exactly what a <Link href="/services/cre-valuation" className="text-accent underline">full CRE valuation</Link> covers in detail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A property that looks expensive on a cap rate basis might actually be undervalued if rents are well below market. Conversely, a &ldquo;juicy&rdquo; cap rate might be masking deferred maintenance or a tenant about to vacate. The cap rate gets us in the door. Due diligence tells us whether to stay.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cap rates are a valuable tool in your CRE toolkit, but they are not a decision-making shortcut. Know how to calculate them, understand what drives them up or down, and always look beyond the number to the story underneath. If you are evaluating a commercial property and want an honest assessment of the numbers, that is exactly the kind of conversation I have with investors every day.
        </p>
      </article>

      {/* ---- Image 3: Investor reviewing deal ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&auto=format&fit=crop&q=75"
          alt="Tampa Bay commercial real estate investment opportunities with cap rate analysis"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Curious about cap rates in the current Florida market? Read about the <Link href="/blog/why-tampa-bay-cre-is-booming" className="underline">forces driving Tampa Bay commercial real estate</Link> and how they affect pricing.</p>
      </section>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl px-4 pb-4 pt-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      {/* Related links */}
      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* Sources */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>Appraisal Institute — <em>The Appraisal of Real Estate</em>, 15th Edition</li>
          <li>National Association of REALTORS — CRE Investment Metrics Guide</li>
          <li>CBRE Research — U.S. Cap Rate Survey</li>
          <li>CoStar Group — Florida Market Analytics</li>
        </ul>
      </section>

      {/* CTA */}
      <CTASection
        heading="Need Help Evaluating a Commercial Property?"
        body="Barrett walks investors through the numbers — cap rates, lease analysis, and everything in between. Call (813) 733-7907 to talk about your next deal."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
