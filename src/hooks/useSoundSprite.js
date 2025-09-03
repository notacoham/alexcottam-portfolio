import { Howl } from 'howler';
import { useCallback, useRef } from 'react';

/**
 * Hook for using audio sprites (segments of longer audio files)
 * @param {string} src - Path to the audio file
 * @param {Object} sprite - Sprite definition object
 * @param {Object} options - Additional Howler options
 */
export const useSoundSprite = (src, sprite, options = {}) => {
  const soundRef = useRef(null);

  // Initialize sound with sprite configuration
  if (!soundRef.current) {
    soundRef.current = new Howl({
      src: [src],
      sprite,
      volume: 0.5,
      preload: true,
      ...options,
    });
  }

  const playSprite = useCallback((spriteName, playOptions = {}) => {
    if (soundRef.current && sprite[spriteName]) {
      return soundRef.current.play(spriteName, playOptions);
    }
  }, [sprite]);

  const stop = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  }, []);

  return {
    playSprite,
    stop,
    sound: soundRef.current,
  };
};

export default useSoundSprite;
