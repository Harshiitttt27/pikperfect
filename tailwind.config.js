/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 👇 add your custom brand color
        'brand-bg': '#F0E9E5', // change to whatever hex you want
      },
    },
  },
  plugins: [],
}

