import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCountdown, padTwo } from './countdown';
import {
  createAmbientParticle,
  createBurstParticles,
  pickAmbientParticleKind,
  stepAmbientParticle,
} from './particles';
import {
  formatWishesForClipboard,
  isOwnerModeFromSearch,
  loadPrivateWishes,
  savePrivateWish,
  validateWishInput,
} from './wishes';

test('calculateCountdown computes days, hours, minutes, seconds accurately', () => {
  const target = new Date(2026, 10, 24, 16, 0, 0, 0).getTime();
  const delta = ((3 * 24 + 5) * 3600 + 12 * 60 + 9) * 1000;
  const result = calculateCountdown(target - delta, target);

  assert.equal(result.days, 3);
  assert.equal(result.hours, 5);
  assert.equal(result.minutes, 12);
  assert.equal(result.seconds, 9);
  assert.equal(result.isComplete, false);
});

test('calculateCountdown clamps to zero when target has passed', () => {
  const target = new Date(2026, 10, 24, 16, 0, 0, 0).getTime();
  const result = calculateCountdown(target + 5000, target);

  assert.deepEqual(result, {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: true,
  });
});

test('padTwo pads single digits with leading zero', () => {
  assert.equal(padTwo(0), '00');
  assert.equal(padTwo(7), '07');
  assert.equal(padTwo(24), '24');
});

test('createAmbientParticle and stepAmbientParticle handle dust, petals, silk, sparkles, rings, and bursts', () => {
  assert.equal(pickAmbientParticleKind(0.1), 'dust');
  assert.equal(pickAmbientParticleKind(0.55), 'petal');
  assert.equal(pickAmbientParticleKind(0.78), 'silk');
  assert.equal(pickAmbientParticleKind(0.88), 'sparkle');
  assert.equal(pickAmbientParticleKind(0.96), 'ring');

  const dust = createAmbientParticle(1, 1000, 800, () => 0.2);
  const petal = createAmbientParticle(2, 1000, 800, () => 0.55);
  const ring = createAmbientParticle(3, 1000, 800, () => 0.96);

  assert.equal(dust.kind, 'dust');
  assert.equal(petal.kind, 'petal');
  assert.equal(ring.kind, 'ring');

  const moved = stepAmbientParticle(petal, 1000, 800, 12, 15);
  assert.ok(moved.y > petal.y);

  const respawned = stepAmbientParticle({ ...petal, y: 900 }, 1000, 800, 13, 0, () => 0.5);
  assert.ok(respawned.y < 0);

  const burst = createBurstParticles(100, 400, 300, 4, () => 0.5);
  assert.equal(burst.length, 4);
  const steppedBurst = stepAmbientParticle(burst[0], 1000, 800, 1);
  assert.equal(steppedBurst.life, 1);
  assert.ok(steppedBurst.opacity < burst[0].opacity);
});

test('validateWishInput validates name and message cleanly', () => {
  const invalid = validateWishInput('أ', 'ه');
  assert.ok(invalid.name);
  assert.ok(invalid.message);

  assert.deepEqual(validateWishInput('خالد عاشور', 'بارك الله لكما وبارك عليكما'), {});
});

test('savePrivateWish persists privately in storage and isOwnerModeFromSearch gates owner viewer', () => {
  const map = new Map<string, string>();
  const mockStorage = {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => {
      map.set(k, v);
    },
  };

  assert.equal(isOwnerModeFromSearch(''), false);
  assert.equal(isOwnerModeFromSearch('?owner=wrong'), false);
  assert.equal(isOwnerModeFromSearch('?owner=ashour2026'), true);

  const saved = savePrivateWish('  أحمد وادي  ', '  ألف مبارك للعروسين  ', mockStorage, new Date('2026-11-20T10:00:00Z'));
  assert.equal(saved.name, 'أحمد وادي');
  assert.equal(saved.message, 'ألف مبارك للعروسين');

  const loaded = loadPrivateWishes(mockStorage);
  assert.equal(loaded.length, 1);
  assert.equal(loaded[0].name, 'أحمد وادي');

  const formatted = formatWishesForClipboard(loaded);
  assert.ok(formatted.includes('أحمد وادي'));
  assert.ok(formatted.includes('ألف مبارك للعروسين'));
});
