interface JunctionMarkProps {
  className?: string;
}

/**
 * The signature motif: a small circuit "junction" — a node with two
 * hairline traces breaking off it. Placed once in the corner of every
 * Junction Card. It's the one recurring detail that ties the whole card
 * system back to the PNJunction name without ever announcing itself.
 */
export function JunctionMark({ className }: JunctionMarkProps) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 8V4a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M14 20h4a2 2 0 0 0 2-2v-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="8" cy="8" r="2.1" fill="currentColor" />
    </svg>
  );
}
