import React, { useState } from 'react';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { BibleVerse } from './components/BibleVerse';
import { EventDetails } from './components/EventDetails';
import { Countdown } from './components/Countdown';
import { FamilySection } from './components/FamilySection';
import { PhotoGallery } from './components/PhotoGallery';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { Lightbox } from './components/Lightbox';

import './styles/variables.css';
import './styles/components.css';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

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

        {/* 3. Sacred Bible Verse Section with Kannada Reflection */}
        <BibleVerse />

        {/* 4. Event & Ceremony Details (2 Cards) */}
        <EventDetails />

        {/* 5. Live Countdown Section (Guaranteed Single Row on All Devices) */}
        <Countdown />

        {/* 6. Family Invitation Section */}
        <FamilySection />

        {/* 7. Keepsake Photo Gallery */}
        <PhotoGallery onPhotoClick={handleOpenPhoto} />

        {/* 8. Reverent Closing Footer */}
        <Footer />
      </main>

      {/* Floating Background Music Player */}
      <MusicPlayer autoStartRequested={isEnvelopeOpen} />

      {/* Image Lightbox Modal */}
      <Lightbox image={lightboxImage} onClose={handleClosePhoto} />
    </div>
  );
}
