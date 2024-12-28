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
        'gray-50': `url("data:image/svg+xml,<svg id='patternId' width='10' height='10' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='100%' height='100%' fill='%23F1F1F2'/><circle cx='2' cy='2' r='1' fill='%23D1D1D2'/></pattern></defs><rect width='800%' height='800%' fill='url(%23a)'/></svg>")`,
      }
    },
  },
  plugins: [],
} 