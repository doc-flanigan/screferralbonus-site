import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111418',
        charcoalMid: '#1c2128',
        gold: '#ffd700',
        goldDark: '#ccac00',
        platinum: '#e8e8e8',
        muted: '#6b7280',
      },
    },
  },
  plugins: [],
};

export default config;
