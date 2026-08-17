"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { ContentCard } from "./ContentCard";
import { latestItems } from "@/lib/data";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function LatestSection() {
  return (
    <section id="latest" className="section-pad py-16 sm:py-20 lg:py-28">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Latest"
          heading="Fresh from PNJunction."
          action={
            <Button as="a" href="#" variant="ghost" withArrow className="px-0">
              View all
            </Button>
          }
        />
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7"
        >
          {latestItems.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
