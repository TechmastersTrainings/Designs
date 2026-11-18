import React, { useState } from 'react';
import { GoldCross, FloralCorner, WaxSeal } from './GoldOrnaments';
import '../styles/envelope.css';

export const OpeningEnvelope = ({ isOpen, onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  // 5-Color celebration particles from palette
  const particles = Array.from({ length: 26 }).map((_, i) => ({
    id: i,
    left: `${(i * 3.8 + 2) % 96}%`,
    delay: `${(i * 0.25) % 3.5}s`,
    duration: `${2.8 + (i % 4) * 0.5}s`,
    size: `${3 + (i % 4) * 2}px`,
    isMint: i % 3 === 0,
  }));

  return (
    <aside
      className={`envelope-screen ${isOpen ? 'opened' : ''}`}
      aria-label="Invitation Envelope Screen"
    >
      {/* 5-Color Top Spectrum Ribbon */}
      <div className="envelope-spectrum-ribbon" />

      {/* Outer Ornamental Frame */}
      <div className="envelope-frame-border" />
      <div className="envelope-frame-inner" />

      {/* 4 Corner Flourishes */}
      <FloralCorner position="top-left" size={60} className="envelope-corner top-left" />
      <FloralCorner position="top-right" size={60} className="envelope-corner top-right" />
      <FloralCorner position="bottom-left" size={60} className="envelope-corner bottom-left" />
      <FloralCorner position="bottom-right" size={60} className="envelope-corner bottom-right" />

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className={p.isMint ? 'mint-particle' : 'gold-particle'}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="envelope-content">
        {/* Subtle Christian Cross */}
        <div style={{ marginBottom: 12 }}>
          <GoldCross size={30} />
        </div>

        {/* Text Eyebrow */}
        <div className="envelope-eyebrow">
          <span>✦</span>
          <span>A Special Invitation</span>
          <span>✦</span>
        </div>

        {/* Heading */}
        <h1 className="envelope-title">The Cradle Ceremony</h1>
        <p className="envelope-subtitle">
          You are cordially invited to celebrate a precious new beginning with our family
        </p>

        {/* 3D Interactive Envelope */}
        <div
          className={`envelope-wrapper ${isAnimating ? 'is-opening' : ''}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpen()}
          aria-label="Click to open the invitation letter"
        >
          <div className="envelope-body">
            <div className="envelope-foil-border" />

            {/* Letter Inside */}
            <div className="letter-card">
              <div className="letter-spectrum-strip" />
              <div className="letter-card-border" />
              <div className="letter-monogram">✦ ✝ ✦</div>
              <div className="letter-name">Halesh</div>
              <div className="letter-tag">Cradle Ceremony</div>
              <div className="letter-date">Sunday · 22 November 2026</div>
            </div>

            {/* Envelope Folds */}
            <div className="envelope-left-fold" />
            <div className="envelope-right-fold" />
            <div className="envelope-bottom-fold" />
            <div className="envelope-top-flap" />

            {/* Wax Seal with Christian Cross & Monogram */}
            <div className={`wax-seal-wrapper ${isAnimating ? 'animating' : ''}`}>
              <WaxSeal size={86} onClick={handleOpen} />
            </div>
          </div>
        </div>

        {/* High-Resolution Action Button */}
        <button
          type="button"
          className="open-invite-btn"
          onClick={handleOpen}
          aria-label="Open your invitation"
        >
          <GoldCross size={16} />
          <span>OPEN YOUR INVITATION</span>
          <GoldCross size={16} />
        </button>

        <div className="envelope-hint">
          <span>Tap wax seal or button to unseal</span>
        </div>
      </div>
    </aside>
  );
};
