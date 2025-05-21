/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        actionWhite: '#007BFF',
        substrateWhite: '#EFEFEF',
        lightGray: '#EFEFEF',
        Action_W: '#007BFF',
        darkAction: '#1E90FF',
        darkSubstrate: '#121212'
      },
      backgroundColor: {
        light: "#ffffff",
        dark: "#1a202c"
      },
      gap: {
        25: '100px'
      },
      borderRadius: {
        'primary': '35px'
      },
      boxShadow: {
        custom: "4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
    borderRadius: {
      '3xl': '32px',
      '50px': '50px'
    }
  },
  plugins: [],
}
