import { HTMLAttributes, forwardRef } from "react";
import { JunctionMark } from "./JunctionMark";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  showMark?: boolean;
  markClassName?: string;
}

/**
 * The base "Junction Card": a subtly lifted surface with layered shadow,
 * a hairline border, and a faint top highlight to sell the physical,
 * popped-out feel. Every card in the product (topic, content, tool,
 * newsletter) composes this.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, interactive = true, showMark = true, markClassName, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "junction-card",
          interactive && "junction-card--interactive",
          className
        )}
        {...props}
      >
        {showMark && (
          <JunctionMark
            className={cn("junction-mark text-accent", markClassName)}
          />
        )}
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
