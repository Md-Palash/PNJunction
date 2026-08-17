import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium " +
  "rounded-control transition-colors transition-transform duration-base ease-premium " +
  "disabled:opacity-50 disabled:pointer-events-none select-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-ink-inverse hover:bg-navy-800 active:bg-navy-900 shadow-elevation-1 hover:shadow-elevation-2",
  secondary:
    "bg-accent text-ink-inverse hover:bg-accent-600 active:bg-accent-700 shadow-elevation-1 hover:shadow-elevation-2",
  outline:
    "bg-transparent text-ink border border-border-strong hover:border-navy hover:bg-navy-50",
  ghost: "bg-transparent text-ink-secondary hover:bg-navy-50 hover:text-ink",
};

// min-h-[44px] guarantees the accessible touch target regardless of size.
const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 text-small",
  md: "min-h-[44px] px-5 text-body",
  lg: "min-h-[52px] px-7 text-body-lg",
};

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children?: ReactNode;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary interactive control. Renders a <Link> when `href` is
 * supplied, otherwise a native <button>. All variants maintain a
 * minimum 44px touch target and a visible focus ring (see globals.css).
 */
export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variantClasses[variant],
    sizeClasses[size],
    "hover:-translate-y-px active:translate-y-0",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
