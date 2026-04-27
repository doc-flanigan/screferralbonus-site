import type { Metadata } from 'next';
import { Calendar, Sparkles, Users, type LucideIcon } from 'lucide-react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import CTAButton from '@/components/CTAButton';
import SecondaryLink from '@/components/SecondaryLink';
import { REFERRAL_CODE, SITE_URL, HUB_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About the Star Citizen Referral Program — How It Works & Why It Exists',
  description:
    'Plain-English explainer of the Star Citizen referral program: how new players earn 50,000 UEC, why CIG runs it, and how bonus events work.',
  alternates: { canonical: `${SITE_URL}/about-the-bonus` },
  openGraph: {
    title: 'About the Star Citizen Referral Program',
    description:
      'How the 50,000 UEC bonus works, why CIG runs the program, and what to expect during bonus events.',
    url: `${SITE_URL}/about-the-bonus`,
    type: 'article',
  },
};

export default function AboutTheBonusPage() {
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
              Background · How the program works
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-platinum leading-[1.05]">
              About the{' '}
              <span className="text-gold text-glow-gold">Star Citizen</span>
              <br />
              Referral Program
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-platinum/75 leading-relaxed">
              A plain-English explainer of how the program works, why CIG runs
              it, and what it means for you as a brand-new player.
            </p>
          </div>
        </section>

        {/* The basics */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
            The basics
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
            What the Program Is
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-platinum/80 leading-relaxed">
            <p>
              The Star Citizen referral program is Cloud Imperium Games&apos;
              official way of rewarding existing players for bringing new
              players into the universe — and rewarding those new players for
              joining through an invitation.
            </p>
            <p>
              Every new RSI account that signs up using a referral code
              receives a one-time gift of{' '}
              <span className="text-gold font-semibold">50,000 UEC</span>{' '}
              (United Earth Credits, the persistent in-game currency).
              That&apos;s the entire mechanic on the new-player side. The
              referrer gets a separate set of rewards through the recruitment
              ladder.
            </p>
            <p>
              The code on this site —{' '}
              <span className="font-mono text-gold">{REFERRAL_CODE}</span> —
              belongs to Doc_Flanigan&apos;s account, the player who runs this
              and the rest of the{' '}
              <a
                href={HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                o7citizen.com
              </a>{' '}
              fan site network.
            </p>
          </div>
        </section>

        {/* Why CIG runs it */}
        <section className="bg-charcoal/60 border-y border-platinum/5">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              The motive
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
              Why Does CIG Run This?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-platinum/80 leading-relaxed">
              <p>
                Star Citizen is community-built and largely community-funded.
                CIG runs the referral program because word-of-mouth is, by
                far, the most reliable channel for bringing in players who
                actually stick with the game — players who are already curious
                because someone they trust pointed them at it.
              </p>
              <p>
                The 50,000 UEC bonus exists to remove a small friction at
                signup: it gives new players immediate spending power for
                gear, paints, and components, so the in-game experience starts
                with options instead of a blank wallet.
              </p>
            </div>
          </div>
        </section>

        {/* Three-up: who benefits */}
        <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
            Who gets what
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-10">
            Who Benefits From the Program
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <BenefitCard
              icon={Sparkles}
              role="New Player"
              you
              perks={['One-time 50,000 UEC bonus', 'Spendable on gear, paints, components', 'No purchase required']}
            />
            <BenefitCard
              icon={Users}
              role="The Referrer"
              perks={[
                'Counts toward recruitment ladder',
                'Unlocks tier rewards (paints, FPS gear)',
                'Helps grow the SC community',
              ]}
            />
            <BenefitCard
              icon={Calendar}
              role="The Game Itself"
              perks={[
                'Healthier player onboarding',
                'Word-of-mouth-driven growth',
                'Lower acquisition cost vs. paid ads',
              ]}
            />
          </div>
        </section>

        {/* Bonus events */}
        <section className="bg-charcoal/60 border-y border-platinum/5">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
              Limited-time bonuses
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
              Bonus Events
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-platinum/80 leading-relaxed">
              <p>
                CIG occasionally runs limited &ldquo;referral bonus
                events&rdquo; that stack additional rewards on top of the
                baseline 50,000 UEC. These have included extra UEC, exclusive
                ship paints, weapons, and even loaner ships for participating
                players.
              </p>
              <p>
                When a bonus event is active, this page and the homepage will
                call it out at the top. The baseline bonus is always
                available; events come and go.
              </p>
            </div>

            <div className="hud-corner relative mt-10 bg-charcoalMid/60 border border-gold/30 p-5 sm:p-6">
              <p className="font-display text-[0.7rem] uppercase tracking-[0.28em] text-gold/80 mb-2">
                Current event
              </p>
              <p className="text-platinum font-display text-lg sm:text-xl font-semibold mb-1">
                No active bonus event
              </p>
              <p className="text-sm text-platinum/65">
                The baseline 50,000 UEC bonus is still active and ready to
                claim.
              </p>
            </div>
          </div>
        </section>

        {/* FTC Disclosure */}
        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-3">
            Disclosure
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
            Affiliate Disclosure (FTC)
          </h2>
          <div className="hud-corner relative bg-charcoalMid/40 border border-platinum/10 p-6 sm:p-8 text-base text-platinum/80 leading-relaxed">
            <p>
              If you create a Star Citizen account using referral code{' '}
              <span className="font-mono text-gold">{REFERRAL_CODE}</span>, the
              site owner (Doc_Flanigan) will receive credit toward the
              official RSI recruitment ladder, which can unlock cosmetic
              rewards over time.
            </p>
            <p className="mt-4">
              This has zero effect on you:{' '}
              <span className="text-platinum font-semibold">
                you receive your full 50,000 UEC bonus at no cost
              </span>
              . The code is identical in function to any other valid Star
              Citizen referral code. We disclose this relationship in line
              with FTC guidance on affiliate links.
            </p>
            <p className="mt-4 text-sm text-platinum/60">
              This site is unofficial and not affiliated with Cloud Imperium
              Games or Roberts Space Industries. See the footer for the full
              fan site disclaimer.
            </p>
          </div>
        </section>

        {/* Final code + CTA */}
        <section className="border-t border-gold/15 bg-charcoal/50">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-24 text-center">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
              The code is ready
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-8">
              Claim Your 50,000 UEC
            </h2>
            <div className="mb-8">
              <ReferralCodeBox />
            </div>
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

function BenefitCard({
  icon: Icon,
  role,
  you,
  perks,
}: {
  icon: LucideIcon;
  role: string;
  you?: boolean;
  perks: string[];
}) {
  return (
    <div
      className={`hud-corner relative p-6 border ${
        you
          ? 'bg-gold/[0.06] border-gold/40 shadow-gold-soft'
          : 'bg-charcoalMid/40 border-platinum/10'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
        {you && (
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-charcoalDeep bg-gold px-2 py-0.5">
            You
          </span>
        )}
      </div>
      <p className="font-display text-base font-semibold uppercase tracking-[0.12em] text-platinum mb-4">
        {role}
      </p>
      <ul className="space-y-2 text-sm text-platinum/75">
        {perks.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-gold mt-1.5 shrink-0">▸</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
