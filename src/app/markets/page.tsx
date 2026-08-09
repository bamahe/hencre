import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Markets Index — overview page linking to all 8 Tier-1 county
 * market pages with brief descriptions of each CRE market.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "CRE Markets | Tampa Bay & Central Florida 2026",
  description:
    "Explore commercial real estate markets across Tampa Bay and Central Florida. County-by-county CRE insights for Hillsborough, Pinellas, Pasco, Polk, and more. Call (813) 733-7907.",
  alternates: { canonical: "https://hencre.com/markets" },
  openGraph: {
    title: "Commercial Real Estate Markets — Florida | HenCRE",
    description:
      "Explore commercial real estate markets across Florida. County-by-county CRE insights from Barrett Henry, Broker Associate at REMAX Collective.",
    url: "https://hencre.com/markets",
  },
};

/* Data for each county market card */
const MARKETS = [
  {
    slug: "hillsborough",
    county: "Hillsborough County",
    city: "Tampa",
    description:
      "The largest CRE market in the Tampa Bay region. Home to the Westshore business district, downtown Tampa's growing office and mixed-use corridor, and a massive I-75 industrial pipeline stretching from Ybor City south through Riverview.",
  },
  {
    slug: "pinellas",
    county: "Pinellas County",
    city: "St. Petersburg & Clearwater",
    description:
      "A coastal market with surging office and creative-space demand in downtown St. Petersburg, established retail along US-19, and a tourism-driven hospitality sector anchored by the beaches.",
  },
  {
    slug: "pasco",
    county: "Pasco County",
    city: "New Port Richey & Wesley Chapel",
    description:
      "One of Florida's fastest-growing corridors. The SR 54/56 retail boom, expanding industrial parks near I-75, and rooftops driving new medical office and neighborhood retail development.",
  },
  {
    slug: "polk",
    county: "Polk County",
    city: "Lakeland & Winter Haven",
    description:
      "Central Florida's logistics powerhouse. The I-4 corridor between Tampa and Orlando attracts major warehouse and distribution users, while Lakeland's downtown revitalizes with office and mixed-use projects.",
  },
  {
    slug: "manatee",
    county: "Manatee County",
    city: "Bradenton",
    description:
      "A growing CRE market between Tampa and Sarasota. New retail nodes along I-75 interchanges, an expanding industrial base near Port Manatee, and a revitalizing downtown Bradenton office and retail scene.",
  },
  {
    slug: "sarasota",
    county: "Sarasota County",
    city: "Sarasota",
    description:
      "A high-end market known for premier retail, tourism-driven hospitality, and a well-established office sector. Downtown Sarasota and the US-41 corridor are the primary CRE hubs.",
  },
  {
    slug: "citrus",
    county: "Citrus County",
    city: "Crystal River & Inverness",
    description:
      "An emerging Nature Coast market along US-19 with growing demand for retail, medical office, and light industrial space as retirees and remote workers relocate to the corridor.",
  },
  {
    slug: "hernando",
    county: "Hernando County",
    city: "Spring Hill & Brooksville",
    description:
      "A growing suburban market fueled by the Suncoast Parkway extension. Retail pad sites, industrial land, and medical office space are in demand as population growth outpaces existing supply.",
  },
  {
    slug: "alachua",
    county: "Alachua County",
    city: "Gainesville",
    description:
      "Home to the University of Florida, driving medical office demand near UF Health, student housing conversions, and innovation district activity. Downtown Gainesville and the Midtown corridor are seeing active redevelopment.",
  },
  {
    slug: "baker",
    county: "Baker County",
    city: "Macclenny",
    description:
      "A rural I-10 corridor market with highway commercial, light industrial, and agricultural land opportunities. Benefits from Jacksonville spillover activity along the US-90 and I-10 interchange.",
  },
  {
    slug: "bay",
    county: "Bay County",
    city: "Panama City",
    description:
      "A recovering Gulf Coast market with ongoing Tyndall Air Force Base expansion driving defense-related industrial and office demand. Tourism and hospitality anchor the Panama City Beach corridor.",
  },
  {
    slug: "bradford",
    county: "Bradford County",
    city: "Starke",
    description:
      "A small rural North Florida market along US-301. Light industrial, highway commercial, and land properties connect the growing Alachua and Duval County markets.",
  },
  {
    slug: "brevard",
    county: "Brevard County",
    city: "Melbourne & Cocoa",
    description:
      "The Space Coast industrial and aerospace hub anchored by SpaceX, Blue Origin, L3Harris, and NASA. Port Canaveral adds logistics and maritime commercial activity alongside strong industrial demand.",
  },
  {
    slug: "broward",
    county: "Broward County",
    city: "Fort Lauderdale",
    description:
      "South Florida's second-largest CRE market. Port Everglades drives industrial demand, Las Olas anchors office and mixed-use activity, and the I-95 corridor supports established logistics and retail.",
  },
  {
    slug: "calhoun",
    county: "Calhoun County",
    city: "Blountstown",
    description:
      "A rural Panhandle market with agricultural land, highway commercial, and light industrial uses. Primarily a referral-based market for investors focused on North Florida rural commercial properties.",
  },
  {
    slug: "charlotte",
    county: "Charlotte County",
    city: "Port Charlotte & Punta Gorda",
    description:
      "A growing Southwest Florida market between Sarasota and Lee County. Retiree-driven healthcare, retail, and medical office demand is reshaping this coastal market.",
  },
  {
    slug: "clay",
    county: "Clay County",
    city: "Green Cove Springs & Fleming Island",
    description:
      "A fast-growing Jacksonville suburb with new commercial development along US-17 and CR-218. Retail and light industrial space in strong demand as rooftop growth draws new businesses southward.",
  },
  {
    slug: "collier",
    county: "Collier County",
    city: "Naples",
    description:
      "Southwest Florida's luxury CRE market. Naples drives high-end retail and office demand while the I-75 corridor attracts industrial users seeking proximity to South Florida without Miami-level costs.",
  },
  {
    slug: "columbia",
    county: "Columbia County",
    city: "Lake City",
    description:
      "The I-10/I-75 interchange at Lake City creates a natural logistics hub between Jacksonville and Tallahassee. Warehouse, distribution, and transportation-related commercial properties dominate demand.",
  },
  {
    slug: "desoto",
    county: "DeSoto County",
    city: "Arcadia",
    description:
      "A rural Southwest Florida market with agricultural land and light industrial properties. Benefits from proximity to Charlotte and Sarasota counties as Southwest Florida growth radiates outward.",
  },
  {
    slug: "dixie",
    county: "Dixie County",
    city: "Cross City",
    description:
      "A rural Nature Coast market along US-19. Agricultural land, light industrial, and highway commercial properties serve a growing permanent population between Gainesville and Tallahassee.",
  },
  {
    slug: "duval",
    county: "Duval County",
    city: "Jacksonville",
    description:
      "North Florida's dominant CRE market. JAXPORT drives major industrial and logistics demand; downtown Jacksonville revitalization creates office and mixed-use opportunity; suburban corridors add retail and medical office.",
  },
  {
    slug: "escambia",
    county: "Escambia County",
    city: "Pensacola",
    description:
      "Northwest Florida's largest market. NAS Pensacola anchors defense-related industrial demand; downtown Pensacola's tech and creative corridor adds office activity; established retail lines US-98 and Davis Highway.",
  },
  {
    slug: "flagler",
    county: "Flagler County",
    city: "Palm Coast",
    description:
      "One of Florida's fastest-growing cities drives retail, medical office, and light industrial demand along the I-95 corridor between Daytona Beach and St. Augustine.",
  },
  {
    slug: "franklin",
    county: "Franklin County",
    city: "Apalachicola & Carrabelle",
    description:
      "Florida's least-developed coastal Panhandle market. Apalachicola's historic downtown, Carrabelle's waterfront, and Eastpoint aquaculture operations create niche commercial and investment opportunities.",
  },
  {
    slug: "gulf",
    county: "Gulf County",
    city: "Port St. Joe",
    description:
      "A small post-Hurricane Michael recovery market along St. Joseph Bay. Boutique hospitality, small retail, and ground-up commercial development anchor this eco-tourism and coastal relocation market.",
  },
  {
    slug: "hendry",
    county: "Hendry County",
    city: "LaBelle & Clewiston",
    description:
      "Florida&apos;s primary sugarcane and agricultural production market. LaBelle anchors small commercial, while Clewiston serves the sugar industry. Solar energy land leases are an emerging demand driver.",
  },
  {
    slug: "holmes",
    county: "Holmes County",
    city: "Bonifay",
    description:
      "A rural northwest Florida Panhandle market on the I-10 corridor. Industrial and warehouse properties near I-10 serve agricultural operators and small manufacturers at pricing well below metro markets.",
  },
  {
    slug: "gadsden",
    county: "Gadsden County",
    city: "Quincy",
    description:
      "A small North Florida county west of Tallahassee with agricultural heritage and US-90 highway commercial. Rural land and light industrial properties serve operators between Tallahassee and the western Panhandle.",
  },
  {
    slug: "gilchrist",
    county: "Gilchrist County",
    city: "Trenton",
    description:
      "A rural North Florida county on the Suwannee River between Gainesville and the Nature Coast. Agricultural land, rural commercial, and light industrial properties serve one of Florida&apos;s least-developed markets.",
  },
  {
    slug: "glades",
    county: "Glades County",
    city: "Moore Haven",
    description:
      "A rural South Florida county on Lake Okeechobee&apos;s western shore with agricultural land, sugar industry commercial, and emerging solar energy land lease activity along the US-27 corridor.",
  },
  {
    slug: "hamilton",
    county: "Hamilton County",
    city: "Jasper",
    description:
      "A small North Florida county at the Georgia border where I-75 and US-129 converge near Jasper. Highway commercial and truck stop properties serve the interstate corridor, with agricultural land as the primary commercial inventory.",
  },
  {
    slug: "hardee",
    county: "Hardee County",
    city: "Wauchula",
    description:
      "A rural Central Florida agricultural county between Manatee and Highlands. Citrus and cattle operations drive land demand; US-17 commercial in Wauchula serves the county seat. An emerging market for investors tracking Central Florida rural land.",
  },
  {
    slug: "highlands",
    county: "Highlands County",
    city: "Sebring",
    description:
      "A lake-region retirement and motorsport market anchored by Sebring International Raceway. Retiree-driven retail, medical office, and service commercial line US-27 through Sebring. The annual 12 Hours of Sebring race adds seasonal hospitality demand.",
  },
  {
    slug: "indian-river",
    county: "Indian River County",
    city: "Vero Beach",
    description:
      "Florida&apos;s Treasure Coast citrus and coastal retirement market. Vero Beach&apos;s high-income residential base drives upscale retail, medical office, and restaurant demand along US-1 and the A1A corridor.",
  },
  {
    slug: "lee",
    county: "Lee County",
    city: "Fort Myers & Cape Coral",
    description:
      "Southwest Florida&apos;s second-largest CRE market. Fort Myers&apos;s US-41 corridor anchors retail and office demand; the I-75 corridor supports industrial growth; Cape Coral&apos;s commercial formation follows rapid residential expansion.",
  },
  {
    slug: "orange",
    county: "Orange County",
    city: "Orlando",
    description:
      "Central Florida&apos;s dominant commercial market. Orlando&apos;s tourism corridor, Lake Nona Medical City, Sand Lake Road office, I-Drive hospitality, and Maitland Center professional office make this one of Florida&apos;s most diverse and high-demand metros.",
  },
  {
    slug: "seminole",
    county: "Seminole County",
    city: "Lake Mary & Altamonte Springs",
    description:
      "An affluent Orlando suburb with the region&apos;s most established suburban office parks in Lake Mary and Heathrow, strong retail along SR-436, and growing industrial demand near Sanford/Orlando International Airport.",
  },
  {
    slug: "lake",
    county: "Lake County",
    city: "Clermont & Leesburg",
    description:
      "One of Florida&apos;s fastest-growing counties by percentage. Clermont&apos;s explosive residential formation drives the US-27/SR-50 commercial corridor, while Leesburg anchors healthcare and government services for the county&apos;s northern communities.",
  },
  {
    slug: "osceola",
    county: "Osceola County",
    city: "Kissimmee & St. Cloud",
    description:
      "Walt Disney World&apos;s home county. The US-192 tourist corridor through Kissimmee is one of the world&apos;s most concentrated hospitality and tourist retail markets. St. Cloud&apos;s residential growth adds a second commercial layer driven by local population needs.",
  },
  {
    slug: "leon",
    county: "Leon County",
    city: "Tallahassee",
    description:
      "Florida&apos;s state capital and home to FSU and FAMU. Government office near the State Capitol complex, university-driven retail in Midtown, and healthcare from Tallahassee Memorial make this a stable, institutionally-anchored CRE market.",
  },
  {
    slug: "volusia",
    county: "Volusia County",
    city: "Daytona Beach & Port Orange",
    description:
      "A diverse coastal county combining Daytona Beach motorsport tourism, Port Orange suburban retail, Deltona I-4 logistics, and DeLand downtown redevelopment -- four distinct commercial submarkets within a single county.",
  },
  {
    slug: "st-johns",
    county: "St. Johns County",
    city: "St. Augustine & Nocatee",
    description:
      "Florida&apos;s fastest-growing large county by percentage. Nocatee&apos;s master-planned residential growth drives the CR-210 retail corridor; historic St. Augustine anchors year-round tourism; Ponte Vedra Beach supports upscale coastal retail.",
  },
  {
    slug: "marion",
    county: "Marion County",
    city: "Ocala",
    description:
      "The Horse Capital of the World. The World Equestrian Center drives year-round hospitality and retail demand on the SR-200 corridor. I-75 anchors industrial and logistics, while a large retiree population sustains healthcare and service commercial throughout Ocala.",
  },
];

/* Structured data: Service schema for the markets page */
const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://hencre.com/markets" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Real Estate Brokerage — Florida Markets",
      description:
        "Commercial real estate brokerage services across 44 Florida counties, from Tampa Bay and Central Florida to the Space Coast, Southwest Florida, and the Panhandle.",
      provider: {
        "@type": "RealEstateAgent",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        worksFor: {
          "@type": "RealEstateOrganization",
          name: "REMAX Collective",
        },
        telephone: "(813) 733-7907",
        email: "barrett@hencre.com",
        url: "https://hencre.com",
      },
      areaServed: MARKETS.map((m) => ({
        "@type": "AdministrativeArea",
        name: `${m.county}, Florida`,
      })),
    },
  ],
};

export default function MarketsIndexPage() {
  return (
    <>
      <SchemaOrg schema={serviceSchema} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Markets", href: "/markets" }]} />

      <Hero
        title="Commercial Real Estate Markets"
        subtitle="County-by-county insights across Tampa Bay and Central Florida. From established urban cores to high-growth suburban corridors, find the right market for your next CRE opportunity."
        ctaText="Contact Barrett"
        ctaHref="/contact"
      />

      {/* ---- Market cards grid ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
            Explore Our Markets
          </h2>
          <p className="mb-10 max-w-3xl text-[#666666]">
            Barrett Henry provides commercial real estate brokerage services
            across 44 Florida counties, from Tampa Bay and Central Florida to
            the Space Coast, Southwest Florida, and the Panhandle. Each market
            has its own drivers, opportunities, and challenges. Select a county
            below for a deep dive into that market.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="group flex flex-col rounded-lg border border-[#666666]/10 bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
              >
                {/* Icon + county name */}
                <div className="mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-black" />
                  <h3 className="text-lg font-bold text-black group-hover:text-black">
                    {market.county}
                  </h3>
                </div>

                {/* City names */}
                <p className="mb-2 text-sm font-semibold text-black">
                  {market.city}
                </p>

                {/* Brief description */}
                <p className="mb-4 line-clamp-3 text-sm text-[#666666]">
                  {market.description}
                </p>

                {/* Read more arrow */}
                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-black">
                  Explore market
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CTASection
        heading="Need Help Navigating These Markets?"
        body="Barrett Henry brings 23+ years of real estate experience to every commercial transaction. Whether you are buying, selling, leasing, or investing, get expert guidance tailored to your target market. Call (813) 733-7907."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: August 2026</p>
      </div>
    </>
  );
}
