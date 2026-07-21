import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Florida 1031 Exchange | What CRE Investors Need to Know",
  description:
    "Florida-specific 1031 exchange considerations for commercial real estate investors — no state income tax advantages, property type flexibility, and common pitfalls.",
  alternates: { canonical: "https://hencre.com/blog/florida-1031-exchange-what-investors-need-to-know" },
  openGraph: {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    description:
      "Florida-specific 1031 exchange considerations for commercial real estate investors — tax advantages, property flexibility, and common pitfalls.",
    url: "https://hencre.com/blog/florida-1031-exchange-what-investors-need-to-know",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "real estate letter blocks",
      },
    ],
  },
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
      "Yes. 1031 exchanges are not limited to the same state. You can sell an investment property in any state and exchange into Florida real estate, as long as both properties qualify as like-kind (held for investment or business use). Many investors exchange into Florida specifically for the no-income-tax advantage.",
  },
  {
    question: "Do Florida documentary stamp taxes apply to 1031 exchanges?",
    answer:
      "Yes. Florida documentary stamp taxes (doc stamps) and, in some counties, surtaxes apply to the deed transfer on the replacement property, just as they would in any real estate purchase. The 1031 exchange defers federal capital gains tax but does not exempt you from Florida transfer taxes.",
  },
  {
    question: "How do I find a qualified intermediary in Florida?",
    answer:
      "Look for a QI that is bonded, insured, and experienced with commercial real estate exchanges. Your broker, attorney, or CPA can typically recommend qualified intermediaries they have worked with. Make sure the QI is in place before you close on the sale of your relinquished property.",
  },
  {
    question: "What is the 45-day identification rule in a 1031 exchange?",
    answer:
      "The IRS requires you to identify potential replacement properties in writing within 45 days of closing on the sale of your relinquished property. The Three-Property Rule allows you to identify up to three properties regardless of value. You must then close on at least one identified property within 180 days. Missing either deadline disqualifies the exchange and triggers immediate tax liability.",
  },
  {
    question: "What types of Florida properties qualify for a 1031 exchange?",
    answer:
      "Any property held for investment or productive use in a trade or business qualifies. This includes commercial properties (retail, office, industrial), multifamily apartment buildings, NNN-leased single-tenant retail, raw land, and even vacation rentals held primarily for investment. Primary residences do not qualify, and properties held primarily for sale (like a house flipper's inventory) do not qualify.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Florida 1031 Exchange: What Investors Need to Know",
      description:
        "Florida-specific 1031 exchange considerations for commercial real estate investors.",
      datePublished: "2026-05-28",
      dateModified: "2026-07-20",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate, Commercial Real Estate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/florida-1031-exchange-what-investors-need-to-know",
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
    title: "What Is a Triple Net NNN Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "NNN properties are popular 1031 exchange targets.",
  },
  {
    title: "Cap Rate Calculator",
    href: "/calculators/cap-rate",
    description: "Evaluate replacement property returns before your deadline.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps exchange buyers close on Florida properties.",
  },
  {
    title: "Commercial Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "What to inspect before closing on a replacement property.",
  },
];

export default function Florida1031Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Florida 1031 Exchange", href: "/blog/florida-1031-exchange-what-investors-need-to-know" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?w=1600&h=900&fit=crop"
        title="Florida 1031 Exchange: What Investors Need to Know"
        subtitle="Florida's tax-friendly environment makes it one of the best states to exchange into. Here is what you need to know about executing a 1031 exchange in the Sunshine State."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Florida has become a magnet for real estate investors executing 1031 exchanges, and the reasons go beyond beaches and sunshine. The combination of no state income tax, strong population growth, and a diverse commercial real estate market makes Florida one of the most attractive destinations for exchange buyers nationwide. But there are Florida-specific considerations you need to understand. Barrett Henry has guided exchange buyers from{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>{" "}
          to{" "}
          <Link href="/markets/sarasota" className="text-accent underline">Sarasota</Link>{" "}
          and beyond — here is what he tells investor clients.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The No-Income-Tax Advantage</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is the big one. Florida has no state income tax — and that includes no state-level capital gains tax on real estate transactions. If you are exchanging out of a state like California, New York, or New Jersey, where state capital gains rates can be substantial, moving your investment to Florida means you avoid that state tax bite entirely.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          However, be aware of &ldquo;clawback&rdquo; provisions. Some states (California is the most aggressive) may attempt to collect state capital gains tax on the deferred gain from the original property if you exchange into an out-of-state replacement. The rules are complex and state-specific, so work with a tax professional who understands multi-state exchange implications.
        </p>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
            alt="Real estate investment documents and financial calculator representing 1031 exchange planning"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">A 1031 exchange requires strict adherence to IRS timelines — identifying replacement properties within 45 days and closing within 180 days of selling the relinquished property.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Exchanging Into Florida From Out of State</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          One of the most common scenarios Barrett works with is out-of-state investors selling property in a high-tax state and exchanging into Florida commercial real estate. The IRS does not restrict 1031 exchanges to the same state — you can sell in any state and buy in any other state, as long as both properties are held for investment or business use.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For these buyers, Barrett identifies replacement properties that meet exchange criteria, investment goals, and timeline requirements. The 45-day identification window does not leave much room for leisurely property shopping — you need a broker who knows the market and can move quickly. Properties in growing markets like{" "}
          <Link href="/markets/pasco" className="text-accent underline">Pasco County</Link>{" "}
          and{" "}
          <Link href="/markets/manatee" className="text-accent underline">Manatee County</Link>{" "}
          are frequently targeted by exchange buyers for their combination of growth fundamentals and price points.
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

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
            alt="Commercial real estate properties in Florida representing popular 1031 exchange replacement targets"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Florida commercial real estate — from NNN retail to industrial and multifamily — is among the most popular replacement property targets for 1031 exchange buyers nationwide.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Florida Property Types Popular for Exchanges</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Exchange buyers coming to Florida tend to gravitate toward certain property types:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong><Link href="/commercial/nnn-net-lease" className="text-accent underline">NNN retail with national tenants.</Link></strong> Freestanding buildings leased to pharmacy chains, quick-service restaurants, dollar stores, and auto parts retailers are popular because they offer predictable income with minimal management. Read our{" "}
            <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">NNN lease guide</Link>{" "}
            for more on this structure.</li>
          <li><strong>Small multi-tenant retail.</strong> Strip centers with diverse tenant mixes in growing suburban corridors. View available{" "}
            <Link href="/commercial/retail-space" className="text-accent underline">retail space listings</Link>.</li>
          <li><strong><Link href="/commercial/industrial-warehouse" className="text-accent underline">Industrial and warehouse.</Link></strong> Florida&apos;s logistics sector is strong, and industrial properties offer attractive returns with relatively low maintenance.</li>
          <li><strong>Medical office.</strong> Healthcare demand is consistent and growing, making medical office a resilient investment.</li>
          <li><strong>Multifamily.</strong> Apartment buildings also qualify for 1031 exchanges and are extremely popular in Florida. Read our{" "}
            <Link href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">Tampa Bay multifamily investment guide</Link>.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Timing and Strategy Tips</h2>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Start early.</strong> Begin working with a Florida broker before you list your relinquished property. Understanding the replacement market helps you price and time your sale.</li>
          <li><strong>Identify more than one property.</strong> The Three-Property Rule lets you identify up to three replacement properties. Use all three slots — deals fall through, and you need backup options.</li>
          <li><strong>Factor in Florida insurance costs.</strong> Property insurance in Florida — especially for coastal properties — can be significantly higher than in other states. Build this into your pro forma before identifying properties.</li>
          <li><strong>Understand hurricane exposure.</strong> Florida properties carry wind and flood risk. Review insurance requirements, flood zone designations, and any mitigation improvements on the property.</li>
          <li><strong>Coordinate your team.</strong> You need a qualified intermediary, a Florida-licensed broker, a real estate attorney familiar with Florida law, and a CPA who understands multi-state exchange implications. Get everyone on the same page early. The{" "}
            <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence timeline</Link>{" "}
            is compressed in exchanges — plan accordingly.</li>
          <li><strong>Use the cap rate calculator.</strong> Before committing to a replacement property, use our{" "}
            <Link href="/calculators/cap-rate" className="text-accent underline">cap rate calculator</Link>{" "}
            to benchmark returns against your investment criteria.</li>
        </ul>

        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="Real estate investor reviewing Florida 1031 exchange replacement property options"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />
          <p className="mt-2 text-sm text-[#666666] italic">Exchange buyers have just 45 days to identify replacement properties and 180 days to close — working with a broker who knows the Florida market before you list your relinquished property is essential.</p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Florida is one of the best states in the country for 1031 exchange buyers — no state income tax, strong market fundamentals, and a deep inventory of investment-grade commercial properties. But the exchange process demands careful planning, strict adherence to deadlines, and a team that knows the Florida market. Barrett Henry helps exchange buyers identify replacement properties across{" "}
          <Link href="/markets" className="text-accent underline">all major Florida markets</Link>,
          evaluate the numbers, and close within your timeline. Contact him before you list your relinquished property to get the replacement search started on time.
        </p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">Florida 1031 Exchange — Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Exchanging Into Florida?"
        body="Barrett helps out-of-state investors identify and close on Florida replacement properties within tight exchange deadlines. Get started before you list your relinquished property."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: July 2026</p>
      </div>
    </>
  );
}
