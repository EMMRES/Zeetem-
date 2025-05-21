/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class", // Enables dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: "#ffc272", // fixed hex code
        dark: "#111111"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem"
      }
    }
  },
  plugins: [],
};
