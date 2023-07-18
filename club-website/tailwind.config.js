/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      red: colors.red,
      lightMaroon: '#7a1e1e',
      darkMaroon: '#520000',
      offWhite: '#f6f6f6',
      blueGray: '#272a29',
      dustyBlue: '#3a4b67',
      lightBlue: '#84b6ff',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

