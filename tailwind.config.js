/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': '#0022D6',
      'med': '#002B64',
      'dark': '#000834',
      'white': '#ffffff',
      'red': '#8D0202',
      'orange': '#FF5A00'
    },
    extend: {},
  },
  plugins: [],
}

