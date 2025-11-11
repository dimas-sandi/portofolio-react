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
            className="order-1 lg:order-1 w-full mb-16 pb-12 lg:mb-0 lg:pb-0" /* Increased mb for mobile spacing */
          >
            <div className="pd-surface pd-aspect pd-sticky"> {/* Removed inline style */}
                <div className="pd-aspect-inner">
                {
                  (() => {
                    const base = import.meta.env.BASE_URL || '/';
                    const fullModelUrl = project.modelUrl.startsWith('http') ? project.modelUrl : base + project.modelUrl;
                    return <ModelViewer modelPath={fullModelUrl || `${base}project/cncmini.glb`} />;
                  })()
                }
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-2 lg:order-2 w-full space-y-6 mt-16 pt-16 lg:mt-0 lg:pt-0" /* Increased mt and pt for mobile spacing */
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
      </div>
    </div>
  );
};

export default ProjectDetail;
