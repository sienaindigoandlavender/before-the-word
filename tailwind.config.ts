import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#ffffff',
        'bg-alt': '#fafafa',
        ink: '#0a0a0a',
        'ink-secondary': '#666666',
        'ink-muted': '#999999',
        border: '#e5e5e5',
        'border-dark': '#1a1a1a',
      },
      fontSize: {
        'hero': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.88', letterSpacing: '-0.03em', fontWeight: '900' }],
        'display-1': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-2': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-1': ['1.75rem', { lineHeight: '1.15', fontWeight: '700' }],
        'heading-2': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'micro': ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.12em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'reading': '680px',
        'content': '1080px',
        'wide': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
