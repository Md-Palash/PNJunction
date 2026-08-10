"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SearchResult } from "./data";
import { highlightMatch } from "./highlightMatch";

const typeLabel: Record<SearchResult["type"], string> = {
  article: "Article",
  tool: "Tool",
  resource: "Resource",
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Articles and resources both read through the article template for now;
// only tools have their own dynamic route.
function resultHref(result: SearchResult) {
  return result.type === "tool"
    ? `/tools/${slugify(result.title)}`
    : `/articles/${slugify(result.title)}`;
}

export function ResultCard({
  result,
  query,
}: {
  result: SearchResult;
  query: string;
}) {
  return (
    <motion.a
      href={resultHref(result)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group flex items-start gap-4 bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
    >
      <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
        <result.icon size={19} strokeWidth={1.75} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-accent bg-accent-soft px-2.5 py-0.5 rounded-full">
            {result.category}
          </span>
          <span className="text-xs text-ink-faint">{typeLabel[result.type]}</span>
        </div>
        <h3 className="mt-2 text-base font-semibold text-navy font-display leading-snug">
          {highlightMatch(result.title, query)}
        </h3>
        <p className="mt-1.5 text-sm text-ink-muted leading-relaxed line-clamp-2">
          {result.description}
        </p>
        {(result.readTime || result.date) && (
          <div className="mt-3 flex items-center gap-3 text-xs text-ink-faint">
            {result.readTime && <span>{result.readTime} min read</span>}
            {result.readTime && result.date && <span aria-hidden="true">·</span>}
            {result.date && <span>{result.date}</span>}
          </div>
        )}
      </div>

      <ArrowRight
        size={18}
        className="text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-1"
      />
    </motion.a>
  );
}
