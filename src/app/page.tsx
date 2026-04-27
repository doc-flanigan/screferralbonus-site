import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles, Cog, Shield, Crosshair, Pill } from 'lucide-react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import CTAButton from '@/components/CTAButton';
import SecondaryLink from '@/components/SecondaryLink';
import StepCard from '@/components/StepCard';
import WarningBanner from '@/components/WarningBanner';
import FAQAccordion from '@/components/FAQAccordion';

import { REFERRAL_CODE, SITE_URL } from '@/lib/constants';
import { HOMEPAGE_FAQ } from '@/data/homepage-faq';

export const metadata: Metadata = {
  title: 'Star Citizen Referral Bonus 2026 — 50,000 UEC Free Code',
  description:
    'Get the Star Citizen referral bonus when you sign up. Use code STAR-GCQJ-N6NC at registration to claim 50,000 free UEC. Updated for 2026.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Star Citizen Referral Bonus 2026 — 50,000 UEC Free',
    description:
      'Use code STAR-GCQJ-N6NC at signup to claim 50,000 free UEC. Updated for 2026.',
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Citizen Referral Bonus 2026 — 50,000 UEC Free',
    description: 'Code STAR-GCQJ-N6NC at signup. 50,000 free UEC.',
  },
};

const BUYABLES = [
  { icon: Cog, label: 'Ship Components', detail: 'Power plants, shields, coolers, quantum drives' },
  { icon: Crosshair, label: 'Weapons', detail: 'Sidearms, rifles, ship-mounted hardpoints' },
  { icon: Shield, label: 'Armor & Paints', detail: 'Full armor sets, ship liveries, helmets' },
  { icon: Pill, label: 'Consumables', detail: 'Medpens, ammo, food, drinks, FPS gear' },
];

function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.text,
      },
    })),
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <NavBar />

      <main>
        {/* ============ ABOVE FOLD ============ */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden"
        >
          {/* Backdrop image — single hero shot for above-fold composition */}
          <Image
            src="/images/hero/hero-01.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-charcoalDeep/80 via-charcoalDeep/90 to-charcoalDeep"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,215,0,0.10),transparent_70%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-10 sm:pt-16 pb-12 sm:pb-20 min-h-[calc(100svh-64px)] flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5 animate-fade-in">
              <Sparkles className="h-4 w-4 text-gold" strokeWidth={2.5} />
              <span className="font-display text-[0.7rem] sm:text-xs uppercase tracking-[0.32em] text-gold/90">
                Active for 2026 · Verified Working
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.05] uppercase tracking-tight text-platinum max-w-3xl"
            >
              Get the Star Citizen
              <br />
              <span className="text-gold text-glow-gold">Referral Bonus</span>
              <br />
              <span className="text-platinum/90">50,000 UEC Free</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-platinum/75 leading-relaxed">
              Brand new to Star Citizen? Use the code below at signup and the
              50,000 UEC drops into your hangar the moment your email is
              verified. No purchase required.
            </p>

            {/* Code box — the centerpiece */}
            <div className="mt-7 max-w-2xl">
              <ReferralCodeBox />
            </div>

            {/* CTA + warning */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <CTAButton size="lg">Create Account &amp; Claim Bonus</CTAButton>
              <p className="font-mono text-xs text-platinum/50 sm:max-w-[200px] leading-relaxed">
                Opens robertsspaceindustries.com — code pre-filled.
              </p>
            </div>

            <div className="mt-5 max-w-2xl">
              <WarningBanner>
                <strong className="text-platinum">
                  Enter the code at signup.
                </strong>{' '}
                You have 24 hours to add it after creating an account — after
                that, the referral slot locks permanently.
              </WarningBanner>
            </div>
          </div>
        </section>

        {/* ============ HERO CAROUSEL ============ */}
        <HeroCarousel />

        {/* ============ WHAT IS THE BONUS ============ */}
        <section
          aria-labelledby="what-is-heading"
          className="relative mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28"
        >
          <div className="grid gap-10 md:grid-cols-[auto_1fr] items-start">
            <div className="font-display font-bold text-7xl sm:text-8xl text-gold/15 leading-none tabular-nums">
              01
            </div>
            <div>
              <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
                What it is
              </p>
              <h2
                id="what-is-heading"
                className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-platinum mb-5"
              >
                What is the Star Citizen Referral Bonus?
              </h2>
              <div className="prose-lg text-platinum/80 text-base sm:text-lg leading-relaxed space-y-4 max-w-2xl">
                <p>
                  Cloud Imperium Games — the studio building Star Citizen —
                  rewards new players who join through an existing player&apos;s
                  invitation with a one-time gift of{' '}
                  <span className="text-gold font-semibold">50,000 UEC</span>{' '}
                  (United Earth Credits), the persistent in-game currency.
                </p>
                <p>
                  The code costs you nothing. You don&apos;t need to buy a ship,
                  pledge anything, or pay any fee. Just use{' '}
                  <span className="font-mono text-gold">{REFERRAL_CODE}</span>{' '}
                  during signup and the UEC lands in your account once your
                  email is verified.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HOW TO CLAIM ============ */}
        <section
          aria-labelledby="how-to-claim-heading"
          className="relative bg-charcoal/60 border-y border-platinum/5"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
            <div className="text-center mb-12 sm:mb-16">
              <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
                Three steps · Two minutes
              </p>
              <h2
                id="how-to-claim-heading"
                className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-platinum"
              >
                How to Claim Your Bonus
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <StepCard step={1} title="Create Account">
                Click the bonus link to open the official RSI signup page.
                The referral code is pre-filled automatically.
              </StepCard>
              <StepCard step={2} title="Verify Your Email">
                RSI sends a verification email. Click the link to activate
                your account — this triggers the bonus.
              </StepCard>
              <StepCard step={3} title="Receive 50,000 UEC">
                The UEC appears in your hangar instantly. Spend it on ship
                components, weapons, armor, or paints whenever you&apos;re
                ready.
              </StepCard>
            </div>
            <div className="mt-12 flex justify-center">
              <CTAButton />
            </div>
          </div>
        </section>

        {/* ============ WHAT CAN YOU BUY ============ */}
        <section
          aria-labelledby="buy-heading"
          className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28"
        >
          <div className="mb-12">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              50,000 UEC · Real spending power
            </p>
            <h2
              id="buy-heading"
              className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-platinum max-w-2xl"
            >
              What Can You Buy With 50,000 UEC?
            </h2>
            <p className="mt-4 max-w-2xl text-platinum/70 text-base sm:text-lg leading-relaxed">
              Enough to fully outfit a starter ship or kit out an FPS loadout.
              Here&apos;s where most new players spend it first:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {BUYABLES.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="hud-corner relative flex items-start gap-4 bg-charcoalMid/40 border border-platinum/10 p-5 sm:p-6 hover:border-gold/40 transition-colors"
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-gold/10 border border-gold/30">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold uppercase tracking-[0.1em] text-platinum mb-1">
                    {label}
                  </h3>
                  <p className="text-sm text-platinum/65 leading-relaxed">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ TWO-UP: ALWAYS ACTIVE? + CODE EXPIRE? ============ */}
        <section className="bg-charcoal/40 border-y border-platinum/5">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24 grid gap-12 md:grid-cols-2 md:divide-x md:divide-platinum/10">
            <div className="md:pr-12">
              <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
                Bonus availability
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-5">
                Is the Bonus Always Active?
              </h2>
              <div className="text-platinum/75 leading-relaxed space-y-3">
                <p>
                  <span className="font-display text-gold font-semibold">
                    Yes.
                  </span>{' '}
                  The 50,000 UEC baseline reward has been part of the referral
                  program since launch and is always available.
                </p>
                <p>
                  CIG occasionally runs special &ldquo;referral bonus
                  events&rdquo; that stack additional rewards on top —
                  ship paints, FPS weapons, or extra UEC. Those events are
                  time-limited; the baseline bonus is not.
                </p>
              </div>
            </div>

            <div className="md:pl-12">
              <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
                Code persistence
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-5">
                Will the Code Expire?
              </h2>
              <div className="text-platinum/75 leading-relaxed space-y-3">
                <p>
                  Referral codes belong to a player&apos;s account permanently.
                  As long as the referrer&apos;s account is in good standing,
                  the code keeps working — there&apos;s no expiration date.
                </p>
                <p>
                  This page is updated for{' '}
                  <span className="text-gold font-semibold">2026</span>.
                  Code{' '}
                  <span className="font-mono text-gold">{REFERRAL_CODE}</span>{' '}
                  is verified working today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section
          aria-labelledby="faq-heading"
          className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28"
        >
          <div className="mb-10 sm:mb-12">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              Common questions
            </p>
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-platinum"
            >
              Quick Answers
            </h2>
          </div>
          <FAQAccordion items={HOMEPAGE_FAQ} />
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative isolate overflow-hidden border-t border-gold/15">
          <Image
            src="/images/hero/hero-07.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-charcoalDeep/85 via-charcoalDeep/95 to-charcoalDeep"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 py-24 sm:py-32 text-center">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
              Ready when you are
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-platinum mb-6">
              Claim Your{' '}
              <span className="text-gold text-glow-gold">50,000 UEC</span>
            </h2>
            <p className="text-platinum/75 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              The code is{' '}
              <span className="font-mono text-gold">{REFERRAL_CODE}</span>.
              Hit the button — it pre-fills automatically on the signup page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <CTAButton />
              <SecondaryLink />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
