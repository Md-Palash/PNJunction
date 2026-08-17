"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { HeroVisual } from "./HeroVisual";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container-wide section-pad relative grid items-center gap-10 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:gap-6 lg:pb-28 lg:pt-16">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-pill bg-accent-soft px-4 py-1.5 text-[13px] font-display font-semibold text-accent-deep"
          >
            A technology discovery platform
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-[560px] text-balance font-display text-[38px] font-extrabold leading-[1.08] sm:text-[48px] lg:text-[54px]"
          >
            Where technology actually connects.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[440px] text-[17px] leading-relaxed text-ink-soft"
          >
            Explore technology, learn something useful, and discover tools
            that make things easier.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button as="a" href="#topics" withArrow>
              Explore Topics
            </Button>
            <Button as="a" href="#tools" variant="secondary">
              Try the Tools
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
