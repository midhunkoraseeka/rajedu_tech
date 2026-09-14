import { Users, ShieldCheck, Heart, type LucideIcon } from "lucide-react";

const points: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "Personalized Guidance" },
  { icon: ShieldCheck, label: "End-to-End Support" },
  { icon: Heart, label: "Trusted by Students & Parents" },
];

export function TrustPoints() {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {points.map((p) => (
        <li key={p.label} className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-light text-blue">
            <p.icon className="h-4 w-4" />
          </span>
          <span className="text-[13.5px] font-semibold text-ink-soft">{p.label}</span>
        </li>
      ))}
    </ul>
  );
}
