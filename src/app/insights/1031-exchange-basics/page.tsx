import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Insight: 1031 Exchange Basics
 * Evergreen explainer — tax-deferred exchanges for CRE investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "1031 Exchange Basics: Tax-Deferred Exchanges for CRE Investors",
  description:
    "Understand 1031 exchange fundamentals — timelines, rules, qualified intermediaries, and common mistakes. Expert guidance for commercial real estate investors.",
  openGraph: {
    title: "1031 Exchange Basics: Tax-Deferred Exchanges for CRE Investors",
    description:
      "Understand 1031 exchange fundamentals — timelines, rules, qualified intermediaries, and common mistakes.",
    url: "https://hencre.com/insights/1031-exchange-basics",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "1031 Exchange Basics: Tax-Deferred Exchanges for CRE Investors",
  description:
    "Understand 1031 exchange fundamentals — timelines, rules, qualified intermediaries, and common mistakes.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Florida", url: "https://hencre.com" },
  url: "https://hencre.com/insights/1031-exchange-basics",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a 1031 exchange?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows investors to defer capital gains taxes when they sell an investment property and reinvest the proceeds into a 'like-kind' replacement property. It is a tax deferral strategy, not a tax elimination.",
      },
    },
    {
      "@type": "Question",
      name: "How long do you have to complete a 1031 exchange?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are two critical deadlines. You must identify potential replacement properties within 45 days of selling your relinquished property, and you must close on the replacement property within 180 days. These deadlines are strict and cannot be extended.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do a 1031 exchange on a primary residence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Section 1031 only applies to property held for investment or business use. Your primary residence does not qualify. However, if you convert a rental property to a primary residence (or vice versa), there may be partial exchange treatment available — consult a tax professional.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'like-kind' mean in a 1031 exchange?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Like-kind is broadly defined for real estate. Any real property held for investment can be exchanged for any other real property held for investment. You can exchange a retail strip center for an apartment building, or raw land for an office building. The properties do not need to be the same type.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "What is a 1031 exchange?",
    answer:
      "A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows investors to defer capital gains taxes when they sell an investment property and reinvest the proceeds into a 'like-kind' replacement property. It is a tax deferral strategy, not a tax elimination.",
  },
  {
    question: "How long do you have to complete a 1031 exchange?",
    answer:
      "There are two critical deadlines. You must identify potential replacement properties within 45 days of selling your relinquished property, and you must close on the replacement property within 180 days. These deadlines are strict and cannot be extended.",
  },
  {
    question: "Can you do a 1031 exchange on a primary residence?",
    answer:
      "No. Section 1031 only applies to property held for investment or business use. Your primary residence does not qualify. However, if you convert a rental property to a primary residence (or vice versa), there may be partial exchange treatment available — consult a tax professional.",
  },
  {
    question: "What does 'like-kind' mean in a 1031 exchange?",
    answer:
      "Like-kind is broadly defined for real estate. Any real property held for investment can be exchanged for any other real property held for investment. You can exchange a retail strip center for an apartment building, or raw land for an office building. The properties do not need to be the same type.",
  },
];

const relatedLinks = [
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Florida-specific considerations for tax-deferred exchanges.",
  },
  {
    title: "What Is a Cap Rate?",
    href: "/insights/what-is-a-cap-rate",
    description: "Understanding capitalization rates for investment analysis.",
  },
  {
    title: "How to Value Commercial Property",
    href: "/insights/how-to-value-commercial-property",
    description: "Income, comparable, and cost approaches to CRE valuation.",
  },
  {
    title: "CRE Due Diligence Checklist",
    href: "/insights/cre-due-diligence-checklist",
    description: "Comprehensive checklist for evaluating commercial properties.",
  },
];

export default function ExchangeBasicsPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "1031 Exchange Basics", href: "/insights/1031-exchange-basics" },
        ]}
      />

      <Hero
        title="1031 Exchange Basics"
        subtitle="Tax-deferred exchanges let you reinvest your gains instead of paying them to Uncle Sam. Here is how they work and where investors trip up."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-brand">
          If you own commercial real estate and have ever thought about selling, someone has probably mentioned a 1031 exchange. It is one of the most powerful wealth-building tools available to real estate investors — and one of the most misunderstood. I have guided clients through these exchanges throughout my career, and the difference between doing it right and making a costly mistake often comes down to understanding a few key rules.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">What Is a 1031 Exchange?</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Section 1031 of the Internal Revenue Code allows you to sell an investment property and defer the capital gains taxes by reinvesting the proceeds into another &ldquo;like-kind&rdquo; property. The key word is <strong>defer</strong> — you are not eliminating the tax, you are postponing it. If you eventually sell without exchanging, the accumulated gains become taxable.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          The power of this strategy is compounding. Instead of losing a significant percentage of your gain to taxes on each sale, you keep that capital working for you and can trade up into larger, more productive properties over time.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">The Two Critical Deadlines</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Every 1031 exchange lives and dies by two deadlines. Miss either one and the exchange fails — you owe the taxes in full.
        </p>
        <div className="my-6 space-y-4">
          <div className="rounded-lg border-l-4 border-accent-blue bg-accent-blue/5 p-5">
            <p className="font-bold text-navy">45-Day Identification Period</p>
            <p className="mt-1 text-slate-brand">From the date you close on the sale of your relinquished property, you have exactly 45 calendar days to identify potential replacement properties in writing. No extensions, no exceptions.</p>
          </div>
          <div className="rounded-lg border-l-4 border-accent-blue bg-accent-blue/5 p-5">
            <p className="font-bold text-navy">180-Day Exchange Period</p>
            <p className="mt-1 text-slate-brand">You must close on at least one of your identified replacement properties within 180 calendar days of selling your relinquished property. This deadline also cannot be extended.</p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-navy">Like-Kind Is Broader Than You Think</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          &ldquo;Like-kind&rdquo; sounds restrictive, but for real estate it is actually very broad. Any real property held for investment or business use can be exchanged for any other real property held for investment or business use. You can exchange a retail strip center for an apartment complex. You can exchange raw land for an office building. The properties do not need to be the same type, size, or value.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          What does not qualify: personal property, your primary residence, property held primarily for resale (like fix-and-flip projects), and — as of the Tax Cuts and Jobs Act of 2017 — personal property like equipment or vehicles.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">The Role of the Qualified Intermediary</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          You cannot touch the money. That is the cardinal rule of a 1031 exchange. The sale proceeds from your relinquished property must be held by a Qualified Intermediary (QI) — a neutral third party who holds the funds and facilitates the exchange. If the money hits your bank account, the exchange is blown.
        </p>
        <p className="mt-4 text-slate-brand leading-relaxed">
          Choose your QI carefully. They should be bonded, insured, and experienced with commercial transactions. Your attorney, accountant, or broker cannot serve as your QI if they have acted in another capacity for you within the past two years.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-navy">Common 1031 Exchange Mistakes</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-brand leading-relaxed space-y-2">
          <li><strong>Starting too late.</strong> You need your QI in place before the sale closes. Engaging them after closing is too late.</li>
          <li><strong>Not identifying enough properties.</strong> You can identify up to three properties regardless of value (the Three-Property Rule). Having backup options is critical if your first choice falls through.</li>
          <li><strong>Taking boot.</strong> &ldquo;Boot&rdquo; is any value received that is not like-kind — such as cash back at closing or debt reduction. Boot is taxable, so structure your exchange to avoid it.</li>
          <li><strong>Misunderstanding the holding period.</strong> Properties need to be held for investment, not immediate resale. While there is no minimum holding period in the code, the IRS looks at intent. Flipping an exchange property quickly can disqualify the exchange.</li>
          <li><strong>Ignoring state taxes.</strong> Federal tax deferral is just part of the picture. State tax implications vary — Florida has no state income tax, which is one of the advantages of exchanging into Florida property.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-navy">Types of 1031 Exchanges</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          The most common is the <strong>delayed exchange</strong> — sell first, buy the replacement within 180 days. But there are other structures:
        </p>
        <ul className="mt-4 list-disc pl-6 text-slate-brand leading-relaxed space-y-2">
          <li><strong>Simultaneous exchange</strong> — both properties close on the same day. Logistically difficult.</li>
          <li><strong>Reverse exchange</strong> — buy the replacement property before selling the relinquished one. Requires an Exchange Accommodation Titleholder (EAT) to hold the new property.</li>
          <li><strong>Construction/improvement exchange</strong> — use exchange funds to improve the replacement property before taking title. Complex but powerful for value-add strategies.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-navy">The Bottom Line</h2>
        <p className="mt-4 text-slate-brand leading-relaxed">
          A 1031 exchange is one of the best tools available for building long-term wealth through commercial real estate. But the rules are strict, the deadlines are absolute, and the consequences of mistakes are expensive. Work with a team — your broker, a qualified intermediary, and a tax professional — to make sure the exchange is structured correctly from day one.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-navy">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Planning a 1031 Exchange?"
        body="Timing and property selection are everything. I help investors identify replacement properties that fit their strategy and meet exchange deadlines."
        buttonText="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
