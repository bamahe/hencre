import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * Dispositions — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Property Dispositions FL | Sell for Max Value",
  description:
    "Maximize proceeds when selling commercial real estate in Florida. Strategic pricing, targeted marketing, and deal structuring for optimal results. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/dispositions" },
  openGraph: {
    title: "Dispositions | REMAX Commercial Real Estate",
    description:
      "Sell your commercial property for maximum value. Strategic pricing, marketing, and negotiation across Florida.",
    url: "https://hencre.com/services/dispositions",
  },
};

/* -- FAQ data -- */
const FAQS = [
  {
    question: "How long does it take to sell commercial property?",
    answer: "Timelines vary by property type and pricing. Well-priced retail and industrial properties can close in 60 to 90 days. Larger or more specialized assets may take 6 to 12 months. Barrett sets realistic expectations and provides regular market feedback throughout the process.",
  },
  {
    question: "What is a broker opinion of value (BOV)?",
    answer: "A BOV is a broker-level market valuation based on comparable sales, income analysis, and market conditions. It is faster and more affordable than a formal appraisal, and widely accepted for decision-making by banks, attorneys, and estate planners.",
  },
  {
    question: "Should I sell or hold my commercial property?",
    answer: "That depends on your financial goals, market timing, and property performance. Barrett analyzes your current NOI, cap rate, market trends, and capital expenditure needs to give you an honest recommendation — sometimes the best advice is to hold.",
  },
  {
    question: "Can you help with a 1031 exchange sale?",
    answer: "Yes. Barrett coordinates with your qualified intermediary to ensure the sale and identification of replacement properties meet IRS deadlines. He handles both sides — selling your current asset and sourcing replacement properties.",
  },
  {
    question: "What marketing do you use to sell commercial property?",
    answer: "Barrett uses institutional-quality offering memorandums, LoopNet, CoStar, and Crexi listings, direct outreach to targeted buyer pools, REMAX Commercial broker network activation, and email campaigns to qualified investors.",
  },
  {
    question: "How do I know if my commercial property is priced correctly?",
    answer: "Correct pricing is the foundation of a successful disposition. Barrett performs a comprehensive broker opinion of value using comparable sales, income capitalization, and replacement cost approaches. He then recommends a pricing strategy that generates competitive buyer interest without leaving money on the table — and provides regular market feedback during the marketing period.",
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
        { "@type": "ListItem", position: 3, name: "Dispositions", item: "https://hencre.com/services/dispositions" },
      ],
    },
    {
      "@type": "Service",
      name: "Dispositions",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      description: "Commercial property dispositions — strategic pricing, marketing, buyer qualification, and deal structuring across Florida.",
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

export default function DispositionsPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Dispositions", href: "/services/dispositions" }]} />

      <Hero
        title="Dispositions"
        subtitle="Maximize proceeds when it is time to exit. Positioning, marketing, and deal structuring for optimal results."
        ctaText="Sell Your Property"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            A disposition is the strategic sale of a commercial property to maximize proceeds. Sellers who work with experienced brokers consistently achieve stronger pricing through competitive marketing, institutional-quality materials, and targeted buyer outreach — because the commercial buyer pool is smaller and more sophisticated than residential, and reaching the right buyers directly matters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Exit at the Right Time, at the Right Price</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            With 23+ years of real estate experience, Barrett Henry brings institutional-quality discipline to every commercial sale. As a REMAX Commercial broker, he taps the largest real estate referral network on the planet to reach qualified buyers for your asset. Selling a commercial property is not like listing a house. The buyer pool is smaller, more sophisticated, and more analytical. You need a broker who speaks their language — who can present your property with institutional-quality materials, price it based on real income data, and negotiate with buyers who know exactly what they are doing.
          </p>
          <p>
            Barrett starts with a comprehensive <Link href="/services/cre-valuation" className="text-accent underline">broker opinion of value (BOV)</Link> based on comparable sales, income analysis, and market trends. From there, he develops a pricing strategy designed to generate competitive interest without leaving money on the table.
          </p>
          <p>
            His marketing approach is targeted, not generic. Barrett identifies the most likely buyer profiles for your asset — 1031 exchangers, private equity, local operators, or owner-users — and reaches them through direct outreach, broker networks, and curated marketing campaigns. The goal is competitive tension that drives best-and-final offers.
          </p>
          <p>
            Through due diligence, negotiation, and closing, Barrett manages every detail. You focus on your next move while he maximizes your proceeds on this one.
          </p>
        </div>
      </section>

      {/* ---- Image 1: Commercial for sale ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&auto=format&fit=crop&q=75"
          alt="Commercial property for sale sign in Florida"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett represents sellers across all Florida markets — from <Link href="/markets/hillsborough" className="underline">Hillsborough</Link> to <Link href="/markets/sarasota" className="underline">Sarasota</Link> to <Link href="/markets/brevard" className="underline">Brevard County</Link>.</p>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 mt-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Property owners ready to sell and harvest gains",
              "Investors rebalancing or exiting a portfolio",
              "Estate trustees managing inherited commercial property",
              "Business owners selling owner-occupied buildings",
              "Partnerships dissolving and distributing assets",
              "Owners facing lease expirations or declining occupancy",
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
          <h2 className="text-2xl font-bold sm:text-3xl">The Process</h2>
          <ol className="mt-8 space-y-6">
            {[
              { step: "Valuation", desc: "Broker opinion of value based on comps, income, and market conditions." },
              { step: "Pricing Strategy", desc: "Set asking price and deal structure to maximize proceeds and speed." },
              { step: "Marketing", desc: "Professional materials, targeted buyer outreach, and broker network activation." },
              { step: "Buyer Qualification", desc: "Proof of funds, financing pre-approval, and background verification." },
              { step: "Negotiation", desc: "Offer review, counter-offers, and best-and-final structuring." },
              { step: "Due Diligence & Closing", desc: "Manage inspections, title, survey, and coordinate a clean closing." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-black">{item.step}</p>
                  <p className="mt-1 text-[#666666]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Image 2: Business handshake / deal closing ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=75"
          alt="Commercial real estate deal closing and buyer qualification"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett works with buyers executing <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="underline">1031 exchanges</Link>, private equity groups, and owner-users across all <Link href="/commercial" className="underline">commercial property types</Link>.</p>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Considering a Sale?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get a broker opinion of value with no obligation. Know what your property is worth before you decide.
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

      {/* ---- Disposition strategy comparison table ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Disposition Strategies Compare?</h2>
          <p className="mt-4 text-[#666666]">The right disposition strategy depends on your timeline, tax situation, and buyer pool. Barrett advises on the best approach for your specific asset and goals.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Strategy</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Timeline</th>
                  <th className="py-3 text-left font-bold text-black">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Open Market Sale</td>
                  <td className="py-3 pr-4">90-180 days</td>
                  <td className="py-3">Maximizing price through competitive bidding</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Targeted Off-Market</td>
                  <td className="py-3 pr-4">60-120 days</td>
                  <td className="py-3">Discretion, speed, or specific buyer profiles</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="underline">1031 Exchange Sale</Link></td>
                  <td className="py-3 pr-4">45-180 days (IRS deadlines)</td>
                  <td className="py-3">Tax deferral while reinvesting proceeds</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Portfolio Sale</td>
                  <td className="py-3 pr-4">120-365 days</td>
                  <td className="py-3">Selling multiple assets as a package</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[#666666]">Before deciding to sell, Barrett recommends reviewing the <Link href="/blog/tampa-bay-rental-property-exit-strategy-2026" className="text-accent underline">Tampa Bay rental property exit strategy guide</Link> and understanding how <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rates</Link> affect your property&apos;s value to buyers. The <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link> can also help you model your post-sale returns.</p>
        </div>
      </section>

      {/* ---- Image 3: Commercial property aerial / Florida market ---- */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=75"
          alt="Aerial view of Florida commercial real estate portfolio"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett advises on disposition of all property types — <Link href="/commercial/retail-space" className="underline">retail</Link>, <Link href="/commercial/office-space" className="underline">office</Link>, <Link href="/commercial/industrial-warehouse" className="underline">industrial</Link>, and <Link href="/commercial/multifamily" className="underline">multifamily</Link> — statewide.</p>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Dispositions — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>CBRE Research — Seller Representation and Pricing Impact Studies</li>
          <li>IRS Publication 544 — Sales and Other Dispositions of Assets</li>
          <li>National Association of REALTORS — Commercial Real Estate Market Report</li>
          <li>REMAX Commercial — Disposition Services Standards</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services &amp; Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">All Services</Link>
            <Link href="/services/investment-sales" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
            <Link href="/markets" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Florida Markets</Link>
            <Link href="/insights/1031-exchange-basics" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">1031 Exchange Basics</Link>
            <Link href="/insights/what-is-a-cap-rate" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Cap Rate Explained</Link>
            <Link href="/calculators/roi" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">ROI Calculator</Link>
            <Link href="/blog/commercial-property-due-diligence-timeline" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Due Diligence Timeline</Link>
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
