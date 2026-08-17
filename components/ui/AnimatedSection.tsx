"use client";

import { useEffect, useRef, type HTMLAttributes, type ElementType } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Delay in ms — used to stagger a sequence of sibling sections/cards. */
  delayMs?: number;
  /** Only animate once, the first time it enters the viewport (default true). */
  once?: boolean;
}

/**
 * Fade + subtle upward reveal on scroll into view, built on
 * IntersectionObserver + the `.reveal` CSS utility (globals.css) —
 * no animation library required. Automatically collapses to an
 * instant, static state when the user prefers reduced motion, via
 * the same CSS rule.
 */
export function AnimatedSection({
  as: Tag = "div",
  delayMs = 0,
  once = true,
  className,
  style,
  children,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", className)}
      style={{ transitionDelay: delayMs ? `${delayMs}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
