import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * CRE Valuation — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Valuation Florida | Broker Opinion of Value (BOV)",
  description:
    "Know what your commercial property is worth. Broker opinions of value, comp analysis, and market positioning for owners, investors, and lenders across Florida. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/cre-valuation" },
  openGraph: {
    title: "CRE Valuation | REMAX Commercial Real Estate",
    description:
      "Broker opinion of value, comp analysis, and market positioning. Know what your commercial property is worth.",
    url: "https://hencre.com/services/cre-valuation",
  },
};

/* -- FAQ data -- */
const FAQS = [
  {
    question: "What is the difference between a BOV and an appraisal?",
    answer: "A broker opinion of value (BOV) is a broker-level market assessment based on comparable sales, income analysis, and professional judgment. A formal appraisal is conducted by a licensed appraiser under USPAP standards and is required by lenders for financing. BOVs are faster, more affordable, and often more practically useful for decision-making.",
  },
  {
    question: "How much does a commercial property valuation cost?",
    answer: "BOV pricing varies by property complexity. Simple single-tenant properties may cost $500 to $1,500. Multi-tenant or complex properties may run $1,500 to $3,500. Formal appraisals typically cost $3,000 to $10,000+. Barrett provides transparent pricing before starting.",
  },
  {
    question: "Which valuation approach is most important for CRE?",
    answer: "For income-producing properties, the income capitalization approach is most important — it values the property based on NOI and cap rate. The comparable sales approach validates the number. The cost approach is used primarily for special-purpose or newer properties.",
  },
  {
    question: "How often should I get my commercial property valued?",
    answer: "At minimum, before any major financial decision — sale, refinance, partnership change, or estate planning. Barrett recommends annual valuations for active investors and whenever market conditions shift significantly.",
  },
  {
    question: "Can a BOV be used for financing?",
    answer: "Most lenders require a formal appraisal for loan origination. However, BOVs are widely accepted for preliminary decision-making, internal portfolio valuation, estate planning, partnership buyouts, and market positioning before listing.",
  },
  {
    question: "How does Barrett calculate cap rates in his valuations?",
    answer: "Barrett pulls recent comparable sales from CoStar and his own transaction database, extracts the implied cap rate from each comp, and weights those rates based on similarity to your property — location, lease term, tenant credit, and building condition. He then applies market-derived cap rates to your actual or market NOI to produce a defensible value range. For a deeper explanation, see the cap rate guide on this site.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "CRE Valuation", item: "https://hencre.com/services/cre-valuation" },
      ],
    },
    {
      "@type": "Service",
      name: "CRE Valuation",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      description: "Broker opinion of value, comparable sales analysis, and commercial property valuation across Florida.",
      areaServed: { "@type": "State", name: "Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function CREValuationPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "CRE Valuation", href: "/services/cre-valuation" }]} />

      <Hero
        title="CRE Valuation"
        subtitle="Know what your property is worth before you act. Broker opinion of value, comp analysis, and market positioning."
        ctaText="Request a Valuation"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            A CRE valuation determines what a commercial property is worth using three approaches: income capitalization, comparable sales, and replacement cost. According to the Appraisal Institute, the income approach is most relevant for investment properties because it values the building based on its ability to generate income — directly tied to the <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">capitalization rate</Link> and net operating income.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Accurate Valuation Drives Better Decisions</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            With 23+ years of real estate experience, Barrett Henry delivers valuations backed by market data and institutional-level analysis. Before you sell, refinance, negotiate a lease renewal, or restructure a partnership, you need to know what your commercial property is actually worth. Not what you hope it is worth. Not what Zestimate says. What a sophisticated buyer or lender would pay based on income, comps, and market conditions.
          </p>
          <p>
            Barrett provides broker opinions of value (BOVs) that give you a defensible market value range. His analysis considers three approaches: comparable sales, income capitalization, and replacement cost. He weights each approach based on what matters most for your specific property type and situation. For <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN-leased investment properties</Link>, the income approach almost always drives value. For <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial and warehouse properties</Link>, recent comparable sales carry significant weight.
          </p>
          <p>
            A BOV is not a formal appraisal — it is a broker-level assessment based on real market data and professional judgment. It is faster, more affordable, and often more practically useful than a full appraisal. Banks, attorneys, and estate planners regularly request BOVs for decision-making.
          </p>
          <p>
            Whether you own a single retail pad or a multi-property portfolio, Barrett delivers clear, well-supported valuations that help you make confident decisions.
          </p>
        </div>
      </section>

      {/* ---- Image 1: Financial analysis / charts ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate financial analysis and valuation spreadsheets"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett uses CoStar data, recent comparables, and income analysis to produce defensible valuations for <Link href="/commercial" className="underline">all commercial property types</Link> across Florida.</p>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 mt-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Property owners considering a sale or refinance",
              "Investors evaluating acquisition targets",
              "Lenders needing third-party value confirmation",
              "Estate planners and trustees managing commercial assets",
              "Partners in ownership disputes needing fair market value",
              "Business owners assessing real property holdings",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-black font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What a BOV Includes</h2>
          <ul className="mt-6 space-y-3 text-lg text-[#666666]">
            {[
              "Property description, photos, and site analysis",
              "Comparable sales analysis with adjustments",
              "Income approach using actual or market rents and cap rates",
              "Market conditions summary and trend analysis",
              "Estimated value range with supporting rationale",
              "Executive summary suitable for lenders and attorneys",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-black font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[#666666]">For sellers preparing to list, a BOV feeds directly into Barrett&apos;s <Link href="/services/dispositions" className="text-accent underline">disposition strategy</Link>. For investors evaluating acquisitions, it anchors the <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence process</Link>. The <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link> on this site lets you run quick checks before requesting a full BOV.</p>
        </div>
      </section>

      {/* ---- Image 2: Commercial property being evaluated ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate property under valuation analysis in Florida"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett delivers valuations for properties in <Link href="/markets/hillsborough" className="underline">Hillsborough</Link>, <Link href="/markets/sarasota" className="underline">Sarasota</Link>, <Link href="/markets/pasco" className="underline">Pasco</Link>, and all 67 Florida counties.</p>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need to Know Your Property&apos;s Value?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Request a broker opinion of value. Barrett will assess your property and deliver a clear, well-supported valuation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Request a BOV
            </Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      {/* ---- Valuation approaches comparison table ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do CRE Valuation Approaches Compare?</h2>
          <p className="mt-4 text-[#666666]">According to the Appraisal Institute, each valuation approach serves a different purpose. Barrett uses all three and weights them appropriately for your property type and situation.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Approach</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Method</th>
                  <th className="py-3 text-left font-bold text-black">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Income Capitalization</td>
                  <td className="py-3 pr-4">NOI divided by <Link href="/insights/what-is-a-cap-rate" className="underline">cap rate</Link></td>
                  <td className="py-3">Income-producing properties (most CRE)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Comparable Sales</td>
                  <td className="py-3 pr-4">Price per SF based on recent similar sales</td>
                  <td className="py-3">Properties with active comp markets</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Cost Approach</td>
                  <td className="py-3 pr-4">Land value + replacement cost minus depreciation</td>
                  <td className="py-3">New construction, special-purpose buildings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Image 3: Property meeting / broker advisory ---- */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=75"
          alt="Barrett Henry reviewing commercial property valuation with a client"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Whether you are a first-time investor or managing a portfolio, understanding your property&apos;s value is the foundation of every smart decision. Learn <Link href="/insights/how-to-value-commercial-property" className="underline">how to value commercial property</Link> in detail.</p>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">CRE Valuation — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>Appraisal Institute — <em>The Appraisal of Real Estate</em>, 15th Edition</li>
          <li>Uniform Standards of Professional Appraisal Practice (USPAP)</li>
          <li>National Association of REALTORS — CRE Valuation Guidelines</li>
          <li>CoStar Group — Florida Commercial Property Data and Analytics</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services &amp; Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">All Services</Link>
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/investment-sales" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
            <Link href="/insights/how-to-value-commercial-property" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">How to Value CRE</Link>
            <Link href="/insights/what-is-a-cap-rate" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Cap Rate Explained</Link>
            <Link href="/calculators/cap-rate" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Cap Rate Calculator</Link>
            <Link href="/calculators/roi" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">ROI Calculator</Link>
            <Link href="/blog/how-to-calculate-commercial-property-roi" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">ROI Calculation Guide</Link>
          </div>
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
