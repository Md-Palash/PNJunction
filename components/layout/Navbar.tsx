"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { topicList } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Articles", href: "/articles" },
  { label: "Guides", href: "/guides" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-base ease-premium",
        "bg-bg/85 backdrop-blur-md border-b",
        scrolled
          ? "border-border shadow-elevation-1"
          : "border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 lg:h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-control"
            aria-label="PNJunction home"
          >
            <Logo />
          </Link>

          {/* Desktop primary nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-control px-3.5 py-2 text-small font-medium text-ink-secondary transition-colors duration-fast hover:bg-navy-50 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop topic strip */}
          <nav
            aria-label="Topics"
            className="hidden xl:flex items-center gap-1 pl-2 border-l border-border"
          >
            {topicList.slice(0, 5).map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className={cn(
                  "rounded-control px-3 py-2 text-small font-medium text-ink-secondary transition-colors duration-fast hover:bg-navy-50",
                  "hover:text-ink"
                )}
              >
                {topic.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search PNJunction"
              className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-control text-ink-secondary transition-colors duration-fast hover:bg-navy-50 hover:text-ink"
            >
              <Search className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <Button href="/newsletter" size="sm" className="hidden sm:inline-flex">
              Subscribe
            </Button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-control text-ink transition-colors duration-fast hover:bg-navy-50"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-bg transition-[max-height,opacity] duration-slow ease-premium",
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="py-5 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-control px-3.5 py-3 text-body font-medium text-ink transition-colors duration-fast hover:bg-navy-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-border" />
          <div className="grid grid-cols-2 gap-1">
            {topicList.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-control px-3.5 py-3 text-small font-medium text-ink-secondary transition-colors duration-fast hover:bg-navy-50 hover:text-ink"
              >
                {topic.label}
              </Link>
            ))}
          </div>
          <Button href="/newsletter" className="mt-3 w-full">
            Subscribe
          </Button>
        </Container>
      </div>
    </header>
  );
}
