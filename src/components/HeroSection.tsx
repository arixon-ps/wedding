import React from 'react';
import {
  ArabesqueCartoucheBackdrop,
  BaroqueCornerScroll,
  WhiteRoseSprig,
} from './BaroqueOrnaments';
import { DrawOnView, useScrollParallax } from './Reveal';
import { IntertwinedRingsDrawIcon } from './ThinLineIcons';

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
      className="relative min-h-[100svh] w-full flex items-center justify-center px-4 py-14 md:py-20 overflow-hidden"
    >
      {/* Subtle radial sheen behind central plaque */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(239,236,233,0.36) 0%, rgba(197,189,193,0) 62%)',
        }}
      />

      {/* Central Arabesque Cartouche Container */}
      <div className="relative w-full max-w-[460px] md:max-w-[520px] flex items-center justify-center my-6">
        {/* Corner White Roses peeking delicately from behind 3D stucco reliefs */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute -top-6 -right-12 md:-top-10 md:-right-20 w-28 md:w-36 z-10 pointer-events-none"
          style={{
            transform: `translate3d(${parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0) rotate(-14deg)`,
          }}
        >
          <WhiteRoseSprig className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="hidden sm:block absolute -top-6 -left-12 md:-top-10 md:-left-20 w-28 md:w-36 z-10 pointer-events-none"
          style={{
            transform: `translate3d(${-parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0) rotate(14deg)`,
          }}
        >
          <WhiteRoseSprig flipX className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="hidden sm:block absolute -bottom-6 -right-12 md:-bottom-10 md:-right-20 w-28 md:w-36 z-10 pointer-events-none"
          style={{
            transform: `translate3d(${parallax.x * 0.6}px, ${-parallax.y * 0.6}px, 0) rotate(14deg)`,
          }}
        >
          <WhiteRoseSprig flipY className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="hidden sm:block absolute -bottom-6 -left-12 md:-bottom-10 md:-left-20 w-28 md:w-36 z-10 pointer-events-none"
          style={{
            transform: `translate3d(${-parallax.x * 0.6}px, ${-parallax.y * 0.6}px, 0) rotate(-14deg)`,
          }}
        >
          <WhiteRoseSprig flipX flipY className="w-full h-auto" />
        </div>

        {/* Corner 3D Sculpted White Baroque Stucco Reliefs */}
        <div
          aria-hidden="true"
          className="absolute -top-9 -right-3 sm:-top-12 sm:-right-8 md:-top-16 md:-right-14 w-32 sm:w-44 md:w-52 z-20 animate-breathe pointer-events-none"
        >
          <BaroqueCornerScroll flipX className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-9 -left-3 sm:-top-12 sm:-left-8 md:-top-16 md:-left-14 w-32 sm:w-44 md:w-52 z-20 animate-breathe-reverse pointer-events-none"
        >
          <BaroqueCornerScroll className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-3 sm:-bottom-10 sm:-right-8 md:-bottom-14 md:-right-14 w-32 sm:w-44 md:w-52 z-20 animate-breathe-reverse pointer-events-none"
        >
          <BaroqueCornerScroll flipX flipY className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-3 sm:-bottom-10 sm:-left-8 md:-bottom-14 md:-left-14 w-32 sm:w-44 md:w-52 z-20 animate-breathe pointer-events-none"
        >
          <BaroqueCornerScroll flipY className="w-full h-auto" />
        </div>

        {/* Arabesque Pointed-Arch Plaque */}
        <div className="relative w-full min-h-[500px] sm:min-h-[560px] md:min-h-[600px] flex flex-col items-center justify-between px-8 sm:px-14 pt-16 sm:pt-20 pb-12 sm:pb-14 text-center z-10">
          <ArabesqueCartoucheBackdrop
            variant="hero"
            className="absolute inset-0 w-full h-full drop-shadow-[0_24px_42px_rgba(50,40,45,0.26)]"
          />

          {/* Top Self-Drawing Intertwined Rings + Subtitle */}
          <div className="relative z-10 flex flex-col items-center">
            <DrawOnView>
              <IntertwinedRingsDrawIcon className="w-24 sm:w-28 h-auto mb-2" />
            </DrawOnView>
            <p className="font-calligraphy text-2xl sm:text-3xl text-[#9E7B3B] tracking-wide">
              أفراح آل عاشور
            </p>
            <div className="mx-auto mt-3 w-24 h-px bg-gradient-to-r from-transparent via-[#9E7B3B]/60 to-transparent" />
          </div>

          {/* Couple Names Centerpiece */}
          <div className="relative z-10 my-auto py-4">
            <h1 className="font-calligraphy gold-calligraphy text-5xl sm:text-6xl md:text-[4.25rem] leading-[1.35] font-bold px-2">
              إبراهيم و شهد
            </h1>
          </div>

          {/* Bottom Typographic Scroll Prompt (Pure Link, No Button) */}
          <div className="relative z-10 flex flex-col items-center gap-2 pb-1">
            <a
              href="#families-section"
              onClick={handleScrollDown}
              aria-label="مرر للأسفل لتفاصيل الدعوة"
              className="group inline-flex flex-col items-center gap-2 text-[#3E383A]/85 hover:text-[#9E7B3B] transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#9E7B3B]"
            >
              <span className="font-body text-sm sm:text-base font-medium">
                مرر للأسفل لتفاصيل الدعوة
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="w-6 h-6 text-[#9E7B3B] animate-chevron-pulse"
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
