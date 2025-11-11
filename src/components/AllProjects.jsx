import React from 'react';
import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';
import { getPortfolioData } from '../portfolioData';

const AllProjects = ({ texts }) => {
  const allProjects = getPortfolioData(texts).filter(item => item.id !== 'projects'); // Exclude the generic projects entry

  return (
    <section id="all-projects" className="section relative z-10 py-20"> {/* Added py-20 for spacing */}
      <div className="container mx-auto px-4 relative z-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 relative z-50"
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }} // Use animate instead of whileInView for immediate animation
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          {texts.projectsTitle}
        </motion.h2>
        <motion.p
          className="text-center mb-12 relative z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} // Use animate instead of whileInView for immediate animation
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          {texts.projectsDesc}
        </motion.p>
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }} // Use animate instead of whileInView for immediate animation
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          <ChromaGrid items={allProjects} key="all-projects-grid" animateOnMount={true} /> {/* Display all projects */}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;