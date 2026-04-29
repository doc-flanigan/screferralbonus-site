# CLAUDE.md — screferralbonus.com

## Project Overview
Standalone new-player conversion site for screferralbonus.com. Targets people
searching "star citizen referral bonus", "star citizen referral code 2026",
"star citizen 50000 UEC", or "star citizen new player bonus" — the highest
intent search bucket in the portfolio: they're about to sign up and need a
working code immediately. Single audience (new players); single goal (use
referral code at signup). Funnels secondarily to dayonecitizen.com for new player
guidance.

This is a sister site to screferralrewards.com but distinct: rewards is
veteran-leaning (tier ladder, recruitment tracking) and bonus is brand-new-
player-leaning (just the bonus, just the code, just the signup). Each domain
has its own deploy.

## Quick Reference

```
Referral code:  STAR-GCQJ-N6NC
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Build Status — All 8 Agents Complete (2026-04-27)

Initial build merged to `main` via PR #1. Site is live in production on Vercel.

| Agent | Scope | Status |
|------|------|--------|
| 1 | Next.js 14.2.35 scaffold, Tailwind palette, base layout | ✅ |
| 2 | 9 shared components (HeroCarousel, ReferralCodeBox, CTAButton, SecondaryLink, StepCard, WarningBanner, FAQAccordion, NavBar, Footer) | ✅ |
| 3 | Conversion-first homepage `/` with above-fold code box, 6 content sections, JSON-LD FAQPage | ✅ |
| 4 | `/how-to-use` 5-step walkthrough with screenshot placeholder cards | ✅ |
| 5 | `/faq` with 18 questions across 5 categories + JSON-LD schema | ✅ |
| 6 | `/about-the-bonus` explainer with FTC disclosure | ✅ |
| 7 | sitemap.ts, robots.ts, manifest.ts, JSON-LD Organization schema in layout | ✅ |
| 8 | Themed 404 page (`This Sector Is Empty`) | ✅ |

**Deviations from the original spec:** Next pinned to `14.2.35` (CVE patch over `14.2.18`); `@next/font` omitted (built into `next/font` since Next 13.2). See `SESSION-2026-04-27.md` for the full session log.

**Outstanding before public launch:** swap screenshot placeholders on `/how-to-use` for real images, verify referral code is still active on RSI, confirm Vercel custom domain config (DNS in progress).

## Agentic Build Instructions
Use an agentic, incremental approach. Complete each subtask fully and confirm
success before proceeding. Do not attempt to build everything in one pass.

### Agent 1 — Project Scaffold
- Initialize Next.js 14 project with App Router, TypeScript, Tailwind CSS
- Install dependencies: next, react, react-dom, tailwindcss, autoprefixer,
  postcss, @next/font, lucide-react, framer-motion
- Configure tailwind.config.ts with custom color palette:
    charcoal: '#111418'
    charcoalMid: '#1c2128'
    gold: '#ffd700'
    goldDark: '#ccac00'
    platinum: '#e8e8e8'
    muted: '#6b7280'
- Set up /public/images/hero/ folder with 12 placeholder images
  (hero-01.jpg through hero-12.jpg)
- Place placeholder at /public/images/made-by-community.png
- Confirm scaffold runs with `npm run dev` before proceeding

### Agent 2 — Shared Components
Build these reusable components in /components/:
  - HeroCarousel.tsx: rotating image carousel, 12 slides, auto-advance 5s,
    fade transition, accepts overlay title + subtitle + optional CTA button
  - ReferralCodeBox.tsx: prominent display of referral URL with copy-to-
    clipboard button. URL:
    https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
    Style: large gold-bordered box, impossible to miss
  - CTAButton.tsx: primary gold button — "Claim Your 50,000 UEC Bonus"
    → referral URL
  - SecondaryLink.tsx: "New Player Guide at dayonecitizen.com"
    → https://dayonecitizen.com
  - StepCard.tsx: numbered step card (1, 2, 3) for the signup walkthrough
  - WarningBanner.tsx: amber/gold banner — used for the "24-hour grace
    period" warning about entering the code at signup
  - FAQAccordion.tsx: expandable FAQ items
  - Footer.tsx: three-section footer (see spec below)
  - NavBar.tsx: sticky top nav, logo "screferralbonus.com", links: Home,
    How to Use, FAQ, About the Bonus, dayonecitizen.com. Mobile hamburger.
Confirm all components render without errors before proceeding.

### Agent 3 — Homepage (/)
Conversion-first layout. Referral code must be visible within the first
viewport on both mobile and desktop.
  - SEO meta:
      title="Star Citizen Referral Bonus 2026 — 50,000 UEC Free Code"
      description="Get the Star Citizen referral bonus when you sign up.
      Use code STAR-GCQJ-N6NC at registration to claim 50,000 free UEC.
      Updated for 2026."
  - JSON-LD FAQPage schema (8+ questions)
  - ABOVE FOLD (no scrolling required):
    * H1: "Get the Star Citizen Referral Bonus — 50,000 UEC Free"
    * ReferralCodeBox: STAR-GCQJ-N6NC with copy button
    * CTAButton: "Create Account & Claim Bonus"
    * WarningBanner: "⚠️ Enter the code at signup — you have 24 hours"
  - HeroCarousel (below fold)
  - Sections:
    * "What Is the Star Citizen Referral Bonus?" — plain-English answer
    * "How to Claim Your Bonus" — 3 StepCards (Create account → Enter code
      → Receive 50,000 UEC)
    * "What Can You Buy With 50,000 UEC?" — examples: ship components,
      armor, weapons, consumables
    * "Is the Bonus Always Active?" — yes, baseline 50,000 UEC always
      available; bonus events occasionally add extras
    * "Will the Code Expire?" — explain code persistence
    * FAQAccordion (8 questions)
    * Final CTAButton + SecondaryLink to dayonecitizen.com
  - Footer
  Confirm full page renders correctly on mobile (375px) and desktop.

### Agent 4 — How to Use Page (/how-to-use)
  - SEO meta: title="How to Use a Star Citizen Referral Code — Step-by-Step"
    description="Step-by-step guide for entering a Star Citizen referral
    code during signup to claim your 50,000 UEC bonus. Includes the 24-hour
    grace period rule."
  - Hero: "How to Use the Referral Code"
  - Detailed step-by-step:
    1. Visit RSI signup page
    2. Fill in account details
    3. Enter referral code STAR-GCQJ-N6NC
    4. Verify email
    5. Confirm bonus in your hangar
  - Screenshot placeholders for each step
  - WarningBanner about the 24-hour grace period
  - Large ReferralCodeBox
  - "What Happens Next" — when does the UEC arrive, where to find it
  - CTAButton at bottom
  Confirm page renders before proceeding.

### Agent 5 — FAQ Page (/faq)
  - SEO meta: title="Star Citizen Referral Bonus FAQ — Common Questions"
  - 15+ questions covering:
    * Is the code free to use?
    * Do I have to pay to use a referral code?
    * Can I add the code after signup? (24-hour rule)
    * Do existing accounts get the bonus?
    * What is UEC?
    * What is aUEC vs UEC?
    * Does the bonus expire?
    * Can I share my own referral code later?
    * What's the recruitment ladder?
    * Where do I see the bonus in-game?
  - JSON-LD FAQPage schema for all questions
  - Internal links to dayonecitizen.com glossary for SC terms
  - CTAButton at bottom
  Confirm page renders and schema validates.

### Agent 6 — About the Bonus Page (/about-the-bonus)
  - SEO meta: title="About the Star Citizen Referral Program"
  - Plain-English explainer of the referral program
  - Why CIG runs it, how it benefits new players
  - "Bonus events" section — placeholder for periodic CIG bonus events
  - FTC-compliant disclosure block (also in footer; repeated here for clarity)
  - CTAButton at bottom
  Confirm page renders.

### Agent 7 — SEO & Technical
  - Generate /app/sitemap.ts with all routes
  - Generate /app/robots.ts
  - Add Open Graph and Twitter card meta to all pages
  - Add canonical URLs (canonical = https://screferralbonus.com/{path})
  - Add JSON-LD Organization schema to layout.tsx
  - JSON-LD FAQPage schema on / and /faq
  - Optimize all images with next/image
  - Add /app/manifest.ts for PWA basics
  - Ensure all pages have unique, keyword-rich titles and descriptions
  - Confirm Lighthouse SEO score > 95 (`npx lighthouse`)
  Confirm SEO audit passes before proceeding.

### Agent 8 — Final Polish & Build
  - Audit all pages for mobile responsiveness (test at 375px)
  - Add smooth scroll behavior
  - Add loading states to carousel
  - Add 404 page (app/not-found.tsx) themed to the site
  - Run `npm run build` — fix any TypeScript or build errors
  - Confirm build passes cleanly

## Sister Site
screferralrewards.com — same portfolio, but veteran-focused on the
recruitment ladder and rewards tiers. Internal-link sparingly; the two
sites have distinct intent.

## Color Palette
  --charcoal: #111418
  --charcoal-mid: #1c2128
  --gold: #ffd700
  --gold-dark: #ccac00
  --platinum: #e8e8e8
  --muted: #6b7280

## Network Conventions
See `E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md` for footer spec,
tone rules, commit convention, tech stack, and agentic build pattern.

## PR/Merge Description Template
### What this PR does
[summary]
### Pages/components affected
[list]
### SEO impact
[description]
### Testing
- [ ] npm run build passes
- [ ] Mobile responsive (tested at 375px)
- [ ] All CTA links point to the referral URL
- [ ] Footer has all three required sections
