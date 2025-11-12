// src/components/About.jsx

import React, { useState, useEffect } from 'react';
// 1. Impor komponen Lanyard 3D Anda
import Lanyard from './Lanyard'; // Impor dari folder Lanyard
import { Mail, Linkedin, Instagram, PlayCircle, GitHub } from 'react-feather'; // Tambahkan GitHub
import NormalTypingEffect from './NormalTypingEffect'; // Impor komponen NormalTypingEffect

const About = ({ texts }) => {
  const [showLanyard, setShowLanyard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanyard(true);
    }, 2000); // Delay for 2 seconds before showing Lanyard

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="section full-screen">
      <div className="section-content hero-layout">
        
        <div className="hero-image-container reveal animate-zoom-in delay-2">
          {showLanyard && <Lanyard />}
        </div>

        <div className="hero-text-content">
          <h1 data-lang-key="heroTitle" className="reveal animate-fade-up">
            {texts.heroTitle}
          </h1>
          <h2 data-lang-key="heroSubtitle" className="reveal animate-fade-up delay-1">
            {texts.heroSubtitle}
          </h2>
          <div className="social-links reveal animate-fade-up delay-2">
            <a href="mailto:dimasdimpi90@gmail.com" aria-label="Email"><Mail /></a>
            <a href="https://linkedin.com/in/dimas-sandi-wiranata-763322284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://instagram.com/dmzsnd__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.tiktok.com/@dimskuyyyyyyyyyy" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <PlayCircle />
            </a>
            <a href="https://github.com/dimas-sandi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
          </div>
          <NormalTypingEffect 
            text={texts.aboutMeText.trim()} 
            speed={50} 
            className="about-text reveal animate-fade-up delay-3" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;