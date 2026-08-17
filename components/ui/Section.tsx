import { cn } from "@/lib/utils";
import type { HTMLAttributes, ElementType } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background tone for alternating page rhythm. */
  tone?: "bg" | "muted" | "surface";
  /** Vertical padding scale. */
  spacing?: "sm" | "md" | "lg";
  as?: ElementType;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  bg: "bg-bg",
  muted: "bg-surface-muted",
  surface: "bg-surface",
};

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-10 sm:py-14",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-24 sm:py-32 lg:py-36",
};

/**
 * Vertical rhythm primitive. Wraps a page region with consistent
 * spacing + background tone so section padding is never hardcoded
 * ad hoc in page files.
 */
export function Section({
  className,
  tone = "bg",
  spacing = "md",
  as: Tag = "section",
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
