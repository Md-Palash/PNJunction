import { cn } from "@/lib/utils";
import { topicTokens } from "@/lib/tokens";
import type { TopicSlug } from "@/types";
import type { HTMLAttributes } from "react";

interface BaseBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** When provided, colors the badge from the centralized topic token map. */
  topic?: TopicSlug;
  variant?: "neutral" | "outline";
}

/**
 * Small pill label. Pass `topic` to automatically theme the badge from
 * lib/tokens.ts (data-driven — never hardcode a topic color here).
 */
export function Badge({
  topic,
  variant = "neutral",
  className,
  children,
  ...props
}: BaseBadgeProps) {
  const topicToken = topic ? topicTokens[topic] : undefined;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-label uppercase",
        topicToken
          ? cn(topicToken.soft, topicToken.text)
          : variant === "outline"
          ? "border border-border-strong text-ink-secondary"
          : "bg-navy-50 text-navy-700",
        className
      )}
      {...props}
    >
      {children ?? topicToken?.label}
    </span>
  );
}
