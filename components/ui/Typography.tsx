import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

/**
 * Full typographic hierarchy for PNJunction.
 *
 * Display/H1–H3 use the display face (Sora) — reserved for moments
 * that need personality. H4–H6 and all body/meta text stay on the
 * primary UI face (Inter) for maximum readability at small sizes.
 */

export function Display({ as: Tag = "h1", className, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn("font-display text-display text-ink", className)}
      {...props}
    />
  );
}

export function H1({ as: Tag = "h1", className, ...props }: TypographyProps) {
  return (
    <Tag className={cn("font-display text-h1 text-ink", className)} {...props} />
  );
}

export function H2({ as: Tag = "h2", className, ...props }: TypographyProps) {
  return (
    <Tag className={cn("font-display text-h2 text-ink", className)} {...props} />
  );
}

export function H3({ as: Tag = "h3", className, ...props }: TypographyProps) {
  return (
    <Tag className={cn("font-display text-h3 text-ink", className)} {...props} />
  );
}

export function H4({ as: Tag = "h4", className, ...props }: TypographyProps) {
  return (
    <Tag className={cn("font-sans text-h4 text-ink", className)} {...props} />
  );
}

export function H5({ as: Tag = "h5", className, ...props }: TypographyProps) {
  return (
    <Tag className={cn("font-sans text-h5 text-ink", className)} {...props} />
  );
}

export function H6({ as: Tag = "h6", className, ...props }: TypographyProps) {
  return (
    <Tag className={cn("font-sans text-h6 text-ink", className)} {...props} />
  );
}

export function Body({ as: Tag = "p", className, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn("font-sans text-body text-ink-secondary", className)}
      {...props}
    />
  );
}

export function BodyLarge({ as: Tag = "p", className, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn("font-sans text-body-lg text-ink-secondary", className)}
      {...props}
    />
  );
}

export function Small({ as: Tag = "p", className, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn("font-sans text-small text-ink-secondary", className)}
      {...props}
    />
  );
}

export function Meta({ as: Tag = "span", className, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn("font-sans text-meta text-ink-muted", className)}
      {...props}
    />
  );
}

/** Uppercase, tracked-out micro-label — used for eyebrows and section kickers. */
export function Label({ as: Tag = "span", className, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-label uppercase text-accent-600",
        className
      )}
      {...props}
    />
  );
}
