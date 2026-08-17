import { TopicSlug } from "@/lib/data";
import { TopicGlyph } from "./TopicGlyphs";
import { cn } from "@/lib/cn";

/**
 * Editorial card art.
 *
 * No licensed photography was supplied for this pass, and generic stock
 * imagery pulled from a search engine can't be guaranteed license-safe for
 * a production site — so instead of a flat icon-on-gradient placeholder,
 * each topic gets a small layered "cover" composition: a soft two-tone
 * gradient mesh unique to that topic, a few depth blobs, and the topic's
 * glyph drawn larger and slightly off-center for visual weight. This slots
 * into the same image area a real photo would occupy — swap in
 * `next/image` with a licensed photo per topic when one is sourced, no
 * layout changes needed.
 */
const meshes: Record<TopicSlug, { a: string; b: string }> = {
  ai: { a: "#DCE9FF", b: "#F5F9FF" },
  security: { a: "#DDEAFE", b: "#F4F8FF" },
  "web-dev": { a: "#E0EBFF", b: "#F6F9FE" },
  hardware: { a: "#DFEAFE", b: "#F5F8FE" },
  linux: { a: "#E1ECFE", b: "#F6F9FD" },
  productivity: { a: "#DEE9FE", b: "#F5F8FE" },
  windows: { a: "#DFEAFD", b: "#F6F9FD" },
  android: { a: "#DEEAFF", b: "#F5F9FE" },
};

export function CardArt({
  topic,
  className,
  size = "thumb",
}: {
  topic: TopicSlug;
  className?: string;
  size?: "cover" | "thumb";
}) {
  const mesh = meshes[topic];
  const isCover = size === "cover";
  return (
    <div
      className={cn("junction-card-image relative", className)}
      style={{
        background: `radial-gradient(120% 100% at 15% 10%, ${mesh.a}, transparent 55%), radial-gradient(100% 100% at 90% 90%, ${mesh.a}, transparent 50%), ${mesh.b}`,
      }}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute rounded-full opacity-40 blur-2xl",
          isCover ? "-right-6 -top-8 h-36 w-36" : "-right-4 -top-6 h-24 w-24"
        )}
        style={{ background: mesh.a }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute rounded-full opacity-30 blur-3xl",
          isCover ? "-bottom-10 -left-8 h-40 w-40" : "hidden"
        )}
        style={{ background: mesh.a }}
      />
      <div className="flex h-full w-full items-center justify-center">
        <TopicGlyph
          slug={topic}
          className={cn(
            "text-accent-deep/60",
            isCover ? "h-24 w-36 sm:h-28 sm:w-44" : "h-14 w-20 sm:h-16 sm:w-24"
          )}
        />
      </div>
    </div>
  );
}
