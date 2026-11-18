import React from 'react';
import { Calendar, Clock, Utensils, MapPin, Church } from 'lucide-react';
import { OrnateDivider, GoldCross } from './GoldOrnaments';

export const EventDetails = () => {
  const eventCards = [
    {
      id: 'date',
      icon: <Calendar size={26} />,
      title: 'Sacred Date',
      primary: 'Sunday, 22 Nov 2026',
      desc: 'An auspicious day of joy, prayer and thanksgiving in the presence of God.',
    },
    {
      id: 'time',
      icon: <Clock size={26} />,
      title: 'Ceremony Time',
      primary: '2:40 PM Onwards',
      desc: 'Holy cradle blessing, sacred hymns, dedication prayers and fellowship.',
    },
    {
      id: 'lunch',
      icon: <Utensils size={26} />,
      title: 'Fellowship Lunch',
      primary: '2:00 PM Onwards',
      desc: 'Please join us beforehand to share in a delightful festive meal with our family.',
    },
    {
      id: 'venue',
      icon: <MapPin size={26} />,
      title: 'Celebration Venue',
      primary: 'Eden Garden Function Hall',
      desc: 'Mailoor, Near GND College, Bidar, Karnataka. Valet and guest parking available.',
    },
  ];

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

  return (
    <section className="invitation-section light" id="event-details" style={{ paddingTop: 20 }}>
      <div className="section-container">
        <header className="section-header">
          <div className="section-badge light-theme">
            <span>The Holy Celebration</span>
          </div>
          <h2 className="section-title dark-text">Program &amp; Ceremony Schedule</h2>
          <p className="section-subtitle">
            We cordially request your gracious presence to celebrate this heavenly milestone with us.
          </p>
          <OrnateDivider maxWidth={280} />
        </header>

        {/* 4 Feature Information Cards */}
        <div className="details-grid">
          {eventCards.map((card) => (
            <article key={card.id} className="detail-card">
              <div className="detail-icon-circle">{card.icon}</div>
              <div className="detail-title">{card.title}</div>
              <h3 className="detail-primary">{card.primary}</h3>
              <p className="detail-desc">{card.desc}</p>
            </article>
          ))}
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
