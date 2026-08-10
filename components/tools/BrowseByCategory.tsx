"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { categories } from "./data";

export function BrowseByCategory() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Browse by category
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Every tool is organized so you can scan, not search.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <motion.a
                href="/tools"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex items-start gap-4 h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300 shrink-0">
                  <cat.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-navy font-display">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-ink-faint">{cat.count} tools</span>
                  </div>
                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
