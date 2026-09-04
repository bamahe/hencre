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
 * Blog: Water Street Tampa 33-Story Tower — Downtown CRE Implications 2026
 * What Strategic Property Partners' second-phase tower means for investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Water Street Tampa 33-Story Tower: CRE Investor Guide 2026 | HenCRE",
  description:
    "Strategic Property Partners filed plans for a 400-foot, 33-story luxury residential tower at Water Street and Cumberland Avenue — 452 apartments above 37,000 sq ft of retail. Here is what the second phase of Water Street Tampa means for CRE investors and downtown tenants.",
  alternates: { canonical: "https://hencre.com/blog/water-street-tampa-33-story-tower-downtown-cre-2026" },
  openGraph: {
    title: "Water Street Tampa 33-Story Tower: CRE Investor Guide 2026",
    description:
      "A 400-foot luxury tower with 452 residences and 37,000 sq ft of retail is the next chapter at Water Street Tampa. Here is what this second-phase announcement means for downtown Tampa commercial real estate.",
    url: "https://hencre.com/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Downtown Tampa waterfront skyline with high-rise towers reflecting on the bay",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the new Water Street Tampa tower being built?",
    answer:
      "Strategic Property Partners — the development entity backed by Cascade Investment LLC, the private investment vehicle of Microsoft co-founder Bill Gates — filed plans in July 2026 for a 33-story, 400-foot luxury residential tower at the intersection of Water Street and Cumberland Avenue in downtown Tampa. The unnamed tower will include 452 residences ranging from studios to three-bedroom apartments, approximately 37,000 square feet of retail space, and about 645 parking spaces. Construction is planned to begin in spring 2027, with completion targeted for 2029.",
  },
  {
    question: "How does the new tower affect downtown Tampa commercial real estate values?",
    answer:
      "Continued institutional investment in Water Street Tampa signals rising confidence in downtown Tampa as a live-work-play district — a dynamic that has historically lifted commercial property values in surrounding blocks. Retail space near the Water Street district has seen asking rents increase as foot traffic and daytime population have grown since the first phase opened. Office buildings within walking distance of Water Street amenities can justify premium rents that comparable suburban product cannot. For investors, every announced phase of Water Street expands the catchment area of the broader district and tends to put upward pressure on nearby land and building values.",
  },
  {
    question: "Is Water Street Tampa a good area for commercial real estate investment?",
    answer:
      "Yes, with nuance. The Water Street district itself is largely controlled by Strategic Property Partners — a well-capitalized single developer who controls supply and isn't selling individual buildings to outside investors. The opportunity for most investors lies in the halo effect: retail storefronts on adjacent streets, office buildings within a 10-minute walk, and multifamily assets in Channelside and East Tampa that benefit from Water Street's growing amenity base. The district's growth has also compressed cap rates in surrounding downtown Tampa neighborhoods, so investors entering now should model those tighter returns against the tailwind of continued development.",
  },
  {
    question: "What does the Water Street Tampa second phase mean for retail tenants?",
    answer:
      "The new tower's 37,000 square feet of ground-floor retail represents another round of leasable commercial space coming to the Water Street corridor. Strategic Property Partners has consistently targeted experiential and service-oriented retail — restaurants, fitness, wellness, and daily-needs categories — rather than traditional mall-style retail. Tenants seeking ground-floor exposure in a high-foot-traffic downtown environment should be aware that Water Street retail space is in high demand and often leased through relationships before it hits the market broadly. Engaging a local tenant representative early is the most reliable way to get in the conversation.",
  },
  {
    question: "When will the new Water Street Tampa tower be completed?",
    answer:
      "According to plans filed with the City of Tampa in July 2026, Strategic Property Partners and construction manager Moss Construction are targeting a spring 2027 groundbreaking with completion in 2029. The project requires design district approval from city staff — it does not need a full City Council vote — which streamlines the timeline. That said, large-scale construction in Tampa Bay is subject to permitting, labor, and materials variables that can push schedules. Investors and tenants should plan for 2029 stabilization but monitor for updates.",
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
          name: "Water Street Tampa 33-Story Tower: Downtown CRE 2026",
          item: "https://hencre.com/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Water Street Tampa's New 33-Story Tower: What It Means for Downtown CRE Investors",
      description:
        "Strategic Property Partners filed plans for a 400-foot, 33-story luxury residential tower at Water Street and Cumberland Avenue — 452 apartments above 37,000 sq ft of retail. What the second phase of Water Street Tampa means for CRE investors.",
      datePublished: "2026-07-25",
      dateModified: "2026-09-04",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/water-street-tampa-33-story-tower-downtown-cre-2026",
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
    title: "Tampa Bay Office Market Q2 2026",
    href: "/blog/tampa-bay-office-market-q2-2026",
    description: "How downtown Tampa office demand -- fueled partly by the Water Street ecosystem -- compares to the broader market.",
  },
  {
    title: "Why Tampa Bay CRE Is Booming",
    href: "/blog/why-tampa-bay-cre-is-booming",
    description: "The macro drivers behind Tampa Bay's sustained commercial real estate expansion.",
  },
  {
    title: "Multifamily Investment in Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "A guide to evaluating multifamily assets in the market benefiting from Water Street's growth.",
  },
  {
    title: "Tampa Retail Storefront Space Guide",
    href: "/blog/tampa-retail-storefront-space-guide",
    description: "Where retail tenants are finding ground-floor space in Tampa's evolving commercial corridors.",
  },
  {
    title: "How to Calculate Commercial Property ROI",
    href: "/blog/how-to-calculate-commercial-property-roi",
    description: "Framework for underwriting acquisitions in downtown Tampa's compressed-cap-rate environment.",
  },
  {
    title: "Ybor City Commercial Real Estate Tampa 2026",
    href: "/blog/ybor-city-commercial-real-estate-tampa-2026",
    description: "The adjacent Ybor City redevelopment -- the natural extension of the Water Street investment thesis.",
  },
  {
    title: "Hillsborough County Commercial Real Estate",
    href: "/markets/hillsborough",
    description: "Barrett's full coverage of commercial real estate across Hillsborough County.",
  },
  {
    title: "Tenant Representation Services",
    href: "/services/tenant-representation",
    description: "Find and negotiate commercial space near Water Street at no cost to the tenant.",
  },
  {
    title: "Commercial Property Due Diligence Timeline",
    href: "/blog/commercial-property-due-diligence-timeline",
    description: "The complete due diligence checklist before closing on any downtown Tampa acquisition.",
  },
  {
    title: "What Makes a Good Commercial Investment",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "The evaluation framework for buying in downtown Tampa's compressed-cap-rate environment.",
  },
];

export default function WaterStreetTampa33StoryTowerPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Water Street Tampa 33-Story Tower: Downtown CRE 2026", href: "/blog/water-street-tampa-33-story-tower-downtown-cre-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
        title="Water Street Tampa's New 33-Story Tower"
        subtitle="Strategic Property Partners filed plans this week for a 400-foot luxury residential tower — the second phase of Tampa's most ambitious downtown development. Here is what it means for CRE investors and tenants in 2026."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When Strategic Property Partners — the development arm of Cascade Investment LLC, backed by Microsoft co-founder Bill Gates — files new construction plans in downtown Tampa, the commercial real estate market pays attention. This week&apos;s announcement of a 33-story, 400-foot luxury residential tower at Water Street and Cumberland Avenue is not just another high-rise. It is the clearest signal yet that the $3.5 billion Water Street Tampa district is entering its second phase — and that institutional capital remains fully committed to remaking downtown Tampa&apos;s commercial fabric.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          For investors and tenants across the region, this announcement carries implications well beyond the 1.9-acre tower site itself.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Exactly Is Being Built at Water Street Tampa?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          According to plans filed with the City of Tampa in July 2026, the proposed tower will rise 33 stories and approximately 400 feet at the intersection of Water Street and Cumberland Avenue — the southern edge of the Water Street Tampa campus. The building will contain 452 residences across studio, one-, two-, and three-bedroom configurations, positioned above approximately 37,000 square feet of ground-floor retail space. The project includes roughly 645 parking spaces to serve both residents and retail visitors.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The tower&apos;s design features expansive glass, rounded edges, and flowing architectural lines intended to maximize water and downtown Tampa skyline views. Amenities are extensive: a demonstration kitchen and entertaining lounge, coworking spaces, media room, game room, fitness center, resort-style pool and hot tub, sauna, cold plunge, pet spa, and dog run. The residential programming mirrors the hospitality-grade amenity packages that have become standard in Water Street&apos;s existing buildings.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Construction manager Moss Construction is targeting a spring 2027 groundbreaking with completion in 2029. The project requires design district approval from city staff — not a full City Council vote — which streamlines the permitting process considerably relative to most large-scale downtown development.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Does This Announcement Matter to Tampa Bay CRE Investors?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The strategic importance of this announcement is less about the specific tower and more about what it signals: that one of the most sophisticated and well-capitalized developers in the country believes downtown Tampa&apos;s demand fundamentals justify continued large-scale investment in 2026 — not 2022, not hypothetically, but right now.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Water Street Tampa&apos;s first phase delivered hotels, office buildings, luxury residences, restaurant row, retail, and Amalie Arena improvements across a 74-acre campus. The second phase extending toward Cumberland Avenue expands the geographic footprint of the district — and with it, the &quot;halo effect&quot; on surrounding commercial properties.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Adjacent retail sees higher foot traffic.</strong> As Water Street&apos;s residential population grows — adding 452 more units in this phase alone — the daily population within walking distance of downtown Tampa&apos;s commercial corridors increases. Retail tenants on Franklin Street, Channelside Drive, and the Ybor City fringe benefit directly from that density increase.</li>
          <li><strong>Office buildings within walking distance command rental premiums.</strong> The Water Street live-work-play narrative is a legitimate recruiting tool that employers use to attract talent. Our analysis of <a href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">Tampa Bay&apos;s Q2 2026 office market</a> showed Class A vacancy falling to four-year lows, with downtown Tampa Class A rents ranging $34 to $50 per square foot — partly a reflection of Water Street&apos;s gravitational pull on tenant demand.</li>
          <li><strong>Land values in the surrounding district are still rising.</strong> Each announced Water Street phase extends the boundaries of where &quot;Water Street adjacency&quot; is a meaningful comp driver. Investors who bought in Channelside, East Tampa&apos;s Channel District fringe, and the Franklin Street corridor have seen that argument become more credible with each new announcement.</li>
          <li><strong>Institutional confidence reduces perceived risk.</strong> When Cascade Investment LLC — a patient, long-horizon capital source — continues to commit construction capital to Tampa, it sends a signal to institutional and high-net-worth investors evaluating the market. That signal matters for cap rate compression and financing availability on adjacent deals.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For a broader view of what drives Tampa Bay&apos;s continued commercial real estate appeal, see our overview of <a href="/blog/why-tampa-bay-cre-is-booming" className="text-accent underline">the macro factors behind Tampa Bay CRE&apos;s sustained expansion</a>.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the Tower Mean for Retail Tenants Seeking Downtown Space?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The 37,000 square feet of ground-floor retail embedded in the new tower represents a meaningful addition to downtown Tampa&apos;s leasable commercial inventory — but tenants should not assume they will find it on CoStar. Strategic Property Partners has historically pre-leased Water Street retail through direct relationships, targeting specific tenant categories that serve the district&apos;s existing and incoming residential population.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The priority categories for Water Street ground-floor retail have consistently been:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Food and beverage.</strong> Restaurants, cafes, and specialty food concepts that serve the 9-to-5 office crowd and the evening residential population. Water Street has deliberately avoided fast food and commodity food service.</li>
          <li><strong>Fitness and wellness.</strong> Boutique fitness studios, yoga, cycling, and wellness concepts with membership models that anchor recurring foot traffic.</li>
          <li><strong>Daily needs and services.</strong> The district needs more of the convenience-layer retail — dry cleaners, pharmacy, specialty grocery — that turns a destination district into a true neighborhood. This second phase may be where that layer gets filled in.</li>
          <li><strong>Experience-oriented retail.</strong> Concepts that can&apos;t be replicated by e-commerce — tasting rooms, specialty hobby, art, or lifestyle retail — remain high on Water Street&apos;s leasing wish list.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Retail tenants interested in Water Street adjacency but not direct Water Street occupancy should look at <a href="/blog/tampa-retail-storefront-space-guide" className="text-accent underline">the broader Tampa retail storefront market</a>, where Franklin Street and Channelside are attracting spillover demand from tenants who want proximity to the district at lower rents.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Water Street Tampa Compare to Other Downtown Mixed-Use Developments in Florida?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Water Street Tampa is singular among Florida downtown redevelopments in its scale, capital commitment, and single-developer control. Most major mixed-use districts — Wynwood in Miami, Midtown Orlando, even the St. Pete waterfront — are aggregations of multiple developers, owners, and capital sources working with varying time horizons and quality standards.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Water Street&apos;s single-ownership structure means:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Consistent design standards.</strong> Every building in the district — hotel, office, residential, retail — must pass Strategic Property Partners&apos; design review, which creates an unusually coherent urban environment.</li>
          <li><strong>Curated tenant mix.</strong> The developer can hold retail space rather than lease it immediately if the wrong tenant comes along. This long-view approach is rare among developers and has produced a more differentiated ground-floor experience than markets where landlords lease to whoever shows up first.</li>
          <li><strong>Predictable phase sequencing.</strong> Rather than the stop-and-start typical of multi-developer districts, Water Street&apos;s phases have followed a sequential logic — each one extending the district&apos;s boundaries and adding residential population to sustain retail viability. The Cumberland Avenue tower follows that same playbook.</li>
          <li><strong>Less investment opportunity inside the district.</strong> The flip side of single ownership is that traditional CRE investors cannot buy into Water Street itself. The opportunity is real, but it is expressed through the surrounding district — not through direct ownership of Water Street buildings.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is the Right CRE Investment Strategy Around Water Street Tampa?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With institutional cap rates on premium downtown Tampa product compressing toward 5.5 to 6.5%, private investors need to be strategic about where they get exposure to the Water Street story. Three approaches have produced results for my clients:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Value-add multifamily in the halo zone.</strong> Channelside, East Tampa along Adamo Drive, and the South Seminole Heights fringe have all seen demand from residents who want Water Street proximity at more affordable rents than the district itself commands. Older multifamily assets in these areas can be repositioned with unit upgrades and exterior improvements to capture that demand curve. Our <a href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">Tampa Bay multifamily investment guide</a> covers the underwriting fundamentals in detail.</li>
          <li><strong>Retail strip buildings on connectivity corridors.</strong> The pedestrian corridors that connect Water Street to Ybor, the Convention Center, and the Channel District are experiencing increased foot traffic as the district grows. Investors who buy small multi-tenant retail buildings on these blocks are effectively buying into the infrastructure of the expanding district without paying Water Street premium prices.</li>
          <li><strong>Office buildings in the walkable downtown core.</strong> As more residents populate the Water Street campus, the argument for workers commuting into downtown Tampa rather than to suburban office parks strengthens. Class B and Class B-plus office buildings within a 10-minute walk of Water Street that can be repositioned with amenity upgrades represent a distinct value thesis from pure suburban office.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Before committing to any acquisition in this environment, understanding <a href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">how to model commercial property ROI</a> and running thorough <a href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">due diligence</a> on the specific asset — not the district narrative — is essential. Markets riding a momentum narrative can mask individual asset problems. Discipline on individual underwriting is how investors do well even when the macro story is genuinely positive.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Water Street Tampa&apos;s Second Phase</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The new 33-story tower at Water Street and Cumberland Avenue is another chapter in the most significant downtown commercial real estate transformation Tampa has ever seen. A spring 2027 groundbreaking and 2029 completion means the district will add 452 high-income residential units and 37,000 square feet of curated retail at a moment when downtown Tampa&apos;s office vacancy is already at four-year lows and surrounding neighborhoods are seeing sustained demand.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, the announcement reinforces that institutional capital sees Tampa&apos;s downtown trajectory as durable — not a pandemic-era anomaly. For tenants, it means downtown Tampa&apos;s commercial infrastructure will continue to improve, making it a more viable location for businesses that want to recruit from a talent pool that prioritizes walkable, amenity-rich work environments.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay — including deep familiarity with downtown Tampa&apos;s evolving submarkets — I work with investors identifying acquisition opportunities in the Water Street halo zone and tenants finding office and retail space in the broader downtown core. If you are making a downtown Tampa CRE decision in the next 12 months, let&apos;s connect before the second phase changes the market further.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-10 text-xs text-[#666666]">Last updated: September 2026</p>
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
              Barrett is a Broker Associate at REMAX Collective with 23+ years of real estate experience. He works with investors identifying acquisition opportunities in downtown Tampa&apos;s expanding commercial district. Learn more about{" "}
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
        heading="Exploring CRE Opportunities Near Water Street Tampa?"
        body="I help investors find well-positioned acquisitions in downtown Tampa's expanding commercial district and tenants secure the right space before the second phase tightens the market further. Call or message today."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
