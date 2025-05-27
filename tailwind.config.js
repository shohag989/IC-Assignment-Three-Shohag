/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '576px',   // 36rem
        md: '640px',   // 40rem
        lg: '864px',   // 54rem
        xl: '1120px',  // 70rem
        '2xl': '1376px', // 86rem
      },
    },
    extend: {
      colors: {
        primary: '#004f2d',
        secondary: '#007547',
        accent: '#00A36C',
        neutral: '#F5F5F5',
        heading: '#1A1A1A',
        paragraph: '#4A4A4A',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #004225, #006a3c)',
        'puzzle-overlay': "url('./assets/Image/puzzleOverlay.png')",
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}