import React from 'react';
import silkBackdropImg from '../assets/images/silk_fabric_backdrop_1795174556051.jpg';
import {
  ArabesqueCartoucheBackdrop,
  BaroqueCornerScroll,
  BaroqueTopCrownMedallion,
  GoldArabesqueMedallionDivider,
  LuxuryWhiteRoseCluster,
  RoyalGoldCrownOrnament,
} from './BaroqueOrnaments';
import { DrawOnView, useScrollParallax } from './Reveal';
import {
  CalendarDrawIcon,
  ClockDrawIcon,
  IntertwinedRingsDrawIcon,
  LocationPinDrawIcon,
} from './ThinLineIcons';

export const HeroSection: React.FC = () => {
  const parallax = useScrollParallax(0.03, 10);

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('families-section');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero-section"
      aria-label="الواجهة الرئيسية للدعوة"
      className="relative min-h-[100svh] w-full flex items-center justify-center px-3 sm:px-6 py-14 md:py-18 overflow-hidden"
    >
      {/* Flowing Silk Fabric Backdrop with Soft Golden Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          maskImage: 'radial-gradient(circle at 50% 48%, rgba(0,0,0,0.95) 20%, transparent 86%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 48%, rgba(0,0,0,0.95) 20%, transparent 86%)',
        }}
      >
        <img
          src={silkBackdropImg}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.42] animate-ken-burns"
        />
      </div>

      {/* Warm Soft Champagne-Gold Ambient Halo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 46%, rgba(255,246,222,0.52) 0%, rgba(239,236,233,0.24) 38%, rgba(197,189,193,0) 68%)',
        }}
      />

      {/* Lush White Rose Clusters Framing the Outer Screen Edges (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-10 -right-12 w-52 xl:w-60 opacity-95 pointer-events-none animate-floral-sway"
      >
        <LuxuryWhiteRoseCluster className="w-full h-auto" />
      </div>
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-10 -left-12 w-52 xl:w-60 opacity-95 pointer-events-none animate-floral-sway"
      >
        <LuxuryWhiteRoseCluster flipX className="w-full h-auto" />
      </div>
      <div
        aria-hidden="true"
        className="hidden lg:block absolute bottom-8 -left-12 w-52 xl:w-60 opacity-95 pointer-events-none animate-floral-sway"
      >
        <LuxuryWhiteRoseCluster flipX flipY className="w-full h-auto" />
      </div>

      {/* Central 3D Gold-Framed Arabesque Cartouche Container */}
      <div
        className="relative w-full max-w-[500px] md:max-w-[560px] flex items-center justify-center my-8 animate-hero-bloom"
        style={{
          transform: `translate3d(${parallax.x * 0.14}px, ${parallax.y * 0.12}px, 0)`,
        }}
      >
        {/* Top Sculpted Baroque Crown Medallion */}
        <div
          aria-hidden="true"
          className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-40 sm:w-48 z-30 pointer-events-none"
        >
          <BaroqueTopCrownMedallion className="w-full h-auto" />
        </div>

        {/* Opulent White Rose Bouquets Peeking Around All 4 Plaque Corners */}
        <div
          aria-hidden="true"
          className="absolute -top-8 -right-8 sm:-top-12 sm:-right-20 md:-right-24 w-36 sm:w-44 md:w-52 z-10 pointer-events-none animate-floral-sway"
          style={{
            transform: `translate3d(${parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0) rotate(-10deg)`,
          }}
        >
          <LuxuryWhiteRoseCluster className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-8 -left-8 sm:-top-12 sm:-left-20 md:-left-24 w-36 sm:w-44 md:w-52 z-10 pointer-events-none animate-floral-sway"
          style={{
            transform: `translate3d(${-parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0) rotate(10deg)`,
          }}
        >
          <LuxuryWhiteRoseCluster flipX className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-20 md:-right-24 w-36 sm:w-44 md:w-52 z-10 pointer-events-none animate-floral-sway"
          style={{
            transform: `translate3d(${parallax.x * 0.6}px, ${-parallax.y * 0.6}px, 0) rotate(10deg)`,
          }}
        >
          <LuxuryWhiteRoseCluster flipY className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-20 md:-left-24 w-36 sm:w-44 md:w-52 z-10 pointer-events-none animate-floral-sway"
          style={{
            transform: `translate3d(${-parallax.x * 0.6}px, ${-parallax.y * 0.6}px, 0) rotate(-10deg)`,
          }}
        >
          <LuxuryWhiteRoseCluster flipX flipY className="w-full h-auto" />
        </div>

        {/* Corner 3D Sculpted White Baroque Stucco Reliefs */}
        <div
          aria-hidden="true"
          className="absolute -top-8 -right-3 sm:-top-12 sm:-right-9 md:-top-14 md:-right-12 w-32 sm:w-44 md:w-48 z-20 animate-breathe pointer-events-none"
        >
          <BaroqueCornerScroll flipX className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-8 -left-3 sm:-top-12 sm:-left-9 md:-top-14 md:-left-12 w-32 sm:w-44 md:w-48 z-20 animate-breathe-reverse pointer-events-none"
        >
          <BaroqueCornerScroll className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-3 sm:-bottom-10 sm:-right-9 md:-bottom-12 md:-right-12 w-32 sm:w-44 md:w-48 z-20 animate-breathe-reverse pointer-events-none"
        >
          <BaroqueCornerScroll flipX flipY className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-3 sm:-bottom-10 sm:-left-9 md:-bottom-12 md:-left-12 w-32 sm:w-44 md:w-48 z-20 animate-breathe pointer-events-none"
        >
          <BaroqueCornerScroll flipY className="w-full h-auto" />
        </div>

        {/* Arabesque 3D Gold-Framed Plaque */}
        <div className="relative w-full min-h-[600px] sm:min-h-[660px] flex flex-col items-center justify-between px-7 sm:px-14 pt-14 sm:pt-16 pb-11 sm:pb-12 text-center z-10">
          <ArabesqueCartoucheBackdrop
            variant="hero"
            className="absolute inset-0 w-full h-full drop-shadow-[0_28px_48px_rgba(50,40,45,0.3)]"
          />

          {/* Top Royal Gold Crown + Intertwined Wedding Rings + Family Header */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Soft Gold Aura behind Crown & Rings */}
            <div
              aria-hidden="true"
              className="absolute -top-4 w-44 h-28 rounded-full bg-[radial-gradient(circle,rgba(223,190,116,0.28)_0%,rgba(223,190,116,0)_72%)] pointer-events-none"
            />
            <RoyalGoldCrownOrnament className="w-20 sm:w-24 h-auto -mb-1 relative" />
            <DrawOnView>
              <IntertwinedRingsDrawIcon className="w-22 sm:w-26 h-auto mb-1" />
            </DrawOnView>
            <p className="font-calligraphy text-2xl sm:text-[1.75rem] text-[#9E7B3B] tracking-wide">
              أفراح آل عاشور
            </p>
            <GoldArabesqueMedallionDivider className="w-48 sm:w-56 h-6 mt-1.5" />
          </div>

          {/* Warm Welcome, Couple Names & Romantic Couplet */}
          <div className="relative z-10 my-3 flex flex-col items-center space-y-3">
            <p className="font-amiri text-base sm:text-lg text-[#3E383A]/85 leading-relaxed">
              بكلِّ محبّةٍ وسرورٍ نُرحّبُ بكم في فرحةِ العروسين
            </p>

            <h1 className="font-calligraphy gold-calligraphy text-5xl sm:text-6xl md:text-[4.15rem] leading-[1.3] font-bold px-2">
              إبراهيم و شهد
            </h1>

            <p className="font-amiri text-base sm:text-[1.15rem] text-[#9E7B3B] font-medium max-w-sm leading-relaxed px-2">
              «قَلبانِ اجتَمَعا على المودّةِ والرّحمةِ، لِيَبدآ معاً حكايةَ عُمرٍ أبديّة»
            </p>
          </div>

          {/* Rich Concise Wedding Summary Strip Inside Plaque (Zero Buttons) */}
          <div className="relative z-10 w-full max-w-[380px] my-2 py-3.5 px-4 rounded-xl bg-[#EFECE9]/75 border border-[#9E7B3B]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            <div className="grid grid-cols-3 gap-2 items-center text-center">
              <div className="flex flex-col items-center space-y-1">
                <DrawOnView>
                  <CalendarDrawIcon className="w-5 h-5" />
                </DrawOnView>
                <span className="font-body text-[11px] sm:text-xs text-[#3E383A]/75">
                  الثلاثاء
                </span>
                <span dir="ltr" className="font-body text-xs sm:text-sm font-bold text-[#3E383A] tabular-nums">
                  24/11/2026
                </span>
              </div>

              <div className="flex flex-col items-center space-y-1 border-x border-[#9E7B3B]/25 px-1.5">
                <DrawOnView>
                  <ClockDrawIcon className="w-5 h-5" />
                </DrawOnView>
                <span className="font-body text-[11px] sm:text-xs text-[#3E383A]/75">
                  الموعد
                </span>
                <span className="font-body text-xs sm:text-sm font-bold text-[#3E383A]">
                  4:00 مساءً
                </span>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <DrawOnView>
                  <LocationPinDrawIcon className="w-5 h-5" />
                </DrawOnView>
                <span className="font-body text-[11px] sm:text-xs text-[#3E383A]/75">
                  المكان
                </span>
                <span className="font-body text-xs sm:text-sm font-bold text-[#3E383A]">
                  قصر فينسيا
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Typographic Scroll Prompt (Pure Link, No Button) */}
          <div className="relative z-10 flex flex-col items-center gap-1.5 pt-2">
            <a
              href="#families-section"
              onClick={handleScrollDown}
              aria-label="مرر للأسفل لتفاصيل الدعوة"
              className="group inline-flex flex-col items-center gap-1.5 text-[#3E383A]/85 hover:text-[#9E7B3B] transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#9E7B3B]"
            >
              <span className="font-body text-xs sm:text-sm font-medium">
                مرر للأسفل لتفاصيل الدعوة
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="w-5 h-5 text-[#9E7B3B] animate-chevron-pulse"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
