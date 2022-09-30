/** @type {import('tailwindcss').Config} */

const { default: colors } = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          light: '#232221',
        },
        white: '#fff',
        primary: {
          DEFAULT: '#bd773f',
          light: '#dfcfc5',
        },
        secondary: {
          DEFAULT: '#d4b97f',
          light: '#e5e1d7',
        },
        tertiary: {
          DEFAULT: '#71502f',
          light: '#d5c6b1',
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
}