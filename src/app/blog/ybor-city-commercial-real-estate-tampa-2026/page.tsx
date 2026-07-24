import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Blog: Ybor City Commercial Real Estate Tampa 2026
 * The largest urban redevelopment in Tampa history — what it means
 * for tenants, investors, and CRE in the broader market.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Ybor City Commercial Real Estate 2026: Tampa's $6 Billion Transformation | HenCRE",
  description:
    "Ybor City is undergoing its biggest transformation since the cigar era — 6 million square feet of mixed-use development, a new hospital, thousands of residential units, and a redesigned streetcar line. Here is what it means for commercial tenants and investors.",
  alternates: { canonical: "https://hencre.com/blog/ybor-city-commercial-real-estate-tampa-2026" },
  openGraph: {
    title: "Ybor City Commercial Real Estate 2026: Tampa's $6 Billion Transformation",
    description:
      "Gasworx, Ybor Harbor, Tampa General Hospital, and the Kettler-Shaw 50-acre mixed-use campus are reshaping Ybor City into one of the most active CRE markets in Tampa Bay.",
    url: "https://hencre.com/blog/ybor-city-commercial-real-estate-tampa-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ybor City Tampa historic district streetscape with development cranes in the background",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Ybor City Commercial Real Estate 2026: Tampa's $6 Billion Transformation",
  description:
    "Ybor City is undergoing its biggest transformation since the cigar era — Gasworx, Ybor Harbor, Tampa General Hospital, and a new mixed-use streetcar district are reshaping one of Tampa's most storied neighborhoods into a major CRE opportunity.",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  author: {
    "@type": "Person",
    name: "Barrett Henry",
    jobTitle: "Commercial Real Estate Advisor",
    worksFor: { "@type": "Organization", name: "REMAX Collective" },
  },
  publisher: { "@type": "Organization", name: "HenCRE", url: "https://hencre.com" },
  url: "https://hencre.com/blog/ybor-city-commercial-real-estate-tampa-2026",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Gasworx development in Ybor City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gasworx is a 50-acre mixed-use redevelopment in Ybor City led by developer Darryl Shaw in partnership with Kettler and PPF Real Estate. The project will ultimately deliver approximately 6 million square feet of development, including thousands of residential units, new office and retail space, a public park system, and a new TECO Line Streetcar stop. The first residential building — The Stevedore, a seven-story structure with 390 units and 9,700 square feet of ground-floor retail — opened to residents in April 2026. Gasworx is the largest private development in Ybor City's modern history.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ybor Harbor and when will it be built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ybor Harbor is a 33-acre mixed-use development planned for the waterfront edge of Ybor City. The project calls for approximately 500,000 square feet of office space, 800 hotel rooms, nearly 5,000 residential units, and a significant retail component. It is one of several large-scale projects shaping what city planners expect to be a long-term transformation of Ybor's eastern and waterfront parcels. Timing for individual phases has not been fully announced, making early engagement with a local CRE advisor important for tenants and investors tracking specific opportunity windows.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tampa General Hospital opening in Ybor City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tampa General Hospital has announced plans to open a hospital in Ybor City in partnership with developer Darryl Shaw. The project includes a full hospital facility, a medical office building, and a clinic offering primary and urgent care services. This anchors a medical use case for Ybor that will attract healthcare tenants, life science companies, and medical office investors to the submarket — a dynamic similar to what USF's medical campus has done for the Fletcher Avenue corridor in North Tampa.",
      },
    },
    {
      "@type": "Question",
      name: "What commercial real estate opportunities exist in Ybor City right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Current opportunities span retail, office, and land. Ground-floor retail in Gasworx's Paseo corridor is leasing now, targeting restaurants, boutique fitness, personal services, and experiential retail. Office space in converted historic brick buildings along Seventh Avenue and in emerging new-construction projects offers creative alternatives to Class A Westshore product at more competitive rents. For investors, underdeveloped parcels in East Ybor — where rezoning allows up to 2.9 million square feet of mixed-use density — represent genuine land-value upside plays if you have patience for a 5-to-10-year horizon.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ybor City CRE compare to other Tampa Bay submarkets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ybor City occupies a unique position in Tampa Bay's commercial real estate landscape. Unlike Westshore, which serves established corporate tenants seeking Class A office, or the Brandon corridor, which serves suburban retail and professional services, Ybor is positioned as an urban mixed-use district with walkability, character, transit access, and a residential density that most Tampa submarkets lack. For creative, tech, healthcare, and hospitality tenants, Ybor offers a product profile — historic brick buildings, active street life, proximity to downtown Tampa — that cannot be replicated elsewhere in the metro.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hencre.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ybor City Commercial Real Estate Tampa 2026",
      item: "https://hencre.com/blog/ybor-city-commercial-real-estate-tampa-2026",
    },
  ],
};

const relatedLinks = [
  {
    title: "Tampa Mall Redevelopment & Mixed-Use Trends",
    href: "/blog/tampa-mall-redevelopment-mixed-use",
    description: "How Tampa's large-format retail sites are being repositioned as mixed-use destinations.",
  },
  {
    title: "Tampa Bay Office Market Q2 2026",
    href: "/blog/tampa-bay-office-market-q2-2026",
    description: "Vacancy data and absorption trends for Tampa Bay's office market as of mid-2026.",
  },
  {
    title: "Tampa Bay Medical Office Real Estate 2026",
    href: "/blog/tampa-bay-medical-office-real-estate-2026",
    description: "How healthcare expansion — including hospital campuses like Tampa General — is driving medical office demand.",
  },
  {
    title: "St. Petersburg Commercial Real Estate 2026",
    href: "/blog/st-petersburg-commercial-real-estate-2026",
    description: "How Pinellas County's urban core compares to Tampa's Ybor-led redevelopment wave.",
  },
  {
    title: "What Makes a Good Commercial Investment?",
    href: "/blog/what-makes-a-good-commercial-investment",
    description: "A framework for evaluating mixed-use and urban infill CRE acquisitions in emerging districts.",
  },
];

export default function YborCityCommercialRealEstatePage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Ybor City Commercial Real Estate Tampa 2026", href: "/blog/ybor-city-commercial-real-estate-tampa-2026" },
        ]}
      />

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&h=900&fit=crop"
        title="Ybor City Commercial Real Estate 2026"
        subtitle="Tampa's most historic neighborhood is also its most active development market — 6 million square feet of mixed-use, a new hospital, 5,000-plus residential units, and a redesigned streetcar system all in motion at once."
      />

      <article className="prose-hencre mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-[#666666]">
          Ybor City has seen booms before. The cigar industry turned it into one of the most productive urban neighborhoods in the American South in the late 1800s and early 1900s. What is happening now is different in scale and permanence. A convergence of private capital, institutional development partners, a major hospital system, and city-supported infrastructure investment is reshaping Ybor City into something Tampa has never had: a dense, walkable, transit-served urban district with genuine commercial real estate depth across office, retail, hospitality, and medical uses. For tenants and investors paying attention, the window to engage early is narrowing.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Is Actually Being Built in Ybor City Right Now?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The most concrete way to understand Ybor City&apos;s transformation is to look at what is either open, under construction, or in permitted development as of mid-2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Gasworx — Phase 1 open, multiple phases active.</strong> The Stevedore, Gasworx&apos;s first residential building, opened in April 2026 with 390 apartment units and 9,700 square feet of ground-floor retail. It is a seven-story structure at the heart of what developer Darryl Shaw and partners Kettler and PPF Real Estate are calling a 50-acre transformation of the former TECO gas works site. The project envisions approximately 6 million square feet of total development — residential, office, retail, hospitality, and civic uses woven through a pedestrian-oriented street grid that includes the Paseo, a retail corridor connecting the marketplace to surrounding residential blocks. A new TECO Line Streetcar stop is being designed into the district to link Gasworx to downtown Tampa and the Channel District without requiring a car. Phase 2 construction on eastern parcels was advancing as of spring 2026.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>East Ybor Redevelopment — 30 acres, 60 parcels rezoned.</strong> The City of Tampa approved zoning changes that allow up to 2.9 million square feet of mixed-use development across approximately 30 acres and nearly 60 parcels on Ybor&apos;s eastern edge. The East Ybor plan calls for housing, businesses, and new parks — essentially extending the density and character of Ybor&apos;s core into a longer-underutilized set of parcels that buffer the historic district from I-4 to the north and east.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Ybor Harbor — 33 acres on the waterfront.</strong> One of the more ambitious plans in the pipeline is Ybor Harbor: a 33-acre mixed-use development targeting approximately 500,000 square feet of office space, 800 hotel rooms, nearly 5,000 residential units, and a substantial retail presence. The waterfront location creates a product category — waterfront urban mixed-use — that Tampa Bay essentially does not have in this configuration outside of Water Street. Individual phases and timelines are still being refined, but the zoning and master planning groundwork places Ybor Harbor squarely in the near-to-medium term.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Tampa General Hospital — full hospital and medical office campus.</strong> Tampa General Hospital announced plans to open a hospital in Ybor City in partnership with Darryl Shaw, alongside a medical office building and a clinic serving primary and urgent care needs. A major hospital anchor of this scale does something transformative to a neighborhood&apos;s commercial real estate trajectory: it brings 24/7 activity, stabilizes surrounding retail, generates sustained demand for medical office and clinical space, and signals to institutional investors that the submarket has real long-term health. See our deeper look at <a href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">Tampa Bay medical office real estate trends</a> for context on how hospital anchors reshape CRE fundamentals.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Commercial Tenant Opportunities Exist in Ybor City Today?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The Ybor City of 2026 is not a single, cohesive market — it is a patchwork of existing historic product, newly delivered inventory, and future development sites at various stages of the entitlement pipeline. Tenants looking at Ybor need to be clear-eyed about which segment they are evaluating.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Ground-floor retail on the Paseo and Seventh Avenue.</strong> Gasworx&apos;s Paseo corridor is actively leasing ground-floor retail space now, targeting restaurants, specialty food and beverage, boutique fitness, personal services, and experiential retail. Rents in this new mixed-use product typically run $28 to $42 per square foot on a NNN basis, depending on location within the project. Ybor&apos;s Seventh Avenue — the historic entertainment and dining strip — continues to offer existing brick-and-timber retail space at rates competitive with downtown Tampa for businesses willing to trade finish level for character and foot traffic. Understanding <a href="/blog/understanding-cam-charges-tenants-guide" className="text-accent underline">how CAM charges work in a mixed-use NNN context</a> is important before signing anything here.
          </li>
          <li>
            <strong>Creative and flex office in historic buildings.</strong> Ybor&apos;s existing brick cigar factory buildings — many of which have been partially or fully converted to office use over the past 20 years — offer creative office space at rents generally ranging from $22 to $35 per square foot on a modified gross or full-service basis. For tech companies, design firms, healthcare startups, and professional services businesses that want character, walkability, and proximity to downtown Tampa without Class A Westshore rents, Ybor&apos;s historic office product is consistently undervalued relative to what it offers. For comparison, see current <a href="/blog/tampa-bay-office-market-q2-2026" className="text-accent underline">Tampa Bay office market rates and conditions</a>.
          </li>
          <li>
            <strong>Medical office tied to Tampa General&apos;s Ybor campus.</strong> The TGH announcement creates a direct demand signal for clinical, medical office, and healthcare services space within walking distance of the planned hospital campus. Tenants in physical therapy, imaging, behavioral health, dental, and specialty medicine should be identifying locations now — before the hospital opens and rents in the immediate area reflect the anchor effect.
          </li>
          <li>
            <strong>Hospitality and short-term use.</strong> The 800 hotel rooms planned in the Ybor Harbor project will not be available for years, but the existing fabric of Ybor already supports boutique hospitality. Independent hotel operators and short-term rental investors have found Ybor&apos;s event calendar, walkability, and tourism appeal to generate strong occupancy. For investors considering small hotel or adaptive reuse hospitality plays, the TGH and residential density coming into the market creates a more durable demand base than event-only hospitality typically offers.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Should Investors Think About Ybor City CRE?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Ybor City is not a stabilized market — and that is precisely the point. The assets and submarkets that deliver the strongest long-term returns in urban redevelopment districts are almost always acquired before the anchors open and the development cranes become permanent fixtures of the skyline. But early-mover advantage in a district like Ybor requires a clear thesis, patient capital, and an honest evaluation of execution risk.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li>
            <strong>Land and adaptive reuse in East Ybor.</strong> The 2.9 million square feet of rezoned mixed-use capacity in East Ybor represents the clearest value-add land play in the near-to-medium term. Parcels here are priced well below the Gasworx core but sit within the same development envelope. Investors with 5-to-10-year horizons and the ability to navigate rezoning, permitting, and infrastructure timelines have a genuine opportunity to capture the upside as surrounding density drives absorption. Run your numbers carefully — <a href="/blog/how-to-calculate-commercial-property-roi" className="text-accent underline">commercial property ROI analysis</a> and <a href="/blog/commercial-property-due-diligence-timeline" className="text-accent underline">thorough due diligence</a> are non-negotiable before any land acquisition.
          </li>
          <li>
            <strong>Stabilized historic brick product.</strong> Existing office and retail buildings in the historic core — fully leased, in good structural condition, with reliable tenants — represent a lower-risk entry into Ybor with current income. Cap rates on stabilized historic Ybor product have compressed as investor interest has grown, typically trading in the 5.5 to 7% range depending on lease term and tenant credit. The scarcity of historic brick inventory in a market where new construction is delivering steel-and-glass adjacent sets these buildings apart as a non-replicable product type.
          </li>
          <li>
            <strong>New mixed-use inventory in Gasworx.</strong> For investors seeking institutional-quality product with built-in amenity, the ground-floor retail and eventual office components within Gasworx itself will trade at tighter cap rates — likely sub-6% for well-leased positions — reflecting the project&apos;s scale, sponsorship quality, and long-term residential density. This is a lower-yield, lower-risk play relative to East Ybor land, appropriate for capital seeking stable cash flow over appreciation upside.
          </li>
          <li>
            <strong>Insurance and Florida market awareness.</strong> Any Florida investment property analysis requires current insurance cost modeling — not historical premiums. Tampa Bay&apos;s property insurance market remains elevated, and older historic buildings in Ybor carry specific underwriting considerations around building age, construction type, and storm exposure. Our post on <a href="/blog/florida-insurance-crisis-investment-properties" className="text-accent underline">Florida&apos;s insurance crisis and investment properties</a> covers the underwriting implications in detail. Build current insurance costs — not three-year averages — into your acquisition model.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">How Does Ybor City Compare to Tampa Bay&apos;s Other CRE Markets?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          The honest answer is that Ybor City does not compete with Westshore for corporate office tenants or with Brandon for suburban retail. It occupies a distinct position in Tampa Bay&apos;s CRE ecosystem — one that has no direct analog in the metro.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Versus downtown Tampa.</strong> Downtown Tampa&apos;s Water Street district set the template for large-scale mixed-use redevelopment in the urban core, and Ybor City is the natural extension of that investment thesis one mile to the northeast. Where Water Street brought Class A office, luxury residential, and institutional hospitality to Channelside, Ybor brings historic character, walkability at human scale, and a cultural identity that new construction cannot replicate. The two submarkets are complementary rather than competitive for most tenant and investor profiles.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Versus St. Petersburg.</strong> St. Petersburg&apos;s downtown has attracted significant investment as <a href="/blog/st-petersburg-commercial-real-estate-2026" className="text-accent underline">Pinellas County&apos;s urban CRE market</a> has strengthened. The key difference is that Ybor sits within Hillsborough County&apos;s development pipeline, which is larger in scale and closer to Tampa International Airport, the major employment corridors of Westshore and the USF district, and the I-4/I-275 interchange. For businesses that need to be on the Tampa side of the bay, Ybor offers urban product without the bridge crossing.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          <strong>Versus the suburban submarkets.</strong> Wesley Chapel, Parrish, and the broader I-75 growth corridor continue to attract large-format retail, light industrial, and suburban office. See our analysis of <a href="/blog/pasco-county-commercial-development-2026" className="text-accent underline">Pasco County&apos;s commercial development pipeline</a> for that side of the Tampa Bay story. Ybor City represents the opposite end of the spectrum: infill, urban, dense, and walkable. The tenants and investors who belong in Ybor are typically not the same ones building out in Wesley Chapel — though both markets are active.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">What Are the Risks of Investing in Ybor City CRE?</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Urban redevelopment districts carry real risks that stabilized suburban markets do not, and Ybor is no exception. Being clear-eyed about the downside scenarios is as important as understanding the upside case.
        </p>
        <ul className="mt-4 list-disc pl-6 text-[#666666] leading-relaxed space-y-2">
          <li><strong>Development timeline slippage.</strong> Large-scale projects like Ybor Harbor and East Ybor are subject to financing, permitting, and construction delays. If you underwrite your investment based on nearby delivery of 5,000 residential units and a hospital campus, and those projects slip by 3 to 5 years, your pro forma may not hold. Underwrite to current conditions, treat the development pipeline as upside rather than assumed baseline.</li>
          <li><strong>Historic preservation constraints.</strong> Ybor City is a National Historic Landmark District. Renovation and adaptive reuse projects face additional review and approval requirements that can add cost and time relative to non-historic product. Factor this into renovation budgets and hold-period assumptions.</li>
          <li><strong>Parking and transit dependency.</strong> The TECO Line Streetcar expansion is planned but not yet complete for the Gasworx station. Until transit infrastructure catches up to the residential density being added, parking availability and cost will remain a friction point for retail tenants whose customers arrive by car. Evaluate parking ratios carefully for any retail or medical office acquisition.</li>
          <li><strong>Tenant mix and entertainment-dependent retail.</strong> Parts of Ybor&apos;s Seventh Avenue still depend heavily on evening entertainment and tourism-driven foot traffic, which can be volatile relative to daytime-anchored retail. Tenants and investors focused on this segment should model occupancy based on a realistic mix of resident, worker, and visitor traffic — not just event weekends.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-black">The Bottom Line on Ybor City in 2026</h2>
        <p className="mt-4 text-[#666666] leading-relaxed">
          Ybor City is mid-transformation — not pre-development speculation and not a fully mature market. The Gasworx project is physically delivering. Tampa General Hospital is committed. The rezoning and infrastructure investment from the City of Tampa signals institutional confidence. At the same time, the full density and foot traffic that will ultimately define the submarket is still 5 to 10 years from completion.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For tenants, the current window is valuable precisely because it is early. Rents in new Gasworx product and the historic core are still being set by a market that has not yet priced in the full impact of TGH, Ybor Harbor, and the transit improvements. Tenants signing 5 to 10-year leases today are likely to find themselves in a submarket with substantially more foot traffic, amenity, and competitor demand when those leases come up for renewal.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          For investors, the opportunity is to identify the right product type at the right basis before the anchors open and stabilized yield compresses further. That requires current, local knowledge of what is actually available, what is permitted, and what the development pipeline realistically delivers and when.
        </p>
        <p className="mt-4 text-[#666666] leading-relaxed">
          With 23+ years of commercial real estate experience and deep roots in Tampa Bay&apos;s CRE market, I work with tenants identifying space and investors evaluating acquisitions across Hillsborough, Pinellas, and Pasco Counties — including the Ybor City submarket as it evolves in real time. If you are looking at Ybor for your business or your portfolio, let&apos;s talk before the project cranes make the decision for you.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-black">Frequently Asked Questions</h2>

        <h3 className="mt-6 text-xl font-semibold text-black">What is the Gasworx development in Ybor City?</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Gasworx is a 50-acre mixed-use redevelopment in Ybor City led by developer Darryl Shaw in partnership with Kettler and PPF Real Estate. The project will ultimately deliver approximately 6 million square feet of development, including thousands of residential units, new office and retail space, a public park system, and a new TECO Line Streetcar stop. The first residential building — The Stevedore, a seven-story structure with 390 units and 9,700 square feet of ground-floor retail — opened to residents in April 2026. Gasworx is the largest private development in Ybor City&apos;s modern history.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">What is Ybor Harbor and when will it be built?</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Ybor Harbor is a 33-acre mixed-use development planned for the waterfront edge of Ybor City. The project calls for approximately 500,000 square feet of office space, 800 hotel rooms, nearly 5,000 residential units, and a significant retail component. Timing for individual phases has not been fully announced, making early engagement with a local <a href="/services/tenant-representation" className="text-accent underline">CRE advisor</a> important for tenants and investors tracking specific opportunity windows.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">Is Tampa General Hospital opening in Ybor City?</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Yes. Tampa General Hospital has announced plans to open a hospital in Ybor City in partnership with developer Darryl Shaw. The project includes a full hospital facility, a medical office building, and a clinic offering primary and urgent care services. This anchors a medical use case for Ybor that will attract healthcare tenants, life science companies, and <a href="/blog/tampa-bay-medical-office-real-estate-2026" className="text-accent underline">medical office investors</a> to the submarket — a dynamic similar to what USF&apos;s medical campus has done for the Fletcher Avenue corridor in North Tampa.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">What commercial real estate opportunities exist in Ybor City right now?</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Current opportunities span retail, office, and land. Ground-floor retail in Gasworx&apos;s Paseo corridor is leasing now, targeting restaurants, boutique fitness, personal services, and experiential retail. Office space in converted historic brick buildings along Seventh Avenue and in emerging new-construction projects offers creative alternatives to Class A Westshore product at more competitive rents. For investors, underdeveloped parcels in East Ybor — where rezoning allows up to 2.9 million square feet of mixed-use density — represent genuine land-value upside plays if you have patience for a 5-to-10-year horizon.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-black">How does Ybor City CRE compare to other Tampa Bay submarkets?</h3>
        <p className="mt-2 text-[#666666] leading-relaxed">
          Ybor City occupies a unique position in Tampa Bay&apos;s commercial real estate landscape. Unlike Westshore, which serves established corporate tenants seeking Class A office, or the Brandon corridor, which serves suburban retail and professional services, Ybor is positioned as an urban mixed-use district with walkability, character, transit access, and a residential density that most Tampa submarkets lack. For creative, tech, healthcare, and hospitality tenants, Ybor offers a product profile — historic brick buildings, active street life, proximity to downtown Tampa — that cannot be replicated elsewhere in the metro. For a broader look at what drives Tampa Bay&apos;s CRE fundamentals, see our overview of <a href="/blog/why-tampa-bay-cre-is-booming" className="text-accent underline">why Tampa Bay commercial real estate continues to attract capital</a>.
        </p>
      </article>

      <RelatedLinks heading="Keep Reading" links={relatedLinks} />

      <CTASection
        heading="Looking at Ybor City for Your Business or Investment Portfolio?"
        body="I help tenants find the right space and investors identify well-positioned acquisitions across Tampa Bay's evolving commercial market — including Ybor City's fast-moving development pipeline. Let's talk before the cranes get there first."
        buttonText="Contact Barrett"
        buttonHref="/contact"
      />
    </>
  );
}
