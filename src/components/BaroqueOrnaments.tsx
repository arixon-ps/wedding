import React, { useId } from 'react';

interface OrnamentProps {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  rotate?: number;
}

/**
 * High-detail sculpted 3D white baroque acanthus scroll relief with metallic antique gold pearls.
 * Renders crisply via multi-layered SVG stucco gradients, carved leaf ribs, and bevel highlights.
 */
export const BaroqueCornerScroll: React.FC<OrnamentProps> = ({
  className = '',
  flipX = false,
  flipY = false,
  rotate = 0,
}) => {
  const uid = useId().replace(/:/g, '');
  const transform = [
    rotate ? `rotate(${rotate}deg)` : '',
    flipX ? 'scaleX(-1)' : '',
    flipY ? 'scaleY(-1)' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`baroque-relief-shadow select-none pointer-events-none ${className}`}
      style={transform ? { transform } : undefined}
    >
      <defs>
        {/* Main sculpted stucco ivory body */}
        <linearGradient id={`${uid}-stucco`} x1="20" y1="15" x2="290" y2="295" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="32%" stopColor="#F8F6F4" />
          <stop offset="72%" stopColor="#ECE6E2" />
          <stop offset="100%" stopColor="#D7CEC9" />
        </linearGradient>

        {/* Secondary deeper acanthus leaf layer */}
        <linearGradient id={`${uid}-stucco-deep`} x1="10" y1="10" x2="250" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5F2EF" />
          <stop offset="55%" stopColor="#E4DDD8" />
          <stop offset="100%" stopColor="#C9BFC0" />
        </linearGradient>

        {/* Raised highlight ridge */}
        <linearGradient id={`${uid}-ridge`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#FAF8F6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#DDD5D0" stopOpacity="0.35" />
        </linearGradient>

        {/* Carved inner crevice shadow */}
        <linearGradient id={`${uid}-crevice`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#AEA3A6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#CFC6C4" stopOpacity="0.15" />
        </linearGradient>

        {/* 3D Metallic Antique Gold Pearl */}
        <radialGradient id={`${uid}-pearl`} cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FFF3CE" />
          <stop offset="28%" stopColor="#DFBE74" />
          <stop offset="68%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#7C5C24" />
        </radialGradient>
      </defs>

      {/* Base under-leaves for 3D depth */}
      <path
        d="M28 190 C12 140, 24 84, 72 48 C115 16, 176 14, 224 34 C194 46, 168 62, 148 84 C112 72, 74 90, 56 130 C44 156, 42 178, 28 190 Z"
        fill={`url(#${uid}-stucco-deep)`}
      />
      <path
        d="M174 28 C218 14, 266 32, 290 66 C262 60, 232 66, 208 82 C194 60, 184 44, 174 28 Z"
        fill={`url(#${uid}-stucco-deep)`}
      />
      <path
        d="M30 168 C10 218, 28 272, 68 296 C60 264, 66 232, 84 206 C62 192, 46 180, 30 168 Z"
        fill={`url(#${uid}-stucco-deep)`}
      />

      {/* Primary sweeping Baroque C-Scroll Spine */}
      <path
        d="M42 252 C20 206, 22 140, 62 90 C102 40, 174 22, 238 46 C268 58, 286 82, 274 106 C264 126, 236 128, 222 110 C212 96, 220 78, 234 78 C212 58, 160 56, 118 90 C76 124, 62 184, 86 226 C98 248, 86 274, 64 274 C48 274, 44 264, 42 252 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Sculpted Acanthus Curl Lobes along Top Horizontal Arm */}
      <path
        d="M104 68 C122 36, 162 18, 202 28 C184 40, 170 54, 162 68 C144 62, 124 62, 104 68 Z"
        fill={`url(#${uid}-stucco)`}
      />
      <path
        d="M148 56 C168 38, 198 34, 224 44 C206 54, 192 66, 182 78 C170 68, 158 62, 148 56 Z"
        fill={`url(#${uid}-ridge)`}
      />

      {/* Sculpted Acanthus Curl Lobes along Vertical Arm */}
      <path
        d="M66 106 C34 126, 18 166, 28 206 C40 188, 54 174, 68 164 C62 146, 62 126, 66 106 Z"
        fill={`url(#${uid}-stucco)`}
      />
      <path
        d="M54 152 C38 172, 34 202, 44 228 C54 210, 66 196, 78 186 C68 174, 60 162, 54 152 Z"
        fill={`url(#${uid}-ridge)`}
      />

      {/* Central Rococo Shell & Volute Rosette */}
      <path
        d="M62 70 C80 46, 114 42, 134 58 C146 68, 144 88, 128 96 C116 102, 102 96, 104 82 C106 72, 118 70, 122 76 C118 64, 98 62, 86 76 C72 92, 76 116, 94 128 C74 124, 56 104, 62 70 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Inner S-Scroll Secondary Flourish */}
      <path
        d="M104 116 C128 96, 166 94, 192 114 C208 126, 210 148, 194 158 C180 166, 164 158, 166 144 C168 134, 178 132, 184 138 C178 124, 154 118, 134 130 C114 142, 108 168, 124 190 C100 176, 86 142, 104 116 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Carved Leaf Veins / Crevices for 3D Relief Definition */}
      <path
        d="M58 214 C48 168, 62 116, 104 82 C142 52, 196 48, 240 68"
        stroke={`url(#${uid}-crevice)`}
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 212 C52 168, 66 118, 108 85 C145 55, 196 51, 236 70"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeOpacity="0.85"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M114 132 C136 112, 166 112, 188 128"
        stroke={`url(#${uid}-crevice)`}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Finial Tip Curls */}
      <path
        d="M234 46 C262 32, 294 38, 304 60 C288 54, 272 56, 260 66 C254 54, 244 48, 234 46 Z"
        fill={`url(#${uid}-stucco)`}
      />
      <path
        d="M44 240 C28 268, 36 298, 58 308 C52 292, 54 276, 64 264 C54 258, 48 248, 44 240 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Embedded Metallic Antique Gold Pearls & Beads */}
      <g>
        <circle cx="88" cy="88" r="8.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="118" cy="64" r="5.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="148" cy="52" r="4.2" fill={`url(#${uid}-pearl)`} />
        <circle cx="64" cy="120" r="5.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="52" cy="150" r="4.2" fill={`url(#${uid}-pearl)`} />
        <circle cx="242" cy="94" r="6.2" fill={`url(#${uid}-pearl)`} />
        <circle cx="66" cy="252" r="6.2" fill={`url(#${uid}-pearl)`} />
        <circle cx="178" cy="144" r="5" fill={`url(#${uid}-pearl)`} />
        <circle cx="106" cy="112" r="3.6" fill={`url(#${uid}-pearl)`} />
      </g>
    </svg>
  );
};

/**
 * Vertical symmetrical/flowing baroque scroll flourish for section edges and countdown flanks.
 */
export const BaroqueSideFlourish: React.FC<OrnamentProps> = ({
  className = '',
  flipX = false,
  flipY = false,
}) => {
  const uid = useId().replace(/:/g, '');
  const transform = [flipX ? 'scaleX(-1)' : '', flipY ? 'scaleY(-1)' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      viewBox="0 0 180 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`baroque-relief-shadow select-none pointer-events-none ${className}`}
      style={transform ? { transform } : undefined}
    >
      <defs>
        <linearGradient id={`${uid}-stucco`} x1="10" y1="20" x2="170" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="38%" stopColor="#F8F6F4" />
          <stop offset="76%" stopColor="#EAE3DF" />
          <stop offset="100%" stopColor="#D3C9C4" />
        </linearGradient>
        <linearGradient id={`${uid}-deep`} x1="0" y1="0" x2="160" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F3EFEC" />
          <stop offset="100%" stopColor="#CCC1BE" />
        </linearGradient>
        <radialGradient id={`${uid}-pearl`} cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FFF4D2" />
          <stop offset="30%" stopColor="#DFBE74" />
          <stop offset="70%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#7C5C24" />
        </radialGradient>
      </defs>

      {/* Background carved foliage */}
      <path
        d="M28 60 C68 38, 122 52, 134 94 C112 88, 90 92, 74 106 C64 84, 48 70, 28 60 Z"
        fill={`url(#${uid}-deep)`}
      />
      <path
        d="M28 300 C68 322, 122 308, 134 266 C112 272, 90 268, 74 254 C64 276, 48 290, 28 300 Z"
        fill={`url(#${uid}-deep)`}
      />

      {/* Double S-Scroll Acanthus Body */}
      <path
        d="M24 38 C76 22, 136 50, 140 104 C144 146, 108 176, 70 180 C108 184, 144 214, 140 256 C136 310, 76 338, 24 322 C10 318, 8 298, 22 292 C58 304, 104 286, 108 250 C112 214, 72 194, 34 194 C20 194, 18 166, 34 166 C72 166, 112 146, 108 110 C104 74, 58 56, 22 68 C8 62, 10 42, 24 38 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Sculpted Central Medallion & Leaf Crest */}
      <path
        d="M16 144 C48 134, 86 150, 96 180 C86 210, 48 226, 16 216 C28 198, 32 180, 16 144 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Inner Scroll Curls */}
      <path
        d="M64 86 C86 78, 108 92, 104 114 C100 130, 82 136, 72 124 C66 116, 72 104, 82 106 C76 96, 66 96, 58 104 Z"
        fill={`url(#${uid}-stucco)`}
      />
      <path
        d="M64 274 C86 282, 108 268, 104 246 C100 230, 82 224, 72 236 C66 244, 72 256, 82 254 C76 264, 66 264, 58 256 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Specular Ridge Line */}
      <path
        d="M36 52 C82 44, 124 72, 124 112 C124 148, 86 172, 48 176"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeOpacity="0.85"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M36 308 C82 316, 124 288, 124 248 C124 212, 86 188, 48 184"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeOpacity="0.85"
        strokeLinecap="round"
        fill="none"
      />

      {/* Gold Pearls */}
      <g>
        <circle cx="54" cy="180" r="8" fill={`url(#${uid}-pearl)`} />
        <circle cx="88" cy="112" r="5.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="88" cy="248" r="5.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="118" cy="78" r="4.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="118" cy="282" r="4.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="32" cy="148" r="3.8" fill={`url(#${uid}-pearl)`} />
        <circle cx="32" cy="212" r="3.8" fill={`url(#${uid}-pearl)`} />
      </g>
    </svg>
  );
};

/**
 * Large close-up Baroque Acanthus Arch/Crown Relief for the Opening Curtain.
 */
export const BaroqueCurtainCluster: React.FC<{
  className?: string;
  flipX?: boolean;
}> = ({ className = '', flipX = false }) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`baroque-relief-shadow select-none pointer-events-none ${className}`}
      style={flipX ? { transform: 'scaleX(-1)' } : undefined}
    >
      <defs>
        <linearGradient id={`${uid}-stucco`} x1="20" y1="20" x2="390" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#F8F6F4" />
          <stop offset="75%" stopColor="#EAE3DF" />
          <stop offset="100%" stopColor="#D3C9C5" />
        </linearGradient>
        <linearGradient id={`${uid}-deep`} x1="0" y1="40" x2="360" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F3EFEC" />
          <stop offset="100%" stopColor="#C9BFC0" />
        </linearGradient>
        <radialGradient id={`${uid}-pearl`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFF5D6" />
          <stop offset="32%" stopColor="#E1C27A" />
          <stop offset="72%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#7C5C24" />
        </radialGradient>
      </defs>

      {/* Deep under-scrolls */}
      <path
        d="M-20 80 C120 30, 290 60, 350 160 C395 235, 360 330, 290 365 C355 415, 340 500, 240 530 C160 554, 40 520, -20 470 Z"
        fill={`url(#${uid}-deep)`}
      />

      {/* Primary sweeping Baroque Acanthus Scroll */}
      <path
        d="M-10 40 C130 10, 290 48, 336 146 C366 210, 330 278, 268 294 C332 320, 356 396, 310 462 C264 528, 130 546, -10 504 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Sculpted Inner Volutes */}
      <path
        d="M30 112 C118 76, 232 98, 268 170 C292 218, 256 268, 206 264 C172 260, 158 228, 178 206 C192 192, 214 198, 218 214 C228 192, 210 156, 168 142 C116 124, 58 146, 24 192 Z"
        fill={`url(#${uid}-stucco)`}
      />
      <path
        d="M24 344 C112 318, 224 338, 258 402 C282 448, 244 494, 196 488 C164 484, 152 454, 170 434 C182 420, 204 426, 208 440 C216 420, 200 388, 162 374 C114 358, 58 378, 24 420 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Central Acanthus Leaf Crest */}
      <path
        d="M18 224 C96 206, 178 232, 212 280 C178 328, 96 354, 18 336 C48 302, 54 258, 18 224 Z"
        fill={`url(#${uid}-stucco)`}
      />

      {/* Carved Highlights */}
      <path
        d="M36 96 C126 62, 248 86, 286 164 C308 210, 280 264, 228 276"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeOpacity="0.88"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M36 332 C126 302, 240 326, 276 398"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeOpacity="0.88"
        strokeLinecap="round"
        fill="none"
      />

      {/* Gold Pearls */}
      <g>
        <circle cx="144" cy="280" r="12" fill={`url(#${uid}-pearl)`} />
        <circle cx="196" cy="212" r="9.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="188" cy="436" r="9.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="272" cy="144" r="7.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="268" cy="396" r="7.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="96" cy="138" r="6.5" fill={`url(#${uid}-pearl)`} />
        <circle cx="92" cy="368" r="6.5" fill={`url(#${uid}-pearl)`} />
      </g>
    </svg>
  );
};

/**
 * Arabesque Pointed-Arch & Scalloped Cartouche Plaque Frame (#EAE6E3)
 * with 3D sculpted metallic antique gold beveled molding and filigree corner accents.
 */
export const ArabesqueCartoucheBackdrop: React.FC<{
  variant?: 'hero' | 'rsvp';
  className?: string;
}> = ({ variant = 'hero', className = '' }) => {
  const uid = useId().replace(/:/g, '');
  if (variant === 'rsvp') {
    return (
      <svg
        viewBox="0 0 520 760"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
      >
        <defs>
          <linearGradient id={`${uid}-plaque`} x1="0" y1="0" x2="520" y2="760" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F3EFEA" />
            <stop offset="48%" stopColor="#EAE6E3" />
            <stop offset="100%" stopColor="#E1DBD6" />
          </linearGradient>
          <linearGradient id={`${uid}-gold3d`} x1="20" y1="12" x2="500" y2="748" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF0C4" />
            <stop offset="22%" stopColor="#D7B264" />
            <stop offset="50%" stopColor="#9E7B3B" />
            <stop offset="78%" stopColor="#E6C67C" />
            <stop offset="100%" stopColor="#775820" />
          </linearGradient>
          <linearGradient id={`${uid}-gold-inner`} x1="500" y1="20" x2="20" y2="740" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#856529" />
            <stop offset="50%" stopColor="#DFBE74" />
            <stop offset="100%" stopColor="#9E7B3B" />
          </linearGradient>
        </defs>
        {/* Outer 3D Gold Bevel Shadow Rim */}
        <path
          d="M260 12 C290 36, 332 42, 368 54 C406 66, 442 74, 468 96 C490 116, 498 136, 498 164 L498 656 C498 692, 476 716, 448 730 C420 744, 384 744, 344 744 L176 744 C136 744, 100 744, 72 730 C44 716, 22 692, 22 656 L22 164 C22 136, 30 116, 52 96 C78 74, 114 66, 152 54 C188 42, 230 36, 260 12 Z"
          fill={`url(#${uid}-plaque)`}
          stroke={`url(#${uid}-gold3d)`}
          strokeWidth="5"
        />
        {/* Specular Highlight Ridge on Gold Frame */}
        <path
          d="M260 14.5 C289 38, 331 44, 367 56 C404 68, 440 76, 466 97.5 C487 117, 495.5 137, 495.5 164 L495.5 656 C495.5 690, 474 714, 446 727.5 C418 741, 384 741.5, 344 741.5 L176 741.5 C136 741.5, 102 741, 74 727.5 C46 714, 24.5 690, 24.5 656 L24.5 164 C24.5 137, 33 117, 54 97.5 C80 76, 116 68, 153 56 C189 44, 231 38, 260 14.5 Z"
          fill="none"
          stroke="#FFF7DC"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />
        {/* Inner Recessed 3D Metallic Gold Frame */}
        <path
          d="M260 28 C286 50, 326 54, 360 66 C394 78, 428 84, 452 104 C472 122, 482 140, 482 168 L482 652 C482 684, 462 704, 436 716 C410 728, 376 728, 340 728 L180 728 C144 728, 110 728, 84 716 C58 704, 38 684, 38 652 L38 168 C38 140, 48 122, 68 104 C92 84, 126 78, 160 66 C194 54, 234 50, 260 28 Z"
          fill="none"
          stroke={`url(#${uid}-gold-inner)`}
          strokeOpacity="0.82"
          strokeWidth="1.6"
        />
        {/* Delicate Inner Filigree Hairline */}
        <path
          d="M260 36 C284 56, 322 60, 354 72 C388 83, 420 89, 444 108 C463 125, 474 143, 474 170 L474 648 C474 678, 456 696, 431 708 C406 719, 373 720, 338 720 L182 720 C147 720, 114 719, 89 708 C64 696, 46 678, 46 648 L46 170 C46 143, 57 125, 76 108 C100 89, 132 83, 166 72 C198 60, 236 56, 260 36 Z"
          fill="none"
          stroke="#9E7B3B"
          strokeOpacity="0.32"
          strokeWidth="0.9"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 560 720"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={`${uid}-plaque`} x1="0" y1="0" x2="560" y2="720" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F0EC" />
          <stop offset="50%" stopColor="#EAE6E3" />
          <stop offset="100%" stopColor="#DFD8D3" />
        </linearGradient>
        <linearGradient id={`${uid}-gold3d`} x1="24" y1="14" x2="536" y2="706" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2C8" />
          <stop offset="22%" stopColor="#DFBE74" />
          <stop offset="50%" stopColor="#9E7B3B" />
          <stop offset="78%" stopColor="#E6C77E" />
          <stop offset="100%" stopColor="#775820" />
        </linearGradient>
        <linearGradient id={`${uid}-gold-inner`} x1="536" y1="20" x2="24" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#856529" />
          <stop offset="48%" stopColor="#E2C278" />
          <stop offset="100%" stopColor="#9E7B3B" />
        </linearGradient>
      </defs>
      {/* Outer Arabesque Pointed-Arch Scalloped Cartouche with 3D Sculpted Gold Bevel */}
      <path
        d="M280 14 C312 44, 356 48, 392 66 C432 86, 466 94, 492 128 C518 162, 536 196, 536 244 L536 556 C536 608, 508 646, 470 670 C432 694, 384 698, 336 700 L280 706 L224 700 C176 698, 128 694, 90 670 C52 646, 24 608, 24 556 L24 244 C24 196, 42 162, 68 128 C94 94, 128 86, 168 66 C204 48, 248 44, 280 14 Z"
        fill={`url(#${uid}-plaque)`}
        stroke={`url(#${uid}-gold3d)`}
        strokeWidth="5.5"
      />
      {/* Specular Ridge Highlight along Gold Molding */}
      <path
        d="M280 17 C311 46, 355 50, 390 68 C430 88, 463 96, 489 129 C515 163, 533 197, 533 244 L533 556 C533 606, 506 643, 468 667 C430 691, 383 695, 336 697 L280 703 L224 697 C177 695, 130 691, 92 667 C54 643, 27 606, 27 556 L27 244 C27 197, 45 163, 71 129 C97 96, 130 88, 170 68 C205 50, 249 46, 280 17 Z"
        fill="none"
        stroke="#FFF8E2"
        strokeOpacity="0.72"
        strokeWidth="1.2"
      />
      {/* Inner Double 3D Metallic Gold Molding */}
      <path
        d="M280 30 C308 58, 350 62, 384 78 C422 98, 454 106, 478 136 C502 168, 520 200, 520 246 L520 554 C520 600, 494 634, 458 656 C422 678, 378 682, 332 684 L280 690 L228 684 C182 682, 138 678, 102 656 C66 634, 40 600, 40 554 L40 246 C40 200, 58 168, 82 136 C106 106, 138 98, 176 78 C210 62, 252 58, 280 30 Z"
        fill="none"
        stroke={`url(#${uid}-gold-inner)`}
        strokeOpacity="0.85"
        strokeWidth="1.8"
      />
      {/* Delicate Inner Filigree Accent Line */}
      <path
        d="M280 39 C306 65, 346 69, 379 84 C415 103, 446 111, 469 140 C493 171, 511 202, 511 247 L511 551 C511 595, 486 627, 452 648 C417 669, 374 673, 330 675 L280 681 L230 675 C186 673, 143 669, 108 648 C74 627, 49 595, 49 551 L49 247 C49 202, 67 171, 91 140 C114 111, 145 103, 181 84 C214 69, 254 65, 280 39 Z"
        fill="none"
        stroke="#9E7B3B"
        strokeOpacity="0.35"
        strokeWidth="0.9"
      />
      {/* Gold Corner & Apex Pearl Studs */}
      <circle cx="280" cy="22" r="3.2" fill="#DFBE74" />
      <circle cx="280" cy="698" r="2.8" fill="#DFBE74" />
      <circle cx="32" cy="390" r="2.5" fill="#C5A059" />
      <circle cx="528" cy="390" r="2.5" fill="#C5A059" />
    </svg>
  );
};

/**
 * Soft-shaded white rose & ivory floral sprig tucked subtly behind 3D white stucco reliefs.
 */
export const WhiteRoseSprig: React.FC<OrnamentProps> = ({
  className = '',
  flipX = false,
  flipY = false,
  rotate = 0,
}) => {
  const uid = useId().replace(/:/g, '');
  const transform = [
    rotate ? `rotate(${rotate}deg)` : '',
    flipX ? 'scaleX(-1)' : '',
    flipY ? 'scaleY(-1)' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`rose-soft-shadow select-none pointer-events-none ${className}`}
      style={transform ? { transform } : undefined}
    >
      <defs>
        <radialGradient id={`${uid}-petal`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F5F1ED" />
          <stop offset="100%" stopColor="#DED6D1" />
        </radialGradient>
        <linearGradient id={`${uid}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAE6E2" />
          <stop offset="100%" stopColor="#C4BBB8" />
        </linearGradient>
      </defs>

      {/* Delicate ivory-taupe leaves */}
      <path
        d="M36 130 C20 110, 18 82, 42 66 C48 92, 46 112, 36 130 Z"
        fill={`url(#${uid}-leaf)`}
      />
      <path
        d="M124 44 C144 30, 166 36, 170 60 C150 64, 134 56, 124 44 Z"
        fill={`url(#${uid}-leaf)`}
      />
      <path
        d="M112 132 C136 126, 158 138, 154 162 C134 156, 120 144, 112 132 Z"
        fill={`url(#${uid}-leaf)`}
      />

      {/* Outer white rose petals */}
      <path
        d="M84 42 C108 38, 128 56, 126 82 C124 106, 102 126, 78 124 C52 122, 38 100, 42 74 C46 50, 62 44, 84 42 Z"
        fill={`url(#${uid}-petal)`}
      />
      <path
        d="M62 56 C84 44, 114 52, 118 78 C122 100, 102 118, 78 114 C56 110, 48 86, 62 56 Z"
        fill="#FAF7F4"
        stroke="#D8CFCB"
        strokeWidth="0.9"
      />
      {/* Inner spiral petals */}
      <path
        d="M72 68 C86 60, 104 68, 104 84 C104 98, 88 106, 74 100 C62 94, 62 76, 72 68 Z"
        fill="#FFFFFF"
        stroke="#DDD4D0"
        strokeWidth="0.9"
      />
      <path
        d="M78 76 C86 72, 95 78, 94 86 C93 93, 84 96, 78 91 C73 86, 74 79, 78 76 Z"
        fill="#F4EFEA"
        stroke="#D6CBC6"
        strokeWidth="0.8"
      />
      {/* Secondary small rosebud */}
      <circle cx="132" cy="96" r="18" fill={`url(#${uid}-petal)`} />
      <path
        d="M124 90 C132 84, 142 89, 140 98 C138 105, 127 106, 123 99 Z"
        fill="#FFFFFF"
        stroke="#DDD4D0"
        strokeWidth="0.8"
      />
    </svg>
  );
};

/**
 * 3D embossed metallic gold wax seal stamped with monogram initials "A S".
 */
export const GoldWaxSeal: React.FC<{
  cracking?: boolean;
  className?: string;
}> = ({ cracking = false, className = '' }) => {
  const uid = useId().replace(/:/g, '');
  return (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        cracking ? 'scale-125 opacity-0 rotate-12' : 'scale-100 opacity-100'
      } ${className}`}
    >
      {/* Subtle pulsing golden halo */}
      <span
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(218,185,112,0.52)_0%,rgba(158,123,59,0)_72%)] animate-halo-pulse pointer-events-none"
      />
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_18px_30px_rgba(50,40,45,0.36)]"
      >
        <defs>
          <radialGradient id={`${uid}-wax-outer`} cx="35%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#FBE7B2" />
            <stop offset="30%" stopColor="#DFBE74" />
            <stop offset="72%" stopColor="#A5803D" />
            <stop offset="100%" stopColor="#6D501D" />
          </radialGradient>
          <radialGradient id={`${uid}-wax-inner`} cx="60%" cy="65%" r="70%">
            <stop offset="0%" stopColor="#C9A55C" />
            <stop offset="55%" stopColor="#9A7534" />
            <stop offset="100%" stopColor="#775820" />
          </radialGradient>
        </defs>

        {/* Organic irregular hand-pressed wax seal perimeter */}
        <path
          d="M90 10 C112 10, 128 18, 144 30 C158 41, 168 58, 170 80 C172 104, 164 126, 148 144 C132 161, 112 170, 88 170 C64 170, 42 158, 26 140 C12 124, 8 100, 12 76 C16 52, 30 34, 48 22 C64 12, 74 10, 90 10 Z"
          fill={`url(#${uid}-wax-outer)`}
        />
        {/* Raised embossed wax rim */}
        <circle
          cx="90"
          cy="90"
          r="62"
          fill={`url(#${uid}-wax-inner)`}
          stroke="#F7E2AA"
          strokeOpacity="0.65"
          strokeWidth="2.5"
        />
        <circle
          cx="90"
          cy="90"
          r="54"
          fill="none"
          stroke="#5C4115"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />

        {/* Monogram initials A S */}
        <text
          x="90"
          y="102"
          direction="ltr"
          textAnchor="middle"
          fill="#FFF3D1"
          style={{
            fontFamily: "'Amiri', Georgia, 'Times New Roman', serif",
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            unicodeBidi: 'bidi-override',
          }}
        >
          A S
        </text>
      </svg>
    </div>
  );
};

/**
 * Very faint low-opacity (0.07) romantic bride-and-groom silhouette watermark.
 */
export const BrideGroomSilhouette: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 360 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`pointer-events-none select-none opacity-[0.07] ${className}`}
  >
    {/* Groom silhouette (right) */}
    <path
      d="M214 68 C227 68, 236 78, 236 92 C236 106, 226 118, 214 118 C201 118, 192 106, 192 92 C192 78, 201 68, 214 68 Z"
      fill="#3E383A"
    />
    <path
      d="M174 166 C174 138, 194 124, 216 124 C242 124, 258 142, 260 176 L264 294 L250 418 L220 418 L216 296 L204 418 L174 418 L176 286 Z"
      fill="#3E383A"
    />
    {/* Bride silhouette (left) leaning gently with flowing gown */}
    <path
      d="M142 84 C153 84, 162 93, 162 105 C162 117, 153 127, 142 127 C131 127, 122 117, 122 105 C122 93, 131 84, 142 84 Z"
      fill="#3E383A"
    />
    {/* Bridal veil & crown */}
    <path
      d="M126 94 C104 108, 90 144, 84 198 C100 182, 112 162, 120 142 Z"
      fill="#3E383A"
    />
    {/* Flowing wedding dress */}
    <path
      d="M122 146 C126 132, 148 130, 164 144 L178 192 C164 218, 174 266, 194 344 C206 392, 196 420, 146 422 C96 424, 62 414, 52 396 C78 368, 96 312, 108 242 Z"
      fill="#3E383A"
    />
  </svg>
);

/**
 * Symmetrical 3D white Baroque acanthus crest medallion with embedded gold pearls.
 */
export const BaroqueTopCrownMedallion: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 280 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`baroque-relief-shadow select-none pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id={`${uid}-crest`} x1="30" y1="10" x2="250" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F8F6F4" />
          <stop offset="100%" stopColor="#DDD4D0" />
        </linearGradient>
        <radialGradient id={`${uid}-pearl`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFF5D4" />
          <stop offset="35%" stopColor="#DFBE74" />
          <stop offset="75%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#7C5C24" />
        </radialGradient>
      </defs>

      {/* Left & Right symmetrical wings */}
      <path
        d="M140 24 C122 12, 98 18, 86 38 C70 28, 44 34, 30 52 C20 64, 24 80, 42 78 C54 76, 60 66, 54 58 C68 54, 86 64, 100 76 C116 62, 130 56, 140 58 C150 56, 164 62, 180 76 C194 64, 212 54, 226 58 C220 66, 226 76, 238 78 C256 80, 260 64, 250 52 C236 34, 210 28, 194 38 C182 18, 158 12, 140 24 Z"
        fill={`url(#${uid}-crest)`}
      />
      {/* Central Acanthus Shell Crown */}
      <path
        d="M140 8 C152 22, 164 34, 162 52 C152 58, 146 62, 140 66 C134 62, 128 58, 118 52 C116 34, 128 22, 140 8 Z"
        fill="#FFFFFF"
        stroke="#E4DCD7"
        strokeWidth="1"
      />
      {/* Specular Ridge Highlights */}
      <path
        d="M52 50 C76 42, 102 48, 118 60 M228 50 C204 42, 178 48, 162 60"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
      {/* Antique Gold Pearls */}
      <circle cx="140" cy="40" r="6.5" fill={`url(#${uid}-pearl)`} />
      <circle cx="114" cy="46" r="4.2" fill={`url(#${uid}-pearl)`} />
      <circle cx="166" cy="46" r="4.2" fill={`url(#${uid}-pearl)`} />
      <circle cx="76" cy="52" r="3.6" fill={`url(#${uid}-pearl)`} />
      <circle cx="204" cy="52" r="3.6" fill={`url(#${uid}-pearl)`} />
    </svg>
  );
};

/**
 * Delicate gold filigree corner bracket for framing countdown units or editorial cards.
 */
export const GoldCornerFiligree: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M2 24V8C2 4.68629 4.68629 2 8 2H24"
      stroke="#9E7B3B"
      strokeOpacity="0.65"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7" cy="7" r="1.6" fill="#C5A059" />
  </svg>
);

/**
 * Opulent multi-bloom white garden rose cluster with layered scalloped petals, soft fold shadows,
 * botanical leaves, and antique gold pearl buds for framing outer corners and edges of the invitation.
 */
export const LuxuryWhiteRoseCluster: React.FC<OrnamentProps> = ({
  className = '',
  flipX = false,
  flipY = false,
  rotate = 0,
}) => {
  const uid = useId().replace(/:/g, '');
  const transform = [
    rotate ? `rotate(${rotate}deg)` : '',
    flipX ? 'scaleX(-1)' : '',
    flipY ? 'scaleY(-1)' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`rose-soft-shadow select-none pointer-events-none ${className}`}
      style={transform ? { transform } : undefined}
    >
      <defs>
        <linearGradient id={`${uid}-petal-light`} x1="20%" y1="15%" x2="85%" y2="85%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="58%" stopColor="#F6F1EC" />
          <stop offset="100%" stopColor="#D8CEC9" />
        </linearGradient>
        <linearGradient id={`${uid}-petal-shade`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBF8F5" />
          <stop offset="55%" stopColor="#E9E0DA" />
          <stop offset="100%" stopColor="#C8BCB7" />
        </linearGradient>
        <radialGradient id={`${uid}-heart`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#F2E8DE" />
          <stop offset="60%" stopColor="#DFD2C9" />
          <stop offset="100%" stopColor="#BFB1AA" />
        </radialGradient>
        <linearGradient id={`${uid}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E1DDD8" />
          <stop offset="52%" stopColor="#BFB8B3" />
          <stop offset="100%" stopColor="#99918E" />
        </linearGradient>
        <radialGradient id={`${uid}-goldbud`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFF4CE" />
          <stop offset="55%" stopColor="#D8B364" />
          <stop offset="100%" stopColor="#8A6728" />
        </radialGradient>
      </defs>

      {/* Pointed Botanical Rose Leaves */}
      <g>
        <path d="M52 190 C22 162, 16 122, 44 96 C64 126, 66 160, 52 190 Z" fill={`url(#${uid}-leaf)`} />
        <path d="M48 180 C40 152, 40 128, 45 104" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1" fill="none" />

        <path d="M168 42 C194 14, 234 16, 248 48 C218 62, 188 58, 168 42 Z" fill={`url(#${uid}-leaf)`} />
        <path d="M176 42 C198 34, 220 36, 240 46" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1" fill="none" />

        <path d="M192 146 C224 142, 248 164, 238 198 C210 184, 196 166, 192 146 Z" fill={`url(#${uid}-leaf)`} />
        <path d="M84 44 C98 14, 134 10, 152 36 C130 48, 106 48, 84 44 Z" fill={`url(#${uid}-leaf)`} />
        <path d="M114 202 C140 198, 162 218, 154 246 C130 234, 118 218, 114 202 Z" fill={`url(#${uid}-leaf)`} />
      </g>

      {/* Primary White Garden Rose — 5 Outer Scalloped Petals */}
      <g>
        {/* Top-left outer petal */}
        <path
          d="M112 108 C86 106, 56 86, 62 60 C68 38, 102 36, 122 56 C134 68, 128 92, 112 108 Z"
          fill={`url(#${uid}-petal-shade)`}
        />
        {/* Top-right outer petal */}
        <path
          d="M116 108 C118 82, 134 52, 162 56 C186 60, 194 94, 174 114 C160 128, 134 122, 116 108 Z"
          fill={`url(#${uid}-petal-light)`}
        />
        {/* Bottom-right outer petal */}
        <path
          d="M118 114 C142 108, 178 118, 176 146 C174 172, 140 184, 116 168 C102 158, 106 132, 118 114 Z"
          fill={`url(#${uid}-petal-shade)`}
        />
        {/* Bottom-left outer petal */}
        <path
          d="M114 116 C118 140, 116 174, 88 176 C62 178, 46 148, 62 124 C74 106, 98 108, 114 116 Z"
          fill={`url(#${uid}-petal-light)`}
        />
        {/* Mid-left outer petal */}
        <path
          d="M110 112 C94 128, 62 134, 50 112 C38 92, 54 64, 78 68 C98 72, 106 94, 110 112 Z"
          fill={`url(#${uid}-petal-light)`}
        />

        {/* 4 Mid-Layer Cupped Ruffled Petals */}
        <path
          d="M112 108 C92 98, 78 74, 94 62 C110 50, 138 58, 140 80 C142 96, 126 104, 112 108 Z"
          fill={`url(#${uid}-petal-light)`}
          stroke="#CFC3BD"
          strokeOpacity="0.55"
          strokeWidth="0.7"
        />
        <path
          d="M118 110 C130 92, 158 84, 164 104 C170 124, 152 148, 130 144 C116 142, 112 124, 118 110 Z"
          fill={`url(#${uid}-petal-shade)`}
          stroke="#CFC3BD"
          strokeOpacity="0.55"
          strokeWidth="0.7"
        />
        <path
          d="M116 116 C130 128, 136 156, 114 162 C94 168, 74 148, 82 128 C88 114, 104 112, 116 116 Z"
          fill={`url(#${uid}-petal-light)`}
          stroke="#CFC3BD"
          strokeOpacity="0.55"
          strokeWidth="0.7"
        />
        <path
          d="M110 114 C94 122, 72 114, 74 94 C76 76, 98 68, 112 82 C122 92, 118 106, 110 114 Z"
          fill={`url(#${uid}-petal-shade)`}
          stroke="#CFC3BD"
          strokeOpacity="0.55"
          strokeWidth="0.7"
        />

        {/* Inner Spiral Folded Rose Heart */}
        <path
          d="M104 92 C118 82, 138 92, 136 110 C134 126, 116 134, 102 124 C112 126, 124 118, 122 106 C120 96, 110 92, 104 92 Z"
          fill="#FFFFFF"
          stroke="#C9BCB6"
          strokeOpacity="0.65"
          strokeWidth="0.7"
        />
        <path
          d="M96 106 C94 94, 108 88, 118 96 C126 104, 122 122, 108 122 C100 122, 98 114, 104 108 C108 104, 112 106, 112 110 C110 100, 100 100, 96 106 Z"
          fill={`url(#${uid}-heart)`}
        />
      </g>

      {/* Secondary Blooming Rose (Top-Right, Overlapping Petals) */}
      <g>
        <path
          d="M180 86 C164 82, 152 64, 162 50 C172 38, 196 42, 202 58 C206 72, 194 84, 180 86 Z"
          fill={`url(#${uid}-petal-shade)`}
        />
        <path
          d="M182 86 C190 70, 210 64, 218 78 C226 92, 212 112, 194 110 C182 108, 178 96, 182 86 Z"
          fill={`url(#${uid}-petal-light)`}
        />
        <path
          d="M178 88 C186 100, 182 118, 166 118 C150 118, 142 100, 152 86 C158 76, 172 78, 178 88 Z"
          fill={`url(#${uid}-petal-light)`}
        />
        <path
          d="M170 72 C182 64, 198 72, 196 86 C194 98, 178 102, 168 92 C178 92, 184 84, 180 76 Z"
          fill="#FFFFFF"
          stroke="#CFC3BD"
          strokeOpacity="0.6"
          strokeWidth="0.65"
        />
        <path
          d="M172 80 C176 74, 186 76, 186 84 C186 90, 178 92, 174 86 Z"
          fill={`url(#${uid}-heart)`}
        />
      </g>

      {/* Third Blooming Rose (Bottom-Left, Overlapping Petals) */}
      <g>
        <path
          d="M82 184 C66 180, 56 162, 66 150 C76 138, 98 144, 102 160 C106 172, 94 182, 82 184 Z"
          fill={`url(#${uid}-petal-shade)`}
        />
        <path
          d="M84 186 C94 172, 114 168, 118 184 C122 198, 106 214, 90 210 C78 206, 78 194, 84 186 Z"
          fill={`url(#${uid}-petal-light)`}
        />
        <path
          d="M80 186 C82 200, 74 216, 58 212 C44 208, 42 188, 54 176 C64 168, 76 174, 80 186 Z"
          fill={`url(#${uid}-petal-light)`}
        />
        <path
          d="M72 172 C84 166, 98 174, 94 188 C90 198, 76 200, 68 190 C78 192, 84 184, 80 176 Z"
          fill="#FFFFFF"
          stroke="#CFC3BD"
          strokeOpacity="0.6"
          strokeWidth="0.65"
        />
        <path
          d="M74 180 C78 175, 86 178, 86 185 C86 190, 78 191, 75 186 Z"
          fill={`url(#${uid}-heart)`}
        />
      </g>

      {/* Unfurling Silk Rosebuds & Antique Gold Baby's-Breath Pearls */}
      <path
        d="M188 134 C200 128, 210 138, 206 152 C202 162, 186 162, 178 152 C172 144, 178 136, 188 134 Z"
        fill={`url(#${uid}-petal-light)`}
        stroke="#CFC3BD"
        strokeOpacity="0.55"
        strokeWidth="0.7"
      />
      <path
        d="M186 138 C194 136, 198 144, 194 150 C190 154, 182 150, 186 138 Z"
        fill={`url(#${uid}-heart)`}
      />
      <path
        d="M46 102 C56 96, 66 104, 64 116 C62 126, 48 126, 42 116 C38 110, 40 104, 46 102 Z"
        fill={`url(#${uid}-petal-light)`}
        stroke="#CFC3BD"
        strokeOpacity="0.55"
        strokeWidth="0.7"
      />
      <circle cx="220" cy="110" r="4" fill={`url(#${uid}-goldbud)`} />
      <circle cx="152" cy="46" r="3.4" fill={`url(#${uid}-goldbud)`} />
      <circle cx="136" cy="186" r="3.8" fill={`url(#${uid}-goldbud)`} />
      <circle cx="46" cy="156" r="3.2" fill={`url(#${uid}-goldbud)`} />
      <circle cx="100" cy="42" r="2.6" fill={`url(#${uid}-goldbud)`} />
    </svg>
  );
};

/**
 * Sculpted 3D Metallic Gold Royal Crown Ornament with pearl finials
 * crowning the top of the wedding invitation plaque.
 */
export const RoyalGoldCrownOrnament: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 180 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`drop-shadow-[0_10px_18px_rgba(70,50,20,0.3)] select-none pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id={`${uid}-crown`} x1="25" y1="14" x2="155" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF4CC" />
          <stop offset="28%" stopColor="#DFBE74" />
          <stop offset="65%" stopColor="#A9823C" />
          <stop offset="100%" stopColor="#72521D" />
        </linearGradient>
        <radialGradient id={`${uid}-pearl`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F5EFE7" />
          <stop offset="100%" stopColor="#C9BEB8" />
        </radialGradient>
      </defs>

      {/* Sculpted Royal Crown Body */}
      <path
        d="M34 62 L24 30 C38 38, 52 44, 62 34 L90 14 L118 34 C128 44, 142 38, 156 30 L146 62 C110 70, 70 70, 34 62 Z"
        fill={`url(#${uid}-crown)`}
        stroke="#FFF2CB"
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />
      {/* Carved Inner Filigree Arches */}
      <path
        d="M42 56 C56 44, 72 44, 90 54 C108 44, 124 44, 138 56"
        stroke="#FFF3D1"
        strokeOpacity="0.7"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Crown Base Rim */}
      <path
        d="M32 64 C68 72, 112 72, 148 64 L146 70 C110 78, 70 78, 34 70 Z"
        fill="#8A682B"
        stroke="#F6DDA0"
        strokeOpacity="0.6"
        strokeWidth="0.9"
      />
      {/* Pearl Finials & Center Gem */}
      <circle cx="90" cy="11" r="5" fill={`url(#${uid}-pearl)`} />
      <circle cx="22" cy="27" r="4.2" fill={`url(#${uid}-pearl)`} />
      <circle cx="158" cy="27" r="4.2" fill={`url(#${uid}-pearl)`} />
      <circle cx="62" cy="31" r="3.4" fill={`url(#${uid}-pearl)`} />
      <circle cx="118" cy="31" r="3.4" fill={`url(#${uid}-pearl)`} />
      <circle cx="90" cy="42" r="3.6" fill="#FFF7DC" />
    </svg>
  );
};

/**
 * Symmetrical golden arabesque ornament divider with pearl center.
 */
export const GoldArabesqueMedallionDivider: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 260 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M12 16H94C106 16 112 7 122 7C126 7 129 11 130 16C131 11 134 7 138 7C148 7 154 16 166 16H248"
      stroke="#9E7B3B"
      strokeOpacity="0.72"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M94 16C106 16 112 25 122 25C126 25 129 21 130 16C131 21 134 25 138 25C148 25 154 16 166 16"
      stroke="#C5A059"
      strokeOpacity="0.7"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path d="M130 9L135 16L130 23L125 16L130 9Z" fill="#DFBE74" stroke="#9E7B3B" strokeWidth="1" />
    <circle cx="78" cy="16" r="1.8" fill="#C5A059" />
    <circle cx="182" cy="16" r="1.8" fill="#C5A059" />
  </svg>
);


