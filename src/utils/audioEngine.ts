/**
 * Gentle romantic ambient piano/harp synthesizer using Web Audio API.
 * Produces soft warm chords and delicate arpeggiated notes with zero external audio assets.
 */
class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private stepIndex = 0;
  private playing = false;

  // Romantic D-minor / Nahawand-inspired gentle progression (Hz)
  private readonly sequence: number[] = [
    293.66, 349.23, 440.0, 523.25, 587.33, 523.25, 440.0, 349.23,
    261.63, 329.63, 392.0, 493.88, 523.25, 493.88, 392.0, 329.63,
    233.08, 293.66, 349.23, 440.0, 466.16, 440.0, 349.23, 293.66,
    220.0, 277.18, 329.63, 440.0, 554.37, 440.0, 329.63, 277.18,
  ];

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  private playNote(freq: number, startTime: number, duration: number, volume = 0.085) {
    if (!this.ctx || !this.masterGain) return;

    const oscMain = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const env = this.ctx.createGain();

    // Warm harp/piano blend
    oscMain.type = 'sine';
    oscMain.frequency.setValueAtTime(freq, startTime);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);
    filter.frequency.exponentialRampToValueAtTime(420, startTime + duration);

    const harmonicGain = this.ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.18, startTime);

    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(volume, startTime + 0.045);
    env.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    oscMain.connect(filter);
    oscHarmonic.connect(harmonicGain);
    harmonicGain.connect(filter);
    filter.connect(env);
    env.connect(this.masterGain);

    oscMain.start(startTime);
    oscHarmonic.start(startTime);
    oscMain.stop(startTime + duration + 0.05);
    oscHarmonic.stop(startTime + duration + 0.05);
  }

  public async start(): Promise<boolean> {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return false;

    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch {
        return false;
      }
    }

    if (ctx.state !== 'running') {
      return false;
    }

    if (this.playing) return true;
    this.playing = true;

    const now = ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(Math.max(this.masterGain.gain.value, 0.0001), now);
    this.masterGain.gain.linearRampToValueAtTime(0.65, now + 0.8);

    const tick = () => {
      if (!this.playing || !this.ctx || this.ctx.state !== 'running') return;
      const freq = this.sequence[this.stepIndex % this.sequence.length];
      const t = this.ctx.currentTime + 0.03;
      if (this.stepIndex % 8 === 0) {
        this.playNote(freq / 2, t, 3.2, 0.065);
      }
      this.playNote(freq, t, 2.4, 0.08);
      this.stepIndex += 1;
    };

    tick();
    this.timerId = window.setInterval(tick, 680);
    return true;
  }

  public stop(): void {
    this.playing = false;
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(Math.max(this.masterGain.gain.value, 0.0001), now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    }
  }

  public isPlaying(): boolean {
    return this.playing;
  }
}

export const romanticAudio = new RomanticAudioEngine();
