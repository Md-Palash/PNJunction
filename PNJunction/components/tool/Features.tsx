"use client";

import { Zap, ShieldCheck, Gift, Smartphone, UserX, Clock } from "lucide-react";
import { Reveal } from "../Reveal";

const features = [
  { icon: Zap, title: "Fast", description: "Results appear instantly, no waiting around." },
  { icon: ShieldCheck, title: "Privacy friendly", description: "Nothing you enter is stored or sent anywhere." },
  { icon: Gift, title: "Free forever", description: "No paywalls, no premium tier for basics." },
  { icon: Smartphone, title: "Mobile friendly", description: "Works just as well on a phone as a desktop." },
  { icon: UserX, title: "No sign-up", description: "Open the page and start — no account needed." },
  { icon: Clock, title: "Instant results", description: "No queues, no processing delays." },
];

export function Features() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight mb-14 text-center">
            Why people use it
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="h-full bg-card border border-border rounded-2xl p-6 shadow-soft">
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <feature.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
