import React from 'react';

interface GoldenSoundwaveProps {
  isPlaying: boolean;
  onToggle: () => void;
}

/**
 * Minimalist 24px golden soundwave indicator (no HTML <button> element).
 * Ripples gently when audio is playing and flattens into a thin golden line when muted.
 */
export const GoldenSoundwave: React.FC<GoldenSoundwaveProps> = ({
  isPlaying,
  onToggle,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <span
      role="switch"
      tabIndex={0}
      aria-checked={isPlaying}
      aria-label={isPlaying ? 'كتم الموسيقى الخلفية' : 'تشغيل الموسيقى الخلفية'}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      data-testid="golden-soundwave"
      className="fixed bottom-[18px] left-[18px] z-40 w-[24px] h-[20px] flex items-center justify-between cursor-pointer select-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#9E7B3B]"
    >
      {isPlaying ? (
        <>
          <span
            className="w-[2px] h-3 rounded-full bg-[#9E7B3B] soundwave-bar"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="w-[2px] h-4 rounded-full bg-[#C5A059] soundwave-bar"
            style={{ animationDelay: '180ms' }}
          />
          <span
            className="w-[2px] h-2.5 rounded-full bg-[#9E7B3B] soundwave-bar"
            style={{ animationDelay: '340ms' }}
          />
          <span
            className="w-[2px] h-4 rounded-full bg-[#C5A059] soundwave-bar"
            style={{ animationDelay: '120ms' }}
          />
          <span
            className="w-[2px] h-3 rounded-full bg-[#9E7B3B] soundwave-bar"
            style={{ animationDelay: '260ms' }}
          />
        </>
      ) : (
        <span className="w-[24px] h-[1.5px] bg-[#9E7B3B]/80 rounded-full transition-all duration-300" />
      )}
    </span>
  );
};
