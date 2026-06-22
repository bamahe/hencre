import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";
import OfficeSpaceCalculator from "./OfficeSpaceCalculator";

/* -------------------------------------------------------------------
 * Office Space Calculator Page
 * Employees + Style + Amenities → SF estimate + Tampa Bay lease rates.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Office Space Calculator | How Much Space Do You Need?",
  description:
    "Estimate how much office space your business needs based on headcount, layout, and amenities. Includes Tampa Bay lease rate estimates. Free tool from Barrett Henry, REMAX Commercial. (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/calculators/office-space" },
  openGraph: {
    title: "Office Space Calculator | Square Footage Estimator",
    description:
      "Calculate how much office space your team needs. Includes Tampa Bay average lease rates by building class.",
    url: "https://hencre.com/calculators/office-space",
  },
};

/* -- BreadcrumbList schema -- */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hencre.com/calculators" },
    { "@type": "ListItem", position: 3, name: "Office Space Calculator", item: "https://hencre.com/calculators/office-space" },
  ],
};

/* -- FAQPage schema -- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much office space do I need per employee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The general rule is 100-150 square feet per employee for open-plan offices, 200-300 square feet for private offices, and 150-200 square feet for hybrid layouts. These figures include individual workstation space but not shared amenities like conference rooms, break rooms, or reception areas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does office space cost in Tampa Bay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tampa Bay office lease rates vary by building class and submarket. As of mid-2026, Class A office space averages around $38/SF/year, Class B around $26/SF/year, and Class C around $18/SF/year on a NNN basis. Westshore, downtown Tampa, and downtown St. Petersburg command premium rates.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between usable and rentable square footage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usable square footage is the actual space within your office walls. Rentable square footage includes your usable space plus a proportional share of common areas (lobbies, hallways, restrooms). The difference is the load factor, typically 10-20% in multi-tenant buildings. You pay rent on the rentable number.",
      },
    },
  ],
};

export default function OfficeSpacePage() {
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          { label: "Office Space Calculator", href: "/calculators/office-space" },
        ]}
      />

      {/* Page content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Office Space Calculator — How Much Space Does Your Business Need?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          One of the first questions I get from business owners starting a space search is
          &quot;how much room do we actually need?&quot; Too small and your team is crammed.
          Too big and you are bleeding rent on empty square footage. This calculator gives you
          a solid starting estimate based on your headcount, preferred workspace layout, and
          the amenities your team needs. I have also included current Tampa Bay lease rate
          averages so you can start budgeting before we even tour the first building.
        </p>

        {/* Calculator component */}
        <div className="mt-10">
          <OfficeSpaceCalculator />
        </div>

        {/* Educational content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">What Factors Affect How Much Office Space You Need?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            Square footage per employee is just the starting point. Several factors influence your true space requirement:
          </p>
          <ul className="mt-3 space-y-2 text-[#666666] list-disc list-inside">
            <li><strong>Work style</strong> — remote-heavy teams need less dedicated desk space but more collaboration areas</li>
            <li><strong>Growth plans</strong> — lease terms run 3-7 years; plan for where your headcount will be at lease end</li>
            <li><strong>Client-facing needs</strong> — law firms and financial advisors need more premium reception and meeting space</li>
            <li><strong>Equipment</strong> — medical offices, labs, and creative studios have specialized space requirements</li>
            <li><strong>Building load factor</strong> — rentable SF is 10-20% more than usable SF in multi-tenant buildings</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">What Is NNN vs. Full-Service Lease Pricing?</h2>
          <p className="mt-3 text-[#666666] leading-relaxed">
            The lease rates shown above are <strong>NNN (triple net)</strong>, meaning you pay base rent plus your proportional share
            of property taxes, insurance, and common area maintenance (CAM). In a <strong>full-service gross lease</strong>, those
            expenses are bundled into the base rent — typically $8-12/SF higher than NNN. Always compare lease types
            apples-to-apples when evaluating options. I break this down for every client during the site selection process.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Office Space FAQ</h2>
          <dl className="mt-6 space-y-6">
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">How much office space do I need per employee?</dt>
              <dd className="mt-2 text-[#666666]">
                The general rule is 100-150 square feet per employee for open-plan offices, 200-300 square feet
                for private offices, and 150-200 square feet for hybrid layouts. These figures include individual
                workstation space but not shared amenities.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">How much does office space cost in Tampa Bay?</dt>
              <dd className="mt-2 text-[#666666]">
                Tampa Bay office lease rates vary by building class. Class A averages ~$38/SF/year, Class B ~$26/SF/year,
                and Class C ~$18/SF/year on a NNN basis. Westshore, downtown Tampa, and downtown St. Petersburg
                command premium rates.
              </dd>
            </div>
            <div className="border-b border-[#E5E5E5] pb-6">
              <dt className="text-lg font-semibold text-black">What is the difference between usable and rentable square footage?</dt>
              <dd className="mt-2 text-[#666666]">
                Usable square footage is the space within your office walls. Rentable square footage adds your
                proportional share of common areas (lobbies, hallways, restrooms). The load factor is typically
                10-20%. You pay rent on the rentable number.
              </dd>
            </div>
          </dl>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">More CRE Calculators</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/calculators/cap-rate" className="text-black font-semibold no-underline hover:underline">
                Cap Rate Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/calculators/commercial-mortgage" className="text-black font-semibold no-underline hover:underline">
                Commercial Mortgage Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/calculators/roi" className="text-black font-semibold no-underline hover:underline">
                Commercial Property ROI Calculator &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services/tenant-representation" className="text-black font-semibold no-underline hover:underline">
                Tenant Representation Services &rarr;
              </Link>
            </li>
            <li>
              <Link href="/commercial/office-space" className="text-black font-semibold no-underline hover:underline">
                Office Space in Florida &rarr;
              </Link>
            </li>
          </ul>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Start Your Office Search?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Once you know how much space you need, let me find the right building. Market surveys,
            site tours, and lease negotiation — all handled.
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
    </>
  );
}
