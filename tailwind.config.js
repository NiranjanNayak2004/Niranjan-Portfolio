/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          purple: '#8b5cf6',
        },
        dark: {
          bg: '#020617',
          card: '#0f172a',
        }
      },
    },
  },
  plugins: [],
}