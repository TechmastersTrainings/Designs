import React from 'react';
import { GoldCross, FloralCorner, OrnateDivider, DoveEmblem } from './GoldOrnaments';

export const BibleVerse = () => {
  return (
    <section className="invitation-section light" id="scripture">
      <div className="section-container">
        <div className="verse-card">
          <div className="verse-inner-frame" />
          <FloralCorner position="top-left" size={54} className="envelope-corner top-left" />
          <FloralCorner position="top-right" size={54} className="envelope-corner top-right" />
          <FloralCorner position="bottom-left" size={54} className="envelope-corner bottom-left" />
          <FloralCorner position="bottom-right" size={54} className="envelope-corner bottom-right" />

          {/* Reverent Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 6 }}>
            <DoveEmblem size={24} />
            <GoldCross size={26} />
            <DoveEmblem size={24} style={{ transform: 'scaleX(-1)' }} />
          </div>

          <div className="section-badge light-theme">
            <span>Holy Scripture</span>
          </div>

          {/* Sacred Scripture Text */}
          <blockquote className="verse-scripture">
            “Children are a heritage from the Lord, offspring a reward from him.”
          </blockquote>

          <div className="verse-citation">
            <span>✦</span>
            <span>Psalm 127:3</span>
            <span>✦</span>
          </div>

          <OrnateDivider maxWidth={320} />

          <p className="verse-reflection">
            Every child is a sacred promise of heaven's love and grace. Join us in surrounding our sweet baby Halesh with prayers, blessings, and thanksgiving.
          </p>
        </div>
      </div>
    </section>
  );
};
