/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
