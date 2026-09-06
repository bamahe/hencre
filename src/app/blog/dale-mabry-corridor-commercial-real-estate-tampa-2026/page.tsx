import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Dale Mabry Corridor Commercial Real Estate Tampa 2026
 * Britton Plaza redevelopment, corridor retail/office dynamics, CRE investment
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Dale Mabry Corridor Commercial Real Estate Tampa 2026 | HenCRE",
  description:
    "Britton Plaza is clearing out. WestShore Plaza sold for $135M. Dale Mabry Highway — Tampa's primary commercial spine — is in the middle of a generational redevelopment cycle. Here is what investors and tenants need to know in 2026.",
  alternates: { canonical: "https://hencre.com/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026" },
  openGraph: {
    title: "Dale Mabry Corridor Commercial Real Estate Tampa 2026",
    description:
      "Britton Plaza's tenants are moving out. WestShore Plaza sold for $135M. The Dale Mabry corridor is transforming — what it means for investors and businesses looking for space in South Tampa and Westshore.",
    url: "https://hencre.com/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dale Mabry commercial corridor Tampa retail and mixed-use development",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is happening at Britton Plaza on Dale Mabry in Tampa?",
    answer:
      "Britton Plaza, a 460,136-square-foot shopping center on 30 acres at 3900 S. Dale Mabry Highway, is undergoing a significant repositioning. As of mid-2026, tenants have been vacating at a ratio of roughly five closures for every one new opening. Brixmor Property Group, a Pennsylvania-based shopping center REIT, owns the property and is evaluating a mixed-use redevelopment plan for the site. No final redevelopment timeline has been publicly confirmed as of September 2026, but the rapid tenant turnover signals that a major reinvention of the property is underway. Businesses still leasing at Britton Plaza should plan proactively for relocation well before any forced move.",
  },
  {
    question: "Is the Dale Mabry corridor a good place to invest in commercial real estate?",
    answer:
      "The Dale Mabry corridor has historically been one of Tampa's most stable commercial corridors given its N-S spine function connecting South Tampa to the Westshore business district and then north through Carrollwood and Lutz. In 2026, the investment thesis along Dale Mabry is bifurcated: large-format retail is being converted to mixed-use (creating disruption in the short term but significant value creation in the medium term), while smaller-format neighborhood retail and service commercial remains in high demand with limited supply. Investors who acquire well-located small-format retail or office on the corridor — particularly in South Tampa where residential density is highest — can benefit from stable occupancy driven by the built-in customer base and the value appreciation created by nearby mixed-use redevelopment.",
  },
  {
    question: "What types of commercial space are available on Dale Mabry Highway in Tampa?",
    answer:
      "The Dale Mabry corridor supports a wide mix of commercial uses. In South Tampa (roughly Howard Avenue to Gandy Boulevard), the corridor is densely lined with neighborhood retail, restaurants, medical offices, fitness, and automotive services. Availability is limited and tends to reflect normal tenant turnover rather than large blocks of vacancy. In the Westshore segment (roughly Kennedy Boulevard to Memorial Highway), the corridor intersects with Tampa's largest office submarket and carries regional retail density. The redevelopment of Britton Plaza and WestShore Plaza is temporarily displacing tenants into this segment, creating elevated short-term availability for businesses that want South Tampa addresses. North of Kennedy, the corridor transitions to community retail and service commercial serving the high-growth Carrollwood and Northdale neighborhoods.",
  },
  {
    question: "How does the Britton Plaza redevelopment affect nearby businesses?",
    answer:
      "In the short term, the Britton Plaza repositioning is displacing existing tenants who need to find alternative space. Businesses that anchored the center — retail, restaurants, services — are entering an already-tight South Tampa retail market simultaneously, which can put upward pressure on asking rents and reduce the number of quality available spaces. For existing corridor landlords, displaced Britton Plaza tenants represent motivated demand that can fill vacancies without heavy marketing. Longer term, if Britton Plaza converts to a mixed-use development with residential units, the resulting increase in daytime and residential population density is a significant positive for retail demand along the full South Dale Mabry corridor.",
  },
  {
    question: "How does the Dale Mabry corridor compare to other Tampa CRE markets in 2026?",
    answer:
      "Dale Mabry is uniquely positioned among Tampa's commercial corridors because it spans multiple submarkets rather than being anchored to one district. South Tampa's segment is supply-constrained neighborhood retail — low vacancy, steady rents, and strong tenant demand from area residents. The Westshore segment competes with Kennedy Boulevard and the broader Westshore office submarket, which has experienced modest softness as suburban office users downsize footprints. North of I-275, the corridor transitions to value-oriented community retail with stronger availability and more competitive rents. For investors and tenants, understanding which segment of Dale Mabry you are evaluating matters enormously — the market dynamics differ by as much as two to three percentage points in vacancy rate depending on where you are on the corridor.",
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
          name: "Dale Mabry Corridor Commercial Real Estate Tampa 2026",
          item: "https://hencre.com/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Dale Mabry Corridor Commercial Real Estate Tampa 2026",
      description:
        "Britton Plaza is clearing out. WestShore Plaza sold for $135M. Dale Mabry Highway — Tampa's primary commercial spine — is in the middle of a generational redevelopment cycle. Here is what investors and tenants need to know.",
      datePublished: "2026-09-05",
      dateModified: "2026-09-05",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026",
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
    title: "Tampa Mall Redevelopment: Mixed-Use CRE Guide 2026",
    href: "/blog/tampa-mall-redevelopment-mixed-use-2026",
    description: "The full picture of Tampa's mall-to-mixed-use transformation, including WestShore Plaza and Britton Plaza.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "Broader South Tampa CRE market conditions across all property types.",
  },
  {
    title: "Westshore Tampa Office Market 2026",
    href: "/blog/westshore-tampa-office-market-2026",
    description: "The Westshore business district's office market fundamentals and investment outlook for 2026.",
  },
  {
    title: "Tampa Bay Retail Market Q2 2026",
    href: "/blog/tampa-bay-retail-market-q2-2026",
    description: "Retail vacancy, asking rents, and leasing trends across the Tampa Bay region.",
  },
  {
    title: "Commercial Property Zoning Basics in Florida",
    href: "/blog/commercial-property-zoning-florida-basics",
    description: "Understanding Florida commercial zoning designations and how they affect redevelopment potential.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "A framework for underwriting retail and mixed-use acquisitions along a corridor like Dale Mabry.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Step-by-step due diligence checklist for buyers evaluating retail strip or mixed-use acquisitions.",
  },
  {
    title: "Tampa Bay Restaurant & Food & Beverage Space 2026",
    href: "/blog/tampa-bay-restaurant-food-beverage-space-2026",
    description: "Leasing considerations for restaurant and F&B users looking for space on high-traffic corridors like Dale Mabry.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description: "Medical office demand drivers in South Tampa and how the corridor fits into the broader medical real estate market.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors acquire and sell commercial properties along Tampa's major corridors.",
  },
];

export default function DaleMabryCorridorCRE2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Dale Mabry Corridor Commercial Real Estate Tampa 2026", href: "/blog/dale-mabry-corridor-commercial-real-estate-tampa-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=900&fit=crop"
        title="Dale Mabry Corridor Commercial Real Estate Tampa 2026"
        subtitle="Britton Plaza is clearing out. WestShore Plaza sold for $135M. Tampa's primary commercial spine is transforming — here is what it means for investors and businesses looking for space."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Dale Mabry Highway is Tampa&apos;s commercial backbone. Running roughly 30 miles from the tip of South Tampa through Westshore, Carrollwood, and into Pasco County, it has served as the city&apos;s primary north-south commercial corridor for generations. In 2026, two major redevelopments — Britton Plaza and WestShore Plaza — are reshaping what that corridor looks like, who it serves, and what investment opportunities it presents. This piece breaks down the corridor segment by segment and explains what the current redevelopment cycle means for tenants, investors, and property owners.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Happening at Britton Plaza on Dale Mabry in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most significant Dale Mabry story of 2026 is the repositioning of Britton Plaza, a 460,136-square-foot open-air shopping center on 30 acres at 3900 S. Dale Mabry Highway. Britton Plaza has long been one of South Tampa&apos;s primary grocery-anchored retail destinations, but as of mid-2026, tenant closures are running at roughly five exits for every new arrival, reflecting the owner&apos;s preparation of the site for a major reinvention.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Brixmor Property Group, a Pennsylvania-based shopping center REIT with a national portfolio exceeding 350 properties, owns Britton Plaza. Brixmor has been among the more active repositioning operators in the grocery-anchored retail REIT space, and the Britton Plaza site — 30 acres of infill South Tampa land within a mile of some of the highest household income zip codes in Florida — is a prime candidate for densification. A mixed-use scenario featuring residential over ground-floor retail, or a phased demolition and rebuild, would be consistent with what Brixmor has done at comparable infill properties nationally.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context, just two miles north, WestShore Plaza sold in July 2026 to Third Lake Partners for approximately $135 million. Third Lake is planning to transform that 53-acre site into a full mixed-use district with up to 1,765 residences, a 240-room hotel, and approximately 1.4 million square feet of combined retail, office, and medical space. The broader transformation of Dale Mabry&apos;s large-format retail into mixed-use districts is not a single project — it is a wave. For a full overview of the mall-to-mixed-use conversion trend across Tampa, see our post on{" "}
          <Link href="/blog/tampa-mall-redevelopment-mixed-use-2026" className="text-accent underline">Tampa mall redevelopment and mixed-use CRE in 2026</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Is the Dale Mabry Corridor Divided as a CRE Market?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Dale Mabry corridor is not a single market. Understanding it requires breaking it into distinct segments, each with different tenant demand profiles, vacancy rates, and investment characteristics.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-4">
          <li>
            <strong>South Dale Mabry (South Tampa — Gandy to Howard Avenue).</strong> This is the highest-demand segment on the corridor. South Tampa is one of the wealthiest and most densely residential submarkets in the Tampa Bay area, and the commercial strip along S. Dale Mabry from Gandy Boulevard north to roughly Howard Avenue is dominated by neighborhood retail, restaurants, fitness, medical, and personal services. Vacancy in this segment is structurally low — typically 3% to 5% — because there is virtually no land available for new retail construction. Asking rents for well-located in-line space on this segment run $28 to $42 per square foot NNN, among the highest in Tampa. Investors who acquire retail properties in this segment rarely struggle with vacancy; the challenge is finding available product at a reasonable price.
          </li>
          <li>
            <strong>Westshore Segment (Howard Avenue to Kennedy Boulevard).</strong> This segment transitions from neighborhood retail to higher-density regional commercial as it approaches the Westshore business district. The Britton Plaza repositioning is the dominant story here. With Britton Plaza tenant vacancy accelerating and WestShore Plaza undergoing long-term transformation, the segment is experiencing elevated uncertainty — but also opportunity. Displaced Britton Plaza tenants are actively searching for alternative South Tampa addresses, putting upward pressure on rents for well-located alternatives. For the{" "}
            <Link href="/blog/westshore-tampa-office-market-2026" className="text-accent underline">Westshore office market</Link>, the nearby residential densification from WestShore Plaza&apos;s 1,765-unit residential component will significantly expand the built-in workforce supporting Westshore employers.
          </li>
          <li>
            <strong>Mid-Corridor (Kennedy Boulevard to I-275 / Busch Boulevard).</strong> This segment serves established residential neighborhoods including Carrollwood and the communities west of I-275. It carries a strong mix of community retail — grocery-anchored centers, national QSR operators, auto-related uses, and medical office. Vacancy is slightly higher than South Tampa but still healthy by national retail standards, running approximately 5% to 8%. The{" "}
            <Link href="/blog/tampa-bay-retail-market-q2-2026" className="text-accent underline">broader Tampa Bay retail market</Link> recorded overall vacancy of 3.8% in Q2 2026 — the mid-corridor segment sits above the market average but remains well below the national average of 6.0%.
          </li>
          <li>
            <strong>North Corridor (Busch Boulevard into Carrollwood and Northdale).</strong> The northern Dale Mabry segment transitions to suburban community retail serving the high-growth communities of Carrollwood, Northdale, and Citrus Park. This segment has the highest availability on the corridor, with more competition from big-box anchored power centers that flank Dale Mabry in this area. Asking rents are correspondingly lower — $18 to $28 per square foot NNN depending on site characteristics — but the tenant demand from the growing residential population base in this area provides a stable occupancy floor.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Commercial Investment Opportunities Does Dale Mabry Offer in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The redevelopment wave creates distinct opportunities for investors who understand how corridor transformation works. When a large anchored center like Britton Plaza undergoes repositioning, several dynamics play out that savvy investors can capitalize on.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Adjacent small-format retail acquisition.</strong> Well-located strip centers and freestanding retail buildings within one to two blocks of Britton Plaza on S. Dale Mabry have benefited from displaced tenant demand since early 2026. Tenants who need to relocate from Britton Plaza are motivated and often willing to sign longer leases at above-market rents to secure a South Tampa address. For investors who can acquire adjacent product — even at a modest premium — the secured rental income from this motivated tenant demand can deliver attractive returns while the longer-term densification of the corridor drives appreciation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Medical office and professional services.</strong> The corridor&apos;s residential density makes it a natural home for medical office users seeking patient-convenient locations. South Tampa&apos;s demographics — high household income, strong health insurance coverage, aging homeowner base — are ideal for primary care, dental, optometry, dermatology, and specialty medical practices. The{" "}
          <Link href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">Tampa Bay medical office market</Link> remains one of the most supply-constrained segments of commercial real estate regionally, and Dale Mabry&apos;s South Tampa segment is at the center of that demand.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Land and redevelopment play.</strong> Properties with older improvements on large lots along the Westshore and mid-corridor segments are attracting developer interest as the mixed-use redevelopment thesis for the corridor solidifies. Owners of 30,000 to 100,000 square foot parcels with aging commercial improvements should evaluate whether their highest-and-best use is continued operation of the existing building or a sale to a developer who will pursue entitlements for a higher-density mixed-use project. If you own a commercial property on Dale Mabry and are curious about what it could be worth in the current redevelopment environment, <Link href="https://fastselleasysale.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">fastselleasysale.com</Link> offers a direct path to evaluating a cash sale without the complexity of a traditional listing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before any acquisition, investors should understand{" "}
          <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">how to properly calculate commercial property ROI</Link> on a corridor retail property — factoring in realistic lease-up assumptions, NNN reimbursement structures, and the time value of holding through a redevelopment cycle — and complete thorough{" "}
          <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">commercial due diligence</Link> on title, environmental, zoning, and structural conditions. Understanding{" "}
          <Link href="/blog/commercial-property-zoning-florida-basics" className="text-accent underline">Florida commercial zoning basics</Link> is especially important on Dale Mabry, where properties may carry legacy zoning designations that limit or enable redevelopment potential.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tenants Know About Leasing Space on Dale Mabry in 2026?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Businesses looking for space on the Dale Mabry corridor in 2026 face a bifurcated market. In South Tampa, quality available spaces are rare and tend to go quickly — often through tenant rep brokers who maintain relationships with landlords before space hits public listing. In the Westshore and mid-corridor segments, the Britton Plaza repositioning has increased availability temporarily, but the best alternative spaces are being absorbed by motivated displaced tenants at a rapid pace.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Practical guidance for businesses evaluating Dale Mabry space:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Start your search 9 to 12 months before you need to open.</strong> Quality spaces in South Tampa are leased quickly, and the combination of lease negotiation, permitting, and build-out timelines means a business that starts looking at month seven before its target open date is already behind.
          </li>
          <li>
            <strong>Evaluate full occupancy cost, not just asking rent.</strong> Dale Mabry retail leases are typically structured as NNN, meaning common area maintenance charges, property taxes, and insurance are billed on top of the base rent. The difference between a $30/SF NNN lease with $8/SF in CAM and a $35/SF NNN lease with $3/SF in CAM is significant — the lower-sounding rent may actually cost more. For a guide to navigating NNN lease structures, see our post on{" "}
            <Link href="/blog/what-is-triple-net-nnn-lease-and-why-investors-love-it" className="text-accent underline">understanding triple-net leases</Link>.
          </li>
          <li>
            <strong>Be cautious about Britton Plaza leases.</strong> Businesses considering a short-term lease at Britton Plaza as a placeholder should understand the redevelopment timeline uncertainty. A two-year lease that turns into a forced relocation at the end of year one is a disruption cost that a South Tampa storefront at a higher headline rent may avoid entirely.
          </li>
          <li>
            <strong>Use a tenant representative.</strong> A{" "}
            <Link href="/services/tenant-representation" className="text-accent underline">tenant representative</Link> gives you access to off-market opportunities, negotiates on your behalf against landlords who have full-time leasing agents, and helps you avoid the common mistakes first-time commercial tenants make — from signing a lease with unfavorable renewal terms to missing hidden cost escalators.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Dale Mabry Corridor Look Like in Five Years?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The five-year trajectory of the Dale Mabry corridor is one of densification and upgrading. If Britton Plaza delivers a mixed-use project with residential units, and WestShore Plaza delivers its planned 1,765 homes over the next several years, the permanent residential population density along the southern half of the corridor will increase materially. More residents living walkable distance to Dale Mabry means stronger demand for the restaurants, medical offices, personal services, fitness studios, and neighborhood retail that line the corridor.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The South Tampa housing market adjacent to Dale Mabry has already been one of the most competitive in the Tampa Bay area, and the addition of new walkable, amenity-rich residential product will make the area even more attractive to buyers and renters. If you are thinking about buying or selling residential property in the neighborhoods surrounding Dale Mabry&apos;s South Tampa segment, the{" "}
          <Link href="https://nowtb.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">nowtb.com</Link> home search covers South Tampa neighborhoods with up-to-date listings and market data.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the commercial corridor itself, the medium-term outlook is positive — higher residential density raises the ceiling on retail and restaurant rents, creates demand for additional medical and professional services, and makes Dale Mabry addresses more valuable. Investors who acquire today, during the uncertainty of two simultaneous major-center redevelopments, are positioned to benefit from the appreciation that follows when the mixed-use projects deliver and the corridor&apos;s transformation becomes visible.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Dale Mabry CRE in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Dale Mabry is not one market — it is several, stacked along 30 miles of Tampa&apos;s most important commercial axis. The South Tampa segment is as tight and supply-constrained as it has ever been, with demand from both existing businesses and Britton Plaza&apos;s displaced tenants keeping well-located space occupied at near-record rents. The Westshore segment is in transition, with the Britton Plaza and WestShore Plaza redevelopments creating a period of elevated uncertainty that also represents an opportunity window for investors who understand what comes next. The northern segments remain value-oriented, stable, and served by growing residential populations in Carrollwood and Northdale.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Whether you are looking for space for your business, evaluating an acquisition, or considering what your Dale Mabry property is worth in the current redevelopment environment, understanding the specific segment you are working in is the first step. With 23+ years of real estate experience and deep familiarity with Tampa&apos;s commercial corridors, I work with tenants, investors, and property owners across the Dale Mabry corridor and the broader South Tampa CRE market.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Dale Mabry Corridor CRE Tampa 2026 — Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-lg border border-[#E5E5E5] p-6">
          <Image
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He helps businesses find commercial space and investors evaluate acquisitions along Tampa&apos;s major corridors, including Dale Mabry, Kennedy Boulevard, and the Westshore district. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or explore <Link href="/services" className="text-accent underline">his services</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Looking for Space on Dale Mabry or a Commercial Investment in South Tampa?"
        body="I work with tenants finding retail, office, and medical space along the Dale Mabry corridor and with investors evaluating acquisitions in South Tampa and Westshore. Call (813) 733-7907 or reach out below — let's talk about what the corridor's transformation means for you."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
