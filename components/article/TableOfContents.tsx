"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, List } from "lucide-react";

export const tocItems = [
  { id: "the-shift", label: "The shift to local inference" },
  { id: "where-it-helps", label: "Where it genuinely helps" },
  { id: "trade-offs", label: "Trade-offs to expect" },
  { id: "setting-up", label: "Setting up a local toolchain" },
  { id: "looking-ahead", label: "Looking ahead" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState(tocItems[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const headings = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-28 self-start w-[220px] shrink-0"
      >
        <p className="flex items-center gap-2 text-xs font-semibold text-ink-faint uppercase tracking-wide mb-4">
          <List size={14} strokeWidth={1.75} />
          On this page
        </p>
        <ul className="space-y-1 border-l border-border">
          {tocItems.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block py-1.5 pl-4 -ml-px border-l-2 text-sm leading-snug transition-colors ${
                    active
                      ? "border-accent text-navy font-medium"
                      : "border-transparent text-ink-muted hover:text-navy"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile: collapsible accordion */}
      <div className="lg:hidden border border-border rounded-2xl bg-card mb-8">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-navy"
        >
          <span className="flex items-center gap-2">
            <List size={16} strokeWidth={1.75} />
            On this page
          </span>
          <motion.span
            animate={{ rotate: mobileOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} strokeWidth={1.75} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <ul className="px-5 pb-4 space-y-2.5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className={`text-sm ${
                        activeId === item.id
                          ? "text-accent font-medium"
                          : "text-ink-muted"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
