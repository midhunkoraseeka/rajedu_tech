"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { navItems } from "@/lib/data/navigation";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { MobileNav } from "./MobileNav";
import { SearchOverlay } from "./SearchOverlay";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const searchTriggerRef = useRef<HTMLButtonElement | null>(null);

  function openSearch(e: React.MouseEvent<HTMLButtonElement>) {
    searchTriggerRef.current = e.currentTarget;
    setSearchOpen(true);
  }

  function closeSearch() {
    setSearchOpen(false);
    searchTriggerRef.current?.focus();
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "shadow-[0_4px_20px_rgba(16,28,54,0.08)] border-b border-transparent" : "border-b border-border"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center whitespace-nowrap px-2 py-2 text-[13.5px] font-semibold transition-colors xl:px-2.5 xl:text-[14px]",
                      active ? "text-blue" : "text-ink hover:text-blue"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-lime transition-transform duration-200 origin-left xl:left-2.5 xl:right-2.5",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                  {item.children ? (
                    <div className="pointer-events-none absolute left-0 top-full z-10 w-72 translate-y-1 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-xl shadow-blue-dark/10 transition-all duration-150 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-blue-light"
                        >
                          <span className="block text-[14px] font-semibold text-blue-dark">{child.label}</span>
                          {child.description ? (
                            <span className="block text-[12.5px] text-ink-soft">{child.description}</span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search the site"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-blue-light hover:text-blue"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="hidden items-center gap-1.5 rounded-full px-2 py-2 text-[13.5px] font-semibold text-ink-soft transition-colors hover:bg-blue-light hover:text-blue xl:flex"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>
          <Button href="/enquiry" withArrow className="ml-1 whitespace-nowrap">
            <span className="xl:hidden">Get Guidance</span>
            <span className="hidden xl:inline">Get Admission Guidance</span>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search the site"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <MobileNav />
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </header>
  );
}
