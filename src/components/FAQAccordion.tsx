/* -------------------------------------------------------------------
 * FAQAccordion — SEO-friendly FAQ section.
 * All answers are visible by default so crawlers can index them.
 * No client-side JavaScript — pure server component.
 * ----------------------------------------------------------------- */

// Props interface — same as before so no page files need changing
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[#666666]/10 rounded-lg border border-[#666666]/10 bg-white">
      {items.map((item, index) => (
        <div key={index} className="px-5 py-4">
          {/* Question heading — styled to match previous design */}
          <h3 className="text-base font-semibold text-black">
            {item.question}
          </h3>

          {/* Answer — always visible for SEO crawlers */}
          <p className="mt-2 text-sm leading-relaxed text-[#666666]">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
