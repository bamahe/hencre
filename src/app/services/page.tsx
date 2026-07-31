import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";

/* -------------------------------------------------------------------
 * Services Index — overview of all 6 CRE service areas.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Services Florida | REMAX Commercial Brokerage",
  description:
    "Full-service commercial real estate brokerage: tenant rep, landlord leasing, investment sales, dispositions, CRE valuation, and property management. Barrett Henry serving all 67 FL counties. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services" },
  openGraph: {
    title: "CRE Services | REMAX Commercial Real Estate",
    description:
      "Tenant rep, landlord leasing, investment sales, dispositions, valuation, and property management. Full-service CRE across Florida.",
    url: "https://hencre.com/services",
  },
};

const SERVICES = [
  {
    title: "Tenant Representation",
    href: "/services/tenant-representation",
    description:
      "I find the right space and negotiate your lease so you can focus on running your business. Market surveys, site tours, lease analysis, and negotiation. All handled.",
    who: "Business owners, relocating companies, expanding franchises",
  },
  {
    title: "Landlord Leasing",
    href: "/services/landlord-leasing",
    description:
      "Fill vacancies faster with qualified tenants. I position your property competitively, market it to the right audience, and negotiate leases that protect your investment.",
    who: "Property owners, investors, property managers",
  },
  {
    title: "Investment Sales",
    href: "/services/investment-sales",
    description:
      "Whether you are buying your first investment property or adding to a portfolio, I provide data-driven analysis and negotiation to maximize your returns.",
    who: "Investors, family offices, 1031 exchange buyers",
  },
  {
    title: "Dispositions",
    href: "/services/dispositions",
    description:
      "When it is time to sell, I position your property for maximum value. Strategic pricing, targeted marketing, and deal structuring that delivers results.",
    who: "Owners ready to exit, portfolio rebalancers, estate trustees",
  },
  {
    title: "CRE Valuation",
    href: "/services/cre-valuation",
    description:
      "Broker opinion of value, comparable sales analysis, and market positioning. Know exactly what your property is worth before you make a move.",
    who: "Owners, investors, lenders, estate planners",
  },
  {
    title: "Commercial Property Management",
    href: "/services/commercial-property-management",
    description:
      "Full-service CRE management: tenant relations, maintenance, financial reporting, lease administration, and vacancy marketing. One point of contact for your entire operation.",
    who: "Property owners, investors, portfolio managers",
  },
] as const;

const faqItems = [
  {
    question: "What commercial real estate services does Barrett Henry offer?",
    answer:
      "Barrett Henry offers six core CRE services: tenant representation (finding and negotiating commercial space for businesses), landlord leasing (filling vacancies with qualified tenants), investment sales (acquisition and portfolio strategy), dispositions (selling commercial assets for maximum value), CRE valuation (broker opinions of value and comp analysis), and commercial property management (ongoing management from lease admin to maintenance). All services are available across all 67 Florida counties.",
  },
  {
    question: "How much does tenant representation cost?",
    answer:
      "In most commercial lease transactions, the landlord pays the brokerage commission. As your tenant representative, I negotiate on your behalf at no direct cost to you. My incentive is aligned with yours. Better terms for you means a better deal all around. There is no charge for the initial consultation.",
  },
  {
    question: "Can Barrett Henry help with both leasing and investment sales?",
    answer:
      "Yes. Unlike brokers who specialize in only one side of the market, I handle the full spectrum of commercial transactions, from finding a business its first office lease to acquiring a portfolio of NNN net lease investments. 23+ years of real estate experience across property types means I can advise on the strategic questions that go beyond any single transaction.",
  },
  {
    question: "What markets does Barrett Henry serve?",
    answer:
      "Barrett serves all 67 Florida counties. His core market is Tampa Bay, with offices in Tampa, Largo, and Brandon covering Hillsborough, Pinellas, Pasco, Polk, Manatee, Sarasota, Hernando, and Citrus counties directly. For commercial transactions elsewhere in Florida, including Broward County, Collier County, Brevard County, Alachua County, and beyond, Barrett coordinates referrals through the REMAX Commercial network to connect clients with the right local specialist.",
  },
  {
    question: "What property types does Barrett specialize in?",
    answer:
      "Barrett works across all major commercial property types: office space (Class A, B, and C), retail (strip centers, pad sites, outparcels), industrial and warehouse (distribution, flex, manufacturing), multifamily (5+ unit apartments and complexes), NNN net lease investments, and land for commercial and industrial development. He also handles specialty assets on a case-by-case basis through the REMAX Commercial network.",
  },
  {
    question: "How do I get started working with Barrett?",
    answer:
      "Call (813) 733-7907 or fill out the contact form at hencre.com/contact. Describe your situation: whether you are looking for space, trying to sell a property, or evaluating an investment. Barrett will respond within one business day with an honest assessment of how he can help. No hard sell, no obligation.",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
      ],
    },
    {
      "@type": "Service",
      provider: {
        "@type": "RealEstateAgent",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
        telephone: "+1-813-733-7907",
        email: "barrett@hencre.com",
        url: "https://hencre.com",
      },
      name: "Commercial Real Estate Services, Florida",
      description:
        "Full-service CRE brokerage across Florida including tenant representation, landlord leasing, investment sales, dispositions, valuation, and property management.",
      areaServed: { "@type": "State", name: "Florida" },
      dateModified: "2026-07-31",
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

export default function ServicesIndexPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <Hero
        title="Commercial Real Estate Services"
        subtitle="Full-service CRE brokerage, from first showing to closing table. Here is how I help."
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* ---- Intro ---- */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-4 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate
          experience. He handles the full range of commercial real estate services across
          Florida, from finding a business its first{" "}
          <Link href="/commercial/office-space" className="font-semibold text-black underline">
            office space
          </Link>{" "}
          or{" "}
          <Link href="/commercial/retail-space" className="font-semibold text-black underline">
            retail location
          </Link>{" "}
          to executing complex{" "}
          <Link href="/commercial/nnn-net-lease" className="font-semibold text-black underline">
            NNN net lease
          </Link>{" "}
          acquisitions and managing{" "}
          <Link href="/commercial/industrial-warehouse" className="font-semibold text-black underline">
            industrial warehouse
          </Link>{" "}
          portfolios. Markets served include{" "}
          <Link href="/markets/hillsborough" className="font-semibold text-black underline">
            Hillsborough
          </Link>
          ,{" "}
          <Link href="/markets/pinellas" className="font-semibold text-black underline">
            Pinellas
          </Link>
          ,{" "}
          <Link href="/markets/pasco" className="font-semibold text-black underline">
            Pasco
          </Link>
          ,{" "}
          <Link href="/markets/polk" className="font-semibold text-black underline">
            Polk
          </Link>
          , and{" "}
          <Link href="/markets" className="font-semibold text-black underline">
            all 67 Florida counties
          </Link>.
          Have investment-related questions? See the{" "}
          <Link href="/insights" className="font-semibold text-black underline">
            CRE insights hub
          </Link>{" "}
          or try the{" "}
          <Link href="/calculators" className="font-semibold text-black underline">
            cap rate and ROI calculators
          </Link>.
        </p>
      </section>

      {/* ---- Services grid ---- */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {SERVICES.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group rounded-lg border border-[#E5E5E5] bg-white p-8 no-underline transition-shadow hover:shadow-lg hover:no-underline"
            >
              <h2 className="text-xl font-bold text-black group-hover:text-black">
                {svc.title}
              </h2>
              <p className="mt-3 text-[#666666]">{svc.description}</p>
              <p className="mt-4 text-sm font-semibold text-black">
                Best for: {svc.who}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          CRE Services: Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>

      {/* ---- CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell me about your situation and I will point you in the right direction.
            No obligation, no pressure. Call{" "}
            <a href="tel:+18137337907" className="underline text-white">(813) 733-7907</a>.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              Contact Barrett
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
