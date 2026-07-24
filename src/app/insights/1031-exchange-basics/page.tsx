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
 * Insight: 1031 Exchange Basics
 * Evergreen explainer — tax-deferred exchanges for CRE investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "1031 Exchange Basics | Tax-Deferred CRE Exchanges",
  description:
    "Understand 1031 exchange fundamentals — timelines, rules, qualified intermediaries, and common mistakes. Expert guidance for CRE investors in Florida.",
  alternates: { canonical: "https://hencre.com/insights/1031-exchange-basics" },
  openGraph: {
    title: "1031 Exchange Basics: Tax-Deferred Exchanges for CRE Investors",
    description:
      "Understand 1031 exchange fundamentals — timelines, rules, qualified intermediaries, and common mistakes.",
    url: "https://hencre.com/insights/1031-exchange-basics",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What is a 1031 exchange?",
    answer:
      "A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows investors to defer capital gains taxes when they sell an investment property and reinvest the proceeds into a like-kind replacement property. It is a tax deferral strategy, not a tax elimination.",
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
    question: "What does like-kind mean in a 1031 exchange?",
    answer:
      "Like-kind is broadly defined for real estate. Any real property held for investment can be exchanged for any other real property held for investment. You can exchange a retail strip center for an apartment building, or raw land for an office building. The properties do not need to be the same type.",
  },
  {
    question: "Why is Florida a popular destination for 1031 exchange replacement properties?",
    answer:
      "Florida has no state income tax, which eliminates a layer of tax liability that investors face in most other states. Combined with strong population growth, robust commercial demand, and a wide variety of NNN and multifamily assets available across markets like Tampa Bay, Sarasota, and Pasco County, Florida is among the most attractive 1031 replacement property markets in the country.",
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
        { "@type": "ListItem", position: 3, name: "1031 Exchange Basics", item: "https://hencre.com/insights/1031-exchange-basics" },
      ],
    },
    {
      "@type": "Article",
      headline: "1031 Exchange Basics: Tax-Deferred Exchanges for CRE Investors",
      description:
        "Understand 1031 exchange fundamentals — timelines, rules, qualified intermediaries, and common mistakes.",
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
      url: "https://hencre.com/insights/1031-exchange-basics",
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
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: "1031 Exchange Basics", href: "/insights/1031-exchange-basics" },
        ]}
      />

      <Hero
        title="1031 Exchange Basics"
        subtitle="Tax-deferred exchanges let you reinvest your gains instead of paying them to Uncle Sam. Here is how they work and where investors trip up."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          If you own commercial real estate and have ever thought about selling, someone has probably mentioned a 1031 exchange. It is one of the most powerful wealth-building tools available to real estate investors — and one of the most misunderstood. As a Broker Associate at REMAX Collective with 23+ years of real estate experience, I have guided clients through these exchanges on <Link href="/commercial/multifamily" className="text-accent underline">multifamily</Link>, <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN</Link>, <Link href="/commercial/retail-space" className="text-accent underline">retail</Link>, and <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial</Link> properties across Florida. The difference between doing it right and making a costly mistake often comes down to understanding a few key rules.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is a 1031 Exchange?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Section 1031 of the Internal Revenue Code allows you to sell an investment property and defer the capital gains taxes by reinvesting the proceeds into another &ldquo;like-kind&rdquo; property. The key word is <strong>defer</strong> — you are not eliminating the tax, you are postponing it. If you eventually sell without exchanging, the accumulated gains become taxable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The power of this strategy is compounding. Instead of losing a significant percentage of your gain to taxes on each sale, you keep that capital working for you and can trade up into larger, more productive properties over time. Many of my clients have used 1031 exchanges to move from a single retail strip center into a diversified portfolio across <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough</Link>, <Link href="/markets/polk" className="text-accent underline">Polk</Link>, and <Link href="/markets/manatee" className="text-accent underline">Manatee</Link> counties. For a deeper Florida-specific perspective, see our guide on <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">Florida 1031 exchanges</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Two Critical Deadlines</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Every 1031 exchange lives and dies by two deadlines. Miss either one and the exchange fails — you owe the taxes in full.
        </p>
        <div className="my-6 space-y-4">
          <div className="rounded-lg border-l-4 border-black bg-black/5 p-5">
            <p className="font-bold text-black">45-Day Identification Period</p>
            <p className="mt-1 text-[#666666]">From the date you close on the sale of your relinquished property, you have exactly 45 calendar days to identify potential replacement properties in writing. No extensions, no exceptions.</p>
          </div>
          <div className="rounded-lg border-l-4 border-black bg-black/5 p-5">
            <p className="font-bold text-black">180-Day Exchange Period</p>
            <p className="mt-1 text-[#666666]">You must close on at least one of your identified replacement properties within 180 calendar days of selling your relinquished property. This deadline also cannot be extended.</p>
          </div>
        </div>
      </article>

      {/* ---- Image 1: Investment documents ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=75"
          alt="1031 exchange documents and timeline planning for Florida commercial real estate investors"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">The 45-day identification window starts the moment you close on your relinquished property. Work with a qualified intermediary and a broker to have replacement candidates identified before you sell. See our <Link href="/insights/cre-due-diligence-checklist" className="underline">due diligence checklist</Link> for acquisition guidance.</p>
      </section>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mt-10 text-2xl font-bold text-black">Like-Kind Is Broader Than You Think</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          &ldquo;Like-kind&rdquo; sounds restrictive, but for real estate it is actually very broad. Any real property held for investment or business use can be exchanged for any other real property held for investment or business use. You can exchange a retail strip center for an apartment complex. You can exchange raw land for an office building. The properties do not need to be the same type, size, or value. This opens the door to moving from active management of a <Link href="/commercial/multifamily" className="text-accent underline">multifamily</Link> asset into a passive <Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN investment</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What does not qualify: personal property, your primary residence, property held primarily for resale (like fix-and-flip projects), and — as of the Tax Cuts and Jobs Act of 2017 — personal property like equipment or vehicles.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Role of the Qualified Intermediary</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          You cannot touch the money. That is the cardinal rule of a 1031 exchange. The sale proceeds from your relinquished property must be held by a Qualified Intermediary (QI) — a neutral third party who holds the funds and facilitates the exchange. If the money hits your bank account, the exchange is blown.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Choose your QI carefully. They should be bonded, insured, and experienced with commercial transactions. Your attorney, accountant, or broker cannot serve as your QI if they have acted in another capacity for you within the past two years.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Common 1031 Exchange Mistakes</h2>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Starting too late.</strong> You need your QI in place before the sale closes. Engaging them after closing is too late.</li>
          <li><strong>Not identifying enough properties.</strong> You can identify up to three properties regardless of value (the Three-Property Rule). Having backup options is critical if your first choice falls through.</li>
          <li><strong>Taking boot.</strong> &ldquo;Boot&rdquo; is any value received that is not like-kind — such as cash back at closing or debt reduction. Boot is taxable, so structure your exchange to avoid it. Work with a broker experienced in <Link href="/services/dispositions" className="text-accent underline">dispositions</Link> to structure the sale correctly.</li>
          <li><strong>Misunderstanding the holding period.</strong> Properties need to be held for investment, not immediate resale. While there is no minimum holding period in the code, the IRS looks at intent. Flipping an exchange property quickly can disqualify the exchange.</li>
          <li><strong>Ignoring state taxes.</strong> Federal tax deferral is just part of the picture. Florida has no state income tax, which is one of the advantages of exchanging into Florida property — across <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link>, <Link href="/markets/brevard" className="text-accent underline">Brevard</Link>, or <Link href="/markets/pasco" className="text-accent underline">Pasco</Link>.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Types of 1031 Exchanges</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most common is the <strong>delayed exchange</strong> — sell first, buy the replacement within 180 days. But there are other structures:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Simultaneous exchange</strong> — both properties close on the same day. Logistically difficult.</li>
          <li><strong>Reverse exchange</strong> — buy the replacement property before selling the relinquished one. Requires an Exchange Accommodation Titleholder (EAT) to hold the new property.</li>
          <li><strong>Construction/improvement exchange</strong> — use exchange funds to improve the replacement property before taking title. Complex but powerful for value-add strategies, especially with <Link href="/commercial/industrial-warehouse" className="text-accent underline">industrial</Link> or <Link href="/commercial/office-space" className="text-accent underline">office</Link> properties requiring renovation.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A 1031 exchange is one of the best tools available for building long-term wealth through commercial real estate. But the rules are strict, the deadlines are absolute, and the consequences of mistakes are expensive. Work with a team — your broker, a qualified intermediary, and a tax professional — to make sure the exchange is structured correctly from day one. Understanding property value going in is essential, so pair this guide with our <Link href="/insights/how-to-value-commercial-property" className="text-accent underline">commercial property valuation guide</Link> and our <Link href="/insights/what-is-a-cap-rate" className="text-accent underline">cap rate explainer</Link>.
        </p>
      </article>

      {/* ---- Image 2: Florida commercial property for exchange ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=75"
          alt="Florida commercial office building as 1031 exchange replacement property"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Florida&apos;s no-income-tax environment makes it one of the best 1031 exchange destinations in the U.S. Properties across <Link href="/markets/hillsborough" className="underline">Tampa Bay</Link>, <Link href="/markets/sarasota" className="underline">Sarasota</Link>, and <Link href="/markets/polk" className="underline">Polk County</Link> are popular replacement candidates.</p>
      </section>

      {/* ---- Image 3: Investor review ---- */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-8">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=75"
          alt="Investor reviewing 1031 exchange cap rate and ROI calculations for Florida replacement property"
          width={800}
          height={500}
          className="w-full rounded-lg"
          unoptimized
        />
        <p className="mt-2 text-xs text-center text-[#666666]">Identifying replacement properties that meet your investment criteria within 45 days requires preparation. Use our <Link href="/calculators/cap-rate" className="underline">cap rate calculator</Link> and <Link href="/calculators/roi" className="underline">ROI calculator</Link> to evaluate candidates quickly.</p>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion items={faqItems} />

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Planning a 1031 Exchange?"
        body="Timing and property selection are everything. I help investors identify replacement properties that fit their strategy and meet exchange deadlines."
        buttonText="Start the Conversation"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
