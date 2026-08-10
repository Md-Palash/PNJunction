"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  AppWindow,
  Smartphone,
  Code2,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  {
    slug: "ai",
    icon: BrainCircuit,
    title: "AI",
    description: "Models, tools, and workflows explained clearly.",
  },
  {
    slug: "windows",
    icon: AppWindow,
    title: "Windows",
    description: "Tips, tweaks, and fixes for daily Windows use.",
  },
  {
    slug: "android",
    icon: Smartphone,
    title: "Android",
    description: "Apps, setup guides, and platform deep dives.",
  },
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    description: "Practical frontend and backend engineering.",
  },
  {
    slug: "linux",
    icon: Terminal,
    title: "Linux",
    description: "Distros, shells, and system administration.",
  },
  {
    slug: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Threats, defenses, and safe practices.",
  },
];

export function FeaturedCategories() {
  return (
    <section id="categories" className="py-24 md:py-32 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Six categories, one standard.
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Every topic on PNJunction is held to the same bar: accurate,
              current, and written for people who actually use this stuff.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <motion.a
                href={`/categories/${cat.slug}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group block h-full bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <cat.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy font-display">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {cat.description}
                </p>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
