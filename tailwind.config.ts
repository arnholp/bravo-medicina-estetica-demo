import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        linen: "#EADFD2",
        gold: "#C9A86A",
        coffee: "#2B2118",
        ink: "#111111",
        olive: "#5F6F52",
        blush: "#F6ECE4"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Montserrat", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(43, 33, 24, 0.10)",
        glow: "0 24px 80px rgba(201, 168, 106, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
