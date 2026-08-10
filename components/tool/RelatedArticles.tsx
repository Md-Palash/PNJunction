"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

const articles = [
  {
    category: "Utilities",
    title: "How QR codes actually work",
    description: "The encoding basics behind the squares, in plain language.",
    readTime: "5 min read",
  },
  {
    category: "Security",
    title: "Best practices for password creation",
    description: "What actually makes a password hard to crack.",
    readTime: "6 min read",
  },
  {
    category: "Developer",
    title: "Understanding JSON, from the ground up",
    description: "A clear explainer for anyone who's copy-pasted it blindly.",
    readTime: "7 min read",
  },
];

export function RelatedArticles() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight mb-14">
            Related articles
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.08}>
              <motion.a
                href={`/articles/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
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
                  <p className="mt-4 text-xs text-ink-faint">{article.readTime}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
