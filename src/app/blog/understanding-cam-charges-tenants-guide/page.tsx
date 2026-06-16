import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Understanding CAM Charges — A Tenant's Guide
 * Common area maintenance charges explained for commercial tenants.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Understanding CAM Charges | A Tenant's Guide | HenCRE",
  description:
    "CAM charges add thousands to your annual rent. Learn what common area maintenance fees cover, how they are calculated, and how to negotiate CAM caps in your lease.",
  alternates: { canonical: "https://hencre.com/blog/understanding-cam-charges-tenants-guide" },
  openGraph: {
    title: "Understanding CAM Charges: A Tenant's Guide",
    description:
      "What CAM charges cover, how they are calculated, and how to negotiate CAM caps in your commercial lease.",
    url: "https://hencre.com/blog/understanding-cam-charges-tenants-guide",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "modern commercial building exterior with landscaped common area",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Understanding CAM Charges: A Tenant's Guide",
  description:
    "What CAM charges cover, how they are calculated, and how to negotiate better terms.",
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
  url: "https://hencre.com/blog/understanding-cam-charges-tenants-guide",
};

const relatedLinks = [
  {
    title: "CAM Charges Explained",
    href: "/insights/cam-charges-explained",
    description: "In-depth breakdown of CAM fee structures and calculations.",
  },
  {
    title: "Gross vs. Net Lease",
    href: "/insights/gross-vs-net-lease",
    description: "Compare lease types and who pays what.",
  },
  {
    title: "How Commercial Leases Differ From Residential",
    href: "/blog/how-commercial-leases-differ-from-residential",
    description: "Key differences every business owner should know.",
  },
  {
    title: "Tenant Representation",
    href: "/services/tenant-representation",
    description: "How a broker helps you negotiate better lease terms.",
  },
];

export default function CAMChargesGuidePage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Understanding CAM Charges", href: "/blog/understanding-cam-charges-tenants-guide" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
        title="Understanding CAM Charges: A Tenant's Guide"
        subtitle="That 'additional rent' line on your lease? It can add 30 to 50 percent to your base rent. Here is what you are actually paying for."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Common area maintenance charges — usually called CAM — are one of the most misunderstood costs in commercial real estate. If you are leasing <a href="/commercial/retail-space" className="text-accent underline">retail</a>, <a href="/commercial/office-space" className="text-accent underline">office</a>, or <a href="/commercial/industrial-warehouse" className="text-accent underline">industrial space</a>, understanding CAM is essential because it directly affects your total occupancy cost. Many tenants focus on base rent during negotiations and overlook CAM charges — a mistake that can cost thousands of dollars per year.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Do CAM Charges Actually Cover?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <a href="/insights/cam-charges-explained" className="text-accent underline">CAM charges</a> cover the costs of maintaining and operating the common areas of a commercial property — the spaces shared by all tenants and their customers. Typical CAM expenses include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Parking lot maintenance.</strong> Repaving, restriping, lighting, and cleaning.</li>
          <li><strong>Landscaping.</strong> Lawn care, irrigation, tree trimming, and seasonal plantings.</li>
          <li><strong>Exterior maintenance.</strong> Building facade, signage, sidewalks, and common area repairs.</li>
          <li><strong>Utilities for common areas.</strong> Exterior lighting, hallway HVAC in multi-tenant buildings, elevator operation.</li>
          <li><strong>Snow removal and storm cleanup.</strong> Less relevant in Florida, but storm debris removal after hurricanes can be significant.</li>
          <li><strong>Security.</strong> Common area surveillance, patrol services, and access control systems.</li>
          <li><strong>Management fees.</strong> The property management company&apos;s fee for administering the property, typically 3 to 6 percent of gross rents.</li>
          <li><strong>Insurance.</strong> In some lease structures, building insurance is included in CAM rather than billed separately.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Are CAM Charges Calculated?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM charges are typically calculated on a pro rata basis — your share of the total CAM expenses is proportional to the percentage of the building&apos;s total leasable square footage that you occupy.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Example: If the total building is 20,000 square feet and you lease 2,000 square feet, your pro rata share is 10 percent. If total annual CAM expenses are $60,000, your share is $6,000 per year, or $500 per month on top of your base rent.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM is usually billed monthly as an estimate, with an annual reconciliation. At year-end, the landlord compares actual expenses to the estimates collected and either bills you for the difference or issues a credit.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is a CAM Cap and Why Should You Negotiate One?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A CAM cap limits how much your CAM charges can increase each year — typically 3 to 5 percent annually. Without a cap, your CAM charges can spike if the landlord undertakes major capital improvements, hires a more expensive management company, or if insurance costs jump (a real concern in Florida).
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Negotiating a CAM cap is one of the most important lease provisions for tenants. It gives you budget predictability and protects against unexpected cost increases. Some landlords resist caps, but a good <a href="/services/tenant-representation" className="text-accent underline">tenant representative</a> can usually negotiate one, especially in competitive leasing markets.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Be Excluded From CAM?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not all property expenses should be passed through to tenants as CAM. Watch for these items that should typically be excluded:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Capital expenditures.</strong> Roof replacements, structural repairs, and major building systems should be the landlord&apos;s responsibility, not CAM. Some landlords try to amortize these through CAM — push back.</li>
          <li><strong>Leasing costs.</strong> Broker commissions, tenant improvement allowances, and marketing costs for vacant space are the landlord&apos;s cost of doing business.</li>
          <li><strong>Landlord&apos;s legal and accounting fees.</strong> Unless they directly benefit tenants, these should not be in CAM.</li>
          <li><strong>Expenses for vacant spaces.</strong> The landlord should not increase your pro rata share because other spaces are vacant.</li>
          <li><strong>Landlord&apos;s financing costs.</strong> Mortgage payments, refinancing costs, and debt service are never appropriate CAM charges.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do You Audit CAM Charges?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Your lease should include an audit right — the ability to review the landlord&apos;s CAM expense records. Most tenants never exercise this right, but audits frequently uncover overcharges. Common issues include expenses charged to CAM that should be excluded, mathematical errors in pro rata calculations, and expenses billed to your property that belong to another property owned by the same landlord.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are in a multi-tenant property paying more than $5,000 annually in CAM, an audit is worth considering, especially if your year-end reconciliation shows significant increases from the estimates.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Do CAM Charges Differ by Property Type?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM structures vary by property type. <a href="/commercial/retail-space" className="text-accent underline">Retail</a> properties in shopping centers typically have the highest CAM charges due to extensive parking lots, landscaping, and common area maintenance. <a href="/commercial/office-space" className="text-accent underline">Office buildings</a> include elevator maintenance, lobby upkeep, and common restroom maintenance. <a href="/commercial/industrial-warehouse" className="text-accent underline">Industrial properties</a> tend to have lower CAM charges because common areas are minimal. Understanding the <a href="/insights/gross-vs-net-lease" className="text-accent underline">lease structure</a> — gross, net, or NNN — determines how CAM is handled.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM charges are a significant component of your total occupancy cost and deserve as much attention as base rent during lease negotiations. Understanding what is included, negotiating a cap, excluding inappropriate expenses, and exercising your audit rights can save you thousands over the life of your lease. With 23+ years of real estate experience, I help tenants understand and negotiate CAM provisions that protect their bottom line.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Confused by CAM Charges on Your Lease?"
        body="I review lease terms and negotiate CAM provisions for tenants across Tampa Bay. Tenant representation is typically free — the landlord pays the broker fee."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
