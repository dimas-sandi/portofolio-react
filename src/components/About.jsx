// src/components/About.jsx

import React from 'react';
// 1. Impor komponen Lanyard 3D Anda
import Lanyard from './Lanyard'; // Impor dari folder Lanyard
import { Mail, Linkedin, Instagram, PlayCircle, GitHub } from 'react-feather'; // Tambahkan GitHub
import NormalTypingEffect from './NormalTypingEffect'; // Impor komponen NormalTypingEffect

const About = ({ texts }) => {
  return (
    <section id="about" className="section full-screen">
      <div className="section-content hero-layout">
        
        {/* 2. INI DIA PENGGANTINYA! */}
        <div className="hero-image-container">
          {/* Memanggil komponen 3D Anda */}
          <Lanyard />
        </div>

        <div className="hero-text-content">
          {/* ... (Semua kode h1, h2, social-links, tetap SAMA) ... */}
          <h1 data-lang-key="heroTitle">
            {texts.heroTitle}
          </h1>
          <h2 data-lang-key="heroSubtitle">
            {texts.heroSubtitle}
          </h2>
          <div className="social-links">
            <a href="mailto:dimasdimpi90@gmail.com" aria-label="Email"><Mail /></a>
            <a href="https://linkedin.com/in/dimas-sandi-wiranata-763322284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://instagram.com/dmzsnd__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.tiktok.com/@dimskuyyyyyyyyyy" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <PlayCircle />
            </a>
            <a href="https://github.com/dimas-sandi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a> {/* Tambahkan GitHub */}
          </div>
          <NormalTypingEffect 
            text={texts.aboutMeText.trim()} 
            speed={50} 
            className="about-text" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;