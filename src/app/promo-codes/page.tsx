import type { Metadata } from 'next';
import Link from 'next/link';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import CTAButton from '@/components/CTAButton';
import StaticHero from '@/components/StaticHero';
import { PageSources } from '@/components/PageSources';
import { SITE_URL } from '@/lib/constants';
import { VERIFIED_DISPLAY, VERIFIED_MONTH } from '@/data/verification';

const RSI_REFERRAL_PROGRAM = 'https://robertsspaceindustries.com/en/referral-program';
const RSI_REFERRAL_FAQ =
  'https://support.robertsspaceindustries.com/hc/en-us/articles/115013102847-Referral-Program-FAQ';

// FAQPage structured data — mirrors the visible "Quick answers" section.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there real Star Citizen promo codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The only signup code documented on RSI's official program pages is the referral code, which adds 50,000 UEC to a new account for free. There is no official coupon or percent-off code program for game packages.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Star Citizen coupon or discount codes work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "discount code" listings on coupon aggregator sites have no official RSI source. RSI\'s referral program pages describe exactly one signup bonus: 50,000 UEC via a referral code. A referral code never discounts the package price — it adds free in-game currency on top.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are referral code randomizers safe to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They work when the code they serve is valid, but pooled codes can go stale silently. As of July 11, 2026, several popular randomizer sites also still display a 5,000 UEC figure that does not match the 50,000 UEC bonus on the official RSI program page. A single verified code with a dated check is the safer path.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Star Citizen code actually gives you something?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `A referral code, entered at RSI account creation. It adds 50,000 UEC to the new account with no purchase required. The code STAR-GCQJ-N6NC was verified working on the live RSI signup page on ${VERIFIED_DISPLAY}.`,
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Star Citizen Promo Codes 2026 — Which Codes Are Actually Real',
  description: `Referral codes, coupon codes, discount codes, randomizers — sorted out. Only one Star Citizen code type gives you real value. Verified ${VERIFIED_MONTH}.`,
  alternates: { canonical: `${SITE_URL}/promo-codes` },
  openGraph: {
    title: 'Star Citizen Promo Codes — Which Are Actually Real',
    description:
      'One code type gives you 50,000 UEC free. The rest are fake or risky. Sorted out, with sources.',
    url: `${SITE_URL}/promo-codes`,
    type: 'article',
  },
};

type CodeType = {
  label: string;
  verdict: 'Real' | 'No official source' | 'Risky' | 'Rare';
  verdictClass: string;
  body: string;
};

const CODE_TYPES: CodeType[] = [
  {
    label: 'Referral code',
    verdict: 'Real',
    verdictClass: 'text-emerald-400',
    body: '50,000 UEC of in-game currency, free, on any new RSI account created with the code. The only signup bonus documented by the official program.',
  },
  {
    label: 'Coupon / discount / percent-off codes',
    verdict: 'No official source',
    verdictClass: 'text-red-400',
    body: 'Coupon aggregator listings promising "70% off" have no official RSI source. The official program pages describe no discount-code system for game packages.',
  },
  {
    label: 'Referral randomizers',
    verdict: 'Risky',
    verdictClass: 'text-amber-400',
    body: 'Pools of community codes. They can serve a valid code, but pooled codes go stale silently — and several randomizer sites still show outdated bonus amounts.',
  },
  {
    label: 'Event / subscriber promo codes',
    verdict: 'Rare',
    verdictClass: 'text-platinum/70',
    body: 'Occasional limited-time item codes tied to events or subscriptions. Real when they exist, but never a discount on packages and never a signup bonus.',
  },
];

export default function PromoCodesPage() {
  return (
    <>
      <NavBar />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Header */}
        <section className="relative isolate overflow-hidden border-b border-gold/15">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(255,215,0,0.10),transparent_70%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-14 sm:pt-20 pb-12 sm:pb-16">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
              Fact check · Every code type, sorted
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-platinum leading-[1.05]">
              Star Citizen{' '}
              <span className="text-gold text-glow-gold">Promo Codes</span>
              <br />
              Which Are Real?
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-platinum/75 leading-relaxed">
              Searching for a Star Citizen coupon, promo, or discount code?
              Here is the honest map: exactly one code type gives a new player
              real value, and it is free. The rest range from harmless to
              made-up.
            </p>
          </div>
        </section>

        <StaticHero
          src="/images/hero/hero-16.jpg"
          alt="A fleet of ships silhouetted against a bright planetary horizon"
        />

        {/* The table */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
            The short version
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
            Every &ldquo;Star Citizen Code&rdquo; in One Table
          </h2>
          <div className="space-y-4">
            {CODE_TYPES.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-platinum/10 bg-charcoal/60 p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-platinum">
                    {c.label}
                  </h3>
                  <span
                    className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${c.verdictClass}`}
                  >
                    {c.verdict}
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-platinum/75 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-platinum/60 leading-relaxed">
            Sources: the official{' '}
            <a
              href={RSI_REFERRAL_PROGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              RSI Referral Program page
            </a>{' '}
            and{' '}
            <a
              href={RSI_REFERRAL_FAQ}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Referral Program FAQ
            </a>
            . Neither documents any coupon or percent-off code system.
          </p>
        </section>

        {/* The real one */}
        <section className="bg-charcoal/60 border-y border-platinum/5">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              The one that pays
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
              The Referral Code — 50,000 UEC, Free
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-platinum/80 leading-relaxed">
              <p>
                Enter a referral code in the Referral Code field when you create
                your RSI account and the account receives{' '}
                <span className="text-gold font-semibold">50,000 UEC</span> —
                in-game currency, not a discount. No purchase is required for
                the bonus, and it stays on the account permanently.
              </p>
              <p>
                <span className="text-platinum font-semibold">
                  Verified working {VERIFIED_DISPLAY}:
                </span>{' '}
                the code below was entered on the live RSI signup page and the
                panel confirmed &ldquo;Referral code successfully
                applied!&rdquo; It is re-checked monthly.
              </p>
            </div>
            <div className="mt-8">
              <ReferralCodeBox />
            </div>
            <p className="mt-4 text-sm text-platinum/60">
              The signup button pre-fills this code for you. Full walkthrough:{' '}
              <Link href="/how-to-use" className="text-gold hover:underline">
                how to use a referral code
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Why coupon codes are a dead end */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
            The dead end
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
            &ldquo;Discount Codes&rdquo; Have No Official Source
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-platinum/80 leading-relaxed">
            <p>
              Coupon aggregator sites list &ldquo;Star Citizen discount
              codes&rdquo; year-round. We checked the official RSI program
              pages: they describe exactly one signup bonus — the referral
              code&apos;s 50,000 UEC — and no percent-off system for game
              packages. Those aggregator listings exist to catch search
              traffic, not to save you money.
            </p>
            <p>
              If you want to pay less, the honest answers are different ones:
              start with the cheapest game package, or try the game free during
              a{' '}
              <a
                href="https://freeflyevent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Free Fly event
              </a>{' '}
              before buying anything.
            </p>
          </div>
        </section>

        {/* Randomizers */}
        <section className="bg-charcoal/60 border-y border-platinum/5">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              The coin flip
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
              Randomizers: Fair Idea, Stale Data
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-platinum/80 leading-relaxed">
              <p>
                Referral randomizers hand out community-submitted codes at
                random. The idea is fair, and a served code often works. The
                problem is maintenance: pooled codes go stale silently, and the
                sites rarely update their information.
              </p>
              <p>
                As of July 11, 2026, several popular randomizer sites still
                advertise a{' '}
                <span className="text-platinum font-semibold">5,000 UEC</span>{' '}
                bonus — a figure that does not match the{' '}
                <span className="text-gold font-semibold">50,000 UEC</span> on
                the official{' '}
                <a
                  href={RSI_REFERRAL_PROGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  RSI Referral Program page
                </a>
                . If a site is wrong about the bonus amount, treat its codes
                with the same caution.
              </p>
              <p>
                Any valid referral code grants the same bonus, so the honest
                trade-off is simple: a randomizer spreads the referrer reward
                around; a verified single code tells you exactly whose code you
                are using and proves it still works.
              </p>
            </div>
          </div>
        </section>

        {/* Quick answers */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
            Quick answers
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
            Promo-Code Questions, Answered
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((q) => (
              <div
                key={q.name}
                className="rounded-xl border border-platinum/10 bg-charcoal/60 p-5"
              >
                <h3 className="font-semibold text-platinum mb-2">{q.name}</h3>
                <p className="text-sm sm:text-base text-platinum/75 leading-relaxed">
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CTAButton trackingLabel="promo-codes-cta">
              Claim the real bonus — 50,000 UEC
            </CTAButton>
          </div>
        </section>
      </main>

      <PageSources route="/promo-codes" />
      <Footer />
    </>
  );
}
