import {
  Sparkles,
  AppWindow,
  Smartphone,
  Code2,
  Terminal,
  ShieldCheck,
  Cpu,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { topicTokens } from "@/lib/tokens";
import type { Topic } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Presentation-only mapping of topic → mark. Kept out of lib/data so the
 * content data stays plain (name/description/image/accentColor/slug) per
 * the brief, while this file owns how an unphotographed topic is drawn.
 */
const topicMarks: Record<Topic["slug"], LucideIcon> = {
  ai: Sparkles,
  windows: AppWindow,
  android: Smartphone,
  webdev: Code2,
  linux: Terminal,
  security: ShieldCheck,
  hardware: Cpu,
  productivity: ListChecks,
};

export function TopicCard({ topic }: { topic: Topic }) {
  const token = topicTokens[topic.accentColor];
  const Mark = topicMarks[topic.slug];

  return (
    <Card href={`/topics/${topic.slug}`} padding="none" className="flex flex-col">
      {/* Visual area — ~65% of the card. Renders the real photo once
          `topic.image` exists; until then, a designed placeholder mark
          keeps the grid feeling intentional rather than broken. */}
      <div
        className={cn(
          "relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-t-card-md",
          token.soft
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            color: "var(--color-navy)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Mark
            className={cn(
              "h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-slower ease-premium group-hover:scale-110",
              token.text
            )}
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 sm:p-6">
        <CardTitle className="text-h4 mb-1">{topic.name}</CardTitle>
        <CardDescription>{topic.description}</CardDescription>
      </div>
    </Card>
  );
}
