"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Newsletter() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="relative overflow-hidden bg-navy rounded-3xl px-8 py-14 md:px-16 md:py-16 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #ffffff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative max-w-lg mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Stay ahead, one email at a time.
              </h2>
              <p className="mt-3 text-white/65 leading-relaxed">
                A short, useful digest across AI, systems, and security.
                No noise, unsubscribe anytime.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="flex-1 h-12 px-4 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/45 text-sm outline-none focus:border-accent-light transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="h-12 px-6 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors shrink-0"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
