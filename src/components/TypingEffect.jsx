import React, { useState, useEffect } from 'react';
import './TypingEffect.css'; // We will create this file for the new styles

const TypingEffect = ({ text, speed = 50, delay = 1000 }) => {
  const [litIndex, setLitIndex] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setLitIndex(prev => {
          if (prev < text.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className="letter-animation-container">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`letter ${index <= litIndex ? 'lit' : 'dark'}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default TypingEffect;
