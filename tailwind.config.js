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
      },
      backgroundImage: {
        'gray-50': `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3' fill='%23C1C1C2' fill-opacity='1'/%3E%3C/svg%3E")`,
      }
    },
  },
  plugins: [],
} 