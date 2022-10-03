/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ultramarine: {
          50: "#EBF0FF",
          100: "#D6E0FF",
          200: "#C7D5FF",
          300: "#7F9DF9",
          500: "#3363FF",
        },
        mustard: {
          300: "#FFE799",
          500: "#FFD95E",
          800: "#DAA701",
        },
        brown: {
          500: "#7C4B00",
        },
      },
      fontFamily: {
        display: ['"Passion One"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
