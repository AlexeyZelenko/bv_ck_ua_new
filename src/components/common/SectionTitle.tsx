import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-gray-900'}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'} max-w-2xl ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 120 : 80 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 bg-accent-500 mt-4 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;