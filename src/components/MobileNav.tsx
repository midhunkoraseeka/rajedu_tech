"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/lib/data/navigation";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-nav-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-nav-open");
    };
  }, [open]);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-blue-dark"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div id="mobile-nav-panel" className="fixed inset-x-0 top-[76px] bottom-0 z-30 overflow-y-auto bg-white">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-6">
            <ul className="flex flex-col divide-y divide-border">
              {navItems.map((item) => (
                <li key={item.href} className="py-3">
                  <Link href={item.href} className="block text-[19px] font-bold text-blue-dark">
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mt-2.5 flex flex-col gap-2.5 pl-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="text-[15px] text-ink-soft">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/enquiry"
                className="rounded-full bg-blue px-5 py-3.5 text-center text-[15px] font-semibold text-white"
              >
                Get Admission Guidance
              </Link>
              <a
                href={whatsappLink("Hi Raj Edutech, I'd like guidance on management quota admissions.")}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-border-strong px-5 py-3.5 text-[15px] font-semibold text-blue-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 py-2 text-[15px] font-semibold text-ink-soft"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
