/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'sans': ['mundial', 'sans-serif'],
        'serif': ['museo-slab', 'serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
