import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'БлагаВість | Сторінка не знайдена';
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-9xl font-bold text-accent-500 mb-8"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Сторінка не знайдена
          </motion.h2>
          
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 mb-12"
          >
            Сторінка, яку ви шукаєте, не існує або була переміщена. 
            Спробуйте повернутися на головну сторінку.
          </motion.p>
          
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/" variant="primary" size="lg" className="flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              На головну
            </Button>
            <Button onClick={() => window.history.back()} variant="outline" size="lg" className="flex items-center justify-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Назад
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;