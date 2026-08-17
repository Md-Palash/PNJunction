"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/Card";
import { CardArt } from "./CardArt";
import { LatestItem, topicLabel } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

/**
 * Editorial "Latest" card: image on the left, information on the right
 * (Reference 2's structure), stacking to image-on-top on small screens.
 * The topic badge is the strong, recognizable label; content-type is a
 * quiet secondary tag beside it.
 */
export function ContentCard({ item }: { item: LatestItem }) {
  return (
    <motion.a href="#" variants={fadeUp} aria-label={item.title}>
      <Card
        className="group flex h-full flex-col p-0 sm:flex-row"
        showMark={false}
      >
        <CardArt
          topic={item.topic}
          className="h-40 w-full shrink-0 sm:h-auto sm:w-[42%]"
        />
        <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-pill bg-accent-soft px-3 py-1 text-[12px] font-display font-semibold uppercase tracking-wide text-accent-deep">
                {topicLabel(item.topic)}
              </span>
              <span className="text-[12px] font-medium uppercase tracking-wide text-ink-faint">
                {item.contentType}
              </span>
            </div>
            <h3 className="mt-3 font-display text-[18px] font-bold leading-snug transition-colors duration-200 group-hover:text-accent">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-ink-faint">
              {item.readTime} · {item.date}
            </p>
            <ArrowUpRight
              className="h-4 w-4 text-ink-faint opacity-0 transition-all duration-300 ease-junction group-hover:opacity-100 group-hover:text-accent"
              strokeWidth={2.25}
            />
          </div>
        </div>
      </Card>
    </motion.a>
  );
}
