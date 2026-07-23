import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * Landlord Leasing — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Landlord Leasing Florida | Fill Vacancies Faster",
  description:
    "Landlord leasing services across Florida. Barrett Henry markets your commercial property, screens tenants, and negotiates leases that protect your investment. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/landlord-leasing" },
  openGraph: {
    title: "Landlord Leasing | REMAX Commercial Real Estate",
    description:
      "Fill commercial vacancies faster with qualified tenants. Strategic marketing and lease negotiation across Florida.",
    url: "https://hencre.com/services/landlord-leasing",
  },
};

/* -- FAQ data -- */
const FAQS = [
  {
    question: "How long does it take to lease commercial space?",
    answer: "Leasing timelines vary by property type and market conditions. Well-positioned retail or office space in high-demand submarkets can lease within 30 to 60 days. Specialized or larger spaces may take 90 to 180 days. Barrett&apos;s aggressive marketing approach targets the shortest possible timeline.",
  },
  {
    question: "What marketing do you use to fill vacancies?",
    answer: "Barrett uses a multi-channel approach: listings on LoopNet, CoStar, and Crexi, direct outreach to active tenant reps, broker network activation through REMAX Commercial, signage, and targeted email campaigns to qualified prospects in your submarket.",
  },
  {
    question: "How do you determine the right asking rent?",
    answer: "Barrett conducts a comparable rent analysis pulling recent lease comps from the submarket. He factors in property condition, location advantages, concession packages, and current vacancy rates to set an asking rent that maximizes income while attracting qualified tenants quickly.",
  },
  {
    question: "Do you handle tenant screening?",
    answer: "Yes. Barrett screens prospective tenants for business financial health, credit history, operational track record, and use compatibility with the property and existing tenant mix. Only qualified prospects make it to the LOI stage.",
  },
  {
    question: "What types of commercial properties do you lease?",
    answer: "Barrett leases all commercial property types — office, retail, industrial, warehouse, flex, medical office, and mixed-use — across all 67 Florida counties. He is anchored in Tampa Bay with offices in Tampa, Largo, and Brandon.",
  },
  {
    question: "What lease terms should landlords focus on protecting?",
    answer: "The most important lease protections for landlords are rent escalation clauses, personal guarantees from business owners, permitted-use restrictions, early termination penalties, and clear default and cure provisions. Barrett structures leases that protect your income stream and minimize exposure if a tenant fails.",
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
        { "@type": "ListItem", position: 3, name: "Landlord Leasing", item: "https://hencre.com/services/landlord-leasing" },
      ],
    },
    {
      "@type": "Service",
      name: "Landlord Leasing",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      description: "Commercial landlord leasing — property marketing, tenant screening, lease negotiation, and vacancy reduction across Florida.",
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

export default function LandlordLeasingPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Landlord Leasing", href: "/services/landlord-leasing" }]} />

      <Hero
        title="Landlord Leasing"
        subtitle="Fill vacancies faster with qualified tenants. I market, screen, and negotiate so your property performs."
        ctaText="List Your Space"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Landlord leasing is the process of marketing vacant commercial space, qualifying tenants, and negotiating lease terms on behalf of the property owner. Vacant commercial space costs landlords real money every month in taxes, insurance, and debt service with zero income to offset it — making fast, professional leasing critical to protecting net operating income.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Vacancy Costs You Money Every Day</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            With 23+ years of real estate experience, Barrett Henry knows exactly how much every vacant day costs a commercial landlord. As a REMAX Commercial broker, he leverages the largest real estate network in the world to fill your vacancies faster. Every month your commercial space sits empty, you are paying carrying costs with zero income. Taxes, insurance, maintenance, and debt service do not pause because the space is vacant. You need a broker who treats your vacancy with the same urgency you feel.
          </p>
          <p>
            Barrett creates a leasing strategy tailored to your property — competitive pricing based on real market data, professional marketing materials, and targeted outreach to active tenants and tenant reps in the market. He does not just post your listing and wait. He works the phones, taps his network, and drives qualified prospects to your door.
          </p>
          <p>
            When prospects show interest, Barrett handles showings, qualifies tenants, negotiates LOIs, and works through lease execution. He structures terms that protect your interests — favorable escalations, appropriate TI exposure, personal guarantees when warranted, and clear default provisions.
          </p>
        </div>
      </section>

      {/* ---- Image 1: Commercial property ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75"
          alt="Commercial office building available for lease in Florida"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett leases commercial properties across all Florida markets, including <Link href="/markets/hillsborough" className="underline">Hillsborough</Link>, <Link href="/markets/pinellas" className="underline">Pinellas</Link>, and <Link href="/markets/pasco" className="underline">Pasco</Link> counties.</p>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who This Is For</h2>
          <ul className="mt-6 grid gap-4 text-[#666666] sm:grid-cols-2">
            {[
              "Commercial property owners with vacant space",
              "Investors who need professional leasing representation",
              "Property management companies seeking leasing support",
              "Landlords with expiring leases who need renewals or replacements",
              "Owners of multi-tenant properties with ongoing turnover",
              "Developers with newly constructed commercial space",
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
              { step: "Property Assessment", desc: "Barrett tours your property, reviews financials, and assesses market positioning." },
              { step: "Pricing Strategy", desc: "Comp analysis to set competitive asking rent and concession packages." },
              { step: "Marketing Launch", desc: "Professional materials, online listings, broker outreach, and sign installation." },
              { step: "Prospect Qualification", desc: "Barrett screens tenants for creditworthiness and business viability." },
              { step: "Negotiation", desc: "LOI drafting, term negotiation, and TI/concession structuring." },
              { step: "Lease Execution", desc: "Attorney coordination through executed lease and tenant onboarding." },
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

      {/* ---- Image 2: Business meeting / lease signing ---- */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=75"
          alt="Commercial lease negotiation and tenant representation meeting"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett negotiates leases for all property types — <Link href="/commercial/retail-space" className="underline">retail</Link>, <Link href="/commercial/office-space" className="underline">office</Link>, and <Link href="/commercial/industrial-warehouse" className="underline">industrial</Link> — across Florida.</p>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stop Losing Money to Vacancy
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let Barrett put a leasing plan together for your property. Free consultation.
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

      {/* ---- Vacancy cost comparison table ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Does Vacancy Really Cost?</h2>
          <p className="mt-4 text-[#666666]">These are the typical carrying costs landlords face during vacancy periods — costs that continue regardless of whether a tenant is paying rent.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Expense Category</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Typical Annual Cost</th>
                  <th className="py-3 text-left font-bold text-black">Impact of Vacancy</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Property Taxes</td>
                  <td className="py-3 pr-4">$2-$8/SF</td>
                  <td className="py-3">Paid regardless of occupancy</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Insurance</td>
                  <td className="py-3 pr-4">$1-$3/SF</td>
                  <td className="py-3">Required even when vacant</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Maintenance</td>
                  <td className="py-3 pr-4">$1-$4/SF</td>
                  <td className="py-3">Deferred maintenance reduces value</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Debt Service</td>
                  <td className="py-3 pr-4">Varies</td>
                  <td className="py-3">Mortgage payments continue regardless</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[#666666]">Understanding your true vacancy cost — and understanding <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">how CAM charges and lease structures work</Link> — helps Barrett price your space competitively while protecting your net income. For <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN-leased properties</Link>, the calculation is even more direct: every vacant month is pure carrying cost with no offset.</p>
        </div>
      </section>

      {/* ---- Image 3: Florida commercial corridor ---- */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&auto=format&fit=crop&q=75"
          alt="Florida commercial real estate corridor showing retail and office buildings"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Barrett serves landlords in <Link href="/markets/hillsborough" className="underline">Tampa Bay</Link>, <Link href="/markets/sarasota" className="underline">Sarasota</Link>, <Link href="/markets/manatee" className="underline">Manatee</Link>, and all 67 Florida counties.</p>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Landlord Leasing — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>CBRE Research — U.S. Commercial Real Estate Vacancy and Leasing Trends</li>
          <li>National Association of REALTORS — Commercial Real Estate Market Report</li>
          <li>CoStar Group — Florida Market Analytics</li>
          <li>REMAX Commercial — Leasing Services Standards</li>
        </ul>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services &amp; Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">All Services</Link>
            <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Representation</Link>
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/services/commercial-property-management" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Property Management</Link>
            <Link href="/markets/hillsborough" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Hillsborough Market</Link>
            <Link href="/markets/pinellas" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Pinellas Market</Link>
            <Link href="/insights/nnn-lease-explained" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">NNN Lease Explained</Link>
            <Link href="/blog/understanding-cam-charges-tenants-guide" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CAM Charges Guide</Link>
            <Link href="/calculators/cap-rate" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Cap Rate Calculator</Link>
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
