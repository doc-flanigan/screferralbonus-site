import type { FAQItem } from '@/components/FAQAccordion';
import { REFERRAL_CODE } from '@/lib/constants';

export type RichFAQItem = FAQItem & {
  /** Plain-text answer for JSON-LD schema */
  text: string;
};

export const HOMEPAGE_FAQ: RichFAQItem[] = [
  {
    q: 'What is the Star Citizen referral bonus?',
    text:
      "It's a one-time gift of 50,000 UEC (United Earth Credits) given to every new account that signs up using a referral code. UEC is the in-game currency for Star Citizen and Squadron 42 — you can spend it on ship components, weapons, armor, paints, and consumables.",
    a: (
      <>
        It&apos;s a one-time gift of 50,000 UEC (United Earth Credits) given to
        every new account that signs up using a referral code. UEC is the
        in-game currency for Star Citizen and Squadron 42 — you can spend it on
        ship components, weapons, armor, paints, and consumables.
      </>
    ),
  },
  {
    q: 'Is the referral code free to use?',
    text: `Yes. Using code ${REFERRAL_CODE} costs nothing. You receive the full 50,000 UEC bonus at no cost. No payment is required to create an account or claim the bonus.`,
    a: (
      <>
        Yes. Using code{' '}
        <span className="font-mono text-gold">{REFERRAL_CODE}</span> costs
        nothing. You receive the full 50,000 UEC bonus at no cost. No payment
        is required to create an account or claim the bonus.
      </>
    ),
  },
  {
    q: 'What is UEC?',
    text:
      'UEC stands for United Earth Credits — the persistent in-game currency for Star Citizen. UEC is different from aUEC (alpha UEC), which is wiped between major patches. The 50,000 you receive is real, persistent UEC that stays on your account.',
    a: (
      <>
        UEC stands for United Earth Credits — the persistent in-game currency
        for Star Citizen. UEC is different from aUEC (alpha UEC), which is
        wiped between major patches. The 50,000 you receive is real,
        persistent UEC that stays on your account.
      </>
    ),
  },
  {
    q: 'How do I enter the referral code?',
    text: `The easiest way is to click any of the bonus links on this page — the code is auto-filled. If you create an account directly on the RSI site, paste ${REFERRAL_CODE} into the "Enlist Code" field at signup.`,
    a: (
      <>
        The easiest way is to click any of the bonus links on this page — the
        code is auto-filled. If you create an account directly on the RSI
        site, paste{' '}
        <span className="font-mono text-gold">{REFERRAL_CODE}</span> into the
        &ldquo;Enlist Code&rdquo; field at signup.
      </>
    ),
  },
  {
    q: 'Can I add the code after I sign up?',
    text:
      'Yes — but only within 24 hours of creating your account. After that window closes, the referral slot locks and the bonus can no longer be claimed for that account. Add it during signup to be safe.',
    a: (
      <>
        Yes — but only within 24 hours of creating your account. After that
        window closes, the referral slot locks and the bonus can no longer be
        claimed for that account. Add it during signup to be safe.
      </>
    ),
  },
  {
    q: 'Does the bonus expire?',
    text:
      'The 50,000 UEC bonus has been a baseline reward of the referral program for years and is always active. CIG occasionally runs limited "referral bonus events" that add ships, paints, or extra UEC on top — those are time-limited, but the baseline bonus is not.',
    a: (
      <>
        The 50,000 UEC bonus has been a baseline reward of the referral
        program for years and is always active. CIG occasionally runs limited
        &ldquo;referral bonus events&rdquo; that add ships, paints, or extra
        UEC on top — those are time-limited, but the baseline bonus is not.
      </>
    ),
  },
  {
    q: 'Do existing accounts get the bonus?',
    text:
      'No. The referral program is for new accounts only. If you already have an RSI account, you cannot apply a referral code retroactively. You can, however, share your own referral code with new players once your account is active.',
    a: (
      <>
        No. The referral program is for new accounts only. If you already have
        an RSI account, you cannot apply a referral code retroactively. You
        can, however, share your own referral code with new players once your
        account is active.
      </>
    ),
  },
  {
    q: 'What can I buy with 50,000 UEC?',
    text:
      'Ship components (power plants, shields, coolers), weapons and ammo, armor sets, paint schemes, FPS gear, and consumables. 50,000 UEC is enough to fully outfit a starter ship or kit out an FPS loadout. Spend it through the in-game mobiGlas or the RSI website.',
    a: (
      <>
        Ship components (power plants, shields, coolers), weapons and ammo,
        armor sets, paint schemes, FPS gear, and consumables. 50,000 UEC is
        enough to fully outfit a starter ship or kit out an FPS loadout.
        Spend it through the in-game mobiGlas or the RSI website.
      </>
    ),
  },
];
