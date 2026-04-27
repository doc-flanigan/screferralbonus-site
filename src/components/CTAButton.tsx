import { ArrowUpRight } from 'lucide-react';
import { REFERRAL_URL } from '@/lib/constants';

type Props = {
  href?: string;
  children?: React.ReactNode;
  size?: 'md' | 'lg';
  className?: string;
};

export default function CTAButton({
  href = REFERRAL_URL,
  children = 'Claim Your 50,000 UEC Bonus',
  size = 'lg',
  className = '',
}: Props) {
  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-base sm:text-lg'
      : 'px-6 py-3 text-sm sm:text-base';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative inline-flex items-center justify-center gap-2 ${sizing} font-display font-semibold uppercase tracking-[0.18em] text-charcoalDeep bg-gold hover:bg-goldDark transition-all duration-200 shadow-gold-soft hover:shadow-gold-glow active:translate-y-[1px] ${className}`}
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
