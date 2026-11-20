export type AmbientParticleKind = 'dust' | 'petal' | 'silk' | 'ring' | 'sparkle';

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
  life?: number;
  maxLife?: number;
}

export function pickAmbientParticleKind(roll: number): AmbientParticleKind {
  if (roll < 0.44) return 'dust';
  if (roll < 0.72) return 'petal';
  if (roll < 0.84) return 'silk';
  if (roll < 0.93) return 'sparkle';
  return 'ring';
}

export function createAmbientParticle(
  id: number,
  width: number,
  height: number,
  random = Math.random,
  spawnAtTop = false,
): AmbientParticle {
  const kind = pickAmbientParticleKind(random());

  let size = 2.4;
  let speedY = 0.35;
  let swayAmp = 0.35;
  let opacity = 0.55;
  let rotationSpeed = (random() - 0.5) * 0.018;

  if (kind === 'dust') {
    size = 1.8 + random() * 3.2;
    speedY = 0.22 + random() * 0.42;
    swayAmp = 0.25 + random() * 0.4;
    opacity = 0.38 + random() * 0.46;
  } else if (kind === 'petal') {
    size = 8.5 + random() * 9.5;
    speedY = 0.52 + random() * 0.62;
    swayAmp = 0.65 + random() * 0.9;
    opacity = 0.38 + random() * 0.36;
  } else if (kind === 'silk') {
    size = 14 + random() * 12;
    speedY = 0.42 + random() * 0.48;
    swayAmp = 0.9 + random() * 1.1;
    opacity = 0.22 + random() * 0.24;
    rotationSpeed = (random() - 0.5) * 0.012;
  } else if (kind === 'sparkle') {
    size = 4.5 + random() * 4.5;
    speedY = 0.18 + random() * 0.34;
    swayAmp = 0.2 + random() * 0.35;
    opacity = 0.45 + random() * 0.42;
    rotationSpeed = (random() - 0.5) * 0.025;
  } else {
    // 'ring'
    size = 7.5 + random() * 4.5;
    speedY = 0.46 + random() * 0.52;
    swayAmp = 0.45 + random() * 0.65;
    opacity = 0.42 + random() * 0.36;
    rotationSpeed = (random() - 0.5) * 0.02;
  }

  return {
    id,
    kind,
    x: random() * Math.max(width, 320),
    y: spawnAtTop ? -size * 2.8 - random() * 48 : random() * Math.max(height, 600),
    size,
    speedY,
    speedX: (random() - 0.5) * 0.3,
    swayAmp,
    swayFreq: 0.008 + random() * 0.012,
    phase: random() * Math.PI * 2,
    rotation: random() * Math.PI * 2,
    rotationSpeed,
    opacity,
    flipPhase: random() * Math.PI * 2,
    flipSpeed: 0.016 + random() * 0.024,
  };
}

export function createBurstParticles(
  startId: number,
  originX: number,
  originY: number,
  count = 8,
  random = Math.random,
): AmbientParticle[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + (random() - 0.5) * 0.5;
    const speed = 0.8 + random() * 1.8;
    const kind: AmbientParticleKind =
      i % 4 === 0 ? 'ring' : i % 3 === 0 ? 'petal' : i % 2 === 0 ? 'sparkle' : 'dust';
    return {
      id: startId + i,
      kind,
      x: originX,
      y: originY,
      size: kind === 'petal' ? 9 + random() * 4 : kind === 'ring' ? 8 : 4 + random() * 4,
      speedY: Math.sin(angle) * speed + 0.45,
      speedX: Math.cos(angle) * speed,
      swayAmp: 0.35,
      swayFreq: 0.02,
      phase: random() * Math.PI * 2,
      rotation: random() * Math.PI * 2,
      rotationSpeed: (random() - 0.5) * 0.05,
      opacity: 0.85,
      flipPhase: random() * Math.PI * 2,
      flipSpeed: 0.04,
      life: 0,
      maxLife: 56 + Math.floor(random() * 24),
    };
  });
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

  if (typeof p.life === 'number' && typeof p.maxLife === 'number') {
    const nextLife = p.life + 1;
    const progress = Math.min(1, nextLife / p.maxLife);
    return {
      ...p,
      x: nextX,
      y: nextY,
      speedX: p.speedX * 0.97,
      rotation: p.rotation + p.rotationSpeed,
      flipPhase: p.flipPhase + p.flipSpeed,
      opacity: Math.max(0, 0.85 * (1 - progress)),
      life: nextLife,
    };
  }

  if (nextX < -28) nextX = width + 22;
  if (nextX > width + 28) nextX = -22;

  if (nextY > height + p.size * 3.2) {
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
