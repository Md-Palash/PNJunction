"use client";

import { useId } from "react";
import { ArrowIcon } from "./icons";
import Reveal from "./ui/Reveal";

export default function NewsletterSection() {
  const id = useId();

  return (
    <section className="pn-section">
      <Reveal>
        <div className="pn-card flex flex-wrap items-center justify-between gap-7 rounded-lg2 bg-gradient-to-br from-white to-accentSoft p-10">
          <div>
            <h2 className="text-[1.5rem] font-extrabold">Stay in the loop.</h2>
            <p className="mt-1.5 max-w-[340px] text-[14.5px] text-inkSoft">
              One short email. New topics, tools &amp; standout reads.
            </p>
          </div>

          <form
            className="flex flex-wrap gap-2.5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor={id} className="sr-only">
              Email address
            </label>
            <input
              id={id}
              type="email"
              placeholder="you@example.com"
              className="min-w-[240px] rounded-full border border-borderc bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-[#9AA6BD] focus:border-accent focus:outline-none"
            />
            <button type="submit" className="pn-btn pn-btn-primary">
              Subscribe
              <ArrowIcon className="pn-btn-arrow" />
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
