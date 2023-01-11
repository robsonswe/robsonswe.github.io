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
        deepblue: '#0A091B',
        lightgray: '#C0C1C8',
        lightblue: '#02BBD9',
        gblue: '#212130',
        lightgblue: "#2d2c40",
        midgray: '#424350'
      },
      fontFamily: {
        outfit: ['var(--outfit-font)', ...fontFamily.sans],
        ruda: ['var(--ruda-font)', ...fontFamily.sans],
        lobster: ['var(--lobster-font)', ...fontFamily.sans],
        exo: ['var(--exo-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}