import type { Metadata } from 'next';
import {
  ImageOff,
  UserPlus,
  KeyRound,
  Mail,
  Sparkles,
  Plane,
  type LucideIcon,
} from 'lucide-react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import CTAButton from '@/components/CTAButton';
import WarningBanner from '@/components/WarningBanner';
import { REFERRAL_CODE, REFERRAL_URL, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Use a Star Citizen Referral Code — Step-by-Step',
  description:
    'Step-by-step guide for entering a Star Citizen referral code during signup to claim your 50,000 UEC bonus. Includes the 24-hour grace period rule.',
  alternates: { canonical: `${SITE_URL}/how-to-use` },
  openGraph: {
    title: 'How to Use a Star Citizen Referral Code — Step-by-Step',
    description:
      'Five-step walkthrough for claiming the 50,000 UEC bonus with code STAR-GCQJ-N6NC.',
    url: `${SITE_URL}/how-to-use`,
    type: 'article',
  },
};

type Step = {
  num: number;
  icon: LucideIcon;
  title: React.ReactNode;
  body: React.ReactNode;
  shotCaption: string;
};

const STEPS: Step[] = [
  {
    num: 1,
    icon: Plane,
    title: 'Visit the RSI Signup Page',
    shotCaption: 'robertsspaceindustries.com — Enlist screen',
    body: (
      <>
        <p>
          Click the bonus button below to open the official RSI Enlist page in
          a new tab. The URL contains the referral parameter, so the code is
          automatically attached to your signup.
        </p>
        <p className="mt-3 text-sm text-platinum/55 font-mono break-all">
          {REFERRAL_URL}
        </p>
      </>
    ),
  },
  {
    num: 2,
    icon: UserPlus,
    title: 'Fill In Your Account Details',
    shotCaption: 'Account form — handle, email, password',
    body: (
      <>
        <p>
          Enter a unique handle, your email address, a password, and your
          country. Your handle is your in-game identity, so pick something
          you&apos;ll be happy to fly under.
        </p>
        <p className="mt-3 text-platinum/65">
          Tip: handles are case-sensitive and cannot be changed for free later.
        </p>
      </>
    ),
  },
  {
    num: 3,
    icon: KeyRound,
    title: (
      <>
        Confirm the Code{' '}
        <span className="font-mono text-gold">{REFERRAL_CODE}</span>
      </>
    ),
    shotCaption: 'Enlist Code field — pre-filled',
    body: (
      <>
        <p>
          Scroll to the &ldquo;Enlist Code&rdquo; field. If you came from the
          link above, the code is already there. If not, paste{' '}
          <span className="font-mono text-gold">{REFERRAL_CODE}</span>{' '}
          manually before submitting the form.
        </p>
        <p className="mt-3 text-platinum/65">
          Double-check the code is present — once you submit without it, the
          24-hour grace timer starts.
        </p>
      </>
    ),
  },
  {
    num: 4,
    icon: Mail,
    title: 'Verify Your Email',
    shotCaption: 'Verification email from RSI',
    body: (
      <>
        <p>
          RSI sends a verification email within a minute or two. Click the
          link inside it to activate your account. This step finalizes the
          referral and triggers the bonus.
        </p>
        <p className="mt-3 text-platinum/65">
          Check spam if it doesn&apos;t arrive — emails from
          robertsspaceindustries.com sometimes get filtered.
        </p>
      </>
    ),
  },
  {
    num: 5,
    icon: Sparkles,
    title: 'Confirm 50,000 UEC in Your Hangar',
    shotCaption: 'Account → Hangar — UEC balance',
    body: (
      <>
        <p>
          Log in to{' '}
          <a
            href="https://robertsspaceindustries.com"
            className="text-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            robertsspaceindustries.com
          </a>{' '}
          and check the top-right of your account dashboard. The UEC balance
          should read 50,000 — sometimes shown as &ldquo;50K UEC&rdquo;.
        </p>
        <p className="mt-3 text-platinum/65">
          That&apos;s it. The bonus is permanent and can be spent any time.
        </p>
      </>
    ),
  },
];

export default function HowToUsePage() {
  return (
    <>
      <NavBar />

      <main>
        {/* Header */}
        <section className="relative isolate overflow-hidden border-b border-gold/15">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(255,215,0,0.10),transparent_70%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-14 sm:pt-20 pb-12 sm:pb-16">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
              Five steps · Two minutes
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-platinum leading-[1.05]">
              How to Use the{' '}
              <span className="text-gold text-glow-gold">Referral Code</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-platinum/75 leading-relaxed">
              A complete walkthrough for claiming the 50,000 UEC bonus. Grab
              the code below, then follow the five steps — you&apos;ll be done
              in about two minutes.
            </p>

            <div className="mt-8 max-w-2xl">
              <ReferralCodeBox />
            </div>

            <div className="mt-5 max-w-2xl">
              <WarningBanner>
                <strong className="text-platinum">
                  24-hour grace period:
                </strong>{' '}
                You can attach the code within 24 hours of creating your
                account — but the safest moment is at signup.
              </WarningBanner>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24">
          <ol className="space-y-16 sm:space-y-24" role="list">
            {STEPS.map(({ num, icon: Icon, title, body, shotCaption }) => (
              <li key={num} className="relative">
                <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
                  {/* Number column */}
                  <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-3">
                    <div className="font-display font-bold text-6xl sm:text-7xl text-gold/85 leading-none tabular-nums">
                      {String(num).padStart(2, '0')}
                    </div>
                    <div className="hidden md:block w-12 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                  </div>

                  {/* Content column */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon
                        className="h-5 w-5 text-gold"
                        strokeWidth={2}
                      />
                      <span className="font-display text-[0.7rem] uppercase tracking-[0.28em] text-gold/80">
                        Step {num} of 5
                      </span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-5 leading-tight">
                      {title}
                    </h2>
                    <div className="text-base text-platinum/80 leading-relaxed max-w-2xl">
                      {body}
                    </div>

                    {/* Screenshot placeholder */}
                    <figure className="mt-6 max-w-2xl">
                      <div className="hud-corner relative aspect-[16/9] bg-charcoalMid/40 border border-platinum/15 flex flex-col items-center justify-center text-center px-6">
                        <ImageOff
                          className="h-8 w-8 text-platinum/30 mb-3"
                          strokeWidth={1.5}
                        />
                        <p className="font-mono text-xs text-platinum/45 uppercase tracking-[0.2em]">
                          Screenshot Placeholder
                        </p>
                        <p className="mt-1 text-sm text-platinum/55">
                          {shotCaption}
                        </p>
                      </div>
                    </figure>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What Happens Next */}
        <section
          aria-labelledby="next-heading"
          className="bg-charcoal/60 border-y border-platinum/5"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-24">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              After signup
            </p>
            <h2
              id="next-heading"
              className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-platinum mb-6"
            >
              What Happens Next?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard
                label="Arrival time"
                value="Instant"
                detail="UEC posts to your account the moment your email is verified."
              />
              <InfoCard
                label="Where to find it"
                value="Account Dashboard"
                detail="Top-right of robertsspaceindustries.com when logged in."
              />
              <InfoCard
                label="What it spends on"
                value="Anything in the Pledge Store with a UEC tag"
                detail="Components, weapons, armor, paints, FPS gear, consumables."
              />
            </div>

            <p className="mt-8 max-w-2xl text-platinum/70 leading-relaxed">
              Once you&apos;ve confirmed the bonus, jump in. You can spend the
              UEC at any time — there&apos;s no pressure to use it
              immediately. Many new players save it until they know which ship
              they want to outfit first.
            </p>
          </div>
        </section>

        {/* Final code + CTA */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-28 text-center">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-platinum mb-8">
            Grab the Code &amp; Sign Up
          </h2>
          <div className="mb-8">
            <ReferralCodeBox />
          </div>
          <CTAButton />
        </section>
      </main>

      <Footer />
    </>
  );
}

function InfoCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="hud-corner relative bg-charcoalMid/40 border border-platinum/10 p-5 sm:p-6">
      <p className="font-display text-[0.65rem] uppercase tracking-[0.28em] text-gold/80 mb-2">
        {label}
      </p>
      <p className="font-display text-lg sm:text-xl font-semibold text-platinum mb-2 leading-tight">
        {value}
      </p>
      <p className="text-sm text-platinum/65 leading-relaxed">{detail}</p>
    </div>
  );
}
