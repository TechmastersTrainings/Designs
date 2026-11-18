import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = ({ autoStartRequested }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create HTML5 Audio instance with user-provided audio track
    const audio = new Audio('./music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  // When user clicks open envelope, auto-start playback
  useEffect(() => {
    if (autoStartRequested && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          // Autoplay policy handling
          console.log('Audio playback waiting for interaction:', err);
        });
    }
  }, [autoStartRequested]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Audio play error:', err));
    }
  };

  return (
    <button
      type="button"
      className={`floating-audio-pill ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      title={isPlaying ? 'Mute celebration music' : 'Play celebration music'}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      <div className="audio-soundwave">
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
      </div>

      <span>{isPlaying ? 'Music Playing' : 'Play Music'}</span>

      {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  );
};
