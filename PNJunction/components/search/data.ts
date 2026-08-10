import {
  FileText,
  Wrench,
  BookOpen,
  BrainCircuit,
  AppWindow,
  Smartphone,
  Terminal,
  ShieldCheck,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type ResultType = "article" | "tool" | "resource";

export type SearchResult = {
  id: string;
  type: ResultType;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  readTime?: number;
  date?: string;
};

export const searchIndex: SearchResult[] = [
  {
    id: "r1",
    type: "article",
    category: "AI",
    title: "How local LLMs are changing the developer workflow",
    description: "Running models on-device, and where they genuinely save time.",
    icon: BrainCircuit,
    readTime: 6,
    date: "Jul 28, 2026",
  },
  {
    id: "r2",
    type: "article",
    category: "Windows",
    title: "Installing Windows 11 the clean way",
    description: "A no-surprises walkthrough of a fresh, minimal install.",
    icon: AppWindow,
    readTime: 8,
    date: "Jul 20, 2026",
  },
  {
    id: "r3",
    type: "tool",
    category: "Tools",
    title: "QR Generator",
    description: "Create a clean QR code from any link in seconds.",
    icon: FileText,
  },
  {
    id: "r4",
    type: "tool",
    category: "Tools",
    title: "Password Generator",
    description: "Strong, random passwords with adjustable rules.",
    icon: Wrench,
  },
  {
    id: "r5",
    type: "resource",
    category: "Android",
    title: "Android permissions, explained simply",
    description: "A reference sheet for what each permission actually grants.",
    icon: Smartphone,
    date: "Jul 10, 2026",
  },
  {
    id: "r6",
    type: "article",
    category: "Linux",
    title: "Getting comfortable in the Linux terminal",
    description: "Core commands and habits that make the shell feel natural.",
    icon: Terminal,
    readTime: 7,
    date: "Jul 5, 2026",
  },
  {
    id: "r7",
    type: "article",
    category: "Cybersecurity",
    title: "The password habits still putting accounts at risk",
    description: "Common patterns in credential leaks, and what closes them.",
    icon: ShieldCheck,
    readTime: 5,
    date: "Jul 22, 2026",
  },
  {
    id: "r8",
    type: "resource",
    category: "Web Development",
    title: "A field guide to modern CSS layout",
    description: "Flexbox and grid patterns worth knowing by heart.",
    icon: Code2,
    date: "Jun 30, 2026",
  },
  {
    id: "r9",
    type: "tool",
    category: "Tools",
    title: "JSON Formatter",
    description: "Format and validate JSON, instantly and locally.",
    icon: BookOpen,
  },
];

export const quickFilterOptions = [
  "All",
  "Articles",
  "Tools",
  "Resources",
  "AI",
  "Windows",
  "Android",
  "Linux",
  "Cybersecurity",
  "Web Development",
] as const;

export type QuickFilter = (typeof quickFilterOptions)[number];

export const recentSearches = [
  "Windows 11",
  "ChatGPT",
  "Password Manager",
  "Linux Terminal",
];

export const popularSearches = [
  {
    icon: AppWindow,
    title: "Install Windows 11",
    description: "Step-by-step, clean install guide.",
  },
  {
    icon: BrainCircuit,
    title: "Best AI Tools",
    description: "A curated, no-fluff shortlist.",
  },
  {
    icon: Smartphone,
    title: "Android Tips",
    description: "Small changes, real daily impact.",
  },
  {
    icon: BookOpen,
    title: "JSON Formatter",
    description: "Format and validate instantly.",
  },
  {
    icon: FileText,
    title: "QR Generator",
    description: "Create a QR code in seconds.",
  },
];

export function matchesQuery(result: SearchResult, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    result.title.toLowerCase().includes(q) ||
    result.description.toLowerCase().includes(q) ||
    result.category.toLowerCase().includes(q)
  );
}

export function matchesFilter(result: SearchResult, filter: QuickFilter) {
  if (filter === "All") return true;
  if (filter === "Articles") return result.type === "article";
  if (filter === "Tools") return result.type === "tool";
  if (filter === "Resources") return result.type === "resource";
  return result.category.toLowerCase() === filter.toLowerCase();
}
