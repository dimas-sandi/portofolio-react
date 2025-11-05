// src/components/VelocityText.jsx

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue // <-- 1. Impor hook yang benar
} from 'framer-motion';

// Helper function untuk 'membungkus' nilai (menciptakan loop)
function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export default function VelocityText({ text, baseVelocity = -5 }) {
  // --- 1. LOGIKA UNTUK SKEW (Miring) ---
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skew = useTransform(smoothVelocity, [-1500, 1500], [60, -60]); // Derajat miring

  // --- 2. LOGIKA UNTUK MARQUEE (Looping & Akselerasi) ---
  const baseX = useRef(0);
  
  const velocityMultiplier = useTransform(smoothVelocity, [-1000, 0, 1000], [10, 0.2, 10], { clamp: false });

  // 2. GANTI DARI useRef(0) MENJADI useMotionValue(0)
  const x = useMotionValue(0); 

  useAnimationFrame((time, delta) => {
    // Hitung pergerakan
    let moveBy = baseVelocity * (delta / 1000) * velocityMultiplier.get();
    baseX.current += moveBy;
    
    // Bungkus nilainya agar loop (dari 0% ke -50%)
    baseX.current = wrap(0, -50, baseX.current);

    // 3. Set nilai MotionValue menggunakan .set()
    x.set(baseX.current);
  });

  // `x` sekarang adalah MotionValue, jadi `useTransform` akan berfungsi
  const xPercent = useTransform(x, (value) => `${value}%`);

  return (
    <div className="velocity-text-container">
      <motion.div 
        className="velocity-text-track" 
        style={{ 
          skew: skew,    // Miring saat scroll
          x: xPercent  // Bergerak horizontal (marquee)
        }}
      >
        {/* Kita gandakan teks 4x agar loop-nya mulus */}
        <span className="velocity-text">{text}</span>
        <span className="velocity-text">{text}</span>
        <span className="velocity-text">{text}</span>
        <span className="velocity-text">{text}</span>
      </motion.div>
    </div>
  );
}