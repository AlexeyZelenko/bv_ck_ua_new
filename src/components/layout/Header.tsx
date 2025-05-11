import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Закриваємо меню при зміні сторінки
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Головна', path: '/' },
    { name: 'Служіння', path: '/services' },
    { name: 'Портфоліо', path: '/portfolio' },
    { name: 'Про нас', path: '/about' },
    { name: 'Блог', path: '/blog' },
    { name: 'Контакти', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 py-3 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="text-white font-bold text-2xl flex items-center">
            <Heart className="mr-2 text-accent-500" />
            <span>БлагаВість</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white hover:text-accent-400 transition-colors relative ${
                location.pathname === link.path ? 'font-medium' : ''
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none z-50 mr-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : '100%'
          }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-full w-full bg-black/95 md:hidden flex flex-col justify-center items-center z-40 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className={`text-white hover:text-accent-400 transition-colors text-2xl my-4 block ${
                  location.pathname === link.path ? 'text-accent-500 font-medium' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;