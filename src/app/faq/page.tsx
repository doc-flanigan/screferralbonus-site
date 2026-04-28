import type { Metadata } from 'next';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import CTAButton from '@/components/CTAButton';
import SecondaryLink from '@/components/SecondaryLink';
import { SITE_URL } from '@/lib/constants';
import { FAQ_CATEGORIES, ALL_FAQ_ITEMS } from '@/data/faq-page';

export const metadata: Metadata = {
  title: 'Star Citizen Referral Bonus FAQ — Common Questions',
  description:
    'Detailed FAQ for the Star Citizen referral bonus and code STAR-GCQJ-N6NC. Covers the 24-hour grace period, UEC vs aUEC, the recruitment ladder, and more.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'Star Citizen Referral Bonus FAQ',
    description: '17+ answers covering the bonus, signup, UEC, and recruitment.',
    url: `${SITE_URL}/faq`,
    type: 'article',
  },
};

function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ALL_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.text,
      },
    })),
  };
}

export default function FAQPage() {
  const totalCount = ALL_FAQ_ITEMS.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <NavBar />

      <main>
        {/* Header */}
        <section className="relative isolate overflow-hidden border-b border-gold/15">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(255,215,0,0.10),transparent_70%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-14 sm:pt-20 pb-10 sm:pb-14">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
              {totalCount} answers · last updated 2026
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-platinum leading-[1.05]">
              Star Citizen{' '}
              <span className="text-gold text-glow-gold">Referral Bonus</span>{' '}
              FAQ
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-platinum/75 leading-relaxed">
              Everything new players ask about the 50,000 UEC bonus, the
              code, the 24-hour grace period, and how the recruitment program
              works.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
          <div className="space-y-16 sm:space-y-20">
            {FAQ_CATEGORIES.map((cat, i) => (
              <div key={cat.label} id={`cat-${i}`}>
                <div className="flex items-baseline gap-4 mb-6">
                  <span
                    className="font-display font-bold text-3xl sm:text-4xl text-gold/90 tabular-nums"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-[0.12em] text-platinum">
                    {cat.label}
                  </h2>
                  <span className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent ml-2" />
                </div>
                <FAQAccordion items={cat.items} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="border-t border-gold/15 bg-charcoal/50">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-24 text-center">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-4">
              Still have questions?
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-platinum mb-6">
              The Easiest Answer Is to Try It
            </h2>
            <p className="text-platinum/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Account creation takes two minutes and the bonus is automatic.
              For deeper context on terminology and gameplay, head to the new
              player hub at o7citizen.com.
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
