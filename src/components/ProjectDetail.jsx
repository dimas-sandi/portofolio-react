import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ModelViewer from './ModelViewer';
import { getPortfolioData } from '../portfolioData';
import './ProjectDetail.css';
import TypingEffect from './TypingEffect';

const ProjectDetail = ({ texts }) => {
  const { id } = useParams();
  const projects = getPortfolioData(texts);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="container mx-auto px-4 py-8">Project not found</div>;
  }

  return (
    <div className="pd-root min-h-screen relative overflow-hidden bg-slate-900 flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      
      {/* Main Content Container */}
      <div className="pd-container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-20 lg:py-24">
        {/* Content Section - Responsive grid for better control */}
        <div className="pd-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Model (align top with text title) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 w-full pd-model-container"
          >
            <div className="pd-surface pd-aspect pd-sticky">
                <div className="pd-aspect-inner">
                <React.Suspense fallback={
                    <div className="flex items-center justify-center w-full h-full bg-gray-800 text-white text-lg font-semibold">
                        Loading 3D Model...
                    </div>
                }>
                {
                  (() => {
                    const base = import.meta.env.BASE_URL || '/';
                    const fullModelUrl = project.modelUrl.startsWith('http') ? project.modelUrl : base + project.modelUrl;
                    return <ModelViewer modelPath={fullModelUrl || `${base}project/cncmini.glb`} />;
                  })()
                }
                </React.Suspense>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2 w-full space-y-6 pd-text-container"
          >
            {/* Title */}
            <div>
              <h1 className="pd-title-offset text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
                {project.title}
              </h1>
            </div>

            {/* Overview (only text, no translucent card) */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Project Overview</h2>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                <TypingEffect text={project.description} speed={25} />
              </p>
            </div>
          </motion.div>
        </div>
        {/* Scroll hint for mobile */}
        <div className="pd-scroll-hint lg:hidden flex justify-center mt-8">
            <button 
                onClick={() => document.querySelector('.pd-model-container').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 text-white text-sm animate-bounce"
            >
                <span>Scroll to 3D Model</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
