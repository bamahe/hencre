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
 * Insight: Gross vs. Net Lease Structures
 * Evergreen comparison of commercial lease types.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Gross vs. Net Lease | Commercial Lease Types Compared",
  description:
    "Compare gross, modified gross, and net lease structures for commercial real estate. Understand how each impacts operating costs and total occupancy expense.",
  alternates: { canonical: "https://hencre.com/insights/gross-vs-net-lease" },
  openGraph: {
    title: "Gross vs. Net Lease: Commercial Lease Structures Compared",
    description:
      "Compare gross, modified gross, and net lease structures for commercial real estate.",
    url: "https://hencre.com/insights/gross-vs-net-lease",
    type: "article",
  },
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
  {
    question: "How does the lease structure affect my total occupancy cost in Florida?",
    answer:
      "In Florida, NNN leases carry additional exposure because property insurance, storm drainage, and hurricane prep costs are typically passed through as operating expenses. A gross lease may feel safer for budget planning, but the landlord builds those same costs into the rent. Always ask for an all-in cost estimate regardless of lease type before committing to a Florida commercial space.",
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
        { "@type": "ListItem", position: 3, name: "Gross vs. Net Lease", item: "https://hencre.com/insights/gross-vs-net-lease" },
      ],
    },
    {
      "@type": "Article",
      headline: "Gross vs. Net Lease: Commercial Lease Structures Compared",
      description:
        "Compare gross, modified gross, and net lease structures for commercial real estate.",
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
      url: "https://hencre.com/insights/gross-vs-net-lease",
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
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
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
          When a landlord quotes you a rate on commercial space, the number itself does not tell you much unless you know the lease structure behind it. A $20 per square foot gross lease and a $12 per square foot NNN lease might result in almost the same total occupancy cost — but the risk allocation is completely different. As a Broker Associate at REMAX Collective with 23+ years of real estate experience, I help tenants and landlords across <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>, <Link href="/markets/pinellas" className="text-accent underline">Pinellas County</Link>, and <Link href="/markets/pasco" className="text-accent underline">Pasco County</Link> structure leases that align with their goals. Let me break down the differences.
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
          <strong>Common in:</strong> Multi-tenant <Link href="/commercial/office-space" className="text-accent underline">office buildings</Link>, co-working spaces, and medical offices. Full-service gross is the standard for Class A office.
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
          The tenant pays base rent plus property taxes, insurance, and <Link href="/insights/cam-charges-explained" className="text-accent underline">common area maintenance (CAM)</Link>. The landlord&apos;s responsibility is typically limited to structural and roof repairs (though absolute NNN leases shift even those to the tenant).
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Advantages for tenants:</strong> Lower base rent and full transparency into what you are paying for. If expenses decrease, you benefit directly.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Disadvantages:</strong> Expense variability. Property taxes, insurance premiums, and maintenance costs can fluctuate year to year. Without a CAM cap, your costs could rise significantly. Learn more about how <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN investments</Link> look from the investor side.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Common in:</strong> <Link href="/commercial/retail-space" className="text-accent underline">Retail strip centers</Link>, standalone retail, <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial and warehouse</Link> properties, and freestanding commercial buildings.
        </p>
      </article>

      {/* ---- Image 1: Office building lobby ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=75"
          alt="Modern office building lobby — full-service gross leases are standard in Class A Florida office buildings"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Class A <Link href="/commercial/office-space" className="underline">office buildings</Link> typically use full-service gross leases. The landlord bundles all operating costs into a single monthly rate.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
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
          Here is what catches people off guard: the total occupancy cost under a gross lease and a NNN lease for the same space is often very similar. The difference is not how much you pay — it is how you pay it, who controls the costs, and how predictable your expenses are. Use our <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> and <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link> to model different lease scenarios.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A landlord quoting $18/SF gross is building in their estimate of operating expenses. A landlord quoting $12/SF NNN plus $6/SF in estimated expenses is giving you the same total — but with transparency into where your money goes. The NNN tenant can audit those expenses. The gross tenant cannot.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Structure Should You Choose?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The right lease structure depends on your priorities. This is one of the core questions I work through with clients considering <Link href="/insights/leasing-vs-buying-commercial" className="text-accent underline">leasing vs. buying commercial space</Link>:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Choose gross</strong> if you want maximum simplicity and budget certainty.</li>
          <li><strong>Choose NNN</strong> if you want cost transparency, lower base rent, and are comfortable with some variability in operating expenses. For investors, <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN investments</Link> often make the most sense.</li>
          <li><strong>Choose modified gross</strong> if you want a balance — some predictability with some transparency, and room to negotiate the split.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Do not compare lease rates across different structures without understanding what is included. A $14 NNN rate is not cheaper than a $20 gross rate until you add up the total occupancy cost. I always help my clients calculate the all-in cost before making decisions — because the base rent is only part of the story. This is exactly the kind of analysis my <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link> service provides. Also see our guide on <Link href="/blog/how-commercial-leases-differ-from-residential" className="text-accent underline">how commercial leases differ from residential</Link> for more context.
        </p>
      </article>

      {/* ---- Image 2: Retail NNN property ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=75"
          alt="Freestanding NNN retail building in Florida — triple net leases are standard for national chain locations"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Freestanding retail buildings typically use NNN leases. The tenant pays base rent plus taxes, insurance, and maintenance. See our <Link href="/insights/nnn-lease-explained" className="underline">NNN lease deep dive</Link> and the <Link href="/commercial/nnn-net-lease" className="underline">NNN investment overview</Link>.</p>
      </section>

      {/* ---- Image 3: Lease review meeting ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-8">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=75"
          alt="Commercial broker and tenant reviewing lease structure options in Florida"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Choosing the right lease structure is a strategic decision. <Link href="/services/tenant-representation" className="underline">Tenant representation</Link> ensures the structure and terms align with your business plan and budget.</p>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8 mt-12">
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

      <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
