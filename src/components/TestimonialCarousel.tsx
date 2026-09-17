"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

const AUTOPLAY_SPEED_PX_PER_SEC = 34;
const MANUAL_NAV_RESUME_DELAY_MS = 2600;

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const manualResumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const setWidthRef = useRef(0);

  const canLoop = testimonials.length > 1;
  // Two copies back-to-back let the drift wrap from the end of the first
  // set straight into the (visually identical) start of the second, so the
  // reset is imperceptible instead of a jarring snap back to the start.
  const loopItems = canLoop ? [...testimonials, ...testimonials] : testimonials;

  const measureSetWidth = useCallback(() => {
    const firstCard = cardRefs.current[0];
    const firstOfSecondSet = cardRefs.current[testimonials.length];
    if (!firstCard || !firstOfSecondSet) return 0;
    return firstOfSecondSet.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;
  }, [testimonials.length]);

  useEffect(() => {
    setWidthRef.current = measureSetWidth();
    function handleResize() {
      setWidthRef.current = measureSetWidth();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureSetWidth, testimonials]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !canLoop) return;
    let frameId: number;
    let lastTime: number | null = null;

    function tick(time: number) {
      if (!track) return;
      if (lastTime === null) lastTime = time;
      const deltaMs = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        track.scrollLeft += (AUTOPLAY_SPEED_PX_PER_SEC * deltaMs) / 1000;
      }
      const setWidth = setWidthRef.current;
      if (setWidth > 0) {
        if (track.scrollLeft >= setWidth) track.scrollLeft -= setWidth;
        else if (track.scrollLeft < 0) track.scrollLeft += setWidth;
      }
      frameId = requestAnimationFrame(tick);
    }
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, canLoop]);

  useEffect(() => {
    function handleVisibility() {
      setIsPaused(document.hidden);
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    return () => {
      if (manualResumeTimeout.current) clearTimeout(manualResumeTimeout.current);
    };
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    const card = cardRefs.current[0];
    if (!track || !card) return;
    const amount = card.getBoundingClientRect().width + 24; // matches gap-6

    setIsPaused(true);
    if (manualResumeTimeout.current) clearTimeout(manualResumeTimeout.current);
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
    manualResumeTimeout.current = setTimeout(() => setIsPaused(false), MANUAL_NAV_RESUME_DELAY_MS);
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <ul ref={trackRef} className="no-scrollbar flex gap-6 overflow-x-auto pb-2">
        {loopItems.map((t, i) => (
          <li
            key={`${t.id}-${i}`}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="w-[85%] shrink-0 rounded-2xl border border-border bg-white p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-dark/5 sm:w-[46%] lg:w-[31%]"
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
          onClick={() => scrollByCard(-1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-blue-dark transition-colors hover:bg-blue-light"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-blue-dark transition-colors hover:bg-blue-light"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
