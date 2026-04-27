import type { Metadata } from 'next';
import { Chakra_Petch, Manrope, JetBrains_Mono } from 'next/font/google';
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
  metadataBase: new URL('https://screferralbonus.com'),
  title: 'Star Citizen Referral Bonus 2026 — 50,000 UEC Free Code',
  description:
    'Get the Star Citizen referral bonus when you sign up. Use code STAR-GCQJ-N6NC at registration to claim 50,000 free UEC. Updated for 2026.',
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
      <body className="bg-charcoalDeep text-platinum font-body">{children}</body>
    </html>
  );
}
