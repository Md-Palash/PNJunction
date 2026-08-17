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
        bg: "#FCFCFA",
        "bg-secondary": "#F7F8F7",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#0B1733",
          soft: "#5B6577",
          faint: "#8B93A3",
        },
        border: {
          DEFAULT: "#EAEAE6",
          strong: "#DEDFDA",
        },
        accent: {
          DEFAULT: "#2563EB",
          deep: "#1D4FC4",
          soft: "#EAF2FF",
          faint: "#F5F9FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "card-lg": "24px",
        "card-md": "20px",
        "card-sm": "16px",
        card: "20px",
        pill: "999px",
      },
      boxShadow: {
        /* Soft, low-key resting shadow — a card gently sitting above the
           milky-white page, never a "floating" or heavy drop shadow. */
        "card-idle":
          "0 1px 1px rgba(11, 23, 51, 0.03), 0 6px 16px -10px rgba(11, 23, 51, 0.10)",
        "card-hover":
          "0 2px 3px rgba(11, 23, 51, 0.05), 0 14px 28px -12px rgba(11, 23, 51, 0.16)",
        "card-flat":
          "0 1px 1px rgba(11, 23, 51, 0.03), 0 3px 8px -5px rgba(11, 23, 51, 0.08)",
        nav: "0 1px 0 rgba(11, 23, 51, 0.04), 0 6px 18px -12px rgba(11, 23, 51, 0.08)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
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
