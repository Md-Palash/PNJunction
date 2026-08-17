"use client";

import { motion } from "framer-motion";
import { topics } from "@/lib/data";
import { TopicCard } from "./TopicCard";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function TopicGrid() {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
    >
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </motion.div>
  );
}
