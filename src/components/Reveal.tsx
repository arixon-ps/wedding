import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  variant?: 'up' | 'scale';
  className?: string;
}

/**
 * IntersectionObserver scroll-reveal block:
 * opacity: 0; translateY(26px) -> opacity: 1; translateY(0)
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delayMs = 0,
  variant = 'up',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    let revealed = false;
    const revealNow = () => {
      if (revealed) return;
      revealed = true;
      setVisible(true);
      observer.disconnect();
      window.removeEventListener('scroll', checkInView);
    };

    const checkInView = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.96) {
        revealNow();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight * 0.96) {
            revealNow();
            break;
          }
        }
      },
      {
        threshold: 0.02,
        rootMargin: '60px 0px 40px 0px',
      },
    );

    observer.observe(el);
    window.addEventListener('scroll', checkInView, { passive: true });
    checkInView();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-block ${variant === 'scale' ? 'reveal-scale' : ''} ${
        visible ? 'is-visible' : ''
      } ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
};

/**
 * IntersectionObserver wrapper that adds `.is-drawn` to trigger self-drawing gold SVG line art.
 */
export const DrawOnView: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setDrawn(true);
      return;
    }

    let done = false;
    const drawNow = () => {
      if (done) return;
      done = true;
      setDrawn(true);
      observer.disconnect();
      window.removeEventListener('scroll', checkInView);
    };

    const checkInView = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.96) {
        drawNow();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight * 0.96) {
            drawNow();
            break;
          }
        }
      },
      { threshold: 0.05, rootMargin: '40px 0px 40px 0px' },
    );

    observer.observe(el);
    window.addEventListener('scroll', checkInView, { passive: true });
    checkInView();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

  return (
    <div ref={ref} className={`${drawn ? 'is-drawn' : ''} ${className}`}>
      {children}
    </div>
  );
};

/**
 * 3D parallax combining scroll depth + subtle mouse & gyroscope tilt (deviceorientation).
 */
export function useScrollParallax(speed = 0.055, depth = 12) {
  const [offset, setOffset] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let scrollY = window.scrollY || 0;
    let tiltX = 0;
    let tiltY = 0;
    let rafId = 0;

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const yFromScroll = Math.max(-68, Math.min(68, scrollY * speed));
        setOffset({
          x: tiltX * depth,
          y: yFromScroll + tiltY * depth,
          rotate: Math.max(-5, Math.min(5, scrollY * (speed * 0.08) + tiltX * 2.2)),
        });
        rafId = 0;
      });
    };

    const onScroll = () => {
      scrollY = window.scrollY || 0;
      scheduleUpdate();
    };

    const onMouseMove = (e: MouseEvent) => {
      tiltX = (e.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      tiltY = (e.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
      scheduleUpdate();
    };

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (typeof e.gamma === 'number' && typeof e.beta === 'number') {
        tiltX = Math.max(-1, Math.min(1, e.gamma / 30));
        tiltY = Math.max(-1, Math.min(1, (e.beta - 35) / 30));
        scheduleUpdate();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('deviceorientation', onOrientation, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('deviceorientation', onOrientation);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [speed, depth]);

  return offset;
}
