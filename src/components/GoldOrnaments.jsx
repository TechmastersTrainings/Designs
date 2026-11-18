import React from 'react';

// Elegant Christian Cross with Gold Gradient
export const GoldCross = ({ size = 32, className = '' }) => (
  <svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 32 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crossGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9EDB8" />
        <stop offset="35%" stopColor="#D6B875" />
        <stop offset="70%" stopColor="#B89650" />
        <stop offset="100%" stopColor="#8E6E2F" />
      </linearGradient>
      <filter id="crossGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#B89650" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#crossGlow)">
      {/* Vertical beam */}
      <path
        d="M 16 2 L 16 40"
        stroke="url(#crossGoldGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Horizontal beam */}
      <path
        d="M 7 13 L 25 13"
        stroke="url(#crossGoldGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Center diamond/radiance */}
      <circle cx="16" cy="13" r="2.2" fill="#FFF9ED" stroke="url(#crossGoldGrad)" strokeWidth="1" />
      {/* Delicate end finials */}
      <circle cx="16" cy="2" r="1.2" fill="url(#crossGoldGrad)" />
      <circle cx="16" cy="40" r="1.2" fill="url(#crossGoldGrad)" />
      <circle cx="7" cy="13" r="1.2" fill="url(#crossGoldGrad)" />
      <circle cx="25" cy="13" r="1.2" fill="url(#crossGoldGrad)" />
    </g>
  </svg>
);

// Gentle Dove of Peace & Blessings
export const DoveEmblem = ({ size = 36, color = '#D6B875', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="doveGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9ED" />
        <stop offset="40%" stopColor="#D6B875" />
        <stop offset="100%" stopColor="#B89650" />
      </linearGradient>
    </defs>
    {/* Stylized Holy Dove */}
    <path
      d="M12 28C10 24 13 18 19 16C23 14.5 28 15 32 12C33 11 35 9 37 10C38 10.5 38 12 37 13C36 14 34 16 35 18C36 21 38 23 40 24C36 26 31 25 27 24C23 23 19 25 16 28L12 28Z"
      fill="url(#doveGold)"
      opacity="0.95"
    />
    {/* Wing */}
    <path
      d="M19 16C20 10 25 6 32 5C28 10 26 14 24 18C21 17.5 20 16.5 19 16Z"
      fill="url(#doveGold)"
      opacity="0.85"
    />
    {/* Olive branch */}
    <path
      d="M37 10C39 8 43 9 44 8M41 8.5C41 7.5 42 6.5 43 7"
      stroke="#D6B875"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Luxury Ornamental Divider
export const OrnateDivider = ({ width = '100%', maxWidth = 420, className = '' }) => (
  <div
    className={`ornate-divider ${className}`}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      width,
      maxWidth,
      margin: '20px auto',
    }}
    aria-hidden="true"
  >
    <div
      style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(214, 184, 117, 0.7))',
      }}
    />
    <svg width="38" height="18" viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9EDB8" />
          <stop offset="50%" stopColor="#D6B875" />
          <stop offset="100%" stopColor="#B89650" />
        </linearGradient>
      </defs>
      {/* Central motif */}
      <circle cx="19" cy="9" r="2.8" fill="url(#divGold)" />
      <circle cx="19" cy="9" r="5" stroke="url(#divGold)" strokeWidth="0.8" strokeDasharray="1.5,1.5" />
      <path d="M12 9 C15 7, 16 9, 16 9 C16 9, 15 11, 12 9" fill="url(#divGold)" />
      <path d="M26 9 C23 7, 22 9, 22 9 C22 9, 23 11, 26 9" fill="url(#divGold)" />
      <circle cx="9" cy="9" r="1.2" fill="url(#divGold)" />
      <circle cx="29" cy="9" r="1.2" fill="url(#divGold)" />
    </svg>
    <div
      style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(90deg, rgba(214, 184, 117, 0.7), transparent)',
      }}
    />
  </div>
);

// Botanical Corner Flourish
export const FloralCorner = ({ position = 'top-left', size = 64, className = '' }) => {
  const transforms = {
    'top-left': 'none',
    'top-right': 'scaleX(-1)',
    'bottom-left': 'scaleY(-1)',
    'bottom-right': 'scale(-1, -1)',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: transforms[position] || 'none',
        display: 'block',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flrGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9EDB8" />
          <stop offset="50%" stopColor="#D6B875" />
          <stop offset="100%" stopColor="#B89650" />
        </linearGradient>
      </defs>
      {/* Outer corner frame border */}
      <path d="M 4 4 L 4 56 M 4 4 L 56 4" stroke="url(#flrGold)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 8 8 L 8 40 M 8 8 L 40 8" stroke="url(#flrGold)" strokeWidth="0.6" strokeDasharray="2,2" />
      {/* Delicate floral scroll */}
      <path
        d="M 12 12 Q 28 14 36 26 Q 42 34 38 46 Q 34 52 24 48 Q 16 44 22 32 Q 26 24 40 22"
        stroke="url(#flrGold)"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Little buds / leaves */}
      <path d="M 28 14 Q 30 8 36 10 Q 34 16 28 14 Z" fill="url(#flrGold)" opacity="0.8" />
      <path d="M 14 28 Q 8 30 10 36 Q 16 34 14 28 Z" fill="url(#flrGold)" opacity="0.8" />
      <circle cx="4" cy="4" r="2.5" fill="url(#flrGold)" />
      <circle cx="56" cy="4" r="1.5" fill="url(#flrGold)" />
      <circle cx="4" cy="56" r="1.5" fill="url(#flrGold)" />
    </svg>
  );
};

// Wax Seal Emblem Component
export const WaxSeal = ({ size = 96, onClick, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    className={`wax-seal ${className}`}
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      position: 'relative',
      padding: 0,
      background: 'transparent',
      cursor: 'pointer',
      border: 'none',
    }}
    aria-label="Wax seal - Click to open invitation"
  >
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="waxRed" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7E2442" />
          <stop offset="45%" stopColor="#641C35" />
          <stop offset="85%" stopColor="#451224" />
          <stop offset="100%" stopColor="#2D0B17" />
        </radialGradient>
        <linearGradient id="waxGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2C6" />
          <stop offset="40%" stopColor="#E2C582" />
          <stop offset="70%" stopColor="#B89650" />
          <stop offset="100%" stopColor="#8C6E2D" />
        </linearGradient>
        <filter id="waxShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0A221C" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
        </filter>
        <filter id="embossInner">
          <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#FFF9ED" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Irregular natural wax edges */}
      <path
        d="M 50 4 C 62 3, 76 8, 86 18 C 96 28, 98 42, 95 56 C 92 70, 84 82, 72 90 C 60 97, 44 98, 30 94 C 18 90, 8 80, 5 66 C 2 52, 5 38, 12 26 C 20 14, 34 5, 50 4 Z"
        fill="url(#waxRed)"
        filter="url(#waxShadow)"
      />
      {/* Inner debossed groove */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="#451224"
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="url(#waxGold)"
        strokeWidth="1.2"
        strokeDasharray="3, 2"
        fill="none"
        opacity="0.9"
      />

      {/* Center Embossed Emblem: Cross & Monogram H */}
      <g filter="url(#embossInner)">
        {/* Subtle cross */}
        <path d="M 50 25 L 50 75 M 36 38 L 64 38" stroke="url(#waxGold)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="38" r="3" fill="#FFF9ED" stroke="url(#waxGold)" strokeWidth="1" />
        {/* Monogram 'H' */}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="url(#waxGold)"
          fontSize="20"
          fontFamily="'Cinzel', serif"
          fontWeight="700"
          letterSpacing="1"
        >
          H
        </text>
      </g>
    </svg>
  </button>
);

