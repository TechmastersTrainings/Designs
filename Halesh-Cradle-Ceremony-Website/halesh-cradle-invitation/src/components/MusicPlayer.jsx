import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer = ({ autoStartRequested }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef(null);

  // Frequencies for a soothing Christian lullaby melody (C major scale)
  // Amazing Grace / Sweet Cradle Hymn notes:
  // C4, D4, E4, F4, G4, A4, B4, C5, D5, E5
  const hymnNotes = [
    { freq: 261.63, dur: 1.2 }, // C4
    { freq: 329.63, dur: 1.2 }, // E4
    { freq: 392.00, dur: 1.6 }, // G4
    { freq: 523.25, dur: 2.0 }, // C5
    { freq: 440.00, dur: 1.2 }, // A4
    { freq: 392.00, dur: 1.8 }, // G4
    { freq: 329.63, dur: 1.4 }, // E4
    { freq: 293.66, dur: 1.6 }, // D4
    { freq: 261.63, dur: 2.4 }, // C4
    // Second phrase
    { freq: 329.63, dur: 1.2 }, // E4
    { freq: 392.00, dur: 1.4 }, // G4
    { freq: 523.25, dur: 2.2 }, // C5
    { freq: 587.33, dur: 1.4 }, // D5
    { freq: 523.25, dur: 2.6 }, // C5
  ];

  const playTone = (ctx, freq, duration) => {
    if (!ctx || ctx.state === 'closed') return;

    const now = ctx.currentTime;

    // Master chime oscillator (Celesta / Soft Harp)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    // Warm triangle + sine wave combination
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now); // harmonic overtone

    // Soft celestial envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.08); // soft gentle attack
    gain.gain.exponentialRampToValueAtTime(0.02, now + duration * 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // long chime decay

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  };

  const startMusicLoop = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      isPlayingRef.current = true;
      setIsPlaying(true);

      let noteIndex = 0;
      const playNext = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const currentNote = hymnNotes[noteIndex];
        playTone(audioCtxRef.current, currentNote.freq, currentNote.dur);

        noteIndex = (noteIndex + 1) % hymnNotes.length;
        timerRef.current = setTimeout(playNext, currentNote.dur * 850);
      };

      playNext();
    } catch (e) {
      console.error('Audio playback error', e);
    }
  };

  const stopMusicLoop = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusicLoop();
    } else {
      startMusicLoop();
    }
  };

  useEffect(() => {
    return () => {
      stopMusicLoop();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      type="button"
      className={`floating-audio-pill ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      title={isPlaying ? 'Mute background instrumental hymn' : 'Play peaceful cradle instrumental hymn'}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      <div className="audio-soundwave">
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
      </div>

      <span>{isPlaying ? 'Hymn Playing' : 'Play Music'}</span>

      {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  );
};
