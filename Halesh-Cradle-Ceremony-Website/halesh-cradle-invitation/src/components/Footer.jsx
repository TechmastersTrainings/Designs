import React from 'react';
import { GoldCross, DoveEmblem, OrnateDivider, FloralCorner } from './GoldOrnaments';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="invitation-footer">
      <FloralCorner position="top-left" size={42} className="envelope-corner top-left" style={{ opacity: 0.4 }} />
      <FloralCorner position="top-right" size={42} className="envelope-corner top-right" style={{ opacity: 0.4 }} />

      <div className="section-container" style={{ maxWidth: 680 }}>
        {/* Reverent Emblems */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <DoveEmblem size={24} />
          <GoldCross size={26} />
          <DoveEmblem size={24} style={{ transform: 'scaleX(-1)' }} />
        </div>

        <h3 className="footer-blessing-title">With Love, Prayers &amp; Blessings</h3>

        <p className="footer-message">
          “Thank you for being a cherished part of our special day.”
        </p>

        <div className="footer-family-names">
          Mrs. Muttamma &amp; Mr. Arjun Rao Halesh
        </div>

        <div style={{ fontSize: '13px', color: '#B0A795', marginTop: '6px', fontStyle: 'italic' }}>
          Along with Mrs. Reshma &amp; Mr. Pradeep Halesh &amp; Family
        </div>

        <OrnateDivider maxWidth={280} />

        <div style={{ marginTop: 20 }}>
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              background: 'rgba(214, 184, 117, 0.15)',
              border: '1px solid rgba(214, 184, 117, 0.4)',
              color: 'var(--gold-champagne)',
              padding: '8px 18px',
              borderRadius: 50,
              fontSize: 11,
              fontFamily: 'var(--font-ceremony)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            <ArrowUp size={13} />
            <span>Back To Top</span>
          </button>
        </div>

        <div className="footer-copy">
          HALESH CRADLE CEREMONY · 22 NOVEMBER 2026 · BIDAR, KARNATAKA
        </div>
      </div>
    </footer>
  );
};
