import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "strong" | "soft";
}

export default function Badge({ children, tone = "strong" }: BadgeProps) {
  return <span className={`pn-badge pn-badge-${tone}`}>{children}</span>;
}
