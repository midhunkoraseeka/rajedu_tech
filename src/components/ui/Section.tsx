import { cn } from "@/lib/cn";

type Spacing = "default" | "sm" | "none";

// Every value is fully qualified at every breakpoint (including lg:) so a
// reduced/zeroed side can never lose to the other side's lg: default in
// Tailwind's cascade — an unprefixed override (e.g. "pb-0") cannot beat a
// breakpoint-prefixed rule (e.g. "lg:py-28") because lg:'s media query is
// declared later in the generated stylesheet regardless of class order.
const topSpacing: Record<Spacing, string> = {
  default: "pt-16 sm:pt-24 lg:pt-28",
  sm: "pt-10 sm:pt-10 lg:pt-10",
  none: "pt-0 sm:pt-0 lg:pt-0",
};

const bottomSpacing: Record<Spacing, string> = {
  default: "pb-16 sm:pb-24 lg:pb-28",
  sm: "pb-10 sm:pb-10 lg:pb-10",
  none: "pb-0 sm:pb-0 lg:pb-0",
};

export function Section({
  className,
  children,
  id,
  tone = "white",
  spacingTop = "default",
  spacingBottom = "default",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "white" | "blue" | "lime" | "ink";
  spacingTop?: Spacing;
  spacingBottom?: Spacing;
}) {
  return (
    <section
      id={id}
      className={cn(
        topSpacing[spacingTop],
        bottomSpacing[spacingBottom],
        tone === "blue" && "bg-blue-light",
        tone === "lime" && "bg-lime-light",
        tone === "ink" && "bg-blue-dark text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
