"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

export function ToolNewsletter() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="bg-surface border border-border rounded-2xl px-7 py-10 md:px-10 md:py-12 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-navy tracking-tight">
              New tools, straight to your inbox.
            </h2>
            <p className="mt-2.5 text-ink-muted leading-relaxed max-w-sm mx-auto">
              We'll let you know when a new tool ships. No noise, unsubscribe
              anytime.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            >
              <label htmlFor="tool-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="tool-newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 h-12 px-4 rounded-full bg-white border border-border text-ink placeholder:text-ink-faint text-sm outline-none focus:border-accent transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="h-12 px-6 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-light transition-colors shrink-0"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
