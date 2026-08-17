import type { TopicSlug } from "@/types";

/**
 * Single source of truth mapping a topic slug to its display name and
 * accent color classes. Any component that needs topic theming
 * (badges, cards, nav) should read from here instead of re-deriving
 * colors, so the palette only ever lives in one place.
 */
export interface TopicToken {
  slug: TopicSlug;
  label: string;
  /** Tailwind text-color class for the accent (icons, labels, links). */
  text: string;
  /** Tailwind background-color class for the soft topic wash. */
  soft: string;
  /** Tailwind border-color class used on hover/active topic chips. */
  border: string;
}

export const topicTokens: Record<TopicSlug, TopicToken> = {
  ai: {
    slug: "ai",
    label: "AI",
    text: "text-topic-ai",
    soft: "bg-topic-ai-soft",
    border: "border-topic-ai",
  },
  windows: {
    slug: "windows",
    label: "Windows",
    text: "text-topic-windows",
    soft: "bg-topic-windows-soft",
    border: "border-topic-windows",
  },
  android: {
    slug: "android",
    label: "Android",
    text: "text-topic-android",
    soft: "bg-topic-android-soft",
    border: "border-topic-android",
  },
  webdev: {
    slug: "webdev",
    label: "Web Development",
    text: "text-topic-webdev",
    soft: "bg-topic-webdev-soft",
    border: "border-topic-webdev",
  },
  linux: {
    slug: "linux",
    label: "Linux",
    text: "text-topic-linux",
    soft: "bg-topic-linux-soft",
    border: "border-topic-linux",
  },
  security: {
    slug: "security",
    label: "Cybersecurity",
    text: "text-topic-security",
    soft: "bg-topic-security-soft",
    border: "border-topic-security",
  },
  hardware: {
    slug: "hardware",
    label: "Hardware",
    text: "text-topic-hardware",
    soft: "bg-topic-hardware-soft",
    border: "border-topic-hardware",
  },
  productivity: {
    slug: "productivity",
    label: "Productivity",
    text: "text-topic-productivity",
    soft: "bg-topic-productivity-soft",
    border: "border-topic-productivity",
  },
};

export const topicList = Object.values(topicTokens);
