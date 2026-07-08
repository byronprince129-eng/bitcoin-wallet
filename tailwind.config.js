/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bitcoin: {
          50: '#fffbf0',
          100: '#fef3e2',
          200: '#fde8c4',
          300: '#fbd89b',
          400: '#f9c86d',
          500: '#f7970d',
          600: '#e67e08',
          700: '#b85c0a',
          800: '#8a430f',
          900: '#5a2b0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
