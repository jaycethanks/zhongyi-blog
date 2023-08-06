/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // Plugins: [require("tailwindcss-multi-column")],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      colors: {
        BG_MAIN: '#ffffff',
        BG_MAIN_DEEP: '#f7f7f7',
        DARK_BG_MAIN: '#121212',
        DARK_BG_MAIN_DEEP: '#0f0f0f',
        TEXT_MAIN: '#1d283a',
        DARK_TEXT_MAIN: '#ddd',
        REMARK_TEXT: '#999999',
        DARK_REMARK_TEXT: '#ffffff69',
        COLOR_MAIN: '#3c83f6',
        DARK_COLOR_MAIN: '#2463eb',
        DIVIDER_LINE: '#e1e7ef',
        DARK_DIVIDER_LINE: '#48566a',
        // White-hover-#555 dark-hover-#bbb
        // dark-emphasis-#fff dark-unemphasis

      },
      transitionDuration: {
        TRANSITION_DURATION: '200ms',
      },
      transitionTimingFunction: {
        'slow-ease': 'cubic-bezier(0, 0.78, 0.1, 0.95)',
      },
      columns: {},
    },
  },
  plugins: [],
};
