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
      animation: {
        infiniteUp: 'infiniteUp 30s infinite linear',
        infiniteUpSlow: 'infiniteUp 45s infinite linear',
        infiniteDown: 'infiniteUp 30s infinite linear reverse',
        infiniteDownSlow: 'infiniteUp 50s infinite linear reverse',
      },
      keyframes: {
        infiniteUp: {
          0: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(0, -50%, 0)' },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
}
