'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = {
  q: string;
  a: React.ReactNode;
};

type Props = {
  items: FAQItem[];
  className?: string;
};

export default function FAQAccordion({ items, className = '' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`divide-y divide-platinum/10 border-y border-platinum/10 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left transition-colors hover:text-gold"
              >
                <span className="font-display text-base sm:text-lg font-medium text-platinum group-hover:text-gold transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2.25}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 text-sm sm:text-[0.95rem] text-platinum/75 leading-relaxed max-w-3xl"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
