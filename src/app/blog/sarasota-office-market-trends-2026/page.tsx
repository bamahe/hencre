import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Sarasota Office Market Trends 2026
 * Sarasota County office market overview for tenants and investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Sarasota Office Market Trends 2026 | HenCRE",
  description:
    "Sarasota office market trends for 2026 — vacancy rates, rental rates, top submarkets, tenant demand, and investment outlook for Sarasota County.",
  alternates: { canonical: "https://hencre.com/blog/sarasota-office-market-trends-2026" },
  openGraph: {
    title: "Sarasota Office Market Trends 2026",
    description:
      "Sarasota office market analysis — vacancy, rents, submarkets, and investment outlook for 2026.",
    url: "https://hencre.com/blog/sarasota-office-market-trends-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "modern office building with glass facade and blue sky",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Sarasota Office Market Trends 2026",
  description:
    "Sarasota County office market trends — vacancy, rents, submarkets, and investment opportunities.",
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
  url: "https://hencre.com/blog/sarasota-office-market-trends-2026",
};

const relatedLinks = [
  {
    title: "Sarasota County Market",
    href: "/markets/sarasota",
    description: "Commercial real estate data and trends for Sarasota County.",
  },
  {
    title: "Office Space Listings",
    href: "/commercial/office-space",
    description: "Browse available office properties across Tampa Bay.",
  },
  {
    title: "Bradenton CRE Opportunities",
    href: "/blog/bradenton-commercial-real-estate-opportunities",
    description: "Commercial market overview for neighboring Manatee County.",
  },
  {
    title: "Landlord Leasing Services",
    href: "/services/landlord-leasing",
    description: "How we help office landlords attract and retain tenants.",
  },
];

export default function SarasotaOfficeMarketPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Sarasota Office Trends 2026", href: "/blog/sarasota-office-market-trends-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
        title="Sarasota Office Market Trends 2026"
        subtitle="Wealth migration, professional services growth, and limited new supply are shaping Sarasota's office market heading into the second half of 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          <a href="/markets/sarasota" className="text-accent underline">Sarasota County&apos;s</a> office market reflects the unique character of the region — a growing base of wealth management, legal, medical, and professional services firms serving an affluent and expanding population. Unlike Tampa&apos;s larger, more diverse office market, Sarasota&apos;s office sector is concentrated and specialized, creating both challenges and opportunities for tenants and investors heading into 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Driving Office Demand in Sarasota?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Several trends are supporting office demand in Sarasota County:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Wealth migration.</strong> High-net-worth individuals relocating to Sarasota from the Northeast and Midwest bring their advisory relationships — financial planners, attorneys, accountants, and family office staff — creating demand for professional office space.</li>
          <li><strong>Healthcare expansion.</strong> Medical office demand remains strong as healthcare systems expand to serve Sarasota&apos;s growing and aging population. Specialty practices, outpatient surgery centers, and wellness clinics are active tenants.</li>
          <li><strong>Remote work evolution.</strong> While some companies have downsized office footprints, others — particularly in professional services — are recommitting to in-person presence. Sarasota&apos;s quality of life makes it an attractive location for companies establishing Florida offices.</li>
          <li><strong>Population growth.</strong> More residents mean more demand for every type of professional service, from insurance agencies to real estate offices to architecture firms.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Which Sarasota Submarkets Are Most Active?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Office activity in Sarasota is concentrated in several distinct submarkets:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Downtown Sarasota.</strong> The most established office submarket, anchored by law firms, financial services, and government offices. Class A space is limited and commands the highest rents. Walkability and proximity to cultural amenities make downtown attractive for firms recruiting talent.</li>
          <li><strong>University Parkway / I-75 corridor.</strong> The primary growth corridor for office development, offering newer buildings, ample parking, and easy highway access. Medical office and corporate users favor this area.</li>
          <li><strong>Fruitville Road corridor.</strong> A mix of medical office, professional services, and smaller multi-tenant office buildings east of downtown.</li>
          <li><strong>North Sarasota / UTC area.</strong> The University Town Center mall and surrounding development have created a commercial node that includes office space alongside retail and residential.</li>
          <li><strong>Venice / South County.</strong> A smaller but growing office market serving Venice&apos;s expanding residential base.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are Sarasota Office Rental Rates?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Office rental rates in Sarasota vary by submarket and building class. Downtown Class A office space typically commands $28 to $38 per square foot on a <a href="/insights/gross-vs-net-lease" className="text-accent underline">full-service gross basis</a>. The University Parkway corridor ranges from $22 to $32 per square foot for newer product. Secondary locations and Class B space can be found in the $16 to $24 per square foot range. Medical office space often commands a premium of $2 to $5 per square foot above general office rates due to specialized buildout requirements.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Office Vacancy Situation?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Sarasota&apos;s overall office vacancy has remained moderate, though it varies significantly by submarket and building quality. Class A space in downtown and the University Parkway corridor is tight, with limited available options for tenants seeking larger suites. Class B and C space has higher vacancy, reflecting tenant preference for newer, better-amenitized buildings. Very little new speculative office construction is underway, which supports continued tightness in the Class A segment.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Should You Invest in Sarasota Office Property?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Sarasota office investment can be attractive for the right property. Key considerations:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Tenant quality matters.</strong> Professional services and medical tenants tend to be sticky — they invest in their buildout and do not move frequently. This translates to stable occupancy and reliable income.</li>
          <li><strong>Limited new supply.</strong> Minimal new office construction means existing properties face less competitive pressure, supporting rents and occupancy.</li>
          <li><strong>Value-add potential.</strong> Older Class B office buildings in good locations can be renovated and repositioned to attract higher-quality tenants and command higher rents.</li>
          <li><strong><a href="/insights/what-is-a-cap-rate" className="text-accent underline">Cap rates</a>.</strong> Sarasota office cap rates generally range from 6 to 8.5 percent depending on building quality, tenant strength, and lease term remaining.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Office Tenants in Sarasota Know?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are looking for <a href="/commercial/office-space" className="text-accent underline">office space</a> in Sarasota, start your search early — 6 to 9 months before your need date. Class A options are limited, and the best spaces do not stay available long. Understand whether you are looking at a gross or net lease, and factor in all costs including <a href="/insights/cam-charges-explained" className="text-accent underline">CAM charges</a> and parking. Working with a <a href="/services/tenant-representation" className="text-accent underline">tenant representative</a> gives you access to off-market options and negotiation expertise at no cost to you — the landlord pays the broker fee.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Sarasota&apos;s office market is smaller and more specialized than Tampa&apos;s, but it offers compelling fundamentals — growing demand, limited supply, and a tenant base anchored by stable professional services and healthcare users. With 23+ years of real estate experience, I help both tenants and investors navigate the Sarasota office market with local knowledge and data-driven analysis. Whether you are leasing space or evaluating an investment, understanding this market&apos;s nuances is the key to a good outcome.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Looking for Sarasota Office Space or Investment?"
        body="I help tenants find the right office space and investors identify opportunities across Sarasota County and the broader Tampa Bay market."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
