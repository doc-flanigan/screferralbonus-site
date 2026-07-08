import Image from 'next/image';

/**
 * Static cinematic hero band. Replaces the HeroCarousel — a passive,
 * set-and-forget page wants one great image with zero client JS. The old
 * carousel stacked two heavy gradients and read as a black void; this keeps
 * a single light grounding gradient so the artwork actually shows.
 * Server component; image is priority-loaded.
 */
export default function StaticHero({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <section className={`relative w-full overflow-hidden ${className}`} aria-label={alt}>
      <div className="relative aspect-[21/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoalDeep/80 via-transparent to-charcoalDeep/30 pointer-events-none"
          aria-hidden
        />
        {/* corner brackets — matches the site's industrial framing */}
        <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-gold/60" aria-hidden />
        <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-gold/60" aria-hidden />
      </div>
    </section>
  );
}
