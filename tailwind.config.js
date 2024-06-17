/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        subs: "#4d5061",
        black: "#3d3b30",
        white: "#ffffff",
        border: "#b5b5b5",
        tertiary: "#ff6b1a",
        placeholder: "#ababab",
        primary: "#044e62",
        secondary: "#067D9D",
        bg: "#f4f4f4",
        "soft-primary": "#bfecf9",
        danger: "#e91957",
        success: "#18cc4b",
      },
    },
  },
  plugins: [],
};
