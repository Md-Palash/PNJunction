"use client";

import { motion } from "framer-motion";
import { CategoryArticle } from "./data";

export function ArticleCard({ article }: { article: CategoryArticle }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300"
    >
      <a href={`/articles/${article.id}`} className="block group">
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
            {article.tag}
          </span>
          <h3 className="mt-2.5 text-lg font-semibold text-navy font-display leading-snug">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">
            {article.description}
          </p>
          <div className="mt-5 flex items-center gap-3 text-xs text-ink-faint">
            <span>{article.readTime} min read</span>
            <span aria-hidden="true">·</span>
            <span>{article.displayDate}</span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}
