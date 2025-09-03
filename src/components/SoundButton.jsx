import React from 'react';
import { useSound } from '../hooks/useSound';

/**
 * Reusable sound button component
 * @param {string} soundSrc - Path to sound file
 * @param {string} children - Button content
 * @param {Object} soundOptions - Howler.js options
 * @param {Object} buttonProps - Additional button props
 */
const SoundButton = ({ 
  soundSrc, 
  children, 
  soundOptions = {}, 
  className = '',
  ...buttonProps 
}) => {
  const { play } = useSound(soundSrc, {
    volume: 0.3,
    ...soundOptions
  });

  const handleClick = (e) => {
    play();
    if (buttonProps.onClick) {
      buttonProps.onClick(e);
    }
  };

  return (
    <button
      {...buttonProps}
      onClick={handleClick}
      className={`transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default SoundButton;
