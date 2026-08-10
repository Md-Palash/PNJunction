"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const articles = [
  {
    slug: "how-local-llms-are-changing-the-developer-workflow",
    category: "AI",
    title: "How local LLMs are changing the developer workflow",
    description:
      "A practical look at running models on-device, and where they genuinely save time.",
    readTime: "6 min read",
    date: "Jul 28, 2026",
  },
  {
    slug: "password-habits-still-putting-accounts-at-risk",
    category: "Cybersecurity",
    title: "The password habits still putting accounts at risk",
    description:
      "Common patterns in credential leaks, and the small changes that close them.",
    readTime: "5 min read",
    date: "Jul 22, 2026",
  },
  {
    slug: "setting-up-a-minimal-fast-daily-driver-distro",
    category: "Linux",
    title: "Setting up a minimal, fast daily-driver distro",
    description:
      "A clean install checklist for a Linux desktop that stays out of your way.",
    readTime: "8 min read",
    date: "Jul 15, 2026",
  },
];

export function LatestArticles() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Latest articles
              </h2>
              <p className="mt-4 text-ink-muted text-lg max-w-md leading-relaxed">
                Fresh writing from across every category, updated regularly.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.08}>
              <motion.a
                href={`/articles/${article.slug}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block h-full bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <div className="aspect-[16/10] bg-surface relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-navy/[0.06] to-accent/[0.08] flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-ink-faint tracking-wide uppercase">
                      Article image
                    </span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="mt-2.5 text-lg font-semibold text-navy font-display leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-ink-faint">
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
