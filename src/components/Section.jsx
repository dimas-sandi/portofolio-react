// src/components/Section.jsx

import React from 'react';

// Kita akan menerima semua data sebagai 'props'
const Section = ({ id, title, description, imageUrl, bgUrl, reverse, texts }) => {
  
  // Tentukan kelas CSS berdasarkan props
  const sectionClasses = `section-content-split ${reverse ? 'reverse' : ''}`;
  
  return (
    <section
      id={id}
      className="section"
      style={bgUrl ? { backgroundImage: `url('${bgUrl}')` } : {}}
    >
      <div className={sectionClasses}>
        <div className="text-content reveal animate-fade-left">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="#" className="btn-learn-more">
            {texts.learnMore}
          </a>
        </div>
        <div className="media-content reveal animate-fade-right">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Section; // <-- Baris ini yang memperbaiki error Anda