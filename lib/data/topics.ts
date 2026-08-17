import type { Topic } from "@/types";

/**
 * The 8 PNJunction topics. `image` is intentionally left undefined —
 * curated/generated imagery will be added in a later pass. Until then,
 * TopicCard renders a designed placeholder from `accentColor` so the
 * grid never ships broken images or random stock photography.
 *
 * `accentColor` references a slug in lib/tokens.ts (topicTokens),
 * which is the single source of truth for the actual color values.
 */
export const topics: Topic[] = [
  {
    slug: "ai",
    name: "AI",
    description: "Create. Automate. Explore.",
    accentColor: "ai",
  },
  {
    slug: "windows",
    name: "Windows",
    description: "Tips, tools, and updates.",
    accentColor: "windows",
  },
  {
    slug: "android",
    name: "Android",
    description: "Apps, tips, and control.",
    accentColor: "android",
  },
  {
    slug: "webdev",
    name: "Web Development",
    description: "Build for the modern web.",
    accentColor: "webdev",
  },
  {
    slug: "linux",
    name: "Linux",
    description: "Open systems, full control.",
    accentColor: "linux",
  },
  {
    slug: "security",
    name: "Cybersecurity",
    description: "Stay safe. Stay ahead.",
    accentColor: "security",
  },
  {
    slug: "hardware",
    name: "Hardware",
    description: "Builds, reviews, and gear.",
    accentColor: "hardware",
  },
  {
    slug: "productivity",
    name: "Productivity",
    description: "Work smarter, not harder.",
    accentColor: "productivity",
  },
];
