import React, { useEffect, useState } from 'react';
import { calculateCountdown, padTwo, type CountdownParts } from '../utils/countdown';
import { BaroqueSideFlourish, WhiteRoseSprig } from './BaroqueOrnaments';
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
      className="relative w-full bg-[#EFECE9] py-14 md:py-18 px-4 sm:px-6 overflow-hidden border-y border-[#9E7B3B]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(55,45,50,0.08)]"
    >
      {/* Far Right Symmetrical 3D Baroque Relief & White Rose */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-8 md:-right-4 w-24 md:w-36 lg:w-44 pointer-events-none"
      >
        <WhiteRoseSprig className="absolute -left-5 top-8 w-20 opacity-85" />
        <BaroqueSideFlourish flipX className="relative w-full h-auto" />
      </div>

      {/* Far Left Symmetrical 3D Baroque Relief & White Rose */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-8 md:-left-4 w-24 md:w-36 lg:w-44 pointer-events-none"
      >
        <WhiteRoseSprig flipX className="absolute -right-5 bottom-8 w-20 opacity-85" />
        <BaroqueSideFlourish className="relative w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-[#3E383A] mb-8 md:mb-10">
            الوقت المتبقي على موعد الفرح
          </h2>

          {/* Countdown Digits (DAYS : HOURS : MINUTES : SECONDS) */}
          <div
            dir="ltr"
            data-testid="countdown-timer"
            className="inline-flex items-start justify-center gap-2 sm:gap-5 md:gap-7"
          >
            {units.map((unit, idx) => (
              <React.Fragment key={unit.key}>
                <div className="flex flex-col items-center min-w-[54px] sm:min-w-[78px]">
                  <span
                    data-testid={`countdown-${unit.key}`}
                    className="font-amiri gold-number text-4xl sm:text-5xl md:text-6xl font-bold leading-none"
                  >
                    {unit.value}
                  </span>
                  <span className="font-body text-xs sm:text-sm md:text-base font-medium text-[#3E383A]/85 mt-2.5">
                    {unit.label}
                  </span>
                </div>
                {idx < units.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="font-amiri text-3xl sm:text-4xl md:text-5xl text-[#9E7B3B]/75 leading-none pt-0.5 select-none"
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
