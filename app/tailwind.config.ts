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
        "editorial-navy": "#0A1628",
        "editorial-blue": "#1E3A5F",
        "editorial-accent": "#C8102E",
        "editorial-gray": "#F5F5F5",
        "editorial-text": "#2C2C2C",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Merriweather", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

