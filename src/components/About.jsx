// src/components/About.jsx

import React from 'react';
// 1. Impor komponen Lanyard 3D Anda
import Lanyard from './Lanyard'; // Impor dari folder Lanyard
import { Mail, Linkedin, Instagram, PlayCircle } from 'react-feather';

const About = ({ texts }) => {
  return (
    <section id="about" className="section full-screen">
      <div className="section-content hero-layout">
        
        <div className="hero-text-content">
          {/* ... (Semua kode h1, h2, social-links, p, tetap SAMA) ... */}
          <h1 data-lang-key="heroTitle" className="reveal animate-fade-up">
            {texts.heroTitle}
          </h1>
          <h2 data-lang-key="heroSubtitle" className="reveal animate-fade-up delay-1">
            {texts.heroSubtitle}
          </h2>
          <div className="social-links reveal animate-fade-up delay-2">
            <a href="mailto:emailanda@gmail.com" aria-label="Email"><Mail /></a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://tiktok.com/@username" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <PlayCircle />
            </a>
          </div>
          <p className="about-text reveal animate-fade-up delay-3" data-lang-key="aboutMeText">
            {texts.aboutMeText}
          </p> 
          <a href="#skills" className="btn-learn-more reveal animate-fade-up delay-4" data-lang-key="learnMore">
            {texts.learnMore}
          </a>
        </div>

        {/* 2. INI DIA PENGGANTINYA! */}
        <div className="hero-image-container reveal animate-zoom-in delay-2">
          {/* Memanggil komponen 3D Anda */}
          <Lanyard />
        </div>

      </div>
    </section>
  );
};

export default About;