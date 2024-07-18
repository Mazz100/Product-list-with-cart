/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "red-hat-text": ["Red Hat Text", "sans-serif"],
      },

      backgroundColor: {
        "body-bg-color": "#fcf9f7",
      },

      colors: {
        "primary-color": "#c73a0f",
        "secondary-color": "#1ea475",
      },

      borderColor: {
        "border-color-light": "#ad8985",
        "border-color-medium": "#87635a",
        "border-color-strong": "#260f08",
      },
    },
  },
  plugins: [],
};
