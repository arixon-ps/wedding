import React, { useEffect, useRef } from 'react';
import {
  createAmbientParticle,
  stepAmbientParticle,
  type AmbientParticle,
} from '../utils/particles';

export const FloatingDustAndPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    // Pre-render gold dust glow sprite once for fast 60fps compositing
    const dustSprite = document.createElement('canvas');
    dustSprite.width = 32;
    dustSprite.height = 32;
    const dCtx = dustSprite.getContext('2d');
    if (dCtx) {
      const grad = dCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 244, 210, 0.96)');
      grad.addColorStop(0.5, 'rgba(218, 182, 102, 0.65)');
      grad.addColorStop(1, 'rgba(158, 123, 59, 0)');
      dCtx.fillStyle = grad;
      dCtx.fillRect(0, 0, 32, 32);
    }

    // Pre-render white rose petal sprite once for fast 60fps compositing
    const petalSprite = document.createElement('canvas');
    petalSprite.width = 40;
    petalSprite.height = 40;
    const pCtx = petalSprite.getContext('2d');
    if (pCtx) {
      pCtx.translate(20, 20);
      const grad = pCtx.createLinearGradient(-14, -14, 14, 14);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.96)');
      grad.addColorStop(0.6, 'rgba(248, 244, 240, 0.86)');
      grad.addColorStop(1, 'rgba(225, 214, 210, 0.72)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.moveTo(0, -11);
      pCtx.bezierCurveTo(13, -6.5, 12, 9.5, 0, 12);
      pCtx.bezierCurveTo(-11.5, 7.5, -9.5, -8, 0, -11);
      pCtx.closePath();
      pCtx.fill();
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let lastScrollY = window.scrollY || 0;
    let scrollVelocity = 0;

    const onScroll = () => {
      const currentY = window.scrollY || 0;
      scrollVelocity = currentY - lastScrollY;
      lastScrollY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const count = width < 640 ? 32 : 48;
    let particles: AmbientParticle[] = Array.from({ length: count }, (_, idx) =>
      createAmbientParticle(idx, width, height),
    );

    let tick = 0;
    let rafId = 0;

    const render = () => {
      tick += 1;
      scrollVelocity *= 0.88;
      ctx.clearRect(0, 0, width, height);

      particles = particles.map((p) =>
        stepAmbientParticle(p, width, height, tick, scrollVelocity),
      );

      for (const p of particles) {
        if (p.kind === 'petal') {
          const flipScale = 0.45 + Math.abs(Math.cos(p.flipPhase)) * 0.55;
          const drawSize = p.size * 2.5;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.scale(1, flipScale);
          ctx.globalAlpha = p.opacity;
          ctx.drawImage(petalSprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
          ctx.restore();
        } else {
          const shimmer = 0.62 + Math.sin(tick * 0.045 + p.phase) * 0.38;
          const drawSize = p.size * 2.8;
          ctx.globalAlpha = p.opacity * shimmer;
          ctx.drawImage(dustSprite, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
        }
      }
      ctx.globalAlpha = 1;

      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="floating-dust-petals-canvas"
      aria-hidden="true"
      className="fixed inset-0 z-[2] pointer-events-none"
    />
  );
};
