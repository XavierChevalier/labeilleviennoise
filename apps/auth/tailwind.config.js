const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/@labeilleviennoise/**/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.amber,
          DEFAULT: colors.amber['600'],
        },
      },
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
}
