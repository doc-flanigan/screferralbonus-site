export const REFERRAL_CODE = 'STAR-GCQJ-N6NC';
export const REFERRAL_URL =
  'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC';
export const HUB_URL = 'https://o7citizen.com';
export const SITE_URL = 'https://screferralbonus.com';
export const SITE_NAME = 'screferralbonus.com';

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'How to Use', href: '/how-to-use' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About the Bonus', href: '/about-the-bonus' },
  { label: 'o7citizen.com', href: HUB_URL, external: true },
];

export const HERO_SLIDE_COUNT = 12;
