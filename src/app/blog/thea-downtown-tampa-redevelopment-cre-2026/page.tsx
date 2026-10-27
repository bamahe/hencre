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
 * Blog: THEA Downtown Tampa Redevelopment — CRE Implications 2026
 * Tampa Hillsborough Expressway Authority opens 2.8 acres near Water
 * Street to private redevelopment with three finalists competing.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "THEA Downtown Tampa Redevelopment: CRE Impact 2026 | HenCRE",
  description:
    "The Tampa Hillsborough Expressway Authority has shortlisted Hines, Strategic Property Partners, and Gotham Organization to redevelop nearly 3 acres near Water Street — including THEA's own headquarters. Here is what this public-land deal means for downtown Tampa CRE investors and tenants.",
  alternates: { canonical: "https://hencre.com/blog/thea-downtown-tampa-redevelopment-cre-2026" },
  openGraph: {
    title: "THEA Downtown Tampa Redevelopment: CRE Impact 2026",
    description:
      "Tampa's expressway authority is putting nearly 3 acres of prime downtown land into private hands — with Hines, SPP, and Gotham competing for the site near Water Street. What this public-land redevelopment means for downtown Tampa commercial real estate investors.",
    url: "https://hencre.com/blog/thea-downtown-tampa-redevelopment-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Downtown Tampa skyline aerial view showing development near the waterfront",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the THEA redevelopment project near Water Street Tampa?",
    answer:
      "The Tampa-Hillsborough Expressway Authority (THEA) has narrowed a competitive developer selection process to three finalists — Strategic Property Partners (SPP), Hines, and Gotham Organization — for the right to redevelop approximately 2.8 acres of prime downtown Tampa land located near the Water Street district. The acreage includes THEA's own headquarters building. The agency is considering either outright land sale or a long-term ground lease structure. Proposed uses include apartments, hotels, office space, retail, and mixed-use combinations. THEA's competitive selection process reflects a broader trend of public agencies in Tampa Bay monetizing underused downtown land to fund infrastructure upgrades while adding density to the urban core.",
  },
  {
    question: "Who are the three finalists competing for the THEA downtown Tampa site?",
    answer:
      "THEA shortlisted three nationally recognized developers. Strategic Property Partners (SPP) is the development entity behind the $3.5 billion Water Street Tampa district and is already the most active institutional developer in downtown Tampa. Hines is one of the largest global real estate developers with a significant Florida presence and a track record of large-scale mixed-use urban redevelopment. Gotham Organization, while less familiar to Tampa audiences, has completed complex urban infill projects in dense East Coast markets. Each finalist brings a different vision for the site — and their respective strengths in apartment, hotel, office, or mixed-use development will shape whichever proposal THEA ultimately selects.",
  },
  {
    question: "How does the THEA site compare in value to other downtown Tampa land deals?",
    answer:
      "Downtown Tampa land near the Water Street district is among the most valuable commercial acreage in the Tampa Bay region. Recent comparable land transactions in the downtown core have ranged from $40 to over $80 per square foot for entitled, shovel-ready sites — though specific pricing depends heavily on development rights, ground-floor retail requirements, and parking obligations baked into any development agreement. At approximately 2.8 acres (roughly 122,000 square feet), the THEA site's land value alone — before any vertical construction — places it among the largest downtown Tampa land transactions in recent years. The ground-lease option THEA is considering would retain public ownership while generating long-term rent income, similar to structures used in public-private downtown redevelopments in Miami and Orlando.",
  },
  {
    question: "What types of commercial space could the THEA site add to downtown Tampa?",
    answer:
      "All three finalist proposals likely include some mix of residential (apartments or condominiums), hotel rooms, ground-floor retail or restaurant space, and potentially office. The site's proximity to Water Street, Amalie Arena, and the Convention Center makes it well-positioned for hospitality and experiential retail uses that serve the events district. If any of the proposals include new office space, it would add to a downtown Tampa Class A office market that has been tightening — vacancy fell to multi-year lows in mid-2026 — but where new supply is limited. The mixed-use nature of likely proposals means the site could serve as a connector between the Water Street district and adjacent downtown neighborhoods.",
  },
  {
    question: "What should investors and tenants watch for as the THEA decision unfolds?",
    answer:
      "The key milestones are: THEA's final developer selection (which has not been announced as of late October 2026), negotiation of the development agreement or ground lease terms, and City of Tampa zoning approvals for whichever project moves forward. For investors, the developer selected signals something about what the site will become — SPP winning means the Water Street district extends further; Hines winning often signals a large mixed-use project with institutional capital backing; Gotham might bring a more residential-focused approach. For retail and office tenants, the THEA site represents future inventory in one of downtown Tampa's highest-demand locations. Engaging a tenant representative now — before the project is publicly marketed — is the most reliable way to stay ahead of available space.",
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
          name: "THEA Downtown Tampa Redevelopment: CRE Impact 2026",
          item: "https://hencre.com/blog/thea-downtown-tampa-redevelopment-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "THEA Downtown Tampa Redevelopment: What It Means for CRE Investors and Tenants in 2026",
      description:
        "The Tampa Hillsborough Expressway Authority shortlisted Hines, SPP, and Gotham to redevelop nearly 3 acres near Water Street — including THEA's own headquarters. What this public-land deal means for downtown Tampa CRE.",
      datePublished: "2026-10-26",
      dateModified: "2026-10-26",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/thea-downtown-tampa-redevelopment-cre-2026",
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
    title: "Water Street Tampa 33-Story Tower: CRE Guide 2026",
    href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    description: "Strategic Property Partners' second-phase tower — one of the three THEA finalists — is already reshaping downtown Tampa's commercial fabric.",
  },
  {
    title: "Tampa Bay Office Market Q3 2026",
    href: "/blog/tampa-bay-office-market-q3-2026",
    description: "How downtown Tampa office demand and falling vacancy set the stage for projects like the THEA site.",
  },
  {
    title: "GasWorx Tampa Ybor Office & Commercial 2026",
    href: "/blog/gasworx-tampa-ybor-office-commercial-2026",
    description: "Another public-land redevelopment driving downtown Tampa's CRE transformation.",
  },
  {
    title: "Historic Gas Plant District St. Pete CRE 2026",
    href: "/blog/historic-gas-plant-district-st-pete-cre-2026",
    description: "How St. Pete's major public-land redevelopment compares to Tampa's THEA opportunity.",
  },
  {
    title: "Tampa Heights Commercial Real Estate 2026",
    href: "/blog/tampa-heights-commercial-real-estate-2026",
    description: "The adjacent Tampa Heights submarket benefiting from downtown Tampa's continued densification.",
  },
  {
    title: "Midtown Tampa Commercial Real Estate 2026",
    href: "/blog/midtown-tampa-commercial-real-estate-2026",
    description: "Midtown Tampa's success as a mixed-use development illustrates the market appetite driving the THEA competition.",
  },
  {
    title: "Tampa Bay CRE Market Outlook Q4 2026",
    href: "/blog/tampa-bay-cre-market-outlook-q4-2026",
    description: "Broader market context for understanding downtown Tampa's development pipeline.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "Before you invest near the THEA site, run through the full due diligence checklist.",
  },
  {
    title: "Hillsborough County Commercial Real Estate",
    href: "/markets/hillsborough",
    description: "Barrett's full coverage of commercial real estate opportunities across Hillsborough County.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "Get positioned for retail or office space in the THEA project before it hits the open market.",
  },
];

export default function TheaDowntownTampaRedevelopmentPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "THEA Downtown Tampa Redevelopment: CRE Impact 2026", href: "/blog/thea-downtown-tampa-redevelopment-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="THEA's Downtown Tampa Land: A Public-Site Redevelopment That Changes the Map"
        subtitle="The Tampa Hillsborough Expressway Authority has shortlisted Hines, Strategic Property Partners, and Gotham Organization to redevelop nearly 3 acres near Water Street — including THEA's own headquarters. Here is what this deal means for CRE investors and tenants."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When a public agency puts prime downtown land on the market and narrows the competition to three of the most respected names in institutional real estate development, it is not a routine transaction. It is a signal about where a city is headed — and for downtown Tampa commercial real estate, the Tampa-Hillsborough Expressway Authority&apos;s redevelopment process sends a clear message: the institutional appetite for density near the Water Street district has not peaked.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          THEA&apos;s October 2026 announcement that it has shortlisted three developers — Strategic Property Partners, Hines, and Gotham Organization — for approximately 2.8 acres of downtown Tampa land, including THEA&apos;s own headquarters site, is one of the most consequential land-use decisions in the downtown core in recent memory. Here is what investors and tenants need to understand about what comes next.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the THEA Redevelopment Site and Why Does It Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Tampa-Hillsborough Expressway Authority is the public agency that operates and manages the Selmon Expressway and other regional toll roads in Hillsborough County. For decades, THEA has occupied a headquarters building on a land parcel in downtown Tampa — a location whose commercial value has increased dramatically as the Water Street Tampa district has transformed the surrounding urban environment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Rather than continue to occupy that high-value real estate with administrative offices that could function from a more cost-efficient location, THEA initiated a competitive developer solicitation to unlock the land&apos;s latent value. The offering comprises approximately 2.8 acres in the heart of the downtown core, near Amalie Arena, the Tampa Convention Center, and the southern boundary of the Water Street district. THEA is considering both outright land sale and long-term ground lease structures — a flexibility that broadens the pool of capital sources that can participate.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The site sits at a convergence of several of downtown Tampa&apos;s most active development forces. The Water Street district is entering its second construction phase. The <Link href="/blog/gasworx-tampa-ybor-office-commercial-2026" className="text-accent underline">GasWorx redevelopment in Ybor</Link> is adding density to the northeast. The Tampa Bay Rays&apos; new stadium project continues to advance. And the Convention Center district has seen sustained hotel demand. The THEA acreage sits inside the zone where all of those forces create maximum value for mixed-use urban development.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Who Are Hines, Strategic Property Partners, and Gotham Organization?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Understanding who THEA shortlisted matters because each developer brings a different track record, capital structure, and vision — and the winning proposal will shape the THEA site&apos;s use for decades.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Strategic Property Partners (SPP)</strong> is the developer behind the $3.5 billion Water Street Tampa district — the most transformative urban redevelopment project in Tampa&apos;s history. SPP, backed by Cascade Investment LLC (the private investment vehicle of Microsoft co-founder Bill Gates), already controls the urban environment immediately surrounding the THEA site. If SPP wins the THEA competition, the Water Street district effectively expands its footprint, maintaining the design-coherent, single-developer control model that has distinguished Water Street Tampa from piecemeal urban districts. SPP is also simultaneously advancing a <Link href="/blog/water-street-tampa-33-story-tower-downtown-cre-2026" className="text-accent underline">33-story luxury residential tower at Water Street and Cumberland Avenue</Link>, signaling continued capital commitment to downtown Tampa even as the broader capital markets have cooled in 2025-2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Hines</strong> is one of the largest privately held real estate development and investment firms in the world, with a presence across 30 countries and roughly $93 billion in assets under management. Hines has a strong Florida track record that includes large mixed-use projects in Miami, Orlando, and other markets. A Hines victory on the THEA site would likely bring a different capital structure — institutional equity and institutional-grade debt — along with a mixed-use program calibrated for maximum density and a rapid move toward stabilization. Hines projects in similar markets have typically emphasized Class A office, luxury residential, and curated ground-floor retail.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Gotham Organization</strong> is a New York-based developer with a long history of complex urban infill projects, including workforce and market-rate residential development in dense markets. Gotham&apos;s inclusion in a Tampa competition signals that the THEA selection committee saw value in a residential-focused approach — potentially including a mix of market-rate and income-restricted housing — that the other finalists may not have prioritized. Gotham&apos;s model often involves state and city housing incentives that can make a project pencil at higher density than pure market-rate approaches allow.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Will the THEA Site Likely Become, and When?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          While THEA has not announced a final developer selection as of late October 2026, the competitive dynamics and site characteristics point toward a mixed-use development with some combination of:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Multifamily residential.</strong> All three finalists have the capability to deliver apartments or condominiums, and downtown Tampa&apos;s <Link href="/blog/tampa-bay-apartment-market-q4-2026" className="text-accent underline">apartment market</Link> — though experiencing some rental rate softening from new supply — still justifies luxury and mid-market residential at this location.</li>
          <li><strong>Hotel rooms.</strong> The Convention Center adjacency makes hotel development highly bankable on this site. Downtown Tampa has consistently underperformed peer markets in available hotel rooms relative to convention demand, a gap the THEA site is well-positioned to fill.</li>
          <li><strong>Ground-floor retail and food-and-beverage.</strong> Any development on this site will be expected to activate the street level. The Water Street and Amalie Arena adjacency creates strong foot traffic justification for restaurant, bar, and experiential retail concepts.</li>
          <li><strong>Office space.</strong> Less certain given broader <Link href="/blog/tampa-bay-office-market-q3-2026" className="text-accent underline">office market softness</Link> nationally, but downtown Tampa&apos;s Class A office vacancy is at multi-year lows, and an institutional-quality building in this location would attract tenants that cannot be accommodated in existing Class A inventory.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Timeline from final selection to groundbreaking typically runs 18 to 36 months for projects of this complexity, depending on how far along the development agreement negotiations are before selection is announced and whether any zoning changes are required. Investors and tenants watching this site should plan on 2028 at the earliest for vertical construction and 2030-2031 for stabilization.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does a Ground Lease vs. Land Sale Affect CRE Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          THEA&apos;s consideration of a ground lease — rather than an outright land sale — has meaningful implications for how the eventual project is capitalized and how it competes for institutional investment.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a <strong>land sale</strong>, the developer acquires fee simple ownership and controls the site in perpetuity. The land cost is a large upfront capital requirement, but the developer owns the full asset — land and improvements — and can refinance, sell, or recapitalize the project on standard commercial terms. Most institutional investors and lenders are comfortable with fee simple ownership.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a <strong>ground lease</strong>, THEA retains ownership of the land and receives annual ground rent. The developer builds and owns the improvements (the building) for the term of the lease — typically 49 to 99 years. Ground leases on public land are increasingly common in Florida: the <Link href="/blog/historic-gas-plant-district-st-pete-cre-2026" className="text-accent underline">Historic Gas Plant redevelopment in St. Petersburg</Link> uses a similar structure. The benefits to THEA are significant: the agency generates long-term revenue without permanently losing the land. The trade-offs for the developer include slightly more complex financing and a requirement to negotiate lease extensions well before expiration to maintain asset value.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For CRE investors evaluating adjacent properties, the ground lease structure does not meaningfully change the development impact — what matters for cap rates and tenant demand in surrounding blocks is the new density and activity that the project brings, not the land ownership structure at the THEA site itself.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does This Mean for CRE Investors in Downtown Tampa?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The THEA redevelopment, combined with Water Street&apos;s second phase, the GasWorx project in Ybor, and the continued maturation of <Link href="/blog/midtown-tampa-commercial-real-estate-2026" className="text-accent underline">Midtown Tampa</Link>, means that downtown Tampa&apos;s urban core is adding institutional-grade density at a pace not seen in the market&apos;s recent history. For investors, this creates several distinct opportunity types:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Existing downtown office buildings.</strong> As new residential and hotel density increases the daytime and evening population around the Convention Center and Water Street, demand for walkable office space in the downtown core will grow. Class B office buildings within a few blocks of the THEA site that can be renovated to modern standards represent a value-add play with a clear demand tailwind. Our analysis of the <Link href="/blog/tampa-bay-office-market-q3-2026" className="text-accent underline">Tampa Bay office market</Link> shows that downtown Tampa Class A vacancy is at multi-year lows while suburban Class B remains elevated — the urban premium is real.</li>
          <li><strong>Retail storefronts on connectivity corridors.</strong> The streets connecting Water Street, the Convention Center, Amalie Arena, and the THEA site see meaningful pedestrian traffic during events and increasingly during weekday daytime hours. Investors who own or can acquire small multi-tenant retail buildings on these corridors are positioned to capture rent growth as the surrounding district densifies.</li>
          <li><strong>Multifamily assets in the downtown fringe.</strong> Channelside, East Tampa&apos;s Adamo Drive corridor, and South Seminole Heights absorb residential demand from workers and residents who want downtown Tampa proximity at rents below the luxury tier. Value-add multifamily acquisitions in these areas benefit from every round of downtown density announced — including the THEA site.</li>
          <li><strong>Land assemblage for development.</strong> The announcement that institutional developers will bid hundreds of millions of dollars to acquire or lease a 2.8-acre parcel near Water Street is a real-time comp for adjacent landowners and developers evaluating smaller infill opportunities in the same block range. Sellers who have been patient are getting validation; buyers who move quickly before the THEA announcement fully reprices the block may still find relative value.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors entering a market at this stage of the cycle, discipline on individual underwriting matters as much as the macro narrative. Understanding <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">how to calculate commercial property ROI</Link> and running complete <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence</Link> on any specific asset remains essential — momentum narratives do not fix bad cap rates or hidden structural problems.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Tenants Know About the THEA Site and Future Space Availability?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Retail, restaurant, and office tenants interested in downtown Tampa should be aware that the THEA site will represent future commercial inventory — but not for several years. The competitive developer selection is ongoing as of October 2026. Development agreement negotiations, permitting, and construction will follow, placing stabilized occupancy in the early 2030s at the earliest for most space types.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What tenants can do now:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Identify who wins the THEA competition.</strong> The developer selected will begin preliminary tenant outreach long before the building is under construction. Getting into that conversation early — especially for ground-floor restaurant and retail space — requires knowing the developer and being on their call list before the public launch.</li>
          <li><strong>Evaluate adjacent existing space now.</strong> The foot traffic and demand drivers that justify the THEA site&apos;s development are present today in surrounding blocks. Tenants who lease space in the Water Street corridor, Channelside, or the Convention Center fringe now will benefit from the THEA project&apos;s completion without waiting 5+ years for new construction.</li>
          <li><strong>Work with a tenant representative who tracks this pipeline.</strong> Pre-construction retail in major mixed-use projects is often leased through broker relationships before any public marketing. If you want access to THEA-adjacent or Water Street-adjacent space, having representation in place is not optional — it is the mechanism by which tenants get in front of these opportunities.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are a business owner or operator considering a downtown Tampa location in the next two to five years, the <Link href="/blog/tampa-retail-storefront-space-guide" className="text-accent underline">Tampa retail storefront market</Link> has near-term inventory available in the same trade area — space you can occupy while the THEA project&apos;s new inventory is being built.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on the THEA Downtown Tampa Redevelopment</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Tampa-Hillsborough Expressway Authority&apos;s decision to offer nearly 3 acres of prime downtown Tampa land to private redevelopment — and the caliber of the three finalists competing for it — is as clear a signal as the market produces that institutional capital sees downtown Tampa as a long-term growth market. Three national-caliber developers competing for a 2.8-acre site near Water Street, Amalie Arena, and the Convention Center does not happen in a market without durable demand fundamentals.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, this is further evidence that the halo effect from Water Street and the broader downtown Tampa development pipeline has not yet fully repriced surrounding commercial assets. For tenants, it is a forward indicator that downtown Tampa&apos;s inventory of Class A retail, office, and hotel space will grow — but that the relevant horizon is years away, and the space that matters most now is what is available today.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across the Tampa Bay region — including deep familiarity with downtown Tampa&apos;s evolving submarket dynamics — I work with investors identifying CRE acquisition opportunities in the downtown core and tenants securing the right space ahead of the next round of announcements. If you are making a downtown Tampa commercial real estate decision, let&apos;s connect before the THEA selection reshapes the competitive landscape further.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: October 2026</p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 rounded-2xl border border-[#E5E5E5] bg-white p-6">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop"
            alt="Barrett Henry, Broker Associate at REMAX Collective"
            width={80}
            height={80}
            className="rounded-full shrink-0"
          />
          <div>
            <p className="font-bold text-black">Barrett Henry</p>
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience across the Tampa Bay region. He works with investors identifying acquisition opportunities in downtown Tampa&apos;s evolving commercial district and tenants finding the right space in a competitive market. Learn more about{" "}
              <Link href="/about" className="text-accent underline">Barrett&apos;s background</Link>{" "}
              or{" "}
              <Link href="/contact" className="text-accent underline">contact him directly</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Disclaimer ---- */}
      <section className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#999999]">
          This article is for informational purposes only and does not constitute legal, tax, or investment advice. Consult qualified professionals before making real estate decisions.
        </p>
      </section>

      <CTASection
        heading="Evaluating Downtown Tampa CRE Near the THEA Site?"
        body="I help investors identify well-positioned acquisitions in downtown Tampa's expanding commercial district and tenants secure office or retail space before the next round of development tightens the market further. Call or message today."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
