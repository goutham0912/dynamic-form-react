/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(240, 248, 254)",
        secondary: "rgb(25, 116, 220)",
        black: "rgb(31,31,31)",
        white: "#ffffff",
        grey: "rgb(245, 247, 249)",
        purple: "rgb(99, 102, 241)",
        darkGrey: "#eeeeee",
      },
    },
  },
  plugins: [],
};

