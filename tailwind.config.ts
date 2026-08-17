import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-secondary": "#F7F9FC",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#0B1733",
          soft: "#64748B",
          faint: "#94A3B8",
        },
        border: {
          DEFAULT: "#E7EBF3",
          strong: "#DCE3EF",
        },
        accent: {
          DEFAULT: "#2F6FED",
          deep: "#1B4FC4",
          soft: "#EAF1FF",
          faint: "#F4F8FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        pill: "999px",
      },
      boxShadow: {
        "card-idle":
          "0 1px 2px rgba(11, 23, 51, 0.04), 0 8px 20px -8px rgba(11, 23, 51, 0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
        "card-hover":
          "0 2px 4px rgba(11, 23, 51, 0.06), 0 20px 40px -12px rgba(11, 23, 51, 0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
        "card-flat":
          "0 1px 2px rgba(11, 23, 51, 0.04), 0 4px 10px -6px rgba(11, 23, 51, 0.08)",
        nav: "0 1px 0 rgba(11, 23, 51, 0.04), 0 8px 24px -12px rgba(11, 23, 51, 0.10)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.15)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -8px)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
      },
      transitionTimingFunction: {
        junction: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
