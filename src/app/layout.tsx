import type { Metadata, Viewport } from 'next';
import { Chakra_Petch, Manrope, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, REFERRAL_CODE, HUB_URL } from '@/lib/constants';
import './globals.css';

const display = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Star Citizen Referral Bonus 2026 — 50,000 UEC Free Code',
    template: '%s · screferralbonus.com',
  },
  description:
    'Get the Star Citizen referral bonus when you sign up. Use code STAR-GCQJ-N6NC at registration to claim 50,000 free UEC. Updated for 2026.',
  applicationName: 'screferralbonus.com',
  authors: [{ name: 'Doc_Flanigan', url: HUB_URL }],
  creator: 'Doc_Flanigan',
  publisher: 'Doc_Flanigan',
  keywords: [
    'star citizen referral bonus',
    'star citizen referral code',
    'star citizen 50000 UEC',
    'star citizen new player bonus',
    `star citizen ${REFERRAL_CODE.toLowerCase()}`,
    'star citizen 2026',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    images: [
      {
        url: '/images/hero/hero-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Star Citizen referral bonus — 50,000 aUEC for new players',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0c0f',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'screferralbonus.com',
  url: SITE_URL,
  logo: `${SITE_URL}/images/made-by-community.png`,
  description:
    'Unofficial Star Citizen fan site providing the working referral code STAR-GCQJ-N6NC for the 50,000 UEC new-player bonus.',
  sameAs: [HUB_URL, 'https://screferralreward.com'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-charcoalDeep text-platinum font-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
