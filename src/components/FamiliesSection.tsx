import React from 'react';
import {
  BaroqueSideFlourish,
  BrideGroomSilhouette,
  LuxuryWhiteRoseCluster,
} from './BaroqueOrnaments';
import { DrawOnView, Reveal, useScrollParallax } from './Reveal';
import {
  BridalBouquetDrawIcon,
  FloralCrownDividerDrawIcon,
  VerticalGoldDivider,
} from './ThinLineIcons';

export const FamiliesSection: React.FC = () => {
  const parallaxRight = useScrollParallax(0.055, 14);
  const parallaxLeft = useScrollParallax(-0.045, 14);

  return (
    <section
      id="families-section"
      aria-label="الافتتاحية الشعرية وإعلان العائلتين"
      className="relative w-full py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Faint Romantic Bride & Groom Silhouette Watermark (opacity: 0.07) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <BrideGroomSilhouette className="w-[300px] sm:w-[360px] md:w-[400px] h-auto" />
      </div>

      {/* Right Edge 3D Baroque Relief + Tucked White Roses */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-14 -right-10 md:-right-6 w-28 md:w-40 opacity-95 pointer-events-none z-0"
        style={{
          transform: `translate3d(${parallaxRight.x}px, ${parallaxRight.y}px, 0) rotate(${parallaxRight.rotate}deg)`,
        }}
      >
        <LuxuryWhiteRoseCluster className="absolute -left-14 top-4 w-36 md:w-44 opacity-95 animate-floral-sway" />
        <BaroqueSideFlourish flipX className="relative w-full h-auto" />
      </div>

      {/* Left Edge 3D Baroque Relief + Lush White Roses */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute bottom-12 -left-10 md:-left-6 w-28 md:w-40 opacity-95 pointer-events-none z-0"
        style={{
          transform: `translate3d(${parallaxLeft.x}px, ${parallaxLeft.y}px, 0) rotate(${parallaxLeft.rotate}deg)`,
        }}
      >
        <LuxuryWhiteRoseCluster flipX className="absolute -right-14 bottom-4 w-36 md:w-44 opacity-95 animate-floral-sway" />
        <BaroqueSideFlourish className="relative w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Centered Poetic Opening Verses */}
        <div className="space-y-2.5 sm:space-y-3 mb-12 md:mb-14">
          <Reveal delayMs={60}>
            <p className="font-amiri text-xl sm:text-2xl text-[#3E383A] leading-relaxed">
              بسم خالق الحب مبتا
            </p>
          </Reveal>
          <Reveal delayMs={180}>
            <p className="font-amiri text-xl sm:text-2xl text-[#3E383A] leading-relaxed">
              بسم رب العشق مقرب القلوب
            </p>
          </Reveal>
          <Reveal delayMs={300}>
            <p className="font-amiri text-xl sm:text-2xl text-[#3E383A] leading-relaxed">
              بسم المودة والرحمة تجتمع الأرواح
            </p>
          </Reveal>
        </div>

        {/* Ornate Floral Crest Divider + Main Family Heading */}
        <Reveal delayMs={340} className="flex flex-col items-center mb-12 md:mb-14">
          <DrawOnView className="mb-3">
            <FloralCrownDividerDrawIcon className="w-52 sm:w-64 h-9" />
          </DrawOnView>
          <DrawOnView className="mb-2">
            <BridalBouquetDrawIcon className="w-12 h-12" />
          </DrawOnView>
          <h2 className="font-calligraphy gold-calligraphy text-4xl sm:text-5xl font-bold leading-tight">
            أفراح آل عاشور
          </h2>
        </Reveal>

        {/* Symmetric Two-Column Families Layout */}
        <Reveal delayMs={440}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-6 max-w-2xl mx-auto mb-12 md:mb-14">
            {/* Groom's Side (Right in RTL) */}
            <div className="flex flex-col items-center space-y-2 px-2">
              <p className="font-body text-lg sm:text-xl font-medium text-[#3E383A]">
                السيد غازي عاشور
              </p>
              <p className="font-body text-base sm:text-lg text-[#3E383A]/85">
                نجله الحكيم
              </p>
              <p className="font-calligraphy gold-calligraphy text-2xl sm:text-3xl font-bold pt-1 leading-snug">
                إبراهيم غازي عاشور
              </p>
            </div>

            {/* Center Ornamental Divider */}
            <div className="flex items-center justify-center">
              <VerticalGoldDivider className="hidden md:block w-6 h-36" />
              <div className="md:hidden w-32 h-px bg-gradient-to-r from-transparent via-[#9E7B3B]/65 to-transparent" />
            </div>

            {/* Bride's Side (Left in RTL) */}
            <div className="flex flex-col items-center space-y-2 px-2">
              <p className="font-body text-lg sm:text-xl font-medium text-[#3E383A]">
                السيد راني وادي
              </p>
              <p className="font-body text-base sm:text-lg text-[#3E383A]/85">
                كريمته المترجمة
              </p>
              <p className="font-calligraphy gold-calligraphy text-2xl sm:text-3xl font-bold pt-1 leading-snug">
                شهد راني وادي
              </p>
            </div>
          </div>
        </Reveal>

        {/* Centered Invitation Line */}
        <Reveal delayMs={520}>
          <div className="space-y-1.5 pt-2">
            <p className="font-amiri text-2xl sm:text-[1.7rem] text-[#3E383A] font-normal">
              ويتشرفان بدعوتكم والعائلة الكريمة
            </p>
            <p className="font-amiri text-2xl sm:text-[1.7rem] text-[#9E7B3B] font-bold">
              لحضور حفل زفاف
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
