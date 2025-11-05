// src/App.jsx

import React, { useState, useEffect } from 'react';
import { translations } from './translations'; 

// Impor semua komponen Anda
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Section from './components/Section'; // <- Pastikan ini diimpor
import Footer from './components/Footer'; // <- BARU
import ScrollTopButton from './components/ScrollTopButton'; // <- BARU

function App() {
  // ... (semua state dan effect Anda tetap sama)
  const [lang, setLang] = useState(() => {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith('id') ? 'id' : 'en';
  });
  const currentTexts = translations[lang];
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);
    revealElements.forEach(el => revealObserver.observe(el));
    return () => revealElements.forEach(el => revealObserver.unobserve(el));
  }, [currentTexts]); // Jalankan ulang saat ganti bahasa

  if (!currentTexts) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Header 
        lang={lang} 
        setLang={setLang} 
        texts={currentTexts}
        isScrolled={isHeaderScrolled}
        isMobileOpen={isMobileNavOpen}
        toggleMobile={setMobileNavOpen}
      />

      <main>
        <About texts={currentTexts} />
        
        
        
        {/* === INI DIA SEMUA SECTION ANDA === */}
        <Skills id="skills" texts={currentTexts} />
        <Section 
          id="achievements"
          title={currentTexts.achievementsTitle}
          description={currentTexts.achievementsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?fit=crop&w=1920&q=80"
          texts={currentTexts}
        />
        
        <Section 
          id="projects"
          title={currentTexts.projectsTitle}
          description={currentTexts.projectsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=1920&q=80"
          reverse={true} // <-- Ini untuk layout terbalik
          texts={currentTexts}
        />
        
        <Section 
          id="internships"
          title={currentTexts.internshipsTitle}
          description={currentTexts.internshipsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=1920&q=80"
          texts={currentTexts}
        />
        
        <Section 
          id="education"
          title={currentTexts.educationTitle}
          description={currentTexts.educationDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fit=crop&w=1920&q=80"
          reverse={true} // <-- Layout terbalik
          texts={currentTexts}
        />
        
        <Section 
          id="organizations"
          title={currentTexts.organizationsTitle}
          description={currentTexts.organizationsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?fit=crop&w=1920&q=80"
          texts={currentTexts}
        />

      </main>

      {/* === BAGIAN PENUTUP (SELESAI) === */}
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;