import { AlertTriangle } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function WarningBanner({ children, className = '' }: Props) {
  return (
    <div
      role="alert"
      className={`relative flex items-start gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-gold/[0.06] border border-gold/40 ${className}`}
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1 bg-gold"
      />
      <AlertTriangle
        className="h-5 w-5 shrink-0 text-gold mt-0.5"
        strokeWidth={2.25}
      />
      <p className="text-sm sm:text-[0.95rem] text-platinum/90 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
