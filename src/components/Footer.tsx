import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

/* -------------------------------------------------------------------
 * Footer — three REMAX Collective offices, contact info, tagline,
 * cross-link to nowtb.com, and dynamic copyright year.
 * Server component (no interactivity needed).
 * ----------------------------------------------------------------- */

const OFFICES = [
  {
    name: "Tampa Office",
    line1: "REMAX Collective",
    line2: "Tampa, FL",
  },
  {
    name: "Largo Office",
    line1: "REMAX Collective",
    line2: "Largo, FL",
  },
  {
    name: "Brandon Office",
    line1: "REMAX Collective",
    line2: "Brandon, FL",
  },
] as const;

export default function Footer() {
  /* Build the year at render time on the server */
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* ---- REMAX Commercial tagline bar ---- */}
      <div className="bg-accent-blue py-4 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/80">
          REMAX Commercial
        </p>
        <p className="text-lg font-bold tracking-widest uppercase mt-1">
          A BETTER WAY IN COMMERCIAL REAL ESTATE
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ---- Office grid ---- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((office) => (
            <div key={office.name} className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
              <div>
                <p className="font-semibold">{office.name}</p>
                <p className="text-sm text-white/70">{office.line1}</p>
                <p className="text-sm text-white/70">{office.line2}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Contact & links ---- */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          {/* Contact details */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="tel:+18137337907"
              className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
            >
              <Phone className="h-4 w-4" />
              (813) 733-7907
            </a>
            <a
              href="mailto:barrett@nowtb.com"
              className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
            >
              <Mail className="h-4 w-4" />
              barrett@nowtb.com
            </a>
            <a
              href="https://nowtb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
            >
              <ExternalLink className="h-4 w-4" />
              nowtb.com
            </a>
          </div>

          {/* REMAX Commercial link */}
          <a
            href="https://www.remaxcommercial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 no-underline hover:text-white hover:no-underline"
          >
            <ExternalLink className="h-4 w-4" />
            remaxcommercial.com
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/60">
            &copy; {year} HenCRE &mdash; Barrett Henry, REALTOR&reg; &amp;
            Broker Associate at REMAX Collective. REMAX Commercial. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/40">
            Each REMAX office is independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  );
}
