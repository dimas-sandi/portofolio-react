// src/components/LanyardCard.jsx

import React from 'react';
import { Aperture } from 'react-feather'; // Kita pakai ikon 'Atom' untuk di strap

// Komponen ini akan menerima URL foto Anda sebagai 'prop'
const LanyardCard = ({ photoUrl }) => {
  return (
    <div className="lanyard-wrapper">
      <div className="lanyard-strap">
        {/* Ikon kecil di tali */}
        <Aperture size={18} />
        <Aperture size={18} />
        <Aperture size={18} />
      </div>
      <div className="lanyard-clip"></div>
      <div className="lanyard-card">
        {/* Di sinilah foto Anda akan ditampilkan! */}
        <img 
          src={photoUrl} 
          alt="Profile" 
          className="lanyard-photo" 
        />
      </div>
    </div>
  );
};

export default LanyardCard;