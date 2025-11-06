// src/App.jsx

import React, { useState, useEffect } from 'react';
import { translations } from './translations'; 

// Impor semua komponen Anda
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Section from './components/Section'; // <- Pastikan ini diimpor
import Achievements from './components/Achievements';
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
       {/* INI PENGGANTINYA */}
<Achievements texts={currentTexts} />
        
        <Section 
          id="projects"
          title={currentTexts.projectsTitle}
          description={currentTexts.projectsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://assets.skyfilabs.com/images/blog/mechanicalminiproject.webp"
          reverse={true} // <-- Ini untuk layout terbalik
          texts={currentTexts}
        />
        
        <Section 
          id="internships"
          title={currentTexts.internshipsTitle}
          description={currentTexts.internshipsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://assets.skyfilabs.com/images/blog/electronics-mini-project-feasibility-min.webp"
          texts={currentTexts}
        />
        
        <Section 
          id="education"
          title={currentTexts.educationTitle}
          description={currentTexts.educationDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://www.emetechnologies.com/blog/civil-engineering/images/nx0.jpg"
          reverse={true} // <-- Layout terbalik
          texts={currentTexts}
        />
        
        <Section 
          id="organizations"
          title={currentTexts.organizationsTitle}
          description={currentTexts.organizationsDesc}
          imageUrl="https://via.placeholder.com/600x400"
          bgUrl="https://mesin.polsri.ac.id/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-23-at-11.14.30-1-768x576.jpeg"
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