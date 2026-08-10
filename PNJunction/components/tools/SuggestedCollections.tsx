"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { collections } from "./data";

export function SuggestedCollections() {
  return (
    <section id="collections" className="py-20 md:py-28">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Suggested collections
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Curated groups of tools for common jobs.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collections.map((collection, i) => (
            <Reveal key={collection.id} delay={i * 0.06}>
              <motion.a
                href="/tools"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center -space-x-2">
                  {collection.icons.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="h-9 w-9 flex items-center justify-center rounded-full bg-accent-soft text-accent border-2 border-card"
                      style={{ zIndex: collection.icons.length - idx }}
                    >
                      <Icon size={15} strokeWidth={1.75} />
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {collection.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed flex-1">
                  {collection.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Explore collection
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
