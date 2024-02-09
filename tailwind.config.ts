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
        "primary300": "#FFB59C",
        "primary400": "#FF8B63",
        "primary": "#FF5F1F",
        "primary600": "#AB3600",
        "primary700": "#832700",
        "neutral": "#6B5B55",
        "neutral400": "#85736E",
        "neutral300": "#A08D87",
        "neutral200": "#BCA7A1",
        "neutral100": "#D8C2BB",
        "neutral000": "#F5DED7",
        "black": "#080808",
        "white": "#F9F6EE",
        "facebook": "#4267B2",
        "google": "#DB4437",
        "amazon": "#FF9900",
        "instagram": "#C13584",
        "twitter": "#1DA1F2",
        "tiktok": "#00f2ea"
      }
    },
  },
  plugins: [],
};
export default config;
