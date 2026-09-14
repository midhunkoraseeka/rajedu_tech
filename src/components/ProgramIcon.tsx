import { Cog, Stethoscope, BarChart3, type LucideIcon } from "lucide-react";
import type { ProgramIcon as ProgramIconKey } from "@/lib/data/programs";

const iconMap: Record<ProgramIconKey, LucideIcon> = {
  cog: Cog,
  stethoscope: Stethoscope,
  "bar-chart": BarChart3,
};

export function ProgramIcon({ icon, className }: { icon: ProgramIconKey; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden />;
}
