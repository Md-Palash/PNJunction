"use client";

import { motion } from "framer-motion";
import { QrCode, Braces, Image as ImageIcon, FileText, Ruler, Binary, LucideIcon } from "lucide-react";
import { Card } from "./ui/Card";
import { ToolItem } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

const icons: Record<ToolItem["icon"], LucideIcon> = {
  qrcode: QrCode,
  braces: Braces,
  image: ImageIcon,
  "file-text": FileText,
  ruler: Ruler,
  binary: Binary,
};

export function ToolCard({ tool }: { tool: ToolItem }) {
  const Icon = icons[tool.icon];
  return (
    <motion.a href="#" variants={fadeUp} aria-label={tool.name}>
      <Card className="group flex h-full flex-col gap-4 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-300 ease-junction group-hover:bg-ink group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-display text-[16px] font-bold">{tool.name}</h3>
          <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
            {tool.description}
          </p>
        </div>
      </Card>
    </motion.a>
  );
}
