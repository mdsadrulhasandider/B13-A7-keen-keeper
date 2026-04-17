/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e4d3a',
        'primary-dark': '#163328',
        'primary-light': '#2d6b52',
        overdue: '#ef4444',
        'almost-due': '#f97316',
        'on-track': '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
