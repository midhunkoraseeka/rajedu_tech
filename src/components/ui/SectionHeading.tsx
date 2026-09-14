import { cn } from "@/lib/cn";

export function Eyebrow({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "lime" | "white" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.08em]",
        tone === "blue" && "text-blue",
        tone === "lime" && "text-lime-dark",
        tone === "white" && "text-white/80"
      )}
    >
      <span className={cn("h-[2px] w-6", tone === "white" ? "bg-white/60" : "bg-lime")} />
      {children}
    </span>
  );
}

export function Highlight({ children, tone = "lime" }: { children: React.ReactNode; tone?: "lime" | "blue" }) {
  return <span className={tone === "lime" ? "text-lime-dark" : "text-blue"}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  action,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "white";
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center sm:text-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "sm:mx-auto")}>
        {eyebrow ? <Eyebrow tone={tone === "white" ? "white" : "blue"}>{eyebrow}</Eyebrow> : null}
        <h2
          className={cn(
            "mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-balance leading-[1.15]",
            tone === "white" ? "text-white" : "text-blue-dark"
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-4 text-[16px] leading-relaxed", tone === "white" ? "text-white/75" : "text-ink-soft")}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
