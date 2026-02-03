/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'retro': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'retro-pink': '#ff69b4',
        'retro-pink-light': '#ffb6c1',
        'retro-pink-dark': '#ff1493',
        'retro-purple': '#da70d6',
        'retro-magenta': '#ff00ff',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-pink': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'run-away': 'runAway 0.3s ease-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        runAway: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--move-x), var(--move-y))' },
        }
      }
    },
  },
  plugins: [],
}