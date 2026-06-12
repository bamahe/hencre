import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Do You Need a Commercial Real Estate Broker?
 * When and why to hire a CRE broker.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Do You Need a Commercial Real Estate Broker?",
  description:
    "When and why to hire a commercial real estate broker — tenant representation, buyer advocacy, lease negotiation, and deal sourcing. A broker explains the value.",
  openGraph: {
    title: "Do You Need a Commercial Real Estate Broker?",
    description:
      "When and why to hire a commercial real estate broker — tenant representation, buyer advocacy, and lease negotiation.",
    url: "https://hencre.com/blog/do-you-need-a-commercial-real-estate-broker",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Do You Need a Commercial Real Estate Broker?",
  description:
    "When and why to hire a commercial real estate broker — tenant representation, buyer advocacy, and lease negotiation.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "REALTOR\u00AE & Broker Associate",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Real Estate", url: "https://hencre.com" },
  url: "https://hencre.com/blog/do-you-need-a-commercial-real-estate-broker",
};

const relatedLinks = [
  {
    title: "5 Mistakes First-Time Commercial Tenants Make",
    href: "/blog/5-mistakes-first-time-commercial-tenants-make",
    description: "Common tenant pitfalls a broker helps you avoid.",
  },
  {
    title: "Leasing vs. Buying Commercial Space",
    href: "/insights/leasing-vs-buying-commercial",
    description: "Decision framework for the lease vs. purchase question.",
  },
  {
    title: "CRE Due Diligence Checklist",
    href: "/insights/cre-due-diligence-checklist",
    description: "Everything to inspect when buying commercial property.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "Investment criteria from a broker's perspective.",
  },
];

export default function NeedABrokerPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Do You Need a CRE Broker?", href: "/blog/do-you-need-a-commercial-real-estate-broker" },
        ]}
      />

      <Hero
        title="Do You Need a Commercial Real Estate Broker?"
        subtitle="Yes, I am biased. But here is the honest case for when a broker adds value — and when you might not need one."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          I am a commercial real estate broker, so you might expect me to say you always need one. The truth is more nuanced. There are situations where a broker is essential, situations where one adds significant value, and a few narrow cases where you might be fine on your own. Let me break it down honestly.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What a Commercial Broker Actually Does</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before we talk about when you need one, let me clarify what we actually do. A commercial real estate broker is not just someone who shows you properties. We:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Source properties.</strong> Many commercial opportunities are not publicly listed. Brokers have networks and databases that give you access to off-market deals and properties that have not hit the open market yet.</li>
          <li><strong>Analyze deals.</strong> We evaluate the financial performance of properties — NOI, cap rates, rent comparables, and total occupancy costs. We know what a good deal looks like in the current market.</li>
          <li><strong>Negotiate terms.</strong> Commercial lease negotiation involves dozens of provisions beyond just rent — personal guarantees, CAM caps, tenant improvement allowances, renewal options, exclusivity clauses, and more. We know what to ask for and what to fight for.</li>
          <li><strong>Manage the process.</strong> From letter of intent through closing, there are inspections, environmental assessments, financing, legal review, and deadlines to coordinate. We keep the process on track.</li>
          <li><strong>Provide market knowledge.</strong> We know what comparable properties are renting for, what has sold recently, and what the market trajectory looks like. This intelligence informs every decision.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">When You Definitely Need a Broker</h2>

        <h3 className="mt-6 text-xl font-bold text-black">You Are a First-Time Commercial Tenant</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          If you have never signed a commercial lease before, going without representation is risky. Commercial leases are not standardized consumer documents — they are negotiated agreements where every clause matters. A broker protects you from signing terms that cost you money or lock you into obligations you do not understand.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">You Are Buying Investment Property</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          The financial analysis involved in evaluating a commercial investment property — verifying NOI, assessing tenant risk, analyzing lease terms, and determining fair market value — requires expertise. Mistakes in underwriting can cost you tens of thousands of dollars or more.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">You Are Selling Commercial Property</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          A broker brings exposure, marketing, buyer networks, and negotiation skills. We position the property to maximize value and manage the sales process from listing through closing. The commission we earn is typically more than offset by the higher price and faster timeline.
        </p>

        <h3 className="mt-6 text-xl font-bold text-black">You Are Relocating or Expanding Your Business</h3>
        <p className="mt-3 text-[#666666] leading-relaxed">
          Site selection is more complex than finding a space with the right square footage. We evaluate zoning, parking ratios, visibility, co-tenancy, and dozens of other factors that affect whether a location will work for your business. A wrong location choice is far more expensive than a broker&apos;s fee.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Cost Question: Who Pays the Broker?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is the part that surprises most people, especially those coming from the residential world. In commercial real estate:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Tenant representation</strong> — the landlord typically pays the commission for both the listing broker and the tenant&apos;s broker. Tenant representation is usually free to the tenant.</li>
          <li><strong>Buyer representation</strong> — the seller typically pays the commission. Buyer representation is usually free to the buyer.</li>
          <li><strong>Seller/landlord representation</strong> — the seller or landlord pays their broker directly from proceeds.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In other words, if you are a tenant or buyer, you can usually get professional representation at no direct cost. The landlord or seller has already budgeted for broker compensation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">When You Might Not Need a Broker</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In fairness, there are a few scenarios where you might handle things on your own:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>You are an experienced investor or operator</strong> who has done multiple commercial deals and has your own network, attorney, and due diligence process.</li>
          <li><strong>You are renewing an existing lease</strong> where you know the space, know the landlord, and just need to negotiate updated terms. Even here, a broker can often negotiate better terms than you would get on your own.</li>
          <li><strong>The transaction is very small</strong> — a short-term sublease or a month-to-month arrangement with minimal financial exposure.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Even in these cases, a quick phone call with a broker for advice costs you nothing and might surface something you had not considered.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How to Choose the Right Broker</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Not all brokers are created equal. Look for:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Commercial specialization.</strong> Residential and commercial are different industries. Make sure your broker focuses on commercial transactions.</li>
          <li><strong>Local market knowledge.</strong> They should know the market you are looking in — comparable rents, recent transactions, and the landlord and investor landscape.</li>
          <li><strong>Property type experience.</strong> Industrial, office, retail, and multifamily each have their own dynamics. Find someone who knows your property type.</li>
          <li><strong>Responsiveness and communication.</strong> You want a broker who returns calls, explains things clearly, and keeps you informed throughout the process.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          A good commercial broker does more than find you a space or list your property. We protect your financial interests, uncover risks you would not see on your own, and negotiate terms that save you money. For most commercial real estate transactions, having a broker is not just helpful — it is one of the smartest moves you can make. And for tenants and buyers, it usually costs you nothing.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Ready to Talk About Your CRE Needs?"
        body="Whether you are leasing, buying, selling, or investing — I am here to help. No pressure, just honest guidance."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
