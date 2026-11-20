import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  BaroqueCornerScroll,
  BaroqueCurtainCluster,
  GoldWaxSeal,
  LuxuryWhiteRoseCluster,
} from './BaroqueOrnaments';

interface OpeningCurtainProps {
  onOpenStart?: () => void;
  onRevealed?: () => void;
}

export const OpeningCurtain: React.FC<OpeningCurtainProps> = ({
  onOpenStart,
  onRevealed,
}) => {
  const [skipImmediate] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('autostart') === '1';
  });

  const [parting, setParting] = useState(false);
  const [unmounted, setUnmounted] = useState(skipImmediate);
  const partedRef = useRef(false);
  const mountedRef = useRef(true);
  const finishTimerRef = useRef<number | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (finishTimerRef.current !== null) {
        window.clearTimeout(finishTimerRef.current);
      }
    };
  }, []);

  const beginParting = useCallback(() => {
    if (partedRef.current) return;
    partedRef.current = true;
    setParting(true);
    onOpenStart?.();
    finishTimerRef.current = window.setTimeout(() => {
      if (!mountedRef.current) return;
      setUnmounted(true);
      onRevealed?.();
    }, 1320);
  }, [onOpenStart, onRevealed]);

  useEffect(() => {
    if (skipImmediate) {
      onRevealed?.();
      return;
    }

    const startTimer = window.setTimeout(() => {
      beginParting();
    }, 1400);

    return () => window.clearTimeout(startTimer);
  }, [skipImmediate, beginParting, onRevealed]);

  if (unmounted) return null;

  const handleOpen = () => {
    beginParting();
  };

  return (
    <div
      role="presentation"
      onClick={handleOpen}
      data-testid="opening-curtain"
      className={`fixed inset-0 z-50 overflow-hidden cursor-pointer select-none transition-opacity duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        parting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#C5BDC1' }}
    >
      {/* Subtle silk radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.24) 0%, rgba(197,189,193,0) 68%)',
        }}
      />

      {/* Right Stucco & White Floral Cluster */}
      <div
        className="absolute inset-y-0 right-0 w-[76vw] md:w-[58vw] flex items-center justify-end transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: parting
            ? 'translate3d(48%, 0, 0) scale(1.22)'
            : 'translate3d(2%, 0, 0) scale(1.08)',
        }}
      >
        <LuxuryWhiteRoseCluster className="absolute right-4 top-1/5 w-48 md:w-64 opacity-95" />
        <BaroqueCurtainCluster flipX className="relative w-full h-[96vh] max-w-[620px] object-contain" />
      </div>

      {/* Left Stucco & White Floral Cluster */}
      <div
        className="absolute inset-y-0 left-0 w-[76vw] md:w-[58vw] flex items-center justify-start transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: parting
            ? 'translate3d(-48%, 0, 0) scale(1.22)'
            : 'translate3d(-2%, 0, 0) scale(1.08)',
        }}
      >
        <LuxuryWhiteRoseCluster flipX className="absolute left-4 bottom-1/5 w-48 md:w-64 opacity-95" />
        <BaroqueCurtainCluster className="relative w-full h-[96vh] max-w-[620px] object-contain" />
      </div>

      {/* Overlapping Top & Bottom Close-up Baroque Scrolls */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 md:w-[26rem] transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: parting
            ? 'translate3d(-50%, -48%, 0) scale(1.2)'
            : 'translate3d(-50%, 0, 0) scale(1.05)',
        }}
      >
        <BaroqueCornerScroll rotate={45} className="w-full h-auto" />
      </div>

      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 md:w-[26rem] transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: parting
            ? 'translate3d(-50%, 48%, 0) scale(1.2)'
            : 'translate3d(-50%, 0, 0) scale(1.05)',
        }}
      >
        <BaroqueCornerScroll rotate={225} className="w-full h-auto" />
      </div>

      {/* Centered 3D Embossed Metallic Gold Wax Seal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GoldWaxSeal cracking={parting} />
      </div>
    </div>
  );
};
