import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Tampa Heights Commercial Real Estate 2026
 * The Stetson/Bromley development, Heights Union, and the Riverwalk
 * corridor as a CRE investment and leasing opportunity.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tampa Heights Commercial Real Estate 2026: Stetson Development, Office & Investment | HenCRE",
  description:
    "Tampa Heights is emerging as one of Tampa Bay's most active CRE corridors. The Stetson–Bromley mixed-use project adds 440,000 sq ft of office and 37,500 sq ft of retail to a district already home to Heights Union and Armature Works. Here is what it means for tenants and investors.",
  alternates: { canonical: "https://hencre.com/blog/tampa-heights-commercial-real-estate-2026" },
  openGraph: {
    title: "Tampa Heights Commercial Real Estate 2026: Stetson Development, Office & Investment",
    description:
      "A 6.5-acre mixed-use redevelopment by Stetson University and Bromley Companies is adding 440,000 sq ft of office and 300 hotel keys to Tampa Heights — here is what it means for tenants and CRE investors.",
    url: "https://hencre.com/blog/tampa-heights-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tampa Heights Riverwalk commercial district with mixed-use buildings and waterfront",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the Stetson University–Bromley Companies Tampa Heights development?",
    answer:
      "In July 2026, Stetson University partnered with New York-based Bromley Companies — the developer behind Midtown Tampa — to redevelop Stetson's 6.5-acre Tampa Heights campus into a major mixed-use project. Plans call for 670 apartments, 300 hotel keys, 440,000 square feet of office space, 37,500 square feet of retail and dining, and a new Stetson Law Center on-site. The university filed a rezoning application with Tampa City Council in July 2026. Development will be phased so Stetson's law school operations continue without interruption during construction.",
  },
  {
    question: "What office options exist in Tampa Heights today?",
    answer:
      "Heights Union is the anchor Class A office product in Tampa Heights — two 150,000-square-foot, six-story buildings completed in 2020 at the corner of N. Florida Avenue and E. Columbus Drive. Both buildings are 4- and 5-star rated, featuring floor-to-ceiling windows, structured parking, and walkable access to Armature Works' food hall, event space, and the Tampa Riverwalk. Armature Works itself offers 73,000 square feet of mixed-use space including boutique office suites and co-working alongside its hospitality components. Asking rents in Heights Union generally run $32 to $44 per square foot full-service gross, below comparable Westshore product despite a competitive amenity package.",
  },
  {
    question: "How does Tampa Heights compare to Westshore and downtown Tampa for office tenants?",
    answer:
      "Tampa Heights sits north of downtown along the Hillsborough River — roughly a 5-minute drive or 20-minute walk from Water Street and the Channel District. Compared to Westshore, Tampa Heights offers lower rents, a stronger walkable identity, and a younger creative-class character driven by Armature Works, Ulele, and the Riverwalk. Compared to downtown Tampa, it offers more parking, lower density, and slightly easier vehicle access. The district appeals particularly to professional services, technology, legal, and creative firms that want urban energy without downtown density and parking costs. The planned Stetson-Bromley office tower will significantly expand the Class A inventory available and likely bring institutional tenants to the corridor for the first time.",
  },
  {
    question: "Is Tampa Heights a good area for CRE investment in 2026?",
    answer:
      "Tampa Heights has the fundamentals that support CRE investment: a defined walkable district identity, proximity to downtown, Riverwalk connectivity, strong resident demographics post-The Pearl apartments, and now a major institutional development anchor in the Stetson-Bromley project. Retail and restaurant spaces along N. Florida Avenue and around Armature Works have seen rising asking rents as the residential base grows. Mixed-use land positioned for rezoning to match the Stetson-Bromley density is attracting developer interest. The caveat is that the district is mid-transformation — investors buying ahead of the rezoning decision carry entitlement risk, but those waiting for a shovel in the ground will pay premium pricing.",
  },
  {
    question: "Who should I contact about office leasing or investment in Tampa Heights?",
    answer:
      "Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay's commercial market, including Tampa Heights and the broader urban core. Whether you are a tenant looking for office space in Heights Union or along the Riverwalk corridor, or an investor evaluating mixed-use retail or land acquisition ahead of the Stetson-Bromley development, Barrett can provide current market intelligence and representation. Call (813) 733-7907 or visit hencre.com/contact.",
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
          name: "Tampa Heights Commercial Real Estate 2026",
          item: "https://hencre.com/blog/tampa-heights-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Tampa Heights Commercial Real Estate 2026: Stetson Development, Office & Investment",
      description:
        "Tampa Heights is emerging as one of Tampa Bay's most active CRE corridors. The Stetson–Bromley mixed-use project adds 440,000 sq ft of office and 37,500 sq ft of retail to a district already home to Heights Union and Armature Works.",
      datePublished: "2026-08-16",
      dateModified: "2026-08-16",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/tampa-heights-commercial-real-estate-2026",
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
    title: "Gasworx Tampa: Ybor Office & Commercial Guide 2026",
    href: "/blog/gasworx-tampa-ybor-office-commercial-2026",
    description: "How Gasworx is connecting Ybor City to downtown — the urban CRE project closest to Tampa Heights.",
  },
  {
    title: "Tampa Mall Redevelopment: Mixed-Use CRE Guide 2026",
    href: "/blog/tampa-mall-redevelopment-mixed-use-2026",
    description: "WestShore Plaza and Britton Plaza — how Tampa's aging retail malls are being repositioned.",
  },
  {
    title: "South Tampa Commercial Real Estate 2026",
    href: "/blog/south-tampa-commercial-real-estate-2026",
    description: "SoHo, Hyde Park, and the Davis Islands corridor — South Tampa's commercial market overview.",
  },
  {
    title: "Tampa Bay Office Market Q2 2026",
    href: "/blog/tampa-bay-office-market-q2-2026",
    description: "Vacancy, absorption, and Class A rental rates across the broader Tampa Bay office market.",
  },
  {
    title: "Tampa Bay Flex Office & Coworking 2026",
    href: "/blog/tampa-bay-flex-office-coworking-2026",
    description: "How flexible workspace options in Tampa Heights and across the Bay fit into hybrid work strategies.",
  },
  {
    title: "Midtown Tampa Commercial Real Estate 2026",
    href: "/blog/midtown-tampa-commercial-real-estate-2026",
    description:
      "Bromley Companies' other major Tampa project — how Midtown Tampa compares to the Heights development.",
  },
  {
    title: "How Commercial Leases Differ from Residential",
    href: "/blog/how-commercial-leases-differ-from-residential",
    description: "The lease structures, negotiation points, and tenant rights that govern Tampa Heights office deals.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "A framework for evaluating mixed-use and office acquisitions in emerging urban corridors.",
  },
  {
    title: "Hillsborough County Market",
    href: "/markets/hillsborough",
    description: "Commercial real estate data and trends for Hillsborough County, including Tampa Heights.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "How Barrett helps businesses find and negotiate office space in Tampa Heights and across Tampa Bay.",
  },
];

export default function TampaHeightsCREPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Tampa Heights Commercial Real Estate 2026", href: "/blog/tampa-heights-commercial-real-estate-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=900&fit=crop"
        title="Tampa Heights Commercial Real Estate 2026"
        subtitle="A 440,000-square-foot office tower, 300 hotel keys, and 670 apartments are coming to a six-block corridor that already has the best food hall in Tampa. Here is what the Stetson–Bromley deal means for tenants and investors in one of Tampa Bay's most active urban corridors."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Tampa Heights has spent the better part of a decade quietly becoming one of Tampa&apos;s most desirable urban addresses — and most commercial real estate investors and tenants have not fully caught on yet. That is changing fast. In July 2026, Stetson University and New York developer Bromley Companies announced plans to redevelop Stetson&apos;s 6.5-acre Tampa Heights campus into a dense mixed-use project with 440,000 square feet of office space, 300 hotel keys, 670 apartments, and 37,500 square feet of retail. Bromley is the same firm behind Midtown Tampa, the most successful new urban district built in the city in a generation. For anyone watching Tampa Bay commercial real estate, this is a signal worth understanding.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Tampa Heights Commercial District and Why Does It Matter?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Heights — sometimes called the River Arts District — is Tampa&apos;s first suburb, a neighborhood that runs north of downtown along the Hillsborough River. For most of the past 30 years it was an afterthought for commercial real estate. That began to change in 2018 when Armature Works opened: a 73,000-square-foot adaptive reuse of a historic streetcar maintenance facility that houses a food hall, event space, and offices overlooking the river. Armature Works is now one of the most visited destinations in Tampa, and the foot traffic it generates has reshaped the economic calculus of the surrounding blocks.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The residential follow-through came quickly. The Pearl brought 314 luxury apartments with 28,500 square feet of street-level commercial to the district in 2019. Heights Union delivered two 150,000-square-foot Class A office buildings in 2020. Ulele, a waterfront restaurant in a converted pump station on the river, established the district&apos;s culinary identity alongside Armature Works. The Tampa Riverwalk now connects the district directly to downtown, Channelside, and the Water Street development — all on foot or by bike.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          What Tampa Heights offers that most urban districts in Tampa cannot is a defined character. It is not Westshore&apos;s corporate campus environment, not downtown Tampa&apos;s financial district density, and not the industrial-to-creative character of <Link href="/blog/gasworx-tampa-ybor-office-commercial-2026" className="text-accent underline">Gasworx and Ybor</Link>. Tampa Heights is walkable, river-adjacent, rooted in adaptive reuse, and attracting the kind of professional and creative tenants who want a genuine neighborhood — not a campus.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Stetson–Bromley Development Mean for Tampa Heights CRE?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Stetson–Bromley partnership, announced in July 2026, is the biggest single commercial real estate event in Tampa Heights&apos; history. Bromley Companies is redeveloping Stetson University&apos;s 6.5-acre Tampa Heights campus into a phased mixed-use project of this scale:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>440,000 square feet of office space</strong> — enough to make Tampa Heights a legitimate Class A office submarket in its own right, not just an amenity-adjacent alternative to Westshore.</li>
          <li><strong>300 hotel keys</strong> — institutional-grade hospitality that signals developer and tenant confidence in the corridor&apos;s long-term positioning.</li>
          <li><strong>670 apartments</strong> — adding significant residential density that supports retail and restaurant tenants who need daytime and evening foot traffic.</li>
          <li><strong>37,500 square feet of retail and dining</strong> — ground-floor activation that connects the development to the street and to the broader Armature Works ecosystem two blocks away.</li>
          <li><strong>A new Stetson Law Center</strong> — keeping the university&apos;s legal education mission on-site and adding a built-in daily population of students, faculty, and legal professionals.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The university filed a rezoning application with Tampa City Council in July 2026. Development will be phased to avoid disrupting Stetson&apos;s current operations. Bromley has demonstrated with Midtown Tampa that it can deliver mixed-use density on an accelerated timeline when entitlements are aligned — Midtown went from groundbreaking to fully operational in under four years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context on how <Link href="/blog/midtown-tampa-commercial-real-estate-2026" className="text-accent underline">Midtown Tampa has shaped commercial real estate values</Link> in its surrounding area, the pattern is instructive: retail asking rents along N. Dale Mabry Highway in Midtown&apos;s trade area rose approximately 18% between 2021 and 2025. Office tenants co-located in Midtown enjoy best-in-class amenities at rents below comparable Westshore product. The Tampa Heights development is positioned to generate a similar effect on the blocks around Armature Works and the N. Florida Avenue corridor.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Office Space Is Available in Tampa Heights Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The district&apos;s primary Class A office inventory today is Heights Union — two six-story buildings totaling approximately 300,000 square feet at the corner of N. Florida Avenue and E. Columbus Drive. Developed by the same partnership behind the Heights District overall, both buildings are 4- and 5-star rated, featuring floor-to-ceiling glass, structured parking with electric vehicle charging, and direct Riverwalk access. Asking rents in Heights Union generally run $32 to $44 per square foot on a full-service gross basis — a meaningful discount to comparable Class A product in Westshore ($38 to $52 per square foot) while offering a comparable or superior amenity package for firms that value walkability and hospitality access over corporate campus identity.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Armature Works offers a secondary layer of office and co-working product inside the adaptive reuse building — boutique suites and shared workspace that serve smaller tenants and satellite offices for larger firms. Asking rents are flexible, with month-to-month terms available for smaller users and longer-term direct leases for suite tenants.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Beyond Heights Union, several mixed-use buildings along N. Florida Avenue and W. Columbus Drive offer Class B retail and office space at rents ranging from $22 to $30 per square foot, appealing to service businesses, law firms, and healthcare providers serving the growing residential population. Understanding <Link href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">how CAM charges work in mixed-use buildings</Link> is particularly relevant here, as ground-floor retail tenants often share common area costs with upper-floor office occupants in ways that differ from pure-office or pure-retail structures. Our broader guide to <Link href="/blog/how-commercial-leases-differ-from-residential" className="text-accent underline">how commercial leases differ from residential agreements</Link> is a useful starting point before negotiating any space in the district.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the CRE Investment Opportunities in Tampa Heights?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Heights presents several distinct investment angles, with different risk-return profiles depending on your timeline and capital structure.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Stabilized retail and mixed-use along the Armature Works corridor.</strong> Ground-floor retail and restaurant space within a two-block radius of Armature Works and the Riverwalk is among the most sought-after small-format commercial inventory in Tampa&apos;s urban core. Cap rates on stabilized, well-tenanted retail have compressed into the 5.5 to 6.5% range. The investor thesis is straightforward: a growing residential base (The Pearl, the planned Stetson-Bromley apartments), daytime office workers from Heights Union, and tourism traffic drawn by Armature Works create a durable three-part demand stack for food-and-beverage and service retail.
          </li>
          <li>
            <strong>Land and entitlement plays near the Stetson-Bromley footprint.</strong> The rezoning application filed in July 2026 will set a new density precedent for the surrounding blocks. Investors who acquired parcels within a quarter-mile of the Stetson site before the announcement — or who move quickly now during the rezoning period — are positioned to benefit from the uplift in allowable density. This carries entitlement risk: the City Council must approve the rezoning, and development timelines can extend. But given Bromley&apos;s track record with Midtown Tampa and the political alignment behind Tampa Heights development, the risk profile is meaningfully lower than a speculative land play in a less-established corridor.
          </li>
          <li>
            <strong>Value-add mixed-use buildings north of the core.</strong> The blocks running north of Columbus Drive toward MLK Boulevard are seeing incremental commercial activity as the district&apos;s identity extends. Older commercial buildings with functional bones but outdated finishes and inefficient HVAC systems are available at discounts to the core corridor pricing. Investors with the appetite for <Link href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">thorough commercial due diligence</Link> and a capital stack that can absorb 12 to 18 months of repositioning are finding genuine value-add opportunity here. Understanding how to <Link href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">calculate commercial property ROI</Link> before committing to a value-add business plan in this market is non-negotiable.
          </li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors comparing Tampa Heights to other active Tampa Bay urban markets, our guides to <Link href="/blog/gasworx-tampa-ybor-office-commercial-2026" className="text-accent underline">the Gasworx/Ybor corridor</Link> and <Link href="/blog/water-street-tampa-33-story-tower-downtown-cre-2026" className="text-accent underline">downtown Water Street</Link> provide useful benchmarks. Tampa Heights generally offers a lower entry price point than Water Street and a more established neighborhood identity than Gasworx — occupying a middle position in the risk-return spectrum of Tampa&apos;s urban CRE submarkets.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          If you are also exploring residential opportunities in the area or want context on Tampa Bay neighborhoods more broadly, the team at <a href="https://nowtb.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">NowTB.com</a> maintains neighborhood guides and market updates for the greater Tampa Bay area, including coverage of urban neighborhoods like Tampa Heights and South Tampa.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Tampa Heights Compare to Other Urban Tampa Bay CRE Markets?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Heights is one of four urban CRE corridors seeing significant capital activity in Tampa in 2026, alongside Water Street/Channel District, Ybor/Gasworx, and Midtown Tampa. Each has a distinct profile:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Water Street / Channel District.</strong> The highest-density, highest-rent urban district in Tampa, anchored by Strategic Property Partners&apos; multi-billion-dollar development. Office rents push $50+ per square foot for trophy product. Institutional capital is the dominant buyer. This is Tampa&apos;s closest equivalent to a Manhattan-style development.</li>
          <li><strong>Ybor / Gasworx.</strong> A creative-industrial character driven by Tampa&apos;s historic cigar-manufacturing district. Office rents are lower ($28 to $40 per square foot for Class A), the tenant mix skews toward creative services and tech, and the retail-restaurant scene is dense and walkable. Gasworx is adding office and mixed-use inventory through 2027. Risk is higher for investors but so is the potential upside in underpriced assets.</li>
          <li><strong>Midtown Tampa.</strong> The N. Dale Mabry mixed-use district developed by Bromley — a suburban-urban hybrid with exceptional retail, dining, and office amenities, suburban parking ratios, and rents that sit between Westshore and downtown. Fully operational as of 2025 and pricing has stabilized accordingly.</li>
          <li><strong>Tampa Heights.</strong> River-adjacent, character-driven, with the best outdoor and event amenity stack (Armature Works, Ulele, Riverwalk) of any non-downtown Tampa corridor. Office rents are competitive with Midtown but below Water Street. The Stetson-Bromley development will significantly increase inventory and draw institutional tenants who have been overlooking the district. For investors, the next 18 to 36 months represent the last window to enter at pre-development pricing before the rezoning approval re-marks land values.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Tampa Heights Commercial Real Estate</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Heights has earned its status as one of Tampa&apos;s most compelling urban CRE corridors — and the Stetson-Bromley development announcement in July 2026 is the catalyst that will bring it to the attention of tenants and investors who have been focused on Westshore, downtown, or Midtown. The fundamentals are real: a growing residential base, an unmatched amenity stack at Armature Works and the Riverwalk, Class A office inventory at below-Westshore pricing, and now a credentialed developer bringing 440,000 square feet of new office and 300 hotel keys to a corridor that has been absorbing organic growth since 2018.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants, the window to lease in Heights Union at current rates will close as the Stetson-Bromley rezoning advances and institutional demand for the corridor intensifies. For investors, the entitlement period is historically the best time to acquire land and stabilized assets in a corridor on the verge of a major density upgrade — and that period is measured in months, not years.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          I am a Broker Associate at REMAX Collective with 23+ years of real estate experience across Tampa Bay. I help tenants find office and retail space in Tampa Heights and across the region, and I work with investors evaluating urban CRE acquisitions across Hillsborough, Pinellas, and Pasco Counties. If you are making a commercial real estate decision in Tampa Heights in the next 12 months, let&apos;s talk before the market moves ahead of you.
        </p>

        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
            Tampa Heights Commercial Real Estate — Frequently Asked Questions
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
            <p className="text-sm text-[#666666]">
              Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He helps tenants find office and retail space and investors evaluate acquisitions across Tampa Bay&apos;s commercial market. Learn more about{" "}
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
        heading="Exploring Office Space or CRE Investment in Tampa Heights?"
        body="The Stetson–Bromley rezoning is moving — and pricing in Tampa Heights will follow. Whether you are a tenant evaluating Heights Union or an investor looking at the corridor before the announcement re-marks values, let&apos;s talk now."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
