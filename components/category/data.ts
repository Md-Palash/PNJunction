export type CategoryArticle = {
  id: string;
  title: string;
  description: string;
  tag: string;
  readTime: number; // minutes, used for sorting
  date: string; // ISO, used for sorting
  displayDate: string;
  popularity: number; // 0-100, used for "Most Popular" sort
};

export const categoryArticles: CategoryArticle[] = [
  {
    id: "1",
    title: "Fixing the most common Windows Update failures",
    description: "A step-by-step path through the errors people actually hit.",
    tag: "Troubleshooting",
    readTime: 7,
    date: "2026-07-30",
    displayDate: "Jul 30, 2026",
    popularity: 92,
  },
  {
    id: "2",
    title: "Windows 11 keyboard shortcuts worth memorizing",
    description: "The small set of shortcuts that save real time daily.",
    tag: "Windows 11",
    readTime: 4,
    date: "2026-07-26",
    displayDate: "Jul 26, 2026",
    popularity: 74,
  },
  {
    id: "3",
    title: "Understanding Windows Defender's real-time protection",
    description: "What it actually checks, and when to trust its defaults.",
    tag: "Security",
    readTime: 6,
    date: "2026-07-21",
    displayDate: "Jul 21, 2026",
    popularity: 81,
  },
  {
    id: "4",
    title: "A practical guide to Windows driver updates",
    description: "When to update, when to wait, and how to roll back safely.",
    tag: "Drivers",
    readTime: 8,
    date: "2026-07-18",
    displayDate: "Jul 18, 2026",
    popularity: 65,
  },
  {
    id: "5",
    title: "Diagnosing slow boot times on Windows",
    description: "A methodical way to find what's actually holding startup back.",
    tag: "Performance",
    readTime: 10,
    date: "2026-07-12",
    displayDate: "Jul 12, 2026",
    popularity: 88,
  },
  {
    id: "6",
    title: "Setting up a reliable home network on Windows",
    description: "Static IPs, sharing, and troubleshooting tools that hold up.",
    tag: "Networking",
    readTime: 9,
    date: "2026-07-05",
    displayDate: "Jul 5, 2026",
    popularity: 58,
  },
];

export const categoryTags = [
  "All",
  "Windows 11",
  "Security",
  "Performance",
  "Drivers",
  "Networking",
  "Troubleshooting",
];
