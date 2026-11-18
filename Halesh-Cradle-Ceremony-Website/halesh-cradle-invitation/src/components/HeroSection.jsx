import React from 'react';
import { GoldCross, DoveEmblem, OrnateDivider, FloralCorner } from './GoldOrnaments';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const HeroSection = ({ onPhotoClick }) => {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Halesh's Cradle Ceremony");
    const details = encodeURIComponent(
      "You are warmly invited to celebrate the Cradle Ceremony of baby Halesh with the Halesh family at Eden Garden Function Hall, Bidar."
    );
    const location = encodeURIComponent("Eden Garden Function Hall, Mailoor, Near GND College, Bidar, Karnataka");
    const dates = "20261122T091000Z/20261122T123000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-background-pattern" />

      <div className="hero-card">
        {/* 5-Color Palette Spectrum Top Ribbon */}
        <div className="hero-spectrum-top" />

        <div className="hero-inner-border" />
        <FloralCorner position="top-left" size={48} className="envelope-corner top-left" />
        <FloralCorner position="top-right" size={48} className="envelope-corner top-right" />
        <FloralCorner position="bottom-left" size={48} className="envelope-corner bottom-left" />
        <FloralCorner position="bottom-right" size={48} className="envelope-corner bottom-right" />

        {/* Reverent Emblems */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 8 }}>
          <DoveEmblem size={26} />
          <GoldCross size={28} />
          <DoveEmblem size={26} style={{ transform: 'scaleX(-1)' }} />
        </div>

        <div className="hero-kicker">A Sacred Celebration of Life &amp; Grace</div>

        {/* Baby Name in High-Resolution Bold & Crisp Typography */}
        <h1 className="hero-main-name">Halesh</h1>

        {/* Occasion Label */}
        <div className="hero-ceremony-label">Cradle Ceremony</div>

        {/* Arched Gold Frame for Baby Photo */}
        <div className="hero-portrait-wrapper">
          <div
            className="hero-portrait-frame"
            onClick={() => onPhotoClick('/halesh-baby.jpg', 'Baby Halesh — Cradle Ceremony Celebration')}
            role="button"
            tabIndex={0}
            title="Click to view full portrait"
          >
            <div className="hero-portrait-inner">
              <img
                src="/halesh-baby.jpg"
                alt="Baby Halesh in traditional ceremonial attire"
                className="hero-portrait-img"
              />
            </div>
            <div className="hero-portrait-tag">✦ Baby Halesh ✦</div>
          </div>
        </div>

        {/* Welcoming Blessings Quote */}
        <blockquote className="hero-blessing-quote">
          “With grateful hearts and God's abundant blessings, we invite you to celebrate a beautiful new beginning with our family.”
        </blockquote>

        <OrnateDivider maxWidth={360} />

        {/* Family Hosting Details */}
        <div className="hero-parents-hosting">
          <div className="hero-host-label">Cordially Hosted By</div>
          <div className="hero-host-names">
            Mrs. Muttamma &amp; Mr. Arjun Rao Halesh
          </div>
          <div className="hero-grand-names">
            Beloved Granddaughter of Mrs. Reshma &amp; Mr. Pradeep Halesh
          </div>
        </div>

        {/* Date & Time Pill */}
        <div className="hero-date-pill">
          <span>Sunday, 22 November 2026</span>
          <span>•</span>
          <span>2:40 PM IST</span>
        </div>

        {/* Quick Action Buttons */}
        <div className="hero-actions">
          <button
            type="button"
            className="hero-cta-btn primary"
            onClick={handleAddToCalendar}
            aria-label="Add Cradle Ceremony to Calendar"
          >
            <Calendar size={15} />
            <span>Add to Calendar</span>
          </button>

          <a href="#event-details" className="hero-cta-btn secondary">
            <Clock size={15} />
            <span>Ceremony Schedule</span>
          </a>

          <a href="#event-details" className="hero-cta-btn secondary">
            <MapPin size={15} />
            <span>Venue &amp; Map</span>
          </a>
        </div>
      </div>
    </section>
  );
};
