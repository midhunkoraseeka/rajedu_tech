import Image from "next/image";
import { programs } from "@/lib/data/programs";
import { ProgramIcon } from "./ProgramIcon";
import { Reveal } from "@/components/motion/Reveal";
import { fadeUp, scaleIn } from "@/lib/motion";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Decorative blobs */}
      <span className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-lime/25 blur-2xl" aria-hidden />
      <span className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-blue/15 blur-3xl" aria-hidden />

      {/* Main panel */}
      <Reveal
        variants={scaleIn}
        className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-blue-light via-blue-light to-lime-light shadow-xl shadow-blue-dark/10"
      >
        <Image
          src="/home_images/section.png"
          alt="A management-quota admission candidate on a college campus"
          fill
          priority
          sizes="(min-width: 1024px) 448px, 90vw"
          className="object-cover"
        />
      </Reveal>

      {/* Floating program chips */}
      <Reveal
        variants={fadeUp}
        delay={0.15}
        className="absolute left-2 -top-4 flex items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg shadow-blue-dark/10 sm:-left-12 lg:-left-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-light text-blue">
          <ProgramIcon icon={programs[0].icon} className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[13px] font-bold text-blue-dark">{programs[0].shortName}</span>
          <span className="block text-[11px] text-ink-soft">Engineering Admissions</span>
        </span>
      </Reveal>

      <Reveal
        variants={fadeUp}
        delay={0.3}
        className="absolute right-2 top-[58%] flex -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg shadow-blue-dark/10 sm:-right-12 lg:-right-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-light text-lime-dark">
          <ProgramIcon icon={programs[1].icon} className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[13px] font-bold text-blue-dark">{programs[1].shortName}</span>
          <span className="block text-[11px] text-ink-soft">Medical Admissions</span>
        </span>
      </Reveal>

      <Reveal
        variants={fadeUp}
        delay={0.45}
        className="absolute left-2 -bottom-4 flex items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg shadow-blue-dark/10 sm:-left-12 lg:-left-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-light text-blue">
          <ProgramIcon icon={programs[2].icon} className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[13px] font-bold text-blue-dark">{programs[2].shortName}</span>
          <span className="block text-[11px] text-ink-soft">Management Admissions</span>
        </span>
      </Reveal>
    </div>
  );
}
