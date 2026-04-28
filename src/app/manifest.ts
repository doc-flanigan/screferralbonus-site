import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'screferralbonus.com — Star Citizen Referral Bonus',
    short_name: 'SC Referral Bonus',
    description:
      'Star Citizen referral bonus — 50,000 UEC free with code STAR-GCQJ-N6NC.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0c0f',
    theme_color: '#ffd700',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
