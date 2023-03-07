/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#FDECEF",
          100: "#FCD4DA",
          200: "#F8AAB6",
          300: "#F57F91",
          400: "#F1556C",
          500: "#EE2B47",
          600: "#D0112D",
          700: "#9C0C22",
          800: "#680817",
          900: "#34040B",
        },
      },
    },
  },
  plugins: [],
};
