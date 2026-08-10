"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FilterBar, SortOption } from "./FilterBar";
import { ArticleGrid } from "./ArticleGrid";
import { EmptyState } from "./EmptyState";
import { categoryArticles } from "./data";

export function CategoryBrowser() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    let list = categoryArticles.filter((a) => {
      const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
      const matchesTag = activeTag === "All" || a.tag === activeTag;
      return matchesSearch && matchesTag;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "oldest":
          return a.date.localeCompare(b.date);
        case "popular":
          return b.popularity - a.popularity;
        case "reading-time":
          return a.readTime - b.readTime;
        case "newest":
        default:
          return b.date.localeCompare(a.date);
      }
    });

    return list;
  }, [search, sort, activeTag]);

  const resetFilters = () => {
    setSearch("");
    setActiveTag("All");
  };

  return (
    <section aria-labelledby="grid-heading">
      <h2 id="grid-heading" className="sr-only">
        Windows articles
      </h2>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
        activeTag={activeTag}
        onTagChange={setActiveTag}
      />

      {filtered.length > 0 ? (
        <>
          <ArticleGrid articles={filtered} />

          {/* Placeholder load point — wire to pagination or infinite
              scroll later without changing the layout above. */}
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-medium text-navy border border-border px-6 py-3 rounded-full hover:bg-surface transition-colors"
            >
              Load more articles
            </motion.button>
          </div>
        </>
      ) : (
        <EmptyState onReset={resetFilters} />
      )}
    </section>
  );
}
