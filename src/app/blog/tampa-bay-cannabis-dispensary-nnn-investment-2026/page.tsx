import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import Image from "next/image";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Bay Cannabis Dispensary NNN Investment 2026
 * Single-tenant medical marijuana dispensaries as a net lease asset
 * class — cap rates, tenant credit, zoning, and investor risks in
 * one of Florida's most active dispensary markets.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Cannabis Dispensary NNN Investment in Tampa Bay 2026 | HenCRE",
  description:
    "Medical marijuana dispensaries have become a growing single-tenant NNN investment class in Tampa Bay. Here is what investors need to know about cap rates, tenant credit, zoning, and the unique risks of cannabis-occupied commercial real estate.",
  alternates: {
    canonical: "https://hencre.com/blog/tampa-bay-cannabis-dispensary-nnn-investment-2026",
  },
  openGraph: {
    title: "Cannabis Dispensary NNN Investment in Tampa Bay 2026",
    description:
      "Trulieve, Sunnyside, Jungle Boys, and other cannabis tenants are signing long-term NNN leases across Tampa Bay. What investors need to know about this high-yield, high-nuance net lease sector.",
    url: "https://hencre.com/blog/tampa-bay-cannabis-dispensary-nnn-investment-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Commercial storefront on a high-traffic retail corridor representing a cannabis dispensary NNN investment property in Tampa Bay",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What cap rates are cannabis dispensary NNN properties trading at in Tampa Bay in 2026?",
    answer:
      "Cannabis dispensary NNN properties in Tampa Bay are trading at cap rates ranging from approximately 6.5% to 8.5%, well above traditional single-tenant retail sectors like pharmacy or QSR. The wide spread reflects the complexity of the tenant category: while top-tier operators like Trulieve carry substantial revenue, they are not investment-grade credits in the traditional sense, and lenders treat cannabis-occupied real estate differently than conventional retail. Well-located properties on high-traffic Tampa Bay corridors — Dale Mabry Highway, US-19, US-301, and SR-54 in Pasco County — with long initial lease terms (10 years or more) and established operators tend to price at the tighter end of that range. Shorter remaining lease terms, secondary locations, or tenants with limited operating history push cap rates toward 8.0% and above. For comparison, the broader Tampa Bay NNN cap rate landscape across retail sectors is covered in detail in our guide to 2026 net lease cap rates.",
  },
  {
    question: "Who are the major cannabis dispensary tenants operating in Tampa Bay?",
    answer:
      "Florida operates a vertically integrated medical marijuana system, which means licensed operators — called Medical Marijuana Treatment Centers (MMTCs) — cultivate, process, and dispense cannabis within the state. The largest Tampa Bay operators include Trulieve, which holds the most dispensary licenses in Florida and has multiple locations across Hillsborough, Pasco, and Pinellas Counties. Other significant tenants in the market include Sunnyside (operated by Cresco Labs, a publicly traded multi-state operator), Curaleaf, Ayr Wellness, The Flowery, and Jungle Boys, which expanded aggressively into the Tampa metro. Drive-through dispensary formats have emerged as a preferred prototype: in 2026, a former Wendy's on Dale Mabry near Midtown was approved for conversion to a MINT Cannabis drive-through dispensary — a clear signal that fast food pad repositioning is becoming a viable acquisition and redevelopment strategy for cannabis operators. The variety of tenant quality across this space is significant, and underwriting the specific operator's financial strength, license count, and multi-year operating track record is essential before any acquisition.",
  },
  {
    question: "What are the biggest risks unique to cannabis dispensary commercial real estate?",
    answer:
      "Cannabis-occupied commercial real estate carries several risks that do not apply to conventional single-tenant retail. First, cannabis remains a Schedule I controlled substance under federal law. This means federally chartered lenders — national banks and most community banks — will not finance a cannabis-occupied property. Investors must source financing from private lenders, credit unions, or state-chartered banks with cannabis lending programs, which typically carry higher rates and shorter amortization periods than conventional commercial mortgages. Second, standard commercial property insurance may not cover cannabis-related activities, requiring specialized cannabis-aware insurance policies at higher premiums. Third, the tenant's business can be disrupted by state licensing issues, compliance violations, or regulatory changes in ways that a conventional retailer cannot — if a dispensary loses its state license, the property can go dark quickly and re-tenanting it as anything other than cannabis is straightforward, but the interim vacancy period carries real risk. Fourth, zoning restrictions limit where dispensaries can operate — Florida law requires separation from schools, parks, and other sensitive uses, which restricts the pool of re-tenanting options if the original operator vacates. Understanding all of these factors before purchase is essential.",
  },
  {
    question: "Can a traditional 1031 exchange be used to acquire a cannabis dispensary property?",
    answer:
      "Yes — the property itself qualifies for a 1031 like-kind exchange because the exchange rules apply to the real estate asset, not the business conducted on it. A cannabis dispensary NNN property is treated the same as any other commercial real estate for Section 1031 purposes. The complication is at the financing stage: if your replacement property purchase requires a loan, federally chartered lenders will not finance a cannabis-occupied property regardless of exchange status. This means 1031 exchange buyers must either purchase all-cash, obtain financing from a cannabis-friendly private or state-chartered lender before the exchange closes, or size the replacement property to a value achievable without federally chartered debt. For exchange buyers coming out of actively managed multifamily or retail, the passive income structure of a cannabis NNN lease is very appealing — but the financing constraint must be resolved before identification, since the 180-day closing clock does not pause for lender sourcing challenges. For detailed guidance on 1031 exchange mechanics in Florida, see our complete guide to Florida 1031 exchanges.",
  },
  {
    question: "What should investors look for when evaluating a cannabis dispensary NNN listing in Tampa Bay?",
    answer:
      "The most important factors are tenant credit quality, lease structure, location fundamentals, and re-tenanting potential. On tenant credit: request the operator's financial statements, license history, number of locations statewide, and years in business. Multi-state publicly traded operators (Trulieve, Curaleaf, Cresco Labs) offer more transparency than private single-state operators but are still not investment-grade credits. On lease structure: look for absolute NNN with landlord obligations limited to structural items only, annual rent bumps of 2% to 3% or 10% every five years, an initial term of at least 10 years, and renewal options that reflect realistic market rents. On location: high-traffic corridors with strong daytime and residential population density are most valuable — a dispensary on Dale Mabry, US-19, or SR-54 in Wesley Chapel has durable traffic fundamentals that protect re-tenanting value. On re-tenanting: cannabis pad sizes (typically 2,000 to 4,000 square feet for a standard dispensary, larger for drive-through conversions of former QSR pads) can be re-leased to a range of medical, retail, or service tenants if the cannabis operator vacates, particularly in high-traffic suburban Tampa Bay corridors. Properties with unusual footprints, single-purpose buildouts, or locations dependent entirely on the cannabis use permit are more vulnerable to vacancy risk.",
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
          name: "Cannabis Dispensary NNN Investment in Tampa Bay 2026",
          item: "https://hencre.com/blog/tampa-bay-cannabis-dispensary-nnn-investment-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Cannabis Dispensary NNN Investment in Tampa Bay 2026",
      description:
        "Medical marijuana dispensaries have become a growing single-tenant NNN investment class in Tampa Bay. What investors need to know about cap rates, tenant credit, zoning, and the unique risks of cannabis-occupied commercial real estate.",
      datePublished: "2026-11-22",
      dateModified: "2026-11-26",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-bay-cannabis-dispensary-nnn-investment-2026",
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
    title: "What Is a Triple-Net (NNN) Lease?",
    href: "/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it",
    description: "The fundamentals of net lease investing — how the structure works and why passive investors favor it.",
  },
  {
    title: "Tampa Bay NNN Cap Rates 2026",
    href: "/blog/tampa-bay-nnn-cap-rates-2026",
    description: "Current cap rate benchmarks across single-tenant net lease asset classes in Tampa Bay.",
  },
  {
    title: "Tampa Bay Retail Market Q4 2026",
    href: "/blog/tampa-bay-retail-market-q4-2026",
    description: "The broader Tampa Bay retail market context — vacancy, rents, and leasing velocity.",
  },
  {
    title: "QSR Drive-Thru NNN Investment in Tampa Bay 2026",
    href: "/blog/tampa-bay-qsr-drive-thru-nnn-investment-2026",
    description: "How cannabis dispensary properties compare to fast food drive-thru pads as single-tenant net lease assets.",
  },
  {
    title: "Tampa Bay Pharmacy & Drug Store NNN Investment 2026",
    href: "/blog/tampa-bay-pharmacy-drugstore-nnn-investment-2026",
    description: "Medical retail NNN investing — how pharmacy assets compare and contrast with cannabis-occupied properties.",
  },
  {
    title: "Florida 1031 Exchange: What Investors Need to Know",
    href: "/blog/florida-1031-exchange-what-investors-need-to-know",
    description: "Using a 1031 exchange to acquire a cannabis NNN replacement property — what works and what to watch for.",
  },
  {
    title: "Tampa Bay Commercial Mortgage Rates 2026",
    href: "/blog/tampa-bay-commercial-mortgage-rates-2026",
    description: "Current commercial lending conditions in Tampa Bay, including the private lending landscape relevant to cannabis-occupied properties.",
  },
  {
    title: "Dale Mabry Corridor Commercial Real Estate 2026",
    href: "/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026",
    description: "One of Tampa Bay's highest-traffic commercial corridors and an active location for dispensary and retail NNN assets.",
  },
  {
    title: "Wesley Chapel Commercial Real Estate 2026",
    href: "/blog/wesley-chapel-commercial-real-estate-2026",
    description: "Pasco County's fastest-growing submarket, where SR-54 and I-75 corridors are attracting dispensary pad development.",
  },
  {
    title: "Tampa Bay Urgent Care & Medical Clinic NNN Investment 2026",
    href: "/blog/tampa-bay-urgent-care-medical-clinic-nnn-investment-2026",
    description: "Medical-use net lease alternatives — how urgent care and clinic NNN assets compare to cannabis dispensaries.",
  },
];

export default function TampaBayCannabisDispensaryNNNPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          {
            label: "Cannabis Dispensary NNN Investment in Tampa Bay 2026",
            href: "/blog/tampa-bay-cannabis-dispensary-nnn-investment-2026",
          },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1600&h=900&fit=crop"
        title="Cannabis Dispensary NNN Investment in Tampa Bay 2026"
        subtitle="Trulieve. Sunnyside. Jungle Boys. Medical marijuana dispensaries are signing long-term NNN leases across Tampa Bay's highest-traffic corridors — and the yield spread above conventional retail is attracting serious investor attention. Here is what you need to know before buying one."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Florida&apos;s medical marijuana market is one of the most active in the country, and the commercial real estate implications are impossible to ignore for Tampa Bay investors. Dispensary operators are expanding aggressively, signing long-term triple-net leases on high-traffic retail corridors from Dale Mabry to US-19 to State Road 54 in Wesley Chapel. The yield profile — typically 150 to 300 basis points above comparable pharmacy or QSR net lease assets — has drawn attention from passive investors, 1031 exchange buyers, and institutional capital alike. But cannabis-occupied commercial real estate comes with a set of legal, financing, and underwriting complexities that most net lease investors do not encounter in conventional retail. Understanding both the opportunity and the nuance is the starting point for any serious evaluation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Are Cannabis Dispensary Properties Attracting Net Lease Investors in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The appeal begins with yield. Cannabis dispensary NNN properties in Tampa Bay are trading at cap rates roughly in the 6.5% to 8.5% range — a significant premium over pharmacy assets (which have compressed into the 5.5% to 7.0% range after the Walgreens delisting shakeout) and well above QSR drive-thru properties anchored by investment-grade corporate tenants. For investors who have been priced out of tighter net lease categories or who are seeking above-market current yield from a passive structure, the spread is genuinely compelling.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Beyond yield, the lease structures being executed by Florida&apos;s largest operators reflect the kind of landlord-favorable terms that institutional net lease buyers value. Absolute NNN leases — where the tenant pays taxes, insurance, and all maintenance, with zero landlord obligation — are common in this category. Initial lease terms of 10 to 15 years with multiple renewal options, annual rent bumps of 2% to 3%, and tenant-funded buildouts are increasingly standard as established operators compete for limited Class A retail pad locations. When a Trulieve or Curaleaf signs a 10-year absolute NNN lease on a 3,500-square-foot pad on Dale Mabry, the passive income profile from the landlord&apos;s perspective is structurally very similar to a pharmacy or QSR — the distinction is in the tenant&apos;s credit profile, not the lease mechanics.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the foundational mechanics of triple-net lease investing, see our guide on <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">what a triple-net NNN lease is and why investors favor it</Link>. For the current pricing landscape across all net lease categories in Tampa Bay, our <Link href="/blog/tampa-bay-nnn-cap-rates-2026" className="text-accent underline">2026 NNN cap rate overview</Link> provides context on where cannabis assets sit relative to pharmacy, dollar store, and fast food alternatives.
        </p>

        <div className="my-10 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=900&q=80"
            alt="High-traffic retail storefront on a Tampa Bay commercial corridor representing a single-tenant cannabis dispensary NNN investment property"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="mt-2 text-xs text-[#999999] text-center">
            Cannabis dispensary tenants are actively seeking freestanding pads, former QSR drive-through buildings, and inline retail endcaps on Tampa Bay&apos;s highest-traffic corridors — often signing 10- to 15-year absolute NNN leases with annual rent escalations.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-black">Who Are the Major Dispensary Operators Leasing Space in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Florida&apos;s medical marijuana licensing system is vertically integrated: state-licensed Medical Marijuana Treatment Centers (MMTCs) grow, process, and dispense cannabis within the state, limiting the total number of legal operators. This creates a concentrated tenant pool of established, revenue-producing companies competing for the same high-traffic locations.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Trulieve</strong> is the dominant operator in Florida and holds more dispensary locations statewide than any other MMTC. The company has multiple Tampa Bay locations and continues to expand through new leases, acquisitions, and store relocations into higher-traffic positions. <strong>Curaleaf</strong>, <strong>Sunnyside</strong> (operated by Cresco Labs, a publicly traded multi-state operator), and <strong>Ayr Wellness</strong> are significant market participants with Hillsborough, Pinellas, and Pasco County presence. <strong>Jungle Boys</strong>, originally a California cultivator brand that entered the Florida dispensary market, has been an aggressive Tampa MSA tenant, signing leases on prominent retail corridors and commanding above-market rents for premium storefronts. <strong>The Flowery</strong>, a Florida-focused craft cannabis brand, operates a niche but growing footprint in the region.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          One of the most telling 2026 trends in the Tampa market is the emergence of the <strong>drive-through dispensary format</strong>. In August 2026, a permit was filed to convert a former Wendy&apos;s at 2036 N. Dale Mabry Highway — a classic QSR pad on one of Tampa&apos;s highest-volume corridors — into a MINT Cannabis drive-through dispensary. This transaction represents the convergence of two commercial real estate trends: the adaptive reuse of obsolete fast food pads and the growing operator preference for drive-through cannabis retail, which dramatically increases transaction throughput and reduces per-square-foot buildout cost compared to full walk-in dispensary formats. For investors, it signals that the former QSR pad conversion playbook — already well-documented in pharmacy and urgent care repositioning — is now being written for cannabis.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors evaluating these operators benefit from reviewing how the broader <Link href="/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026" className="text-accent underline">Dale Mabry commercial corridor</Link> is evolving, as it remains the single most active location for new dispensary pad activity in Tampa proper.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Unique Risks of Owning Cannabis-Occupied Commercial Real Estate?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The yield premium exists for reasons. Cannabis-occupied commercial real estate carries several structural risks that do not apply to conventional single-tenant retail, and investors who do not fully understand them before purchase can find themselves with assets that are difficult to finance, insure, or exit.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Federal banking and financing constraints</strong> are the most immediate practical issue. Cannabis remains a Schedule I controlled substance under the federal Controlled Substances Act. Federally chartered banks — which includes virtually all national banks and many community banks — will not originate or hold loans secured by cannabis-occupied real estate, regardless of the property&apos;s physical condition, the tenant&apos;s financial strength, or the state-law legality of the cannabis operation. Investors must source financing from private lenders, cannabis-specialized credit unions, or state-chartered banks with active cannabis lending programs. These lenders typically charge higher interest rates (often 50 to 150 basis points above conventional commercial rates), require shorter amortization, and may impose lease-related covenants that restrict future disposition. For current lending market conditions in Tampa Bay, see our overview of <Link href="/blog/tampa-bay-commercial-mortgage-rates-2026" className="text-accent underline">2026 commercial mortgage rates</Link> — the conventional rate context is relevant to understanding how wide the cannabis lending premium actually is.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Insurance complexity</strong> is a close second. Standard commercial property insurance policies exclude coverage for cannabis-related activities, which means a standard policy on a dispensary-occupied building may not cover fire, theft, or liability claims arising from the cannabis operation. Specialized cannabis-aware insurance products exist but carry higher premiums, narrower coverage windows, and policy terms that require annual renewal with more intensive underwriting scrutiny than standard commercial policies. Investors should confirm that insurance is in place and adequate before closing any cannabis NNN acquisition.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Regulatory and license risk</strong> is unique to this tenant category. A dispensary operator that loses its state license — through a compliance violation, an administrative action, or failure to renew — loses its ability to operate, and the lease does not automatically terminate. The landlord is left holding a property with a dark tenant, full rent obligations potentially contested, and a physical buildout that is purpose-designed for cannabis retail. While re-tenanting a well-located 3,000-square-foot pad on a high-traffic Tampa Bay corridor is very achievable (the space works for urgent care, traditional retail, food service, and a range of other uses), the interim period and any tenant-related lease litigation are real costs.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Where Are Dispensary Tenants Concentrating in Tampa Bay?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dispensary site selection follows the same logic as any high-traffic single-tenant retail use: maximum daily vehicle counts, strong residential population density within a three- to five-mile radius, and visibility from the roadway. The locations that command the highest rents and the most competitive tenant interest in Tampa Bay are predictable.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Dale Mabry Highway</strong> from Kennedy Boulevard through Carrollwood is the single densest dispensary corridor in Tampa, with multiple operators holding locations within a few miles of each other. The corridor&apos;s combination of vehicle counts, residential density, and daytime population makes it the most valuable dispensary real estate in the market. The Midtown area and the South Tampa stretch of Dale Mabry have attracted premium brands seeking brand-visible storefronts. <strong>US-19</strong> through Pinellas County — particularly in Clearwater and Pinellas Park — hosts a significant concentration of dispensary operators serving the county&apos;s dense residential base. <strong>SR-54 and SR-56 in Wesley Chapel and New Port Richey</strong> are emerging corridors where population growth is driving new dispensary site selection; a Trulieve NNN pad on SR-54 in New Port Richey is among the active investment listings in the northern Tampa Bay market. <strong>US-301 through Riverview and Brandon</strong> is another active corridor tied to Hillsborough County&apos;s southeastern growth.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors evaluating suburban Tampa Bay corridors should review submarket-specific guides: the <Link href="/blog/wesley-chapel-commercial-real-estate-2026" className="text-accent underline">Wesley Chapel commercial market</Link> for Pasco County growth corridors, and the <Link href="/blog/tampa-bay-retail-market-q4-2026" className="text-accent underline">Q4 2026 Tampa Bay retail market update</Link> for broader vacancy and absorption trends across the corridors where dispensary activity is most concentrated.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does a Cannabis NNN Property Fit into a 1031 Exchange Strategy?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The property itself qualifies for a 1031 like-kind exchange — the IRS exchange rules apply to the real estate, not the business conducted on it. A cannabis dispensary NNN property is treated identically to a drugstore or fast food pad for Section 1031 purposes. The complication for exchange buyers is at the debt replacement stage.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If a 1031 exchange buyer needs to replace debt as part of the exchange — which is common when selling leveraged investment property — the inability to use federally chartered lenders creates a constraint that must be resolved before the 45-day identification period closes. Exchange buyers who plan to acquire a cannabis NNN property need to identify and qualify a cannabis-friendly private lender before or concurrent with the identification letter, not after. The 180-day closing clock does not pause for lender sourcing. All-cash exchange buyers avoid this issue entirely, and cannabis NNN properties acquired without leverage often pencil attractively on a cash basis given the yield profile.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the full mechanics of 1031 exchange execution in Florida — timelines, identification rules, qualified intermediary requirements, and common pitfalls — see our guide to <Link href="/blog/florida-1031-exchange-what-investors-need-to-know" className="text-accent underline">Florida 1031 exchanges</Link>. If you are considering a cannabis NNN property as part of a broader exit or exchange strategy, speaking with a broker who understands both net lease underwriting and the cannabis-specific financing landscape is essential — the two disciplines rarely overlap in a single practitioner.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Makes a Cannabis Dispensary Property a Good Investment vs. a Problematic One?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The difference between a well-underwritten cannabis NNN acquisition and a problem asset comes down to five variables: tenant quality, location fundamentals, lease structure, re-tenanting potential, and insurance and financing viability.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Tenant quality</strong> means more than brand recognition. Multi-state publicly traded operators — Curaleaf, Trulieve, Cresco Labs — offer audited financials and a level of institutional oversight that privately held single-state operators do not. The number of active licenses, years of Florida operations, and total revenue base are more predictive of lease durability than brand marketing. <strong>Location fundamentals</strong> are the best hedge against any single tenant&apos;s failure: a dispensary on a 50,000 vehicle-per-day corridor in a dense Tampa Bay suburb will find a replacement tenant faster and at stronger rents than one in a secondary location. <strong>Lease structure</strong> should be absolute NNN, with landlord obligations limited to structural items (foundation, exterior walls, roof structure), tenant-responsible for HVAC, plumbing, electrical, taxes, and insurance. Annual bumps of at least 2% protect purchasing power over a 10- to 15-year hold. <strong>Re-tenanting potential</strong> is the downside protection: a 3,000-square-foot freestanding pad with ample parking on a high-traffic corridor can accommodate urgent care, quick-service food, traditional retail, or personal services — the cannabis use does not permanently limit the building&apos;s utility. Buildings with drive-through lanes add another layer of re-tenanting flexibility. <strong>Insurance and financing viability</strong> must be confirmed before closing — not assumed. A buyer who discovers post-closing that insurance is unavailable or that refinancing is impossible has limited recourse.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you currently own a cannabis-occupied or general commercial investment property in Tampa Bay and are considering a sale or exchange, explore <Link href="/services/dispositions" className="text-accent underline">Barrett&apos;s disposition advisory services</Link> for a direct, structured path to market that protects your interests throughout the transaction.
        </p>

        <FAQAccordion items={faqItems} />
      </article>

      <CTASection
        heading="Evaluating a Cannabis Dispensary NNN Property in Tampa Bay?"
        body="Barrett Henry has 23+ years of commercial real estate experience across Tampa Bay and the Florida Gulf Coast. Whether you are evaluating a dispensary NNN acquisition, completing a 1031 exchange, or selling a cannabis-occupied investment property, call for a straight conversation about what the market actually looks like."
        buttonText="Talk to Barrett Henry"
        buttonHref="/contact"
      />

      <RelatedLinks links={relatedLinks} />
    </>
  );
}
