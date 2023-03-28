/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE7822",
        secondary: "#2E2E2E",
      },
      fontFamily: {
        sans: ['"NoirPro"', 'sans-serif']
      },
      screens: {
        '3xl': '1921px',
      },
      fontSize: {
        headerHero: "clamp(2.125rem, 1.233rem + 3.66vw, 5.625rem)", 
        paragraphHero: "clamp(1.563rem, 1.355rem + 0.85vw, 2.375rem)",
        holderHeading: "clamp(1.375rem, 1.12rem + 1.046vw, 2.375rem)",
        // min 18px - max 30px
        holderParagraph: "clamp(1.125rem, 0.934rem + 0.784vw, 1.875rem)",
        servicesHeading: "clamp(1.375rem, 1.009rem + 1.503vw, 2.813rem)",
        sectionHeading: "clamp(1.75rem, 1.24rem + 3.092vw, 3.75rem)",
        serciceHeadingXl: "clamp(2.813rem, 2.096rem + 2.941vw, 5.625rem)",
        // min 16px - max 25px
        smallLegal: "clamp(1rem, 0.857rem + 0.588vw, 1.563rem)",
        
      },
      width: {
        buttonHero: "clamp(350px, 22.5vw, 431px)",
      },
      height: {
        buttonHero: 'clamp(73px, 10vw, 91px)',
      },
    },
  },
  plugins: [require('tailwind-fluid-typography'),
  require('@shrutibalasa/tailwind-grid-auto-fit'),
  ]
}