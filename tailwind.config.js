/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}' // Ensure this line includes your Vue files
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        dotgothic: ['"DotGothic16"', 'sans-serif']
      },
      colors: {
        black: '#272838',
        yellow: '#F1D770',
        red: '#E57563',
        white: '#F9F8F8'
      },
      maxWidth: {
        1440: '1440px'
      }
    }
  },
  plugins: [typography]
}
