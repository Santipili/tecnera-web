/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "#005647",     // verde oscuro
          secondary: "#00A478",   // Verde agua
          focus: "#00c2a8",
          dark: "#0A1F1C",
          neutral: "#262626",     // Gris oscuro
          subtext: "#666666",     // Gris claro
          link: "#0095C7",
          light: "#F9FAF8"
      },
      screens: {
        phone: "320px",// => @media (min-width: 320px) { ... }
        tablet: "640px",// => @media (min-width: 640px) { ... }
        tabletxl: "840px",
        laptop: "1024px",// => @media (min-width: 1024px) { ... }
        desktop: "1280px",// => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
