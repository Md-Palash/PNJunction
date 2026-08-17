import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill bg-accent-soft px-3 py-1 text-[12px] font-display font-semibold uppercase tracking-wide text-accent-deep",
        className
      )}
    >
      {children}
    </span>
  );
}
