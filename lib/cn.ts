type ClassValue = string | number | null | undefined | false;

/** Tiny classnames joiner — avoids pulling in a dependency for one helper. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
