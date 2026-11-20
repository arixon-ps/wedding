import React, { useEffect, useRef } from 'react';
import {
  createAmbientParticle,
  createBurstParticles,
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

    // 1. Glowing antique gold dust sprite
    const dustSprite = document.createElement('canvas');
    dustSprite.width = 32;
    dustSprite.height = 32;
    const dCtx = dustSprite.getContext('2d');
    if (dCtx) {
      const grad = dCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 245, 212, 0.96)');
      grad.addColorStop(0.45, 'rgba(222, 186, 106, 0.7)');
      grad.addColorStop(1, 'rgba(158, 123, 59, 0)');
      dCtx.fillStyle = grad;
      dCtx.fillRect(0, 0, 32, 32);
    }

    // 2. Soft white garden rose petal sprite
    const petalSprite = document.createElement('canvas');
    petalSprite.width = 40;
    petalSprite.height = 40;
    const pCtx = petalSprite.getContext('2d');
    if (pCtx) {
      pCtx.translate(20, 20);
      const grad = pCtx.createLinearGradient(-14, -14, 14, 14);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.96)');
      grad.addColorStop(0.6, 'rgba(248, 244, 240, 0.88)');
      grad.addColorStop(1, 'rgba(225, 214, 210, 0.72)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.moveTo(0, -11);
      pCtx.bezierCurveTo(13, -6.5, 12, 9.5, 0, 12);
      pCtx.bezierCurveTo(-11.5, 7.5, -9.5, -8, 0, -11);
      pCtx.closePath();
      pCtx.fill();
    }

    // 3. Flowing translucent ivory silk ribbon wisp sprite
    const silkSprite = document.createElement('canvas');
    silkSprite.width = 64;
    silkSprite.height = 32;
    const sCtx = silkSprite.getContext('2d');
    if (sCtx) {
      sCtx.translate(32, 16);
      const grad = sCtx.createLinearGradient(-26, -6, 26, 6);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      grad.addColorStop(0.25, 'rgba(255, 252, 248, 0.72)');
      grad.addColorStop(0.65, 'rgba(240, 234, 232, 0.65)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      sCtx.strokeStyle = grad;
      sCtx.lineWidth = 4.5;
      sCtx.lineCap = 'round';
      sCtx.beginPath();
      sCtx.moveTo(-26, 4);
      sCtx.bezierCurveTo(-10, -10, 10, 10, 26, -4);
      sCtx.stroke();
    }

    // 4. Four-point golden starlight sparkle sprite
    const sparkleSprite = document.createElement('canvas');
    sparkleSprite.width = 36;
    sparkleSprite.height = 36;
    const spCtx = sparkleSprite.getContext('2d');
    if (spCtx) {
      spCtx.translate(18, 18);
      const glow = spCtx.createRadialGradient(0, 0, 0, 0, 0, 15);
      glow.addColorStop(0, 'rgba(255, 248, 224, 0.95)');
      glow.addColorStop(0.35, 'rgba(218, 184, 104, 0.55)');
      glow.addColorStop(1, 'rgba(158, 123, 59, 0)');
      spCtx.fillStyle = glow;
      spCtx.fillRect(-18, -18, 36, 36);

      spCtx.fillStyle = 'rgba(255, 246, 214, 0.96)';
      spCtx.beginPath();
      spCtx.moveTo(0, -12);
      spCtx.quadraticCurveTo(1.5, -1.5, 12, 0);
      spCtx.quadraticCurveTo(1.5, 1.5, 0, 12);
      spCtx.quadraticCurveTo(-1.5, 1.5, -12, 0);
      spCtx.quadraticCurveTo(-1.5, -1.5, 0, -12);
      spCtx.closePath();
      spCtx.fill();
    }

    // 5. Delicate brushed gold wedding ring silhouette sprite
    const ringSprite = document.createElement('canvas');
    ringSprite.width = 40;
    ringSprite.height = 40;
    const rCtx = ringSprite.getContext('2d');
    if (rCtx) {
      rCtx.translate(20, 20);
      const ringGrad = rCtx.createLinearGradient(-12, -12, 12, 12);
      ringGrad.addColorStop(0, '#FFF1C5');
      ringGrad.addColorStop(0.45, '#D2AE63');
      ringGrad.addColorStop(1, '#8C6A2A');
      rCtx.strokeStyle = ringGrad;
      rCtx.lineWidth = 2.4;
      rCtx.beginPath();
      rCtx.arc(0, 2, 9.5, 0, Math.PI * 2);
      rCtx.stroke();

      // Tiny diamond crown glint on ring
      rCtx.fillStyle = '#FFF7DC';
      rCtx.beginPath();
      rCtx.moveTo(0, -13);
      rCtx.lineTo(3.4, -9.2);
      rCtx.lineTo(0, -6.2);
      rCtx.lineTo(-3.4, -9.2);
      rCtx.closePath();
      rCtx.fill();
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

    const baseCount = width < 640 ? 36 : 56;
    let particles: AmbientParticle[] = Array.from({ length: baseCount }, (_, idx) =>
      createAmbientParticle(idx, width, height),
    );
    let burstIdCounter = 1000;

    const onPointerDown = (e: PointerEvent) => {
      // Keep particle budget tightly bounded
      if (particles.length > baseCount + 28) return;
      const bursts = createBurstParticles(burstIdCounter, e.clientX, e.clientY, 7);
      burstIdCounter += 7;
      particles.push(...bursts);
    };
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    let tick = 0;
    let rafId = 0;

    const render = () => {
      tick += 1;
      scrollVelocity *= 0.88;
      ctx.clearRect(0, 0, width, height);

      particles = particles
        .map((p) => stepAmbientParticle(p, width, height, tick, scrollVelocity))
        .filter((p) => p.maxLife === undefined || (p.life ?? 0) < p.maxLife);

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
        } else if (p.kind === 'silk') {
          const drawW = p.size * 2.2;
          const drawH = p.size * 1.1;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation + Math.sin(tick * 0.02 + p.phase) * 0.25);
          ctx.globalAlpha = p.opacity;
          ctx.drawImage(silkSprite, -drawW / 2, -drawH / 2, drawW, drawH);
          ctx.restore();
        } else if (p.kind === 'ring') {
          const spinScaleX = 0.35 + Math.abs(Math.cos(p.flipPhase)) * 0.65;
          const drawSize = p.size * 2.4;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation * 0.5);
          ctx.scale(spinScaleX, 1);
          ctx.globalAlpha = p.opacity;
          ctx.drawImage(ringSprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
          ctx.restore();
        } else if (p.kind === 'sparkle') {
          const glint = 0.55 + Math.sin(tick * 0.06 + p.phase) * 0.45;
          const drawSize = p.size * 2.9 * (0.85 + glint * 0.25);
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = p.opacity * glint;
          ctx.drawImage(sparkleSprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
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
      window.removeEventListener('pointerdown', onPointerDown);
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
