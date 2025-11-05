// src/components/Header.jsx

import React from 'react';
import { Menu, X } from 'react-feather'; // Impor ikon dari react-feather

// Komponen Header menerima props dari App.jsx
const Header = ({ lang, setLang, texts, isScrolled, isMobileOpen, toggleMobile }) => {

  const handleLangChange = (newLang) => {
    setLang(newLang);
  };

  const handleMobileLinkClick = () => {
    toggleMobile(false); // Tutup menu setelah link diklik
  };

  return (
    <>
      <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-container">
          <a href="#about" className="logo">PORTOFOLIO</a>
          
          <nav className="desktop-nav">
            <a href="#about">{texts.navAbout}</a>
            <a href="#skills">{texts.navSkills}</a>
            <a href="#achievements">{texts.navAchievements}</a>
            <a href="#projects">{texts.navProjects}</a>
            <a href="#internships">{texts.navInternships}</a>
            <a href="#education">{texts.navEducation}</a>
            <a href="#organizations">{texts.navOrganizations}</a>
          </nav>

          <div className="header-right">
            <div className="lang-switcher">
              <a 
                href="#" 
                id="lang-id" 
                className={`lang-link ${lang === 'id' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLangChange('id'); }}
              >
                ID
              </a>
              <span>|</span>
              <a 
                href="#" 
                id="lang-en" 
                className={`lang-link ${lang === 'en' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLangChange('en'); }}
              >
                EN
              </a>
            </div>
            <button 
              className="hamburger-menu" 
              aria-label="Buka Menu"
              onClick={() => toggleMobile(true)} // Buka menu
            >
              <Menu /> 
            </button>
          </div>
        </div>
      </header>

      {/* Ini adalah navigasi mobile */}
      <nav className={`mobile-nav ${isMobileOpen ? 'active' : ''}`}>
        <button 
          className="close-menu" 
          aria-label="Tutup Menu"
          onClick={() => toggleMobile(false)} // Tutup menu
        >
          <X />
        </button>
        <a href="#about" onClick={handleMobileLinkClick}>{texts.navAbout}</a>
        <a href="#skills" onClick={handleMobileLinkClick}>{texts.navSkills}</a>
        <a href="#achievements" onClick={handleMobileLinkClick}>{texts.navAchievements}</a>
        <a href="#projects" onClick={handleMobileLinkClick}>{texts.navProjects}</a>
        <a href="#internships" onClick={handleMobileLinkClick}>{texts.navInternships}</a>
        <a href="#education" onClick={handleMobileLinkClick}>{texts.navEducation}</a>
        <a href="#organizations" onClick={handleMobileLinkClick}>{texts.navOrganizations}</a>
      </nav>
    </>
  );
};

export default Header;