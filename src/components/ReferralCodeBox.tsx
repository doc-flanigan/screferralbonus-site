'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { REFERRAL_CODE, REFERRAL_URL } from '@/lib/constants';

type Props = {
  /** What goes on the clipboard. Defaults to the bare code. */
  copyValue?: 'code' | 'url';
  className?: string;
};

export default function ReferralCodeBox({
  copyValue = 'code',
  className = '',
}: Props) {
  const [copied, setCopied] = useState(false);
  const value = copyValue === 'code' ? REFERRAL_CODE : REFERRAL_URL;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — silently no-op; CTA still works */
    }
  };

  return (
    <div
      className={`hud-corner relative bg-charcoalMid/70 backdrop-blur-sm border border-gold/60 shadow-gold-soft ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-stretch">
        <div className="flex-1 px-5 py-5 sm:px-7 sm:py-6">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-gold/80 mb-2">
            Referral Code
          </p>
          <p
            className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-platinum tracking-[0.08em] text-glow-gold select-all break-all"
            aria-label={`Referral code ${REFERRAL_CODE}`}
          >
            {REFERRAL_CODE}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied ? 'Copied to clipboard' : `Copy ${copyValue} to clipboard`
          }
          className="group relative flex items-center justify-center gap-2 px-5 py-4 sm:px-6 sm:min-w-[140px] bg-gold text-charcoalDeep font-display font-semibold uppercase tracking-[0.18em] text-sm hover:bg-goldDark transition-colors duration-150 border-t sm:border-t-0 sm:border-l border-gold/60"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" strokeWidth={3} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" strokeWidth={2.5} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
