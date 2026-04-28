'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDE_COUNT } from '@/lib/constants';

type Props = {
  title?: string;
  subtitle?: string;
  cta?: React.ReactNode;
  /** ms between slides — default 5000 */
  intervalMs?: number;
  className?: string;
};

const slides = Array.from({ length: HERO_SLIDE_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return `/images/hero/hero-${num}.jpg`;
});

export default function HeroCarousel({
  title,
  subtitle,
  cta,
  intervalMs = 5000,
  className = '',
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <section
      className={`relative w-full overflow-hidden bg-charcoalDeep ${className}`}
      aria-label="Star Citizen imagery"
    >
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Atmospheric overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoalDeep via-charcoalDeep/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoalDeep/70 via-transparent to-charcoalDeep/30"
          aria-hidden
        />

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] transition-all duration-300 ${
                i === index ? 'w-8 bg-gold' : 'w-4 bg-platinum/30 hover:bg-platinum/60'
              }`}
            />
          ))}
        </div>

        {/* Overlay content */}
        {(title || subtitle || cta) && (
          <div className="absolute inset-0 flex items-center z-[5]">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
              <div className="max-w-2xl">
                {title && (
                  <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-platinum text-glow-gold leading-[1.05]">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="mt-4 text-base sm:text-lg text-platinum/80 max-w-xl">
                    {subtitle}
                  </p>
                )}
                {cta && <div className="mt-6">{cta}</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
