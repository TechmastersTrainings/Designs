import React from 'react';
import { Clock, Utensils, MapPin, Calendar, Navigation } from 'lucide-react';
import { OrnateDivider, GoldCross } from './GoldOrnaments';

export const EventDetails = () => {
  const reverends = [
    {
      name: 'Rev. R. L. David',
      church: 'Messia Methodist Church, Gandhi Nagar Colony, Mailoor',
    },
    {
      name: 'Rev. Samuel Sathyamithra',
      church: 'Emmanuel Methodist Church, Star Colony, Mailoor',
    },
    {
      name: 'Rev. Jayasheel',
      church: 'Y.B. BFC Church, Masimad',
    },
  ];

  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Eden+Garden+Function+Hall+Mailoor+Near+GND+College+Bidar+Karnataka';

  return (
    <section className="invitation-section light" id="event-details" style={{ paddingTop: 20 }}>
      <div className="section-container">
        <header className="section-header">
          <div className="section-badge light-theme">
            <span>The Holy Celebration</span>
          </div>
          <h2 className="section-title dark-text">Program &amp; Ceremony Schedule</h2>
          <p className="section-subtitle">
            An auspicious day of joy, prayer and thanksgiving in the presence of God.
          </p>
          <OrnateDivider maxWidth={280} />
        </header>

        {/* 2 Feature Information Cards Instead of 4 Cards */}
        <div className="two-cards-grid">
          {/* CARD 1: CEREMONY & FELLOWSHIP SCHEDULE */}
          <article className="two-card schedule-card">
            <div className="two-card-header">
              <div className="two-card-icon-circle">
                <Calendar size={24} />
              </div>
              <div>
                <span className="two-card-eyebrow">Auspicious Schedule</span>
                <h3 className="two-card-title">Sunday, 22 November 2026</h3>
              </div>
            </div>

            <p className="two-card-motto">
              An auspicious day of joy, prayer and thanksgiving in the presence of God.
            </p>

            <div className="two-card-divider" />

            <div className="schedule-events-list">
              {/* Event 1: Ceremony Time */}
              <div className="schedule-event-row">
                <div className="schedule-event-icon">
                  <Clock size={20} />
                </div>
                <div className="schedule-event-info">
                  <div className="schedule-label">Ceremony Time</div>
                  <div className="schedule-time-badge">1:45 PM Onwards</div>
                  <p className="schedule-desc">
                    Holy cradle blessing, sacred hymns, dedication prayers and fellowship.
                  </p>
                </div>
              </div>

              {/* Event 2: Fellowship Lunch */}
              <div className="schedule-event-row">
                <div className="schedule-event-icon">
                  <Utensils size={20} />
                </div>
                <div className="schedule-event-info">
                  <div className="schedule-label">Fellowship Lunch</div>
                  <div className="schedule-time-badge">2:40 PM Onwards</div>
                  <p className="schedule-desc">
                    Please join us to share in a delightful festive meal with our family.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2: CELEBRATION VENUE */}
          <article className="two-card venue-card-compact">
            <div className="two-card-header">
              <div className="two-card-icon-circle">
                <MapPin size={24} />
              </div>
              <div>
                <span className="two-card-eyebrow">Celebration Destination</span>
                <h3 className="two-card-title">Celebration Venue</h3>
              </div>
            </div>

            <div className="venue-highlight-box">
              <h4 className="venue-name-heading">Eden Garden Function Hall</h4>
              <p className="venue-address-text">
                Mailoor, Near GND College, Bidar, Karnataka. Valet and guest parking available.
              </p>
            </div>

            <div className="venue-map-embed-wrapper">
              <iframe
                title="Google Maps Location for Eden Garden Function Hall"
                src="https://maps.google.com/maps?q=Eden+Garden+Function+Hall+Mailoor+Bidar+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="170"
                style={{ border: 0, borderRadius: 10 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="two-card-action-btn"
            >
              <Navigation size={16} />
              <span>Get Directions on Google Maps</span>
            </a>
          </article>
        </div>

        {/* Clergy & Prayers Section */}
        <div className="clergy-container">
          <div className="clergy-badge">
            <GoldCross size={18} />
            <span>Prayer &amp; Pastoral Blessings Officiated By</span>
            <GoldCross size={18} />
          </div>

          <div className="clergy-grid">
            {reverends.map((rev, index) => (
              <div key={index} className="clergy-item">
                <div className="clergy-name">{rev.name}</div>
                <div className="clergy-church">{rev.church}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
