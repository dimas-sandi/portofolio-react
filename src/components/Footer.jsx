// src/components/Footer.jsx

import React from 'react';
// Impor ikon-ikon yang kita butuhkan
import { Mail, Linkedin, Instagram, PlayCircle } from 'react-feather';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        {/* Ganti link placeholder ini dengan link Anda yang sebenarnya */}
        <a href="mailto:emailanda@gmail.com" aria-label="Email"><Mail /></a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
        <a href="https://tiktok.com/@username" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><PlayCircle /></a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Dimas Sandi Wiranata. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;