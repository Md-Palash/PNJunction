import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-[18px] font-extrabold text-ink",
        className
      )}
      aria-label="PNJunction home"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <rect width="30" height="30" rx="9" fill="#0B1733" />
        <circle cx="11" cy="11" r="2.4" fill="#2F6FED" />
        <circle cx="19" cy="19" r="2.4" fill="#2F6FED" />
        <path
          d="M11 11 19 19M19 11l-3 0M11 19l3 0"
          stroke="#F7F9FC"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      <span>
        PN<span className="text-accent">Junction</span>
      </span>
    </a>
  );
}
