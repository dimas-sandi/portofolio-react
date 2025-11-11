import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyLoad from './LazyLoad'; // Import LazyLoad
import './ChromaGrid.css';

const ChromaGrid = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        duration: 0.7
      }
    }
  };

  return (
    <motion.div
      className="chroma-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={item.id}
            className={`chroma-grid-item ${isHovered ? 'hovered' : ''}`}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/project/${item.id}`} className="chroma-link">
              <motion.div
                className="chroma-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <LazyLoad placeholderHeight="250px"> {/* Wrap image with LazyLoad */}
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="chroma-image"
                    style={{
                      filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                      transition: 'filter 0.3s ease',
                    }}
                    whileHover={{
                      filter: 'grayscale(0%)',
                      scale: 1.1
                    }}
                  />
                </LazyLoad>
              </motion.div>
              <motion.div
                className="chroma-content"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.h3
                  className="chroma-title"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ChromaGrid;
