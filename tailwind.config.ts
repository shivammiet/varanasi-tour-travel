import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#FF9933",
          light: "#FFB166",
          dark: "#E07B12",
        },
        indigo: {
          DEFAULT: "#0B3552",
          light: "#134668",
          dark: "#072235",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E0C784",
          dark: "#9C7B32",
        },
        cream: "#FFF9F2",
        ink: "#221C14",
        ganga: "#0E4A63",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "ripple": "radial-gradient(circle at 1px 1px, rgba(201,162,75,0.15) 1px, transparent 0)",
      },
      boxShadow: {
        diya: "0 10px 40px -12px rgba(255, 153, 51, 0.35)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(0.96)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 2.2s ease-in-out infinite",
        rise: "rise 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
