// src/components/Header.jsx

import React from 'react';
import { Menu, X } from 'react-feather'; // Impor ikon dari react-feather
import { Link } from 'react-router-dom';

// Komponen Header menerima props dari App.jsx
const Header = ({ lang, setLang, texts, isScrolled, isMobileOpen, toggleMobile }) => {
// Komponen Header menerima props dari App.jsx
  const handleLangChange = (newLang) => {
    setLang(newLang);
  };

  const handleMobileLinkClick = () => {
    toggleMobile(false); // Tutup menu setelah link diklik
  };

  const NavLink = ({ to, children, onClick }) => {
    // All navigation links should use react-router-dom's Link component
    // For hash links, Link will navigate to the base path and then scroll to the hash.
    return <Link to={`/${to}`} onClick={onClick}>{children}</Link>;
  };

  return (
    <>
      <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-container">
          <Link to="/#about" className="logo">
            <img src={import.meta.env.BASE_URL + "vite.svg"} alt="Logo" className="logo-icon" />
            PORTOFOLIO
          </Link>
          
          <nav className="desktop-nav">
            <NavLink to="#about">{texts.navAbout}</NavLink>
            <NavLink to="#skills">{texts.navSkills}</NavLink>
            <NavLink to="#achievements">{texts.navAchievements}</NavLink>
            <NavLink to="#projects">{texts.navProjects}</NavLink>
            <NavLink to="#contact">{texts.navContact}</NavLink>
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
        <NavLink to="#about" onClick={handleMobileLinkClick}>{texts.navAbout}</NavLink>
        <NavLink to="#skills" onClick={handleMobileLinkClick}>{texts.navSkills}</NavLink>
        <NavLink to="#achievements" onClick={handleMobileLinkClick}>{texts.navAchievements}</NavLink>
        <NavLink to="#projects" onClick={handleMobileLinkClick}>{texts.navProjects}</NavLink>
        <NavLink to="#contact" onClick={handleMobileLinkClick}>{texts.navContact}</NavLink>
      </nav>
    </>
  );
};

export default Header;