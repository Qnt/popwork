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
      },
      backgroundImage: {
        "hero-pattern": "url('@/app/assets/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
