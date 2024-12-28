/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',
        background: '#F2F2F3',
        'tab-inactive': '#667085'
      }
    },
  },
  plugins: [],
} 