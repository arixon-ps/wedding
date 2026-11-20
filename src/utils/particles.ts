export type AmbientParticleKind = 'dust' | 'petal';

export interface AmbientParticle {
  id: number;
  kind: AmbientParticleKind;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swayAmp: number;
  swayFreq: number;
  phase: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  flipPhase: number;
  flipSpeed: number;
}

export function createAmbientParticle(
  id: number,
  width: number,
  height: number,
  random = Math.random,
  spawnAtTop = false,
): AmbientParticle {
  // ~65% fine glowing gold dust, ~35% soft white rose petals
  const kind: AmbientParticleKind = random() > 0.35 ? 'dust' : 'petal';
  const size = kind === 'petal' ? 8.5 + random() * 9.5 : 1.6 + random() * 3.1;

  return {
    id,
    kind,
    x: random() * Math.max(width, 320),
    y: spawnAtTop ? -size * 2.5 - random() * 45 : random() * Math.max(height, 600),
    size,
    speedY: kind === 'petal' ? 0.55 + random() * 0.65 : 0.25 + random() * 0.45,
    speedX: (random() - 0.5) * 0.28,
    swayAmp: kind === 'petal' ? 0.6 + random() * 0.9 : 0.25 + random() * 0.4,
    swayFreq: 0.008 + random() * 0.012,
    phase: random() * Math.PI * 2,
    rotation: random() * Math.PI * 2,
    rotationSpeed: (random() - 0.5) * 0.018,
    opacity: kind === 'petal' ? 0.36 + random() * 0.34 : 0.35 + random() * 0.45,
    flipPhase: random() * Math.PI * 2,
    flipSpeed: 0.015 + random() * 0.022,
  };
}

export function stepAmbientParticle(
  p: AmbientParticle,
  width: number,
  height: number,
  timeTick: number,
  scrollVelocity = 0,
  random = Math.random,
): AmbientParticle {
  const clampedScrollBoost = Math.max(-2.2, Math.min(2.2, scrollVelocity * 0.045));
  const nextY = p.y + p.speedY + Math.abs(clampedScrollBoost) * 0.35;
  const sway = Math.sin(timeTick * p.swayFreq + p.phase) * p.swayAmp + clampedScrollBoost * 0.45;
  let nextX = p.x + p.speedX + sway;

  if (nextX < -24) nextX = width + 20;
  if (nextX > width + 24) nextX = -20;

  if (nextY > height + p.size * 3) {
    return createAmbientParticle(p.id, width, height, random, true);
  }

  return {
    ...p,
    x: nextX,
    y: nextY,
    rotation: p.rotation + p.rotationSpeed,
    flipPhase: p.flipPhase + p.flipSpeed,
  };
}
