/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#050810',
          secondary: '#080d1a',
          card: '#0d1525',
          elevated: '#111827',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#7c3aed',
          violet: '#a855f7',
          blue: '#3b82f6',
          indigo: '#4f46e5',
          green: '#10b981',
          pink: '#ec4899',
        },
        border: {
          subtle: '#1e2d4a',
          glow: '#1e3a5f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #050810 0%, #0a0f1e 50%, #070d1c 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13,21,37,0.8) 0%, rgba(11,17,30,0.9) 100%)',
        'glow-cyan': 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40, end)',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 60px rgba(124,58,237,0.3)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0,212,255,0.25)',
        'glow-purple': '0 0 30px rgba(124,58,237,0.25)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 48px rgba(0,212,255,0.15), 0 4px 24px rgba(0,0,0,0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
