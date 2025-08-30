/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tech': ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        'primary': '#00F0FF',
        'secondary': '#0F172A',
        'accent': '#FF00EA',
      },
    },
  },
  plugins: [],
}
