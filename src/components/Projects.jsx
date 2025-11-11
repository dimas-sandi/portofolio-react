import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import ChromaGrid from './ChromaGrid';
import { getPortfolioData } from '../portfolioData';

const Projects = ({ texts }) => {
  const allProjects = getPortfolioData(texts).filter(item => item.id !== 'projects'); // Exclude the generic projects entry
  const initialProjects = allProjects.slice(0, 3); // Show only 3 projects initially

  return (
    <section id="projects" className="section relative z-10">
      <div className="container mx-auto px-4 relative z-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 relative z-50"
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
        >
          {texts.projectsTitle}
        </motion.h2>
        <motion.p
          className="text-center mb-12 relative z-50"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        >
          {texts.projectsDesc}
        </motion.p>
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        >
          <ChromaGrid items={initialProjects} />
        </motion.div>

        {allProjects.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/all-projects"
              className="px-16 py-6 bg-purple-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-purple-700 transition-colors duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Lebih Banyak Project
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
