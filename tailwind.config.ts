import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F6F7F9",
        card: "#FFFFFF",
        border: "#E6E9EF",
        navy: {
          DEFAULT: "#0B1730",
          light: "#132444",
          dark: "#060D1C",
        },
        accent: {
          DEFAULT: "#2F6FED",
          light: "#5B8FF6",
          dark: "#1E4FBF",
          soft: "#EAF1FE",
        },
        ink: {
          DEFAULT: "#0B1220",
          muted: "#5B6472",
          faint: "#8A93A3",
        },
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(11, 23, 48, 0.04), 0 1px 2px rgba(11, 23, 48, 0.03)",
        card: "0 4px 20px rgba(11, 23, 48, 0.06), 0 1px 3px rgba(11, 23, 48, 0.04)",
        hover: "0 12px 32px rgba(11, 23, 48, 0.10), 0 2px 6px rgba(11, 23, 48, 0.05)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8px, -10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        pulseDot: "pulseDot 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
