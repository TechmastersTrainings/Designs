import React, { useState } from 'react';
import { OrnateDivider, GoldCross } from './GoldOrnaments';
import { Heart, Send, Sparkles } from 'lucide-react';

export const BlessingsWall = ({ blessings, onAddBlessing }) => {
  const [authorName, setAuthorName] = useState('');
  const [blessingText, setBlessingText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !blessingText.trim()) return;

    onAddBlessing({
      name: authorName.trim(),
      text: blessingText.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    });

    setAuthorName('');
    setBlessingText('');
  };

  return (
    <section className="invitation-section dark" id="blessings-wall">
      <div className="section-container">
        <header className="section-header">
          <div className="section-badge">
            <GoldCross size={16} />
            <span>Prayers &amp; Wishes</span>
            <GoldCross size={16} />
          </div>
          <h2 className="section-title gold-accent">The Blessings Wall</h2>
          <p className="section-subtitle">
            Shower baby Halesh with your heavenly prayers, love, and sweet wishes.
          </p>
          <OrnateDivider maxWidth={320} />
        </header>

        <div className="blessings-card">
          {/* Quick blessing input form */}
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: 620,
              margin: '0 auto 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
              <input
                type="text"
                placeholder="Your Name (e.g. Samuel Uncle &amp; Family)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="form-input"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                }}
                required
              />
              <textarea
                placeholder="Write a sweet prayer or blessing for baby Halesh..."
                rows="2"
                value={blessingText}
                onChange={(e) => setBlessingText(e.target.value)}
                className="form-textarea"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="hero-cta-btn primary"
              style={{
                alignSelf: 'center',
                cursor: 'pointer',
              }}
            >
              <Sparkles size={15} />
              <span>Leave A Blessing</span>
            </button>
          </form>

          {/* List of guest blessings */}
          <div className="blessings-list">
            {blessings.map((b, idx) => (
              <div key={idx} className="blessing-bubble">
                <div className="blessing-author">
                  <span>{b.name}</span>
                  <Heart size={14} fill="var(--gold-champagne)" color="var(--gold-champagne)" />
                </div>
                <p className="blessing-text">“{b.text}”</p>
                <div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
                  <span className="blessing-time">{b.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

