"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, Wrench } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { SectionHeader } from "./ui/SectionHeader";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Explore Topics",
    description: "Pick what you're curious about.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Read & Discover",
    description: "Learn from clear, visual content.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Use Free Tools",
    description: "Get things done, right in the browser.",
    icon: Wrench,
  },
];

export function StartHere() {
  return (
    <section id="start-here" className="section-pad py-16 sm:py-20">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Start Here"
          heading="New to PNJunction?"
          align="center"
          className="sm:justify-center"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp}>
              <Card className="flex h-full flex-col gap-4 p-6" showMark={false}>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[13px] font-bold tracking-widest text-ink-faint">
                    {step.number}
                  </span>
                  <step.icon className="h-5 w-5 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-display text-[17px] font-bold">
                  {step.title}
                </h3>
                <p className="text-[14px] text-ink-soft">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex justify-center"
        >
          <Button as="a" href="#topics" withArrow>
            Start Exploring
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
