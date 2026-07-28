import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Selling Tenant-Occupied Investment Property in Florida
 * Cash sale vs. traditional listing when you have tenants in place.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Selling Tenant-Occupied Investment Property in Florida | HenCRE",
  description:
    "Tenants complicate investment property sales in Florida. Compare cash buyer vs. traditional listing for tenant-occupied properties: timelines, access, lease obligations, and net proceeds.",
  alternates: { canonical: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida" },
  openGraph: {
    title: "Selling Tenant-Occupied Investment Property in Florida",
    description:
      "How Florida landlords navigate tenant access, lease assignment, and buyer pools when selling occupied investment properties.",
    url: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Florida investment property exterior for sale with tenants in place",
      },
    ],
  },
};

const faqItems = [
  {
    question: "Can I sell my Florida investment property while tenants are still living in it?",
    answer: "Yes. Florida law allows investment property owners to sell tenant-occupied properties at any time. Fixed-term leases transfer to the new buyer and run with the property. Month-to-month tenancies can be terminated with 30 days written notice. The key challenge is that your buyer pool narrows to investors rather than owner-occupants, which affects both price and marketing strategy.",
  },
  {
    question: "How much notice do I have to give tenants before showing a property in Florida?",
    answer: "Under Florida Statute Section 83.53, landlords must provide at least 12 hours advance notice before entering a rental unit to show it to prospective buyers. Tenants are entitled to quiet enjoyment, and you cannot require them to leave during showings or make themselves available on demand. Uncooperative tenants can significantly slow a traditional listing.",
  },
  {
    question: "Does a tenant-occupied property sell for less in Florida?",
    answer: "Typically yes, compared to a vacant retail-condition property. Owner-occupant buyers (the largest buyer pool) generally cannot purchase a property that has tenants they cannot immediately occupy. This reduces competition and therefore price. However, if the tenant is paying at or above market rent on a long-term lease with a strong payment history, that documentation becomes a positive underwriting factor for investor buyers.",
  },
  {
    question: "What happens to my tenant's security deposit when I sell a Florida investment property?",
    answer: "Under Florida Statute Section 83.49, security deposits must be transferred to the buyer at closing or returned to the tenant. The purchase and sale agreement should address the disposition of all security deposits. Failure to properly transfer or account for security deposits is one of the most common compliance issues in Florida investment property transactions.",
  },
  {
    question: "Is it better to sell a tenant-occupied property with a cash buyer or through MLS listing?",
    answer: "It depends on the tenant situation and your timeline. A cash buyer closes faster (7 to 21 days), does not require tenant cooperation for showings, and purchases as-is without lender conditions. An MLS listing typically achieves a higher gross price but takes 60 to 120 days, requires showing coordination with tenants, and may require repairs. After accounting for carrying costs, commissions, and risk, the net difference between the two paths often narrows considerably.",
  },
  {
    question: "What is a lease assignment and do buyers assume my tenant leases in Florida?",
    answer: "When a Florida investment property sells with tenants in place, existing fixed-term leases transfer automatically to the new owner by operation of law. This is sometimes called lease assumption or assignment. The tenant's rights and obligations remain unchanged. The buyer inherits the lease terms, including rent amount, lease end date, security deposit, and any special provisions. There is no lease renegotiation required at closing.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Selling Tenant-Occupied Investment Property in Florida",
          item: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Selling Tenant-Occupied Investment Property in Florida",
      description:
        "Practical guide for Florida landlords navigating the sale of tenant-occupied properties.",
      datePublished: "2026-06-17",
      dateModified: "2026-07-28",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/selling-tenant-occupied-investment-property-florida",
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
    title: "Tampa Bay Rental Property Exit Strategy 2026",
    href: "/blog/tampa-bay-rental-property-exit-strategy-2026",
    description: "When holding costs exceed rental income, here is how to evaluate the exit.",
  },
  {
    title: "Florida Insurance Crisis and Investment Properties",
    href: "/blog/florida-insurance-crisis-investment-properties",
    description: "How surging premiums are reshaping ROI for Tampa Bay landlords.",
  },
  {
    title: "Multifamily Investment in Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "What the 2026 Tampa Bay multifamily market means for buyers and sellers.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "Representing sellers of investment and commercial properties in Tampa Bay.",
  },
  {
    title: "Florida 1031 Exchange Guide",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Defer capital gains when selling and reinvest into a replacement property.",
  },
];

export default function TenantOccupiedSalePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Selling Tenant-Occupied Investment Property", href: "/blog/selling-tenant-occupied-investment-property-florida" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
        title="Selling Tenant-Occupied Investment Property in Florida"
        subtitle="Cash buyer versus traditional listing: what changes when tenants are still in the property"
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Selling a tenant-occupied investment property in Florida is meaningfully different from
          selling an owner-occupied home. Tenants have legal rights that affect access, closing
          timelines, and your buyer pool. The lease structure, whether month-to-month or fixed-term,
          determines your options. And the question of whether to sell with tenants in place or
          wait for vacancy dramatically affects both sale price and speed. This guide helps you
          make the right call before you list.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Florida Tenant Rights During a Sale</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Under Florida Statute Section 83.57 and Section 83.575, tenants have specific rights when a property
          is sold:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[#666666] leading-relaxed">
          <li>
            <strong>Fixed-term leases run with the property.</strong> If your tenant has a lease
            through December 2026, the buyer inherits that lease. The tenant does not have to move.
            This limits your buyer pool to investors who want tenants in place or who are willing
            to wait.
          </li>
          <li>
            <strong>Month-to-month tenancies:</strong> You can terminate with 15 days&apos; notice
            for weekly tenancies or 30 days&apos; notice for month-to-month tenancies under one
            year. This gives you more flexibility to sell vacant, but adds 30 to 60 days to your
            timeline before the property is showable in standard condition.
          </li>
          <li>
            <strong>Access for showings:</strong> Florida landlords must give 12 hours&apos; advance
            notice before entering a leased unit for showings. Tenants are entitled to quiet
            enjoyment and cannot be pressured to cooperate with frequent showings. Uncooperative
            tenants can significantly slow a traditional listing. See our{" "}
            <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">
              commercial due diligence timeline
            </Link>{" "}
            for how access issues affect investment property transactions broadly.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Traditional Listing vs. Cash Buyer for Tenant-Occupied Property</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The math on these two paths is different enough that most investment property sellers
          benefit from modeling both before deciding. Our{" "}
          <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link>{" "}
          can help you run the holding cost comparison.
        </p>

        <h3 className="mt-8 text-xl font-bold text-black">Traditional Listing (MLS)</h3>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A traditional listing typically achieves the highest gross sale price, but not always
          the highest net. With tenants in place, your buyer pool narrows to investors. Owner-occupant
          buyers cannot purchase the property unless they are willing to wait
          out the lease. A smaller buyer pool means less competition and a lower final price than
          a vacant, market-ready property would achieve. Additionally, showing coordination,
          tenant cooperation issues, and the time required for investment-buyer financing all
          extend the closing timeline to 60 to 120 days. For context on how insurance costs are
          compressing investor returns and affecting buyer pools, see our guide on the{" "}
          <Link href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">
            Florida insurance crisis and investment properties
          </Link>.
        </p>

        <h3 className="mt-8 text-xl font-bold text-black">Cash Buyer</h3>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Cash buyers purchase tenant-occupied investment properties as-is, closing in 14 to 30
          days without showings, loan approval, or tenant cooperation requirements. The offer is
          lower than what a vacant, fully-renovated property would achieve at retail, but after
          removing agent commissions (5 to 6%), carrying costs during an extended listing, and the
          risk discount a limited buyer pool creates, the net difference often narrows significantly.
          For landlords dealing with deferred maintenance, difficult tenants, or a desire to close
          this calendar year, a cash sale frequently makes more financial sense than the headline
          offer gap suggests. Our{" "}
          <Link href="/services/investment-sales" className="text-accent underline">investment sales team</Link>{" "}
          can model both paths with real numbers for your specific property.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">When Selling With Tenants in Place Makes Sense</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[#666666] leading-relaxed">
          <li>Long-term tenants paying at or above market rent with solid payment history</li>
          <li>Remaining lease term is attractive to a buyer investor (12 or more months)</li>
          <li>Property is in good condition with deferred maintenance already addressed</li>
          <li>You have flexibility on timeline and can manage the showing process</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">When a Cash Sale Makes More Sense</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[#666666] leading-relaxed">
          <li>Tenants are month-to-month but uncooperative with showings</li>
          <li>Property needs repairs that tenants will not allow access to complete</li>
          <li>You are selling to meet a tax-year deadline or divorce settlement timeline</li>
          <li>Deferred maintenance has accumulated and reduces appeal to investor buyers</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For situations where deferred maintenance extends to structural or pest issues, see our
          guide on{" "}
          <Link href="/blog/termite-damage-investment-property-florida" className="text-accent underline">
            termite damage in Florida investment properties
          </Link>{" "}
          for the full repair-vs-sell analysis.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Get a Florida Investment Property Evaluation</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Barrett Henry at REMAX Collective works with investment property owners across Tampa Bay
          on the full sell-side process, from evaluating the listing-versus-cash comparison to
          representing you in a traditional sale or connecting you with qualified cash buyers. He
          also evaluates whether a{" "}
          <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">
            1031 exchange
          </Link>{" "}
          makes sense for your specific situation. Contact Barrett at{" "}
          <a href="tel:+18137337907" className="text-accent underline">(813) 733-7907</a> or{" "}
          <a href="/contact" className="text-accent underline">request a free consultation</a>.
        </p>

        {/* ---- Mid-article CTA ---- */}
        <div className="my-10 rounded-lg bg-[#1a1a1a] p-8 text-center text-white">
          <p className="text-lg font-bold">Talk to a REMAX Commercial Broker</p>
          <p className="mt-2 text-white/80">
            Call <a href="tel:8137337907" className="underline">(813) 733-7907</a> or{" "}
            <a href="/contact" className="underline">send a message</a>.
          </p>
        </div>

        <p className="mt-6 text-xs text-[#666666]">Last updated: July 2026</p>
      </article>

      {/* ---- FAQ Section ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
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
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | 23+ Years of Real Estate Experience</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett Henry is a licensed Florida REALTOR and Broker Associate at REMAX Collective,
              specializing in investment property dispositions across Tampa Bay and all 67 Florida
              counties. Offices in Tampa, Largo, and Brandon.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Legal Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          Disclaimer: This article is for informational purposes only and does not constitute legal, financial, or investment advice. Consult qualified professionals before making real estate decisions.
        </p>
      </section>

      <CTASection
        heading="Selling a Tenant-Occupied Investment Property?"
        body="Get a clear evaluation of your options, listing vs. cash sale, with real numbers for your specific situation."
        buttonText="Talk to Barrett Henry"
        buttonHref="/contact"
      />
    </>
  );
}
