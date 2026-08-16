import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Gasworx Tampa — Office, Retail & CRE Investment Guide 2026
 * Ferguson's 50K-sq-ft lease brings the first office building to 100%
 * occupancy. What the Ybor City megaproject means for tenants and
 * investors right now.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Gasworx Tampa 2026: What the Ferguson Lease Means for Office Tenants and CRE Investors | HenCRE",
  description:
    "Fortune 500 Ferguson signed a 50,570-square-foot office lease at Gasworx in Ybor City, filling the development's first Class A office building to 100% occupancy. What Tampa Bay tenants and commercial real estate investors need to know about Gasworx in 2026.",
  alternates: { canonical: "https://hencre.com/blog/gasworx-tampa-ybor-office-commercial-2026" },
  openGraph: {
    title: "Gasworx Tampa 2026: What the Ferguson Lease Means for Office Tenants and CRE Investors",
    description:
      "Ferguson's 50K-sq-ft lease fills Gasworx's first office building. Here's what the 50-acre, 6-million-square-foot Ybor City megaproject means for Tampa Bay office tenants and commercial real estate investors.",
    url: "https://hencre.com/blog/gasworx-tampa-ybor-office-commercial-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ybor City Tampa redevelopment corridor with new mixed-use buildings rising",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Gasworx development in Tampa?",
    answer:
      "Gasworx is a 50-acre mixed-use redevelopment project located between Ybor City, downtown Tampa, and the Channel District. At full build-out, it will deliver approximately 6 million square feet of development, including roughly 5,000 residential units, 500,000 square feet of Class A office space, and 140,000 square feet of retail and dining. The project is led by developer Darryl Shaw in partnership with Kettler and PPF Real Estate. The first residential building — The Stevedore, a seven-story structure with 390 units and 9,700 square feet of ground-floor retail — opened in April 2026.",
  },
  {
    question: "Who signed the major office lease at Gasworx in 2026?",
    answer:
      "Fortune 500 company Ferguson — a $31 billion construction products distributor headquartered in Newport News, Virginia — signed a 50,570-square-foot office lease at Gasworx in August 2026. Ferguson's lease fills the development's first Class A office building (145,000 square feet, six stories) to 100% occupancy alongside Grow Financial, ahead of the building's estimated December 2026 completion. Ferguson plans to begin occupying the space in April 2027, relocating executive leadership and a variety of business functions including training, development, and onboarding.",
  },
  {
    question: "Is there still office space available at Gasworx?",
    answer:
      "The first Gasworx office building — the 145,000-square-foot, six-story structure — is now 100% leased following the Ferguson deal. However, Gasworx's master plan includes 500,000 total square feet of office space, with additional phases under development. Prospective office tenants who want to position for future availability in the project should engage a commercial broker now to track upcoming availabilities and development timelines. Given the velocity of leasing in the first building, future Gasworx office phases are likely to see competitive demand.",
  },
  {
    question: "What retail opportunities exist in Gasworx?",
    answer:
      "Gasworx's master plan calls for 140,000 square feet of retail and dining space. The project is designed around a pedestrian-oriented marketplace concept — ground-floor retail and restaurant space integrated with office, residential, and public gathering areas. The first residential building, The Stevedore, includes 9,700 square feet of ground-floor retail currently leasing. Future phases will expand the retail footprint as additional residential and office buildings are completed. Food and beverage, fitness, personal services, and neighborhood retail concepts are well-positioned for the live-work-play demographic the project is attracting.",
  },
  {
    question: "Is investing near Gasworx a good commercial real estate opportunity?",
    answer:
      "The Gasworx development is a significant demand catalyst for the surrounding Ybor City and Channel District submarkets. Properties within proximity of the project — including existing retail, office, and mixed-use buildings along 7th Avenue, Adamo Drive, and the Channel District corridor — stand to benefit from the population density Gasworx will add. Investors who acquired in these submarkets ahead of the development timeline have already seen meaningful appreciation. Those evaluating acquisitions now should underwrite realistic timelines for Gasworx's absorption and the neighborhood evolution it will drive over the next three to five years.",
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
          name: "Gasworx Tampa 2026: Office, Retail & CRE Investment",
          item: "https://hencre.com/blog/gasworx-tampa-ybor-office-commercial-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline:
        "Gasworx Tampa 2026: What the Ferguson Lease Means for Office Tenants and CRE Investors",
      description:
        "Fortune 500 Ferguson signed a 50,570-square-foot office lease at Gasworx in Ybor City, filling the first Class A office building to 100% occupancy. What Tampa Bay tenants and commercial real estate investors need to know.",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/gasworx-tampa-ybor-office-commercial-2026",
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
    title: "Ybor City Commercial Real Estate 2026",
    href: "/blog/ybor-city-commercial-real-estate-tampa-2026",
    description: "The broader transformation reshaping Ybor City's commercial market — Gasworx, Ybor Harbor, and more.",
  },
  {
    title: "Water Street Tampa: 33-Story Tower & Downtown CRE",
    href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    description: "How the Water Street development is reshaping the downtown Tampa office and mixed-use market.",
  },
  {
    title: "Tampa Bay Office Market Q2 2026",
    href: "/blog/tampa-bay-office-market-q2-2026",
    description: "Vacancy, rents, and tenant demand across all Tampa Bay office submarkets in mid-2026.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "How Tampa Bay's largest office submarket is performing heading into the second half of 2026.",
  },
  {
    title: "Midtown Tampa Commercial Real Estate 2026",
    href: "/blog/midtown-tampa-commercial-real-estate-2026",
    description: "Midtown Tampa's mixed-use development and what it means for CRE in the urban core.",
  },
  {
    title: "Tampa Bay Flex Office & Coworking 2026",
    href: "/blog/tampa-bay-flex-office-coworking-2026",
    description: "How flexible office and coworking fits into the evolving Tampa Bay office demand story.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "Commercial leasing and investment conditions in Tampa's most supply-constrained urban submarket.",
  },
  {
    title: "Tampa Bay Restaurant & Food-Beverage Space 2026",
    href: "/blog/tampa-bay-restaurant-food-beverage-space-2026",
    description: "What food and beverage tenants need to know about leasing in Tampa Bay's mixed-use developments.",
  },
  {
    title: "Do You Need a Commercial Real Estate Broker?",
    href: "/blog/do-you-need-a-commercial-real-estate-broker",
    description: "When and why working with a local CRE broker changes outcomes for tenants and investors.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "How Barrett helps office and retail tenants find and negotiate space at no cost to the tenant.",
  },
];

export default function GasworxTampaCommercialPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Gasworx Tampa 2026", href: "/blog/gasworx-tampa-ybor-office-commercial-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="Gasworx Tampa 2026"
        subtitle="Fortune 500 Ferguson just filled the first Gasworx office building to 100% occupancy before it opens. Here is what Tampa Bay's most ambitious mixed-use project means for office tenants, retail operators, and commercial real estate investors right now."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          On August 13, 2026, Business Observer reported that Ferguson — a Fortune 500 construction products distributor with $31 billion in annual revenue — had signed a 50,570-square-foot office lease at Gasworx, the 50-acre mixed-use megaproject rising between Ybor City, downtown Tampa, and the Channel District. The deal is notable for two reasons. First, it fills Gasworx&apos;s first Class A office building to 100% occupancy months ahead of its December 2026 projected completion. Second, it signals that one of the most closely watched urban development projects in Tampa Bay history is delivering on its promise — and doing so at a pace that should get the attention of every office tenant and commercial real estate investor in the region.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          What is Gasworx, what does this lease mean for the commercial market, and what should tenants and investors do with this information? That is what this post covers.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Gasworx Development and Why Does It Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Gasworx is not a typical commercial real estate project. It is the largest private mixed-use development in Ybor City&apos;s modern history — a 50-acre redevelopment led by Tampa developer Darryl Shaw in partnership with Washington, D.C.-based Kettler and Czech investment firm PPF Real Estate. At full build-out, the project will deliver approximately 6 million square feet of mixed-use development: roughly 5,000 residential units, 500,000 square feet of Class A office space, 140,000 square feet of retail and dining, a public park system, pedestrian-oriented streets, and a new stop on the TECO Line Streetcar System.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The project sits at the geographic and commercial intersection of three of Tampa&apos;s most economically significant zones. To the west is downtown Tampa and the Water Street district — the most active urban office and luxury residential market in the metro. To the east is historic Ybor City — a neighborhood with a distinctive identity, growing restaurant and entertainment scene, and significant untapped commercial potential. To the south is the Channel District — one of Tampa Bay&apos;s densest residential neighborhoods, home to thousands of apartment dwellers who work, shop, and patronize businesses within walking distance. Gasworx sits in the middle of all three, which is precisely why it has attracted the level of institutional capital and corporate tenant interest that it has.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The first residential building, The Stevedore — a seven-story, 390-unit structure with 9,700 square feet of ground-floor retail — opened to residents in April 2026 and is currently leasing. Phase 2 construction on the project&apos;s eastern parcels was advancing as of April 2026. The first office building — a 145,000-square-foot, six-story Class A asset — is targeted for December 2026 delivery and, as of August 2026, is fully leased.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Ferguson Lease Tell Us About Gasworx Office Demand?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Ferguson&apos;s lease decision is instructive, and not just because of the square footage. Ferguson is a Fortune 500 company with revenues exceeding $31 billion — the kind of tenant that evaluates real estate decisions with significant internal resources and has genuine alternatives across Tampa Bay&apos;s office market. They chose Gasworx at Ybor City. That choice reveals something about what corporate tenants value in 2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Talent attraction is now a location decision, not just a compensation decision.</strong> Corporate tenants in the post-pandemic environment increasingly recognize that returning employees to an office requires offering them something that justifies the commute. A Class A office building with a rooftop deck, outdoor terraces, a lobby café and bar, and direct access to a curated retail and dining marketplace is a meaningfully different offering than a suburban office park with a surface parking lot. Gasworx was designed with this in mind, and Ferguson&apos;s lease reflects that the calculus is working.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>The walkable urban core is winning office deals that the suburbs used to take for granted.</strong> Five years ago, much of Tampa Bay&apos;s corporate office demand defaulted to the Westshore submarket — established, infrastructure-rich, and convenient to the airport and major highways. That default is weakening as the urban core of Tampa — Water Street, downtown, and now Gasworx — offers Class A product with amenities that Westshore simply cannot match. The <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore office market</Link> remains important, but it is competing in a way it did not have to five years ago.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Pre-leasing velocity signals real demand, not developer optimism.</strong> Gasworx&apos;s first office building reaching 100% occupancy before its December delivery — anchored by Grow Financial and now Ferguson — is a meaningful data point. Projects that struggle to lease pre-delivery often sit partly vacant for extended periods post-delivery. The opposite pattern here suggests genuine unmet demand for high-quality mixed-use office product in this corridor, which bodes well for future phases.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Office Leasing Opportunities at Gasworx for Tenants?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The honest near-term answer is that availability in the first building is gone. Ferguson and Grow Financial have filled it. For office tenants evaluating Gasworx as a location, the conversation now turns to future phases of the project&apos;s 500,000-square-foot office program — and those phases are not yet on a firm delivery timeline.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          That does not mean tenants should disengage. It means the opposite. Companies with lease expirations in 2027 or 2028 that want to position for Gasworx office space should be in dialogue with brokers who have direct relationships with the development team now — not six months before their lease expires. Pre-leasing interest in major projects like this creates an informal queue, and the tenants who engage early tend to shape their options more favorably than those who arrive late to a competitive process.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tenants who want to be in the Ybor City and Channel District corridor but cannot wait for future Gasworx phases have options in the surrounding neighborhood. Existing office buildings along Adamo Drive, 7th Avenue, and in the immediate Channel District have seen increased leasing interest as Gasworx has raised the profile of the submarket. Rents in these buildings are meaningfully lower than what Gasworx will command, but the neighborhood fundamentals they sit in are improving. Understanding the full range of options in this submarket — from existing second-generation space to future Class A delivery — is where a local commercial broker adds real value. Working with <Link href="/services/tenant-representation" className="text-accent underline">an experienced tenant representative</Link> costs the tenant nothing; the landlord pays the commission.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a broader view of what the Tampa Bay office market looks like across all submarkets, the <Link href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">Q2 2026 office market report</Link> covers vacancy, rents, and tenant demand conditions across the metro.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Retail and Food-Beverage Opportunities Does Gasworx Create?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 140,000 square feet of retail programmed into Gasworx represents one of the more significant new retail leasing opportunities in the Tampa Bay urban core — and it is the type of retail that currently commands some of the most competitive demand in the market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Gasworx is being designed as a pedestrian-oriented marketplace — think ground-floor retail and dining woven into a walkable district with residential, office, and public space above and around it. This format attracts specific tenant categories: food and beverage (restaurants, coffee, quick-service), fitness and wellness, personal services, and neighborhood retail that benefits from daily foot traffic rather than destination shoppers. The 9,700 square feet of ground-floor retail in The Stevedore is already leasing. The project&apos;s retail program will expand phase by phase as additional residential and office buildings deliver.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The built-in demand drivers at Gasworx are significant. By the time the project reaches meaningful density, it will have 5,000 residential units and hundreds of thousands of square feet of occupied office generating daily foot traffic seven days a week. That is the consumer base that makes mixed-use ground-floor retail viable in a way that standalone street retail in low-density neighborhoods rarely is. For <Link href="/blog/tampa-bay-restaurant-food-beverage-space-2026" className="text-accent underline">food and beverage operators</Link> in particular, the Gasworx retail program warrants close attention as future availabilities come to market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Retail tenants evaluating Gasworx should also assess it in the context of the surrounding Ybor City market. The <Link href="/blog/ybor-city-commercial-real-estate-tampa-2026" className="text-accent underline">Ybor City commercial real estate market</Link> has its own established retail and entertainment ecosystem along 7th Avenue — one that Gasworx is expected to amplify rather than replace. The neighborhood is evolving from a weekend entertainment destination into a genuine live-work-play district, which creates more sustained and diversified retail demand than Ybor&apos;s historically nightlife-centric economy.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Commercial Real Estate Investors Know About Gasworx&apos;s Impact?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Large-scale mixed-use developments of Gasworx&apos;s scope create commercial real estate investment opportunities on multiple levels — some within the project itself, some in the surrounding neighborhood, and some in adjacent submarkets that absorb demand displacement.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Within-project investment.</strong> Gasworx will likely offer commercial condominium or ground-floor retail investment opportunities as individual phases are marketed. These tend to be priced at a premium to existing inventory because they carry new construction quality and the project&apos;s leasing momentum. For investors who want direct exposure to the Gasworx demand story, tracking future offering announcements from the Kettler-Shaw partnership is the way in.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Adjacent neighborhood play.</strong> The more actionable near-term investment thesis for most investors is in the surrounding Ybor City and Channel District submarkets — existing properties that will benefit from rising neighborhood density without carrying new-construction pricing. Commercial buildings on and near 7th Avenue, former industrial properties along Adamo Drive with adaptive reuse potential, and mixed-use buildings in the Channel District that are not yet priced to reflect Gasworx&apos;s neighborhood impact represent this category. The window for acquiring before Gasworx&apos;s full density translates into rent growth expectations is compressing as each new leasing announcement like Ferguson&apos;s raises the submarket&apos;s profile.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Understanding the absorption timeline.</strong> Gasworx&apos;s master plan calls for 6 million square feet of development. Even with strong pre-leasing velocity in the office building, absorbing that full program will take years — likely a decade or more of phased delivery. Investors should underwrite assumptions that reflect a realistic absorption timeline rather than assuming the full project&apos;s demand impact is immediate. The neighborhood fundamentals are sound; the timing assumptions need to be careful.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors evaluating any commercial acquisition in or around this corridor, running a full <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence process</Link> and stress-testing your <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">return on investment assumptions</Link> against realistic absorption scenarios is essential. The Gasworx story is a genuine demand catalyst — it is not a guarantee of any specific outcome on any specific property.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Investors or owners near the Gasworx corridor who are considering a sale may find that the current momentum represents a favorable exit environment. Properties that benefit from the neighborhood&apos;s rising profile can attract strong buyer interest — including cash buyers through platforms like <Link href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">fastselleasysale.com</Link> for owners who want a straightforward transaction.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Gasworx Compare to Water Street and Midtown Tampa?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay&apos;s urban commercial real estate market is currently shaped by three major mixed-use development programs — Water Street, Midtown Tampa, and Gasworx — each serving a somewhat different end of the market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Water Street Tampa</strong> is the most mature and most premium of the three — a $3.5 billion development in the downtown core anchored by Amalie Arena, the Marriott Marriott Water Street, and the ongoing development of luxury residential, hotel, and office product. Water Street commands the highest office rents in Tampa Bay and attracts institutional-quality tenants. The <Link href="/blog/water-street-tampa-33-story-tower-downtown-cre-2026" className="text-accent underline">downtown Tampa CRE story</Link> is very much anchored by Water Street&apos;s continued delivery.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Midtown Tampa</strong> — the 22-acre mixed-use development in the Westshore-adjacent corridor off Interstate 275 — is a suburban-oriented mixed-use project serving a different customer than Gasworx or Water Street. Midtown&apos;s retail, office, and residential mix targets the car-dependent middle-market consumer rather than the urban walker, which is both a limitation and a strength depending on use case. The <Link href="/blog/midtown-tampa-commercial-real-estate-2026" className="text-accent underline">Midtown Tampa market</Link> has its own momentum, particularly on the retail side.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Gasworx</strong> occupies the middle ground — more urban and walkable than Midtown Tampa, more affordable and with more development upside than Water Street, and connected to the distinctive cultural identity of Ybor City in a way that neither of the other two projects can replicate. For tenants who want the urban mixed-use environment but are priced out of Water Street, and for investors who want the upside potential of a neighborhood still in transformation rather than one already valued to perfection, Gasworx is the most interesting story in Tampa Bay&apos;s urban commercial real estate market in 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Gasworx for Tampa Bay CRE</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Ferguson lease is more than a single transaction. It is a validation signal — a Fortune 500 company with real estate resources and genuine alternatives chose Gasworx at Ybor City for its new Tampa corporate office. The first building filling to 100% occupancy before it opens validates both the product quality and the demand thesis that the Kettler-Shaw-PPF partnership has been executing against.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For office tenants: the first building is gone. Engage now if future phases interest you — early relationships shape future options. For retail tenants: the ground-floor retail program is the most compelling mixed-use retail leasing opportunity in Tampa Bay&apos;s urban core right now, and early movers will secure the best positions. For investors: the adjacent neighborhood opportunity is real and the window is compressing as each leasing headline raises Ybor City&apos;s profile in institutional and private investor conversations.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay, I work with office tenants, retail operators, and commercial investors throughout Hillsborough, Pinellas, Pasco, and Manatee Counties. The Gasworx story is one I am tracking closely — if you want to understand what it means for a specific leasing or investment decision, that is exactly the conversation I am built for. Let&apos;s talk.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Buyers and renters relocating to Tampa Bay who want to understand the neighborhoods taking shape around Gasworx, Water Street, and the Channel District can explore the region&apos;s communities at <Link href="https://nowtb.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">nowtb.com</Link>, which covers Tampa Bay neighborhoods and home search from a local perspective.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Gasworx Tampa — Frequently Asked Questions
          </h2>
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay&apos;s commercial market. He works with office tenants, retail operators, and commercial investors throughout Hillsborough, Pinellas, Pasco, and Manatee Counties. Learn more about{" "}
              <Link href="/about" className="text-accent underline">
                Barrett&apos;s background
              </Link>{" "}
              or explore{" "}
              <Link href="/services" className="text-accent underline">
                his services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Evaluating Office or Retail Space Near Gasworx? Let's Talk."
        body="Whether you are a tenant tracking Gasworx future phases, a retail operator interested in the Ybor City corridor, or an investor evaluating commercial acquisitions near the project, I can help you understand the market and position your decision well."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
