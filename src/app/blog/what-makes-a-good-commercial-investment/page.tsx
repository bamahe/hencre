import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: What Makes a Good Commercial Investment?
 * Investment criteria from a broker's perspective.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "What Makes a Good Commercial Real Estate Investment?",
  description:
    "Learn what experienced investors look for in commercial real estate — tenant quality, lease terms, location fundamentals, and more. A broker's investment criteria.",
  openGraph: {
    title: "What Makes a Good Commercial Real Estate Investment?",
    description:
      "Learn what experienced investors look for in commercial real estate — tenant quality, lease terms, location fundamentals, and more.",
    url: "https://hencre.com/blog/what-makes-a-good-commercial-investment",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Makes a Good Commercial Real Estate Investment?",
  description:
    "Learn what experienced investors look for in commercial real estate — tenant quality, lease terms, location fundamentals, and more.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Florida", url: "https://hencre.com" },
  url: "https://hencre.com/blog/what-makes-a-good-commercial-investment",
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
];

export default function GoodInvestmentPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "What Makes a Good Investment", href: "/blog/what-makes-a-good-commercial-investment" },
        ]}
      />

      <Hero
        title="What Makes a Good Commercial Real Estate Investment?"
        subtitle="Not every commercial property is a good investment. Here is what I look for when helping clients evaluate opportunities."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-brand">
          After working in real estate for over 23 years, I have seen plenty of deals that looked great on paper and turned into headaches — and quiet, unglamorous properties that generated steady returns for decades. The difference usually comes down to a handful of fundamentals that experienced investors evaluate before they ever make an offer. Here is what separates a good commercial investment from a bad one.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Tenant Quality and Credit</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Your income is only as reliable as the tenant paying it. A national credit tenant — a well-known franchise, publicly traded company, or government agency — provides a level of income security that a mom-and-pop tenant cannot match. That does not mean small tenants are bad, but you need to understand the risk profile.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          I evaluate tenants on three dimensions: financial strength (can they pay?), lease commitment (will they stay?), and business viability (does their business model work long-term?). A ten-year lease means nothing if the tenant goes bankrupt in year three.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Lease Term and Structure</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Long-term leases with built-in rent escalations are the gold standard for investment property. They give you predictable income growth and reduce the risk of vacancy and re-leasing costs. Look for leases with annual rent increases — either fixed percentage bumps or CPI-based adjustments.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          The lease structure matters too. NNN leases shift operating expense risk to the tenant, which means your NOI is more predictable. The trade-off is that NNN properties often trade at lower cap rates (higher prices) because the income is considered more secure.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Location Fundamentals</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Location is not just a cliche in commercial real estate — it is the one thing you cannot change. I look at location through several lenses:
        </p>
        <ul className="mt-4 list-disc pl-6 text-slate-brand leading-relaxed space-y-2">
          <li><strong>Accessibility.</strong> Is the property easy to reach from major roads? Is there adequate parking? For retail, visibility and traffic count matter enormously.</li>
          <li><strong>Demographics.</strong> Does the surrounding population support the tenant&apos;s business? Household income, population density, and growth trends all factor in.</li>
          <li><strong>Market trajectory.</strong> Is the area growing, stable, or declining? New development nearby can signal growth — or competition.</li>
          <li><strong>Barrier to entry.</strong> Are there limited sites for competing properties? A location where new supply is constrained protects your investment.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-navy">Physical Condition and Deferred Maintenance</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          A high cap rate sometimes just means the building needs a new roof. Before you get excited about the returns, understand the physical condition of the property. Major capital expenditures — roof, HVAC, parking lot, structural repairs — can eat into your returns quickly.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          I always recommend a thorough building inspection and getting bids for any known issues before making a final offer. Factor those costs into your acquisition price.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Below-Market Rents and Upside Potential</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Some of the best investments are properties where the current rents are below market. When those leases expire and you renew at market rates, your NOI — and the property&apos;s value — increases. This is built-in upside that does not require any physical improvements.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Conversely, be cautious about properties with above-market rents. When those leases expire, tenants may leave or demand concessions, and your income could decrease.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Diversification and Risk</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          A property with a single tenant is simple to manage but concentrated in risk. If that tenant leaves, you have 100% vacancy. Multi-tenant properties spread that risk — losing one tenant out of six is manageable.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Consider how the property fits into your overall portfolio. If you already own retail, adding industrial or office diversifies your exposure to any single market segment.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Exit Strategy</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Before you buy, know how you plan to eventually sell. Is this a long-term hold for cash flow? A value-add play where you improve the property and sell at a higher price? A 1031 exchange stepping stone to a larger property? Your exit strategy should inform your acquisition criteria from day one.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Properties that are easy to sell — well-located, well-maintained, with strong tenants — give you optionality. Niche or special-purpose properties may generate great returns but can be harder to exit.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">The Bottom Line</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          A good commercial investment is not just about the cap rate or the price per square foot. It is about the quality of the income, the strength of the location, the condition of the asset, and how it fits your strategy. When all of those align, you have a deal worth pursuing. When they do not, the best investment decision is walking away.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Evaluating a Commercial Investment?"
        body="I help investors analyze deals with honest, experience-based guidance. No hype, no pressure — just the numbers and the strategy."
        buttonText="Talk to Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
