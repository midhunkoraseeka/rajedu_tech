import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/data/programs";
import { ProgramIcon } from "./ProgramIcon";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/management-quota/${program.slug}`}
      className="group flex flex-col gap-5 rounded-2xl border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-xl hover:shadow-blue-dark/10"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-light text-blue transition-transform duration-200 group-hover:scale-105">
        <ProgramIcon icon={program.icon} className="h-6 w-6" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-blue-dark">{program.name}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{program.summary}</p>
      </div>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-[14px] font-semibold text-blue">Learn More</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-blue-dark transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
