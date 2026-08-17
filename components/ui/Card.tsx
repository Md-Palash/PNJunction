import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type CardRadius = "sm" | "md" | "lg";
type CardPadding = "none" | "sm" | "md" | "lg";

const radiusClasses: Record<CardRadius, string> = {
  sm: "rounded-card",
  md: "rounded-card-md",
  lg: "rounded-card-lg",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  radius?: CardRadius;
  padding?: CardPadding;
  /** Adds hover elevation + lift. Set false for static, non-clickable cards. */
  interactive?: boolean;
  href?: string;
  children?: ReactNode;
}

/**
 * "A physical card gently sitting above the page."
 *
 * White surface, restrained border, layered soft shadow. Interactive
 * cards lift ~5px and gain a stronger (but still soft) shadow on
 * hover — never a dramatic rotation or oversized shadow.
 */
export function Card({
  radius = "md",
  padding = "md",
  interactive = true,
  href,
  className,
  children,
  ...props
}: CardProps) {
  const classes = cn(
    "group relative bg-surface border border-border shadow-elevation-1",
    radiusClasses[radius],
    paddingClasses[padding],
    interactive &&
      "transition-transform transition-shadow duration-base ease-premium hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-elevation-3 focus-within:-translate-y-1.5 focus-within:shadow-elevation-3",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardEyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-label uppercase text-accent-600 mb-2 block",
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display text-h4 text-ink mb-1.5 transition-colors duration-base group-hover:text-accent-600",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-small text-ink-secondary leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-4 pt-4 border-t border-border-subtle flex items-center justify-between",
        className
      )}
      {...props}
    />
  );
}
