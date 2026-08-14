/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#10B981",
        accent: "#F59E0B",
        background: "#F8FAFC",
        text: "#0F172A",
      },
      fontFamily: {
        heading: ["'Inter'", "sans-serif"],
        body: ["'Roboto'", "sans-serif"],
      },
      spacing: {
        small: "0.5rem",
        medium: "1rem",
        large: "2rem",
        xlarge: "4rem",
      }
    },
  },
  plugins: [],
}

