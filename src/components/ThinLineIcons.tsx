import React from 'react';

interface IconProps {
  className?: string;
}

/**
 * Self-drawing gold intertwined wedding rings (stroke: #9E7B3B, strokeWidth: 1.5).
 */
export const IntertwinedRingsDrawIcon: React.FC<IconProps> = ({ className = 'w-24 h-16' }) => (
  <svg
    viewBox="0 0 120 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <circle
      cx="47"
      cy="42"
      r="17"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
    />
    <circle
      cx="73"
      cy="42"
      r="17"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '180ms' }}
    />
    <path
      d="M73 11L80 18L73 25L66 18L73 11Z"
      stroke="#9E7B3B"
      strokeWidth="1.4"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '320ms' }}
    />
    <path
      d="M73 5V8M85 11L82.5 13.5M61 11L63.5 13.5"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '440ms' }}
    />
  </svg>
);

export const CalendarDrawIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <rect
      x="7"
      y="10"
      width="34"
      height="30"
      rx="4"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M7 19H41"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '180ms' }}
    />
    <path
      d="M16 6V13M32 6V13"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '260ms' }}
    />
    <path
      d="M17 26H17.2M24 26H24.2M31 26H31.2M17 33H17.2M24 33H24.2"
      stroke="#9E7B3B"
      strokeWidth="2.4"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '340ms' }}
    />
  </svg>
);

export const ClockDrawIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <circle
      cx="24"
      cy="24"
      r="17"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M24 14V24L30.5 28"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '220ms' }}
    />
  </svg>
);

export const LocationPinDrawIcon: React.FC<IconProps> = ({ className = 'w-11 h-11' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M24 42C24 42 37 29.8 37 19.5C37 12.0442 31.1797 6 24 6C16.8203 6 11 12.0442 11 19.5C11 29.8 24 42 24 42Z"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
    />
    <circle
      cx="24"
      cy="19.5"
      r="5"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '220ms' }}
    />
  </svg>
);

export const GoldFlourishDrawDivider: React.FC<IconProps> = ({ className = 'w-64 h-10' }) => (
  <svg
    viewBox="0 0 280 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M14 21H104C116 21 122 10 132 10C138 10 140 16 140 21C140 16 142 10 148 10C158 10 164 21 176 21H266"
      stroke="#9E7B3B"
      strokeWidth="1.4"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M104 21C116 21 122 32 132 32C138 32 140 26 140 21C140 26 142 32 148 32C158 32 164 21 176 21"
      stroke="#9E7B3B"
      strokeWidth="1.4"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '200ms' }}
    />
    <circle cx="140" cy="21" r="2.6" fill="#9E7B3B" />
  </svg>
);

export const VerticalGoldDivider: React.FC<IconProps> = ({ className = 'w-6 h-36' }) => (
  <svg
    viewBox="0 0 24 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 6V154" stroke="#9E7B3B" strokeOpacity="0.65" strokeWidth="1.2" />
    <path
      d="M12 68L17 80L12 92L7 80L12 68Z"
      fill="#EAE6E3"
      stroke="#9E7B3B"
      strokeWidth="1.2"
    />
    <circle cx="12" cy="80" r="2.2" fill="#9E7B3B" />
  </svg>
);

export const NoCameraDrawIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <circle
      cx="24"
      cy="24"
      r="18"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M15 20.5C15 19.3954 15.8954 18.5 17 18.5H19.5L21 16.5H27L28.5 18.5H31C32.1046 18.5 33 19.3954 33 20.5V29.5C33 30.6046 32.1046 31.5 31 31.5H17C15.8954 31.5 15 30.6046 15 29.5V20.5Z"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '160ms' }}
    />
    <circle
      cx="24"
      cy="25"
      r="3.2"
      stroke="#9E7B3B"
      strokeWidth="1.5"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '260ms' }}
    />
    <path
      d="M11.5 11.5L36.5 36.5"
      stroke="#9E7B3B"
      strokeWidth="1.6"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '340ms' }}
    />
  </svg>
);

export const BridalBouquetDrawIcon: React.FC<IconProps> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    {/* Central rose bloom */}
    <path
      d="M32 14C37 14 41 18 41 23C41 28 37 32 32 32C27 32 23 28 23 23C23 18 27 14 32 14Z"
      stroke="#9E7B3B"
      strokeWidth="1.4"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M32 19C34.5 19 36 21 35.5 23.5C35 25.5 32.5 26.5 30.5 25C29 23.8 29.5 21 31.5 20.5"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '150ms' }}
    />
    {/* Flanking botanical leaves & buds */}
    <path
      d="M23 24C16 21 12 25 14 31C18 32 22 29 23 24ZM41 24C48 21 52 25 50 31C46 32 42 29 41 24Z"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '240ms' }}
    />
    {/* Tied silk stems */}
    <path
      d="M27 32L22 50M32 32V52M37 32L42 50"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '320ms' }}
    />
    <path
      d="M24 41C28 43 36 43 40 41M25 41C21 44 19 47 21 50M39 41C43 44 45 47 43 50"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '400ms' }}
    />
  </svg>
);

export const PalaceArchDrawIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M11 47V24C11 14 21 9 28 6C35 9 45 14 45 24V47"
      stroke="#9E7B3B"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M17 47V26C17 19 23 15 28 12.5C33 15 39 19 39 26V47"
      stroke="#9E7B3B"
      strokeWidth="1.2"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '180ms' }}
    />
    <path
      d="M8 47H48M28 13V22M24 22H32L28 27L24 22Z"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '300ms' }}
    />
  </svg>
);

export const EveningLanternDrawIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M28 6V11M22 14H34L38 22V38L32 45H24L18 38V22L22 14Z"
      stroke="#9E7B3B"
      strokeWidth="1.45"
      strokeLinejoin="round"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M23 45L28 50L33 45M28 24V34M24.5 29C24.5 26.5 26 24.5 28 23.5C30 24.5 31.5 26.5 31.5 29C31.5 31.5 30 33.5 28 33.5C26 33.5 24.5 31.5 24.5 29Z"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '220ms' }}
    />
    <path
      d="M11 19L13 20M45 19L43 20M10 29H13M43 29H46"
      stroke="#9E7B3B"
      strokeWidth="1.25"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '340ms' }}
    />
  </svg>
);

export const QuillAndSealDrawIcon: React.FC<IconProps> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    {/* Envelope & letter */}
    <rect
      x="11"
      y="22"
      width="34"
      height="24"
      rx="3"
      stroke="#9E7B3B"
      strokeWidth="1.4"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M12 24L28 36L44 24"
      stroke="#9E7B3B"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '160ms' }}
    />
    {/* Delicate feather quill */}
    <path
      d="M54 10C45 11 37 18 33 27L31 35L39 33C48 29 54 20 54 10Z"
      stroke="#9E7B3B"
      strokeWidth="1.35"
      strokeLinejoin="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '280ms' }}
    />
    <path
      d="M28 40L32 34"
      stroke="#9E7B3B"
      strokeWidth="1.4"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '360ms' }}
    />
  </svg>
);

export const FloralCrownDividerDrawIcon: React.FC<IconProps> = ({
  className = 'w-56 h-10',
}) => (
  <svg
    viewBox="0 0 240 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M14 20H88C98 20 105 11 114 12C118 12.5 120 16 120 20C120 16 122 12.5 126 12C135 11 142 20 152 20H226"
      stroke="#9E7B3B"
      strokeWidth="1.3"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
    />
    <path
      d="M96 20C104 20 108 28 115 28C118 28 120 24 120 20C120 24 122 28 125 28C132 28 136 20 144 20"
      stroke="#9E7B3B"
      strokeWidth="1.25"
      strokeLinecap="round"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '180ms' }}
    />
    <path
      d="M120 11L124.5 20L120 29L115.5 20L120 11Z"
      stroke="#9E7B3B"
      strokeWidth="1.2"
      pathLength={100}
      className="svg-draw-path"
      style={{ transitionDelay: '300ms' }}
    />
  </svg>
);

