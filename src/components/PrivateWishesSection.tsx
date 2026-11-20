import React, { useRef, useState } from 'react';
import {
  dispatchWishPrivately,
  savePrivateWish,
  validateWishInput,
  type WishValidationErrors,
} from '../utils/wishes';
import {
  ArabesqueCartoucheBackdrop,
  BaroqueCornerScroll,
  GoldArabesqueMedallionDivider,
  LuxuryWhiteRoseCluster,
} from './BaroqueOrnaments';
import { DrawOnView, Reveal, useScrollParallax } from './Reveal';
import { QuillAndSealDrawIcon } from './ThinLineIcons';

interface PrivateWishesSectionProps {
  onWishSubmitted?: () => void;
}

export const PrivateWishesSection: React.FC<PrivateWishesSectionProps> = ({
  onWishSubmitted,
}) => {
  const parallax = useScrollParallax(0.025, 8);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<WishValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: undefined }));
    }
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 240)}px`;
    }
  };

  const handleSubmitWish = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (submitted) return;

    const validationErrors = validateWishInput(name, message);
    if (validationErrors.name || validationErrors.message) {
      setErrors(validationErrors);
      return;
    }

    const record = savePrivateWish(name, message);
    void dispatchWishPrivately(record);
    setErrors({});
    setName('');
    setMessage('');
    setSubmitted(true);
    onWishSubmitted?.();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSubmitWish();
    }
  };

  return (
    <section
      id="wishes-section"
      aria-label="أرسل تهنئة خاصة للعروسين"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      <Reveal className="relative max-w-[540px] mx-auto">
        {/* Top-Left Corner Lush White Rose + 3D Baroque Stucco Relief */}
        <div
          aria-hidden="true"
          className="absolute -top-8 -left-6 sm:-top-10 sm:-left-18 w-32 sm:w-44 z-10 pointer-events-none animate-floral-sway"
          style={{
            transform: `translate3d(${-parallax.x * 0.5}px, ${parallax.y * 0.5}px, 0) rotate(12deg)`,
          }}
        >
          <LuxuryWhiteRoseCluster flipX className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-9 -left-3 sm:-top-12 sm:-left-9 w-32 sm:w-44 z-20 animate-breathe-reverse pointer-events-none"
        >
          <BaroqueCornerScroll className="w-full h-auto" />
        </div>

        {/* Bottom-Right Corner Lush White Rose + 3D Baroque Stucco Relief */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-18 w-32 sm:w-44 z-10 pointer-events-none animate-floral-sway"
          style={{
            transform: `translate3d(${parallax.x * 0.5}px, ${-parallax.y * 0.5}px, 0) rotate(12deg)`,
          }}
        >
          <LuxuryWhiteRoseCluster flipY className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-9 -right-3 sm:-bottom-12 sm:-right-9 w-32 sm:w-44 z-20 animate-breathe pointer-events-none"
        >
          <BaroqueCornerScroll flipX flipY className="w-full h-auto" />
        </div>

        {/* Ornate Arabesque Plaque (#EAE6E3) */}
        <div className="relative z-10 px-7 sm:px-14 pt-16 sm:pt-20 pb-14 sm:pb-16 text-center">
          <ArabesqueCartoucheBackdrop
            variant="rsvp"
            className="absolute inset-0 w-full h-full drop-shadow-[0_22px_38px_rgba(50,40,45,0.24)]"
          />

          <div className="relative z-10">
            <Reveal delayMs={100}>
              <DrawOnView className="flex justify-center mb-2">
                <QuillAndSealDrawIcon className="w-14 h-14" />
              </DrawOnView>
              <h2 className="font-calligraphy gold-calligraphy text-3xl sm:text-4xl font-bold leading-snug">
                أرسل تهنئة خاصة للعروسين
              </h2>
              <p className="font-body text-sm sm:text-base text-[#3E383A]/85 mt-3 max-w-sm mx-auto leading-relaxed">
                كلماتكم ومباركتكم تصل مباشرة وبشكل خاص إلى إبراهيم وشهد
              </p>

              <GoldArabesqueMedallionDivider className="mx-auto mt-4 mb-7 w-48 sm:w-56 h-6" />
            </Reveal>

            {submitted ? (
              <div
                data-testid="wish-confirmation"
                role="status"
                className="py-10 px-2 space-y-4 transition-opacity duration-700"
              >
                <span
                  aria-hidden="true"
                  className="inline-block text-2xl text-[#9E7B3B]"
                >
                  ✦
                </span>
                <p className="font-amiri text-xl sm:text-2xl text-[#3E383A] leading-relaxed">
                  وصلت تهنئتكم ومباركتكم بكل حب إلى العروسين، شكراً لمشاركتنا فرحتنا
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmitWish}
                noValidate
                className="text-right space-y-7 pt-1"
              >
                {/* Name Input (Minimalist Bottom Border Only) */}
                <Reveal delayMs={180}>
                  <div>
                    <label
                      htmlFor="wish-guest-name"
                      className="block font-body text-sm font-medium text-[#3E383A] mb-1.5"
                    >
                      الاسم الكريم
                    </label>
                    <input
                      id="wish-guest-name"
                      name="guestName"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      placeholder="اكتب اسمك هنا..."
                      aria-invalid={Boolean(errors.name)}
                      className="w-full bg-transparent border-0 border-b border-[#3E383A]/35 focus:border-[#9E7B3B] focus:outline-none py-2.5 text-base font-body text-[#3E383A] placeholder:text-[#3E383A]/45 transition-colors duration-200"
                    />
                    {errors.name && (
                      <p
                        data-testid="wish-name-error"
                        className="mt-1.5 text-xs font-body text-[#8B3A3A]"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                </Reveal>

                {/* Auto-expanding Textarea (Minimalist Bottom Border Only) */}
                <Reveal delayMs={260}>
                  <div>
                    <label
                      htmlFor="wish-guest-message"
                      className="block font-body text-sm font-medium text-[#3E383A] mb-1.5"
                    >
                      رسالة التهنئة والمباركة
                    </label>
                    <textarea
                      ref={textareaRef}
                      id="wish-guest-message"
                      name="guestMessage"
                      rows={3}
                      value={message}
                      onChange={handleTextareaChange}
                      placeholder="اكتب دعوة صادقة أو تهنئة من القلب..."
                      aria-invalid={Boolean(errors.message)}
                      className="w-full resize-none bg-transparent border-0 border-b border-[#3E383A]/35 focus:border-[#9E7B3B] focus:outline-none py-2.5 text-base font-body text-[#3E383A] placeholder:text-[#3E383A]/45 transition-colors duration-200 leading-relaxed"
                    />
                    {errors.message && (
                      <p
                        data-testid="wish-message-error"
                        className="mt-1.5 text-xs font-body text-[#8B3A3A]"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                </Reveal>

                {/* Button-Free Calligraphic Gold Link Trigger */}
                <Reveal delayMs={340}>
                  <div className="pt-4 text-center">
                    <a
                      href="#send-wish"
                      data-testid="submit-wish-trigger"
                      onClick={handleSubmitWish}
                      onKeyDown={handleTriggerKeyDown}
                      className="group relative inline-flex items-center justify-center py-2 px-3 font-calligraphy text-2xl sm:text-[1.7rem] text-[#9E7B3B] hover:text-[#7D5E26] transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#9E7B3B]"
                    >
                      <span>إرسال التهنئة للعروسين ✦</span>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 right-1/2 translate-x-1/2 h-[1.5px] w-16 group-hover:w-full bg-gradient-to-r from-transparent via-[#9E7B3B] to-transparent transition-all duration-300"
                      />
                    </a>
                  </div>
                </Reveal>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
