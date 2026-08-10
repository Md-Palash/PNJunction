"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JunctionGraphic } from "./JunctionGraphic";

export function Hero() {
  return (
    <section id="top" className="pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="max-w-container mx-auto container-px grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent-soft px-3 py-1 rounded-full mb-6"
          >
            Now covering AI, security &amp; systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[40px] leading-[1.08] sm:text-5xl md:text-[56px] font-semibold text-navy tracking-tight"
          >
            Where technology
            <br />
            actually connects.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 text-lg text-ink-muted max-w-md leading-relaxed"
          >
            PNJunction brings AI, operating systems, development, and
            security into one clear, well-made place — plus a handful of
            fast tools you'll actually reach for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#categories"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-6 py-3.5 rounded-full shadow-soft hover:bg-navy-light transition-colors"
            >
              Explore categories
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#tools"
              className="inline-flex items-center gap-2 text-navy text-sm font-medium px-6 py-3.5 rounded-full border border-border hover:bg-surface transition-colors"
            >
              Try the tools
            </motion.a>
          </motion.div>
        </div>

        <div aria-hidden="true">
          <JunctionGraphic />
        </div>
      </div>
    </section>
  );
}
