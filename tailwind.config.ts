import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#ff941c",
        "orange-2": "#FFC17C",
        "orange-3": "#fd5f00"
      }
    },
  },
  plugins: [],
};
export default config;
