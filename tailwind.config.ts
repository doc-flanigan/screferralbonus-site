import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111418',
        charcoalMid: '#1c2128',
        charcoalDeep: '#0a0c0f',
        gold: '#ffd700',
        goldDark: '#ccac00',
        goldGlow: 'rgba(255, 215, 0, 0.18)',
        platinum: '#e8e8e8',
        muted: '#6b7280',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 0 1px rgba(255, 215, 0, 0.4), 0 0 24px -4px rgba(255, 215, 0, 0.35)',
        'gold-soft': '0 0 32px -8px rgba(255, 215, 0, 0.45)',
        'inset-line': 'inset 0 0 0 1px rgba(255, 215, 0, 0.15)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)',
        'radial-spotlight':
          'radial-gradient(60% 50% at 50% 0%, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(255, 215, 0, 0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
