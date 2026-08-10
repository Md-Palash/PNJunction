"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  AppWindow,
  Smartphone,
  Terminal,
  ShieldCheck,
  Code2,
  ListChecks,
  Wrench,
} from "lucide-react";
import { Reveal } from "../Reveal";

const coverage = [
  { icon: BrainCircuit, title: "Artificial Intelligence", description: "Models, tools, and workflows explained clearly." },
  { icon: AppWindow, title: "Windows", description: "Tips, tweaks, and fixes for daily use." },
  { icon: Smartphone, title: "Android", description: "Apps, setup guides, and platform deep dives." },
  { icon: Terminal, title: "Linux", description: "Distros, shells, and system administration." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Threats, defenses, and safe practices." },
  { icon: Code2, title: "Web Development", description: "Practical frontend and backend engineering." },
  { icon: ListChecks, title: "Productivity", description: "Workflows and habits that actually stick." },
  { icon: Wrench, title: "Developer Tools", description: "Utilities that speed up everyday work." },
];

export function WhatWeCover() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              What we cover
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Eight areas, one consistent standard of quality.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coverage.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <item.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
