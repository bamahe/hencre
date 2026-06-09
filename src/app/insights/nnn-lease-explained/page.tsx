import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: NNN Lease Explained
 * Evergreen explainer — triple net leases for tenants & landlords.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "NNN Lease Explained: What Triple Net Means for Tenants & Landlords",
  description:
    "Understand triple net (NNN) leases — how they work, what tenants pay, and how they compare to gross and modified gross leases. Expert CRE guidance from a Florida broker.",
  openGraph: {
    title: "NNN Lease Explained: What Triple Net Means for Tenants & Landlords",
    description:
      "Understand triple net (NNN) leases — how they work, what tenants pay, and how they compare to gross and modified gross leases.",
    url: "https://hencre.com/insights/nnn-lease-explained",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NNN Lease Explained: What Triple Net Means for Tenants & Landlords",
  description:
    "Understand triple net (NNN) leases — how they work, what tenants pay, and how they compare to gross and modified gross leases.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial® Florida", url: "https://hencre.com" },
  url: "https://hencre.com/insights/nnn-lease-explained",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does NNN mean in a commercial lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NNN stands for triple net. In a triple net lease, the tenant pays base rent plus three categories of operating expenses: property taxes, property insurance, and common area maintenance (CAM). The landlord receives a 'net' rent after those costs are covered by the tenant.",
      },
    },
    {
      "@type": "Question",
      name: "Who benefits more from a NNN lease — the landlord or the tenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both parties benefit in different ways. Landlords get predictable net income with minimal management burden. Tenants typically get a lower base rent and more control over their operating costs. The right structure depends on the specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between NNN and gross lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a gross lease, the landlord pays all operating expenses and bundles them into a higher base rent. In a NNN lease, the tenant pays base rent plus operating expenses separately. Modified gross leases split expenses between landlord and tenant.",
      },
    },
    {
      "@type": "Question",
      name: "Are NNN leases common in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NNN leases are very common in Florida commercial real estate, particularly for retail properties, standalone buildings leased to national tenants, and multi-tenant strip centers. They are the standard for most freestanding commercial properties.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "What does NNN mean in a commercial lease?",
    answer:
      "NNN stands for triple net. In a triple net lease, the tenant pays base rent plus three categories of operating expenses: property taxes, property insurance, and common area maintenance (CAM). The landlord receives a 'net' rent after those costs are covered by the tenant.",
  },
  {
    question: "Who benefits more from a NNN lease — the landlord or the tenant?",
    answer:
      "Both parties benefit in different ways. Landlords get predictable net income with minimal management burden. Tenants typically get a lower base rent and more control over their operating costs. The right structure depends on the specific situation.",
  },
  {
    question: "What is the difference between NNN and gross lease?",
    answer:
      "In a gross lease, the landlord pays all operating expenses and bundles them into a higher base rent. In a NNN lease, the tenant pays base rent plus operating expenses separately. Modified gross leases split expenses between landlord and tenant.",
  },
  {
    question: "Are NNN leases common in Florida?",
    answer:
      "Yes. NNN leases are very common in Florida commercial real estate, particularly for retail properties, standalone buildings leased to national tenants, and multi-tenant strip centers. They are the standard for most freestanding commercial properties.",
  },
];

const relatedLinks = [
  {
    title: "Gross vs. Net Lease Structures",
    href: "/insights/gross-vs-net-lease",
    description: "Side-by-side comparison of lease types and their cost impact.",
  },
  {
    title: "CAM Charges Explained",
    href: "/insights/cam-charges-explained",
    description: "What common area maintenance covers and how to negotiate it.",
  },
  {
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding capitalization rates for CRE investment.",
  },
  {
    title: "5 Mistakes First-Time Commercial Tenants Make",
    href: "/blog/5-mistakes-first-time-commercial-tenants-make",
    description: "Common tenant pitfalls and how to sidestep them.",
  },
];

export default function NNNLeasePage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "NNN Lease Explained", href: "/insights/nnn-lease-explained" },
        ]}
      />

      <Hero
        title="NNN Lease Explained"
        subtitle="Triple net leases are the backbone of commercial real estate investing. Here is what every tenant and landlord needs to understand before signing."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Walk into any conversation about commercial real estate investing and you will hear &ldquo;NNN&rdquo; within the first five minutes. Triple net leases are one of the most popular structures in CRE, and for good reason — they create a clear division of financial responsibility between landlord and tenant. But the details matter, and I have seen both sides get surprised by what they agreed to. Let me walk you through how NNN leases actually work.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is a Triple Net (NNN) Lease?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a triple net lease, the tenant pays base rent plus three categories of property expenses: property taxes, building insurance, and common area maintenance (CAM). Those are the three &ldquo;nets.&rdquo; The landlord receives the base rent as essentially net income — their costs for owning the property are passed through to the tenant.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is different from a gross lease, where the landlord wraps all expenses into one higher rent number. In a NNN lease, you see the base rent and the additional charges itemized separately.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Tenants Pay in a NNN Lease</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          As a tenant in a NNN lease, your total monthly cost is base rent plus your share of the three expense categories:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Property taxes.</strong> Your proportionate share of the building&apos;s annual tax bill.</li>
          <li><strong>Insurance.</strong> Your share of the landlord&apos;s property insurance premium (not your own business liability insurance — that is always separate).</li>
          <li><strong>CAM charges.</strong> Common area maintenance, which covers shared expenses like landscaping, parking lot upkeep, exterior lighting, and sometimes management fees.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a multi-tenant building, these expenses are typically divided by square footage. If you lease 2,000 square feet in a 10,000-square-foot building, you pay 20% of the total property expenses.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Landlords Prefer NNN Leases</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          From the ownership side, NNN leases are attractive because they create predictable net income. When property taxes increase, the tenant absorbs that cost. When insurance premiums rise, same thing. The landlord&apos;s income stays consistent regardless of operating expense fluctuations.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is why NNN properties — especially those with strong national tenants on long-term leases — are among the most sought-after investment properties. The income stream is as close to passive as commercial real estate gets.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">NNN vs. Gross vs. Modified Gross</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Here is a quick comparison of the three main lease structures:
        </p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm text-[#666666]">
            <thead>
              <tr className="border-b-2 border-black/20">
                <th className="py-3 pr-4 text-left font-bold text-black">Structure</th>
                <th className="py-3 pr-4 text-left font-bold text-black">Tenant Pays</th>
                <th className="py-3 text-left font-bold text-black">Landlord Pays</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Gross</td>
                <td className="py-3 pr-4">Base rent only</td>
                <td className="py-3">All operating expenses</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Modified Gross</td>
                <td className="py-3 pr-4">Base rent + some expenses</td>
                <td className="py-3">Remaining expenses</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">NNN (Triple Net)</td>
                <td className="py-3 pr-4">Base rent + taxes + insurance + CAM</td>
                <td className="py-3">Structure/roof (varies by lease)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The key takeaway: in a gross lease, what you see is what you pay. In a NNN lease, the base rent is just the starting point.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Tenants Should Watch For</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not all NNN leases are created equal. Here are the details I tell every tenant client to scrutinize:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>CAM caps.</strong> Negotiate a cap on annual CAM increases. Without one, your costs can climb unpredictably.</li>
          <li><strong>Expense exclusions.</strong> Make sure capital expenditures (roof replacement, structural repairs) stay on the landlord. Some leases try to pass these through as CAM.</li>
          <li><strong>Audit rights.</strong> Insist on the right to audit the landlord&apos;s expense records. You need to verify you are being charged accurately.</li>
          <li><strong>Expense estimates vs. actuals.</strong> Most landlords collect estimated NNN charges monthly and reconcile against actual costs annually. Understand how that reconciliation works.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Absolute NNN vs. Standard NNN</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          You may hear the term &ldquo;absolute NNN&rdquo; or &ldquo;bondable NNN.&rdquo; In an absolute NNN lease, the tenant is responsible for literally everything — including roof and structure repairs. These are common with freestanding buildings leased to national credit tenants (think pharmacies, fast food, dollar stores). The landlord has virtually zero management responsibility.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a standard NNN lease, the landlord typically retains responsibility for the roof and structural components. Always read your lease carefully to understand where that line is drawn.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          NNN leases work well for both landlords and tenants when both sides understand exactly what they are agreeing to. As a broker, my job is to make sure there are no surprises — that tenants know their total occupancy cost and landlords understand their net income. If you are negotiating a commercial lease, having an experienced broker review the terms before you sign can save you real money.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Negotiating a Commercial Lease?"
        body="Whether you are a tenant or landlord, I help my clients structure leases that protect their interests. Let us review your deal together."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
