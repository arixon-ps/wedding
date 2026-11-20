import React, { useState } from 'react';
import ringsStuccoImg from '../assets/images/wedding_rings_stucco_1795173596687.jpg';
import whiteRosesSilkImg from '../assets/images/white_roses_silk_1795173597465.jpg';
import palaceChandeliersImg from '../assets/images/palace_chandeliers_hall_1795173597534.jpg';
import {
  BaroqueCornerScroll,
  BaroqueTopCrownMedallion,
  GoldArabesqueMedallionDivider,
  LuxuryWhiteRoseCluster,
} from './BaroqueOrnaments';
import { DrawOnView, Reveal, useScrollParallax } from './Reveal';
import {
  BridalBouquetDrawIcon,
  IntertwinedRingsDrawIcon,
  PalaceArchDrawIcon,
} from './ThinLineIcons';

interface EditorialFrame {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  aspectClass: string;
  icon: React.ReactNode;
  delayMs: number;
  parallaxFactor: number;
}

export const EditorialVisualsSection: React.FC = () => {
  const parallax = useScrollParallax(0.035, 10);
  const [failedFrames, setFailedFrames] = useState<Record<string, boolean>>({});

  const frames: EditorialFrame[] = [
    {
      id: 'rings',
      src: ringsStuccoImg,
      alt: 'خاتما زفاف ذهبيان متشابكان على زخارف الجبس الأبيض والحرير مع بتلة ورد بيضاء',
      title: 'ميثاق المحبّة',
      caption: 'عهدٌ يتجدّدُ برباطِ المودّة والوفاء',
      aspectClass: 'aspect-[3/4]',
      icon: <IntertwinedRingsDrawIcon className="w-16 h-10" />,
      delayMs: 80,
      parallaxFactor: -0.45,
    },
    {
      id: 'roses',
      src: whiteRosesSilkImg,
      alt: 'تنسيق أزهار الجوري الأبيض والياسمين على الحرير الدخاني والزخارف الباروكية الذهبية',
      title: 'عبق الياسمين',
      caption: 'تباشيرُ فرحٍ تزدانُ بالوردِ الأبيض والضياء',
      aspectClass: 'aspect-[4/3] lg:aspect-[3/4]',
      icon: <BridalBouquetDrawIcon className="w-12 h-12" />,
      delayMs: 180,
      parallaxFactor: 0.35,
    },
    {
      id: 'palace',
      src: palaceChandeliersImg,
      alt: 'قاعة احتفال فاخرة بأقواس الجبس الأبيض والثريات الكريستالية المضيئة وأقواس الورود',
      title: 'رحاب الأنس',
      caption: 'ليلةٌ عامرةٌ بالبهجةِ والأنوارِ الدافئة',
      aspectClass: 'aspect-[3/4]',
      icon: <PalaceArchDrawIcon className="w-11 h-11" />,
      delayMs: 280,
      parallaxFactor: -0.45,
    },
  ];

  const markFailed = (id: string) => {
    setFailedFrames((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="gallery-section"
      aria-label="لمحات من أجواء الفرح"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Soft Warm Golden Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 54%, rgba(255,244,218,0.28) 0%, rgba(197,189,193,0) 68%)',
        }}
      />

      {/* Lush White Rose Bouquets on Outer Edges */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-14 -right-10 lg:-right-6 w-44 lg:w-52 opacity-90 pointer-events-none animate-floral-sway"
      >
        <LuxuryWhiteRoseCluster className="w-full h-auto" />
      </div>
      <div
        aria-hidden="true"
        className="hidden md:block absolute bottom-14 -left-10 lg:-left-6 w-44 lg:w-52 opacity-90 pointer-events-none animate-floral-sway"
      >
        <LuxuryWhiteRoseCluster flipX flipY className="w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Crest & Calligraphic Title */}
        <Reveal className="flex flex-col items-center text-center mb-12 md:mb-16">
          <BaroqueTopCrownMedallion className="w-40 sm:w-48 h-auto mb-3" />
          <h2 className="font-calligraphy gold-calligraphy text-4xl sm:text-5xl font-bold leading-tight">
            لمحات من ليلة العمر
          </h2>
          <p className="font-amiri text-lg sm:text-xl text-[#3E383A]/85 mt-2 max-w-md">
            تفاصيلٌ صيغت على مهلٍ لتليقَ ببهجةِ لقائكم
          </p>
          <GoldArabesqueMedallionDivider className="w-52 sm:w-64 h-6 mt-3" />
        </Reveal>

        {/* Three 3D Gold-Framed Arched Editorial Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7 lg:gap-10 items-center">
          {frames.map((frame, index) => {
            const isCenter = index === 1;
            const failed = Boolean(failedFrames[frame.id]);

            return (
              <Reveal
                key={frame.id}
                delayMs={frame.delayMs}
                variant="scale"
                className={isCenter ? 'md:-translate-y-4' : ''}
              >
                <figure
                  className="group relative flex flex-col items-center text-center"
                  style={{
                    transform: `translate3d(${parallax.x * frame.parallaxFactor * 0.4}px, ${
                      parallax.y * frame.parallaxFactor
                    }px, 0)`,
                  }}
                >
                  {/* Sculpted 3D Metallic Gold Beveled Arched Frame */}
                  <div className="relative w-full max-w-[310px]">
                    {/* Sculpted Baroque Corner Scrolls on Outer Frames */}
                    {index === 0 && (
                      <div
                        aria-hidden="true"
                        className="hidden sm:block absolute -top-6 -right-6 w-24 z-20 animate-breathe pointer-events-none"
                      >
                        <BaroqueCornerScroll flipX className="w-full h-auto" />
                      </div>
                    )}
                    {index === 2 && (
                      <div
                        aria-hidden="true"
                        className="hidden sm:block absolute -bottom-6 -left-6 w-24 z-20 animate-breathe-reverse pointer-events-none"
                      >
                        <BaroqueCornerScroll flipY className="w-full h-auto" />
                      </div>
                    )}

                    {/* Outer 3D Gold Metallic Molding Rim */}
                    <div
                      className="relative w-full p-[4px] rounded-t-[999px] rounded-b-2xl shadow-[0_24px_44px_rgba(50,40,45,0.28),0_0_24px_rgba(223,190,116,0.22)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5"
                      style={{
                        background:
                          'linear-gradient(135deg, #FFF3CC 0%, #DFBE74 28%, #9E7B3B 55%, #E8C97E 80%, #775820 100%)',
                      }}
                    >
                      {/* Carved Ivory Matte Cushion */}
                      <div className="relative p-2 rounded-t-[999px] rounded-b-[14px] bg-[#EAE6E3] shadow-[inset_0_2px_4px_rgba(255,255,255,0.85),inset_0_-2px_6px_rgba(62,56,58,0.14)]">
                        {/* Inner Gold Hairline Frame */}
                        <div className="relative overflow-hidden rounded-t-[999px] rounded-b-xl border-[1.5px] border-[#9E7B3B]/65 bg-[#EFECE9]">
                          <div className={`relative w-full ${frame.aspectClass} overflow-hidden`}>
                            {failed ? (
                              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_40%,#F8F6F4_0%,#EAE6E3_65%,#DDD5D0_100%)]">
                                {frame.icon}
                                <span className="mt-3 font-calligraphy text-2xl text-[#9E7B3B]">
                                  {frame.title}
                                </span>
                              </div>
                            ) : (
                              <img
                                src={frame.src}
                                alt={frame.alt}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={() => markFailed(frame.id)}
                                className="w-full h-full object-cover animate-ken-burns transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                              />
                            )}
                            {/* Soft luminous golden vignette around inner edge */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 pointer-events-none shadow-[inset_0_0_28px_rgba(62,56,58,0.18)]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Self-Drawing Icon + Editorial Caption */}
                  <figcaption className="mt-5 flex flex-col items-center space-y-1.5 px-2">
                    <DrawOnView className="mb-0.5">{frame.icon}</DrawOnView>
                    <h3 className="font-calligraphy text-2xl sm:text-[1.65rem] text-[#9E7B3B] leading-snug">
                      {frame.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#3E383A]/85 leading-relaxed">
                      {frame.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
