import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SchemaOrg from "@/components/SchemaOrg";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Leon County Commercial Real Estate | HenCRE",
  description:
    "Commercial real estate in Leon County, FL -- Tallahassee, the state capital. Government, university, healthcare, and office. Barrett Henry, Broker Associate at REMAX Collective.",
  alternates: { canonical: "https://hencre.com/markets/leon" },
  openGraph: {
    title: "Leon County Commercial Real Estate | HenCRE",
    description:
      "Leon County is home to Tallahassee -- Florida&apos;s state capital, FSU, FAMU, and a government-driven office market. Barrett Henry, REMAX Collective.",
    url: "https://hencre.com/markets/leon",
    siteName: "HenCRE",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What drives commercial real estate demand in Leon County?",
    answer:
      "Leon County&apos;s commercial market is anchored by three institutional pillars: the State of Florida government, Florida State University (FSU), and Florida A&M University (FAMU). State government employment is the single largest demand driver for office space -- thousands of state agency workers require downtown and suburban office locations throughout the Tallahassee metro. FSU and FAMU together enroll over 50,000 students and generate demand for student housing, retail, and food-and-beverage commercial. Tallahassee Memorial Healthcare and Capital Health Plan anchor the healthcare sector.",
  },
  {
    question: "What are the most active commercial submarkets in Leon County?",
    answer:
      "Downtown Tallahassee around the State Capitol complex is the government office core. The Apalachee Parkway (US-27) corridor east of downtown is a major retail and service commercial strip. The Capital Circle corridor -- both Capital Circle NE and Capital Circle SW -- is the suburban office and retail ring connecting Tallahassee&apos;s major corridors. The Midtown Tallahassee area near FSU&apos;s campus has undergone significant redevelopment with restaurant, retail, and mixed-use. The Governor&apos;s Square area on Apalachee Parkway is a major retail anchor.",
  },
  {
    question: "What property types perform best in Leon County?",
    answer:
      "Government and professional office consistently performs well in Tallahassee given the permanent state employment base -- vacancy spikes tend to be limited to specific buildings rather than market-wide. Retail anchored by necessity commercial and university-adjacent food-and-beverage is stable. Medical office near Tallahassee Memorial and Capital Regional Medical Centers is in steady demand. Multifamily and student-oriented housing near FSU and FAMU is structurally undersupplied. Industrial is a smaller component, concentrated near the Tallahassee International Airport.",
  },
  {
    question: "How does Leon County compare to other Florida markets?",
    answer:
      "Leon County is distinct from most Florida CRE markets because its demand base is government and education rather than residential growth or tourism. This creates a stable but not high-growth commercial market -- rents and occupancy track more with state budget cycles than with statewide population trends. Cap rates in Tallahassee office and retail have historically been slightly higher than coastal Florida markets, reflecting lower growth assumptions but also a more durable institutional tenant base. Investors seeking stable cash flow from government-tenanted office or necessity retail often find Tallahassee attractive for those reasons.",
  },
  {
    question: "How does Barrett Henry approach commercial real estate in Leon County?",
    answer:
      "Barrett Henry is a Broker Associate at REMAX Collective with 23+ years of real estate experience and a statewide Florida commercial practice. For Leon County and Tallahassee assignments, he provides market context, investment analysis support, and professional introductions to vetted North Florida specialists. His statewide platform makes him an effective first contact for investors or tenants with Tallahassee-area commercial interests.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Markets", item: "https://hencre.com/markets" },
        { "@type": "ListItem", position: 3, name: "Leon County", item: "https://hencre.com/markets/leon" },
      ],
    },
    {
      "@type": "Service",
      name: "Commercial Real Estate Services -- Leon County, FL",
      description:
        "Commercial real estate brokerage in Leon County, Florida (Tallahassee). Government office, university retail, healthcare, and investment from Barrett Henry, REMAX Collective.",
      provider: {
        "@type": "Person",
        name: "Barrett Henry",
        jobTitle: "Broker Associate",
        email: "barrett@hencre.com",
        telephone: "+18137337907",
        worksFor: { "@type": "Organization", name: "REMAX Collective" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "Leon County, Florida" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const relatedLinks = [
  { href: "/markets/gadsden", title: "Gadsden County Commercial Real Estate" },
  { href: "/markets/franklin", title: "Franklin County Commercial Real Estate" },
  { href: "/markets/columbia", title: "Columbia County Commercial Real Estate" },
  { href: "/commercial/office-space", title: "Office Space" },
  { href: "/services/investment-sales", title: "Investment Property Sales" },
  { href: "/markets", title: "All Florida Markets" },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Leon County", href: "/markets/leon" },
        ]}
      />
      <Hero
        title="Leon County Commercial Real Estate"
        subtitle="Tallahassee is Florida&apos;s state capital -- a government-anchored office market, university-driven retail, and a stable commercial real estate base that tracks institutional demand rather than tourism cycles. Barrett Henry, REMAX Collective."
        ctaText="Start the Conversation"
        ctaHref="/contact"
      />
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 not-prose">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer: What defines Leon County&apos;s commercial real estate market?</h2>
          <p className="text-blue-800 text-sm leading-relaxed">
            Leon County is the Tallahassee market -- Florida&apos;s state capital, home to FSU, FAMU, and thousands of
            state government employees. Commercial real estate here is anchored by government office, university retail,
            and healthcare rather than tourism or population-growth-driven residential demand. It is a stable, durable
            market that rewards investors looking for government-tenanted or necessity-retail income profiles.
          </p>
        </section>

        <section>
          <h2>Leon County Commercial Real Estate Market Overview</h2>
          <p>
            Tallahassee occupies a unique position in Florida&apos;s commercial real estate landscape. It is the state capital,
            meaning the largest employers are state government agencies whose real estate needs are determined by
            legislative appropriations rather than market cycles. Florida State University and Florida A&M University
            together represent a combined enrollment exceeding 50,000 students, generating student housing, food-and-beverage,
            and university-adjacent retail demand that is structurally durable regardless of broader economic conditions.
          </p>
          <div className="my-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
              alt="Tallahassee professional office and government building corridor"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <p>
            What Tallahassee is not: a high-growth residential spillover market or a tourism-driven economy. Population
            growth here tracks FSU enrollment cycles and state hiring patterns more than it tracks the statewide in-migration
            story that defines markets like <Link href="/markets/pasco">Pasco</Link>, <Link href="/markets/st-johns">
            St. Johns</Link>, and <Link href="/markets/lee">Lee County</Link>. For the right investor -- one seeking
            stable government-tenanted office or necessity retail cash flows -- that stability is exactly what makes
            Tallahassee valuable.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-200 p-6 my-8 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Commercial Areas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Downtown Tallahassee / State Capitol Complex</h3>
              <p className="text-gray-700 text-sm mt-1">
                The government office core. State agency headquarters, law firms, lobbying firms, and professional services
                concentrate near the Capitol. Office demand here is driven by state government employment cycles and the
                legislative session calendar (January through March drives peak activity).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Apalachee Parkway (US-27) Corridor</h3>
              <p className="text-gray-700 text-sm mt-1">
                The primary retail and commercial spine east of downtown. Governor&apos;s Square mall, power center retail,
                restaurants, and service commercial. The county&apos;s highest-traffic retail corridor outside the Capitol area.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Midtown Tallahassee / FSU Campus Edge</h3>
              <p className="text-gray-700 text-sm mt-1">
                Active redevelopment zone near FSU. Restaurant, bar, retail, and mixed-use development serves the
                university community. Consistent foot traffic from the student population makes this a viable
                food-and-beverage and retail destination.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Capital Circle Corridor</h3>
              <p className="text-gray-700 text-sm mt-1">
                Suburban office parks and retail along Capital Circle NE and SW. Provides suburban office options for
                agencies and private firms that need proximity to downtown without downtown land costs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Active Property Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              {
                title: "Government & Professional Office",
                desc: "The county&apos;s dominant commercial category. State agencies, lobbying firms, legal practices, and professional associations concentrate near the Capitol and along the Capital Circle corridor.",
              },
              {
                title: "University Retail & Food Service",
                desc: "FSU and FAMU generate consistent demand for student-adjacent retail, restaurants, and entertainment. Midtown Tallahassee has the strongest student-driven commercial concentration.",
              },
              {
                title: "Medical Office & Healthcare",
                desc: "Tallahassee Memorial Healthcare and Capital Regional anchor the healthcare market. Medical office and specialist practices concentrate along the Centerville Road and Thomasville Road corridors.",
              },
              {
                title: "Multifamily",
                desc: "Student housing near FSU and FAMU is structurally undersupplied relative to enrollment. Non-student multifamily benefits from the government workforce employment base.",
              },
            ].map((type) => (
              <div key={type.title} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Demand Drivers</h2>

          <h3>State Government Employment</h3>
          <p>
            Florida&apos;s state capital employment is the most resilient commercial demand driver in the market -- it does
            not disappear in recessions, does not relocate to lower-cost markets, and creates consistent need for
            <Link href="/commercial/office-space"> office space</Link>, professional services infrastructure, and
            government-supporting retail. For investors in government-tenanted office, Tallahassee offers the tenant
            quality of credit-grade occupancy in a smaller market with less institutional competition than Tampa or Orlando.
          </p>

          <h3>Florida State and Florida A&M Universities</h3>
          <p>
            FSU and FAMU generate student housing, Midtown retail, and food-and-beverage demand that runs on an academic
            calendar rather than an economic cycle. The Midtown and Collegetown corridors benefit from consistent enrollment
            regardless of broader market conditions. Compare this to <Link href="/markets/alachua">Alachua County&apos;s</Link>
            University of Florida-driven market for context on how universities shape commercial real estate in Florida.
          </p>

          <h3>Healthcare and Life Sciences</h3>
          <p>
            Tallahassee Memorial Healthcare, Capital Regional Medical Center, and the FSU College of Medicine together
            create a healthcare employment base that supports medical office, ancillary care facilities, and healthcare
            retail. The medical corridor along Centerville Road is the county&apos;s most active
            <Link href="/services/investment-sales"> investment sales</Link> target for healthcare-anchored commercial buyers.
          </p>
        </section>

        <section>
          <h2>How Barrett Henry Works Leon County</h2>
          <p>
            Barrett approaches Leon County as part of his statewide Florida commercial practice, serving all 67 Florida
            counties as a Broker Associate at REMAX Collective with 23+ years of experience. For Tallahassee assignments,
            he provides investment analysis, tenant representation support, and professional introductions to vetted North
            Florida specialists.
          </p>
          <ul>
            <li>
              <strong>Investment Sales:</strong> Evaluating Tallahassee office, retail, and medical assets for
              buyers and sellers through <Link href="/services/investment-sales">investment sales services</Link>.
            </li>
            <li>
              <strong>North Florida Context:</strong> Connecting Tallahassee opportunities to the broader North Florida
              commercial market including <Link href="/markets/gadsden">Gadsden</Link> and
              <Link href="/markets/franklin"> Franklin</Link> counties.
            </li>
          </ul>
          <p>
            Contact Barrett at (813) 733-7907 or through the <Link href="/contact">contact page</Link>.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions: Leon County Commercial Real Estate</h2>
          <FAQAccordion items={faqItems} />
        </section>

        <section id="lead-form" className="my-10">
          <h2>Talk to Barrett About Leon County</h2>
          <p>
            Whether you are evaluating government office, university retail, or healthcare investment in Tallahassee,
            Barrett provides professional guidance and statewide market context. Fill out the form and he will follow
            up directly.
          </p>
          <LeadForm />
        </section>

        <RelatedLinks links={relatedLinks} />

        <p className="text-sm text-gray-500 mt-8">Last updated: August 2026</p>
      </main>
      <CTASection
        heading="Ready to Talk Commercial Real Estate in Leon County?"
        body="Barrett Henry brings 23+ years of commercial real estate experience and statewide Florida context to government office, university retail, and healthcare investment in Tallahassee."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
