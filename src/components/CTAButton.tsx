'use client';
import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator';

type Props = {
  href?: string;
  children?: React.ReactNode;
  size?: 'md' | 'lg';
  className?: string;
  trackingLabel?: string;
};

export default function CTAButton({
  href: hrefProp,
  children = 'Claim Your 50,000 UEC Bonus',
  size = 'lg',
  className = '',
  trackingLabel,
}: Props) {
  const [referralUrl, setReferralUrl] = useState(FALLBACK_REFERRAL_URL);
  useEffect(() => { setReferralUrl(getRotatedReferralUrl()); }, []);

  const href = hrefProp ?? referralUrl;
  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-base sm:text-lg'
      : 'px-6 py-3 text-sm sm:text-base';

  const handleClick = () => {
    const code = href.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'unknown',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
    ;(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'referral_click', {
      referral_code: code,
      page_path: window.location.pathname,
      site: window.location.hostname,
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative inline-flex items-center justify-center gap-2 ${sizing} font-display font-semibold uppercase tracking-[0.18em] text-charcoalDeep bg-gold hover:bg-goldDark transition-all duration-200 shadow-gold-soft hover:shadow-gold-glow active:translate-y-[1px] ${className}`}
      onClick={handleClick}
    >
      <span className="absolute inset-0 -z-10 animate-pulse-gold rounded-none" aria-hidden />
      <span>{children}</span>
      <ArrowUpRight
        className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.5}
      />
    </a>
  );
}
