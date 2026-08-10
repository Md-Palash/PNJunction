"use client";

import { motion } from "framer-motion";
import { KeyRound, Image as ImageIcon, Braces, Binary, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";

const tools = [
  { icon: KeyRound, title: "Password Generator", description: "Strong, random passwords, instantly." },
  { icon: ImageIcon, title: "Image Compressor", description: "Shrink file size without losing quality." },
  { icon: Braces, title: "JSON Formatter", description: "Format and validate JSON on the spot." },
  { icon: Binary, title: "Base64 Encoder", description: "Encode or decode text and files." },
];

export function RelatedTools() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight mb-14">
            Related tools
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 0.06}>
              <motion.a
                href={`/tools/${tool.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
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
