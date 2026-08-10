import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: What Makes a Good Commercial Investment?
 * Investment criteria from a broker's perspective.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "What Makes a Good Commercial Real Estate Investment? | HenCRE",
  description:
    "Learn what experienced investors look for in commercial real estate — tenant quality, lease terms, location fundamentals, and more. A broker&apos;s investment criteria.",
  alternates: { canonical: "https://hencre.com/blog/what-makes-a-good-commercial-investment" },
  openGraph: {
    title: "What Makes a Good Commercial Real Estate Investment?",
    description:
      "Learn what experienced investors look for in commercial real estate — tenant quality, lease terms, location fundamentals, and more.",
    url: "https://hencre.com/blog/what-makes-a-good-commercial-investment",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "low angle photo of city high rise buildings during daytime",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the most important factor in a commercial real estate investment?",
    answer:
      "Tenant quality is the single most important factor. A well-located property with a weak tenant can underperform; a solid tenant in a good location creates the predictable income that drives value. Lease term, structure, and location all matter, but they are downstream of who is paying the rent and how reliably they will continue to pay it.",
  },
  {
    question: "What cap rate should I look for in a commercial investment?",
    answer:
      "Cap rate targets depend on your risk tolerance, property type, and location. In Tampa Bay, stabilized NNN retail with national tenants trades at 5.5 to 6.5 percent. Medical office and class-B multifamily range from 5.5 to 7 percent. Value-add and secondary-market properties trade at 7 to 8.5 percent or higher. A higher cap rate always implies more risk — tenant weakness, shorter lease term, deferred maintenance, or weaker location. The cap rate is a starting point for analysis, not the conclusion.",
  },
  {
    question: "How do you evaluate tenant quality for a commercial property?",
    answer:
      "Evaluate tenants on three dimensions: financial strength (can they pay?), lease commitment (will they stay?), and business viability (does their model hold up long-term?). A national credit tenant — a publicly traded company, well-known franchise, or government agency — provides income security that local tenants cannot match. That does not mean local tenants are bad, but you need to understand the risk profile. Request financial statements from non-credit tenants and review lease history and payment records during due diligence.",
  },
  {
    question: "What lease structure is best for a commercial investment property?",
    answer:
      "Triple net (NNN) leases are generally most favorable for investors because they shift operating expenses — property taxes, insurance, and maintenance — to the tenant, making NOI more predictable. Modified gross leases are common in multi-tenant office properties. Full service gross leases require the landlord to pay all operating costs from base rent, which requires accurate budgeting. For most investment-grade properties in Florida, NNN or modified gross leases are standard.",
  },
  {
    question: "How does location affect a commercial real estate investment?",
    answer:
      "Location is irreversible — it is the one thing you cannot change. For retail, traffic counts, visibility, access and egress, and co-tenancy all directly affect how well your tenants perform and whether new tenants will want your space when leases expire. For industrial, highway access and clear height matter most. For office and medical, proximity to residential density and complementary uses drives leasing. In all cases, submarkets with constrained new supply are stronger holds than markets with abundant development land.",
  },
  {
    question: "What should I look for in the due diligence period before buying commercial property?",
    answer:
      "Use due diligence to verify everything the seller has represented. Review lease abstracts and confirm rent rolls against bank statements. Get current insurance quotes — do not rely on the seller's historical premiums, especially in Florida. Have a licensed inspector evaluate the roof, HVAC, parking, and electrical. Get a phase I environmental report. Confirm property tax at your purchase price, not the seller's assessed value. Review zoning compliance for current and intended uses. The due diligence period is your last opportunity to renegotiate price based on actual conditions.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
        { "@type": "ListItem", position: 3, name: "What Makes a Good Commercial Investment?", item: "https://hencre.com/blog/what-makes-a-good-commercial-investment" },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "What Makes a Good Commercial Real Estate Investment?",
      description:
        "Learn what experienced investors look for in commercial real estate — tenant quality, lease terms, location fundamentals, and more.",
      datePublished: "2026-05-15",
      dateModified: "2026-08-10",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/what-makes-a-good-commercial-investment",
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
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding the key metric for investment analysis.",
  },
  {
    title: "How to Value Commercial Property",
    href: "/insights/how-to-value-commercial-property",
    description: "Three valuation approaches every investor should know.",
  },
  {
    title: "CRE Due Diligence Checklist",
    href: "/insights/cre-due-diligence-checklist",
    description: "Everything to inspect before you buy.",
  },
  {
    title: "1031 Exchange Basics",
    href: "/insights/1031-exchange-basics",
    description: "Tax-deferred exchanges for CRE investors.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors acquire the right commercial properties.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step due diligence checklist before you buy.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "How to defer capital gains taxes using a 1031 exchange in Florida.",
  },
  {
    title: "What Is a Triple Net NNN Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "How NNN lease structures shift expenses and why investors favor them.",
  },
  {
    title: "Understanding CAM Charges",
    href: "/blog/understanding-cam-charges-tenants-guide",
    description: "What common area maintenance fees cover and how to negotiate them.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "How Barrett helps businesses find and negotiate commercial space.",
  },
];

export default function GoodInvestmentPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "What Makes a Good Investment", href: "/blog/what-makes-a-good-commercial-investment" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        title="What Makes a Good Commercial Real Estate Investment?"
        subtitle="Not every commercial property is a good investment. Here is what I look for when helping clients evaluate opportunities."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          After working in commercial real estate for over 23 years as a Broker Associate at REMAX Collective, I have seen plenty of deals that looked great on paper and turned into headaches — and quiet, unglamorous properties that generated steady returns for decades. The difference usually comes down to a handful of fundamentals that experienced investors evaluate before they ever make an offer. Here is what separates a good commercial investment from a bad one.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Tenant Quality and Credit</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Your income is only as reliable as the tenant paying it. A national credit tenant — a well-known franchise, publicly traded company, or government agency — provides a level of income security that a mom-and-pop tenant cannot match. That does not mean small tenants are bad, but you need to understand the risk profile.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          I evaluate tenants on three dimensions: financial strength (can they pay?), lease commitment (will they stay?), and business viability (does their business model work long-term?). A ten-year lease means nothing if the tenant goes bankrupt in year three.
        </p>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
            alt="Financial analysis documents and calculator for commercial real estate investment"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Thorough financial analysis — including tenant creditworthiness, NOI verification, and expense modeling — is the foundation of every good commercial investment decision.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Lease Term and Structure</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Long-term leases with built-in rent escalations are the gold standard for investment property. They give you predictable income growth and reduce the risk of vacancy and re-leasing costs. Look for leases with annual rent increases — either fixed percentage bumps or CPI-based adjustments.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The lease structure matters too. <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">NNN leases</Link> shift operating expense risk to the tenant, which means your NOI is more predictable. The trade-off is that NNN properties often trade at lower <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rates</Link> (higher prices) because the income is considered more secure. Understand how <Link href="/insights/gross-vs-net-lease" className="text-accent underline">different lease structures</Link> affect your true occupancy cost before comparing properties.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Location Fundamentals</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Location is not just a cliche in commercial real estate — it is the one thing you cannot change. I look at location through several lenses:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Accessibility.</strong> Is the property easy to reach from major roads? Is there adequate parking? For <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>, visibility and traffic count matter enormously.</li>
          <li><strong>Demographics.</strong> Does the surrounding population support the tenant&apos;s business? Household income, population density, and growth trends all factor in. Markets like <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>, <Link href="/markets/pasco" className="text-accent underline">Pasco</Link>, and <Link href="/markets/manatee" className="text-accent underline">Manatee</Link> counties are seeing sustained population growth that supports tenant demand across most property types.</li>
          <li><strong>Market trajectory.</strong> Is the area growing, stable, or declining? New development nearby can signal growth — or competition.</li>
          <li><strong>Barrier to entry.</strong> Are there limited sites for competing properties? A location where new supply is constrained protects your investment.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Physical Condition and Deferred Maintenance</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A high cap rate sometimes just means the building needs a new roof. Before you get excited about the returns, understand the physical condition of the property. Major capital expenditures — roof, HVAC, parking lot, structural repairs — can eat into your returns quickly.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          I always recommend a thorough building inspection and getting bids for any known issues before making a final offer. Factor those costs into your acquisition price. The <Link href="/insights/cre-due-diligence-checklist" className="text-accent underline">due diligence checklist</Link> covers what to inspect before closing.
        </p>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
            alt="Commercial property exterior representing good investment location fundamentals"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Location is the one thing you cannot change. High-traffic, well-positioned properties in growing markets offer the most durable long-term investment value.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Below-Market Rents and Upside Potential</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Some of the best investments are properties where the current rents are below market. When those leases expire and you renew at market rates, your NOI — and the property&apos;s value — increases. This is built-in upside that does not require any physical improvements.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Conversely, be cautious about properties with above-market rents. When those leases expire, tenants may leave or demand concessions, and your income could decrease. Understanding <Link href="/insights/how-to-value-commercial-property" className="text-accent underline">how commercial properties are valued</Link> helps you identify whether rents are sustainable or at risk of correction.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Diversification and Risk</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A property with a single tenant is simple to manage but concentrated in risk. If that tenant leaves, you have 100% vacancy. Multi-tenant properties spread that risk — losing one tenant out of six is manageable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Consider how the property fits into your overall portfolio. If you already own retail, adding <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial</Link> or <Link href="/commercial/office-space" className="text-accent underline">office</Link> diversifies your exposure to any single market segment. A <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN net lease property</Link> can anchor a portfolio with stable, predictable cash flow.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Exit Strategy</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before you buy, know how you plan to eventually sell. Is this a long-term hold for cash flow? A value-add play where you improve the property and sell at a higher price? A <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">1031 exchange</Link> stepping stone to a larger property? Your exit strategy should inform your acquisition criteria from day one.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Properties that are easy to sell — well-located, well-maintained, with strong tenants — give you optionality. Niche or special-purpose properties may generate great returns but can be harder to exit. Use the <Link href="/calculators/roi" className="text-accent underline">commercial ROI calculator</Link> to model different hold-period and exit scenarios before committing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A good commercial investment is not just about the cap rate or the price per square foot. It is about the quality of the income, the strength of the location, the condition of the asset, and how it fits your strategy. When all of those align, you have a deal worth pursuing. When they do not, the best investment decision is walking away. For perspective on specific markets, see the <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>, <Link href="/markets/polk" className="text-accent underline">Polk</Link>, <Link href="/markets/pasco" className="text-accent underline">Pasco</Link>, and <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link> county overviews. For <Link href="/services/investment-sales" className="text-accent underline">investment sales representation</Link>, contact Barrett to discuss what you are looking for.
        </p>

        <p className="mt-8 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">Commercial Real Estate Investment -- Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <img
            src="/images/barrett-henry-headshot.jpg"
            alt="Barrett Henry, Broker Associate at REMAX Collective"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He helps investors evaluate commercial property acquisitions with honest, data-driven guidance across the Tampa Bay and Florida markets. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating a Commercial Investment?"
        body="I help investors analyze deals with honest, experience-based guidance. No hype, no pressure — just the numbers and the strategy."
        buttonText="Talk to Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
