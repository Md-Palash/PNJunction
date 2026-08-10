"use client";

import { motion } from "framer-motion";
import { AppWindow, FileText, Clock } from "lucide-react";
import { CategoryGraphic } from "./CategoryGraphic";

export function CategoryHero() {
  return (
    <section className="pt-32 md:pt-40 pb-4">
      <div className="max-w-container mx-auto container-px">
        <div className="bg-card border border-border rounded-3xl shadow-soft px-8 py-12 md:px-14 md:py-16 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <AppWindow size={22} strokeWidth={1.75} />
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-navy tracking-tight">
              Windows
            </h1>

            <p className="mt-4 text-lg text-ink-muted leading-relaxed max-w-md">
              Practical guides, fixes, and deep dives for running Windows
              well — from everyday tweaks to system-level troubleshooting.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-ink-faint">
              <span className="flex items-center gap-1.5">
                <FileText size={15} strokeWidth={1.75} />
                128 articles
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} strokeWidth={1.75} />
                Updated Aug 2, 2026
              </span>
            </div>
          </motion.div>

          <div aria-hidden="true" className="hidden sm:block">
            <CategoryGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
