import React, { useEffect, useState } from 'react';

interface ChapterItem {
  id: string;
  label: string;
}

const CHAPTERS: ChapterItem[] = [
  { id: 'hero-section', label: 'الافتتاحية' },
  { id: 'families-section', label: 'دعوة العائلتين' },
  { id: 'details-section', label: 'التفاصيل والمواعيد' },
  { id: 'gallery-section', label: 'لمحات الفرح' },
  { id: 'countdown-section', label: 'العد التنازلي' },
  { id: 'wishes-section', label: 'التهاني الخاصة' },
];

export const ScrollProgressThread: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>('hero-section');

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const scrollTop = window.scrollY || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      setProgress(Math.max(0, Math.min(1, scrollTop / docHeight)));

      // Determine active chapter closest to upper-middle viewport
      const probeY = window.innerHeight * 0.38;
      let current = CHAPTERS[0].id;
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY) {
          current = ch.id;
        }
      }
      setActiveId(current);
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Top 2px Liquid Gold Scroll Progress Thread */}
      <div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 z-40 h-[2px] pointer-events-none bg-[#9E7B3B]/15"
      >
        <div
          className="h-full w-full origin-right bg-gradient-to-l from-[#9E7B3B] via-[#DFBE74] to-[#9E7B3B] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Desktop-only Minimalist Gold Diamond Chapter Rail (Pure Anchors, Zero Buttons) */}
      <nav
        aria-label="فصول الدعوة"
        className="hidden xl:flex fixed right-6 bottom-6 z-30 flex-col items-end gap-2.5"
      >
        {CHAPTERS.map((ch) => {
          const isActive = activeId === ch.id;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              onClick={(e) => handleJump(e, ch.id)}
              aria-label={ch.label}
              aria-current={isActive ? 'location' : undefined}
              className="group flex items-center gap-2.5 py-0.5 text-xs font-body transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#9E7B3B]"
            >
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 text-[#9E7B3B] font-medium translate-x-0'
                    : 'opacity-0 group-hover:opacity-90 text-[#3E383A]/80 translate-x-1 group-hover:translate-x-0'
                }`}
              >
                {ch.label}
              </span>
              <span
                aria-hidden="true"
                className={`block w-2.5 h-2.5 rotate-45 border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C5A059] border-[#9E7B3B] scale-110 shadow-[0_0_10px_rgba(197,160,89,0.55)]'
                    : 'bg-[#EAE6E3]/70 border-[#9E7B3B]/55 group-hover:border-[#9E7B3B] group-hover:scale-110'
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
};
