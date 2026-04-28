'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-charcoalDeep/85 backdrop-blur-md border-b border-gold/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label={`${SITE_NAME} home`}
          >
            <span
              aria-hidden
              className="block h-2 w-2 bg-gold shadow-gold-soft group-hover:animate-pulse-gold"
            />
            <span className="font-display text-base sm:text-lg font-bold tracking-[0.06em] text-platinum group-hover:text-gold transition-colors">
              screferralbonus
              <span className="text-gold">.com</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden p-2 -mr-2 text-platinum hover:text-gold transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav
            className="md:hidden pb-4 flex flex-col gap-1 border-t border-gold/15 pt-3"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} mobile onClick={() => setOpen(false)} />
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

type NavLinkProps = {
  label: string;
  href: string;
  external?: boolean;
  mobile?: boolean;
  onClick?: () => void;
};

function NavLink({ label, href, external, mobile, onClick }: NavLinkProps) {
  const baseClasses = mobile
    ? 'flex items-center justify-between py-3 px-2 font-display text-sm uppercase tracking-[0.18em] text-platinum/85 hover:text-gold border-b border-platinum/5'
    : 'group inline-flex items-center gap-1 font-display text-sm uppercase tracking-[0.18em] text-platinum/75 hover:text-gold transition-colors';

  const content = (
    <>
      <span>{label}</span>
      {external && <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={baseClasses}>
      {content}
    </Link>
  );
}
