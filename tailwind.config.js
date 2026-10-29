/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF5F8',
          100: '#FDE8F0',
          200: '#FBD5E3',
          300: '#F8BBD0',
          400: '#F195B8',
          500: '#E76FA0',
          600: '#DB2777',
          700: '#B91C63',
          800: '#9D1654',
          900: '#821245',
        },
        price: {
          DEFAULT: '#16A34A',
          dark: '#15803D',
          light: '#22C55E',
        },
        cta: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#EF4444',
        },
        ink: '#1F1320',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(190, 24, 99, 0.18)',
        card: '0 18px 50px -20px rgba(31, 19, 32, 0.25)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
