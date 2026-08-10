"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

const related = [
  {
    category: "AI",
    title: "Prompt caching: the free performance win most teams skip",
    description:
      "A close look at how caching repeated context cuts both latency and cost.",
    readTime: "4 min read",
  },
  {
    category: "Web Development",
    title: "Streaming UI patterns for slow model responses",
    description:
      "Loading states, partial renders, and how to keep an interface feeling fast.",
    readTime: "7 min read",
  },
  {
    category: "Cybersecurity",
    title: "What changes when your tooling runs offline",
    description:
      "The security trade-offs teams overlook when moving inference on-device.",
    readTime: "5 min read",
  },
];

export function RelatedArticles() {
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-semibold text-navy tracking-tight mb-8">
        Related articles
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((article, i) => (
          <Reveal key={article.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300"
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
                <h3 className="mt-2.5 text-base font-semibold text-navy font-display leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {article.description}
                </p>
                <p className="mt-4 text-xs text-ink-faint">{article.readTime}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
