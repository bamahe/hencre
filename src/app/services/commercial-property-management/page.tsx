import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";

/* -------------------------------------------------------------------
 * Commercial Property Management — pillar/hub page.
 * Covers full-service CRE property management across Florida.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Property Management Florida | Full-Service CRE",
  description:
    "Full-service commercial property management across Florida. Tenant relations, maintenance, financial reporting, lease admin, and vacancy marketing. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/commercial-property-management" },
  openGraph: {
    title: "Commercial Property Management Florida | Full-Service CRE Management",
    description:
      "Professional commercial property management for office, retail, industrial, and multifamily properties across all 67 Florida counties.",
    url: "https://hencre.com/services/commercial-property-management",
  },
};

/* -- Sub-page links for the hub navigation -- */
const SUB_PAGES = [
  {
    title: "Tenant Relations & Retention",
    href: "/services/commercial-property-management/tenant-relations",
    description: "Communication strategies, lease renewals, dispute resolution, and retention programs that reduce costly tenant turnover.",
  },
  {
    title: "Maintenance & Operations",
    href: "/services/commercial-property-management/maintenance-operations",
    description: "Preventive maintenance programs, vendor management, emergency repairs, and Florida-specific property care including hurricane preparedness.",
  },
  {
    title: "Financial Reporting & Accounting",
    href: "/services/commercial-property-management/financial-reporting",
    description: "Monthly owner reports, rent roll management, CAM reconciliation, operating budgets, and tax documentation — all in one place.",
  },
  {
    title: "Lease Administration",
    href: "/services/commercial-property-management/lease-administration",
    description: "Critical date tracking, tenant compliance monitoring, insurance certificates, estoppel preparation, and lease audits.",
  },
  {
    title: "Vacancy Marketing & Tenant Placement",
    href: "/services/commercial-property-management/vacancy-marketing",
    description: "Multi-channel marketing on LoopNet, CoStar, Crexi, and broker networks. Tenant screening, LOI negotiation, and lease execution.",
  },
];

/* -- FAQ data for schema and display -- */
const FAQS = [
  {
    question: "What does commercial property management cost in Florida?",
    answer: "Commercial property management fees typically range from 4% to 8% of gross collected rents, depending on property type, size, and complexity. Larger portfolios often negotiate lower percentage rates. Some managers also charge leasing commissions, maintenance markups, or project management fees for capital improvements.",
  },
  {
    question: "Do I need a property manager if I only own one commercial building?",
    answer: "Yes, even single-building owners benefit from professional management. Commercial tenants expect responsive management, and a single vacancy or deferred maintenance issue can cost more than years of management fees. Professional managers also keep you compliant with Florida Statute 83 (Part II) and local building codes.",
  },
  {
    question: "What types of commercial properties does Barrett Henry manage?",
    answer: "Barrett manages office buildings, retail centers, industrial and warehouse properties, multifamily complexes with five or more units, and mixed-use developments across all 67 Florida counties. Each property type requires specialized knowledge of tenant expectations, maintenance standards, and lease structures.",
  },
  {
    question: "How does CRE property management differ from residential?",
    answer: "Commercial management involves longer and more complex leases (often NNN or modified gross), CAM reconciliation, tenant improvement negotiations, higher-value maintenance systems (commercial HVAC, fire suppression, ADA compliance), and financial reporting standards that match institutional investor expectations. The stakes and complexity are significantly higher.",
  },
  {
    question: "Can you take over management of a property with existing tenants?",
    answer: "Absolutely. Barrett handles management transitions regularly. The process includes a full lease audit, property condition assessment, tenant introduction letters, vendor contract review, and financial account setup. Most transitions complete within 30 to 60 days with zero disruption to tenants.",
  },
  {
    question: "How do you handle emergency maintenance after hours?",
    answer: "Barrett provides 24/7 emergency response through a dedicated maintenance line. Pre-vetted vendors are on standby for critical systems including plumbing, electrical, HVAC, and fire suppression. Every emergency call is documented with photos and a written report delivered to the owner within 24 hours.",
  },
  {
    question: "What financial reports will I receive as a property owner?",
    answer: "Owners receive monthly income and expense statements, rent roll summaries, accounts receivable aging reports, and maintenance logs. Quarterly reports add budget variance analysis and market comparisons. Annual packages include CAM reconciliation, capital improvement summaries, and tax-ready documentation.",
  },
  {
    question: "Do you handle lease renewals and rent escalations?",
    answer: "Yes. Barrett tracks every critical lease date — renewal options, escalation triggers, termination rights, and option exercise deadlines. Proactive lease renewal negotiations typically begin 9 to 12 months before expiration, giving owners time to evaluate market conditions and negotiate from a position of strength.",
  },
];

/* -- Schema: BreadcrumbList + Service + FAQPage -- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://hencre.com/services" },
        { "@type": "ListItem", position: 3, name: "Commercial Property Management", item: "https://hencre.com/services/commercial-property-management" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Property Management",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Full-service commercial property management across Florida — tenant relations, maintenance, financial reporting, lease administration, and vacancy marketing for office, retail, industrial, and multifamily properties.",
      areaServed: { "@type": "State", name: "Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function CommercialPropertyManagementPage() {
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
          <li className="font-semibold text-black" aria-current="page">Commercial Property Management</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Property Management in Florida"
        subtitle="Full-service CRE management for office, retail, industrial, multifamily, and mixed-use properties. One point of contact. Complete accountability."
        ctaText="Get a Management Proposal"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial property management covers every aspect of operating a CRE asset — from tenant relations and lease administration to maintenance, financial reporting, and vacancy marketing. Professional management protects property value, maximizes net operating income, and frees owners from day-to-day operational demands.
          </p>
        </div>
      </section>

      {/* ---- What Does CRE PM Include ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Does Commercial Property Management Include?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Commercial property management is a comprehensive service that handles every operational, financial, and tenant-facing aspect of a commercial real estate asset. Unlike residential property management, CRE management demands specialized knowledge of complex lease structures, institutional-grade financial reporting, and commercial building systems that residential managers never encounter.
          </p>
          <p>
            At its core, commercial property management encompasses five pillars: <Link href="/services/commercial-property-management/tenant-relations" className="font-semibold text-black underline">tenant relations and retention</Link>, <Link href="/services/commercial-property-management/maintenance-operations" className="font-semibold text-black underline">maintenance and operations</Link>, <Link href="/services/commercial-property-management/financial-reporting" className="font-semibold text-black underline">financial reporting and accounting</Link>, <Link href="/services/commercial-property-management/lease-administration" className="font-semibold text-black underline">lease administration</Link>, and <Link href="/services/commercial-property-management/vacancy-marketing" className="font-semibold text-black underline">vacancy marketing and tenant placement</Link>.
          </p>
          <p>
            Each pillar requires dedicated attention. A missed lease renewal deadline can cost an owner tens of thousands of dollars. A deferred HVAC replacement can cascade into tenant complaints, lease terminations, and lost revenue. Professional management catches these issues before they become expensive problems.
          </p>
        </div>
      </section>

      {/* ---- Property types table ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Types of Properties Need Professional Management?</h2>
          <p className="mt-4 text-lg text-[#666666]">
            Every commercial property type has unique management requirements. The table below breaks down the key management focus areas by property type. Barrett handles all of these across Florida.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Property Type</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Key Management Focus</th>
                  <th className="py-3 text-left font-bold text-black">Typical Lease Structure</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/commercial/office-space" className="underline">Office</Link></td>
                  <td className="py-3 pr-4">Tenant retention, HVAC systems, common area upkeep, parking management</td>
                  <td className="py-3">Full-service gross or modified gross</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/commercial/retail-space" className="underline">Retail</Link></td>
                  <td className="py-3 pr-4">Curb appeal, signage compliance, co-tenancy, CAM reconciliation</td>
                  <td className="py-3">NNN (triple net)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/commercial/industrial-warehouse" className="underline">Industrial</Link></td>
                  <td className="py-3 pr-4">Loading dock maintenance, roof integrity, environmental compliance</td>
                  <td className="py-3">NNN or modified gross</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/commercial/multifamily" className="underline">Multifamily (5+ units)</Link></td>
                  <td className="py-3 pr-4">Unit turnover, resident satisfaction, amenity management, rent collection</td>
                  <td className="py-3">Standard residential lease (commercial management)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Mixed-Use</td>
                  <td className="py-3 pr-4">Balancing retail and office tenant needs, shared utility allocation</td>
                  <td className="py-3">Varies by tenant type</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- CRE vs Residential ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">How Does CRE Property Management Differ from Residential?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Residential and commercial property management share the same name but operate in fundamentally different worlds. Commercial leases run 3 to 15 years with complex escalation clauses, CAM reconciliation requirements, and tenant improvement allowances that residential managers never handle. According to the Institute of Real Estate Management (IREM), commercial property managers must understand financial analysis, capital planning, and building systems at an institutional level.
          </p>
          <p>
            The financial reporting alone sets CRE apart. Commercial owners — whether individual investors or institutional funds — expect monthly income statements, rent roll tracking, accounts receivable aging, budget variance analysis, and annual CAM reconciliation. Residential owners typically receive a rent deposit and an expense summary.
          </p>
          <p>
            Maintenance complexity also differs dramatically. Commercial buildings involve fire suppression systems, commercial HVAC units, ADA compliance, environmental regulations, and building automation systems. In Florida, commercial properties also face hurricane preparedness requirements under the Florida Building Code that go well beyond residential standards.
          </p>
        </div>

        {/* -- Comparison table: CRE vs Residential -- */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-3 pr-4 text-left font-bold text-black">Factor</th>
                <th className="py-3 pr-4 text-left font-bold text-black">Commercial Management</th>
                <th className="py-3 text-left font-bold text-black">Residential Management</th>
              </tr>
            </thead>
            <tbody className="text-[#666666]">
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 font-semibold text-black">Lease Length</td>
                <td className="py-3 pr-4">3-15 years</td>
                <td className="py-3">12 months typical</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 font-semibold text-black">Lease Complexity</td>
                <td className="py-3 pr-4">NNN, gross, modified gross, percentage rent</td>
                <td className="py-3">Standard residential lease</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 font-semibold text-black">Financial Reporting</td>
                <td className="py-3 pr-4">Monthly P&amp;L, CAM reconciliation, capital budgets</td>
                <td className="py-3">Monthly rent deposit statement</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 font-semibold text-black">Maintenance</td>
                <td className="py-3 pr-4">Commercial HVAC, fire suppression, ADA, elevators</td>
                <td className="py-3">Residential appliances and systems</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 pr-4 font-semibold text-black">Tenant Screening</td>
                <td className="py-3 pr-4">Business financials, credit, references, use compatibility</td>
                <td className="py-3">Personal credit and rental history</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Mid-article CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg font-semibold text-white">
            Call Barrett directly at{" "}
            <a href="tel:+18137337907" className="underline text-white">
              (813) 733-7907
            </a>{" "}
            to discuss your property management needs.
          </p>
        </div>
      </section>

      {/* ---- What to expect ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Should You Expect from a Commercial Property Manager in Florida?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida presents unique challenges for commercial property management. Hurricane season (June through November) demands robust emergency preparedness plans, and the state&apos;s humidity and heat accelerate wear on building systems. According to the Florida Division of Emergency Management, commercial building owners are required to maintain emergency action plans that address evacuation, utility shutoffs, and post-storm damage assessment.
          </p>
          <p>
            A competent commercial property manager in Florida should deliver transparent financial reporting on a monthly cadence, maintain a network of licensed and insured vendors, enforce lease compliance without damaging tenant relationships, and proactively communicate with owners about market conditions, capital needs, and operational issues. You should never have to chase your property manager for information.
          </p>
          <p>
            Florida Statute 475 requires property managers to hold an active real estate license and maintain trust accounting for all funds handled on behalf of property owners. The Florida Real Estate Commission (FREC) regulates these accounts and conducts periodic audits. Working with a licensed REALTOR{"\u00AE"} like Barrett ensures your management engagement meets every legal and fiduciary standard.
          </p>
        </div>
      </section>

      {/* ---- Barrett's approach ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Does Barrett Henry Handle Commercial Property Management?</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Barrett brings 23+ years of real estate experience to commercial property management. As a REALTOR{"\u00AE"} and Commercial Real Estate Advisor at REMAX Collective, Barrett integrates property management with REMAX Commercial&apos;s leasing and <Link href="/services/investment-sales" className="font-semibold text-black underline">investment sales</Link> services — giving owners a single point of contact for operations, leasing, and disposition strategy.
            </p>
            <p>
              This integrated approach matters. When a tenant vacates, Barrett does not just list the space and wait. He activates <Link href="/services/commercial-property-management/vacancy-marketing" className="font-semibold text-black underline">vacancy marketing</Link> through LoopNet, CoStar, Crexi, and the REMAX Commercial broker network simultaneously. When a lease renewal approaches, he combines <Link href="/services/commercial-property-management/lease-administration" className="font-semibold text-black underline">lease administration</Link> data with current market analysis from his <Link href="/services/cre-valuation" className="font-semibold text-black underline">CRE valuation</Link> practice to negotiate terms that reflect true market value.
            </p>
            <p>
              Barrett serves property owners across all 67 Florida counties, with offices in Tampa, Largo, and Brandon. Whether you own a single retail pad or a portfolio of office buildings, you get direct access to Barrett — not a call center, not a junior associate.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Sub-page navigation grid ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Property Management Services</h2>
        <p className="mt-2 text-lg text-[#666666]">Explore each area of commercial property management in detail.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUB_PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg border border-[#E5E5E5] bg-white p-6 no-underline transition-shadow hover:shadow-lg hover:no-underline"
            >
              <h3 className="text-lg font-bold text-black group-hover:text-black">{page.title}</h3>
              <p className="mt-2 text-sm text-[#666666]">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-black">{faq.question}</h3>
                <p className="mt-2 text-[#666666]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>Institute of Real Estate Management (IREM) — <em>Principles of Real Estate Management</em></li>
          <li>Florida Statute 475 — Real Estate Brokerage Licensing and Trust Accounting</li>
          <li>Florida Statute 83, Part II — Florida Residential Landlord and Tenant Act</li>
          <li>Florida Division of Emergency Management — Commercial Building Emergency Preparedness Guidelines</li>
          <li>Florida Building Code — Hurricane and High Wind Design Requirements</li>
          <li>Building Owners and Managers Association (BOMA) — <em>Standard Methods of Measurement and Best Practices for Operations</em></li>
        </ul>
      </section>

      {/* ---- Lead form ---- */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- CTA with phone ---- */}
      <CTASection
        heading="Let Barrett Manage Your Commercial Property"
        body="Call Barrett at (813) 733-7907 for a free management proposal. No obligation, no pressure — just a straightforward conversation about your property."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
            <Link href="/services/tenant-representation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Representation</Link>
            <Link href="/services/investment-sales" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Investment Sales</Link>
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
          </div>
        </div>
      </section>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
