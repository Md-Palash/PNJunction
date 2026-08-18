import Link from "next/link";
import { toolIcons } from "./icons";
import type { Tool } from "@/lib/data";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Glyph = toolIcons[tool.id];
  return (
    <Link href={`/tools/${tool.id}`} className="pn-card flex items-center gap-3.5 rounded-md2 p-[22px]">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accentStrong">
        <Glyph />
      </div>
      <span className="text-[15px] font-semibold">{tool.name}</span>
    </Link>
  );
}
