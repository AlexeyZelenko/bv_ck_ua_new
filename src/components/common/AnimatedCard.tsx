import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: 'spring',
        stiffness: 50
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;