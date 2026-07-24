import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: CAM Charges Explained
 * Evergreen explainer — common area maintenance for CRE tenants.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CAM Charges Explained | What Tenants Need to Know",
  description:
    "Learn what CAM charges are, what they typically include, how they are calculated, and how to negotiate them in your commercial lease. Florida broker insight.",
  alternates: { canonical: "https://hencre.com/insights/cam-charges-explained" },
  openGraph: {
    title: "CAM Charges Explained: What Commercial Tenants Need to Know",
    description:
      "Learn what CAM charges are, what they typically include, how they are calculated, and how to negotiate them in your commercial lease.",
    url: "https://hencre.com/insights/cam-charges-explained",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What are CAM charges in commercial real estate?",
    answer:
      "CAM stands for Common Area Maintenance. These are charges passed through to tenants to cover the cost of maintaining shared spaces in a commercial property, such as parking lots, landscaping, exterior lighting, and common hallways.",
  },
  {
    question: "How are CAM charges calculated?",
    answer:
      "CAM charges are typically calculated based on your proportionate share of the total leasable area. If you lease 3,000 square feet in a 30,000-square-foot building, you pay 10% of the total CAM expenses. These are usually estimated monthly and reconciled annually against actual costs.",
  },
  {
    question: "Can you negotiate CAM charges?",
    answer:
      "Yes. You can negotiate annual CAM increase caps, exclude certain expense categories (like capital improvements), request audit rights, and define exactly what qualifies as a CAM expense. Having a broker review your lease before signing helps protect you from unexpected cost increases.",
  },
  {
    question: "What is a CAM cap?",
    answer:
      "A CAM cap limits how much your CAM charges can increase from year to year, usually expressed as a percentage. For example, a 5% annual CAM cap means your CAM charges cannot increase more than 5% over the prior year, regardless of actual expense increases.",
  },
  {
    question: "Are CAM charges higher in Florida than in other states?",
    answer:
      "Florida CAM charges often include costs less common in colder climates — hurricane preparedness, storm drainage maintenance, and intensive irrigation for year-round landscaping. Florida also has elevated property insurance costs that may be passed through as NNN or CAM expenses. Tenants should request a detailed CAM breakdown before signing any Florida commercial lease.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://hencre.com/insights" },
        { "@type": "ListItem", position: 3, name: "CAM Charges Explained", item: "https://hencre.com/insights/cam-charges-explained" },
      ],
    },
    {
      "@type": "Article",
      headline: "CAM Charges Explained: What Commercial Tenants Need to Know",
      description:
        "Learn what CAM charges are, what they typically include, how they are calculated, and how to negotiate them in your commercial lease.",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      datePublished: "2026-06-10",
      dateModified: "2026-07-24",
      image: "https://hencre.com/og-image.png",
      publisher: {
        "@type": "Organization",
        name: "REMAX Commercial Real Estate",
        url: "https://hencre.com",
        logo: { "@type": "ImageObject", url: "https://hencre.com/icon-512.png" },
      },
      url: "https://hencre.com/insights/cam-charges-explained",
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

const relatedLinks = [
  {
    title: "NNN Leases Explained",
    href: "/insights/nnn-lease-explained",
    description: "Triple net leases and how they structure expense responsibility.",
  },
  {
    title: "Gross vs. Net Lease Structures",
    href: "/insights/gross-vs-net-lease",
    description: "Compare lease types and their impact on your total occupancy cost.",
  },
  {
    title: "Leasing vs. Buying Commercial Space",
    href: "/insights/leasing-vs-buying-commercial",
    description: "Decision framework for lease vs. purchase.",
  },
  {
    title: "5 Mistakes First-Time Commercial Tenants Make",
    href: "/blog/5-mistakes-first-time-commercial-tenants-make",
    description: "Avoid the most common tenant missteps.",
  },
];

export default function CAMChargesPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: "CAM Charges Explained", href: "/insights/cam-charges-explained" },
        ]}
      />

      <Hero
        title="CAM Charges Explained"
        subtitle="Common area maintenance charges can make or break your occupancy budget. Here is what they really cover and how to keep them in check."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          One of the most frequent surprises I see with first-time commercial tenants is the CAM bill. You negotiate your base rent, sign the lease, and then discover your total monthly cost is significantly higher than you expected. As a Broker Associate at REMAX Collective with 23+ years of real estate experience, I have helped tenants across <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>, <Link href="/markets/pinellas" className="text-accent underline">Pinellas County</Link>, and <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link> navigate CAM charges. Understanding exactly what they cover and how to negotiate them can save you thousands over the life of your lease.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What CAM Charges Cover</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM charges cover the shared expenses of operating and maintaining the common areas of a commercial property. These are spaces that benefit all tenants but are not part of any individual tenant&apos;s leased suite. Typical CAM expenses include:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Parking lot maintenance</strong> — repaving, striping, pothole repair, sweeping</li>
          <li><strong>Landscaping</strong> — lawn care, irrigation, tree trimming, seasonal plantings</li>
          <li><strong>Exterior lighting</strong> — parking lot lights, building exterior fixtures</li>
          <li><strong>Common hallways and lobbies</strong> — cleaning, HVAC for shared spaces</li>
          <li><strong>Trash removal</strong> — dumpster service for the property</li>
          <li><strong>Security</strong> — cameras, patrol services if applicable</li>
          <li><strong>Property management fees</strong> — sometimes included as a percentage of total expenses</li>
          <li><strong>Storm cleanup</strong> — in Florida, this includes hurricane preparation and drainage maintenance</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How CAM Charges Are Calculated</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Your CAM share is based on your proportionate square footage relative to the total leasable area of the building or complex. This is called your &ldquo;pro rata share.&rdquo; Understanding how to calculate your share is essential whether you&apos;re leasing <Link href="/commercial/retail-space" className="text-accent underline">retail space</Link> or <Link href="/commercial/office-space" className="text-accent underline">office space</Link>.
        </p>
        <div className="my-6 rounded-lg bg-[#1a1a1a]/5 p-6 text-center">
          <p className="text-lg font-semibold text-black">
            Your Pro Rata Share = Your Leased SF &divide; Total Leasable SF
          </p>
        </div>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Most landlords estimate annual CAM expenses, divide by twelve, and bill tenants monthly along with base rent. At the end of the year, they reconcile estimated payments against actual expenses. If actual costs were higher, you owe the difference. If they were lower, you get a credit.
        </p>
      </article>

      {/* ---- Image 1: Retail center parking lot ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=75"
          alt="Florida retail strip center parking lot — CAM charges cover maintenance of shared areas like this"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Parking lot maintenance is one of the largest CAM line items in Florida <Link href="/commercial/retail-space" className="underline">retail centers</Link>. Resurfacing, striping, and drainage add up quickly in our climate.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">What Should NOT Be in Your CAM</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is where tenants need to pay close attention. Some landlords include expenses in CAM that really should not be there. Items that should typically be excluded:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Capital improvements</strong> — a new roof, structural repairs, or building additions benefit the landlord long-term and should not be passed through as annual maintenance</li>
          <li><strong>Leasing commissions and marketing</strong> — the cost of finding new tenants is the landlord&apos;s responsibility</li>
          <li><strong>Landlord&apos;s income taxes</strong> — property taxes are a standard <Link href="/insights/nnn-lease-explained" className="text-accent underline">NNN expense</Link>, but the landlord&apos;s own income taxes are not</li>
          <li><strong>Costs of correcting building code violations</strong> — pre-existing compliance issues belong to the owner</li>
          <li><strong>Depreciation</strong> — this is an accounting entry, not an operating expense</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How to Negotiate CAM Charges</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM charges are negotiable. Here are the key protections I recommend to every tenant client when working on <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link>:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>CAM cap.</strong> Negotiate a maximum annual increase — typically 3% to 5% — so your costs do not spike unexpectedly. This is one of the most impactful protections available.</li>
          <li><strong>Detailed exclusions.</strong> Spell out what cannot be included as CAM. Capital expenditures, legal fees, and management fees above a reasonable percentage should all be excluded.</li>
          <li><strong>Audit rights.</strong> Your lease should give you the right to review the landlord&apos;s CAM records and dispute inaccurate charges.</li>
          <li><strong>Gross-up provision.</strong> If the building is not fully occupied, the landlord should calculate CAM as if it were — otherwise you pay a disproportionate share of fixed costs.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">CAM in Florida Commercial Leases</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In Florida, CAM charges often include items that are less common up north — hurricane preparedness, storm drainage maintenance, and irrigation costs for landscaping in our climate. Florida properties may also have higher insurance-related pass-throughs due to the state&apos;s property insurance market. These are legitimate expenses, but you should understand exactly what they are before you sign. This is especially important in markets like <Link href="/markets/manatee" className="text-accent underline">Manatee County</Link>, <Link href="/markets/pasco" className="text-accent underline">Pasco County</Link>, and <Link href="/markets/polk" className="text-accent underline">Polk County</Link> where newer retail developments have higher CAM bases.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          To understand how CAM interacts with your overall lease structure, review how it fits into <Link href="/insights/gross-vs-net-lease" className="text-accent underline">gross vs. net lease comparisons</Link>. Also see our guide on <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">common CAM mistakes tenants make</Link> and <Link href="/blog/how-commercial-leases-differ-from-residential" className="text-accent underline">how commercial leases differ from residential</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          CAM charges are not something to gloss over. They can represent a substantial portion of your total occupancy cost, and they are one of the most negotiable parts of a commercial lease. Know what is included, what should be excluded, and always negotiate protections before you sign. If the numbers feel unclear, that is exactly the kind of situation where having a broker in your corner pays for itself.
        </p>
      </article>

      {/* ---- Image 2: Tenant reviewing lease ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=75"
          alt="Commercial tenant reviewing lease agreement with CAM charge clauses"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">CAM exclusions and caps belong in the lease before you sign. <Link href="/services/tenant-representation" className="underline">Tenant representation</Link> ensures these protections are in place. Read about the <Link href="/blog/5-mistakes-first-time-commercial-tenants-make" className="underline">5 mistakes first-time tenants make</Link>.</p>
      </section>

      {/* ---- Image 3: Florida commercial exterior ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75"
          alt="Florida commercial building exterior — shared areas like roofs and lobbies are covered by CAM charges"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Building exteriors, roofs, and facades are maintained through CAM — but capital improvements to these elements should be excluded from your pass-through costs. See how the <Link href="/insights/nnn-lease-explained" className="underline">NNN lease structure</Link> handles these items differently.</p>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Want a CAM Review Before You Sign?"
        body="I help tenants understand their total occupancy cost — not just the base rent. Let me review your lease terms."
        buttonText="Talk to Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
