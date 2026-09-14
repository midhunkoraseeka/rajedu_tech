"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface FaqEntry {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const instanceId = useId();

  return (
    <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${instanceId}-faq-panel-${index}`;
        const buttonId = `${instanceId}-faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-[15.5px] font-semibold text-blue-dark">{item.question}</span>
                <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors", isOpen ? "bg-lime text-blue-dark" : "bg-blue-light text-blue")}>
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-5 pb-5 pr-12">
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
