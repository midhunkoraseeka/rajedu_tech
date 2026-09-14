"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { programs } from "@/lib/data/programs";
import { cities } from "@/lib/data/cities";
import { colleges } from "@/lib/data/colleges";
import { blogPosts } from "@/lib/data/blog";

interface SearchResult {
  label: string;
  sublabel: string;
  href: string;
}

function buildIndex(): SearchResult[] {
  const items: SearchResult[] = [];

  for (const p of programs) {
    items.push({ label: p.fullName, sublabel: "Programme", href: `/management-quota/${p.slug}` });
  }
  for (const c of cities) {
    items.push({ label: `Colleges in ${c.name}`, sublabel: "City", href: `/colleges/${c.slug}` });
  }
  for (const college of colleges) {
    items.push({ label: college.name, sublabel: `College · ${college.location}`, href: `/colleges/${college.slug}` });
  }
  for (const post of blogPosts) {
    items.push({ label: post.title, sublabel: "Blog article", href: `/blog/${post.slug}` });
  }
  items.push({ label: "Get admission guidance", sublabel: "Enquiry", href: "/enquiry" });
  items.push({ label: "Admission process", sublabel: "Page", href: "/admission-process" });
  items.push({ label: "Frequently asked questions", sublabel: "Page", href: "/faq" });

  return items;
}

const index = buildIndex();

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [wasOpen, setWasOpen] = useState(open);
  const inputRef = useRef<HTMLInputElement>(null);

  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setQuery("");
  }

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-blue-dark/40 px-4 pt-24 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-blue-dark/20"
      >
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-ink-soft" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, colleges, cities, articles…"
            className="w-full text-[15px] text-ink outline-none placeholder:text-ink-soft/70"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="shrink-0 rounded-full p-1.5 text-ink-soft hover:bg-blue-light">
            <X className="h-4 w-4" />
          </button>
        </div>
        {query.trim() ? (
          <ul className="max-h-80 overflow-y-auto py-2">
            {results.length > 0 ? (
              results.map((r) => (
                <li key={r.href + r.label}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-blue-light"
                  >
                    <span className="text-[14.5px] font-medium text-ink">{r.label}</span>
                    <span className="shrink-0 text-[12.5px] text-ink-soft">{r.sublabel}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-5 py-6 text-[14px] text-ink-soft">
                No matches. Try a programme, city or college name.
              </li>
            )}
          </ul>
        ) : (
          <div className="px-5 py-6 text-[13.5px] text-ink-soft">
            Try &ldquo;MBBS&rdquo;, &ldquo;Hyderabad&rdquo;, or a college name.
          </div>
        )}
      </div>
    </div>
  );
}
