import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export default function NotFound() {
  return (
    <>
      <NavBar />

      <main className="relative isolate min-h-[calc(100svh-64px)] flex items-center">
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,215,0,0.08),transparent_70%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-3xl w-full px-5 sm:px-8 py-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Compass className="h-5 w-5 text-gold animate-pulse-gold" />
            <span className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80">
              Quantum drive misaligned
            </span>
          </div>

          <p
            className="font-display font-bold text-7xl sm:text-9xl text-gold/85 leading-none mb-2 text-glow-gold tabular-nums"
            aria-hidden
          >
            404
          </p>

          <h1 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-platinum mb-5">
            This Sector Is Empty
          </h1>

          <p className="text-platinum/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            The page you tried to reach doesn&apos;t exist on this site. The
            referral bonus is still here though — you can grab it from the
            home page or jump straight to the signup link below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 font-display font-semibold uppercase tracking-[0.18em] text-sm text-platinum border border-platinum/30 hover:border-gold hover:text-gold transition-colors"
            >
              <Home className="h-4 w-4" strokeWidth={2.25} />
              Back to Home
            </Link>
            <CTAButton size="md" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
