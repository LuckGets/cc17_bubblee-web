/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/vansbg3.jpg')",
      },
      colors: {
        "bubblee-light-green": "#A2B67C",
        "bubblee-old-green": "#6F8349",
        "bubblee-orange": "#DD6621",
        "bubblee-light-gray": "#ECECEC",
      },
    },
  },
  plugins: [],
};
