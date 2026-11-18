import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = ({ autoStartRequested }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create HTML5 Audio instance with user-provided celebration track
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
      title={isPlaying ? 'Pause music' : 'Play music'}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <div className="audio-soundwave">
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
      </div>

      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
};
