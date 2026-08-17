"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/Card";
import { TopicGlyph } from "./TopicGlyphs";
import { Topic } from "@/lib/data";
import { scaleIn } from "@/lib/motion";

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <motion.a
      href="#"
      variants={scaleIn}
      aria-label={`Explore ${topic.name}`}
    >
      <Card className="group flex h-[190px] flex-col justify-between overflow-hidden p-6 sm:h-[210px]">
        <div className="flex items-start justify-between">
          <TopicGlyph
            slug={topic.slug}
            className="h-14 w-20 text-accent transition-transform duration-500 ease-junction group-hover:-translate-y-0.5 group-hover:scale-[1.03]"
          />
          <ArrowUpRight
            className="h-4 w-4 text-ink-faint opacity-0 transition-all duration-300 ease-junction group-hover:opacity-100 group-hover:text-accent"
            strokeWidth={2.25}
          />
        </div>
        <div>
          <h3 className="font-display text-[19px] font-bold">{topic.name}</h3>
          <p className="mt-1 text-[14px] text-ink-soft">{topic.tagline}</p>
        </div>
      </Card>
    </motion.a>
  );
}
