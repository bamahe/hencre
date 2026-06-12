import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: Leasing vs. Buying Commercial Space
 * Evergreen decision framework for business owners.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Leasing vs. Buying Commercial Space: Decision Framework for Business Owners",
  description:
    "Should you lease or buy your commercial space? A broker's decision framework covering financial, operational, and strategic factors for business owners.",
  openGraph: {
    title: "Leasing vs. Buying Commercial Space: Decision Framework",
    description:
      "Should you lease or buy your commercial space? A broker's decision framework covering financial, operational, and strategic factors.",
    url: "https://hencre.com/insights/leasing-vs-buying-commercial",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leasing vs. Buying Commercial Space: Decision Framework for Business Owners",
  description:
    "Should you lease or buy your commercial space? A broker's decision framework covering financial, operational, and strategic factors.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Real Estate", url: "https://hencre.com" },
  url: "https://hencre.com/insights/leasing-vs-buying-commercial",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it better to lease or buy commercial property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your business stage, capital availability, and long-term plans. Leasing preserves capital and offers flexibility, while buying builds equity and provides more control. Early-stage businesses typically benefit from leasing, while established businesses with stable space needs often benefit from owning.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical down payment for commercial property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial property loans typically require 20% to 30% down, depending on the lender, property type, and your creditworthiness. SBA loans may offer lower down payments for owner-occupied properties, sometimes as low as 10%.",
      },
    },
    {
      "@type": "Question",
      name: "Can I lease space and still build equity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not directly — lease payments go to the landlord. However, some leases include a purchase option that lets you buy the property at a predetermined price in the future. This lets you operate in the space while deciding if ownership makes sense.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "Is it better to lease or buy commercial property?",
    answer:
      "It depends on your business stage, capital availability, and long-term plans. Leasing preserves capital and offers flexibility, while buying builds equity and provides more control. Early-stage businesses typically benefit from leasing, while established businesses with stable space needs often benefit from owning.",
  },
  {
    question: "What is the typical down payment for commercial property?",
    answer:
      "Commercial property loans typically require 20% to 30% down, depending on the lender, property type, and your creditworthiness. SBA loans may offer lower down payments for owner-occupied properties, sometimes as low as 10%.",
  },
  {
    question: "Can I lease space and still build equity?",
    answer:
      "Not directly — lease payments go to the landlord. However, some leases include a purchase option that lets you buy the property at a predetermined price in the future. This lets you operate in the space while deciding if ownership makes sense.",
  },
];

const relatedLinks = [
  {
    title: "NNN Leases Explained",
    href: "/insights/nnn-lease-explained",
    description: "Understanding triple net lease structures.",
  },
  {
    title: "How to Value Commercial Property",
    href: "/insights/how-to-value-commercial-property",
    description: "Valuation approaches for purchase decisions.",
  },
  {
    title: "CAM Charges Explained",
    href: "/insights/cam-charges-explained",
    description: "What tenants pay beyond base rent.",
  },
  {
    title: "Do You Need a Commercial Real Estate Broker?",
    href: "/blog/do-you-need-a-commercial-real-estate-broker",
    description: "When and why to hire a CRE broker.",
  },
];

export default function LeasingVsBuyingPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "Leasing vs. Buying", href: "/insights/leasing-vs-buying-commercial" },
        ]}
      />

      <Hero
        title="Leasing vs. Buying Commercial Space"
        subtitle="One of the biggest decisions a business owner faces. Here is how to think through it — from someone who has helped clients go both directions."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          &ldquo;Should I lease or buy?&rdquo; I hear this question from business owners all the time, and the honest answer is always the same: it depends. There is no universally right answer — the best choice depends on your financial position, how stable your space needs are, and what your business looks like in five to ten years. Let me give you the framework I use with my clients to work through this decision.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">When Leasing Makes Sense</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Leasing is often the right move when:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>You need flexibility.</strong> If your business is growing quickly or your space needs might change, a lease lets you scale up or relocate without being locked into a property. This is especially important for businesses under five years old.</li>
          <li><strong>Capital is better deployed elsewhere.</strong> The down payment on a commercial property — typically 20% to 30% — could be working harder in your business. If that capital generates a higher return inside your business than you would earn on property appreciation, leasing may be smarter.</li>
          <li><strong>You want predictable costs.</strong> With a well-negotiated lease, your occupancy costs are defined and predictable. No surprise repair bills, no property tax reassessments to absorb out of pocket.</li>
          <li><strong>Location matters more than ownership.</strong> Sometimes the ideal location for your business is not available for purchase, or the purchase price makes no sense. Leasing gives you access to prime locations without the ownership commitment.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">When Buying Makes Sense</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Ownership becomes compelling when:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Your space needs are stable.</strong> If you know you will need the same type and size of space for the foreseeable future, owning locks in your location and eliminates the risk of rent increases or non-renewal.</li>
          <li><strong>You want to build equity.</strong> Every mortgage payment builds equity in a tangible asset. Over time, you end up owning a property free and clear — essentially eliminating your occupancy cost in retirement or providing a sellable asset.</li>
          <li><strong>You can benefit from tax advantages.</strong> Property owners can deduct mortgage interest, depreciation, and operating expenses. These deductions can be substantial for profitable businesses.</li>
          <li><strong>You want control.</strong> Owners can renovate, expand, sublease, or modify the property without landlord approval. If your business requires specialized buildout, owning gives you the freedom to invest in the space without worrying about lease expiration.</li>
          <li><strong>You can generate rental income.</strong> Buy a building larger than you need, occupy part of it, and lease the rest. Your tenants effectively help pay your mortgage.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Financial Comparison</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          At a high level, here is how the financial picture differs:
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm text-[#666666]">
            <thead>
              <tr className="border-b-2 border-black/20">
                <th className="py-3 pr-4 text-left font-bold text-black">Factor</th>
                <th className="py-3 pr-4 text-left font-bold text-black">Leasing</th>
                <th className="py-3 text-left font-bold text-black">Buying</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Upfront cost</td>
                <td className="py-3 pr-4">Security deposit + first/last month</td>
                <td className="py-3">20-30% down payment + closing costs</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Monthly cost</td>
                <td className="py-3 pr-4">Rent + NNN expenses</td>
                <td className="py-3">Mortgage + taxes + insurance + maintenance</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Equity building</td>
                <td className="py-3 pr-4">None</td>
                <td className="py-3">Yes — with every payment</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Flexibility</td>
                <td className="py-3 pr-4">Higher — relocate at lease end</td>
                <td className="py-3">Lower — must sell to move</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Risk</td>
                <td className="py-3 pr-4">Rent increases, non-renewal</td>
                <td className="py-3">Market value fluctuation, maintenance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">The Hybrid Approach: Lease With an Option to Purchase</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not ready to commit? A lease with a purchase option gives you the best of both worlds. You lease the space at market rates and lock in the right to buy at a predetermined price within a specified timeframe. This lets you test the location, stabilize your business, and decide on ownership later — without losing the opportunity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The option price and terms are negotiable. Some landlords will credit a portion of your rent toward the purchase price. Others will simply lock in a set price that protects you from appreciation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Questions to Ask Yourself</h2>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>How long do I plan to operate in this location?</li>
          <li>Is my business model stable enough to predict space needs for the next 5-10 years?</li>
          <li>What return could I generate if I deployed my down payment capital inside my business instead?</li>
          <li>Am I prepared to handle property management responsibilities alongside running my business?</li>
          <li>Does the local market favor buyers or renters right now?</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Neither leasing nor buying is inherently better — it is a strategic decision that should align with your business plan, financial position, and growth trajectory. The businesses I have seen make the best decisions are the ones that evaluate both options honestly, without emotional attachment to either path. If you are weighing this decision, I am happy to run the numbers with you and give you an honest assessment of what makes sense for your situation.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Lease or Buy? Let Us Figure It Out Together"
        body="I help business owners evaluate both options with real numbers — not guesswork. Let us talk about your space needs."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
