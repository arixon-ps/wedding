import { useCallback, useState } from 'react';
import { CountdownSection } from './components/CountdownSection';
import { DetailsSection } from './components/DetailsSection';
import { EditorialVisualsSection } from './components/EditorialVisualsSection';
import { FamiliesSection } from './components/FamiliesSection';
import { FloatingDustAndPetals } from './components/FloatingDustAndPetals';
import { FooterSection } from './components/FooterSection';
import { GoldenSoundwave } from './components/GoldenSoundwave';
import { HeroSection } from './components/HeroSection';
import { OpeningCurtain } from './components/OpeningCurtain';
import { OwnerWishesDrawer } from './components/OwnerWishesDrawer';
import { PrivateWishesSection } from './components/PrivateWishesSection';
import { ScrollProgressThread } from './components/ScrollProgressThread';
import { romanticAudio } from './utils/audioEngine';
import { isOwnerModeFromSearch } from './utils/wishes';

export default function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(() =>
    typeof window !== 'undefined' ? isOwnerModeFromSearch(window.location.search) : false,
  );
  const [wishRefreshToken, setWishRefreshToken] = useState(0);

  const handleCurtainOpenStart = useCallback(() => {
    void romanticAudio.start().then((started) => {
      if (started) {
        setAudioPlaying(true);
      }
    });
  }, []);

  const handleToggleAudio = useCallback(() => {
    if (romanticAudio.isPlaying()) {
      romanticAudio.stop();
      setAudioPlaying(false);
    } else {
      void romanticAudio.start().then((started) => {
        if (started) {
          setAudioPlaying(true);
        }
      });
    }
  }, []);

  const handleWishSubmitted = useCallback(() => {
    setWishRefreshToken((prev) => prev + 1);
  }, []);

  const handleSecretOwnerUnlock = useCallback(() => {
    setWishRefreshToken((prev) => prev + 1);
    setOwnerOpen(true);
  }, []);

  return (
    <div dir="rtl" lang="ar" className="min-h-screen silk-grain-surface text-[#3E383A] relative">
      {/* Subtle silk & linen grain texture */}
      <div className="silk-grain-overlay" aria-hidden="true" />

      {/* Floating Gold Dust & White Rose Petals */}
      <FloatingDustAndPetals />

      {/* Full-Screen Stucco & Gold Wax Seal Opening Curtain */}
      <OpeningCurtain onOpenStart={handleCurtainOpenStart} />

      {/* Minimalist 24px Golden Soundwave Indicator */}
      <GoldenSoundwave isPlaying={audioPlaying} onToggle={handleToggleAudio} />

      {/* Top Scroll Progress Gold Thread & Desktop Chapter Rail */}
      <ScrollProgressThread />

      {/* Single-Page Editorial Invitation Scroll */}
      <main className="relative z-10">
        <HeroSection />
        <FamiliesSection />
        <DetailsSection />
        <EditorialVisualsSection />
        <CountdownSection />
        <PrivateWishesSection onWishSubmitted={handleWishSubmitted} />
      </main>

      <FooterSection onSecretOwnerUnlock={handleSecretOwnerUnlock} />

      {/* Strictly Owner-Only Private Wishes Viewer */}
      <OwnerWishesDrawer
        open={ownerOpen}
        refreshToken={wishRefreshToken}
        onClose={() => setOwnerOpen(false)}
      />
    </div>
  );
}
