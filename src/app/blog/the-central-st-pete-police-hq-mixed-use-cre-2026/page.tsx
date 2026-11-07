import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: The Central St. Pete — Former Police HQ Mixed-Use CRE 2026
 * Ellison Development closes $6.4M land deal Nov 2026; ARK Invest HQ
 * relocating to Halcyon office; Marriott Autograph hotel; 42 workforce
 * units — what it means for downtown St. Pete CRE investors & tenants.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "The Central St. Pete: Former Police HQ Mixed-Use CRE 2026 | HenCRE",
  description:
    "Ellison Development closed the $6.4M land deal on St. Petersburg's former police headquarters in November 2026. The Central brings ARK Invest's new HQ, a Marriott Autograph hotel, 116,000 SF of Class A office, and 42 workforce apartments to the EDGE District. Here is what it means for CRE investors and tenants.",
  alternates: { canonical: "https://hencre.com/blog/the-central-st-pete-police-hq-mixed-use-cre-2026" },
  openGraph: {
    title: "The Central St. Pete: ARK Invest HQ, Marriott Hotel, and What It Means for CRE",
    description:
      "Ellison Development closed on the former St. Pete police HQ site in November 2026. The Central will bring ARK Invest's headquarters, a 165-room Marriott Autograph hotel, 116,000 SF of Class A office, and 42 workforce apartments to downtown St. Petersburg's EDGE District.",
    url: "https://hencre.com/blog/the-central-st-pete-police-hq-mixed-use-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern mixed-use urban development with office tower and hotel in downtown St. Petersburg Florida",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is The Central and where is it located?",
    answer:
      "The Central is a mixed-use development by Tampa-based Ellison Development at 1301 Central Avenue in downtown St. Petersburg, Florida — the site of the city's former police headquarters. The project includes a 10-story Class A office building called Halcyon with approximately 116,000 square feet of office space and more than 11,000 square feet of ground-floor retail, a 165-room Central Hotel joining Marriott's Autograph Collection, 42 workforce apartments, a rooftop park with native Florida landscaping, and a 531-space public parking garage that is already complete and operating. The city sold the land to Ellison Development for $6.4 million in November 2026 after a period of project stalls and negotiations that stretched from at least mid-2026. The Central is located within St. Petersburg's EDGE District — a mixed-use corridor along Central Avenue that has drawn significant developer and institutional investor attention in recent years.",
  },
  {
    question: "Why is ARK Invest relocating its headquarters to St. Petersburg?",
    answer:
      "ARK Invest — the investment management firm founded by Cathie Wood, known for its focus on disruptive technology and innovation strategies — has committed to relocating its corporate headquarters to the Halcyon office building within The Central development. The relocation reflects a broader pattern of financial services and technology firms choosing St. Petersburg and Tampa Bay over higher-cost markets. Florida's absence of a state income tax, the region's quality of life factors, and the growing concentration of financial and technology professionals in the Tampa Bay metro have made it increasingly competitive with traditional financial hubs for headquarters relocations. For The Central specifically, ARK Invest's commitment as an anchor tenant provides the kind of credit tenancy that enables commercial lenders to finance the office component with confidence — a significant de-risking factor for the Halcyon office building in a national office market that remains cautious about spec development.",
  },
  {
    question: "What does The Central mean for retail tenants in the EDGE District?",
    answer:
      "The Central adds meaningful foot traffic to an already supply-constrained retail corridor. The combination of ARK Invest employees, hotel guests at the 165-room Autograph Collection property, and 42 residential units within the development creates a layered captive customer base for ground-floor retail — both within The Central itself and along Central Avenue more broadly. For retailers and food-and-beverage operators evaluating EDGE District locations, the project is relevant in two ways. First, the 11,000-plus square feet of ground-floor retail within The Central itself represents an opportunity for tenants who want a position tied to a branded, high-profile development with built-in foot traffic from day one. Second, the broader effect on Central Avenue — adding hotel density, office density, and residential units to an already active corridor — will put additional upward pressure on retail asking rents along the street, which have been rising consistently for three to four years. Tenants who have been waiting for 'the right moment' to sign in the EDGE District should understand that The Central accelerates the timeline, not delays it.",
  },
  {
    question: "What are the completion requirements and penalties in the Ellison Development land deal?",
    answer:
      "The post-closing agreement recorded November 4, 2026 sets specific performance milestones for Ellison Development. The office, retail, and workforce housing components of The Central must be completed by January 1, 2030. The penalty structure for non-completion is specific and meaningful: failure to complete the office space triggers $1 million in liquidated damages, while failure to build the 42 workforce housing units triggers $6 million in liquidated damages — a reflection of how important the workforce housing component is to the city's terms for the deal. These contractual penalties are publicly recorded and represent a meaningful accountability mechanism for a project that had already experienced development delays. For CRE investors evaluating risk in the development pipeline, the January 2030 deadline and the structured penalty framework suggest that the city has done more than approve the deal — it has built in enforceable consequences for non-performance that give the development timeline credibility.",
  },
  {
    question: "How does The Central compare to other downtown St. Pete mixed-use projects?",
    answer:
      "The Central is one of several large-scale mixed-use projects reshaping downtown St. Petersburg's commercial real estate landscape in this cycle. The Edge Collective Phase 2 — a 20-story tower by PTM Partners with 330 apartments and 19,000 square feet of ground-floor retail, financed with a $125 million construction loan from Berkadia — represents the multifamily-led mixed-use model, while The Central is more office-led, with the Halcyon building and ARK Invest headquarters occupancy as the economic driver. The Echelon City Center North project adds density to the northern part of St. Pete's urban core. Taken together, these projects represent a generational transformation of downtown St. Petersburg from a secondary office market into a walkable, amenity-rich urban district with genuine Class A office product, branded hotel inventory, and activated street-level retail. For investors, the relevant question is not whether individual projects will succeed — the pipeline has institutional capital and anchor tenants — but whether the cumulative supply of office, retail, and hospitality is paced correctly against demand. The ARK Invest headquarters commitment is a meaningful signal that office demand from financial and technology firms is real and moving.",
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
          name: "The Central St. Pete: Former Police HQ Mixed-Use CRE 2026",
          item: "https://hencre.com/blog/the-central-st-pete-police-hq-mixed-use-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "The Central St. Pete: Former Police HQ Mixed-Use CRE 2026",
      description:
        "Ellison Development closed the $6.4M land deal on St. Petersburg's former police headquarters in November 2026. The Central brings ARK Invest's new HQ, a Marriott Autograph hotel, and 116,000 SF of Class A office to the EDGE District — here is what it means for CRE investors and tenants.",
      datePublished: "2026-11-05",
      dateModified: "2026-11-07",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/the-central-st-pete-police-hq-mixed-use-cre-2026",
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
    title: "St. Pete EDGE District CRE 2026",
    href: "/blog/st-pete-edge-district-cre-2026",
    description: "How Edge Collective Phase 2's $125M construction loan signals institutional confidence in the EDGE District corridor.",
  },
  {
    title: "St. Petersburg Office Market 2026",
    href: "/blog/st-petersburg-office-market-2026",
    description: "Office absorption, vacancy rates, and leasing activity across downtown St. Pete's office market.",
  },
  {
    title: "St. Petersburg Commercial Real Estate 2026",
    href: "/blog/st-petersburg-commercial-real-estate-2026",
    description: "The full picture of St. Pete's commercial market — office, retail, industrial, and investment.",
  },
  {
    title: "Tampa Bay Hotel & Hospitality CRE 2026",
    href: "/blog/tampa-bay-hotel-hospitality-cre-2026",
    description: "Cap rates, RevPAR trends, and investment activity in Tampa Bay's hospitality real estate market.",
  },
  {
    title: "Tampa Bay Corporate HQ Relocations & Office CRE 2026",
    href: "/blog/tampa-bay-corporate-hq-relocations-office-cre-2026",
    description: "How Fortune 500 relocations and headquarters moves are reshaping Tampa Bay office demand.",
  },
  {
    title: "Tampa Bay Restaurant & Food Beverage Space 2026",
    href: "/blog/tampa-bay-restaurant-food-beverage-space-2026",
    description: "Ground-floor retail and F&B demand in mixed-use corridors like the EDGE District.",
  },
  {
    title: "Clearwater & Pinellas County Commercial Real Estate 2026",
    href: "/blog/clearwater-pinellas-county-commercial-real-estate-2026",
    description: "How the Pinellas County commercial market extends from St. Pete through Clearwater.",
  },
  {
    title: "Investment Sales Services",
    href: "/services/investment-sales",
    description: "How Barrett helps investors evaluate and acquire commercial assets across the Tampa Bay market.",
  },
];

export default function TheCentralStPetePoliceHQMixedUseCRE2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "The Central St. Pete: Former Police HQ Mixed-Use CRE 2026", href: "/blog/the-central-st-pete-police-hq-mixed-use-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="The Central St. Pete: Former Police HQ Mixed-Use CRE 2026"
        subtitle="Ellison Development closed the $6.4M land deal in November 2026 — ARK Invest&apos;s new headquarters, a Marriott Autograph hotel, 116,000 SF of Class A office, and 42 workforce apartments are coming to 1301 Central Ave."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Downtown St. Petersburg&apos;s commercial real estate story got a material upgrade in the first week of November 2026. Tampa-based Ellison Development closed a $6.4 million land deal with the City of St. Petersburg for the former police headquarters at 1301 Central Avenue — a site that had been stalled in development limbo since at least mid-year. The result is The Central: a 10-story Class A office building anchored by ARK Invest&apos;s new headquarters, a 165-room Marriott Autograph Collection hotel, 42 workforce apartments, and more than 11,000 square feet of ground-floor retail — all woven around a 531-space public parking garage that is already built and operating.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For commercial real estate investors and tenants tracking downtown St. Pete, this is not a planning announcement. The land has transferred. The post-closing agreement has been recorded. The project has an anchor office tenant with a compelling name. Here is what it means for the market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is The Central and Why Does It Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Central is Ellison Development&apos;s name for the mixed-use project at 1301 Central Avenue — the former site of the St. Petersburg Police Department&apos;s main headquarters before the department relocated. The site sits in the EDGE District, one of the most active mixed-use corridors in the Tampa Bay metro, bordered by a neighborhood that has seen consistent investment across multifamily, retail, hospitality, and creative office over the past five years. For a broader look at Pinellas County CRE, see our <Link href="/blog/clearwater-pinellas-county-commercial-real-estate-2026" className="text-accent underline">Clearwater and Pinellas County commercial real estate guide</Link> and the <Link href="/markets/pinellas" className="text-accent underline">Pinellas County market overview</Link>.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The project components break down as follows. The Halcyon office building — the name given to the Class A tower within The Central — will offer approximately 116,000 square feet of leasable office space across 10 stories, with more than 11,000 square feet of ground-floor retail activation. ARK Invest, the investment management firm founded by Cathie Wood that manages technology-focused thematic ETFs and active equity strategies, has committed to relocating its corporate headquarters to Halcyon — a commitment that provides the anchor tenant credibility essential for office development financing in the current market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Central Hotel — 165 rooms joining Marriott&apos;s Autograph Collection, a branded soft collection that has established a strong presence in secondary urban markets — adds hospitality density to a downtown St. Pete hotel market that has been supply-constrained in the branded segment. The Autograph Collection brand is strategically positioned for creative, independent-spirited hotel properties in walkable urban environments, which makes it a natural fit for the EDGE District&apos;s character.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 42 workforce apartments complete the vertical mix — representing one of the few instances in the current downtown St. Pete development pipeline where below-market residential units are being integrated directly into a commercial development rather than funded separately through a housing finance mechanism. The city&apos;s insistence on workforce housing as a condition of the land sale — backed by a $6 million liquidated damages clause for non-performance — reflects how seriously the city is treating residential affordability as a component of its downtown development strategy.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the broader EDGE District CRE story, see our post on the <Link href="/blog/st-pete-edge-district-cre-2026" className="text-accent underline">Edge Collective Phase 2 and what EDGE District investment means for commercial tenants</Link>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Did the Project Stall and What Changed?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Central had been stalled well into 2026, with the City of St. Petersburg and Ellison Development publicly indicating a deal was near in June without closing it. Reports from October 2026 noted the project was at a standstill, with the parking garage — the first and only completed piece of the full development — sitting finished but detached from any active construction timeline for the remaining components.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The November 2026 closing resolves the ownership uncertainty that was the principal obstacle to moving forward. Without a clear title transfer, Ellison Development could not secure construction financing, finalize design and permitting, or give tenants the lease execution certainty they needed to commit. The ARK Invest headquarters commitment — which almost certainly required Ellison to demonstrate to the investment firm that the project was moving — may well have been the catalyst that forced the land deal to close after months of negotiation.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The post-closing agreement&apos;s January 1, 2030 completion requirement for the office, retail, and workforce housing components creates a firm project timeline. With typical high-rise construction running 24 to 36 months from permit issuance, an early 2027 construction start would put The Central on track for a late 2029 to early 2030 delivery — consistent with the contractual deadline.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does ARK Invest&apos;s Headquarters Mean for St. Pete&apos;s Office Market?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Headquarters relocations are the most valuable signal in an office market. They represent a long-term, high-commitment real estate decision by a company whose leadership has evaluated alternatives — including staying in a current location — and chosen to move. For ARK Invest, a firm with a recognizable national profile in investment management, to choose downtown St. Petersburg as its permanent home base is a signal that carries weight beyond the square footage involved.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          St. Petersburg has been accumulating headquarters and significant-office users over the past several years. The consistent theme is companies relocating from higher-cost markets — New York, Boston, California — to a Florida metro where the talent they need increasingly lives, where state income tax is not a factor, and where quality of life and urban amenity are genuinely competitive with legacy financial and technology hubs. ARK Invest fits that profile precisely: a prominent financial services firm with a national investment operation that is not dependent on being physically proximate to Wall Street to execute its strategy.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the Halcyon building specifically, the ARK Invest commitment de-risks the office component in a market that has watched national office fundamentals remain challenged outside of the Sun Belt&apos;s best submarkets. A building that opens with a recognizable anchor headquarters tenant — rather than speculative vacancy — will attract secondary tenants more quickly and command stronger lease terms. Our <Link href="/blog/st-petersburg-office-market-2026" className="text-accent underline">St. Petersburg office market overview</Link> covers the broader context of absorption, vacancy, and leasing activity in downtown St. Pete.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors tracking corporate headquarters relocations across Tampa Bay, our post on <Link href="/blog/tampa-bay-corporate-hq-relocations-office-cre-2026" className="text-accent underline">Tampa Bay corporate HQ relocations and their impact on office CRE</Link> covers the pattern that ARK Invest&apos;s move fits within.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Marriott Autograph Collection Hotel Mean for Hospitality Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Central Hotel joining the Marriott Autograph Collection adds a branded soft-collection hotel to downtown St. Pete&apos;s hospitality market at a scale — 165 rooms — that works for urban mixed-use development without requiring the larger footprint of a convention hotel or resort. The Autograph Collection is Marriott&apos;s independently owned, Marriott-distributed brand — each property maintains a distinct identity and design approach while benefiting from Marriott Bonvoy loyalty program distribution, global reservations infrastructure, and corporate travel account connectivity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For the hospitality investment community, The Central Hotel will be one to track in the context of downtown St. Pete&apos;s competitive hotel set. The EDGE District location, combined with the office and retail activation at The Central, creates a hotel that benefits from both leisure travelers drawn to St. Pete&apos;s arts, dining, and waterfront amenities and business travelers visiting ARK Invest, the professional services ecosystem around it, and other downtown office tenants. That dual demand base is a favorable RevPAR profile for a branded boutique hotel.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Our post on <Link href="/blog/tampa-bay-hotel-hospitality-cre-2026" className="text-accent underline">Tampa Bay hotel and hospitality CRE investment</Link> covers the cap rate and RevPAR trends that frame how hospitality investors are underwriting new hotel development across the metro.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Should Commercial Tenants Do Next If They Are Watching This Project?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For office tenants considering the EDGE District and downtown St. Pete as a location, The Central&apos;s closing creates clarity on the product that will be available. The Halcyon building&apos;s 116,000 square feet of Class A office space will not all go to ARK Invest — the building will have multiple tenant floors, and tenants who want to be in a branded Class A building in the EDGE District with parking infrastructure already in place should be watching leasing activity closely as the project moves through permitting and construction financing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For retail and food-and-beverage operators, the more than 11,000 square feet of ground-floor retail within The Central is a targeted opportunity for tenants who want activation tied to the hotel, office, and residential components of the project. These spaces will be positioned differently from the independent, street-activation retail along Central Avenue — expect higher build-out standards, longer lease terms, and a tenant mix curated to serve hotel guests and office workers as much as street-level pedestrian traffic.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tenants who are not yet working with a broker who has relationships with Ellison Development and the EDGE District landlord community should start that process now — not when construction begins. The best spaces in projects like The Central are committed well before the building opens. Our post on <Link href="/blog/how-commercial-leases-differ-from-residential" className="text-accent underline">how commercial leases differ from residential ones</Link> is a useful primer for tenants new to the commercial leasing process. If you are considering office or retail space in a mixed-use project, our <Link href="/services/tenant-representation" className="text-accent underline">tenant representation services</Link> can help you evaluate options across St. Pete and the broader Tampa Bay market.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay, I work with office tenants evaluating St. Pete locations, retail operators sourcing ground-floor space in mixed-use developments, and investors tracking the downtown St. Pete pipeline. If The Central is on your radar — whether as a potential tenant, an adjacent property owner, or an investor benchmarking the development against other CRE opportunities in Pinellas County — the right time to have that conversation is now, while the project is in the pre-construction phase and market positioning is still being established. For more on the downtown St. Pete development pipeline, see our coverage of the <Link href="/blog/historic-gas-plant-district-st-pete-cre-2026" className="text-accent underline">Historic Gas Plant District redevelopment</Link> and what it means for the broader St. Pete CRE market.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: November 2026</p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      {/* ---- Author Bio ---- */}
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
              Barrett has 23+ years of commercial real estate experience across Tampa Bay. He helps office tenants evaluate downtown St. Pete locations,
              retail operators source ground-floor space in mixed-use developments, and investors track the pipeline of commercial projects reshaping Pinellas County.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Tracking The Central or Downtown St. Pete Office Space?"
        body="Whether you are an office tenant evaluating the EDGE District, a retail operator interested in The Central&apos;s ground-floor space, or an investor benchmarking downtown St. Pete against other Tampa Bay opportunities — I can help. Call or message Barrett Henry at REMAX Collective."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
