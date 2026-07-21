import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "What Is a Triple Net (NNN) Lease and Why Investors Love It",
  description:
    "A triple net lease shifts property taxes, insurance, and maintenance to the tenant. Learn how NNN leases work, why investors favor them, and what to watch for.",
  alternates: { canonical: "https://hencre.com/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" },
  openGraph: {
    title: "What Is a Triple Net (NNN) Lease and Why Investors Love It",
    description:
      "How NNN leases work, why investors favor them, and what to watch for when evaluating NNN properties.",
    url: "https://hencre.com/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "financial documents and calculator on a desk",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the difference between NNN, NN, and N leases?",
    answer:
      "A single net (N) lease has the tenant pay property taxes on top of base rent. A double net (NN) lease adds insurance to the tenant's responsibilities. A triple net (NNN) lease adds maintenance as well. NNN is the most common net lease structure and shifts the most operating cost responsibility to the tenant.",
  },
  {
    question: "Are NNN leases good for tenants?",
    answer:
      "NNN leases typically come with lower base rents than gross leases since the tenant takes on operating expenses. For well-capitalized tenants with predictable businesses, the lower base rent can be advantageous. The downside is exposure to rising property taxes, insurance, and maintenance costs. Tenants should negotiate CAM caps to limit unexpected increases.",
  },
  {
    question: "What is an absolute NNN lease?",
    answer:
      "An absolute NNN (or 'bondable' NNN) lease means the tenant is responsible for all property expenses including the roof, structure, and even rebuilding after a casualty event. This is the most landlord-favorable structure and commands the lowest cap rates. It is common with franchised fast-food locations and other national tenants on long leases.",
  },
  {
    question: "How is NNN income taxed?",
    answer:
      "NNN rental income is taxed as ordinary income unless structured through a pass-through entity like an LLC or partnership, in which case it may qualify for the 20% QBI deduction under Section 199A. Depreciation can shelter a portion of income. Consult a tax professional familiar with real estate investment for your specific situation.",
  },
  {
    question: "What cap rates do NNN properties trade at in Florida?",
    answer:
      "NNN cap rates in Florida vary widely by tenant credit, lease term remaining, and location. Strong-credit national tenants on long leases in high-traffic locations typically trade at lower cap rates reflecting the lower risk. Shorter remaining term or weaker tenants command higher cap rates. A local broker can provide current comparable sales data for the specific asset type and submarket you are evaluating.",
  },
  {
    question: "Can NNN properties be used in a 1031 exchange?",
    answer:
      "Yes, NNN properties are extremely popular 1031 exchange targets. Their predictable income, minimal management requirements, and clear valuation make them easy to identify and close within the 45-day identification and 180-day closing windows. Many investors exchange out of actively managed properties into NNN assets as part of a wealth preservation and succession strategy.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "What Is a Triple Net (NNN) Lease and Why Investors Love It",
      description:
        "How NNN leases work, why investors favor them, and key risks to evaluate.",
      datePublished: "2026-05-22",
      dateModified: "2026-07-20",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate, Commercial Real Estate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
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
    title: "NNN Net Lease Properties",
    href: "/commercial/nnn-net-lease",
    description: "Browse available NNN investment properties.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "The math behind evaluating commercial investments.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to exchange into Florida NNN properties.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors acquire NNN properties.",
  },
];

export default function NNNLeasePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "What Is a NNN Lease?", href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop"
        title="What Is a Triple Net (NNN) Lease and Why Investors Love It"
        subtitle="The NNN lease is the closest thing commercial real estate has to passive income. Here is how it works and what you need to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          A triple net lease — commonly abbreviated as NNN — is a lease structure where the tenant pays base rent plus all three major property expenses: property taxes, building insurance, and common area maintenance (CAM). This shifts virtually all operating costs from the landlord to the tenant, creating a predictable, low-management income stream for investors. It is the most popular lease structure in commercial real estate investing, and there are good reasons why. Investors can explore available{" "}
          <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN net lease properties</Link>{" "}
          across Florida or use the{" "}
          <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link>{" "}
          to benchmark potential returns.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does a Triple Net Lease Work?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a standard NNN lease, the tenant is responsible for three categories of expenses on top of base rent:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Property taxes.</strong> The tenant pays their proportionate share (or all) of real estate taxes assessed on the property.</li>
          <li><strong>Insurance.</strong> The tenant pays for building insurance premiums. In Florida, this is a significant line item given elevated insurance costs.</li>
          <li><strong><Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">Common area maintenance (CAM).</Link></strong> The tenant pays for maintenance of shared areas: parking lots, landscaping, exterior lighting, and building systems.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The landlord receives the base rent as essentially net income. This is why the lease is called &quot;triple net&quot; — three categories of expenses are netted out and passed through to the tenant.
        </p>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=600&fit=crop"
            alt="National retail tenant storefront representing a typical NNN leased property"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Single-tenant retail buildings leased to national credit tenants are among the most common NNN investment property types.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Do Investors Love NNN Properties?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          NNN-leased properties are favorites among commercial real estate investors for several compelling reasons:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Predictable income.</strong> With operating expenses passed to the tenant, the landlord&apos;s income is highly predictable. There are no surprise maintenance bills or tax increases eating into returns.</li>
          <li><strong>Minimal management.</strong> The tenant handles day-to-day property operations. Many NNN investors never visit their properties. This is as close to passive income as real estate gets.</li>
          <li><strong>Creditworthy tenants.</strong> Many NNN properties are leased to national or regional tenants — pharmacies, fast food chains, auto parts stores, banks — with strong credit ratings. This reduces default risk.</li>
          <li><strong>Long lease terms.</strong> NNN leases commonly run 10 to 25 years, providing long-term income stability.</li>
          <li><strong>Built-in rent increases.</strong> Most NNN leases include annual escalations, typically 1.5 to 2 percent, providing inflation protection.</li>
          <li><strong>1031 exchange friendly.</strong> NNN properties are popular{" "}
            <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link>{" "}
            targets because they are easy to identify and close within the exchange timeline.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Difference Between NNN and Other Lease Types?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The key difference is who bears the operating cost risk. In a gross lease, the landlord absorbs all operating expenses and prices them into a higher base rent. If taxes or insurance spike, the landlord takes the hit. In a NNN lease, those increases pass through to the tenant. There are also single net (N) and double net (NN) leases that split the expenses differently, but NNN is by far the most common net lease structure in the market. Understanding{" "}
          <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">how CAM charges work</Link>{" "}
          is essential for both tenants and investors evaluating NNN properties.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Evaluate a NNN Investment Property?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          When evaluating a NNN investment, focus on these key factors:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Tenant credit quality.</strong> A NNN lease is only as good as the tenant paying it. Research the tenant&apos;s financial health, credit rating, and industry outlook.</li>
          <li><strong>Remaining lease term.</strong> Longer remaining terms are generally more valuable. A property with 15 years remaining is worth more than one with 3 years left, all else being equal.</li>
          <li><strong><Link href="/calculators/cap-rate" className="text-accent underline">Cap rate.</Link></strong> This measures your return relative to the purchase price. Lower cap rates typically indicate lower risk (better tenant, better location). Higher cap rates indicate higher risk or higher potential returns.</li>
          <li><strong>Location quality.</strong> Even with a strong tenant, location matters. A property in a high-traffic area with good demographics will re-lease more easily if the tenant leaves. Consider how a property in{" "}
            <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>{" "}
            or{" "}
            <Link href="/markets/polk" className="text-accent underline">Polk County</Link>{" "}
            compares on this dimension.</li>
          <li><strong>Rent escalation structure.</strong> Fixed increases, CPI-based increases, or flat rent. Each affects long-term returns differently.</li>
          <li><strong>Renewal options.</strong> Tenant renewal options at below-market rates can limit upside. Understand the renewal terms.</li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop"
            alt="Commercial property analysis and investment evaluation documents"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Evaluating NNN investments requires careful analysis of tenant credit, remaining lease term, location, and cap rate relative to market comparables.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Risks of NNN Investing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          NNN investing is not risk-free. The biggest risks include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Tenant default.</strong> If the tenant goes bankrupt or closes, you have an empty building with no income and full expense responsibility.</li>
          <li><strong>Single-tenant concentration.</strong> All your income depends on one tenant. No diversification.</li>
          <li><strong>Below-market rent at lease end.</strong> If the lease was signed years ago at rates below current market, the built-in escalations may not have kept pace. But this can also be an opportunity at renewal.</li>
          <li><strong>Roof and structure responsibility.</strong> Some NNN leases are &quot;absolute NNN&quot; where the tenant covers everything, including roof and structure. Others leave these to the landlord. Read the lease carefully. A thorough{" "}
            <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence process</Link>{" "}
            will reveal lease structure and any deferred maintenance issues.</li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
            alt="Investor reviewing NNN lease documents and financial projections"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Understanding the lease structure and tenant obligations is essential before acquiring any NNN investment property.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Where Do NNN Properties Fit in a Portfolio?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          NNN properties are ideal for investors who want steady, predictable cash flow without active management. They are particularly popular with retirees, out-of-state investors, and 1031 exchange buyers looking for stable replacement properties. Many investors pair NNN properties with more actively managed assets like{" "}
          <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">multifamily</Link>{" "}
          or value-add{" "}
          <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>{" "}
          to balance their portfolio between stability and growth. Read{" "}
          <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">what makes a good commercial investment</Link>{" "}
          for the broader investment criteria framework.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Triple net leases offer a compelling combination of predictable income, minimal management, and long-term stability. But they are not one-size-fits-all. Tenant credit, location, lease terms, and purchase price all matter. With 23+ years of real estate experience, Barrett Henry helps investors evaluate{" "}
          <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN opportunities</Link>{" "}
          across Florida, making sure the deal works on paper and in practice. The{" "}
          <Link href="/services/investment-sales" className="text-accent underline">investment sales process</Link>{" "}
          includes thorough underwriting so you know exactly what you are buying.
        </p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">NNN Lease — Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Looking for NNN Investment Properties?"
        body="Barrett sources and evaluates NNN properties across Florida — from single-tenant retail to credit-rated corporate tenants. Let him find the right fit for your portfolio."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
