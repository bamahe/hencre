import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Florida 1031 Exchange — What Investors Need to Know
 * Florida-specific 1031 exchange considerations.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Florida 1031 Exchange: What Investors Need to Know",
  description:
    "Florida-specific 1031 exchange considerations for commercial real estate investors — no state income tax advantages, property type flexibility, and common pitfalls.",
  openGraph: {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    description:
      "Florida-specific 1031 exchange considerations for commercial real estate investors — tax advantages, property flexibility, and common pitfalls.",
    url: "https://hencre.com/blog/florida-1031-exchange-what-investors-need-to-know",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Florida 1031 Exchange: What Investors Need to Know",
  description:
    "Florida-specific 1031 exchange considerations for commercial real estate investors.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial® Florida", url: "https://hencre.com" },
  url: "https://hencre.com/blog/florida-1031-exchange-what-investors-need-to-know",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Florida have a state tax on 1031 exchanges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida has no state income tax, which means there is no state-level capital gains tax on real estate transactions. This makes Florida one of the most tax-friendly states for real estate investors, both for direct sales and for 1031 exchanges.",
      },
    },
    {
      "@type": "Question",
      name: "Can you exchange property from another state into Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 1031 exchanges are not limited to the same state. You can sell an investment property in any state and exchange into Florida real estate, as long as both properties qualify as like-kind (held for investment or business use). Many investors exchange into Florida specifically for the no-income-tax advantage.",
      },
    },
    {
      "@type": "Question",
      name: "Do Florida documentary stamp taxes apply to 1031 exchanges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Florida documentary stamp taxes (doc stamps) and, in some counties, surtaxes apply to the deed transfer on the replacement property, just as they would in any real estate purchase. The 1031 exchange defers federal capital gains tax but does not exempt you from Florida transfer taxes.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a qualified intermediary in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a QI that is bonded, insured, and experienced with commercial real estate exchanges. Your broker, attorney, or CPA can typically recommend qualified intermediaries they have worked with. Make sure the QI is in place before you close on the sale of your relinquished property.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "Does Florida have a state tax on 1031 exchanges?",
    answer:
      "Florida has no state income tax, which means there is no state-level capital gains tax on real estate transactions. This makes Florida one of the most tax-friendly states for real estate investors, both for direct sales and for 1031 exchanges.",
  },
  {
    question: "Can you exchange property from another state into Florida?",
    answer:
      "Yes. 1031 exchanges are not limited to the same state. You can sell an investment property in any state and exchange into Florida real estate, as long as both properties qualify as like-kind. Many investors exchange into Florida specifically for the no-income-tax advantage.",
  },
  {
    question: "Do Florida documentary stamp taxes apply to 1031 exchanges?",
    answer:
      "Yes. Florida doc stamps and, in some counties, surtaxes apply to the deed transfer on the replacement property, just as they would in any purchase. The 1031 exchange defers federal capital gains tax but does not exempt you from Florida transfer taxes.",
  },
  {
    question: "How do I find a qualified intermediary in Florida?",
    answer:
      "Look for a QI that is bonded, insured, and experienced with commercial exchanges. Your broker, attorney, or CPA can typically recommend qualified intermediaries. Make sure the QI is in place before you close on the sale of your relinquished property.",
  },
];

const relatedLinks = [
  {
    title: "1031 Exchange Basics",
    href: "/insights/1031-exchange-basics",
    description: "Fundamentals of tax-deferred exchanges for CRE investors.",
  },
  {
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding cap rates for evaluating replacement properties.",
  },
  {
    title: "Why Tampa Bay CRE Is Booming",
    href: "/blog/why-tampa-bay-cre-is-booming",
    description: "Growth drivers making Tampa Bay attractive for exchange buyers.",
  },
  {
    title: "CRE Due Diligence Checklist",
    href: "/insights/cre-due-diligence-checklist",
    description: "What to inspect when evaluating replacement properties.",
  },
];

export default function Florida1031Page() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Florida 1031 Exchange", href: "/blog/florida-1031-exchange-what-investors-need-to-know" },
        ]}
      />

      <Hero
        title="Florida 1031 Exchange: What Investors Need to Know"
        subtitle="Florida's tax-friendly environment makes it one of the best states to exchange into. Here is what you need to know about executing a 1031 exchange in the Sunshine State."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Florida has become a magnet for real estate investors executing 1031 exchanges, and the reasons go beyond beaches and sunshine. The combination of no state income tax, strong population growth, and a diverse commercial real estate market makes Florida one of the most attractive destinations for exchange buyers nationwide. But there are Florida-specific considerations you need to understand. Here is what I tell my investor clients.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The No-Income-Tax Advantage</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is the big one. Florida has no state income tax — and that includes no state-level capital gains tax on real estate transactions. If you are exchanging out of a state like California, New York, or New Jersey, where state capital gains rates can be substantial, moving your investment to Florida means you avoid that state tax bite entirely.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          However, be aware of &ldquo;clawback&rdquo; provisions. Some states (California is the most aggressive) may attempt to collect state capital gains tax on the deferred gain from the original property if you exchange into an out-of-state replacement. The rules are complex and state-specific, so work with a tax professional who understands multi-state exchange implications.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Exchanging Into Florida From Out of State</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          One of the most common scenarios I work with is out-of-state investors selling property in a high-tax state and exchanging into Florida commercial real estate. The IRS does not restrict 1031 exchanges to the same state — you can sell in any state and buy in any other state, as long as both properties are held for investment or business use.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For these buyers, I help identify replacement properties that meet their exchange criteria, investment goals, and timeline requirements. The 45-day identification window does not leave much room for leisurely property shopping — you need a broker who knows the market and can move quickly.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Florida Documentary Stamp Taxes</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          While Florida does not have a state income tax, it does have documentary stamp taxes (&ldquo;doc stamps&rdquo;) on real estate transfers. The standard rate applies statewide, and some counties — including Miami-Dade — add a surtax. These transfer taxes apply to the replacement property purchase in a 1031 exchange just as they would in any regular purchase.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Doc stamps are a closing cost, not an income tax, so they cannot be deferred through the exchange. Budget for them when evaluating your all-in acquisition cost.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Property Tax Considerations</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Florida&apos;s property tax system has some nuances that affect exchange buyers:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>No homestead for investment property.</strong> Florida&apos;s homestead exemption and Save Our Homes cap on assessed value increases apply only to primary residences. Investment properties are assessed at fair market value, and a purchase often triggers a reassessment.</li>
          <li><strong>Tax reassessment on sale.</strong> When you buy a property, the county appraiser will likely reassess it based on the purchase price. If the property was previously assessed below market value, expect a property tax increase.</li>
          <li><strong>Tangible personal property tax.</strong> Florida taxes business tangible personal property (fixtures, equipment, furniture) separately. If your replacement property includes significant personal property, that creates an additional tax obligation.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Florida Property Types Popular for Exchanges</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Exchange buyers coming to Florida tend to gravitate toward certain property types:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>NNN retail with national tenants.</strong> Freestanding buildings leased to pharmacy chains, quick-service restaurants, dollar stores, and auto parts retailers are popular because they offer predictable income with minimal management.</li>
          <li><strong>Small multi-tenant retail.</strong> Strip centers with diverse tenant mixes in growing suburban corridors.</li>
          <li><strong>Industrial and warehouse.</strong> Florida&apos;s logistics sector is strong, and industrial properties offer attractive returns with relatively low maintenance.</li>
          <li><strong>Medical office.</strong> Healthcare demand is consistent and growing, making medical office a resilient investment.</li>
          <li><strong>Multifamily.</strong> While this article focuses on commercial, multifamily properties also qualify for 1031 exchanges and are extremely popular in Florida.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Timing and Strategy Tips</h2>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Start early.</strong> Begin working with a Florida broker before you list your relinquished property. Understanding the replacement market helps you price and time your sale.</li>
          <li><strong>Identify more than one property.</strong> The Three-Property Rule lets you identify up to three replacement properties. Use all three slots — deals fall through, and you need backup options.</li>
          <li><strong>Factor in Florida insurance costs.</strong> Property insurance in Florida — especially for coastal properties — can be significantly higher than in other states. Build this into your pro forma.</li>
          <li><strong>Understand hurricane exposure.</strong> Florida properties carry wind and flood risk. Review insurance requirements, flood zone designations, and any mitigation improvements on the property.</li>
          <li><strong>Coordinate your team.</strong> You need a qualified intermediary, a Florida-licensed broker, a real estate attorney familiar with Florida law, and a CPA who understands multi-state exchange implications. Get everyone on the same page early.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Florida is one of the best states in the country for 1031 exchange buyers — no state income tax, strong market fundamentals, and a deep inventory of investment-grade commercial properties. But the exchange process demands careful planning, strict adherence to deadlines, and a team that knows the Florida market. If you are considering exchanging into Florida, I can help you identify replacement properties, evaluate the numbers, and close within your timeline.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Exchanging Into Florida?"
        body="I help out-of-state investors identify and close on Florida replacement properties within tight exchange deadlines. Let us get started."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
