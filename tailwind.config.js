/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        cyan: "#008484",
        black: "#0F0D13",
        gray: {
          300: "#E1E1E6",
          400: "#D9D9D9",
          500: "#C4C4CC",
        },
      },
    },
  },
  plugins: [],
}