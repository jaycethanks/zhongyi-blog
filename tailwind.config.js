/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // plugins: [require("tailwindcss-multi-column")],
  theme: {
    extend: {
      colors: {
        BG_MAIN: "rgb(249 247 241)",
        BG_MAIN_DEEP: "rgb(240, 237, 230)",
        DARK_BG_MAIN: "rgb(17,24,39)",
        DARK_BG_MAIN_DEEP: "#1b2332",
        TEXT_MAIN: "rgb(30, 41, 59)",
        REMARK_TEXT: "#475569",
        DARK_REMARK_TEXT: "#8898af",
        DARK_TEXT_MAIN: "rgb(148, 163, 184)",
        COLOR_MAIN: "rgb(59, 130, 246)",
        DARK_COLOR_MAIN: "rgb(37, 99, 235)",
        DIVIDER_LINE: "rgb(226, 232, 240)",
        DARK_DIVIDER_LINE: "rgb(71, 85, 105)",
      },
      transitionDuration: {
        TRANSITION_DURATION: "200ms",
      },
      transitionTimingFunction: {
        "slow-ease": "cubic-bezier(0, 0.78, 0.1, 0.95)",
      },
      columns: {},
    },
  },
  plugins: [],
};
