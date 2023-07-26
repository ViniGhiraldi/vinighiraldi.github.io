/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['Exo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'xs': {'max': '576px'},
      // => @media (max-width: 576px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible: true}),
    require('tailwind-scrollbar-hide')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}

