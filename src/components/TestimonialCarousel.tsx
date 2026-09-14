"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div>
      <ul
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {testimonials.map((t) => (
          <li
            key={t.id}
            data-card
            className="w-[85%] shrink-0 snap-start rounded-2xl border border-border bg-white p-7 sm:w-[46%] lg:w-[31%]"
          >
            <Quote className="h-7 w-7 text-lime" />
            <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">{t.quote}</blockquote>
            <p className="mt-5 text-[13.5px] font-semibold text-blue-dark">{t.attribution}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-blue-dark transition-colors hover:bg-blue-light"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-blue-dark transition-colors hover:bg-blue-light"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
