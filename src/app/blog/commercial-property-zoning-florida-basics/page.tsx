import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Commercial Property Zoning Florida Basics
 * Florida zoning explained for CRE tenants and investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Commercial Property Zoning Florida Basics | HenCRE",
  description:
    "Florida commercial property zoning explained — zoning categories, permitted uses, variances, rezoning, and how zoning affects your CRE investment or business.",
  alternates: { canonical: "https://hencre.com/blog/commercial-property-zoning-florida-basics" },
  openGraph: {
    title: "Commercial Property Zoning Florida Basics",
    description:
      "Florida commercial zoning categories, permitted uses, variances, and how zoning affects CRE decisions.",
    url: "https://hencre.com/blog/commercial-property-zoning-florida-basics",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "aerial view of commercial and residential zoning districts",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Commercial Property Zoning Florida Basics",
  description:
    "Florida commercial zoning explained — categories, uses, variances, and impact on CRE decisions.",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
  url: "https://hencre.com/blog/commercial-property-zoning-florida-basics",
};

const relatedLinks = [
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Zoning verification is a critical due diligence step.",
  },
  {
    title: "Office Space Listings",
    href: "/commercial/office-space",
    description: "Browse available office properties across Tampa Bay.",
  },
  {
    title: "Retail Space Listings",
    href: "/commercial/retail-space",
    description: "Browse available retail properties across Tampa Bay.",
  },
  {
    title: "About Barrett Henry",
    href: "/about",
    description: "23+ years of real estate experience in commercial and residential.",
  },
];

export default function ZoningBasicsPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Florida CRE Zoning Basics", href: "/blog/commercial-property-zoning-florida-basics" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1600&h=900&fit=crop"
        title="Commercial Property Zoning Florida Basics"
        subtitle="Zoning determines what you can build, what you can operate, and what your property is worth. Here is what every CRE buyer and tenant needs to know."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Zoning is the system local governments use to regulate how land and buildings can be used. In commercial real estate, zoning determines whether you can open a restaurant, operate a warehouse, build an apartment complex, or run a medical office on a specific parcel. Getting zoning wrong can derail a deal, cost you months of delays, or leave you with a property you cannot use as intended. Understanding the basics before you lease, buy, or develop is essential.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Zoning Work in Florida?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Florida, zoning is controlled at the county and municipal level — not the state level. Each county and city has its own zoning code, land development regulations, and future land use map. This means the zoning rules in <a href="/markets/hillsborough" className="text-accent underline">Hillsborough County</a> are different from those in the City of Tampa, which are different from <a href="/markets/pinellas" className="text-accent underline">Pinellas County</a> or <a href="/markets/pasco" className="text-accent underline">Pasco County</a>. Always verify zoning with the specific jurisdiction — not just the county — where the property is located.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Common Commercial Zoning Categories?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          While exact designations vary by jurisdiction, most Florida municipalities use variations of these commercial zoning categories:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>C-1 / CN (Neighborhood Commercial).</strong> Small-scale retail and services serving surrounding neighborhoods — convenience stores, dry cleaners, small restaurants, professional offices.</li>
          <li><strong>C-2 / CG (General Commercial).</strong> Broader range of commercial uses including larger retail, restaurants, auto services, hotels, and general business operations.</li>
          <li><strong>C-3 / CI (Intensive Commercial).</strong> Higher-intensity commercial uses, sometimes including light industrial, outdoor storage, and uses that generate more traffic or noise.</li>
          <li><strong>I-1 / IL (Light Industrial).</strong> Warehousing, distribution, light manufacturing, and flex space. Limited outdoor storage and processing.</li>
          <li><strong>I-2 / IH (Heavy Industrial).</strong> Manufacturing, processing, heavy equipment, and uses with significant environmental impact.</li>
          <li><strong>PD (Planned Development).</strong> Mixed-use districts with customized zoning that combines commercial, residential, and sometimes industrial uses under a master plan.</li>
          <li><strong>M / MF (Multifamily Residential).</strong> Zones that permit <a href="/commercial/multifamily" className="text-accent underline">apartment buildings</a> and higher-density residential development.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Difference Between Zoning and Future Land Use?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Zoning and future land use (FLU) are related but different. The future land use map is part of the county or city&apos;s comprehensive plan and sets the broad policy for how land should be used long-term. Zoning implements that policy with specific regulations. A property&apos;s zoning must be consistent with its future land use designation. If you want to rezone a property, the FLU designation must support the proposed zoning — otherwise you need a comprehensive plan amendment, which is a longer and more difficult process.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are Permitted, Conditional, and Prohibited Uses?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Within each zoning category, uses fall into three groups:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Permitted uses (by right).</strong> These uses are allowed without special approval. If your business is a permitted use in the zone, you can operate there.</li>
          <li><strong>Conditional uses (special exception).</strong> These require approval from the zoning board or local government, usually with conditions. Common examples include drive-throughs, gas stations, and certain entertainment venues.</li>
          <li><strong>Prohibited uses.</strong> These are not allowed in the zone under any circumstances. Operating a prohibited use can result in fines, shutdown orders, and legal liability.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is a Variance and When Do You Need One?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A variance is an exception to a specific zoning requirement — not the use itself, but requirements like setbacks, building height, parking ratios, or signage size. Variances are granted by local zoning boards when strict compliance creates a hardship. They are not guaranteed and can add weeks or months to your timeline. Common variance requests include reduced parking requirements, increased building height, and reduced setback distances.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Zoning Affect Property Value?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Zoning has a direct impact on commercial property value. A parcel zoned for commercial use is typically worth more than the same parcel zoned residential because it can generate higher income. Within commercial categories, more permissive zoning (allowing a wider range of uses) generally increases value because it provides flexibility for current and future tenants or owners. Properties with zoning that allows higher density — more units, more square footage — are worth more because they can generate more income per acre.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should You Verify Before Buying or Leasing?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before committing to any commercial property, verify these zoning-related items:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>Current zoning designation and permitted uses.</li>
          <li>Future land use designation and consistency with zoning.</li>
          <li>Whether your specific business use is permitted, conditional, or prohibited.</li>
          <li>Any special overlay districts or restrictions (historic, coastal, environmental).</li>
          <li>Setback, height, parking, and signage requirements.</li>
          <li>Any pending zoning changes or comprehensive plan amendments in the area.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This zoning verification is a critical part of your <a href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence process</a>. Do not rely on the seller&apos;s or landlord&apos;s representations — verify directly with the local planning and zoning department.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Zoning is foundational to every commercial real estate decision. It determines what you can do with a property, how much it is worth, and whether your business plan is viable. With 23+ years of real estate experience, I help clients navigate zoning issues across Tampa Bay — from verifying permitted uses to evaluating rezoning potential. Understanding zoning before you commit saves time, money, and headaches.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Need Help With a CRE Zoning Question?"
        body="I help tenants, buyers, and investors understand how zoning affects their commercial real estate decisions across Tampa Bay."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
