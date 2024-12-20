/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      backgroundImage: {
        'service-pattern': `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H4V4H0V0Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
} 