type Props = {
  step: number;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function StepCard({ step, title, children, className = '' }: Props) {
  const num = String(step).padStart(2, '0');

  return (
    <article
      className={`hud-corner relative bg-charcoalMid/50 border border-platinum/10 hover:border-gold/40 transition-colors duration-300 p-6 sm:p-8 ${className}`}
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span
          className="font-display font-bold text-5xl sm:text-6xl text-gold/90 leading-none"
          aria-hidden
        >
          {num}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
      </div>
      <h3 className="font-display text-lg sm:text-xl font-semibold uppercase tracking-[0.12em] text-platinum mb-3">
        {title}
      </h3>
      <div className="text-sm sm:text-[0.95rem] text-platinum/70 leading-relaxed">
        {children}
      </div>
    </article>
  );
}
