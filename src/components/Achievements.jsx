// src/components/Achievements.jsx

import React, { useState, useRef } from 'react'; // <-- TAMBAHKAN useRef
import './Achievements.css';

// ===================================================================
// (BARU!) KOMPONEN TILTED CARD
// ===================================================================
function TiltedCard({ item }) {
  const [style, setStyle] = useState({});
  const cardRef = useRef(null);

  const maxRotate = 10; // Derajat kemiringan maksimum

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Hitung rotasi (nilai antara -10 dan 10)
    const rotateX = (y - height / 2) / (height / 2) * -maxRotate;
    const rotateY = (x - width / 2) / (width / 2) * maxRotate;

    // Hitung posisi glare (nilai antara 0% dan 100%)
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    
    // Set properti CSS via style
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    });
    
    // Set properti CSS via CSS Variables (untuk glare)
    cardRef.current.style.setProperty('--mouse-x', `${glareX}%`);
    cardRef.current.style.setProperty('--mouse-y', `${glareY}%`);
  };

  const handleMouseLeave = () => {
    // Reset kembali ke default
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  return (
    <div 
      className="tilted-card"
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ini adalah elemen glare (kilatan) */}
      <div className="tilted-card-glare"></div>
      
      {/* Ini adalah gambar Anda */}
      <img src={item.url} alt={item.desc} className="tilted-card-image" />
      
      {/* Ini adalah overlay deskripsi */}
      <div className="tilted-card-overlay">
        <p>{item.desc}</p>
      </div>
    </div>
  );
}


// ===================================================================
// KOMPONEN HALAMAN DETAIL (Diperbarui)
// ===================================================================
function AchievementDetail({ item, onBack }) {
  return (
    <div className="achievement-detail">
      <button onClick={onBack} className="back-button">
        &larr; Kembali ke Daftar
      </button>
      <h2 className="detail-title">{item.title}</h2>
      <span className="detail-source">{item.source}</span>
      <div className="detail-description">
        {item.details.trim().split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
      
      {/* === PERUBAHAN DI SINI === */}
      {item.documentationImages && item.documentationImages.length > 0 && (
        <div className="detail-gallery">
          <h3>Dokumentasi</h3>
          {/* Ganti grid lama dengan komponen TiltedCard baru */}
          <div className="gallery-grid">
            {item.documentationImages.map((image, index) => (
              // Panggil komponen baru kita untuk setiap gambar
              <TiltedCard key={index} item={image} />
            ))}
          </div>
        </div>
      )}
      {/* ======================= */}

    </div>
  );
}


// ... (Sisa file Anda di bawah ini tidak berubah) ...

// ===================================================================
// KOMPONEN DAFTAR "FLOWING MENU" (MASTER)
// (Tidak ada perubahan)
// ===================================================================
function AchievementList({ texts, achievements, onSelect }) {
  
  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const y = e.clientY - rect.top;
    el.classList.remove('hover-from-top', 'hover-from-bottom');
    if (y < el.clientHeight / 2) {
      el.classList.add('hover-from-top');
    } else {
      el.classList.add('hover-from-bottom');
    }
    el.classList.add('is-hovered');
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.classList.remove('is-hovered');
  };

  return (
    <>
      <h2 className="section-title">{texts.achievementsTitle}</h2>
      <p className="section-description">{texts.achievementsDesc}</p>
      <div className="achievement-list-menu">
        {achievements.map(item => (
          <div
            key={item.id}
            className="achievement-menu-item"
            onClick={() => onSelect(item.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="menu-item-title">{item.title}</span>
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {[1, 2, 3, 4].map((i) => (
                  <div className="marquee-block" key={i}>
                    <img 
                      src={item.thumbnailImage} 
                      alt={item.marqueeText} 
                      className="marquee-thumb" 
                    />
                    <span className="marquee-text">{item.marqueeText}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {achievements.length === 0 && (
          <p>Prestasi akan segera ditambahkan!</p>
        )}
      </div>
    </>
  );
}

// ===================================================================
// KOMPONEN UTAMA (KONTROLER)
// (Tidak ada perubahan)
// ===================================================================
function Achievements({ texts }) {
  const [selectedId, setSelectedId] = useState(null);
  const achievements = texts.achievementsList || [];

  const handleSelect = (id) => {
    setSelectedId(id);
    const section = document.getElementById('achievements');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBack = () => {
    setSelectedId(null);
  };

  const selectedItem = selectedId
    ? achievements.find(item => item.id === selectedId)
    : null;

  return (
    <section id="achievements" className="achievements-section reveal">
      <div className="container">
        {!selectedItem ? (
          <AchievementList
            texts={texts}
            achievements={achievements}
            onSelect={handleSelect}
          />
        ) : (
          <AchievementDetail
            item={selectedItem}
            onBack={handleBack}
          />
        )}
      </div>
    </section>
  );
}

export default Achievements;