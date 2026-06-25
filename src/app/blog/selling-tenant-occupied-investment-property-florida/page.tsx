import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Selling Tenant-Occupied Investment Property in Florida
 * Cash sale vs. traditional listing when you have tenants in place.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Selling Tenant-Occupied Investment Property in Florida | HenCRE",
  description:
    "Tenants complicate investment property sales in Florida. Compare cash buyer vs. traditional listing for tenant-occupied properties — timelines, access, lease obligations, and net proceeds.",
  alternates: { canonical: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida" },
  openGraph: {
    title: "Selling Tenant-Occupied Investment Property in Florida",
    description:
      "How Florida landlords navigate tenant access, lease assignment, and buyer pools when selling occupied investment properties.",
    url: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Florida investment property exterior",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Selling Tenant-Occupied Investment Property in Florida",
  description:
    "Practical guide for Florida landlords navigating the sale of tenant-occupied properties.",
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
  url: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida",
};

const relatedLinks = [
  {
    title: "Tampa Bay Rental Property Exit Strategy",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "When holding costs exceed rental income, here's how to evaluate the exit.",
  },
  {
    title: "Florida Insurance Crisis and Investment Properties",
    href: "/blog/florida-insurance-crisis-investment-properties",
    description: "How surging premiums are reshaping ROI for Tampa Bay landlords.",
  },
  {
    title: "Multifamily Investment in Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "What the 2026 Tampa Bay multifamily market means for buyers and sellers.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "Representing sellers of investment and commercial properties in Tampa Bay.",
  },
];

export default function TenantOccupiedSalePage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Selling Tenant-Occupied Investment Property", href: "/blog/selling-tenant-occupied-investment-property-florida" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
        title="Selling Tenant-Occupied Investment Property in Florida"
        subtitle="Cash buyer versus traditional listing — what changes when tenants are still in the property."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Selling a tenant-occupied investment property in Florida is meaningfully different from
          selling an owner-occupied home. Tenants have legal rights that affect access, closing
          timelines, and your buyer pool. The lease structure — month-to-month versus fixed-term
          — determines your options. And the question of whether to sell with tenants in place or
          wait for vacancy dramatically affects both sale price and speed.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Florida Tenant Rights During a Sale</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Under Florida Statute § 83.57 and § 83.575, tenants have specific rights when a property
          is sold:
        </p>
        <ul className="mt-4 text-[#666666] leading-relaxed list-disc pl-6 space-y-2">
          <li>
            <strong>Fixed-term leases run with the property.</strong> If your tenant has a lease
            through December 2026, the buyer inherits that lease. The tenant does not have to move.
            This limits your buyer pool to investors who want tenants in place or who are willing
            to wait.
          </li>
          <li>
            <strong>Month-to-month tenancies:</strong> You can terminate with 15 days&apos; notice
            (for weekly tenancies) or 30 days&apos; notice (for month-to-month tenancies under one
            year). This gives you more flexibility to sell vacant, but adds 30–60 days to your
            timeline before the property is showable in standard condition.
          </li>
          <li>
            <strong>Access for showings:</strong> Florida landlords must give 12 hours&apos; advance
            notice before entering a leased unit for showings. Tenants are entitled to quiet
            enjoyment and cannot be pressured to cooperate with frequent showings. Uncooperative
            tenants can significantly slow a traditional listing.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Traditional Listing vs. Cash Buyer for Tenant-Occupied Property</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The math on these two paths is different enough that most investment property sellers
          benefit from modeling both before deciding.
        </p>

        <h3 className="mt-8 text-xl font-bold text-black">Traditional Listing (MLS)</h3>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A traditional listing typically achieves the highest gross sale price — but not always
          the highest net. With tenants in place, your buyer pool narrows to investors. Retail
          buyers (owner-occupants) can&apos;t purchase the property unless they are willing to wait
          out the lease. A smaller buyer pool means less competition and a lower final price than
          a vacant, market-ready property would achieve. Additionally, showing coordination,
          tenant cooperation issues, and the time required for investment-buyer financing all
          extend the closing timeline to 60–120 days.
        </p>

        <h3 className="mt-8 text-xl font-bold text-black">Cash Buyer</h3>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cash buyers purchase tenant-occupied investment properties as-is, closing in 14 to 30
          days without showings, loan approval, or tenant cooperation requirements. The offer is
          lower than what a vacant, fully-renovated property would achieve at retail — but after
          removing agent commissions (5–6%), carrying costs during an extended listing, and the
          risk discount a limited buyer pool creates, the net difference often narrows significantly.
          For landlords dealing with deferred maintenance, difficult tenants, or a desire to close
          this calendar year, a cash sale frequently makes more financial sense than the headline
          offer gap suggests.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">When Selling With Tenants in Place Makes Sense</h2>
        <ul className="mt-4 text-[#666666] leading-relaxed list-disc pl-6 space-y-2">
          <li>Long-term tenants paying at or above market rent with solid payment history</li>
          <li>Remaining lease term is attractive to a buyer investor (12+ months)</li>
          <li>Property is in good condition with deferred maintenance already addressed</li>
          <li>You have flexibility on timeline and can manage the showing process</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">When a Cash Sale Makes More Sense</h2>
        <ul className="mt-4 text-[#666666] leading-relaxed list-disc pl-6 space-y-2">
          <li>Tenants are month-to-month but uncooperative with showings</li>
          <li>Property needs repairs that tenants won&apos;t allow access to complete</li>
          <li>You are selling to meet a tax-year deadline or divorce settlement timeline</li>
          <li>Deferred maintenance has accumulated and reduces appeal to investor buyers</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Get a Florida Investment Property Evaluation</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry at REMAX Collective works with investment property owners across Tampa Bay
          on the full sell-side process — from evaluating the listing-versus-cash comparison to
          representing you in a traditional sale or connecting you with qualified cash buyers. Contact
          Barrett at{" "}
          <a href="tel:+18137610133" className="text-accent underline">(813) 761-0133</a> or{" "}
          <a href="/contact" className="text-accent underline">request a free consultation</a>.
        </p>
      </article>

      <CTASection
        heading="Selling a Tenant-Occupied Investment Property?"
        subheading="Get a clear evaluation of your options — listing vs. cash sale — with real numbers for your specific situation."
        primaryCta={{ label: "Talk to Barrett Henry", href: "/contact" }}
        secondaryCta={{ label: "Investment Sales Services", href: "/services/investment-sales" }}
      />

      <RelatedLinks links={relatedLinks} />
    </>
  );
}
