"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { CardArt } from "./CardArt";
import { Topic } from "@/lib/data";
import { scaleIn } from "@/lib/motion";

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <motion.a href="#" variants={scaleIn} aria-label={`Explore ${topic.name}`}>
      <Card className="group flex h-full flex-col p-0" showMark={false}>
        <CardArt
          topic={topic.slug}
          size="cover"
          className="h-[190px] w-full sm:h-[210px]"
        />
        <div className="flex flex-1 flex-col gap-1 p-5">
          <h3 className="font-display text-[18px] font-bold transition-colors duration-200 group-hover:text-accent">
            {topic.name}
          </h3>
          <p className="text-[14px] text-ink-soft">{topic.tagline}</p>
        </div>
      </Card>
    </motion.a>
  );
}
