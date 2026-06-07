import Link from "next/link";

/* -------------------------------------------------------------------
 * CTASection — reusable call-to-action block.
 * "primary" variant uses accentBlue, "urgency" uses softRed.
 * Server component.
 * ----------------------------------------------------------------- */

interface CTASectionProps {
  heading: string;
  body: string;
  buttonText: string;
  buttonHref: string;
  /** Visual variant: primary (blue) or urgency (red) */
  variant?: "primary" | "urgency";
}

export default function CTASection({
  heading,
  body,
  buttonText,
  buttonHref,
  variant = "primary",
}: CTASectionProps) {
  /* Pick background color based on variant — primary uses REMAX Commercial navy */
  const bgClass = variant === "urgency" ? "bg-soft-navy" : "bg-[#0a2441]";

  return (
    <section className={`${bgClass} px-4 py-16 text-center text-white sm:py-20`}>
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-lg text-white/90">{body}</p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-navy no-underline shadow-lg transition-colors hover:bg-warm-white hover:no-underline"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
