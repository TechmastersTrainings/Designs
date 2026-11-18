import React, { useState, useEffect } from 'react';
import { OrnateDivider, GoldCross } from './GoldOrnaments';
import { Sparkles } from 'lucide-react';

export const Countdown = () => {
  const targetTime = new Date('2026-11-22T14:40:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCelebration: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCelebration: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCelebration: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const units = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section className="invitation-section dark" id="countdown">
      <div className="section-container">
        <div className="countdown-box">
          {/* Top 5-Color Spectrum */}
          <div className="hero-spectrum-top" />

          <div className="section-badge">
            <GoldCross size={16} />
            <span>Awaiting The Sacred Hour</span>
            <GoldCross size={16} />
          </div>

          <h2 className="section-title gold-accent">Counting Every Blessed Moment</h2>

          <p className="section-subtitle">
            Until we gather together in love and fellowship for this joyful celebration.
          </p>

          <OrnateDivider maxWidth={320} />

          {timeLeft.isCelebration ? (
            <div style={{ padding: '24px 10px', textAlign: 'center' }}>
              <div style={{ color: 'var(--palette-gold)', marginBottom: 12 }}>
                <Sparkles size={40} style={{ margin: '0 auto' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 5vw, 36px)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                }}
              >
                The Cradle Ceremony Celebration Is Here!
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: '#D3C9B8',
                  marginTop: 8,
                  fontWeight: 500,
                }}
              >
                May God shower His richest blessings upon little Halesh today and always.
              </p>
            </div>
          ) : (
            <>
              <div className="countdown-grid" role="timer" aria-label="Countdown to ceremony">
                {units.map((u, idx) => (
                  <div key={idx} className="countdown-unit">
                    <span className="countdown-number">{u.value}</span>
                    <span className="countdown-label">{u.label}</span>
                  </div>
                ))}
              </div>

              <div className="countdown-target-note">
                Sunday, 22 November 2026 · 2:40 PM IST · Eden Garden Function Hall, Bidar
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
