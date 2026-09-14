import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  id,
  tone = "white",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "white" | "blue" | "lime" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24 lg:py-28",
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
