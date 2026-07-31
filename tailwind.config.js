/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#0A5BFF',
          50: '#EAF1FF',
          100: '#D6E3FF',
          400: '#3B82F6',
          500: '#0A5BFF',
          600: '#0847CC',
        },
        navy: {
          DEFAULT: '#071B33',
          800: '#0B2340',
          900: '#071B33',
          950: '#04101F',
        },
        sky: '#3B82F6',
        bg: '#F5F9FF',
        ink: '#111827',
      },
      fontFamily: {
        heading: ['Sora', 'Manrope', 'sans-serif'],
        display: ['Manrope', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(10, 91, 255, 0.45)',
        card: '0 8px 40px -12px rgba(7, 27, 51, 0.18)',
        'card-hover': '0 20px 60px -12px rgba(10, 91, 255, 0.35)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(10,91,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,91,255,0.08) 1px, transparent 1px)',
        'navy-radial':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 60%, rgba(10,91,255,0.25), transparent 50%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
