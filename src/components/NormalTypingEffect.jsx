import React, { useState, useEffect, useRef } from 'react';
import './NormalTypingEffect.css';

const NormalTypingEffect = ({ text, speed = 50, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setDisplayedText(''); // Reset displayed text when text prop changes
    
    const characters = Array.from(text); // Use Array.from for proper Unicode handling
    let i = 0;
    let currentTypedText = '';

    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        if (i < characters.length) {
          currentTypedText += characters[i];
          setDisplayedText(currentTypedText);
          i++;
        } else {
          clearInterval(intervalRef.current);
        }
      }, speed);
    };

    timeoutRef.current = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, speed, delay]);

  return (
    <span className="normal-typing-container">
      {displayedText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default NormalTypingEffect;
