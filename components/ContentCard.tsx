"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { CardArt } from "./CardArt";
import { LatestItem, topicLabel } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function ContentCard({ item }: { item: LatestItem }) {
  return (
    <motion.a href="#" variants={fadeUp} aria-label={item.title}>
      <Card className="group flex h-full flex-col overflow-hidden p-0" showMark={false}>
        <div className="relative">
          <CardArt topic={item.topic} className="h-36 w-full sm:h-40" />
          <Badge className="absolute left-4 top-4 bg-white/90 shadow-card-flat backdrop-blur">
            {topicLabel(item.topic)}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col justify-between p-5">
          <h3 className="font-display text-[17px] font-bold leading-snug transition-colors duration-200 group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-3 text-[13px] text-ink-faint">
            {item.readTime} · {item.date}
          </p>
        </div>
      </Card>
    </motion.a>
  );
}
