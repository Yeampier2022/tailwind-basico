/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#C87900",
        sencondary: "#353535",
      },
      height: {
        '120': '30rem'
      }

    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [],
};
