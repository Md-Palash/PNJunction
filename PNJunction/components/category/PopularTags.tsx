"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

const tags = ["Windows", "AI", "Android", "Linux", "Hardware", "Programming"];

export function PopularTags() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy tracking-tight mb-7">
            Popular tags
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <Reveal key={tag} delay={i * 0.04} className="inline-block">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, backgroundColor: "#0B1730", color: "#ffffff" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center text-sm font-medium text-navy bg-surface border border-border px-5 py-2.5 rounded-full"
              >
                {tag}
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
