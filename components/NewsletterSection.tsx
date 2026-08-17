"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="section-pad py-16 sm:py-20">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <Card
            interactive={false}
            className="mx-auto flex max-w-[720px] flex-col items-center gap-5 px-6 py-10 text-center sm:px-14 sm:py-14"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="font-display text-[26px] font-bold sm:text-[30px]">
              Stay in the loop.
            </h2>
            <p className="max-w-[420px] text-[15px] leading-relaxed text-ink-soft">
              One short email a week — the topics, articles, and tools worth
              your time. No noise.
            </p>

            {submitted ? (
              <p className="flex items-center gap-2 rounded-pill bg-accent-soft px-5 py-3 text-[14.5px] font-semibold text-accent-deep">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                You&apos;re on the list.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex w-full max-w-[420px] flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="min-h-[44px] flex-1 rounded-pill border border-border bg-white px-5 text-[15px] text-ink placeholder:text-ink-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                />
                <Button type="submit" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
