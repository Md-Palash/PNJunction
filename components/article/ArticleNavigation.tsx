"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ArticleNavigation() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <motion.a
        href="#"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
      >
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink-faint uppercase tracking-wide">
          <ArrowLeft size={13} strokeWidth={2} className="group-hover:-translate-x-0.5 transition-transform" />
          Previous
        </span>
        <p className="mt-2.5 text-base font-semibold text-navy font-display leading-snug">
          The password habits still putting accounts at risk
        </p>
      </motion.a>

      <motion.a
        href="#"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300 sm:text-right"
      >
        <span className="flex items-center gap-1.5 sm:justify-end text-xs font-medium text-ink-faint uppercase tracking-wide">
          Next
          <ArrowRight size={13} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
        <p className="mt-2.5 text-base font-semibold text-navy font-display leading-snug">
          Setting up a minimal, fast daily-driver distro
        </p>
      </motion.a>
    </div>
  );
}
