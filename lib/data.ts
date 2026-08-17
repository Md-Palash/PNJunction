export type TopicSlug =
  | "ai"
  | "windows"
  | "android"
  | "web-dev"
  | "linux"
  | "security"
  | "hardware"
  | "productivity";

export interface Topic {
  slug: TopicSlug;
  name: string;
  tagline: string;
}

export const topics: Topic[] = [
  { slug: "ai", name: "AI", tagline: "Create. Automate. Explore." },
  { slug: "windows", name: "Windows", tagline: "Tips, guides & troubleshooting." },
  { slug: "android", name: "Android", tagline: "Apps, devices & useful tricks." },
  { slug: "web-dev", name: "Web Development", tagline: "Build for the modern web." },
  { slug: "linux", name: "Linux", tagline: "Open systems, real control." },
  { slug: "security", name: "Cybersecurity", tagline: "Stay safe, stay aware." },
  { slug: "hardware", name: "Hardware", tagline: "Chips, builds & benchmarks." },
  { slug: "productivity", name: "Productivity", tagline: "Work smarter, not harder." },
];

export type ContentType = "Article" | "News" | "Guide";

export interface LatestItem {
  topic: TopicSlug;
  contentType: ContentType;
  title: string;
  readTime: string;
  date: string;
}

export const latestItems: LatestItem[] = [
  {
    topic: "ai",
    contentType: "Article",
    title: "How AI Agents Actually Work",
    readTime: "6 min read",
    date: "Aug 2026",
  },
  {
    topic: "security",
    contentType: "News",
    title: "Passkeys Explained: The End of Passwords?",
    readTime: "5 min read",
    date: "Aug 2026",
  },
  {
    topic: "web-dev",
    contentType: "Guide",
    title: "Server Components, Simplified",
    readTime: "7 min read",
    date: "Jul 2026",
  },
  {
    topic: "hardware",
    contentType: "Article",
    title: "What Actually Matters When Buying a Laptop",
    readTime: "4 min read",
    date: "Jul 2026",
  },
  {
    topic: "linux",
    contentType: "Guide",
    title: "Your First Week With a Linux Desktop",
    readTime: "8 min read",
    date: "Jul 2026",
  },
  {
    topic: "productivity",
    contentType: "Article",
    title: "Building a Second Brain That Actually Works",
    readTime: "6 min read",
    date: "Jun 2026",
  },
];

export interface ToolItem {
  slug: string;
  name: string;
  description: string;
  icon: "qrcode" | "braces" | "image" | "file-text" | "ruler" | "binary";
}

export const tools: ToolItem[] = [
  {
    slug: "qr-generator",
    name: "QR Generator",
    description: "Turn any link into a scannable code.",
    icon: "qrcode",
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Clean up and validate messy JSON.",
    icon: "braces",
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Shrink images without losing quality.",
    icon: "image",
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    description: "Write and preview Markdown live.",
    icon: "file-text",
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    description: "Convert between units instantly.",
    icon: "ruler",
  },
  {
    slug: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode or decode Base64 text.",
    icon: "binary",
  },
];

export const topicLabel = (slug: TopicSlug): string =>
  topics.find((t) => t.slug === slug)?.name ?? slug;
