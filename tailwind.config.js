/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        xl: "1400px",
      },
      backgroundImage: {
        "custom-grad":
          "linear-gradient(90deg, rgba(37, 98, 242, 1) 0%, rgba(220, 220, 221, 1) 100%)",
      },
    },
  },
  plugins: [],
};
