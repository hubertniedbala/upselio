/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2271b1',
          hover: '#135e96'
        },
        secondary: {
          DEFAULT: '#3a81b9'
        },
        gray: {
          50: '#f0f0f1',
          100: '#eaecf0',
          200: '#cfd4dc',
          300: '#667084',
          400: '#475466',
          500: '#344053',
          600: '#0f1728',
        },
        error: '#d63638'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif']
      }
    },
  },
  plugins: [],
} 