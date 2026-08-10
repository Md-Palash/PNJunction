"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";

export function FeaturedArticle() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-card border border-border rounded-3xl shadow-soft hover:shadow-hover transition-shadow duration-300 overflow-hidden grid md:grid-cols-2"
          >
            <div className="aspect-[16/10] md:aspect-auto bg-surface relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-navy/[0.06] to-accent/[0.09] flex items-center justify-center"
              >
                <span className="text-xs font-medium text-ink-faint tracking-wide uppercase">
                  Hero image
                </span>
              </motion.div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center text-xs font-medium text-accent bg-accent-soft px-3 py-1 rounded-full">
                Windows
              </span>
              <h2 className="mt-5 text-2xl md:text-[28px] font-semibold text-navy tracking-tight leading-tight">
                Inside the Windows 11 update model — what actually
                changes, and when
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                A clear breakdown of feature updates versus quality
                updates, how rollout rings work, and how to plan around
                them without surprises.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm text-ink-faint">
                <span>Daniel Cho</span>
                <span aria-hidden="true">·</span>
                <span>Jul 30, 2026</span>
                <span aria-hidden="true">·</span>
                <span>9 min read</span>
              </div>

              <motion.a
                href="/articles/inside-the-windows-11-update-model"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 w-fit bg-navy text-white text-sm font-medium px-6 py-3 rounded-full shadow-soft hover:bg-navy-light transition-colors"
              >
                Read article
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}
