"use client";

import { topicList } from "@/lib/tokens";

/**
 * The hero's signature visual: a central navy hub with eight topic-
 * colored nodes orbiting and connecting back to it — a literal picture
 * of "technology topics converging at one junction." Motion is a slow,
 * ambient pulse/rotation, fully stilled under prefers-reduced-motion
 * (see the CSS rule in globals.css, which zeroes animation-duration).
 */
export function HeroGraphic() {
  const radius = 150;
  const center = 200;

  const nodes = topicList.map((topic, i) => {
    const angle = (i / topicList.length) * Math.PI * 2 - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { topic, x, y, delay: i * 0.35 };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Illustration of connected technology topic nodes converging at a central point"
      >
        {/* connecting lines */}
        {nodes.map(({ topic, x, y }) => (
          <line
            key={`line-${topic.slug}`}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="var(--color-border-strong)"
            strokeWidth="1.5"
          />
        ))}

        {/* orbit ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* topic nodes */}
        {nodes.map(({ topic, x, y, delay }) => (
          <g
            key={topic.slug}
            className="motion-safe:animate-node-pulse"
            style={{
              transformOrigin: `${x}px ${y}px`,
              animationDelay: `${delay}s`,
            }}
          >
            <circle
              cx={x}
              cy={y}
              r="20"
              className={topic.soft.replace("bg-", "fill-")}
            />
            <circle
              cx={x}
              cy={y}
              r="6"
              className={topic.text.replace("text-", "fill-")}
            />
          </g>
        ))}

        {/* central hub */}
        <circle cx={center} cy={center} r="34" fill="var(--color-navy)" />
        <circle
          cx={center}
          cy={center}
          r="34"
          fill="none"
          stroke="var(--color-accent-400)"
          strokeWidth="1.5"
          opacity="0.5"
          className="motion-safe:animate-node-pulse"
        />
        <circle cx={center} cy={center} r="9" fill="#FCFCFA" />
      </svg>
    </div>
  );
}
