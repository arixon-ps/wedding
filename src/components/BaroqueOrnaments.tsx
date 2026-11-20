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
 * with double hairline antique gold/taupe borders.
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
            <stop offset="0%" stopColor="#F0ECE9" />
            <stop offset="50%" stopColor="#EAE6E3" />
            <stop offset="100%" stopColor="#E3DEDB" />
          </linearGradient>
        </defs>
        {/* Outer Scalloped Arabesque Arch Silhouette */}
        <path
          d="M260 12 C290 36, 332 42, 368 54 C406 66, 442 74, 468 96 C490 116, 498 136, 498 164 L498 656 C498 692, 476 716, 448 730 C420 744, 384 744, 344 744 L176 744 C136 744, 100 744, 72 730 C44 716, 22 692, 22 656 L22 164 C22 136, 30 116, 52 96 C78 74, 114 66, 152 54 C188 42, 230 36, 260 12 Z"
          fill={`url(#${uid}-plaque)`}
          stroke="#B89B62"
          strokeWidth="1.5"
        />
        {/* Inner Double Hairline Gold/Taupe Border */}
        <path
          d="M260 28 C286 50, 326 54, 360 66 C394 78, 428 84, 452 104 C472 122, 482 140, 482 168 L482 652 C482 684, 462 704, 436 716 C410 728, 376 728, 340 728 L180 728 C144 728, 110 728, 84 716 C58 704, 38 684, 38 652 L38 168 C38 140, 48 122, 68 104 C92 84, 126 78, 160 66 C194 54, 234 50, 260 28 Z"
          fill="none"
          stroke="#9E7B3B"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 560 640"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={`${uid}-plaque`} x1="0" y1="0" x2="560" y2="640" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F1EDE9" />
          <stop offset="55%" stopColor="#EAE6E3" />
          <stop offset="100%" stopColor="#E1DBD7" />
        </linearGradient>
      </defs>
      {/* Outer Arabesque Pointed-Arch Scalloped Cartouche */}
      <path
        d="M280 14 C312 44, 356 48, 392 66 C432 86, 466 94, 492 128 C518 162, 536 196, 536 244 L536 476 C536 528, 508 566, 470 590 C432 614, 384 618, 336 620 L280 626 L224 620 C176 618, 128 614, 90 590 C52 566, 24 528, 24 476 L24 244 C24 196, 42 162, 68 128 C94 94, 128 86, 168 66 C204 48, 248 44, 280 14 Z"
        fill={`url(#${uid}-plaque)`}
        stroke="#B89B62"
        strokeWidth="1.6"
      />
      {/* Inner Double Hairline Gold/Taupe Border */}
      <path
        d="M280 30 C308 58, 350 62, 384 78 C422 98, 454 106, 478 136 C502 168, 520 200, 520 246 L520 474 C520 520, 494 554, 458 576 C422 598, 378 602, 332 604 L280 610 L228 604 C182 602, 138 598, 102 576 C66 554, 40 520, 40 474 L40 246 C40 200, 58 168, 82 136 C106 106, 138 98, 176 78 C210 62, 252 58, 280 30 Z"
        fill="none"
        stroke="#9E7B3B"
        strokeOpacity="0.48"
        strokeWidth="1"
      />
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
