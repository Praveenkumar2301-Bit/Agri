import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',
          light: '#4A7C43',
          dark: '#1E3D1A',
        },
        secondary: {
          DEFAULT: '#B8860B',
          light: '#D4A84B',
          dark: '#8B6914',
        },
        tertiary: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#FAF8F5',
        },
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B7280',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        tamil: ['var(--font-tamil)', 'Noto Sans Tamil', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(45, 90, 39, 0.08), 0 2px 4px -2px rgba(45, 90, 39, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(45, 90, 39, 0.12), 0 4px 6px -4px rgba(45, 90, 39, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
