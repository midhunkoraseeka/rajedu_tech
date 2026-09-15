"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { colleges } from "@/lib/data/colleges";
import { cities, type CitySlug } from "@/lib/data/cities";
import { programs, type ProgramSlug } from "@/lib/data/programs";
import { CollegeCard } from "./CollegeCard";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

export function CollegeExplorer({
  initialCity,
  initialProgram,
}: {
  initialCity?: CitySlug;
  initialProgram?: ProgramSlug;
}) {
  const [city, setCity] = useState<CitySlug | "all">(initialCity ?? "all");
  const [program, setProgram] = useState<ProgramSlug | "all">(initialProgram ?? "all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return colleges.filter((c) => {
      const cityMatch = city === "all" || c.city === city;
      const programMatch = program === "all" || c.programs.includes(program);
      const queryMatch = !q || c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q);
      return cityMatch && programMatch && queryMatch;
    });
  }, [city, program, query]);

  const enquiryHref = useMemo(() => {
    const params = new URLSearchParams();
    if (program !== "all") params.set("program", program);
    if (city !== "all") params.set("city", city);
    const qs = params.toString();
    return qs ? `/enquiry?${qs}` : "/enquiry";
  }, [city, program]);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCity("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors",
              city === "all"
                ? "border-blue bg-blue text-white"
                : "border-border bg-white text-blue hover:border-blue hover:bg-blue-light"
            )}
          >
            All Cities
          </button>
          {cities.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCity(c.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors",
                city === c.slug
                  ? "border-blue bg-blue text-white"
                  : "border-border bg-white text-blue hover:border-blue hover:bg-blue-light"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setProgram("all")}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                program === "all" ? "border-lime bg-lime-light text-lime-dark" : "border-border text-ink-soft hover:border-border-strong"
              )}
            >
              All Programmes
            </button>
            {programs.map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setProgram(p.slug)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                  program === p.slug ? "border-lime bg-lime-light text-lime-dark" : "border-border text-ink-soft hover:border-border-strong"
                )}
              >
                {p.shortName}
              </button>
            ))}
          </div>

          <label className="relative w-full sm:w-64">
            <span className="sr-only">Search colleges</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges…"
              className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-[13.5px] text-ink outline-none focus:border-blue"
            />
          </label>
        </div>
      </div>

      {results.length > 0 ? (
        <>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((college) => (
              <CollegeCard key={college.slug} college={college} />
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-[14px] text-ink-soft">
              Looking for a college that isn&apos;t listed here?
            </p>
            <Button href={enquiryHref} variant="outline" withArrow>
              Many More
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border-strong p-8">
          <h2 className="text-lg font-bold text-blue-dark">No colleges match that combination yet</h2>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-soft">
            Our directory is still being built out for this combination. Talk
            to an advisor and we&apos;ll share current options directly.
          </p>
          <Button href={enquiryHref} variant="outline" withArrow>
            Many More
          </Button>
        </div>
      )}
    </div>
  );
}
