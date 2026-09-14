"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Hi Raj Edutech, I'd like guidance on management quota admissions.")}
      aria-label="Talk to an advisor on WhatsApp"
      className={
        "sticky-mobile-cta fixed bottom-5 right-5 z-30 flex items-center gap-2.5 rounded-full bg-lime px-5 py-4 font-semibold text-blue-dark shadow-xl shadow-blue-dark/20 transition-all duration-300 hover:bg-lime-dark hover:text-white sm:bottom-7 sm:right-7 " +
        (visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")
      }
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden text-[14px] sm:inline">Talk to an Advisor</span>
    </a>
  );
}
