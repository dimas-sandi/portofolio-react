// src/components/LazyLoad.jsx
import React, { useState, useEffect, useRef } from 'react';

const LazyLoad = ({ children, placeholderHeight = '50vh' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on whether the element is intersecting
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '100px 0px', // Start loading when the component is 100px away from the viewport
        threshold: 0.01,      // Trigger when even a small part is visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} style={{ minHeight: isVisible ? 'auto' : placeholderHeight, width: '100%' }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoad;
