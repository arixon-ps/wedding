export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

// Target: November 24, 2026 at 16:00:00 local time
export const WEDDING_TARGET_DATE = new Date(2026, 10, 24, 16, 0, 0, 0);

export function calculateCountdown(
  nowMs: number,
  targetMs: number = WEDDING_TARGET_DATE.getTime(),
): CountdownParts {
  const diff = targetMs - nowMs;

  if (diff <= 0 || Number.isNaN(diff)) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}

export function padTwo(value: number): string {
  return String(Math.max(0, Math.floor(value))).padStart(2, '0');
}
