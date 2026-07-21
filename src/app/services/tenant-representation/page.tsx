import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";

/* -------------------------------------------------------------------
 * Tenant Representation — service detail page.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tenant Representation Florida | Free Market Survey",
  description:
    "Expert tenant representation across Florida. Barrett Henry negotiates your commercial lease so you get the right space at the best terms. Free market survey. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/services/tenant-representation" },
  openGraph: {
    title: "Tenant Representation | REMAX Commercial Real Estate",
    description:
      "Find the right commercial space at the right terms. Expert tenant rep across all 67 Florida counties.",
    url: "https://hencre.com/services/tenant-representation",
  },
};

/* -- FAQ data -- */
const FAQS = [
  {
    question: "How much does tenant representation cost?",
    answer: "In most commercial lease transactions, the landlord pays the brokerage commission. Your tenant rep typically costs you nothing directly. The landlord builds this cost into the deal, so you benefit from professional representation at no out-of-pocket expense.",
  },
  {
    question: "How long does it take to find commercial space?",
    answer: "Most tenant searches take 60 to 120 days from initial requirements through lease execution. Complex searches involving build-to-suit or specialized space can take longer. Barrett sets a realistic timeline during the discovery phase so you can plan accordingly.",
  },
  {
    question: "What is the difference between tenant rep and a listing agent?",
    answer: "A tenant rep works exclusively for you, the tenant. A listing agent works for the landlord. Using a tenant rep ensures someone is negotiating on your behalf, analyzing lease economics, and protecting your interests — not the landlord's.",
  },
  {
    question: "Can a tenant rep help with lease renewals?",
    answer: "Yes. Barrett negotiates lease renewals with the same rigor as new leases. Before renewing, he analyzes current market rents to ensure you are not overpaying, and negotiates improved terms on escalations, TI allowances, and options.",
  },
  {
    question: "What areas does Barrett cover for tenant representation?",
    answer: "Barrett covers markets across Florida including Hillsborough, Pinellas, Pasco, Hernando, Manatee, Sarasota, and Polk counties. For deals outside his core market, he leverages the REMAX Commercial network to connect you with a local specialist.",
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

export default function TenantRepPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Tenant Representation", href: "/services/tenant-representation" }]} />

      <Hero
        title="Tenant Representation"
        subtitle="Find the right space at the right terms. I negotiate on your behalf so you can focus on running your business."
        ctaText="Start Your Search"
        ctaHref="/contact"
      />

      {/* ---- QuickAnswer ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-black bg-gray-50 p-6">
          <p className="text-lg font-semibold text-black">Quick Answer</p>
          <p className="mt-2 text-[#666666]">
            Tenant representation is a commercial real estate service where a broker works exclusively for the tenant — finding space, analyzing lease economics, and negotiating terms. According to the Society of Industrial and Office Realtors (SIOR), tenants with professional representation save an average of 10-15% on total occupancy costs compared to those who negotiate directly with landlords.
          </p>
        </div>
      </section>

      {/* ---- Service description ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Your Space, Your Terms</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            As a Broker Associate at REMAX Collective with 23+ years of real estate experience, Barrett brings market expertise to every tenant representation engagement in Florida. Finding{" "}
            <Link href="/commercial/office-space" className="text-accent underline">office</Link>,{" "}
            <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>, or{" "}
            <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial space</Link>{" "}
            is not like browsing Zillow. You need a broker who understands your business requirements, knows the local market, and can negotiate lease terms that protect your bottom line.
          </p>
          <p>
            Barrett starts by understanding your needs: square footage, location, budget, build-out requirements, timeline, and growth plans. Then he conducts a comprehensive market survey across{" "}
            <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>,{" "}
            <Link href="/markets/pinellas" className="text-accent underline">Pinellas</Link>,{" "}
            <Link href="/markets/pasco" className="text-accent underline">Pasco</Link>, and other Florida counties, identifying on-market and off-market options that fit. He schedules tours, analyzes lease economics including{" "}
            <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">CAM charges</Link>{" "}
            and total occupancy cost, and presents a side-by-side comparison for informed decision-making.
          </p>
          <p>
            Once you pick a space, Barrett drafts and negotiates the letter of intent (LOI), pushes for favorable terms on rent, escalations, TI allowance, and concessions, and coordinates with attorneys through lease execution. You sign a lease knowing you got the best deal available.
          </p>
          <p>
            The best part? In most commercial lease transactions, the landlord pays the brokerage commission. Barrett's services as your tenant rep typically cost you nothing directly.
          </p>
        </div>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
            alt="Modern commercial office space interior representing tenant representation and site selection in Florida"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Barrett evaluates office, retail, and industrial spaces to find the right fit for your business requirements, budget, and growth plans.</p>
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

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
              alt="Commercial tenant and broker reviewing lease terms and negotiation strategy"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
            <p className="mt-2 text-sm text-[#666666] italic">Understanding{" "}
              <Link href="/blog/how-commercial-leases-differ-from-residential" className="text-accent underline">how commercial leases differ from residential</Link>{" "}
              is essential — Barrett guides tenants through the economics before they sign.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Why Barrett ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Work with Barrett</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
            <p>
              With 23+ years of real estate experience, Barrett knows what fair market rents look like across Florida, which landlords negotiate and which do not, and how to structure terms that save you real money over the life of a lease. Read the{" "}
              <Link href="/blog/5-mistakes-first-time-commercial-tenants-make" className="text-accent underline">5 mistakes first-time commercial tenants make</Link>{" "}
              to understand what's at stake in a lease negotiation.
            </p>
            <p>
              When you call Barrett, you get Barrett — not a team of juniors. One broker, full attention, from first call to move-in day.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop"
              alt="Commercial real estate broker walking tenant through potential office space during site tour"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
            <p className="mt-2 text-sm text-[#666666] italic">Site tours are more than a walkthrough — Barrett evaluates each space against your business requirements, lease economics, and long-term growth plans.</p>
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
            Tell Barrett what you need. He will start the market survey and get back to you within one business day.
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

      {/* ---- Lease type comparison table ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How Do Commercial Lease Types Compare?</h2>
          <p className="mt-4 text-[#666666]">
            According to the Building Owners and Managers Association (BOMA), understanding lease structure is critical to calculating total occupancy cost. Here is how the most common commercial lease types compare.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 pr-4 text-left font-bold text-black">Lease Type</th>
                  <th className="py-3 pr-4 text-left font-bold text-black">Tenant Pays</th>
                  <th className="py-3 text-left font-bold text-black">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[#666666]">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Full-Service Gross</td>
                  <td className="py-3 pr-4">Base rent only (landlord covers all expenses)</td>
                  <td className="py-3">Office tenants seeking predictable costs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Modified Gross</td>
                  <td className="py-3 pr-4">Base rent + some expenses (varies by negotiation)</td>
                  <td className="py-3">Flex/industrial tenants</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black"><Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="underline">NNN (Triple Net)</Link></td>
                  <td className="py-3 pr-4">Base rent + taxes + insurance + CAM</td>
                  <td className="py-3">Retail tenants, standalone buildings</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-semibold text-black">Percentage Rent</td>
                  <td className="py-3 pr-4">Base rent + percentage of gross sales above threshold</td>
                  <td className="py-3">High-traffic retail locations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- FAQ section ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Tenant Representation — Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---- Sources ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Sources</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-sm text-[#666666]">
          <li>Society of Industrial and Office Realtors (SIOR) — Tenant Representation Best Practices</li>
          <li>Building Owners and Managers Association (BOMA) — Standard Methods of Measurement</li>
          <li>National Association of REALTORS — Commercial Real Estate Outlook Report</li>
          <li>REMAX Commercial — Commercial Services Standards</li>
        </ul>
      </section>

      {/* ---- Related services ---- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-lg font-bold text-black">Related Services and Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/landlord-leasing" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Landlord Leasing</Link>
            <Link href="/services/cre-valuation" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">CRE Valuation</Link>
            <Link href="/commercial/office-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Office Space</Link>
            <Link href="/commercial/retail-space" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Retail Space</Link>
            <Link href="/blog/understanding-cam-charges-tenants-guide" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Understanding CAM Charges</Link>
            <Link href="/blog/how-commercial-leases-differ-from-residential" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Commercial vs. Residential Leases</Link>
            <Link href="/blog/5-mistakes-first-time-commercial-tenants-make" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Tenant Leasing Mistakes to Avoid</Link>
            <Link href="/markets/hillsborough" className="rounded-lg border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-gray-50 hover:no-underline">Hillsborough County Market</Link>
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
