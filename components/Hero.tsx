"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import HeroVisual from "./HeroVisual";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pb-12 pt-16 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: easing }}
            className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-accentStrong"
          >
            Technology, connected
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easing }}
            className="text-[2.2rem] font-extrabold leading-[1.08] md:text-[3.4rem]"
          >
            Where technology
            <br />
            actually connects.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: easing }}
            className="my-5 max-w-[460px] text-[17px] leading-relaxed text-inkSoft"
          >
            Explore technology, learn something useful, and discover tools that make things easier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easing }}
            className="flex flex-wrap gap-3.5"
          >
            <Button href="#topics" variant="primary">
              Explore Topics
            </Button>
            <Button href="#tools" variant="ghost">
              Try the Tools
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easing }}
          className="mx-auto w-full max-w-[420px] md:max-w-none"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
