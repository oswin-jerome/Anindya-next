import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  corePlugins: {
    container: false,
  },
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "16px",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        app: {
          primary: "#623412",
          bg: "#F3F3F3",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".container": {
          maxWidth: "98vw",
          "@screen sm": {
            maxWidth: "95vw",
          },
          "@screen md": {
            maxWidth: "90vw",
          },
          "@screen lg": {
            maxWidth: "90vw",
          },
          "@screen xl": {
            maxWidth: "90vw",
          },
        },
      });
    },
  ],
};
export default config;
