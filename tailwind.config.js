/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2271B1',
        error: '#D63638',
        secondary: '#3A81B9',
        gray: {
          50: '#F0F0F1',
          100: '#EAECF0',
          200: '#CFD4DC',
          300: '#666C84',
          400: '#475466',
          500: '#344053',
          600: '#0F1728',
          900: '#111827'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
} 