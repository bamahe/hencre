import Link from "next/link";

/* -------------------------------------------------------------------
 * CTASection — reusable call-to-action block.
 * Black/white only. No color variants.
 * Server component.
 * ----------------------------------------------------------------- */

interface CTASectionProps {
  heading: string;
  body: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({
  heading,
  body,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="bg-black px-4 py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-lg text-white/90">{body}</p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-black no-underline shadow-lg transition-colors hover:bg-[#E5E5E5] hover:no-underline"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
