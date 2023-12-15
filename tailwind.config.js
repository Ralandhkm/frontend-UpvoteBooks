/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins, sans-serif'],
      },
      backgroundImage: {
        'about': "url('/public/assets/img/about-ornament.png')",
      }
    },
  },
  plugins: [],
}

