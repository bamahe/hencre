import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Commercial Real Estate in Duval County, Florida | HenCRE",
  description: "Expert guide to commercial real estate in Duval County, FL. Office, retail, industrial, and investment opportunities from Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Commercial Real Estate in Duval County, Florida | HenCRE",
    description: "Expert guide to commercial real estate in Duval County, FL. Office, retail, industrial, and investment opportunities from Barrett Henry, REMAX Collective.",
    url: "https://hencre.com/markets/duval",
    siteName: "HenCRE",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Commercial Real Estate in Duval County, Florida",
        "description": "Expert guide to commercial real estate in Duval County, FL. Office, retail, industrial, and investment opportunities from Barrett Henry, REMAX Collective.",
        "author": {
          "@type": "Person",
          "name": "Barrett Henry",
          "jobTitle": "Broker Associate",
          "worksFor": { "@type": "Organization", "name": "REMAX Collective" }
        }
      }} />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Markets", href: "/markets" },
        { label: "Commercial Real Estate in Duval County, Florida", href: "/markets/duval" },
      ]} />
      <Hero title="Commercial Real Estate in Duval County, Florida" subtitle="Expert guide to commercial real estate in Duval County, FL. Office, retail, industrial, and investment opportunities from Barrett Henry, REMAX Collective." />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <section id="duval-county-overview">
  <h1>Duval County Commercial Real Estate Market Overview</h1>
  
  <p>
    Duval County is Florida's largest city by area, and its commercial real estate market reflects that scale. As a REALTOR® and broker associate with REMAX Collective, I've watched this market evolve into a sophisticated, diversified landscape where logistics, mixed-use development, and institutional growth drive consistent opportunity. Whether you're looking at warehouse space near JAXPORT, office corridors in Arlington, or multifamily projects along the beaches, Duval County demands a broker who understands both the macro forces and the street-level nuances.
  </p>

  <p>
    This is a market built on substance—port activity, distribution networks, corporate relocations, and downtown revitalization. I work here regularly, and I can tell you what's actually moving versus what the headlines are overstating.
  </p>
</section>

<section id="major-corridors">
  <h2>Key CRE Corridors in Duval County</h2>

  <h3>Downtown Jacksonville</h3>
  <p>
    Downtown is the epicenter of mixed-use activity in northeast Florida. Over the past several years, significant revitalization efforts have brought new energy to the riverfront and surrounding blocks. You're seeing adaptive reuse projects, residential conversions, restaurant and retail activation, and corporate office space repositioning. The riverfront corridor—along the St. Johns River—has become a focal point for both institutional investment and local developer interest.
  </p>
  <p>
    This corridor matters if you're hunting for urban office with character, ground-floor retail that actually has foot traffic, or multifamily that appeals to young professionals and empty-nesters wanting walkability. The fundamentals here are tightening as supply of truly desirable downtown space remains constrained.
  </p>

  <h3>Arlington</h3>
  <p>
    Arlington is where you'll find the lion's share of Class A office space in Duval County. This corridor has historically anchored corporate headquarters and major back-office operations. It's accessible, professionally built out, and still the go-to for tenants requiring substantial office footprint with modern amenities.
  </p>
  <p>
    Demand drivers here are steady corporate relocations and expansions from the Southeast looking for Florida presence without the saturation or pricing of Miami-Dade or Broward. Lease rates and availability vary by submarket, but Arlington remains the benchmark for institutional-grade office in the county.
  </p>

  <h3>JAXPORT Industrial Corridor</h3>
  <p>
    JAXPORT—Port of Jacksonville—is one of the most significant logistics engines in the Southeast. It drives an enormous warehouse, distribution, and light manufacturing presence throughout Duval County, particularly in the industrial zones east of downtown and along the major freight corridors.
  </p>
  <p>
    This is why Duval County's industrial market is so active. Third-party logistics providers, freight forwarders, regional distributors, and import/export businesses all cluster near port access. If you're shipping containerized goods, perishables, or breakbulk cargo, proximity to JAXPORT is non-negotiable. Warehouse space here commands attention from national logistics operators and regional players alike.
  </p>

  <h3>Jacksonville Beach & Coastal Communities</h3>
  <p>
    Jacksonville Beach, Atlantic Beach, and Neptune Beach form a distinct coastal market. Mixed-use hospitality, vacation rental platforms, retail, and growing multifamily development characterize this area. The beach submarket attracts tourism-oriented CRE, second-home investors, and operators chasing lifestyle tenants.
  </p>
  <p>
    This corridor has different demand drivers than inland Duval—tourism, seasonal occupancy patterns, and younger demographic migration. Retail and restaurant space here performs differently than Arlington office.
  </p>
</section>

<section id="active-property-types">
  <h2>Active Property Types in Duval County</h2>

  <h3>Industrial & Warehouse</h3>
  <p>
    Industrial is the market's workhorse. JAXPORT dependency means steady, consistent demand for warehouse, cross-dock, and distribution-ready space. You're also seeing light manufacturing and specialized logistics facilities. This sector attracts both local and national institutional capital.
  </p>

  <h3>Office</h3>
  <p>
    Duval County still houses substantial office inventory, concentrated in Arlington and downtown. Corporate relocations and expansions from other Southeast markets continue to drive leasing. There's also selective demand for medical office near major healthcare systems and professional service office in walkable urban nodes.
  </p>

  <h3>Multifamily</h3>
  <p>
    Residential development has gained momentum. New apartment construction is active in both urban infill (downtown, riverside) and suburban peripheral markets. Demand comes from young professionals relocating into Florida, corporate transferees, and empty-nesters. Coastal areas continue attracting investment-grade multifamily projects.
  </p>

  <h3>Retail & Mixed-Use</h3>
  <p>
    Retail remains selective—suburban strips and power centers serve neighborhood demand, while downtown and Jacksonville Beach see more experiential, dining-focused, and service retail. Mixed-use projects that blend residential, office, and retail are increasingly common, particularly in revitalization zones.
  </p>

  <h3>Specialized Assets</h3>
  <p>
    Medical office, data centers, and cold-storage facilities are growing niches driven by healthcare consolidation, tech infrastructure needs, and food logistics. These assets command premium economics and longer-term user demand.
  </p>
</section>

<section id="demand-drivers">
  <h2>What's Actually Driving the Duval County Market</h2>

  <ul>
    <li><strong>JAXPORT Activity:</strong> Port throughput, containerized cargo growth, and logistics hub expansion keep industrial and warehouse demand robust. If you're looking at industrial here, port access and freight corridor proximity matter enormously.</li>
    <li><strong>Corporate Relocation & Expansion:</strong> Southeast-based companies and out-of-region firms continue moving headquarters or significant operations into Jacksonville. Lower cost-of-doing-business compared to larger Florida metros makes Duval attractive.</li>
    <li><strong>Downtown Revitalization:</strong> Mixed-use projects, retail activation, and residential conversion are real. Institutional and local investment is backing these plays. This drives office, retail, and multifamily demand in urban core.</li>
    <li><strong>Healthcare & Institutional Growth:</strong> Major healthcare systems are expanding, creating demand for medical office, specialized facilities, and campus-adjacent commercial space.</li>
    <li><strong>Tourism & Coastal Demand:</strong> Beach corridors continue attracting hospitality, vacation rental operators, and lifestyle-oriented retail. This segment has distinct seasonality and tenant profiles.</li>
    <li><strong>Population & Demographic Inflow:</strong> Younger professional migration and Florida's overall draw continue feeding residential and service-oriented CRE demand.</li>
  </ul>
</section>

<section id="market-character">
  <h2>Why Duval County Matters</h2>

  <p>
    Duval County isn't flashy, but it's fundamental. It's where real logistics happen, where corporate operations scale, and where mixed-use urban development is actually moving capital and creating value. The market is less saturated than Miami-Dade or Broward, pricing is more reasonable, and user demand is more diversified.
  </p>

  <p>
    For investors, Duval offers industrial assets tied to tangible port activity, office with steady institutional and corporate demand, and multifamily feeding demographic trends that are real and measurable. For users—tenants and operators—it's a market where you can still get good value, strong logistics infrastructure, and room to actually conduct business.
  </p>

  <p>
    Downtown Jacksonville's revitalization is worth watching. That's where speculative value and operational upside often align most clearly.
  </p>
</section>

<section id="barrett-services">
  <h2>How I Can Help You in Duval County</h2>

  <p>
    I work Duval County regularly as a REALTOR® and broker associate with REMAX Collective. With 23+ years of experience and designations including e-PRO, MRP, SRS, and REMAX Hall of Fame, I bring both market intelligence and execution to every transaction. Whether you're an investor scouting industrial assets near JAXPORT, a corporate tenant looking for Class A office in Arlington, or a developer targeting mixed-use opportunities downtown, I can help you navigate this market with clarity and precision.
  </p>

  <p>
    I don't work off assumptions or outdated comps. I work off current data, direct relationships with listing brokers, and decades of transactional experience across Florida's commercial markets. If you're serious about Duval County, let's talk about what you're actually trying to accomplish.
  </p>

  <p>
    Contact me directly: <strong>(813) 733-7907</strong> or <strong>barrett@nowtb.com</strong>.
  </p>
</section>
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate?"
        body="Whether you're leasing, buying, selling, or investing — Barrett Henry has the experience and local knowledge to get it done right."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
