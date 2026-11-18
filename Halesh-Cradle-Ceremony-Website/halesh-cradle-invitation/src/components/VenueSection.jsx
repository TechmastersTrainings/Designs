import React from 'react';
import { OrnateDivider, GoldCross } from './GoldOrnaments';
import { MapPin, Navigation, Car, Landmark } from 'lucide-react';

export const VenueSection = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Eden+Garden+Function+Hall+Mailoor+Near+GND+College+Bidar+Karnataka';

  return (
    <section className="invitation-section dark" id="venue">
      <div className="section-container">
        <header className="section-header">
          <div className="section-badge">
            <GoldCross size={16} />
            <span>Sacred Destination</span>
            <GoldCross size={16} />
          </div>
          <h2 className="section-title gold-accent">The Celebration Venue</h2>
          <p className="section-subtitle">
            We eagerly await welcoming you into a serene and celebratory atmosphere.
          </p>
          <OrnateDivider maxWidth={300} />
        </header>

        <div className="venue-card">
          <div className="venue-layout">
            <div className="venue-text-content">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--gold-champagne)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-ceremony)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                <Landmark size={16} />
                <span>Function Hall &amp; Banquet</span>
              </div>

              <h3 className="venue-title-text">Eden Garden Function Hall</h3>

              <p className="venue-address-line">
                Mailoor, Near GND College,
                <br />
                Bidar, Karnataka — 585403
              </p>

              <div className="venue-landmark-pill">
                <MapPin size={16} />
                <span>Landmark: Right next to Guru Nanak Dev (GND) Engineering College</span>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', color: '#D3C9B8' }}>
                  <Car size={16} color="var(--gold-champagne)" />
                  <span>Ample Car &amp; Two-Wheeler Parking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', color: '#D3C9B8' }}>
                  <Navigation size={16} color="var(--gold-champagne)" />
                  <span>Easy highway &amp; ring-road access</span>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-button"
              >
                <Navigation size={16} />
                <span>Get Directions On Google Maps</span>
              </a>
            </div>

            {/* Map Preview Embed */}
            <div className="venue-map-preview">
              <iframe
                title="Eden Garden Function Hall Location Map"
                className="venue-map-iframe"
                src="https://maps.google.com/maps?q=Eden+Garden+Function+Hall+Mailoor+Bidar+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

