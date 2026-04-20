import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6F0',
          warm: '#F5EDE0',
          marble: '#F0EDE8',
        },
        ink: {
          DEFAULT: '#0C0A09',
          warm: '#171412',
          elevated: '#2A2622',
        },
        gold: {
          dark: '#8B6914',
          DEFAULT: '#B8860B',
          bright: '#D4A543',
          glow: '#E8C96A',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
        },
        stone: {
          DEFAULT: '#8B8178',
          light: '#B8AFA6',
        },
        bark: '#6B5B4F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
        label: ['var(--font-label)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.25em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
