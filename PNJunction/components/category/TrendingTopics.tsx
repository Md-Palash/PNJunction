"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Gauge,
  Cpu,
  Wifi,
  Wrench,
} from "lucide-react";
import { Reveal } from "../Reveal";

const topics = [
  { icon: Sparkles, label: "Windows 11" },
  { icon: ShieldCheck, label: "Windows Security" },
  { icon: Gauge, label: "Performance" },
  { icon: Cpu, label: "Drivers" },
  { icon: Wifi, label: "Networking" },
  { icon: Wrench, label: "Troubleshooting" },
];

export function TrendingTopics() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy tracking-tight mb-8">
            Trending topics
          </h2>
        </Reveal>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
          {topics.map((topic, i) => (
            <Reveal key={topic.label} delay={i * 0.05} className="shrink-0">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group flex items-center gap-3 bg-card border border-border rounded-2xl pl-4 pr-6 py-4 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300 min-w-[220px]"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300 shrink-0">
                  <topic.icon size={18} strokeWidth={1.75} />
                </div>
                <span className="text-sm font-medium text-navy whitespace-nowrap">
                  {topic.label}
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
