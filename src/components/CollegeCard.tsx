import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import type { College } from "@/lib/data/colleges";

export function CollegeCard({ college }: { college: College }) {
  return (
    <Link
      href={`/colleges/${college.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-lg hover:shadow-blue-dark/10"
    >
      <div className="flex h-32 items-center justify-center bg-blue-light">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue shadow-sm">
          <Building2 className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-5">
        <span className="text-[12px] font-bold uppercase tracking-wide text-lime-dark">{college.shortName}</span>
        <h3 className="text-[15.5px] font-bold leading-snug text-blue-dark">{college.name}</h3>
        <span className="mt-1 flex items-center gap-1.5 text-[13px] text-ink-soft">
          <MapPin className="h-3.5 w-3.5" />
          {college.location}
        </span>
        <span className="mt-4 text-[13.5px] font-semibold text-blue group-hover:underline underline-offset-4">
          View College →
        </span>
      </div>
    </Link>
  );
}
