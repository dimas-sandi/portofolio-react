// src/App.jsx

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { translations } from './translations';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import ProjectDetail from './components/ProjectDetail'; // Lazy loaded
// import AllProjects from './components/AllProjects';     // Lazy loaded
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';
// import LiquidEther from './components/LiquidEther/LiquidEther';

// Lazy load components
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const AllProjects = lazy(() => import('./components/AllProjects'));

function AppContent() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith('/project/');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]); // Trigger on pathname change

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (isProjectDetail) {
      document.body.classList.add('project-detail-active');
    } else {
      document.body.classList.remove('project-detail-active');
    }
  }, [isProjectDetail]);

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
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const setupRevealAnimations = () => {
      const elements = document.querySelectorAll('.reveal:not(.active)');
      elements.forEach(el => revealObserver.observe(el));
    };

    setupRevealAnimations(); // Initial run

    // When a section becomes visible, re-run the setup to find new reveal elements
    window.addEventListener('section-visible', setupRevealAnimations);

    return () => {
      window.removeEventListener('section-visible', setupRevealAnimations);
      revealObserver.disconnect(); // Cleanup observer on unmount
    };
  }, [currentTexts, location]); // Rerun on language or location change

  if (!currentTexts) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* <LiquidEther
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        dt={0.02}
        BFECC={false}
        resolution={0.6}
        isBounce={false}
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.0}
        takeoverDuration={0.0}
        autoResumeDelay={0}
        autoRampDuration={0.0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      /> */}
      <>
        <style dangerouslySetInnerHTML={{
          __html: `
            .project-detail-page,
            .project-detail-page *,
            .project-detail-page canvas,
            .project-detail-page div,
            .project-detail-page p,
            .project-detail-page h1,
            .project-detail-page h2,
            .project-detail-page h3,
            .project-detail-page h4,
            .project-detail-page h5,
            .project-detail-page h6 {
              pointer-events: auto !important;
              cursor: auto !important;
            }
            body.project-detail-active {
              pointer-events: auto !important;
            }
            body.project-detail-active * {
              pointer-events: auto !important;
            }
          `
        }} />
      </>
      <Header
        lang={lang}
        setLang={setLang}
        texts={currentTexts}
        isScrolled={isHeaderScrolled}
        isMobileOpen={isMobileNavOpen}
        toggleMobile={setMobileNavOpen}
      />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <main>
              <About id="about" texts={currentTexts} />
              <Skills id="skills" texts={currentTexts} />
              <Achievements id="achievements" texts={currentTexts} />
              <Projects texts={currentTexts} />
              <Contact id="contact" texts={currentTexts} />
            </main>
          } />
          <Route path="/project/:id" element={
            <Suspense fallback={<div>Loading Project...</div>}>
              <div className="relative z-[100] project-detail-page min-h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <ProjectDetail texts={currentTexts} currentLang={lang} />
              </div>
            </Suspense>
          } />
          <Route path="/all-projects" element={
            <Suspense fallback={<div>Loading All Projects...</div>}>
              <div className="relative z-[100] all-projects-page min-h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <AllProjects texts={currentTexts} />
              </div>
            </Suspense>
          } />
        </Routes>
      </div>

      {/* === BAGIAN PENUTUP (SELESAI) === */}
      {!isProjectDetail && <Footer />}
      <ScrollTopButton />
    </div>
  );
}



function App() {
  const basename = import.meta.env.VITE_VERCEL_DEPLOY === 'true' ? '/' : '/portofolio-react';
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

export default App;