import { Howl } from 'howler';

/**
 * Sound Manager for centralized audio control
 * Handles preloading and managing multiple sound effects
 */
class SoundManager {
  constructor() {
    this.sounds = new Map();
    this.globalVolume = 0.7;
    this.isMuted = false;
  }

  /**
   * Load a sound file
   * @param {string} name - Unique identifier for the sound
   * @param {string} src - Path to the sound file
   * @param {Object} options - Howler.js options
   */
  loadSound(name, src, options = {}) {
    const sound = new Howl({
      src: [src],
      volume: this.globalVolume,
      preload: true,
      ...options,
    });

    this.sounds.set(name, sound);
    return sound;
  }

  /**
   * Play a loaded sound
   * @param {string} name - Sound identifier
   * @param {Object} options - Play options
   */
  play(name, options = {}) {
    const sound = this.sounds.get(name);
    if (sound && !this.isMuted) {
      return sound.play(options);
    }
  }

  /**
   * Stop a sound
   * @param {string} name - Sound identifier
   */
  stop(name) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.stop();
    }
  }

  /**
   * Set global volume
   * @param {number} volume - Volume level (0-1)
   */
  setGlobalVolume(volume) {
    this.globalVolume = Math.max(0, Math.min(1, volume));
    this.sounds.forEach(sound => {
      sound.volume(this.globalVolume);
    });
  }

  /**
   * Toggle mute state
   */
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.sounds.forEach(sound => {
      sound.mute(this.isMuted);
    });
    return this.isMuted;
  }

  /**
   * Get sound instance
   * @param {string} name - Sound identifier
   */
  getSound(name) {
    return this.sounds.get(name);
  }

  /**
   * Unload a sound
   * @param {string} name - Sound identifier
   */
  unloadSound(name) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.unload();
      this.sounds.delete(name);
    }
  }

  /**
   * Unload all sounds
   */
  unloadAll() {
    this.sounds.forEach(sound => sound.unload());
    this.sounds.clear();
  }
}

// Export singleton instance
export const soundManager = new SoundManager();
export default soundManager;
