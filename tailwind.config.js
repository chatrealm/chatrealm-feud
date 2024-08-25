/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icecold: '#FFA800'
      },
      fontFamily: {
        'handwriting': ['"Pacifico"', 'cursive']
      },
      keyframes: {
        arguing: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      },
      animation: {
        arguing: 'arguing 2s cubic-bezier(.77,0,.18,1) infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['dark', 'dark', 'light']
  }
}

