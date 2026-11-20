import React from 'react';
import { BaroqueSideFlourish, WhiteRoseSprig } from './BaroqueOrnaments';
import { DrawOnView, Reveal, useScrollParallax } from './Reveal';
import {
  CalendarDrawIcon,
  ClockDrawIcon,
  EveningLanternDrawIcon,
  GoldFlourishDrawDivider,
  LocationPinDrawIcon,
  NoCameraDrawIcon,
} from './ThinLineIcons';

export const DetailsSection: React.FC = () => {
  const parallaxRight = useScrollParallax(0.04, 12);
  const parallaxLeft = useScrollParallax(-0.04, 12);

  return (
    <section
      id="details-section"
      aria-label="تفاصيل حفل الزفاف وسهرة الشباب"
      className="relative w-full py-12 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle flanking 3D baroque ornaments & tucked white roses */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-1/4 -right-6 w-32 xl:w-40 pointer-events-none"
        style={{
          transform: `translate3d(${parallaxRight.x}px, ${parallaxRight.y}px, 0) rotate(${parallaxRight.rotate}deg)`,
        }}
      >
        <WhiteRoseSprig className="absolute -left-6 top-8 w-24 opacity-85 animate-floral-sway" />
        <BaroqueSideFlourish flipX className="relative w-full h-auto" />
      </div>
      <div
        aria-hidden="true"
        className="hidden lg:block absolute bottom-1/4 -left-6 w-32 xl:w-40 pointer-events-none"
        style={{
          transform: `translate3d(${parallaxLeft.x}px, ${parallaxLeft.y}px, 0) rotate(${parallaxLeft.rotate}deg)`,
        }}
      >
        <WhiteRoseSprig flipX className="absolute -right-6 bottom-8 w-24 opacity-85 animate-floral-sway" />
        <BaroqueSideFlourish className="relative w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-10">
        {/* 1. Wedding Date */}
        <Reveal delayMs={50} className="w-full max-w-md">
          <div className="group flex flex-col items-center space-y-2 text-[#3E383A] rounded-2xl px-8 py-6 bg-[#EFECE9]/40 border border-[#9E7B3B]/25 shadow-[0_8px_22px_rgba(55,45,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9E7B3B]/55">
            <DrawOnView className="transition-transform duration-300 group-hover:scale-105">
              <CalendarDrawIcon className="w-12 h-12 mb-1" />
            </DrawOnView>
            <p className="font-body text-xl sm:text-2xl font-medium">يوم الثلاثاء</p>
            <p
              dir="ltr"
              className="font-body text-xl sm:text-2xl font-bold tracking-wider text-[#3E383A] tabular-nums"
            >
              24/11/2026
            </p>
          </div>
        </Reveal>

        {/* 2. Wedding Time */}
        <Reveal delayMs={100} className="w-full max-w-md">
          <div className="group flex flex-col items-center space-y-2 text-[#3E383A] rounded-2xl px-8 py-6 bg-[#EFECE9]/40 border border-[#9E7B3B]/25 shadow-[0_8px_22px_rgba(55,45,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9E7B3B]/55">
            <DrawOnView className="transition-transform duration-300 group-hover:scale-105">
              <ClockDrawIcon className="w-12 h-12 mb-1" />
            </DrawOnView>
            <p className="font-body text-xl sm:text-2xl font-bold">الساعة 4 مساءً</p>
          </div>
        </Reveal>

        {/* 3. Wedding Venue (Pure Editorial Text, No Links/Buttons) */}
        <Reveal delayMs={150} className="w-full max-w-md">
          <div className="group flex flex-col items-center space-y-2 text-[#3E383A] rounded-2xl px-8 py-6 bg-[#EFECE9]/40 border border-[#9E7B3B]/25 shadow-[0_8px_22px_rgba(55,45,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9E7B3B]/55">
            <DrawOnView className="transition-transform duration-300 group-hover:scale-105">
              <LocationPinDrawIcon className="w-12 h-12 mb-1" />
            </DrawOnView>
            <p className="font-body text-xl sm:text-2xl font-bold">صالة قصر فينسيا</p>
            <p className="font-body text-base sm:text-lg text-[#3E383A]/85">
              بالقرب من دوار أبو علاء
            </p>
          </div>
        </Reveal>

        {/* 4. Ornate Gold Flourish Divider & Youth Evening */}
        <Reveal delayMs={200} className="w-full flex flex-col items-center space-y-6 pt-3">
          <DrawOnView>
            <GoldFlourishDrawDivider className="w-60 sm:w-72 h-10" />
          </DrawOnView>

          <DrawOnView>
            <EveningLanternDrawIcon className="w-12 h-12" />
          </DrawOnView>

          <h3 className="font-calligraphy gold-calligraphy text-4xl sm:text-5xl font-bold leading-tight">
            سهرة الشباب
          </h3>

          {/* Youth Evening Date & Time */}
          <div className="flex flex-col items-center space-y-2.5 text-[#3E383A]">
            <DrawOnView className="flex items-center justify-center gap-4 mb-1">
              <CalendarDrawIcon className="w-10 h-10" />
              <ClockDrawIcon className="w-10 h-10" />
            </DrawOnView>
            <p className="font-body text-lg sm:text-xl font-medium">
              يوم الاثنين <span dir="ltr" className="font-bold tabular-nums">23/11/2026</span>
            </p>
            <p className="font-body text-lg sm:text-xl font-medium text-[#3E383A]/90">
              بعد صلاة العشاء
            </p>
          </div>

          {/* Youth Evening Venue (Pure Editorial Text) */}
          <div className="flex flex-col items-center space-y-2 text-[#3E383A] pt-2">
            <DrawOnView>
              <LocationPinDrawIcon className="w-11 h-11 mb-0.5" />
            </DrawOnView>
            <p className="font-body text-xl sm:text-2xl font-bold">في صالة إيلين</p>
            <p className="font-body text-base sm:text-lg text-[#3E383A]/85">
              مقابل مستشفى دار السلام
            </p>
          </div>
        </Reveal>

        {/* 5. Framed Notices */}
        <Reveal delayMs={240} className="w-full flex flex-col items-center space-y-8 pt-4">
          <div className="relative inline-flex items-center justify-center px-8 sm:px-12 py-4 border border-[#9E7B3B]/60 bg-[#EFECE9]/55 shadow-[0_4px_14px_rgba(55,45,50,0.08)]">
            <span
              aria-hidden="true"
              className="absolute inset-1 border border-[#9E7B3B]/40 pointer-events-none"
            />
            <p className="relative font-body text-base sm:text-lg font-medium text-[#3E383A]">
              ملاحظة: التوجه إلى الصالة مباشرة
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2.5 text-[#3E383A]">
            <DrawOnView>
              <NoCameraDrawIcon className="w-12 h-12" />
            </DrawOnView>
            <p className="font-body text-base sm:text-lg font-medium">
              ممنوع التصوير داخل الصالة
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
