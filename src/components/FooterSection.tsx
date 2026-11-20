import React, { useRef } from 'react';
import { BaroqueSideFlourish, LuxuryWhiteRoseCluster } from './BaroqueOrnaments';
import { Reveal } from './Reveal';

interface FooterSectionProps {
  onSecretOwnerUnlock?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onSecretOwnerUnlock,
}) => {
  const tapCountRef = useRef(0);
  const resetTimerRef = useRef<number | null>(null);

  const handleOrnamentTap = () => {
    if (!onSecretOwnerUnlock) return;

    tapCountRef.current += 1;
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    if (tapCountRef.current >= 5) {
      tapCountRef.current = 0;
      onSecretOwnerUnlock();
      return;
    }

    resetTimerRef.current = window.setTimeout(() => {
      tapCountRef.current = 0;
    }, 2500);
  };

  return (
    <footer
      aria-label="خاتمة الدعوة"
      className="relative w-full bg-[#EFECE9] py-16 md:py-20 px-4 sm:px-6 overflow-hidden border-t border-[#9E7B3B]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
    >
      {/* Left-edge 3D White Baroque Relief & Lush White Roses */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-2 w-24 sm:w-28 md:w-36 pointer-events-none select-none"
      >
        <LuxuryWhiteRoseCluster flipX className="absolute -right-10 top-6 w-28 md:w-32 opacity-90 animate-floral-sway" />
        <BaroqueSideFlourish className="relative w-full h-auto" />
      </div>

      {/* Right-edge 3D White Baroque Relief & Lush White Roses (5 consecutive taps unlock Owner Wishes) */}
      <div
        data-testid="footer-secret-ornament"
        onClick={handleOrnamentTap}
        className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-2 w-24 sm:w-28 md:w-36 cursor-default select-none"
      >
        <LuxuryWhiteRoseCluster className="absolute -left-10 top-6 w-28 md:w-32 opacity-90 pointer-events-none animate-floral-sway" />
        <BaroqueSideFlourish flipX className="relative w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3">
        <Reveal>
          <h2 className="font-calligraphy gold-calligraphy text-4xl sm:text-5xl font-bold leading-snug">
            دامت أفراحكم عامرة
          </h2>
          <p className="font-amiri text-xl sm:text-2xl text-[#3E383A]/90 pt-1">
            بحضوركم تكتمل فرحتنا
          </p>
        </Reveal>
      </div>
    </footer>
  );
};
