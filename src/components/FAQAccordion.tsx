"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------
 * FAQAccordion — accessible accordion for FAQ sections.
 * Supports expand/collapse with smooth animation and proper ARIA.
 * ----------------------------------------------------------------- */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  /* Track which index is open (null = all closed) */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* Generate a stable base ID for aria attributes */
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="mx-auto max-w-3xl divide-y divide-[#666666]/10 rounded-lg border border-[#666666]/10 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `${baseId}-heading-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={index}>
            {/* ---- Question button ---- */}
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-black transition-colors hover:bg-[#F5F5F5]"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-black transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            {/* ---- Answer panel ---- */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-4 text-sm leading-relaxed text-[#666666]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
