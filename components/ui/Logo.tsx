import { cn } from "@/lib/utils";

/**
 * The PNJunction signature mark: three nodes converging into one —
 * a literal "junction" (paths meeting at a point), echoing how the
 * site itself is where separate topics — AI, Linux, hardware,
 * security — meet at a single, calm point of reference.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="var(--color-navy)" />
      <path
        d="M9 11L15.2 15.6C15.6 15.9 16.2 15.9 16.6 15.6L23 11"
        stroke="var(--color-accent-400)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M9 21L15.2 16.4C15.6 16.1 16.2 16.1 16.6 16.4L23 21"
        stroke="var(--color-accent-400)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="16" cy="16" r="2.4" fill="#FCFCFA" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
        PN<span className="text-accent">Junction</span>
      </span>
    </span>
  );
}
