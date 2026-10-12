"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import type { FaqQuestionData } from "@/lib/content/faq";

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqQuestionData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  const items = item.items ?? [];

  return (
    <div className="rounded-[20px] border border-[#F0F0F3] bg-white shadow-[0_4px_20px_-14px_rgba(11,15,43,0.1)]">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-[26px] py-5 text-left"
      >
        <h4 className="flex-1 text-[15.5px] font-bold leading-[1.35] text-navy">{item.question}</h4>
        <ChevronDownIcon
          className={`flex-shrink-0 text-red transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="px-[26px] pb-[26px]">
          <p className="text-[13.5px] leading-[1.6] text-gray-text">{item.intro}</p>

          {items.length > 0 && (
            <ul className="mt-3 space-y-2">
              {items.map((listItem) => (
                <li key={listItem.label} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-gray-text">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                  {listItem.label}
                </li>
              ))}
            </ul>
          )}

          {item.outro && <p className="mt-3 text-[13.5px] leading-[1.6] text-gray-text">{item.outro}</p>}
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FaqQuestionData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[760px] px-14 py-[90px]">
      <div className="space-y-4">
        {items.map((item, index) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
          />
        ))}
      </div>
    </section>
  );
}
