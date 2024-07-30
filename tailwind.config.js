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
        "bg-color-1": "#fcf9f7",
        "bg-color-2": "#f4edeb",
        "bg-color-3": "#c9aea6",
      },

      colors: {
        "primary-color": "#c73a0f",
        "secondary-color": "#1ea475",
        "hover-state": "#952c0c",
      },

      borderColor: {
        "border-color-veryLight": "#f4edeb",
        "border-color-light": "#ad8985",
        "border-color-medium": "#87635a",
        "border-color-strong": "#260f08",
      },

      outlineColor: {
        "outline-color-veryLight": "#f4edeb",
        "outline-color-light": "#ad8985",
        "outline-color-medium": "#87635a",
        "outline-color-strong": "#260f08",
      },

      textColor: {
        "text-color-light": "#ad8985",
        "text-color-medium": "#87635a",
        "text-color-strong": "#260f08",
      },

      screens: {
        Tablet: "48rem",
        Desktop: "80rem",
      },
    },
  },
  plugins: [],
};
