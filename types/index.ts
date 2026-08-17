/**
 * Shared content types for PNJunction.
 *
 * These describe the SHAPE of future data (topics, articles, tools).
 * No content is created in this phase — presentation components will
 * consume data conforming to these shapes so UI never hardcodes
 * repeated content.
 */

export type TopicSlug =
  | "ai"
  | "windows"
  | "android"
  | "webdev"
  | "linux"
  | "security"
  | "hardware"
  | "productivity";

export interface Topic {
  slug: TopicSlug;
  name: string;
  /** Short tagline shown on the topic card, e.g. "Create. Automate. Explore." */
  description: string;
  /** Path to a representative image — populated in a later phase. */
  image?: string;
  /** Key into lib/tokens.ts topicTokens for accent color + soft wash. */
  accentColor: TopicSlug;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  topic: TopicSlug;
  image?: string;
  publishedAt: string;
  readingTimeMinutes?: number;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  topic: TopicSlug;
  icon?: string;
}
