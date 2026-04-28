import { ExternalLink } from 'lucide-react';
import { HUB_URL } from '@/lib/constants';

type Props = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function SecondaryLink({
  href = HUB_URL,
  children = 'New Player Guide at o7citizen.com',
  className = '',
}: Props) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-platinum/70 hover:text-gold transition-colors duration-200 border-b border-platinum/20 hover:border-gold pb-1 ${className}`}
    >
      <span>{children}</span>
      {isExternal && (
        <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
      )}
    </a>
  );
}
