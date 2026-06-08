import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * Contact Page — three office locations, phone, email, lead form CTA.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Contact REMAX Commercial Florida | Barrett Henry",
  description:
    "Get in touch with Barrett Henry for commercial real estate services across Florida. Three REMAX Collective offices in Tampa, Largo, and Brandon. Call (813) 733-7907.",
  openGraph: {
    title: "Contact | REMAX Commercial Florida",
    description:
      "Reach Barrett Henry for CRE leasing, sales, and investment across Florida. Tampa Bay offices in Tampa, Largo, and Brandon.",
    url: "https://hencre.com/contact",
  },
};

/* -- Office data -- */
const OFFICES = [
  {
    name: "Tampa Office",
    address: "14310 N Dale Mabry Hwy Ste 100",
    city: "Tampa, FL 33618",
    mapUrl: "https://maps.google.com/?q=14310+N+Dale+Mabry+Hwy+Ste+100+Tampa+FL+33618",
  },
  {
    name: "Largo Office",
    address: "11200 Seminole Blvd Ste 202",
    city: "Largo, FL 33778",
    mapUrl: "https://maps.google.com/?q=11200+Seminole+Blvd+Ste+202+Largo+FL+33778",
  },
  {
    name: "Brandon Office",
    address: "417 Lithia Pinecrest Rd",
    city: "Brandon, FL 33511",
    mapUrl: "https://maps.google.com/?q=417+Lithia+Pinecrest+Rd+Brandon+FL+33511",
  },
] as const;

/* -- LocalBusiness schema for each office -- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hencre.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://hencre.com/contact" },
      ],
    },
    ...OFFICES.map((office) => ({
      "@type": "LocalBusiness" as const,
      name: `REMAX Commercial Florida — ${office.name}`,
      image: "https://hencre.com/logo.png",
      telephone: "+1-813-733-7907",
      email: "barrett@nowtb.com",
      address: {
        "@type": "PostalAddress" as const,
        streetAddress: office.address,
        addressLocality: office.city.split(",")[0],
        addressRegion: "FL",
        postalCode: office.city.split(" ").pop(),
      },
    })),
  ],
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex text-sm text-[#666666]">
          <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">Contact</li>
        </ol>
      </nav>

      <Hero
        title="Contact REMAX Commercial Florida"
        subtitle="Have a commercial real estate question? Need a broker opinion of value? Ready to make a move? Barrett Henry, REMAX Commercial Broker Associate, is here to help."
      />

      {/* ---- Direct contact info ---- */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="tel:+18137337907"
            className="inline-flex items-center gap-3 rounded-lg border border-[#E5E5E5] px-6 py-4 text-lg font-semibold text-black no-underline transition-shadow hover:shadow-md hover:no-underline"
          >
            <Phone className="h-5 w-5 text-black" />
            (813) 733-7907
          </a>
          <a
            href="mailto:barrett@nowtb.com"
            className="inline-flex items-center gap-3 rounded-lg border border-[#E5E5E5] px-6 py-4 text-lg font-semibold text-black no-underline transition-shadow hover:shadow-md hover:no-underline"
          >
            <Mail className="h-5 w-5 text-black" />
            barrett@nowtb.com
          </a>
        </div>
      </section>

      {/* ---- Office locations ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Office Locations
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[#666666]">
            Three REMAX Collective offices across Tampa Bay. Meet in person or connect
            by phone — whatever works for you.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((office) => (
              <a
                key={office.name}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-lg border border-[#E5E5E5] p-6 no-underline transition-shadow hover:shadow-md hover:no-underline"
              >
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-black" />
                <div>
                  <p className="text-lg font-bold text-black group-hover:text-black">
                    {office.name}
                  </p>
                  <p className="text-sm text-[#666666]">REMAX Collective</p>
                  <p className="text-sm text-[#666666]">{office.address}</p>
                  <p className="text-sm text-[#666666]">{office.city}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Lead form placeholder / CTA ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="lead-form">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Send Me a Message
          </h2>
          <p className="mt-3 text-[#666666]">
            Tell me about your commercial real estate needs. I respond within one
            business day — usually faster.
          </p>
          {/* LeadForm component will be mounted here */}
          <div className="mt-8 rounded-lg border border-[#E5E5E5] bg-white p-8">
            <p className="text-[#666666]">
              Contact form loading...
            </p>
            <p className="mt-4 text-sm text-[#666666]">
              Or call <a href="tel:+18137337907" className="font-semibold text-black">(813) 733-7907</a> or
              email <a href="mailto:barrett@nowtb.com" className="font-semibold text-black">barrett@nowtb.com</a> directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
