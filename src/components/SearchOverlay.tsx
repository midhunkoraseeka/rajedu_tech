"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Search,
  X,
  Clock,
  GraduationCap,
  MapPin,
  Building2,
  ClipboardCheck,
  Newspaper,
  Compass,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { searchSite, popularSearches, type SearchItem, type SearchCategory } from "@/lib/data/search";
import { SearchResultItem } from "@/components/search/SearchResultItem";
import { useMounted } from "@/lib/useMounted";
import { cn } from "@/lib/cn";

const RECENT_SEARCHES_KEY = "rajedutech:recent-searches";
const RECENT_SEARCHES_LIMIT = 6;

const categoryIcons: Record<SearchCategory, LucideIcon> = {
  Programme: GraduationCap,
  City: MapPin,
  College: Building2,
  Admissions: ClipboardCheck,
  Blog: Newspaper,
  Page: Compass,
};

function readRecentSearches(): SearchItem[] {
  try {
    const raw = window.localStorage.getItem(RECENT_SEARCHES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function writeRecentSearches(items: SearchItem[]) {
  try {
    window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(items));
  } catch {
    // localStorage unavailable (private mode, disabled storage) — fail silently.
  }
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';


export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [prevQuery, setPrevQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);
  const [wasOpen, setWasOpen] = useState(open);
  const mounted = useMounted();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setRecentSearches(readRecentSearches());
    }
  }

  useEffect(() => {
    if (!open) return;

    const t = setTimeout(() => inputRef.current?.focus(), 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
          (el) => el.offsetParent !== null
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open, onClose]);

  const results = useMemo(() => searchSite(query), [query]);

  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  const recordRecentSearch = useCallback((item: SearchItem) => {
    setRecentSearches((prev) => {
      const next = [item, ...prev.filter((p) => p.href !== item.href)].slice(0, RECENT_SEARCHES_LIMIT);
      writeRecentSearches(next);
      return next;
    });
  }, []);

  const handleNavigate = useCallback(
    (item: SearchItem) => {
      recordRecentSearch(item);
      onClose();
    },
    [recordRecentSearch, onClose]
  );

  function handleClearRecent() {
    setRecentSearches([]);
    writeRecentSearches([]);
  }

  function handleChipClick(term: string) {
    setQuery(term);
    inputRef.current?.focus();
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      const item = results[activeIndex];
      if (item) {
        e.preventDefault();
        handleNavigate(item);
        router.push(item.href);
      }
    }
  }

  const hasQuery = query.trim().length > 0;

  const backdropVariants = {
    hidden: { opacity: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" as const } },
    visible: { opacity: 1, transition: reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" as const } },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: reduceMotion ? 1 : 0.97,
      y: reduceMotion ? 0 : 8,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 },
    },
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="search-overlay-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{
            background: "rgba(18, 39, 94, 0.45)",
            backdropFilter: "blur(14px) saturate(0.82)",
            WebkitBackdropFilter: "blur(14px) saturate(0.82)",
          }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            onClick={(e) => e.stopPropagation()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            className="relative z-[9999] flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl shadow-blue-dark/20 sm:h-auto sm:max-h-[min(700px,calc(100vh-48px))] sm:w-[min(800px,calc(100vw-48px))] sm:rounded-[24px] sm:border sm:border-border"
          >
            <div className="flex shrink-0 items-center gap-3 border-b border-border px-5 py-4 sm:px-6">
              <Search className="h-5 w-5 shrink-0 text-blue" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search programmes, colleges, cities, articles…"
                aria-label="Search programmes, colleges, cities, articles"
                autoComplete="off"
                className="w-full bg-transparent text-[16px] text-ink outline-none placeholder:text-ink-soft/70"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="flex shrink-0 flex-col items-center gap-1 rounded-xl px-2 py-1 text-ink-soft transition-colors hover:bg-blue-light hover:text-blue"
              >
                <X className="h-5 w-5 sm:h-4 sm:w-4" />
                <span className="hidden text-[9.5px] font-semibold uppercase tracking-wide sm:block">ESC</span>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4 pb-6 sm:px-4 sm:pb-6">
              {hasQuery ? (
                results.length > 0 ? (
                  <ul className="flex flex-col gap-0.5 py-1">
                    {results.map((item, i) => (
                      <li key={item.id}>
                        <SearchResultItem
                          icon={categoryIcons[item.category]}
                          title={item.title}
                          category={item.category}
                          description={item.description}
                          href={item.href}
                          active={i === activeIndex}
                          onNavigate={() => handleNavigate(item)}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center gap-5 px-4 py-10 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-light text-blue">
                      <Search className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-blue-dark">No results found</p>
                      <p className="mt-1.5 max-w-sm text-[13.5px] leading-relaxed text-ink-soft">
                        Try searching for a program, college, city, or article.
                      </p>
                    </div>
                    <PopularSearches onSelect={handleChipClick} className="w-full max-w-md" />
                  </div>
                )
              ) : (
                <div className="flex flex-col gap-6 px-2 py-3 sm:px-2">
                  <PopularSearches onSelect={handleChipClick} />

                  {recentSearches.length > 0 ? (
                    <div>
                      <div className="mb-2 flex items-center justify-between px-1">
                        <span className="text-[12px] font-bold uppercase tracking-wide text-ink-soft">
                          Recent Searches
                        </span>
                        <button
                          type="button"
                          onClick={handleClearRecent}
                          className="text-[12.5px] font-semibold text-blue hover:underline underline-offset-4"
                        >
                          Clear all
                        </button>
                      </div>
                      <ul className="flex flex-col gap-0.5">
                        {recentSearches.map((item) => (
                          <li key={item.id}>
                            <button
                              type="button"
                              onClick={() => {
                                handleNavigate(item);
                                router.push(item.href);
                              }}
                              className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-blue-light"
                            >
                              <Clock className="h-4 w-4 shrink-0 text-ink-soft" />
                              <span className="min-w-0 flex-1 truncate text-[14px] font-medium text-ink">
                                {item.title}
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-soft opacity-0 transition-opacity group-hover:opacity-100" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

function PopularSearches({ onSelect, className }: { onSelect: (term: string) => void; className?: string }) {
  return (
    <div className={className}>
      <span className="mb-2.5 block px-1 text-[12px] font-bold uppercase tracking-wide text-ink-soft">
        Popular Searches
      </span>
      <div className="flex flex-wrap gap-2 px-1">
        {popularSearches.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => onSelect(term)}
            className={cn(
              "flex items-center gap-1.5 rounded-full border border-border bg-blue-light/60 px-3.5 py-2 text-[13px] font-semibold text-blue-dark transition-colors hover:border-blue hover:bg-blue-light"
            )}
          >
            <ArrowUpRight className="h-3.5 w-3.5 text-blue" />
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
