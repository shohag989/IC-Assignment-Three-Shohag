/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'], // Optional for headings
      },
      colors: {
        primary: '#1c3b2f',            // Dark green (headings, footer)
        secondary: '#ffffff',          // Pure white (background, cards)
        accent: '#4caf50',             // Bright green (buttons, highlights)
        'accent-hover': '#388e3c',     // Darker green for hover effects
        'text-main': '#1c1c1c',        // Main body text
        'text-sub': '#4f4f4f',         // Subtext, descriptions
        'bg-section': '#f4f4f4',       // Light gray background sections
        'bg-card': '#ffffff',          // Card backgrounds
        border: '#e0e0e0',             // Light gray border color
      },
    },
  },
  plugins: [],
}
