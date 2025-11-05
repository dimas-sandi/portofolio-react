// src/components/ScrollTopButton.jsx

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'react-feather';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menampilkan/menyembunyikan tombol
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Tambahkan event listener saat komponen dimuat
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="scrollTopBtn"
      className={isVisible ? 'visible' : ''} // Tampilkan/sembunyikan via CSS
      onClick={scrollToTop}
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollTopButton;