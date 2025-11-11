// src/components/Footer.jsx

import React from 'react';
// Impor ikon-ikon yang kita butuhkan
import { Mail, Linkedin, Instagram, PlayCircle, GitHub } from 'react-feather'; // Tambahkan GitHub

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="mailto:dimasdimpi90@gmail.com" aria-label="Email"><Mail /></a>
        <a href="https://linkedin.com/in/dimas-sandi-wiranata-763322284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href="https://instagram.com/dmzsnd__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
        <a href="https://www.tiktok.com/@dimskuyyyyyyyyyy" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><PlayCircle /></a>
        <a href="https://github.com/dimas-sandi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a> {/* Tambahkan GitHub */}
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Dimas Sandi Wiranata. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;