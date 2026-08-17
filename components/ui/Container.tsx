import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Renders a narrower reading-width container for prose content. */
  narrow?: boolean;
}

/**
 * Horizontal rhythm primitive. Every top-level layout element should
 * be wrapped in a Container instead of hardcoding max-width/padding.
 */
export function Container({
  className,
  narrow = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        narrow ? "max-w-prose" : "max-w-container",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
