import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Investment Sales — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Investment Sales | REMAX Commercial® Florida",
  description:
    "Buy or sell income-producing commercial real estate in Florida. Barrett Henry provides data-driven investment analysis, deal sourcing, and negotiation for investors and family offices.",
  openGraph: {
    title: "Investment Sales | REMAX Commercial® Florida",
    description:
      "Acquire income-producing properties or sell at peak value. Data-driven CRE investment services across Florida.",
    url: "https://hencre.com/services/investment-sales",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "Investment Sales", item: "https://hencre.com/services/investment-sales" },
      ],
    },
    {
      "@type": "Service",
      name: "Investment Sales",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Commercial investment property acquisition and disposition — deal sourcing, financial analysis, and negotiation.",
      areaServed: { "@type": "State", name: "Florida" },
    },
  ],
};

export default function InvestmentSalesPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Investment Sales</li>
        </ol>
      </nav>

      <Hero
        title="Investment Sales"
        subtitle="Acquire income-producing properties or sell at peak value. Data-driven analysis for confident decisions."
        ctaText="Discuss an Investment"
        ctaHref="/contact"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Smart Acquisitions. Strategic Exits.</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            As a REMAX Commercial® agent, Barrett brings global market reach and deep analytical expertise to every investment transaction. Commercial real estate investing is about numbers — but the right numbers
            require the right market intelligence. A 7% cap rate in one submarket is a
            steal; in another, it is overpriced. I bring the local context that
            spreadsheets cannot provide.
          </p>
          <p>
            For buyers, I source on-market and off-market opportunities that match your
            investment criteria. I build detailed pro formas projecting cash flow, debt
            service, and returns over your hold period. When we identify a target, I
            negotiate purchase terms, coordinate due diligence, and manage the process
            through closing.
          </p>
          <p>
            For sellers, I position your property to attract the right buyer pool. That
            means accurate pricing based on comparable sales and income analysis,
            professional marketing materials, and targeted outreach to active buyers
            and brokers. I create competitive tension to drive the best possible price
            and terms.
          </p>
          <p>
            Whether you are acquiring your first investment property, adding to a
            portfolio, or executing a 1031 exchange under tight deadlines, I have the
            experience and network to deliver results across Florida.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Individual investors building or diversifying a portfolio",
              "Family offices seeking stable cash-flow assets",
              "1031 exchange buyers under identification deadlines",
              "Syndicators and fund managers",
              "Business owners acquiring owner-occupied properties",
              "Out-of-state investors entering the Florida market",
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
              { step: "Investment Criteria", desc: "We define your target: property type, geography, cap rate range, budget, and hold period." },
              { step: "Deal Sourcing", desc: "I search on-market listings, off-market leads, and my broker network for matching opportunities." },
              { step: "Financial Analysis", desc: "Detailed pro formas with projected cash flow, returns, and debt service coverage." },
              { step: "Offer & Negotiation", desc: "I draft the LOI or purchase contract and negotiate price, terms, and contingencies." },
              { step: "Due Diligence", desc: "Environmental, title, survey, tenant estoppels, and financial verification coordinated." },
              { step: "Closing", desc: "I manage the timeline and stakeholders through a clean closing." },
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

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Invest — or Exit?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me your investment goals and I will identify the right opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline">
              Contact Barrett
            </Link>
            <a href="tel:+18137337907" className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline">
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/commercial/nnn-net-lease" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN / Net Lease</Link>
            <Link href="/commercial/multifamily" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Multifamily</Link>
          </div>
        </div>
      </section>
    </>
  );
}
