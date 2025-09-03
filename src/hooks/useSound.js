import { Howl } from 'howler';
import { useCallback, useRef } from 'react';

/**
 * Custom hook for managing sound effects with Howler.js
 * @param {string} src - Path to the sound file
 * @param {Object} options - Howler.js options
 * @returns {Object} - Play function and sound instance
 */
export const useSound = (src, options = {}) => {
  const soundRef = useRef(null);

  // Initialize sound instance
  if (!soundRef.current) {
    soundRef.current = new Howl({
      src: [src],
      volume: 0.5,
      preload: true,
      ...options,
    });
  }

  const play = useCallback((playOptions = {}) => {
    if (soundRef.current) {
      return soundRef.current.play(playOptions);
    }
  }, []);

  const stop = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  }, []);

  const pause = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  }, []);

  const setVolume = useCallback((volume) => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  }, []);

  return {
    play,
    stop,
    pause,
    setVolume,
    sound: soundRef.current,
  };
};

export default useSound;
