"use client";

import { motion } from "framer-motion";
import { AboutGraphic } from "./AboutGraphic";

export function AboutHero() {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="max-w-container mx-auto container-px grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[36px] leading-[1.1] sm:text-5xl md:text-[52px] font-semibold text-navy tracking-tight"
          >
            About PNJunction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg text-ink-muted max-w-md leading-relaxed"
          >
            PNJunction exists to simplify technology — through practical
            guides, useful tools, and educational resources that respect
            your time and intelligence.
          </motion.p>
        </div>

        <div aria-hidden="true">
          <AboutGraphic />
        </div>
      </div>
    </section>
  );
}
