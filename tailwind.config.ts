import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070f",
        card: "#0e0e1c",
        text: "#e4e4f0",
        dim: "#555570",
        dim2: "#888899",
        lime: "#c8ff00",
        purple: "#a78bfa",
        red: "#ff6b6b",
        borderc: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dmsans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
