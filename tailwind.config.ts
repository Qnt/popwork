import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent1: "#EFDFFD",
        accent2: "#E5FFC7",
        accent3: "#FDE49B",
      },
      backgroundImage: {
        "hero-pattern": "url('@/app/assets/hero-pattern.svg')",
        pattern: "url('@/app/assets/pattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
