import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";

/* -------------------------------------------------------------------
 * Maintenance & Operations — sub-page under Commercial PM.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Property Maintenance & Operations FL",
  description:
    "Preventive maintenance, vendor management, and emergency repairs for commercial properties in Florida. Hurricane-ready operations. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/commercial-property-management/maintenance-operations" },
  openGraph: {
    title: "Commercial Property Maintenance & Operations | Florida CRE",
    description:
      "Professional maintenance and operations management for office, retail, industrial, and multifamily properties across Florida.",
    url: "https://hencre.com/services/commercial-property-management/maintenance-operations",
  },
};

const FAQS = [
  {
    question: "How often should commercial HVAC systems be serviced in Florida?",
    answer: "In Florida's subtropical climate, commercial HVAC systems should be serviced quarterly at minimum. ASHRAE recommends monthly filter changes and quarterly coil cleaning for systems running year-round. Units older than 15 years should have bi-annual comprehensive inspections to catch refrigerant leaks, compressor wear, and ductwork deterioration before they cause failures.",
  },
  {
    question: "What is a preventive maintenance program for commercial properties?",
    answer: "A preventive maintenance program is a scheduled system of inspections, servicing, and component replacements designed to prevent equipment failures and extend asset life. According to BOMA, properties with active preventive maintenance programs experience 30% to 40% fewer emergency repair incidents and extend major system life by 20% to 30%.",
  },
  {
    question: "How does Barrett handle emergency repairs after hours?",
    answer: "Barrett provides 24/7 emergency response through a dedicated maintenance line. Pre-vetted, licensed, and insured vendors are on call for plumbing, electrical, HVAC, fire suppression, and structural emergencies. Every emergency is documented with photos and a written report delivered to the owner within 24 hours.",
  },
  {
    question: "What Florida-specific maintenance issues should commercial property owners know about?",
    answer: "Florida's climate creates unique challenges: hurricane preparedness (shutters, drainage, generator testing), mold prevention from year-round humidity, pest control for termites and palmetto bugs, flat roof maintenance under heavy rain loads, and salt air corrosion for coastal properties. Barrett builds all of these into every maintenance program.",
  },
  {
    question: "How do you manage vendor relationships for commercial properties?",
    answer: "Barrett maintains a vetted vendor network with competitive pricing agreements. Every vendor carries required insurance and licensing. Barrett solicits multiple bids for projects over $2,500, negotiates pricing, verifies work quality, and handles all payment processing. Owners never deal with vendor coordination directly.",
  },
  {
    question: "What is capital improvement planning and why does it matter?",
    answer: "Capital improvement planning forecasts major expenditures — roof replacement, HVAC system upgrades, parking lot resurfacing, elevator modernization — over a 5 to 10 year horizon. This prevents surprise expenses, allows owners to budget reserves, and maintains property value. Barrett prepares capital plans as part of every management engagement.",
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
        { "@type": "ListItem", position: 3, name: "Commercial Property Management", item: "https://hencre.com/services/commercial-property-management" },
        { "@type": "ListItem", position: 4, name: "Maintenance & Operations", item: "https://hencre.com/services/commercial-property-management/maintenance-operations" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Property Maintenance & Operations",
      provider: { "@id": "https://hencre.com/#agent" },
      description: "Preventive maintenance programs, vendor management, emergency repairs, and capital improvement planning for commercial properties across Florida.",
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

export default function MaintenanceOperationsPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services" className="hover:underline no-underline">Services</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/services/commercial-property-management" className="hover:underline no-underline">Commercial Property Management</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Maintenance &amp; Operations</li>
        </ol>
      </nav>

      <Hero
        title="Commercial Property Maintenance & Operations"
        subtitle="Preventive programs, vetted vendors, 24/7 emergency response. Florida-ready building operations."
        ctaText="Request a Maintenance Audit"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Commercial property maintenance and operations management includes preventive maintenance scheduling, vendor coordination, emergency repairs, capital improvement planning, and Florida-specific concerns like hurricane preparedness and mold prevention. Properties with active preventive programs experience 30-40% fewer emergency incidents.
          </p>
        </div>
      </section>

      {/* ---- Why preventive maintenance matters ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Why Is Preventive Maintenance Critical for Commercial Properties?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Reactive maintenance — fixing things after they break — is the most expensive way to operate a commercial building. According to BOMA, preventive maintenance programs reduce emergency repair costs by 30% to 40% and extend the useful life of major building systems by 20% to 30%. For a 50,000 SF office building, that translates to tens of thousands of dollars saved annually.
          </p>
          <p>
            Barrett builds preventive maintenance into every <Link href="/services/commercial-property-management" className="font-semibold text-black underline">commercial property management</Link> engagement. Each property receives a customized maintenance calendar based on system age, manufacturer recommendations, Florida climate factors, and the specific needs of the building&apos;s tenants.
          </p>
          <p>
            Beyond cost savings, preventive maintenance directly impacts <Link href="/services/commercial-property-management/tenant-relations" className="font-semibold text-black underline">tenant satisfaction and retention</Link>. Tenants expect working HVAC, clean common areas, and functioning elevators. When these systems fail repeatedly, tenants start looking for better-managed space — and that vacancy costs far more than any maintenance program.
          </p>
        </div>
      </section>

      {/* ---- Maintenance schedule table ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What Does a Commercial Maintenance Schedule Look Like?</h2>
          <p className="mt-4 text-lg text-[#666666]">
            The following table outlines Barrett&apos;s standard preventive maintenance schedule for commercial properties in Florida. Schedules are adjusted based on building age, system condition, and property type.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Building System</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Frequency</th>
                  <th className="py-3 text-left font-bold text-black">Key Tasks</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">HVAC</td>
                  <td className="py-3 pr-4">Monthly / Quarterly</td>
                  <td className="py-3">Filter changes (monthly), coil cleaning, refrigerant check, belt inspection (quarterly)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Roof</td>
                  <td className="py-3 pr-4">Semi-annually + post-storm</td>
                  <td className="py-3">Membrane inspection, drain clearing, flashing check, post-hurricane assessment</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Plumbing</td>
                  <td className="py-3 pr-4">Quarterly</td>
                  <td className="py-3">Drain cleaning, fixture inspection, backflow prevention testing, water heater service</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Electrical</td>
                  <td className="py-3 pr-4">Annually</td>
                  <td className="py-3">Panel inspection, emergency lighting test, generator load test, surge protector check</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Fire Suppression</td>
                  <td className="py-3 pr-4">Quarterly / Annually</td>
                  <td className="py-3">Extinguisher inspection (quarterly), sprinkler system test, alarm panel inspection (annually)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Parking Lot</td>
                  <td className="py-3 pr-4">Semi-annually</td>
                  <td className="py-3">Crack sealing, striping, drainage inspection, lighting check, ADA compliance review</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Elevator</td>
                  <td className="py-3 pr-4">Monthly</td>
                  <td className="py-3">Vendor contract service, safety inspection, permit renewal coordination</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Pest Control</td>
                  <td className="py-3 pr-4">Monthly</td>
                  <td className="py-3">Perimeter treatment, interior inspection, termite monitoring stations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Mid-article CTA ---- */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg font-semibold text-white">
            Call Barrett directly at{" "}
            <a href="tel:+18137337907" className="underline text-white">(813) 733-7907</a>{" "}
            to discuss your property management needs.
          </p>
        </div>
      </section>

      {/* ---- Florida-specific ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">What Florida-Specific Maintenance Challenges Should Owners Know?</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            Florida&apos;s climate creates maintenance challenges that property managers in northern states never face. According to the Florida Building Code, commercial properties must meet specific wind load and impact resistance standards. Hurricane preparedness is not optional — it is a building code requirement.
          </p>
          <p>
            Barrett&apos;s Florida-specific maintenance programs address: hurricane preparedness (shutter installation, drainage clearing, generator testing before each season), mold prevention through humidity monitoring and HVAC dehumidification, termite protection with annual WDO inspections, flat roof maintenance under heavy tropical rain loads, and salt air corrosion monitoring for coastal properties.
          </p>
          <p>
            Capital improvement planning also accounts for Florida-specific timelines. Commercial roofs in Florida typically last 15 to 20 years (shorter than northern climates due to UV exposure), HVAC units run 20% harder due to year-round cooling demand, and parking lots require more frequent sealing due to heat expansion. Barrett factors all of this into 5 and 10-year capital budgets prepared as part of <Link href="/services/commercial-property-management/financial-reporting" className="font-semibold text-black underline">financial reporting</Link> for every managed property.
          </p>
        </div>
      </section>

      {/* ---- Vendor management ---- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Does Barrett Manage Vendors and Contractors?</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              Vendor management is one of the highest-value functions of commercial property management. Barrett maintains a vetted network of licensed, insured contractors across every trade — HVAC, plumbing, electrical, roofing, janitorial, landscaping, and specialty services. Every vendor carries minimum insurance requirements and is evaluated annually on quality, response time, and pricing.
            </p>
            <p>
              For projects exceeding $2,500, Barrett solicits a minimum of three competitive bids, reviews scope and pricing with the owner, and manages the project through completion with documented inspections. This process protects owners from overpaying and ensures work meets commercial building standards.
            </p>
            <p>
              Vendor relationships are especially critical in <Link href="/services/commercial-property-management/lease-administration" className="font-semibold text-black underline">lease administration</Link>, where tenant improvement projects must be coordinated with lease terms, build-out timelines, and occupancy dates.
            </p>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-black">{faq.question}</h3>
              <p className="mt-2 text-[#666666]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>Building Owners and Managers Association (BOMA) — <em>Preventive Maintenance Guidelines for Commercial Buildings</em></li>
          <li>ASHRAE — <em>HVAC Maintenance and Operations Standards</em></li>
          <li>Florida Building Code — Wind Load and Impact Resistance Requirements</li>
          <li>Florida Division of Emergency Management — Hurricane Preparedness for Commercial Properties</li>
        </ul>
      </section>

      {/* ---- Lead form ---- */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CTASection
        heading="Need a Maintenance Program for Your Property?"
        body="Call Barrett at (813) 733-7907 for a free maintenance audit. Identify deferred maintenance, plan capital improvements, and protect your investment."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/commercial-property-management" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Property Management Overview</Link>
            <Link href="/services/commercial-property-management/financial-reporting" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Financial Reporting</Link>
            <Link href="/services/commercial-property-management/tenant-relations" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Relations</Link>
            <Link href="/services/dispositions" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Dispositions</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
