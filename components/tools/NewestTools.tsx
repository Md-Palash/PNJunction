"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { newestTools, slugify } from "./data";

export function NewestTools() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Newest tools
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Just shipped, and ready to use.
            </p>
          </div>
        </Reveal>

        <div className="flex gap-5 overflow-x-auto pb-2 -mx-1 px-1">
          {newestTools.map((tool, i) => (
            <Reveal key={tool.id} delay={i * 0.06} className="shrink-0">
              <motion.a
                href={`/tools/${slugify(tool.name)}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300 w-[260px] shrink-0"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    <tool.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    New
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {tool.description}
                </p>
                <p className="mt-4 pt-4 border-t border-border text-xs text-ink-faint">
                  Released {tool.releaseDate}
                </p>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
