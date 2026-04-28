import { REFERRAL_CODE, HUB_URL } from '@/lib/constants';
import type { RichFAQItem } from './homepage-faq';

export type FAQCategory = {
  label: string;
  items: RichFAQItem[];
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    label: 'The Bonus',
    items: [
      {
        q: 'Is the referral code free to use?',
        text: `Yes. Using code ${REFERRAL_CODE} is completely free. You receive 50,000 UEC at no cost — no purchase, pledge, or payment is required.`,
        a: (
          <>
            Yes. Using code{' '}
            <span className="font-mono text-gold">{REFERRAL_CODE}</span> is
            completely free. You receive 50,000 UEC at no cost — no purchase,
            pledge, or payment is required.
          </>
        ),
      },
      {
        q: 'Do I have to pay anything to use a referral code?',
        text:
          'No. Creating an RSI account is free, and applying a referral code at signup costs nothing. Star Citizen does require purchasing a starter package or game pass to actually play, but the referral bonus itself has no cost.',
        a: (
          <>
            No. Creating an RSI account is free, and applying a referral code
            at signup costs nothing. Star Citizen does require purchasing a
            starter package or game pass to actually play, but the referral
            bonus itself has no cost.
          </>
        ),
      },
      {
        q: 'Does the bonus expire?',
        text:
          'The 50,000 UEC baseline bonus has been part of the program for years and is always active. CIG occasionally runs limited bonus events that stack additional rewards on top — those events have end dates, but the baseline does not.',
        a: (
          <>
            The 50,000 UEC baseline bonus has been part of the program for
            years and is always active. CIG occasionally runs limited bonus
            events that stack additional rewards on top — those events have
            end dates, but the baseline does not.
          </>
        ),
      },
      {
        q: 'Where do I see the bonus in-game and on my account?',
        text:
          'Your UEC balance shows in the top-right of your RSI account dashboard, and inside the game on your mobiGlas. The 50,000 should appear immediately after email verification.',
        a: (
          <>
            Your UEC balance shows in the top-right of your RSI account
            dashboard, and inside the game on your mobiGlas. The 50,000 should
            appear immediately after email verification.
          </>
        ),
      },
    ],
  },
  {
    label: 'Signup Mechanics',
    items: [
      {
        q: 'Can I add the code after signup?',
        text:
          'Yes — but only within 24 hours of creating your account. After the grace period closes, the referral slot locks permanently and the bonus cannot be claimed for that account.',
        a: (
          <>
            Yes — but only within 24 hours of creating your account. After the
            grace period closes, the referral slot locks permanently and the
            bonus cannot be claimed for that account.
          </>
        ),
      },
      {
        q: 'Do existing accounts get the bonus?',
        text:
          'No. The referral program is for new accounts only. Codes cannot be applied retroactively to existing RSI accounts. If you already have an account, you can share your own code with new players instead.',
        a: (
          <>
            No. The referral program is for new accounts only. Codes cannot be
            applied retroactively to existing RSI accounts. If you already
            have an account, you can share your own code with new players
            instead.
          </>
        ),
      },
      {
        q: 'How do I enter the code at signup?',
        text:
          `On the RSI Enlist page, scroll to the "Enlist Code" field and paste ${REFERRAL_CODE}. If you arrive via a referral link, the field is pre-filled automatically.`,
        a: (
          <>
            On the RSI Enlist page, scroll to the &ldquo;Enlist Code&rdquo;
            field and paste{' '}
            <span className="font-mono text-gold">{REFERRAL_CODE}</span>. If
            you arrive via a referral link, the field is pre-filled
            automatically.
          </>
        ),
      },
      {
        q: 'What if I already created an account without a code?',
        text:
          'If it has been less than 24 hours, log in and check your account settings — there may be a field to add a referral code. If 24 hours have passed, the slot is locked. The only workaround is to create a new account with a fresh email.',
        a: (
          <>
            If it has been less than 24 hours, log in and check your account
            settings — there may be a field to add a referral code. If 24
            hours have passed, the slot is locked. The only workaround is to
            create a new account with a fresh email.
          </>
        ),
      },
      {
        q: 'Can I use the code if I already have a Star Citizen account from a friend?',
        text:
          'No. Each RSI account can only attach one referral code, applied at signup. If your account was created with a different code, you cannot change it.',
        a: (
          <>
            No. Each RSI account can only attach one referral code, applied at
            signup. If your account was created with a different code, you
            cannot change it.
          </>
        ),
      },
    ],
  },
  {
    label: 'In-Game Currency',
    items: [
      {
        q: 'What is UEC?',
        text:
          'UEC stands for United Earth Credits — the persistent in-game currency for Star Citizen. UEC is bought, earned, or granted (like via the referral bonus) and stays on your account permanently.',
        a: (
          <>
            UEC stands for United Earth Credits — the persistent in-game
            currency for Star Citizen. UEC is bought, earned, or granted (like
            via the referral bonus) and stays on your account permanently.
          </>
        ),
      },
      {
        q: 'What is aUEC, and is it the same as UEC?',
        text:
          'No. aUEC (alpha UEC) is the temporary in-game currency used during the persistent universe alpha. aUEC is wiped between major patches. The 50,000 UEC referral bonus is real, persistent UEC — separate from aUEC.',
        a: (
          <>
            No. aUEC (alpha UEC) is the temporary in-game currency used during
            the persistent universe alpha. aUEC is wiped between major
            patches. The 50,000 UEC referral bonus is real, persistent UEC —
            separate from aUEC.
          </>
        ),
      },
      {
        q: 'Where do I spend UEC?',
        text:
          'On the RSI website Pledge Store under items priced in UEC, and in-game via the mobiGlas. Common purchases include ship components, weapons, armor, paints, and consumables.',
        a: (
          <>
            On the RSI website Pledge Store under items priced in UEC, and
            in-game via the mobiGlas. Common purchases include ship
            components, weapons, armor, paints, and consumables.
          </>
        ),
      },
    ],
  },
  {
    label: 'The Recruitment Program',
    items: [
      {
        q: 'Can I share my own referral code later?',
        text:
          'Yes. Once you have purchased a game package and your account meets the recruitment requirements, you can find your personal referral code in your RSI account settings. Sharing it lets you climb the recruitment ladder for additional rewards.',
        a: (
          <>
            Yes. Once you have purchased a game package and your account meets
            the recruitment requirements, you can find your personal referral
            code in your RSI account settings. Sharing it lets you climb the
            recruitment ladder for additional rewards.
          </>
        ),
      },
      {
        q: 'What is the recruitment ladder?',
        text:
          'The recruitment ladder is a tiered reward system for players who refer multiple new accounts. Tiers unlock cosmetics, ship paints, FPS weapons, and more as your recruitment count grows. New player bonuses (the 50,000 UEC) are unrelated to the recruiter\'s tier — every new player gets the same baseline.',
        a: (
          <>
            The recruitment ladder is a tiered reward system for players who
            refer multiple new accounts. Tiers unlock cosmetics, ship paints,
            FPS weapons, and more as your recruitment count grows. New player
            bonuses (the 50,000 UEC) are unrelated to the recruiter&apos;s
            tier — every new player gets the same baseline.
          </>
        ),
      },
      {
        q: 'Who is Doc_Flanigan and why does this code work?',
        text:
          'Doc_Flanigan is the player whose account this referral code belongs to. The code is shared on this site as part of the o7citizen.com network of fan sites. Star Citizen referral codes belong to player accounts permanently — as long as the account is in good standing, the code works.',
        a: (
          <>
            Doc_Flanigan is the player whose account this referral code
            belongs to. The code is shared on this site as part of the{' '}
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              o7citizen.com
            </a>{' '}
            network of fan sites. Star Citizen referral codes belong to player
            accounts permanently — as long as the account is in good
            standing, the code works.
          </>
        ),
      },
    ],
  },
  {
    label: 'Getting Started',
    items: [
      {
        q: 'I\'m brand new to Star Citizen — where do I start?',
        text:
          'Sign up with the referral code first to lock in the 50,000 UEC. Then visit o7citizen.com — a plain-English new player hub with explainers on terminology, ships, and what to do in your first hour in-game.',
        a: (
          <>
            Sign up with the referral code first to lock in the 50,000 UEC.
            Then visit{' '}
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              o7citizen.com
            </a>{' '}
            — a plain-English new player hub with explainers on terminology,
            ships, and what to do in your first hour in-game.
          </>
        ),
      },
      {
        q: 'Do I need to buy a ship to play?',
        text:
          'You need a starter package (commonly the Aurora MR or Mustang Alpha) which includes a basic ship and access to the persistent universe. The 50,000 UEC bonus does not include a ship — it covers components, weapons, and gear.',
        a: (
          <>
            You need a starter package (commonly the Aurora MR or Mustang
            Alpha) which includes a basic ship and access to the persistent
            universe. The 50,000 UEC bonus does not include a ship — it
            covers components, weapons, and gear.
          </>
        ),
      },
    ],
  },
];

/** Flattened list for JSON-LD schema */
export const ALL_FAQ_ITEMS: RichFAQItem[] = FAQ_CATEGORIES.flatMap(
  (c) => c.items,
);
