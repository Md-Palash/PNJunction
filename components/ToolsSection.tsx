"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { ToolCard } from "./ToolCard";
import { tools } from "@/lib/data";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function ToolsSection() {
  return (
    <section id="tools" className="section-pad bg-bg-secondary py-16 sm:py-20 lg:py-28">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Tools"
          heading="Useful Tools"
          supporting="Small, fast utilities for everyday technical tasks."
        />
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center sm:justify-start">
          <Button as="a" href="#" variant="secondary" withArrow>
            Explore All Tools
          </Button>
        </div>
      </div>
    </section>
  );
}
