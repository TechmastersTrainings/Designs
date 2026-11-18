import React, { useState, useEffect } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { BibleVerse } from './components/BibleVerse';
import { EventDetails } from './components/EventDetails';
import { Countdown } from './components/Countdown';
import { FamilySection } from './components/FamilySection';
import { PhotoGallery } from './components/PhotoGallery';
import { VenueSection } from './components/VenueSection';
import { RSVPSection } from './components/RSVPSection';
import { BlessingsWall } from './components/BlessingsWall';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { Lightbox } from './components/Lightbox';

import './styles/variables.css';
import './styles/components.css';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Initial starter blessings from church & family
  const defaultBlessings = [
    {
      name: 'Rev. R. L. David & Church Family',
      text: 'May the Lord bless little Halesh, make His face shine upon her, and grant her peace, wisdom and abundant grace throughout her life.',
      date: 'Nov 18, 2026',
    },
    {
      name: 'Rev. Samuel Sathyamithra',
      text: 'Children are truly God’s richest inheritance. Praying for divine health, heavenly joy, and blessings upon the parents and grandparents.',
      date: 'Nov 17, 2026',
    },
    {
      name: 'Deepthi, Shreya & Rishita',
      text: 'So excited to celebrate our precious darling baby! Sending you endless cuddles, love, and sweet prayers.',
      date: 'Nov 16, 2026',
    },
  ];

  const [blessings, setBlessings] = useState(() => {
    try {
      const saved = localStorage.getItem('halesh_blessings');
      return saved ? JSON.parse(saved) : defaultBlessings;
    } catch {
      return defaultBlessings;
    }
  });

  const handleAddBlessing = (newBlessing) => {
    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem('halesh_blessings', JSON.stringify(updated));
    } catch {
      // Ignore localStorage errors
    }
  };

  const handleOpenPhoto = (src, caption) => {
    setLightboxImage({ src, caption });
  };

  const handleClosePhoto = () => {
    setLightboxImage(null);
  };

  return (
    <div className="main-experience">
      {/* 1. Opening Fullscreen Envelope Experience */}
      <OpeningEnvelope
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Main Website Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onPhotoClick={handleOpenPhoto} />

        {/* 3. Sacred Bible Verse Section */}
        <BibleVerse />

        {/* 4. Event & Ceremony Details */}
        <EventDetails />

        {/* 5. Live Countdown Section */}
        <Countdown />

        {/* 6. Family Invitation Section */}
        <FamilySection />

        {/* 7. Keepsake Photo Gallery */}
        <PhotoGallery onPhotoClick={handleOpenPhoto} />

        {/* 8. Celebration Venue & Directions */}
        <VenueSection />

        {/* 9. RSVP & WhatsApp Confirmation */}
        <RSVPSection onAddBlessing={handleAddBlessing} />

        {/* 10. Interactive Blessings Wall */}
        <BlessingsWall blessings={blessings} onAddBlessing={handleAddBlessing} />

        {/* 11. Reverent Closing Footer */}
        <Footer />
      </main>

      {/* Floating Background Hymn Player */}
      <MusicPlayer autoStartRequested={isEnvelopeOpen} />

      {/* Image Lightbox Modal */}
      <Lightbox image={lightboxImage} onClose={handleClosePhoto} />
    </div>
  );
}
