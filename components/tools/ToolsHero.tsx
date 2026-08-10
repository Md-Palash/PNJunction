"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ToolsGraphic } from "./ToolsGraphic";

export function ToolsHero() {
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
            Free tech tools that
            <br />
            save you time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg text-ink-muted max-w-md leading-relaxed"
          >
            Every tool here is free, fast, and privacy-friendly — built for
            the small, everyday tasks that don't deserve a sign-up form.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#featured"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-6 py-3.5 rounded-full shadow-soft hover:bg-navy-light transition-colors"
            >
              Explore tools
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#categories"
              className="inline-flex items-center gap-2 text-navy text-sm font-medium px-6 py-3.5 rounded-full border border-border hover:bg-surface transition-colors"
            >
              View categories
            </motion.a>
          </motion.div>
        </div>

        <div aria-hidden="true">
          <ToolsGraphic />
        </div>
      </div>
    </section>
  );
}
