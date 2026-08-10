import {
  QrCode,
  KeyRound,
  Image as ImageIcon,
  Braces,
  FileCode,
  Binary,
  Type,
  ShieldCheck,
  Wrench,
  RefreshCw,
  Scissors,
  FileJson,
  Hash,
  Palette,
  Ruler,
  type LucideIcon,
} from "lucide-react";

// Turns a tool name into the slug used by the /tools/[slug] route,
// e.g. "QR Generator" -> "qr-generator".
export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: LucideIcon;
  useCase?: string;
  usageCount?: string;
  isNew?: boolean;
  releaseDate?: string;
};

export const featuredTools: Tool[] = [
  { id: "qr", name: "QR Generator", description: "Create a clean QR code from any link.", category: "Utilities", icon: QrCode },
  { id: "pw", name: "Password Generator", description: "Strong, random passwords, instantly.", category: "Security", icon: KeyRound },
  { id: "img", name: "Image Compressor", description: "Shrink file size without losing quality.", category: "Images", icon: ImageIcon },
  { id: "json", name: "JSON Formatter", description: "Format and validate JSON on the spot.", category: "Developer", icon: Braces },
  { id: "md", name: "Markdown Preview", description: "See rendered Markdown as you write.", category: "Text", icon: FileCode },
  { id: "b64", name: "Base64 Encoder", description: "Encode or decode text and files.", category: "Converters", icon: Binary },
];

export const categories = [
  { id: "text", name: "Text", description: "Formatting, counting, and text utilities.", icon: Type, count: 8 },
  { id: "images", name: "Images", description: "Compress, resize, and convert images.", icon: ImageIcon, count: 6 },
  { id: "developer", name: "Developer", description: "JSON, code, and formatting tools.", icon: FileCode, count: 11 },
  { id: "security", name: "Security", description: "Passwords, hashes, and encoding.", icon: ShieldCheck, count: 5 },
  { id: "utilities", name: "Utilities", description: "Everyday tools for quick tasks.", icon: Wrench, count: 9 },
  { id: "converters", name: "Converters", description: "Move between formats and units.", icon: RefreshCw, count: 7 },
];

export const popularTools: Tool[] = [
  { id: "qr", name: "QR Generator", description: "Create a clean QR code from any link.", category: "Utilities", icon: QrCode, useCase: "Sharing links offline", usageCount: "48K uses this month" },
  { id: "pw", name: "Password Generator", description: "Strong, random passwords, instantly.", category: "Security", icon: KeyRound, useCase: "New account signups", usageCount: "62K uses this month" },
  { id: "img", name: "Image Compressor", description: "Shrink file size without losing quality.", category: "Images", icon: ImageIcon, useCase: "Faster page loads", usageCount: "35K uses this month" },
  { id: "json", name: "JSON Formatter", description: "Format and validate JSON on the spot.", category: "Developer", icon: Braces, useCase: "Debugging API responses", usageCount: "29K uses this month" },
  { id: "crop", name: "Image Cropper", description: "Crop to exact dimensions in-browser.", category: "Images", icon: Scissors, useCase: "Profile photos & thumbnails", usageCount: "18K uses this month" },
  { id: "hash", name: "Hash Generator", description: "Generate MD5, SHA-1, and SHA-256 hashes.", category: "Security", icon: Hash, useCase: "Verifying file integrity", usageCount: "12K uses this month" },
];

export const newestTools: Tool[] = [
  { id: "palette", name: "Palette Extractor", description: "Pull a color palette from any image.", category: "Images", icon: Palette, isNew: true, releaseDate: "Jul 24, 2026" },
  { id: "unit", name: "Unit Converter", description: "Length, weight, and volume, side by side.", category: "Converters", icon: Ruler, isNew: true, releaseDate: "Jul 18, 2026" },
  { id: "jsonvalidate", name: "JSON Schema Validator", description: "Validate JSON against a schema.", category: "Developer", icon: FileJson, isNew: true, releaseDate: "Jul 10, 2026" },
  { id: "b64", name: "Base64 Encoder", description: "Encode or decode text and files.", category: "Converters", icon: Binary, isNew: true, releaseDate: "Jul 3, 2026" },
];

export const collections = [
  { id: "student", name: "Essential Student Tools", description: "Formatting and reference tools for schoolwork.", icons: [Type, FileCode, Braces, RefreshCw] },
  { id: "dev", name: "Developer Toolkit", description: "The everyday utilities for shipping code.", icons: [Braces, FileJson, Hash, Binary, FileCode] },
  { id: "image", name: "Image Utilities", description: "Compress, crop, and extract from images.", icons: [ImageIcon, Scissors, Palette] },
  { id: "security", name: "Security Essentials", description: "Passwords, hashes, and safe encoding.", icons: [KeyRound, Hash, ShieldCheck, Binary] },
  { id: "content", name: "Content Creation", description: "Quick tools for writing and publishing.", icons: [FileCode, Type, QrCode] },
];

export const faqs = [
  {
    question: "Are these tools free?",
    answer: "Yes — every tool on PNJunction is free to use, with no usage caps for everyday tasks.",
  },
  {
    question: "Do the tools store my data?",
    answer: "No. Tools run in your browser wherever possible, and nothing you enter is saved or sent to a server.",
  },
  {
    question: "Can I use them on mobile?",
    answer: "Yes — every tool is built mobile-first and works the same way on phones, tablets, and desktop.",
  },
  {
    question: "Do I need an account?",
    answer: "No account is required. Just open a tool and start using it.",
  },
];
