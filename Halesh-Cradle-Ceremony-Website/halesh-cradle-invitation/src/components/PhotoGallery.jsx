import React from 'react';
import { OrnateDivider, GoldCross } from './GoldOrnaments';
import { Maximize2, Sparkles } from 'lucide-react';

export const PhotoGallery = ({ onPhotoClick }) => {
  const photos = [
    {
      id: 1,
      src: '/halesh-baby.jpg',
      alt: 'Baby Halesh in traditional ceremonial attire',
      title: 'Our Precious Blessing — Baby Halesh',
      subtitle: 'The little joy who fills our family with pure smiles and God’s grace',
      tag: 'Original Portrait',
    },
    {
      id: 2,
      src: '/invitation-card.jpg',
      alt: 'Original printed cradle ceremony invitation keepsake card',
      title: 'The Family Invitation Card Keepsake',
      subtitle: 'Original printed invitation featuring pastoral blessings and family dedications',
      tag: 'Heirloom Keepsake',
    },
  ];

  return (
    <section className="invitation-section light" id="gallery">
      <div className="section-container">
        <header className="section-header">
          <div className="section-badge light-theme">
            <GoldCross size={16} />
            <span>Cherished Memories</span>
            <GoldCross size={16} />
          </div>
          <h2 className="section-title dark-text">Keepsakes &amp; Portraits</h2>
          <p className="section-subtitle">
            A glimpse into the joy and gratitude that fills our home as we celebrate little Halesh.
          </p>
          <OrnateDivider maxWidth={300} />
        </header>

        <div className="gallery-grid">
          {photos.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onPhotoClick(item.src, item.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPhotoClick(item.src, item.title)}
            >
              <div className="gallery-image-frame">
                <img src={item.src} alt={item.alt} className="gallery-image" loading="lazy" />
                <div className="gallery-zoom-badge">
                  <Maximize2 size={13} />
                  <span>Enlarge</span>
                </div>
              </div>

              <div className="gallery-item-caption">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '11px',
                    fontFamily: 'var(--font-ceremony)',
                    color: 'var(--gold-antique)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: 4,
                  }}
                >
                  <Sparkles size={12} />
                  <span>{item.tag}</span>
                </div>
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
