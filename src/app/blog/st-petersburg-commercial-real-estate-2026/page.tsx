import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: St. Petersburg Commercial Real Estate 2026
 * Market guide for office, retail, and industrial in St. Pete, FL.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "St. Petersburg Commercial Real Estate 2026 | HenCRE",
  description:
    "St. Petersburg commercial real estate market guide for 2026 — office, retail, and industrial submarkets, rental rates, cap rates, and investment outlook for Pinellas County's largest city.",
  alternates: { canonical: "https://hencre.com/blog/st-petersburg-commercial-real-estate-2026" },
  openGraph: {
    title: "St. Petersburg Commercial Real Estate 2026",
    description:
      "Office, retail, and industrial market overview for St. Petersburg, FL — rental rates, cap rates, key submarkets, and what tenants and investors need to know in 2026.",
    url: "https://hencre.com/blog/st-petersburg-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "St. Petersburg Florida downtown skyline with waterfront and commercial buildings",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the average commercial rental rate in St. Petersburg, FL?",
    answer: "The overall average commercial rental rate in St. Petersburg is approximately $29 per square foot across all property types. Office space averages around $40 per square foot, while industrial space averages closer to $15 per square foot. Rates vary significantly by submarket and building quality — downtown Class A commands a premium, while secondary locations offer more modest pricing.",
  },
  {
    question: "What is the cap rate for commercial real estate in St. Petersburg?",
    answer: "The average cap rate for commercial real estate in St. Petersburg is approximately 6.42% as of mid-2026. Cap rates vary by property type and quality — well-leased retail and industrial assets with strong tenants may trade at lower cap rates, while value-add or repositioning opportunities carry higher yields in the 7 to 9 percent range.",
  },
  {
    question: "Which St. Petersburg neighborhoods have the most commercial activity?",
    answer: "Downtown St. Petersburg is the most active market for office and mixed-use commercial space. Brighton Bay is the primary industrial submarket. The Central Avenue corridor is a fast-growing retail and creative office market. The Gateway/US-19 corridor handles the bulk of suburban office and retail activity in the northern part of the city.",
  },
  {
    question: "Is St. Petersburg a good market for commercial real estate investment?",
    answer: "St. Petersburg offers solid commercial real estate investment fundamentals — a diversified employment base anchored by financial services, healthcare, and technology, a growing and affluent population, and limited new speculative supply across most property types. Its waterfront location and cultural amenities also support above-average quality-of-life demand from employers and workers.",
  },
  {
    question: "How does St. Petersburg commercial real estate compare to Tampa?",
    answer: "St. Petersburg is a more concentrated market than Tampa, with less large-format office and industrial supply and a stronger emphasis on retail, mixed-use, and professional services. Rental rates for office space are comparable to Tampa's suburban markets, though the downtown product mix differs. Industrial space in St. Pete is more limited given the peninsula's geography, which supports stronger rent growth for existing warehouse and flex product.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "St. Petersburg Commercial Real Estate 2026",
      description:
        "A market guide to office, retail, and industrial commercial real estate in St. Petersburg, FL — submarkets, rates, cap rates, and investment outlook.",
      datePublished: "2026-07-20",
      dateModified: "2026-07-21",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/st-petersburg-commercial-real-estate-2026",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
        { "@type": "ListItem", position: 3, name: "St. Petersburg Commercial Real Estate 2026", item: "https://hencre.com/blog/st-petersburg-commercial-real-estate-2026" },
      ],
    },
  ],
};

const relatedLinks = [
  {
    title: "Pinellas County Market",
    href: "/markets/pinellas",
    description: "Commercial real estate data and trends for Pinellas County.",
  },
  {
    title: "Clearwater Office Space Guide",
    href: "/blog/clearwater-office-space-professional-services-firms",
    description: "Office market overview for St. Petersburg's neighbor on the Pinellas peninsula.",
  },
  {
    title: "Why Tampa Bay CRE Is Booming",
    href: "/blog/why-tampa-bay-cre-is-booming",
    description: "The macro drivers behind Tampa Bay's commercial real estate growth story.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "How we help businesses find and negotiate the right commercial space.",
  },
  {
    title: "Understanding NNN Leases",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "The triple-net lease structure explained for investors and tenants.",
  },
  {
    title: "CRE Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to inspect, review, and verify before your deposit goes hard.",
  },
];

export default function StPetersburgCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "St. Petersburg CRE 2026", href: "/blog/st-petersburg-commercial-real-estate-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="St. Petersburg Commercial Real Estate 2026"
        subtitle="A diverse employer base, a thriving arts and waterfront culture, and a peninsula geography that limits new supply make St. Pete one of Tampa Bay's most compelling commercial markets."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          St. Petersburg is more than Tampa&apos;s neighbor across the bay — it is a distinct commercial market with its own submarkets, employment drivers, and investment dynamics. Anchored by major employers in financial services, healthcare, and technology, and shaped by a peninsula geography that constrains new development, St. Pete&apos;s <a href="/markets/pinellas" className="text-accent underline">Pinellas County</a> commercial market has generated consistent demand for quality office, retail, and industrial space. Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience helping clients navigate St. Petersburg commercial real estate. Here is what tenants, investors, and business owners need to understand heading into the second half of 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Driving Commercial Demand in St. Petersburg?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg&apos;s commercial real estate demand rests on a diversified and stable economic foundation:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Financial services.</strong> Raymond James Financial — one of the nation&apos;s largest wealth management firms — calls St. Petersburg home and employs thousands in the city. Its presence anchors a broader financial services ecosystem of banks, investment advisors, and insurance firms.</li>
          <li><strong>Healthcare and life sciences.</strong> Johns Hopkins All Children&apos;s Hospital is one of the region&apos;s premier pediatric facilities, and BayCare Health System operates major campuses across Pinellas County. Healthcare is a consistent driver of medical office and clinical space demand.</li>
          <li><strong>Advanced manufacturing and technology.</strong> Jabil Inc., a global technology manufacturing company headquartered in St. Pete, represents the city&apos;s industrial and tech employment base. Defense, aerospace, and electronics manufacturing also have a presence in the market.</li>
          <li><strong>Tourism and hospitality.</strong> St. Pete&apos;s waterfront, arts scene, and warm climate attract visitors year-round, supporting hotel, restaurant, and retail demand in and around the downtown core.</li>
          <li><strong>Population growth and wealth migration.</strong> Continued in-migration of high-income households from the Northeast and Midwest is expanding the professional services and luxury retail tenant base.</li>
        </ul>

        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop"
          alt="St. Petersburg Florida downtown skyline with waterfront commercial buildings"
          width={800}
          height={500}
          className="my-10 w-full rounded-lg"
        />

        <h2 className="mt-10 text-2xl font-bold text-black">Which St. Petersburg Submarkets Are Most Active?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg&apos;s commercial market is organized across several distinct submarkets, each with its own character and demand profile:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Downtown St. Petersburg.</strong> The city&apos;s central business district is the hub for Class A <a href="/commercial/office-space" className="text-accent underline">office space</a>, financial services firms, and mixed-use development. Waterfront access and cultural amenities — museums, restaurants, marinas — make downtown St. Pete one of the most desirable office addresses in the region. Supply is constrained by the peninsula&apos;s boundaries, which keeps Class A vacancy tight.</li>
          <li><strong>Central Avenue corridor.</strong> This east-west spine has emerged as St. Pete&apos;s most dynamic retail and creative office market. The corridor&apos;s walkability, local character, and proximity to residential neighborhoods have driven 10%+ annual rent growth in recent years. Boutique retail, restaurants, breweries, and creative agencies have made this corridor a destination.</li>
          <li><strong>Gateway / US-19 corridor.</strong> The northern part of St. Petersburg along US-19 and the Gateway area hosts a significant concentration of suburban office parks, retail power centers, and mixed-use development. This submarket offers more affordable rates and surface parking for tenants who do not require a downtown address.</li>
          <li><strong>Brighton Bay / industrial corridor.</strong> The primary industrial submarket in St. Petersburg is concentrated in the eastern part of the city, near the interchange of I-275 and I-175. Warehouse, flex industrial, and manufacturing space here serves businesses needing Tampa Bay access without Hillsborough County pricing.</li>
          <li><strong>Skyway Marina District.</strong> A developing mixed-use corridor along the Pinellas Bayway and I-275, targeting hospitality, retail, and marine-adjacent commercial uses. Long-term development potential is significant given the waterfront access.</li>
        </ul>

        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"
          alt="modern Class A office space in downtown St. Petersburg Florida"
          width={800}
          height={500}
          className="my-10 w-full rounded-lg"
        />

        <h2 className="mt-10 text-2xl font-bold text-black">What Are Commercial Rental Rates in St. Petersburg?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          As of mid-2026, commercial rental rates in St. Petersburg reflect the market&apos;s supply constraints and strong tenant demand:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Office space</strong> averages approximately $40 per square foot across the market, with downtown Class A commanding $35 to $48 per square foot on a full-service gross basis. Suburban office in the Gateway corridor ranges from $22 to $30 per square foot.</li>
          <li><strong>Retail space</strong> on the Central Avenue corridor has seen particularly strong rent growth. Prime ground-floor retail in the hottest blocks ranges from $35 to $55 per square foot NNN. Strip center and neighborhood retail runs $20 to $32 per square foot across the broader market.</li>
          <li><strong>Industrial and flex space</strong> in Brighton Bay and the eastern corridors averages around $15 per square foot, with newer or specialized product commanding $18 to $22 per square foot. The peninsula&apos;s geographic limits on industrial supply have kept vacancy low and rents rising.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The overall average commercial rental rate across all property types in St. Petersburg is approximately $29 per square foot — higher than many suburban Tampa Bay markets, reflecting the quality of the city&apos;s commercial stock and demand from its anchor employers. Understanding <a href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">lease structures like NNN</a> and <a href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">CAM charges</a> is essential before committing to any commercial lease.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=500&fit=crop"
          alt="commercial investment property on Central Avenue corridor in St. Petersburg Florida"
          width={800}
          height={500}
          className="my-10 w-full rounded-lg"
        />

        <h2 className="mt-10 text-2xl font-bold text-black">Is St. Petersburg a Good Market for Commercial Real Estate Investment?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg presents a compelling investment case, with several factors supporting long-term performance:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong><a href="/insights/what-is-a-cap-rate" className="text-accent underline">Cap rates.</a></strong> The average cap rate for commercial properties in St. Petersburg is approximately 6.42% in mid-2026. Well-leased, institutional-quality assets trade at compressed cap rates in the 5 to 6 percent range, while value-add and secondary properties offer yields of 7 to 9 percent.</li>
          <li><strong>Supply constraints.</strong> The Pinellas peninsula is essentially built out — there is very limited developable land remaining for large-scale new commercial construction. This geographic limitation protects existing property owners from competitive new supply and supports rent and value appreciation over time.</li>
          <li><strong>Tenant quality.</strong> Major employers like Raymond James Financial, Johns Hopkins All Children&apos;s Hospital, and Jabil provide stable demand for commercial space and anchor the local economy in ways that protect against demand cyclicality.</li>
          <li><strong>Value-add potential.</strong> Older commercial properties — particularly Class B office buildings and underutilized retail — offer repositioning opportunities in a market where new supply is constrained. Adaptive reuse and renovation projects have performed well in St. Pete&apos;s core submarkets.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors should understand how to <a href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">calculate commercial property ROI</a> and conduct thorough <a href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence</a> before acquiring any property, particularly as insurance costs in coastal Florida require careful underwriting. Flood zone exposure is also a material consideration for properties in St. Petersburg&apos;s lower-lying areas.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tenants Know When Leasing Commercial Space in St. Pete?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are looking for <a href="/commercial/office-space" className="text-accent underline">office</a>, <a href="/commercial/retail-space" className="text-accent underline">retail</a>, or <a href="/commercial/industrial-warehouse" className="text-accent underline">industrial space</a> in St. Petersburg, keep these points in mind:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Start early.</strong> Quality spaces — especially in downtown and along Central Avenue — move quickly. Begin your search 6 to 9 months before your intended move-in date to avoid being pressured into a poor fit.</li>
          <li><strong>Understand total occupancy cost.</strong> St. Pete landlords frequently use NNN and modified gross lease structures. Know what is included in the base rent and what operating expenses — including <a href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">CAM charges</a>, insurance, and taxes — you will be responsible for above the base.</li>
          <li><strong>Negotiate tenant improvements.</strong> In a market where landlords have leverage, strong tenant improvement packages are still negotiable for multi-year leases. Do not leave TI dollars on the table by signing without negotiating the buildout contribution.</li>
          <li><strong>Use a tenant rep.</strong> A <a href="/services/tenant-representation" className="text-accent underline">tenant representative</a> has access to available spaces — including off-market opportunities — and negotiates on your behalf. The landlord pays the broker commission, so representation costs you nothing.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on St. Petersburg Commercial Real Estate</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg is a market defined by its strengths: a diversified and resilient employment base, geographic supply constraints that protect existing owners, and a quality-of-life profile that attracts tenants and workers from across the country. Whether you are leasing <a href="/commercial/office-space" className="text-accent underline">office space</a>, evaluating a retail investment, or exploring industrial acquisition, St. Pete&apos;s fundamentals reward careful, well-informed decisions. With 23+ years of real estate experience, I help clients across the Tampa Bay region — including St. Petersburg — find, lease, and invest in commercial properties that match their goals. The market is active and opportunities exist, but execution matters.
        </p>

      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl">
            St. Petersburg CRE — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Looking for Commercial Space or Investment in St. Petersburg?"
        body="Barrett Henry helps tenants find the right space and investors identify opportunities across St. Petersburg and the broader Florida market. Call (813) 733-7907 or reach out online."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
