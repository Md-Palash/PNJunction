"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../Reveal";

const faqs = [
  {
    question: "Who is PNJunction for?",
    answer: "Anyone who uses technology and wants clear, practical guidance — from casual users to developers.",
  },
  {
    question: "Is the content free?",
    answer: "Yes. All articles and tools are free to read and use, with no paywall.",
  },
  {
    question: "Do I need an account?",
    answer: "No account is required to read content or use any of the tools.",
  },
  {
    question: "How often is content updated?",
    answer: "Regularly — guides are revisited whenever the tools or platforms they cover change meaningfully.",
  },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-2xl mx-auto container-px">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight text-center mb-14">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-navy font-display">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-ink-faint shrink-0"
                    >
                      <ChevronDown size={18} strokeWidth={1.75} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-ink-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
