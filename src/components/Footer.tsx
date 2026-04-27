import Image from 'next/image';
import Link from 'next/link';
import { REFERRAL_CODE, NAV_LINKS, HUB_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gold/15 bg-charcoalDeep">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
        {/* Top row: brand + links */}
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          <div>
            <p className="font-display text-lg font-bold tracking-[0.06em] text-platinum">
              screferralbonus
              <span className="text-gold">.com</span>
            </p>
            <p className="mt-3 text-sm text-platinum/60 leading-relaxed max-w-sm">
              Get the Star Citizen referral bonus — 50,000 UEC free when you
              create a new account using code{' '}
              <span className="font-mono text-gold">{REFERRAL_CODE}</span>.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-gold/80 mb-4">
              Site
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => !l.external).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-platinum/75 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-gold/80 mb-4">
              Network
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={HUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-platinum/75 hover:text-gold transition-colors"
                >
                  o7citizen.com — New Player Hub
                </a>
              </li>
              <li>
                <a
                  href="https://screferralrewards.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-platinum/75 hover:text-gold transition-colors"
                >
                  screferralrewards.com — Veteran Tier Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="space-y-5 border-t border-platinum/10 pt-8 text-xs text-platinum/55 leading-relaxed">
          <p>
            <span className="font-display uppercase tracking-[0.18em] text-platinum/70">
              Fan Site Disclaimer:
            </span>{' '}
            This is an unofficial fan site and is not affiliated with, endorsed
            by, or connected to Cloud Imperium Games, Roberts Space Industries,
            or the Star Citizen franchise in any way.
          </p>
          <p>
            <span className="font-display uppercase tracking-[0.18em] text-platinum/70">
              Affiliate Disclosure:
            </span>{' '}
            If you create a Star Citizen account using referral code{' '}
            <span className="font-mono text-gold">{REFERRAL_CODE}</span>, the
            site owner (Doc_Flanigan) will receive an in-game bonus reward. You
            still receive your full 50,000 UEC bonus at no cost to you.
          </p>
        </div>

        {/* Fankit badge + copyright */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-platinum/10 pt-8">
          <Image
            src="/images/made-by-community.png"
            alt="Made by the Star Citizen Community"
            width={120}
            height={40}
            className="opacity-80"
          />
          <p className="text-xs text-platinum/40 font-mono">
            © {new Date().getFullYear()} Doc_Flanigan · o7
          </p>
        </div>
      </div>
    </footer>
  );
}
