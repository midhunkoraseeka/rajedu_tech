import { MapPinned, GraduationCap, Handshake, UserCheck } from "lucide-react";

const stats = [
  {
    icon: MapPinned,
    tone: "blue" as const,
    title: "3 Cities",
    label: "Hyderabad, Bangalore, Chennai",
  },
  {
    icon: GraduationCap,
    tone: "lime" as const,
    title: "3 Programmes",
    label: "Engineering, Medical & Management",
  },
  {
    icon: Handshake,
    tone: "blue" as const,
    title: "End-to-End",
    label: "Admission Support",
  },
  {
    icon: UserCheck,
    tone: "lime" as const,
    title: "Personalized",
    label: "Guidance for Every Family",
  },
];

export function StatsBar() {
  return (
    <div className="rounded-2xl border border-border bg-white px-6 py-7 shadow-xl shadow-blue-dark/5 sm:px-10">
      <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:divide-x sm:divide-border">
        {stats.map((stat) => (
          <div key={stat.title} className="flex items-center gap-3.5 px-0 sm:px-6 sm:first:pl-0">
            <span
              className={
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-full " +
                (stat.tone === "blue" ? "bg-blue-light text-blue" : "bg-lime-light text-lime-dark")
              }
            >
              <stat.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[15px] font-extrabold text-blue-dark">{stat.title}</p>
              <p className="text-[12.5px] leading-snug text-ink-soft">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
