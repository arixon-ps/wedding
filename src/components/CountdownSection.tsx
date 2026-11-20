import React, { useEffect, useState } from 'react';
import { calculateCountdown, padTwo, type CountdownParts } from '../utils/countdown';
import {
  BaroqueSideFlourish,
  BaroqueTopCrownMedallion,
  GoldCornerFiligree,
  LuxuryWhiteRoseCluster,
} from './BaroqueOrnaments';
import { Reveal } from './Reveal';

export const CountdownSection: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    calculateCountdown(Date.now()),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(calculateCountdown(Date.now()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { key: 'days', value: padTwo(countdown.days), label: 'أيام' },
    { key: 'hours', value: padTwo(countdown.hours), label: 'ساعات' },
    { key: 'minutes', value: padTwo(countdown.minutes), label: 'دقائق' },
    { key: 'seconds', value: padTwo(countdown.seconds), label: 'ثواني' },
  ];

  return (
    <section
      id="countdown-section"
      aria-label="العد التنازلي لموعد الفرح"
      className="relative w-full bg-[#EFECE9] py-14 md:py-20 px-4 sm:px-6 overflow-hidden border-y border-[#9E7B3B]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(55,45,50,0.08)]"
    >
      {/* Far Right Symmetrical 3D Baroque Relief & White Rose */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-8 md:-right-4 w-24 md:w-36 lg:w-44 pointer-events-none"
      >
        <LuxuryWhiteRoseCluster className="absolute -left-10 top-6 w-28 md:w-36 opacity-90 animate-floral-sway" />
        <BaroqueSideFlourish flipX className="relative w-full h-auto" />
      </div>

      {/* Far Left Symmetrical 3D Baroque Relief & Lush White Rose */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-8 md:-left-4 w-24 md:w-36 lg:w-44 pointer-events-none"
      >
        <LuxuryWhiteRoseCluster flipX className="absolute -right-10 bottom-6 w-28 md:w-36 opacity-90 animate-floral-sway" />
        <BaroqueSideFlourish className="relative w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="flex justify-center mb-3">
            <BaroqueTopCrownMedallion className="w-32 sm:w-40 h-auto opacity-95" />
          </div>
          <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-[#3E383A] mb-8 md:mb-10">
            الوقت المتبقي على موعد الفرح
          </h2>

          {/* Countdown Digits (DAYS : HOURS : MINUTES : SECONDS) */}
          <div
            dir="ltr"
            data-testid="countdown-timer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6"
          >
            {units.map((unit, idx) => (
              <React.Fragment key={unit.key}>
                <div className="group relative flex flex-col items-center justify-center min-w-[64px] sm:min-w-[92px] md:min-w-[104px] py-3.5 sm:py-4 px-2 rounded-xl bg-[#EAE6E3]/60 border border-[#9E7B3B]/20 shadow-[0_6px_16px_rgba(55,45,50,0.06)] transition-transform duration-300 hover:-translate-y-1">
                  <GoldCornerFiligree className="absolute top-1 left-1 w-3.5 h-3.5 opacity-80" />
                  <GoldCornerFiligree className="absolute bottom-1 right-1 w-3.5 h-3.5 opacity-80 rotate-180" />
                  <span
                    key={`${unit.key}-${unit.value}`}
                    data-testid={`countdown-${unit.key}`}
                    className="font-amiri gold-number text-4xl sm:text-5xl md:text-6xl font-bold leading-none animate-countdown-tick"
                  >
                    {unit.value}
                  </span>
                  <span className="font-body text-xs sm:text-sm md:text-base font-medium text-[#3E383A]/85 mt-2">
                    {unit.label}
                  </span>
                </div>
                {idx < units.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="font-amiri text-2xl sm:text-4xl md:text-5xl text-[#9E7B3B]/75 leading-none select-none pb-4"
                  >
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
