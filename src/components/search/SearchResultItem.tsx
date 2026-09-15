"use client";

import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function SearchResultItem({
  icon: Icon,
  title,
  category,
  description,
  href,
  active,
  onNavigate,
}: {
  icon: LucideIcon;
  title: string;
  category?: string;
  description?: string;
  href: string;
  active?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors",
        active ? "bg-blue-light" : "hover:bg-blue-light"
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-blue transition-colors",
          active ? "bg-white" : "bg-blue-light group-hover:bg-white"
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate text-[14.5px] font-semibold text-ink">{title}</span>
          {category ? (
            <span className="shrink-0 rounded-full bg-blue-light px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-blue">
              {category}
            </span>
          ) : null}
        </span>
        {description ? (
          <span className="mt-0.5 block truncate text-[12.5px] text-ink-soft">{description}</span>
        ) : null}
      </span>
      <ArrowUpRight
        className={cn(
          "mt-2 h-4 w-4 shrink-0 text-blue transition-all duration-150",
          active ? "translate-x-0.5 -translate-y-0.5 opacity-100" : "opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        )}
      />
    </Link>
  );
}
