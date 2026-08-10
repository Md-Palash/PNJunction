"use client";

import { motion } from "framer-motion";
import { QrCode, KeyRound, Image as ImageIcon, Braces, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const tools = [
  {
    slug: "qr-generator",
    icon: QrCode,
    title: "QR Generator",
    description: "Create a clean QR code from any link in seconds.",
  },
  {
    slug: "password-generator",
    icon: KeyRound,
    title: "Password Generator",
    description: "Strong, random passwords with adjustable rules.",
  },
  {
    slug: "image-compressor",
    icon: ImageIcon,
    title: "Image Compressor",
    description: "Shrink image file size without losing quality.",
  },
  {
    slug: "json-formatter",
    icon: Braces,
    title: "JSON Formatter",
    description: "Format and validate JSON, instantly and locally.",
  },
];

export function PopularTools() {
  return (
    <section id="tools" className="py-24 md:py-32 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Popular tools
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              No sign-up, no clutter — small utilities that just work.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 0.06}>
              <motion.a
                href={`/tools/${tool.slug}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    <tool.icon size={20} strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {tool.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {tool.description}
                </p>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
