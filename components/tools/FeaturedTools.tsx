"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { featuredTools, slugify } from "./data";

export function FeaturedTools() {
  return (
    <section id="featured" className="py-20 md:py-28">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Featured tools
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              A handful of the tools people reach for most.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTools.map((tool, i) => (
            <Reveal key={tool.id} delay={i * 0.06}>
              <motion.a
                href={`/tools/${slugify(tool.name)}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    <tool.icon size={20} strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy font-display">
                  {tool.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed flex-1">
                  {tool.description}
                </p>
                <span className="mt-4 inline-flex w-fit items-center text-xs font-medium text-accent bg-accent-soft px-2.5 py-1 rounded-full">
                  {tool.category}
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
