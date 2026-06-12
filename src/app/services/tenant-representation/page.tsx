import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Tenant Representation — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tenant Representation | REMAX Commercial Real Estate",
  description:
    "Expert tenant representation across Florida. Barrett Henry negotiates your commercial lease so you get the right space at the best terms. Free market survey.",
  openGraph: {
    title: "Tenant Representation | REMAX Commercial Real Estate",
    description:
      "Find the right commercial space at the right terms. Expert tenant rep across all 67 Florida counties.",
    url: "https://hencre.com/services/tenant-representation",
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
        { "@type": "ListItem", position: 3, name: "Tenant Representation", item: "https://hencre.com/services/tenant-representation" },
      ],
    },
    {
      "@type": "Service",
      name: "Tenant Representation",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Commercial tenant representation — market surveys, site selection, lease negotiation, and move-in coordination across Florida.",
      areaServed: { "@type": "State", name: "Florida" },
    },
  ],
};

export default function TenantRepPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Tenant Representation</li>
        </ol>
      </nav>

      <Hero
        title="Tenant Representation"
        subtitle="Find the right space at the right terms. I negotiate on your behalf so you can focus on running your business."
        ctaText="Start Your Search"
        ctaHref="/contact"
      />

      {/* ---- Service description ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Your Space, Your Terms</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            As a REMAX Commercial® broker, Barrett brings global network resources to every tenant representation engagement in Florida. Finding commercial space is not like browsing Zillow. You need a broker who
            understands your business requirements, knows the local market, and can
            negotiate lease terms that protect your bottom line. That is tenant
            representation — and it is one of the highest-value services I offer.
          </p>
          <p>
            I start by understanding your needs: square footage, location, budget,
            build-out requirements, timeline, and growth plans. Then I conduct a
            comprehensive market survey, identifying on-market and off-market options
            that fit. I schedule tours, analyze lease economics, and present you with a
            side-by-side comparison so you can make an informed decision.
          </p>
          <p>
            Once you pick a space, I draft and negotiate the letter of intent (LOI),
            push for favorable terms on rent, escalations, TI allowance, and
            concessions, and coordinate with attorneys through lease execution. You
            sign a lease knowing you got the best deal available.
          </p>
          <p>
            The best part? In most commercial lease transactions, the landlord pays the
            brokerage commission. My services as your tenant rep typically cost you
            nothing directly.
          </p>
        </div>
      </section>

      {/* ---- Who it's for ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Business owners looking for office, retail, or warehouse space",
              "Companies relocating to or within Florida",
              "Franchisees opening new locations",
              "Medical practices needing specialized build-outs",
              "Growing businesses that have outgrown their current space",
              "Startups looking for their first commercial location",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-black font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- The process ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">The Process</h2>
          <ol className="mt-8 space-y-6">
            {[
              { step: "Discovery", desc: "We discuss your space requirements, budget, timeline, and must-haves." },
              { step: "Market Survey", desc: "I compile available options — on-market and off-market — with detailed analysis." },
              { step: "Site Tours", desc: "We tour the top candidates. I point out things you would not notice on your own." },
              { step: "Financial Analysis", desc: "Side-by-side lease comparison with total occupancy cost projections." },
              { step: "LOI & Negotiation", desc: "I draft the LOI and negotiate rent, TI, concessions, and lease terms." },
              { step: "Lease Execution", desc: "Attorney coordination, final review, and execution. You move in." },
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

      {/* ---- Why Barrett ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Work with Me</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              I bring 23+ years of real estate experience to every tenant engagement.
              I know what fair market rents look like across Florida, I know which
              landlords negotiate and which do not, and I know how to structure terms
              that save you real money over the life of a lease.
            </p>
            <p>
              When you call me, you get me — not a team of juniors. One broker, full
              attention, from first call to move-in day.
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Find Your Space?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me what you need. I will start the market survey and get back to you
            within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              Contact Barrett
            </Link>
            <a
              href="tel:+18137337907"
              className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
            >
              Call (813) 733-7907
            </a>
          </div>
        </div>
      </section>

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
          </div>
        </div>
      </section>
    </>
  );
}
