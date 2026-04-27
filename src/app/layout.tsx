import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body className="bg-charcoal text-platinum">{children}</body>
    </html>
  );
}
