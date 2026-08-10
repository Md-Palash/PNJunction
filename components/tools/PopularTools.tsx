"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { popularTools, slugify } from "./data";

export function PopularTools() {
  return (
    <section id="popular" className="py-20 md:py-28">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Popular tools
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              What everyone else is reaching for this month.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularTools.map((tool, i) => (
            <Reveal key={tool.id} delay={i * 0.06}>
              <motion.a
                href={`/tools/${slugify(tool.name)}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <tool.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {tool.description}
                </p>
                {tool.useCase && (
                  <p className="mt-3 text-xs text-ink-faint">
                    Best for: <span className="text-ink-muted">{tool.useCase}</span>
                  </p>
                )}
                {tool.usageCount && (
                  <p className="mt-4 pt-4 border-t border-border text-xs text-ink-faint">
                    {tool.usageCount}
                  </p>
                )}
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
