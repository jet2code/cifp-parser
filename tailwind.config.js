/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'striped-dark': 'repeating-linear-gradient(45deg, #333, #333 10px, #000 10px, #000 20px)',
        'striped-light': 'repeating-linear-gradient(45deg, #ddd, #ddd 10px, #ccc 10px, #ccc 20px)'
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
