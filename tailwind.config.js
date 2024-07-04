/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "var(--color-green)",
        "custom-grey": "var(--color-grey)",
        "custom-black-grey": "var(--color-black-grey)",
        "custom-orange": "var(--color-orange)",
        "custom-dark-blue": "var(--color-dark-blue)",
        "custom-purple": "var(--color-purple)",
        "custom-shaded-blue": "var(--color-shaded-blue)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
