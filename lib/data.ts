export interface Topic {
  id: string;
  name: string;
  tag: string;
  image: string;
}

export const topics: Topic[] = [
  { id: "ai", name: "AI", tag: "Create. Automate. Explore.", image: "/images/topics/ai.webp" },
  { id: "windows", name: "Windows", tag: "Tips, guides & troubleshooting.", image: "/images/topics/windows.webp" },
  { id: "android", name: "Android", tag: "Apps, devices & useful tricks.", image: "/images/topics/android.webp" },
  { id: "webdev", name: "Web Development", tag: "Code, frameworks & the modern web.", image: "/images/topics/web-development.webp" },
  { id: "linux", name: "Linux", tag: "Distros, terminal & open source.", image: "/images/topics/linux.webp" },
  { id: "cybersecurity", name: "Cybersecurity", tag: "Stay safe, private & informed.", image: "/images/topics/cybersecurity.webp" },
  { id: "hardware", name: "Hardware", tag: "Chips, devices & components.", image: "/images/topics/hardware.webp" },
  { id: "productivity", name: "Productivity", tag: "Work smarter, not harder.", image: "/images/topics/productivity.webp" },
];

export interface LatestItem {
  topic: string;
  type: string;
  title: string;
  meta: string;
  image: string;
}

export const latestItems: LatestItem[] = [
  {
    topic: "AI",
    type: "News",
    title: "How AI Agents Are Changing Software",
    meta: "6 min read · Aug 2026",
    image: "/images/topics/ai.jpg",
  },
  {
    topic: "Cybersecurity",
    type: "Guide",
    title: "Passkeys, Explained Simply",
    meta: "4 min read · Aug 2026",
    image: "/images/topics/cybersecurity.jpg",
  },
  {
    topic: "Linux",
    type: "Article",
    title: "Five Distros Worth Trying This Year",
    meta: "7 min read · Aug 2026",
    image: "/images/topics/linux.jpg",
  },
  {
    topic: "Web Development",
    type: "Article",
    title: "The Return of Server-Rendered Apps",
    meta: "5 min read · Jul 2026",
    image: "/images/topics/webdev.jpg",
  },
  {
    topic: "Hardware",
    type: "Guide",
    title: "What Actually Matters in a New Laptop",
    meta: "6 min read · Jul 2026",
    image: "/images/topics/hardware.jpg",
  },
  {
    topic: "Productivity",
    type: "Article",
    title: "Building a Second Brain That Works",
    meta: "5 min read · Jul 2026",
    image: "/images/topics/productivity.jpg",
  },
];

export interface Tool {
  id: string;
  name: string;
}

export const tools: Tool[] = [
  { id: "qr", name: "QR Generator" },
  { id: "json", name: "JSON Formatter" },
  { id: "compress", name: "Image Compressor" },
  { id: "markdown", name: "Markdown Preview" },
  { id: "unit", name: "Unit Converter" },
  { id: "base64", name: "Base64 Encoder" },
];

export interface Step {
  n: string;
  title: string;
  body: string;
}

export const steps: Step[] = [
  { n: "01", title: "Explore Topics", body: "Pick what you're curious about." },
  { n: "02", title: "Read & Discover", body: "Short, useful reads that respect your time." },
  { n: "03", title: "Use Free Tools", body: "Practical utilities, ready when you need them." },
];
