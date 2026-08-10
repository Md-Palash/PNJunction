"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, Wrench, Layers } from "lucide-react";
import { searchIndex, quickFilterOptions } from "./data";
import { highlightMatch } from "./highlightMatch";

type Suggestion = {
  id: string;
  label: string;
  sublabel: string;
  kind: "article" | "tool" | "category";
};

function useSuggestions(query: string): Suggestion[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const fromIndex: Suggestion[] = searchIndex
      .filter((r) => r.title.toLowerCase().includes(q))
      .slice(0, 5)
      .map((r) => ({
        id: r.id,
        label: r.title,
        sublabel: r.type === "tool" ? "Tool" : r.category,
        kind: r.type === "tool" ? "tool" : "article",
      }));

    const fromCategories: Suggestion[] = quickFilterOptions
      .filter((c) => !["All", "Articles", "Tools", "Resources"].includes(c))
      .filter((c) => c.toLowerCase().includes(q))
      .slice(0, 3)
      .map((c) => ({
        id: `cat-${c}`,
        label: c,
        sublabel: "Category",
        kind: "category",
      }));

    return [...fromIndex, ...fromCategories].slice(0, 7);
  }, [query]);
}

const kindIcon = { article: FileText, tool: Wrench, category: Layers };

export function SearchBar({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useSuggestions(query);
  const dropdownOpen = focused && query.trim().length > 0 && suggestions.length > 0;

  // Cmd+K / Ctrl+K focuses the search input from anywhere on the page.
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Close the dropdown on outside click.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const selectSuggestion = (s: Suggestion) => {
    onQueryChange(s.label);
    setFocused(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!dropdownOpen) {
      if (e.key === "Escape") {
        onQueryChange("");
        inputRef.current?.blur();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) selectSuggestion(suggestions[activeIndex]);
      else setFocused(false);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setFocused(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative max-w-2xl mx-auto">
      <motion.div
        animate={{
          boxShadow: focused
            ? "0 12px 32px rgba(11,23,48,0.12), 0 2px 8px rgba(11,23,48,0.06)"
            : "0 2px 8px rgba(11,23,48,0.04)",
          scale: focused ? 1.01 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`flex items-center gap-3 h-16 px-6 rounded-full border bg-white ${
          focused ? "border-accent" : "border-border"
        }`}
      >
        <Search size={20} strokeWidth={1.75} className="text-ink-faint shrink-0" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={dropdownOpen}
          aria-controls="search-suggestions"
          aria-autocomplete="list"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search articles, tools, guides..."
          className="flex-1 min-w-0 bg-transparent outline-none text-lg text-ink placeholder:text-ink-faint"
        />

        {query.length > 0 && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              onQueryChange("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="h-8 w-8 flex items-center justify-center rounded-full text-ink-faint hover:text-navy hover:bg-surface transition-colors shrink-0"
          >
            <X size={16} strokeWidth={1.75} />
          </motion.button>
        )}

        {query.length === 0 && (
          <span
            aria-hidden="true"
            className="hidden sm:flex items-center gap-0.5 text-xs font-medium text-ink-faint bg-surface border border-border rounded-md px-2 py-1 shrink-0"
          >
            <span className="font-sans">⌘</span>K
          </span>
        )}
      </motion.div>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.ul
            id="search-suggestions"
            role="listbox"
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 mt-3 bg-white border border-border rounded-2xl shadow-hover overflow-hidden py-2 z-40"
          >
            {suggestions.map((s, i) => {
              const Icon = kindIcon[s.kind];
              const active = i === activeIndex;
              return (
                <li key={s.id} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => selectSuggestion(s)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                      active ? "bg-surface" : "bg-transparent"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.75} className="text-ink-faint shrink-0" />
                    <span className="text-sm text-ink flex-1 truncate">
                      {highlightMatch(s.label, query)}
                    </span>
                    <span className="text-xs text-ink-faint shrink-0">{s.sublabel}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
