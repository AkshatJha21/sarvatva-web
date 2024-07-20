/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotu: ['Gotu', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
        staatliches: ["Staatliches", 'sans-serif'],
        cormorant: ["Cormorant Garamond", 'serif'],
      },
    },
  },
  plugins: [],
}
