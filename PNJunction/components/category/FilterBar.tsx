"use client";

import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { categoryTags } from "./data";

export type SortOption = "newest" | "oldest" | "popular" | "reading-time";

const sortLabels: Record<SortOption, string> = {
  newest: "Newest",
  oldest: "Oldest",
  popular: "Most popular",
  "reading-time": "Reading time",
};

export function FilterBar({
  search,
  onSearchChange,
  sort,
  onSortChange,
  activeTag,
  onTagChange,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  sort: SortOption;
  onSortChange: (v: SortOption) => void;
  activeTag: string;
  onTagChange: (v: string) => void;
}) {
  return (
    <div className="sticky top-16 z-30 bg-white/85 backdrop-blur-sm border-b border-border py-4 mb-10">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search
            size={16}
            strokeWidth={1.75}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search in Windows"
            aria-label="Search within this category"
            className="w-full h-11 pl-10 pr-4 rounded-full border border-border bg-surface text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:bg-white transition-colors"
          />
        </div>

        {/* Sort */}
        <div className="relative w-full md:w-auto">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sort articles"
            className="appearance-none w-full md:w-auto h-11 pl-4 pr-10 rounded-full border border-border bg-white text-sm text-navy font-medium outline-none focus:border-accent transition-colors cursor-pointer"
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                Sort: {label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={15}
            strokeWidth={1.75}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none"
          />
        </div>
      </div>

      {/* Category filter chips */}
      <div
        className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1"
        role="group"
        aria-label="Filter by tag"
      >
        {categoryTags.map((tag) => {
          const active = activeTag === tag;
          return (
            <motion.button
              key={tag}
              whileTap={{ scale: 0.96 }}
              onClick={() => onTagChange(tag)}
              aria-pressed={active}
              className={`shrink-0 text-sm px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                active
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-ink-muted border-border hover:bg-surface"
              }`}
            >
              {tag}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
