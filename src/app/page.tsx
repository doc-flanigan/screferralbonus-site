import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import CTAButton from '@/components/CTAButton';
import SecondaryLink from '@/components/SecondaryLink';
import StepCard from '@/components/StepCard';
import WarningBanner from '@/components/WarningBanner';
import FAQAccordion from '@/components/FAQAccordion';

const SAMPLE_FAQ = [
  {
    q: 'Is the referral code free to use?',
    a: 'Yes. The code costs nothing and you receive 50,000 UEC at no cost to you.',
  },
  {
    q: 'Can I add the code after I sign up?',
    a: 'You have a 24-hour grace period. Add it during signup to be safe.',
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroCarousel
          title="Component Smoke Test"
          subtitle="Agent 2 staging — every component rendered once. Agent 3 replaces this page."
          cta={<CTAButton size="md" />}
        />

        <section className="mx-auto max-w-4xl px-5 sm:px-8 py-12 space-y-10">
          <ReferralCodeBox />
          <WarningBanner>
            Enter the code at signup — you have a 24-hour grace period before
            it locks to your account.
          </WarningBanner>

          <div className="grid gap-6 sm:grid-cols-3">
            <StepCard step={1} title="Create Account">
              Click the bonus link to open the RSI signup page.
            </StepCard>
            <StepCard step={2} title="Enter the Code">
              Paste <span className="font-mono text-gold">STAR-GCQJ-N6NC</span> in the referral field.
            </StepCard>
            <StepCard step={3} title="Receive 50,000 UEC">
              Verify your email — your bonus appears in your hangar.
            </StepCard>
          </div>

          <FAQAccordion items={SAMPLE_FAQ} />

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <CTAButton />
            <SecondaryLink />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
