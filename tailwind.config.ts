import type { Config } from 'tailwindcss';

export default {
  important: true,
  content: ['./src/{components,app,appPages,configs}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        typography: 'var(--color-typography)',
        interactive: '#7b6fc4',
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],

  plugins: [],
} satisfies Config;
