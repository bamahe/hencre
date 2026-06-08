import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: Gross vs. Net Lease Structures
 * Evergreen comparison of commercial lease types.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Gross vs. Net Lease: Commercial Lease Structures Compared",
  description:
    "Compare gross, modified gross, and net lease structures for commercial real estate. Understand how each impacts your operating costs and total occupancy expense.",
  openGraph: {
    title: "Gross vs. Net Lease: Commercial Lease Structures Compared",
    description:
      "Compare gross, modified gross, and net lease structures for commercial real estate.",
    url: "https://hencre.com/insights/gross-vs-net-lease",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gross vs. Net Lease: Commercial Lease Structures Compared",
  description:
    "Compare gross, modified gross, and net lease structures for commercial real estate.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Florida", url: "https://hencre.com" },
  url: "https://hencre.com/insights/gross-vs-net-lease",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a gross lease and a net lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a gross lease, the tenant pays a single flat rent and the landlord covers all operating expenses (taxes, insurance, maintenance). In a net lease, the tenant pays a lower base rent plus some or all of the operating expenses separately. The total cost may be similar, but the structure of who pays what differs significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What is a modified gross lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A modified gross lease splits operating expenses between landlord and tenant. The specific split is negotiated — for example, the landlord might cover property taxes and insurance while the tenant pays utilities and janitorial. It is a middle ground between gross and net structures.",
      },
    },
    {
      "@type": "Question",
      name: "Which lease type is better for tenants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your priorities. Gross leases offer simplicity and cost predictability. Net leases typically have lower base rent and give tenants more transparency into actual operating costs. For tenants who want to control and monitor their expenses, net leases can be advantageous.",
      },
    },
    {
      "@type": "Question",
      name: "Which lease type is most common for office space?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full-service gross leases and modified gross leases are most common for office space, especially in multi-tenant office buildings. Net leases are more common in retail and industrial properties.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "What is the difference between a gross lease and a net lease?",
    answer:
      "In a gross lease, the tenant pays a single flat rent and the landlord covers all operating expenses (taxes, insurance, maintenance). In a net lease, the tenant pays a lower base rent plus some or all of the operating expenses separately. The total cost may be similar, but the structure of who pays what differs significantly.",
  },
  {
    question: "What is a modified gross lease?",
    answer:
      "A modified gross lease splits operating expenses between landlord and tenant. The specific split is negotiated — for example, the landlord might cover property taxes and insurance while the tenant pays utilities and janitorial. It is a middle ground between gross and net structures.",
  },
  {
    question: "Which lease type is better for tenants?",
    answer:
      "It depends on your priorities. Gross leases offer simplicity and cost predictability. Net leases typically have lower base rent and give tenants more transparency into actual operating costs. For tenants who want to control and monitor their expenses, net leases can be advantageous.",
  },
  {
    question: "Which lease type is most common for office space?",
    answer:
      "Full-service gross leases and modified gross leases are most common for office space, especially in multi-tenant office buildings. Net leases are more common in retail and industrial properties.",
  },
];

const relatedLinks = [
  {
    title: "NNN Leases Explained",
    href: "/insights/nnn-lease-explained",
    description: "Deep dive into triple net lease structures.",
  },
  {
    title: "CAM Charges Explained",
    href: "/insights/cam-charges-explained",
    description: "What common area maintenance covers and how to negotiate.",
  },
  {
    title: "Leasing vs. Buying Commercial Space",
    href: "/insights/leasing-vs-buying-commercial",
    description: "Decision framework for the lease vs. purchase question.",
  },
  {
    title: "5 Mistakes First-Time Commercial Tenants Make",
    href: "/blog/5-mistakes-first-time-commercial-tenants-make",
    description: "Common tenant missteps and how to avoid them.",
  },
];

export default function GrossVsNetPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "Gross vs. Net Lease", href: "/insights/gross-vs-net-lease" },
        ]}
      />

      <Hero
        title="Gross vs. Net Lease"
        subtitle="The lease structure you choose determines who pays what — and it has a bigger impact on your bottom line than most tenants realize."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When a landlord quotes you a rate on commercial space, the number itself does not tell you much unless you know the lease structure behind it. A $20 per square foot gross lease and a $12 per square foot NNN lease might result in almost the same total occupancy cost — but the risk allocation is completely different. Understanding these structures is critical for both tenants and landlords. Let me break down the differences.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Gross Lease (Full-Service Lease)</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a gross lease, you pay one all-inclusive rent amount. The landlord is responsible for all operating expenses — property taxes, insurance, maintenance, common area costs, and sometimes even utilities. What you see is what you pay.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Advantages for tenants:</strong> Simplicity and predictability. You know exactly what your monthly cost is. No surprises from tax increases or insurance premium hikes.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Disadvantages:</strong> The rent is higher because the landlord builds in a cushion for expected expenses — and often adds a margin for unexpected ones. You are paying for convenience, and you have no visibility into actual costs.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Common in:</strong> Multi-tenant office buildings, co-working spaces, and medical offices. Full-service gross is the standard for Class A office.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Net Lease</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Net leases shift some or all operating expenses from the landlord to the tenant. There are several flavors:
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Single Net (N)</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          The tenant pays base rent plus property taxes. The landlord covers insurance and maintenance. This structure is relatively uncommon on its own.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Double Net (NN)</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          The tenant pays base rent plus property taxes and insurance. The landlord covers maintenance and common area costs. More common than single net, but still less prevalent than NNN.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">Triple Net (NNN)</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          The tenant pays base rent plus property taxes, insurance, and common area maintenance (CAM). The landlord&apos;s responsibility is typically limited to structural and roof repairs (though absolute NNN leases shift even those to the tenant).
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Advantages for tenants:</strong> Lower base rent and full transparency into what you are paying for. If expenses decrease, you benefit directly.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Disadvantages:</strong> Expense variability. Property taxes, insurance premiums, and maintenance costs can fluctuate year to year. Without a CAM cap, your costs could rise significantly.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Common in:</strong> Retail strip centers, standalone retail, industrial/warehouse properties, and freestanding commercial buildings.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Modified Gross Lease</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The modified gross lease is the middle ground. Landlord and tenant negotiate which expenses each party covers. A typical arrangement might have the landlord pay property taxes and insurance while the tenant pays utilities, janitorial, and their share of CAM. The specifics are entirely negotiable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Many modified gross leases include an <strong>expense stop</strong> — a base year amount for expenses. The landlord covers expenses up to that amount, and the tenant pays any increases above it. This protects both parties: the tenant has cost predictability in year one, and the landlord is protected from absorbing all future cost increases.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Side-by-Side Comparison</h2>
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm text-[#666666]">
            <thead>
              <tr className="border-b-2 border-black/20">
                <th className="py-3 pr-4 text-left font-bold text-black">Expense</th>
                <th className="py-3 pr-4 text-left font-bold text-black">Gross</th>
                <th className="py-3 pr-4 text-left font-bold text-black">Mod. Gross</th>
                <th className="py-3 text-left font-bold text-black">NNN</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Property Taxes</td>
                <td className="py-3 pr-4">Landlord</td>
                <td className="py-3 pr-4">Negotiated</td>
                <td className="py-3">Tenant</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Insurance</td>
                <td className="py-3 pr-4">Landlord</td>
                <td className="py-3 pr-4">Negotiated</td>
                <td className="py-3">Tenant</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">CAM</td>
                <td className="py-3 pr-4">Landlord</td>
                <td className="py-3 pr-4">Negotiated</td>
                <td className="py-3">Tenant</td>
              </tr>
              <tr className="border-b border-[#666666]/10">
                <td className="py-3 pr-4 font-semibold">Utilities</td>
                <td className="py-3 pr-4">Landlord</td>
                <td className="py-3 pr-4">Usually Tenant</td>
                <td className="py-3">Tenant</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Base Rent</td>
                <td className="py-3 pr-4">Highest</td>
                <td className="py-3 pr-4">Middle</td>
                <td className="py-3">Lowest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">How This Affects Your Total Cost</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Here is what catches people off guard: the total occupancy cost under a gross lease and a NNN lease for the same space is often very similar. The difference is not how much you pay — it is how you pay it, who controls the costs, and how predictable your expenses are.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A landlord quoting $18/SF gross is building in their estimate of operating expenses. A landlord quoting $12/SF NNN plus $6/SF in estimated expenses is giving you the same total — but with transparency into where your money goes. The NNN tenant can audit those expenses. The gross tenant cannot.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Structure Should You Choose?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The right lease structure depends on your priorities:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Choose gross</strong> if you want maximum simplicity and budget certainty.</li>
          <li><strong>Choose NNN</strong> if you want cost transparency, lower base rent, and are comfortable with some variability in operating expenses.</li>
          <li><strong>Choose modified gross</strong> if you want a balance — some predictability with some transparency, and room to negotiate the split.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Do not compare lease rates across different structures without understanding what is included. A $14 NNN rate is not cheaper than a $20 gross rate until you add up the total occupancy cost. I always help my clients calculate the all-in cost before making decisions — because the base rent is only part of the story.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Comparing Lease Options?"
        body="I help tenants and landlords structure leases that align with their goals. Let me calculate your total occupancy cost."
        buttonText="Talk to Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
