"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  RefreshCw,
  Lock,
  Zap,
  Heart,
  Sparkles,
  Palette,
  MegaphoneOff,
} from "lucide-react";
import { Reveal } from "../Reveal";

const trustPoints = [
  { icon: BadgeCheck, title: "Accurate content", description: "Fact-checked and written by people who use this daily." },
  { icon: RefreshCw, title: "Regular updates", description: "Guides get revisited as tools and platforms change." },
  { icon: Lock, title: "Privacy focused", description: "No unnecessary tracking, no dark patterns." },
  { icon: Zap, title: "Fast tools", description: "Utilities that respond instantly, every time." },
  { icon: Heart, title: "User first", description: "Decisions are made for readers, not for pageviews." },
  { icon: Sparkles, title: "Clean experience", description: "No pop-ups, no interstitials, no clutter." },
  { icon: Palette, title: "Professional design", description: "Built with the same care as the content itself." },
  { icon: MegaphoneOff, title: "No clickbait", description: "Titles say what the article actually delivers." },
];

export function WhyTrust() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Why trust PNJunction
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Trust is earned in the small decisions, not the taglines.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <point.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
