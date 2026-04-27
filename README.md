# screferralbonus.com

> **Star Citizen referral bonus + code site for new players**

Standalone conversion site targeting people searching for the Star Citizen
referral bonus. Single audience (new players about to sign up), single goal
(use the referral code at registration to claim 50,000 free UEC).

## Why This Exists

"Star citizen referral bonus" and "star citizen referral code" are the
highest-intent search queries in the new-player funnel — visitors are about
to create an account and need a working code immediately. This site
delivers the code above the fold and walks them through claiming the bonus.

## Sister Site

[screferralrewards.com](https://screferralrewards.com) covers the veteran-
facing recruitment ladder and rewards tiers. Each runs as its own deploy
with its own messaging.

## Referral Code

**STAR-GCQJ-N6NC**

Full URL: https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC

## Funnel

screferralbonus.com → above-fold code + signup walkthrough → RSI signup →
o7citizen.com (for ongoing new player guidance)

## Pages

- `/` — Above-fold code + bonus explainer + FAQ
- `/how-to-use` — Step-by-step signup walkthrough
- `/faq` — Common questions (with FAQPage schema)
- `/about-the-bonus` — Program explainer + FTC disclosure

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel deployment

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Hero Images

Add your hero images to `/public/images/hero/` named:
`hero-01.jpg` through `hero-12.jpg`

Until then, run `node scripts/generate-placeholders.js` to generate
placeholder files.

## RSI Fankit

Place the "Made by the Community" fankit image at:
`/public/images/made-by-community.png`

## Deployment (Vercel)

1. Import this repo in the Vercel dashboard
2. Add custom domain `screferralbonus.com` under Project → Domains
3. Vercel auto-deploys on every push to main

## Disclaimer

This is an unofficial fan site. Not affiliated with Cloud Imperium Games,
Roberts Space Industries, or the Star Citizen franchise.

FTC Disclosure: Referral links earn the site owner an in-game bonus reward
when you sign up using code STAR-GCQJ-N6NC. You still receive your full
50,000 UEC bonus at no cost.

## License

Fan content. All Star Citizen assets © Cloud Imperium Rights LLC.
