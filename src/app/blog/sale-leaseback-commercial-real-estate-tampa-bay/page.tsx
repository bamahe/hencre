import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Sale-Leaseback Commercial Real Estate Tampa Bay
 * A guide for business owners and investors considering sale-leaseback
 * transactions in the Tampa Bay market.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Sale-Leaseback Commercial Real Estate Tampa Bay | HenCRE",
  description:
    "A complete guide to sale-leaseback transactions in Tampa Bay — how they work, why businesses use them, what investors gain, and how Florida's 2025 business rent tax repeal affects the math.",
  alternates: { canonical: "https://hencre.com/blog/sale-leaseback-commercial-real-estate-tampa-bay" },
  openGraph: {
    title: "Sale-Leaseback Commercial Real Estate Tampa Bay",
    description:
      "Business owners unlock capital without moving. Investors get a tenant on day one. Here is how sale-leasebacks work in Tampa Bay — and why 2026 is an active time for deals.",
    url: "https://hencre.com/blog/sale-leaseback-commercial-real-estate-tampa-bay",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Commercial building facade representing a sale-leaseback property in Tampa Bay",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is a sale-leaseback in commercial real estate?",
    answer:
      "A sale-leaseback is a two-part transaction in which a business sells the real estate it occupies to an investor, and at the closing table, that same business signs a long-term lease to remain in the property as a tenant. The seller receives cash from the sale and keeps operational control of the space — they simply write a rent check to the new owner instead of holding the deed. From the investor's perspective, the property comes with a tenant already in place on day one, typically on a net lease structure that passes expenses to the operator.",
  },
  {
    question: "Why would a Tampa Bay business owner do a sale-leaseback?",
    answer:
      "The primary motivation is capital liberation. A business owner who has built equity in commercial real estate can unlock that equity without moving or disrupting operations. A manufacturer on the East Tampa US-301 corridor, a medical practice owner in Wesley Chapel, or a distribution company in the Riverview industrial market might have millions of dollars tied up in property — capital that could fund expansion, pay down debt, hire staff, or fund an acquisition. Sale-leasebacks let them access that capital while keeping their location. In 2026, with business growth capital still commanding high interest rates, unlocking equity through a sale-leaseback can be cheaper than a conventional bank loan.",
  },
  {
    question: "What types of Tampa Bay properties work best for a sale-leaseback?",
    answer:
      "The best sale-leaseback candidates share a few characteristics: the business occupying the space is creditworthy, the property is in a functional location the tenant would not want to leave, and the lease term is long enough — typically 10 to 20 years with options — to give an investor stable income. In Tampa Bay, the most active sale-leaseback sectors include industrial and warehouse facilities, medical offices and outpatient healthcare facilities, auto-related retail (dealerships, service centers, car washes), QSR and casual dining properties, and professional office buildings occupied by a single tenant. Net-lease properties with investment-grade or near-investment-grade tenants command the tightest cap rates and the deepest pool of investors.",
  },
  {
    question: "How does the Florida business rent tax repeal affect sale-leasebacks?",
    answer:
      "Florida eliminated its business rent tax — the state sales tax on commercial leases — effective October 1, 2025. Before repeal, a commercial tenant in Florida paid sales tax on top of every rent payment, adding a real cost that no other state imposed on commercial occupants. With that tax gone, the effective rent under a sale-leaseback is lower for the same dollar amount than it was pre-repeal. This makes the transaction more affordable for the seller-turned-tenant and can improve the attractiveness of longer-term commitments, which in turn drives better pricing from investors.",
  },
  {
    question: "What cap rates should investors expect on Tampa Bay sale-leasebacks in 2026?",
    answer:
      "Cap rates on sale-leaseback transactions in Tampa Bay vary significantly by property type, tenant credit, and lease term. Investment-grade tenanted net-lease properties — think national healthcare systems, major QSR brands, or publicly traded distributors — can trade in the 5.5 to 7.0 percent range depending on lease term and location. Smaller, non-rated tenants with strong local operations but no national credit typically price at 7.0 to 9.0 percent cap rates. Industrial and flex properties with solid regional operators generally fall in the 6.5 to 8.5 percent range. Cap rates have stabilized after the upward movement of 2023 and 2024, and deal velocity is recovering as both buyers and sellers have adjusted to the current interest rate environment.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sale-Leaseback Commercial Real Estate Tampa Bay",
          item: "https://hencre.com/blog/sale-leaseback-commercial-real-estate-tampa-bay",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Sale-Leaseback Commercial Real Estate Tampa Bay",
      description:
        "How sale-leaseback transactions work in Tampa Bay — for business owners seeking capital and investors seeking tenant-occupied assets.",
      datePublished: "2026-08-13",
      dateModified: "2026-09-01",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/sale-leaseback-commercial-real-estate-tampa-bay",
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
    title: "What Is a Triple Net (NNN) Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "How NNN leases structure expenses — the lease type most sale-leaseback deals use.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate benchmarks for net-lease investments across Tampa Bay.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Step-by-step framework for evaluating commercial real estate returns.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How 1031 exchanges can defer capital gains on commercial property sales.",
  },
  {
    title: "Florida Business Rent Tax Repeal",
    href: "/blog/florida-business-rent-tax-repeal-tampa-bay",
    description: "What the elimination of Florida's commercial lease tax means for tenants.",
  },
  {
    title: "East Tampa US-301 Industrial Corridor",
    href: "/blog/east-tampa-us-301-industrial-corridor-2026",
    description: "Industrial properties in one of Tampa Bay's most active sale-leaseback sectors.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett structures commercial investment transactions for buyers and sellers.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Tenant quality, lease structure, and location criteria for CRE investors.",
  },
  {
    title: "SBA 504 Loan for Commercial Real Estate Tampa Bay",
    href: "/blog/sba-504-loan-commercial-real-estate-tampa-bay",
    description: "SBA 504 financing for owner-occupied commercial properties in Tampa Bay.",
  },
  {
    title: "Leasing vs. Buying Commercial Space",
    href: "/insights/leasing-vs-buying-commercial",
    description: "Decision framework for business owners weighing lease vs. ownership.",
  },
];

export default function SaleLeasebackPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Sale-Leaseback Tampa Bay", href: "/blog/sale-leaseback-commercial-real-estate-tampa-bay" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="Sale-Leaseback Commercial Real Estate in Tampa Bay"
        subtitle="Business owners unlock capital without leaving. Investors acquire a tenant-occupied asset on day one. Here is how sale-leasebacks work — and why Tampa Bay is an active market for these deals in 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          If you own the building your business operates from, you are sitting on an asset that most business owners never fully put to work. A sale-leaseback lets you convert that real estate equity into operating capital — without moving, without disrupting your staff, and without giving up your location. On the other side of the table, investors who buy sale-leaseback properties receive a tenant-occupied <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">net-lease asset</Link> from day one, with no lease-up risk and a motivated long-term occupant. In Tampa Bay&apos;s 2026 market, both sides of this transaction are active — and the fundamentals have rarely been better aligned.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is a Sale-Leaseback?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A sale-leaseback is a structured commercial real estate transaction with two simultaneous components. First, the business owner sells the property to an investor at a negotiated price. Second, at the same closing, the former owner signs a long-term lease — typically 10 to 20 years with renewal options — to continue occupying the space as a tenant. After closing, the business owner writes monthly rent checks instead of holding a deed.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The lease structure in most sale-leasebacks is a <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">triple net (NNN) lease</Link>, which passes property taxes, insurance, and maintenance costs to the tenant. This creates a predictable, low-management income stream for the investor and allows the tenant — who is already paying those expenses as an owner — to maintain full operational control of the facility.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Tampa Bay Business Owners Using Sale-Leasebacks in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Several converging forces have made sale-leasebacks particularly relevant in the current environment:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Capital costs remain elevated.</strong> Conventional bank debt for business expansion is expensive in 2026. A sale-leaseback unlocks equity that may be cheaper to access than a revolving credit facility, especially when the business has significant real estate value built up over years of ownership.</li>
          <li><strong>Tampa Bay commercial values have appreciated.</strong> Industrial, medical, and retail properties across Tampa Bay have seen substantial appreciation over the past five years. A business owner who bought or built their facility in 2018 or 2019 may be sitting on two to three times their original equity — capital that can be reinvested in the business at better returns than the real estate itself generates.</li>
          <li><strong>Florida&apos;s business rent tax is gone.</strong> Florida eliminated its <Link href="/blog/florida-business-rent-tax-repeal-tampa-bay" className="text-accent underline">commercial lease sales tax</Link> effective October 1, 2025. For a business owner transitioning from ownership to tenancy, this reduces the ongoing rent burden and makes long-term lease commitments more financially comfortable.</li>
          <li><strong>Succession and estate planning.</strong> Business owners approaching retirement sometimes use a sale-leaseback to simplify their estate, liquidity their real estate position, and create a defined transition structure that keeps the operating business stable during ownership succession.</li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
            alt="Commercial building exterior representing a sale-leaseback opportunity in Tampa Bay"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Sale-leaseback transactions are common across industrial, medical, and retail properties in Tampa Bay — particularly for owner-operators who have built significant equity in their facilities.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Types of Tampa Bay Properties Are Best for a Sale-Leaseback?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not every commercial property makes a good sale-leaseback candidate. The ideal transaction involves a business that genuinely needs to stay at that location and a property that serves a purpose difficult to replicate. In Tampa Bay, the most active sale-leaseback sectors include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Industrial and warehouse facilities.</strong> Distribution companies, light manufacturers, and trade contractors on corridors like the <Link href="/blog/east-tampa-us-301-industrial-corridor-2026" className="text-accent underline">East Tampa US-301 industrial corridor</Link> or in Riverview and Brandon often own their buildings and have strong operational reasons to stay put. These assets attract institutional and private investors seeking stable industrial income.</li>
          <li><strong>Medical office and outpatient healthcare.</strong> Specialty practices, surgery centers, and <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">medical office tenants</Link> make excellent sale-leaseback candidates because their buildouts are expensive and location-specific. A surgeon who owns their office building rarely wants the disruption of relocating.</li>
          <li><strong>Auto-related retail.</strong> Car dealerships, collision repair centers, and auto service chains occupy purpose-built facilities with high relocation costs, making them strong long-term sale-leaseback tenants.</li>
          <li><strong>QSR and casual dining.</strong> <Link href="/blog/tampa-bay-restaurant-food-beverage-space-2026" className="text-accent underline">Restaurant operators</Link> who own their pad sites or freestanding buildings can monetize real estate equity while maintaining brand and operational control.</li>
          <li><strong>Professional services offices.</strong> Law firms, accounting practices, and financial advisory firms that have built or bought their facilities may be ideal candidates — particularly firms whose senior partners want to convert equity ahead of retirement.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Sale-Leaseback Transaction Process Look Like?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A well-structured sale-leaseback follows a predictable path:
        </p>
        <ol className="mt-4 list-decimal pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Valuation.</strong> The property is valued based on its real estate fundamentals and the quality of the lease that will be created at closing. The rent rate in the sale-leaseback lease must be market-supportable — both for credibility with investors and to ensure the business can sustain it long-term.</li>
          <li><strong>Lease structuring.</strong> The lease terms — rent, term, escalations, renewal options, NNN expense structure, and permitted use — are negotiated before the property goes to market. The lease is as important as the real estate itself in driving investor interest and pricing.</li>
          <li><strong>Marketing to investors.</strong> The property is presented to net-lease investors as a fully leased asset. Institutional buyers, 1031 exchange buyers seeking replacement properties, and private investors all compete in this space. A competitive process drives better pricing for the seller.</li>
          <li><strong>Due diligence.</strong> Investors conduct standard <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence</Link> — title, environmental, physical inspection — plus underwriting of the tenant&apos;s business financials.</li>
          <li><strong>Closing and lease commencement.</strong> The purchase and lease both close simultaneously. The seller receives proceeds; the lease begins immediately.</li>
        </ol>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop"
            alt="Business professionals reviewing a commercial real estate sale-leaseback transaction"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Structuring the lease correctly before going to market is the most important step in a sale-leaseback — rent, term, and escalation clauses directly determine what price the market will pay.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">What Do Investors Look for in a Tampa Bay Sale-Leaseback?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors evaluating a sale-leaseback weigh the real estate and the tenant equally:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Tenant creditworthiness.</strong> Investment-grade or near-investment-grade tenants command the tightest <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">cap rates</Link>. For smaller private businesses, investors underwrite business financials — revenue, EBITDA, debt load — to assess the tenant&apos;s ability to sustain rent payments across the lease term.</li>
          <li><strong>Lease length.</strong> Longer initial terms create more value for investors. A 20-year lease with 10 percent rent bumps every five years is far more attractive than a 5-year term with renewal options, because it eliminates near-term rollover risk.</li>
          <li><strong>Rent-to-revenue ratio.</strong> Investors want to see that rent occupies a sustainable percentage of the tenant&apos;s revenue — typically under 10 to 15 percent for most business types. A tenant stretched too thin on rent introduces default risk that is reflected in the cap rate the investor demands.</li>
          <li><strong>Real estate quality.</strong> Even in a sale-leaseback, the underlying real estate must be functional and marketable if the tenant ever vacates. An industrial building on a major Tampa Bay logistics corridor is more valuable than an equivalent building in a secondary location, because the investor can release it if needed.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Use Barrett&apos;s <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">commercial property ROI framework</Link> to model how a specific sale-leaseback would perform across different cap rate scenarios before you commit to a pricing strategy.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Tax Considerations for a Sale-Leaseback?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A sale-leaseback triggers a taxable sale event for the seller. If the property has appreciated significantly, capital gains taxes — both federal and Florida (which has no state income tax, an advantage) — will apply to the gain. Several strategies can mitigate this:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>1031 exchange for the proceeds.</strong> If the seller reinvests the proceeds into a qualifying replacement property within the IRS&apos;s timeline, capital gains taxes can be deferred. This works well for business owners who want to shift their real estate holdings rather than liquidate entirely. Review the <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">Florida 1031 exchange rules</Link> before structuring any sale-leaseback with exchange intent.</li>
          <li><strong>Installment sale treatment.</strong> In some cases, a seller can negotiate an installment sale structure that spreads the gain recognition over multiple years, managing the annual tax exposure.</li>
          <li><strong>Lease payments as a business deduction.</strong> Once the sale is complete, the rent payments under the new lease are typically fully deductible as a business expense — replacing a smaller depreciation deduction with a larger, fully deductible rent expense.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Always work with a qualified CPA and a commercial real estate attorney before completing a sale-leaseback. The tax implications are real, and proper structuring makes a significant difference in net proceeds.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Risks of a Sale-Leaseback?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Sale-leasebacks are not without risk for the seller:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Long-term lease commitment.</strong> Signing a 15 or 20-year lease is a major commitment. If the business grows beyond the space or contracts below what it needs, the lease remains in force. Careful thought about growth plans — and lease flexibility provisions like expansion rights or early termination options — is essential.</li>
          <li><strong>Rent escalation.</strong> Sale-leaseback leases typically include periodic rent bumps. Those increases are predictable — which helps with financial planning — but they add to occupancy cost over a long lease term.</li>
          <li><strong>Loss of equity upside.</strong> Once the property is sold, the seller no longer benefits from future appreciation. If Tampa Bay commercial values continue rising, the investor captures that gain rather than the former owner.</li>
          <li><strong>NNN expense exposure.</strong> Under a triple net lease, the tenant bears property taxes, insurance, and maintenance. These costs are variable and can increase over time, adding to the effective rent burden.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Sale-Leasebacks in Tampa Bay</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the right business owner, a sale-leaseback is one of the most powerful tools in commercial real estate — a way to access real estate equity without business disruption, reduce the balance sheet concentration in a single asset, and redirect capital to higher-return uses. For investors, a well-structured sale-leaseback offers a tenant-occupied, long-term net lease investment in a market with proven fundamentals.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s diverse business base — <Link href="/blog/east-tampa-us-301-industrial-corridor-2026" className="text-accent underline">industrial operators</Link>, healthcare providers, professional services firms, restaurant and retail chains — generates a consistent pipeline of sale-leaseback opportunities across every price point and property type. With cap rates stabilizing in 2026 and Florida&apos;s commercial lease tax eliminated, the transaction economics for both sides have improved meaningfully from where they were two years ago.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          As a Broker Associate at REMAX Collective with 23+ years of real estate experience, Barrett Henry structures and closes commercial investment transactions across the Tampa Bay market. Whether you are a business owner evaluating a sale-leaseback as a capital strategy, or an investor seeking net-lease assets, understanding the deal structure is the first step. Call (813) 733-7907 or <Link href="/contact" className="text-accent underline">contact Barrett</Link> to talk through your specific situation.
        </p>

        <p className="mt-8 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Sale-Leaseback Commercial Real Estate — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <Image
            src="/images/barrett-henry-headshot.jpg"
            alt="Barrett Henry, Broker Associate at REMAX Collective"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He helps business owners evaluate sale-leaseback strategies and connects investors with net-lease opportunities across the Tampa Bay market. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Considering a Sale-Leaseback or Looking to Invest?"
        body="I help Tampa Bay business owners structure sale-leaseback transactions and help investors identify well-leased net-lease opportunities across the market."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
