/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        neon: {
          cyan: '#06b6d4',
          electric: '#00f0ff',
          teal: '#14b8a6',
          purple: '#8b5cf6',
          violet: '#a855f7',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        dark: {
          bg: '#030712',
          surface: '#0b0f19',
          card: '#0f172a',
          hover: '#1e293b',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}