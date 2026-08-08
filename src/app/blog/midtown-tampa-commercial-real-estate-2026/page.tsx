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
 * Blog: Midtown Tampa Commercial Real Estate 2026
 * Office fully leased, new retail wave, and what it means for investors.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Midtown Tampa 2026: Office, Retail & Investment Guide | HenCRE",
  description:
    "Midtown Tampa's office space is now fully leased and three new retailers — Pura Vida Miami, CorePower Yoga, and The Shade Store — are joining the district. Here is what the $1 billion Midtown Tampa development means for CRE investors and tenants in 2026.",
  alternates: { canonical: "https://hencre.com/blog/midtown-tampa-commercial-real-estate-2026" },
  openGraph: {
    title: "Midtown Tampa Commercial Real Estate 2026: Office, Retail & Investment Guide",
    description:
      "Midtown Tampa's office is 100% leased and its retail tenant roster keeps growing. Here is a CRE investor and tenant guide to the $1 billion mixed-use district reshaping North Tampa.",
    url: "https://hencre.com/blog/midtown-tampa-commercial-real-estate-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Modern mixed-use commercial development in Tampa with retail storefronts and office tower",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is Midtown Tampa and who developed it?",
    answer:
      "Midtown Tampa is a $1 billion mixed-use development located along N. Dale Mabry Highway at W. Cypress Street in North Tampa, developed by The Bromley Companies. The 22-acre district includes Midtown East — an 18-story, 432,000-square-foot office tower — plus ground-floor retail, restaurants, fitness studios, a hotel, and surface and structured parking. Bromley partnered with Ram Realty Advisors on the retail component to ensure the tenant mix evolved alongside the office and residential population. As of mid-2026, the district is fully built out and its office portfolio has reached 100% occupancy.",
  },
  {
    question: "Is Midtown Tampa's office space really fully leased?",
    answer:
      "Yes. Midtown East reached full occupancy in under a year of opening, filling out Midtown Tampa's entire office portfolio. Notable tenants include TECO Energy, Booz Allen Hamilton, Kforce, Crete Professionals Alliance, and Mattamy Homes. JLL Capital Markets arranged $55.7 million in financing for the 143,354-square-foot office and retail portion of Midtown East, reflecting strong institutional confidence in the asset. For comparison, Tampa Bay's overall office vacancy rate in Q2 2026 sits around 15%, making Midtown Tampa's full-occupancy achievement an outlier driven by the district's walkable, amenity-rich environment.",
  },
  {
    question: "What new retail tenants are coming to Midtown Tampa?",
    answer:
      "In June and July 2026, Bromley Companies and Ram Realty Advisors announced three new retailers joining Midtown Tampa: Pura Vida Miami (a Miami-based lifestyle and wellness brand), CorePower Yoga (the national boutique yoga chain expanding deeper into Tampa Bay), and The Shade Store (a premium window treatment showroom). These join existing anchors Whole Foods Market, REI Co-op, and Walk-On's Sports Bistreaux. The additions reinforce Midtown Tampa's positioning as a fitness, wellness, and lifestyle-oriented commercial district rather than a conventional suburban retail center.",
  },
  {
    question: "Can outside investors buy property in Midtown Tampa?",
    answer:
      "Midtown Tampa itself — the core 22-acre campus — is largely controlled by The Bromley Companies and its partners, so direct acquisition of Midtown-branded buildings is not a typical path for outside investors. The CRE opportunity is primarily in the surrounding submarkets that benefit from Midtown's growing daytime population and amenity base: North Tampa retail corridors along Dale Mabry and Fletcher Avenue, office buildings within a few miles that can market proximity to Midtown's talent pool, and multifamily assets in the Carrollwood, Town 'N' Country, and Westshore Palms corridors that serve Midtown's workforce. These surrounding assets have seen measurable demand increases as Midtown's occupancy has grown.",
  },
  {
    question: "How does Midtown Tampa affect commercial real estate values nearby?",
    answer:
      "Midtown Tampa's full-occupancy office and growing retail roster has produced a clear halo effect on surrounding North Tampa commercial real estate. Retail strip centers and neighborhood service retail within a 2-mile radius of the district have seen above-average occupancy and moderate rent growth as the district's daytime and evening population has increased. Office buildings along Dale Mabry and in the Westshore submarket can legitimately market proximity to Midtown's amenities as a recruitment tool. For investors, cap rates on well-positioned strip centers and small office buildings near Midtown have compressed roughly 25 to 50 basis points since the district reached stabilization, reflecting investor confidence in the trade area's trajectory.",
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
          name: "Midtown Tampa Commercial Real Estate 2026",
          item: "https://hencre.com/blog/midtown-tampa-commercial-real-estate-2026",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Midtown Tampa Commercial Real Estate 2026: Office, Retail & Investment Guide",
      description:
        "Midtown Tampa's office space is fully leased and three new retailers are joining the district. A CRE investor and tenant guide to the $1 billion mixed-use development reshaping North Tampa.",
      datePublished: "2026-07-29",
      dateModified: "2026-08-08",
      author: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        image: "https://hencre.com/images/barrett-henry-headshot.jpg",
        sameAs: ["https://hencre.com/about", "https://barretthenry.remax.com"],
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
      url: "https://hencre.com/blog/midtown-tampa-commercial-real-estate-2026",
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
    description: "How Midtown Tampa's full-occupancy story fits into the broader Tampa Bay office market.",
  },
  {
    title: "Tampa Retail Storefront Space Guide",
    href: "/blog/tampa-retail-storefront-space-guide",
    description: "Where retail tenants are finding ground-floor space across Tampa's evolving corridors.",
  },
  {
    title: "Tampa Bay Small Bay Industrial & Flex 2026",
    href: "/blog/tampa-bay-small-bay-industrial-flex-2026",
    description: "The industrial flex market serving North Tampa businesses near Midtown.",
  },
  {
    title: "Multifamily Investment in Tampa Bay",
    href: "/blog/multifamily-investment-tampa-bay-guide",
    description: "Investing in multifamily assets in submarkets served by Midtown Tampa's workforce.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "The core criteria for evaluating CRE acquisitions in Tampa Bay's competitive market.",
  },
];

export default function MidtownTampaCommercialRealEstate2026Page() {
  return (
    <>
      <SchemaOrg schema={schema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Midtown Tampa Commercial Real Estate 2026", href: "/blog/midtown-tampa-commercial-real-estate-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop"
        title="Midtown Tampa Commercial Real Estate 2026"
        subtitle="Midtown East is 100% leased. Three new retailers — Pura Vida Miami, CorePower Yoga, and The Shade Store — are joining the district. Here is what Tampa Bay&apos;s hottest mixed-use development means for CRE investors and tenants."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          When The Bromley Companies broke ground on the $1 billion Midtown Tampa district along N. Dale Mabry Highway, the question from skeptics was simple: can a walkable, mixed-use development actually work in a car-dependent North Tampa corridor? By mid-2026, the market has answered that question. Midtown East -- the district&apos;s 18-story, 432,000-square-foot{" "}
          <Link href="/commercial/office-space" className="text-accent underline">office tower</Link>{" "}
          -- is fully leased. Three new{" "}
          <Link href="/commercial/retail-space" className="text-accent underline">retailers</Link>{" "}
          announced in June and July are joining Whole Foods and REI as anchors. And institutional lenders are stepping in with eight-figure financing packages that validate the asset&apos;s long-term value.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#666666]">
          For commercial real estate investors and tenants operating across{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Tampa Bay</Link>,
          Midtown Tampa&apos;s stabilization is more than a local success story -- it reshapes the competitive dynamics of North Tampa&apos;s office, retail, and mixed-use markets. See our{" "}
          <Link href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">Q2 2026 Tampa Bay office market report</Link>{" "}
          for the broader context.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Has Midtown Tampa Actually Built — and What Is Now Leased?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Midtown Tampa spans 22 acres at the intersection of N. Dale Mabry Highway and W. Cypress Street, a location that sits between the Westshore business district and the emerging midtown residential corridor. The Bromley Companies developed the campus in phases, ultimately delivering:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Midtown East office tower.</strong> An 18-story, 432,000-square-foot tower with 143,354 square feet of leasable office and retail space. JLL Capital Markets arranged $55.7 million in financing for this asset — a signal of institutional-grade underwriting confidence. The tower reached 100% office occupancy in under a year, with tenants including TECO Energy, Booz Allen Hamilton, Kforce, Crete Professionals Alliance, and Mattamy Homes.</li>
          <li><strong>Retail and restaurant row.</strong> Ground-floor retail featuring Whole Foods Market, REI Co-op, Walk-On&apos;s Sports Bistreaux, and a growing roster of food, fitness, and lifestyle tenants. The most recent wave adds Pura Vida Miami, CorePower Yoga, and The Shade Store — announced in June and July 2026.</li>
          <li><strong>Hospitality.</strong> A hotel component serving the district&apos;s business traveler population and weekend visitors.</li>
          <li><strong>Structured parking.</strong> Integrated parking designed to serve all uses across the district while maintaining pedestrian-friendly streetscapes.</li>
        </ul>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The result is a district that functions less like a traditional suburban office park or strip center and more like a walkable neighborhood commercial node — an intentional design decision that has proven commercially viable in a market that once seemed unlikely to support it.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Why Did Midtown Tampa&apos;s Office Fill Up So Fast?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          In a Tampa Bay office market where overall Q2 2026 vacancy sits around 15%, Midtown East&apos;s achievement of 100% occupancy in under a year deserves explanation. Three factors converged:
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Flight to quality is real and accelerating.</strong> Tampa Bay&apos;s <a href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">Q2 2026 office market</a> is bifurcated: Class A buildings in walkable, amenity-rich locations are seeing falling vacancy and rising rents, while Class B and C suburban product struggles to retain tenants. Midtown East sits squarely in the winning category — new construction, LEED certification, embedded retail and food and beverage, and a walkable street environment that older suburban parks cannot replicate.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Talent competition drives location decisions.</strong> The employers who filled Midtown East — Booz Allen Hamilton, Kforce, Crete Professionals Alliance — are competing for professional and technical talent in a market where employees have negotiating leverage. The ability to say "our office is in a walkable mixed-use district with a Whole Foods, CorePower Yoga, and restaurant row" is a genuine recruitment differentiator. For finance, technology, energy, and professional services firms, location quality is now a line item in the hiring budget.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>North Tampa&apos;s demographic and business base matches the product.</strong> Dale Mabry between Kennedy and Fletcher is surrounded by some of Tampa Bay&apos;s highest household-income ZIP codes — South Tampa, Carrollwood, Westchase — and a dense concentration of regional employer headquarters. Midtown Tampa landed in the center of gravity of a well-qualified demand pool that was underserved by available Class A office product before the district was built.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Does the New Retail Wave Tell Us About Midtown Tampa&apos;s Commercial Health?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The three retailers announced in June and July 2026 are not filler tenants. CorePower Yoga is a national expansion brand with a proven membership model that requires both a high-income trade area and reliable daytime foot traffic to sustain. Pura Vida Miami is a lifestyle brand making a deliberate push into the Tampa market. The Shade Store brings a home-furnishing showroom concept that targets homeowners with household incomes above $100,000 — a customer profile that perfectly matches the surrounding ZIP codes.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Together, these announcements indicate that Midtown Tampa&apos;s retail leasing pipeline has matured from anchor-dependent fill (Whole Foods, REI) to genuine lifestyle-layer retail — the kind of complementary tenant mix that sustains foot traffic across all hours of the day and all days of the week. That is the commercial real estate equivalent of a district proving it can sustain itself rather than relying on a single draw.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For context: Tampa Bay&apos;s overall retail availability ended Q2 2026 at 3.8% — well below the national average of 6.0%. In a market already starved for quality retail space, Midtown Tampa&apos;s ability to continue attracting national brands suggests the district is drawing from a strong leasing pipeline that extends beyond what is already visible on the street.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Should CRE Investors Think About Midtown Tampa&apos;s Market Impact?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Bromley Companies and Ram Realty Advisors control Midtown Tampa&apos;s core assets — direct acquisition of Midtown-branded buildings is not a realistic path for most investors. But the district&apos;s stabilization has created measurable investment opportunities in the surrounding submarkets:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Retail strip centers within 2 miles of Midtown.</strong> North Tampa&apos;s service retail corridors — the neighborhood strip centers along Dale Mabry, Fletcher, and Waters Avenue — serve the same high-income residential base that Midtown is drawing on. Centers anchored by medical, fitness, food and beverage, and personal services have posted above-average occupancy and rent growth as Midtown&apos;s daytime population has grown. Investors evaluating these assets should underwrite the Midtown halo effect as a demand tailwind rather than a speculative assumption.
          </li>
          <li>
            <strong>Office buildings along the Dale Mabry and Westshore corridors.</strong> Smaller professional office buildings within proximity of Midtown Tampa can now market genuine walkability to a major amenity node — a claim that North Tampa office landlords could not make five years ago. Class B office assets in this submarket that can be repositioned with interior improvements and co-working amenity packages are benefiting from tenants who want Midtown proximity at below-Midtown rents.
          </li>
          <li>
            <strong>Multifamily assets in the Midtown workforce corridor.</strong> The employees filling Midtown East represent a rental housing demand pool concentrated in North Tampa, Carrollwood, and Westchase. Multifamily owners and investors in these submarkets have a Midtown employment anchor they can legitimately market to residents. Our <a href="/blog/multifamily-investment-tampa-bay-guide" className="text-accent underline">Tampa Bay multifamily investment guide</a> covers how to evaluate these assets in the current rate environment.
          </li>
          <li>
            <strong>Investors repositioning other assets to free up capital.</strong> Some North Tampa investors holding underperforming retail or office assets are choosing to exit those positions and redeploy into better-positioned properties benefiting from the Midtown effect. If you are evaluating a capital redeployment strategy, working with a commercial broker on a quickly marketed listing is the right move for investors who want to exit a current position before reinvesting in the North Tampa corridor.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">Is Midtown Tampa a Good Location for Business Tenants to Consider?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For businesses looking to lease space, Midtown Tampa&apos;s 100% office occupancy means direct availability in the district&apos;s premier tower is gone for now. But several adjacent considerations remain relevant:
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Sublease space may emerge.</strong> As tenants within Midtown East right-size their footprints — a common pattern in fully-leased, high-quality office buildings — sublease opportunities can appear at below-direct-lease rates. These often represent the best value for businesses that want Midtown&apos;s address at a negotiated cost basis.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>The corridor surrounding Midtown offers real proximity.</strong> Office buildings along Dale Mabry within walking and short-drive distance of the district offer a legitimate "Midtown adjacent" narrative that smaller businesses can use for recruiting. For companies that cannot justify Midtown East rents — which run at Class A downtown levels — the corridor offers access to the trade area at a more sustainable occupancy cost.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Retail tenants should move early.</strong> Midtown Tampa&apos;s retail leasing is driven by Bromley and Ram Realty relationships. Businesses interested in ground-floor retail space in or near the district — including spaces that may open as the current tenant roster evolves — are best served by engaging a broker who can reach the leasing team before spaces are broadly marketed. In a tight retail market where Tampa Bay vacancy sits at 3.8%, waiting for a CoStar listing means waiting too long.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Midtown Tampa Compare to Other Tampa Bay Mixed-Use Districts?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Tampa Bay has produced several high-profile mixed-use developments in recent years — Water Street Tampa downtown, Wesley Chapel&apos;s KRATE outdoor mall, and various neighborhood mixed-use projects in St. Petersburg. Midtown Tampa occupies a distinct position in that landscape:
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>It serves a business-primary demand base, not a residential-primary one.</strong> Water Street Tampa is anchored by luxury residential and its retail follows that residential population. Midtown Tampa&apos;s anchor is a fully-leased office tower with major employer tenants. That distinction means Midtown&apos;s commercial fundamentals are driven by employer decisions and workforce demographics — a different and in some ways more durable demand driver than discretionary residential spending.</li>
          <li><strong>It is multi-developer rather than single-owner.</strong> Bromley&apos;s partnership with Ram Realty and other capital partners means Midtown Tampa is a more conventional commercial real estate structure than Water Street&apos;s single-owner campus. That creates more potential liquidity and transaction activity over time as individual components trade.</li>
          <li><strong>It proved the North Tampa urban format thesis.</strong> Before Midtown Tampa, conventional CRE wisdom was skeptical that walkable urban retail could work north of Kennedy Boulevard in Tampa. The district&apos;s performance has changed that calculus — and opened the door for similar mixed-use projects along the Dale Mabry and Fletcher corridors that might not have been financeable five years ago.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Midtown Tampa Commercial Real Estate in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Midtown Tampa has crossed the threshold from ambitious development to proven commercial district. Its office tower is 100% leased by recognizable employers. Its retail tenant mix is deepening from anchor-only to full lifestyle retail. Its institutional financing has been arranged at eight-figure scale. And its halo effect on surrounding North Tampa commercial real estate is measurable in occupancy rates and cap rate compression.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For CRE investors, the direct Midtown acquisition opportunity is limited by ownership structure — but the surrounding submarket offers real upside tied to the district&apos;s continued growth. For tenants, the district&apos;s full occupancy requires a broker-led approach to find the right space, whether through sublease, adjacent buildings, or upcoming availability.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience across Tampa Bay — including deep familiarity with North Tampa&apos;s office, retail, and mixed-use submarkets — I help investors identify well-positioned acquisitions in the Midtown corridor and tenants find the right space before the market moves further. If you are making a North Tampa CRE decision in 2026, let&apos;s connect before availability tightens further.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>

        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors comparing Midtown Tampa to other Florida markets, explore the{" "}
          <Link href="/calculators/roi" className="text-accent underline">ROI calculator</Link>{" "}
          and our{" "}
          <Link href="/blog/what-makes-a-good-commercial-investment" className="text-accent underline">commercial investment evaluation guide</Link>.
          Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience and deep familiarity with{" "}
          <Link href="/markets/hillsborough" className="text-accent underline">Hillsborough County</Link>{" "}
          and{" "}
          <Link href="/markets/pinellas" className="text-accent underline">Pinellas County</Link>{" "}
          commercial submarkets. He also advises on{" "}
          <Link href="/services/investment-sales" className="text-accent underline">investment sales</Link>{" "}
          and{" "}
          <Link href="/services/tenant-representation" className="text-accent underline">tenant representation</Link>{" "}
          for businesses exploring North Tampa office and retail space.{" "}
          <Link href="/contact" className="text-accent underline">Contact Barrett</Link>{" "}
          at (813) 733-7907.
        </p>
        <p className="mt-10 text-xs text-[#666666]">Last updated: August 2026</p>
      </article>

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
            <p className="text-sm text-[#666666]">Broker Associate at REMAX Collective | e-PRO, MRP, SRS | REMAX Hall of Fame</p>
            <p className="mt-2 text-sm text-[#666666]">
              Barrett has 23+ years of real estate experience and specializes in commercial real estate across all 67 Florida counties. He serves tenants, landlords, investors, and owners from offices in Tampa, Largo, and Brandon. Learn more at <a href="/about" className="underline">hencre.com/about</a>.
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
        heading="Looking for Office or Retail Space Near Midtown Tampa?"
        body="I help businesses find the right commercial space in North Tampa's fastest-growing corridor and investors identify acquisitions benefiting from Midtown's halo effect. Call or message today to get ahead of the market."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
