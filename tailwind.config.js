/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BG_MAIN: "rgb(249 247 241)",
        BG_MAIN_DEEP: "rgb(240, 237, 230)",
        DARK_BG_MAIN: "rgb(17,24,39)",
        DARK_BG_MAIN_DEEP: "rgb(15, 18, 33)",
        TEXT_MAIN: "rgb(30, 41, 59)",
        DARK_TEXT_MAIN: "rgb(148, 163, 184)",
        COLOR_MAIN: "rgb(59, 130, 246)",
        DARK_COLOR_MAIN: "rgb(37, 99, 235)",
      },
    },
  },
  plugins: [],
};
