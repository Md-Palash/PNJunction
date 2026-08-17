import { TopicSlug } from "@/lib/data";

interface GlyphProps {
  className?: string;
}

/** AI — abstract neural connections */
function AIGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
      <circle cx="24" cy="60" r="3.2" fill="currentColor" />
      <circle cx="60" cy="42" r="4" fill="currentColor" />
      <circle cx="60" cy="80" r="3.2" fill="currentColor" />
      <circle cx="98" cy="20" r="3.2" fill="currentColor" />
      <circle cx="98" cy="56" r="3.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.55">
        <path d="M24 24 60 42M24 60 60 42M60 42 98 20M60 42 98 56M60 80 60 42M24 60 60 80" />
      </g>
    </svg>
  );
}

/** Windows — window / grid geometry */
function WindowsGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="14" y="14" width="38" height="30" rx="3" opacity="0.85" />
        <rect x="60" y="14" width="46" height="30" rx="3" opacity="0.55" />
        <rect x="14" y="52" width="46" height="30" rx="3" opacity="0.55" />
        <rect x="68" y="52" width="38" height="30" rx="3" opacity="0.85" />
      </g>
    </svg>
  );
}

/** Android — device-inspired geometry */
function AndroidGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <rect x="42" y="10" width="36" height="76" rx="8" stroke="currentColor" strokeWidth="1.4" />
      <line x1="42" y1="24" x2="78" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <line x1="42" y1="72" x2="78" y2="72" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="60" cy="79" r="2.4" fill="currentColor" />
      <circle cx="24" cy="30" r="2.6" fill="currentColor" opacity="0.5" />
      <circle cx="96" cy="30" r="2.6" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="58" r="2.6" fill="currentColor" opacity="0.5" />
      <circle cx="96" cy="58" r="2.6" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/** Web Development — code / node geometry */
function WebDevGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <path
        d="M34 30 16 48l18 18M86 30l18 18-18 18M68 22 52 74"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

/** Linux — terminal-inspired visual */
function LinuxGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <rect x="14" y="16" width="92" height="64" rx="6" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <path d="M26 36 40 48 26 60" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="48" y1="60" x2="72" y2="60" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Cybersecurity — lock / network visual */
function SecurityGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <rect x="40" y="42" width="40" height="32" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M48 42V32a12 12 0 0 1 24 0v10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="58" r="3" fill="currentColor" />
      <circle cx="18" cy="20" r="2.4" fill="currentColor" opacity="0.5" />
      <circle cx="102" cy="20" r="2.4" fill="currentColor" opacity="0.5" />
      <path d="M18 20 40 42M102 20 80 42" stroke="currentColor" strokeWidth="1.1" opacity="0.4" />
    </svg>
  );
}

/** Hardware — chip / circuit geometry */
function HardwareGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <rect x="38" y="30" width="44" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <g stroke="currentColor" strokeWidth="1.3" opacity="0.6">
        <line x1="48" y1="30" x2="48" y2="18" />
        <line x1="60" y1="30" x2="60" y2="18" />
        <line x1="72" y1="30" x2="72" y2="18" />
        <line x1="48" y1="66" x2="48" y2="78" />
        <line x1="60" y1="66" x2="60" y2="78" />
        <line x1="72" y1="66" x2="72" y2="78" />
      </g>
    </svg>
  );
}

/** Productivity — organized blocks / flow */
function ProductivityGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 120 96" fill="none" className={className} aria-hidden="true">
      <rect x="16" y="20" width="26" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="50" y="20" width="26" height="46" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
      <rect x="84" y="46" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M42 30h8M76 40h8" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

const glyphMap: Record<TopicSlug, (props: GlyphProps) => JSX.Element> = {
  ai: AIGlyph,
  windows: WindowsGlyph,
  android: AndroidGlyph,
  "web-dev": WebDevGlyph,
  linux: LinuxGlyph,
  security: SecurityGlyph,
  hardware: HardwareGlyph,
  productivity: ProductivityGlyph,
};

export function TopicGlyph({
  slug,
  className,
}: {
  slug: TopicSlug;
  className?: string;
}) {
  const Glyph = glyphMap[slug];
  return <Glyph className={className} />;
}
