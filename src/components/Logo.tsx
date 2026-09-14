import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Raj Edutech home">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue">
        <GraduationCap className="h-5 w-5 text-white" aria-hidden />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-lime" aria-hidden />
      </span>
      <span className="leading-tight">
        <span className="flex items-baseline gap-1">
          <span className={"text-[19px] font-extrabold tracking-tight " + (inverted ? "text-white" : "text-blue-dark")}>
            RAJ
          </span>
          <span className={"text-[19px] font-extrabold tracking-tight " + (inverted ? "text-lime" : "text-blue")}>
            EduTech
          </span>
        </span>
        <span
          className={
            "block text-[10px] font-bold uppercase tracking-[0.14em] " +
            (inverted ? "text-white/55" : "text-ink-soft")
          }
        >
          Management Quota
        </span>
      </span>
    </Link>
  );
}
