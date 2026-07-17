import Link from "next/link";

/* -------------------------------------------------------------------
 * CTASection — reusable call-to-action block.
 * Black/white only. No color variants.
 * Server component.
 * ----------------------------------------------------------------- */

interface CTASectionProps {
  heading: string;
  /* Support both prop patterns used across the site */
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  /* Alternate pattern used by content-engine-generated posts */
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTASection({
  heading,
  body,
  buttonText,
  buttonHref,
  subheading,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  /* Normalize: prefer explicit body/button props, fall back to alternate pattern */
  const displayBody = body ?? subheading ?? "";
  const mainLabel = buttonText ?? primaryCta?.label ?? "Contact Barrett";
  const mainHref = buttonHref ?? primaryCta?.href ?? "/contact";

  return (
    <section className="bg-black px-4 py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-lg text-white/90">{displayBody}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={mainHref}
            className="inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-black no-underline shadow-lg transition-colors hover:bg-[#E5E5E5] hover:no-underline"
          >
            {mainLabel}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-block rounded-lg border border-white px-8 py-3 text-base font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
