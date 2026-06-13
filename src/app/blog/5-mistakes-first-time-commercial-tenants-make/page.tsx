import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: 5 Mistakes First-Time Commercial Tenants Make
 * Practical advice for new commercial tenants.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "5 Mistakes First-Time Commercial Tenants Make (and How to Avoid Them)",
  description:
    "Avoid the most common mistakes first-time commercial tenants make — from skipping lease review to underestimating total occupancy costs. Expert broker advice.",
  openGraph: {
    title: "5 Mistakes First-Time Commercial Tenants Make",
    description:
      "Avoid the most common mistakes first-time commercial tenants make — from skipping lease review to underestimating total occupancy costs.",
    url: "https://hencre.com/blog/5-mistakes-first-time-commercial-tenants-make",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "man writing on paper",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Mistakes First-Time Commercial Tenants Make (and How to Avoid Them)",
  description:
    "Avoid the most common mistakes first-time commercial tenants make — from skipping lease review to underestimating total occupancy costs.",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "REMAX Commercial Real Estate", url: "https://hencre.com" },
  url: "https://hencre.com/blog/5-mistakes-first-time-commercial-tenants-make",
};

const relatedLinks = [
  {
    title: "CAM Charges Explained",
    href: "/insights/cam-charges-explained",
    description: "What common area maintenance covers and how to negotiate it.",
  },
  {
    title: "NNN Leases Explained",
    href: "/insights/nnn-lease-explained",
    description: "Triple net leases: what tenants and landlords need to know.",
  },
  {
    title: "Gross vs. Net Lease Structures",
    href: "/insights/gross-vs-net-lease",
    description: "Compare lease types and their impact on operating costs.",
  },
  {
    title: "Do You Need a Commercial Real Estate Broker?",
    href: "/blog/do-you-need-a-commercial-real-estate-broker",
    description: "When and why to hire a CRE broker for your lease.",
  },
];

export default function TenantMistakesPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "5 Mistakes First-Time Tenants Make", href: "/blog/5-mistakes-first-time-commercial-tenants-make" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
        title="5 Mistakes First-Time Commercial Tenants Make"
        subtitle="Signing your first commercial lease is exciting — but these common mistakes can cost you real money. Here is how to avoid them."
      />

      {/* Hero image — Photo by Scott Graham on Unsplash */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[2/1] overflow-hidden rounded-xl mb-8">
          <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop" alt="man writing on paper" fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Your first commercial lease is a major milestone. Whether you are opening a restaurant, a medical practice, a retail shop, or an office, the space you choose and the terms you agree to will directly impact your business&apos;s bottom line for years. I have helped dozens of first-time commercial tenants navigate this process, and I see the same mistakes come up again and again. Here are the five biggest ones — and how to sidestep them.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Mistake 1: Only Looking at Base Rent</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          This is the number one mistake, and it is the most expensive. When a landlord quotes $18 per square foot, most first-time tenants assume that is their cost. In a NNN lease, it is not — not even close. You need to add property taxes, insurance, and common area maintenance (CAM) charges on top of that base rent.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          I have seen tenants sign leases thinking they were getting a great deal, only to discover that their actual monthly cost is 30% to 50% higher than the base rent they negotiated. Always ask for the total occupancy cost — base rent plus all additional charges — before comparing spaces.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>How to avoid it:</strong> Request a detailed breakdown of all charges before signing. Calculate your total annual and monthly cost, including base rent, NNN expenses, utility estimates, and any required insurance. Compare spaces on an all-in-cost basis, not just base rent.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Mistake 2: Not Understanding the Lease Structure</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Gross lease, modified gross, NNN — these are not interchangeable terms, and the structure you agree to fundamentally changes your financial obligation. A gross lease includes expenses in the rent. A NNN lease adds them on top. A modified gross splits them.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          First-time tenants often do not know what they are agreeing to because they have never seen a commercial lease before. Commercial leases are not like residential leases — they are complex legal documents that can be 30 to 50 pages long, and almost everything is negotiable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>How to avoid it:</strong> Read every page of the lease. Better yet, have a commercial real estate broker and/or attorney review it before you sign. Understand what you are paying for and what your obligations are.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Mistake 3: Ignoring the Personal Guarantee</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Most landlords require a personal guarantee from the business owner, especially for first-time tenants or new businesses. This means if your business fails and cannot pay the remaining lease obligation, you are personally responsible. That could mean paying rent on a space you are no longer using for years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Too many tenants gloss over this clause. It is one of the most consequential provisions in the entire lease.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>How to avoid it:</strong> Negotiate the scope of your personal guarantee. Options include limiting it to a specific dollar amount, a certain number of months of rent, or a &ldquo;burning&rdquo; guarantee that reduces over time as you build a track record of on-time payments.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Mistake 4: Underestimating Build-Out Costs and Timelines</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Most commercial spaces are delivered as a &ldquo;vanilla shell&rdquo; or in as-is condition. You are responsible for building out the interior to suit your business — flooring, walls, lighting, plumbing, electrical, fixtures, and signage. These costs add up fast, and the construction timeline almost always takes longer than expected.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Meanwhile, your lease clock may be ticking. If your rent starts on the lease commencement date but your build-out is not done, you are paying rent on a space you cannot use.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>How to avoid it:</strong> Get contractor bids before you sign the lease, not after. Negotiate a rent abatement period (free rent) that covers your build-out timeline. Ask the landlord for a tenant improvement (TI) allowance to offset your construction costs.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Mistake 5: Not Having Representation</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The listing broker works for the landlord. Their job is to get the landlord the best deal possible. When you walk into a negotiation without your own broker, you are relying on the other side to look out for your interests. That is not how it works.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Here is the part that surprises most people: tenant representation is typically free to the tenant. The landlord pays the commission to both brokers. There is literally no cost to having someone in your corner, and the savings from better lease terms almost always exceed what you would have paid even if there were a fee.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>How to avoid it:</strong> Hire a tenant rep broker before you start looking at spaces. They will help you identify properties, negotiate terms, review the lease, and manage the process from search through move-in.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Your first commercial lease sets the foundation for your business operations. Getting it right means understanding your total cost, knowing what you are signing, protecting yourself financially, and having the right people advising you. These are not difficult things to do — they just require awareness and preparation. If you are looking for your first commercial space, I am here to help you navigate the process and avoid these costly mistakes.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Looking for Your First Commercial Space?"
        body="I help first-time commercial tenants find the right space, negotiate fair terms, and avoid costly mistakes. The consultation is on me."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  );
}
