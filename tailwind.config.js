const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A091B',
        secondary: '#C0C1C8',
        tertiary: '#252434',
        quaternary: '#212130',
        quinternary: "#2d2c40"
      },
      fontFamily: {
        outfit: ['var(--outfit-font)', ...fontFamily.sans],
        ruda: ['var(--ruda-font)', ...fontFamily.sans],
        lobster: ['var(--lobster-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: []
}