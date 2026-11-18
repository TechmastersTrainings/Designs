import React from 'react';
import { OrnateDivider, FloralCorner, DoveEmblem, GoldCross } from './GoldOrnaments';
import { Heart } from 'lucide-react';

export const FamilySection = () => {
  return (
    <section className="invitation-section light" id="family">
      <div className="section-container">
        <div className="family-card">
          <div className="verse-inner-frame" />
          <FloralCorner position="top-left" size={50} className="envelope-corner top-left" />
          <FloralCorner position="top-right" size={50} className="envelope-corner top-right" />
          <FloralCorner position="bottom-left" size={50} className="envelope-corner bottom-left" />
          <FloralCorner position="bottom-right" size={50} className="envelope-corner bottom-right" />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 8 }}>
            <DoveEmblem size={22} />
            <GoldCross size={24} />
            <DoveEmblem size={22} style={{ transform: 'scaleX(-1)' }} />
          </div>

          <div className="section-badge light-theme">
            <span>From Our Hearts</span>
          </div>

          <h2 className="section-title dark-text">A Warm Invitation From Our Family</h2>

          <blockquote className="family-pleasure-quote">
            “Your presence will make our celebration even more special. We request the pleasure of your company with family and friends to bless our beloved child.”
          </blockquote>

          <OrnateDivider maxWidth={340} />

          {/* Family Structure Cards */}
          <div className="family-members-grid">
            <div className="family-role-card">
              <div className="family-role-tag">Cordially Inviting</div>
              <div className="family-person-names">
                Mrs. Muttamma &amp; Mr. Arjun Rao Halesh
              </div>
              <div style={{ fontSize: '13px', color: 'var(--charcoal-muted)', marginTop: '4px', fontStyle: 'italic' }}>
                R/o. Masimad, Tq. Bhalki, Dist. Bidar
              </div>
            </div>

            <div className="family-role-card">
              <div className="family-role-tag">Beloved Parents</div>
              <div className="family-person-names">
                Mrs. Reshma &amp; Mr. Pradeep Halesh
              </div>
              <div style={{ fontSize: '13px', color: 'var(--charcoal-muted)', marginTop: '4px', fontStyle: 'italic' }}>
                Cherishing the gift of baby Halesh
              </div>
            </div>
          </div>

          {/* With Best Compliments */}
          <div className="family-compliments-box">
            <div className="family-compliments-title">With Best Compliments From</div>
            <div className="family-names-list">
              Kum. Deepthi, Shreya, Rishita &amp; Mahima Rani
            </div>
            <div className="family-all-relatives">
              ALL HALESH FAMILY, RELATIVES &amp; FRIENDS
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 18, color: 'var(--burgundy-deep)' }}>
              <Heart size={16} fill="var(--burgundy-deep)" />
              <span style={{ fontFamily: 'var(--font-editorial)', fontSize: '17px', fontStyle: 'italic' }}>
                Forever united in love, faith and prayer
              </span>
              <Heart size={16} fill="var(--burgundy-deep)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

