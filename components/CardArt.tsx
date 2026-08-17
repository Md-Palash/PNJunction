import { TopicSlug } from "@/lib/data";
import { TopicGlyph } from "./TopicGlyphs";
import { cn } from "@/lib/cn";

const gradients: Record<TopicSlug, string> = {
  ai: "from-[#EAF1FF] via-[#F7F9FC] to-white",
  security: "from-[#EAF1FF] via-[#F2F6FE] to-white",
  "web-dev": "from-[#F0F4FF] via-[#F7F9FC] to-white",
  hardware: "from-[#EEF3FF] via-[#F7F9FC] to-white",
  linux: "from-[#F0F4FE] via-[#F7F9FC] to-white",
  productivity: "from-[#EDF3FF] via-[#F7F9FC] to-white",
  windows: "from-[#EEF3FE] via-[#F7F9FC] to-white",
  android: "from-[#EFF4FF] via-[#F7F9FC] to-white",
};

export function CardArt({
  topic,
  className,
}: {
  topic: TopicSlug;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradients[topic],
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-faint opacity-60" />
      <TopicGlyph
        slug={topic}
        className="relative h-16 w-24 text-accent/70 sm:h-20 sm:w-28"
      />
    </div>
  );
}
