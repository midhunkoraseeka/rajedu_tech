import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Common = {
  variant?: "primary" | "outline" | "lime" | "ghost" | "outline-white";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type ButtonAsLink = Common & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = Common & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3.5 text-base",
};

const variants = {
  primary: "bg-blue text-white shadow-sm shadow-blue/20 hover:bg-blue-dark",
  outline: "border-2 border-blue text-blue hover:bg-blue-light",
  lime: "bg-lime text-blue-dark hover:bg-lime-dark hover:text-white",
  ghost: "text-blue hover:bg-blue-light",
  "outline-white": "border-2 border-white/40 text-white hover:bg-white/10",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, withArrow } = props;
  const classes = cn(base, sizes[size], variants[variant], "group/btn", className);

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
