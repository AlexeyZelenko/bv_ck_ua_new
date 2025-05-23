import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../common/Button';

const slides = [
  {
    id: 1,
    imageMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/home%2FIMG_8258_mobile.webp?alt=media&token=cd5c34f1-7abb-489f-91c6-368858a0476b',
    imageDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/home%2FIMG_8258.webp?alt=media&token=6bbe9a6c-bdaa-4425-836f-0b879cc2aadf',
    title: 'Відкрий нову сторінку своєї історії з Богом',
    subtitle: 'Кожен день – це можливість почати з чистого аркуша під Його покровом',
  },
  {
    id: 2,
    imageMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/home%2FIMG_7460_mobile.webp?alt=media&token=6a3ebe50-58e4-4c85-bcde-c5238d00f225',
    imageDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/home%2FIMG_7460.webp?alt=media&token=08f41718-05d2-4e63-b806-4dee1deb93c5',
    title: 'Живи серцем, сповненим віри, керованим Богом',
    subtitle: 'Нехай віра буде вашим компасом, а Бог – вашим провідником',
  },
  {
    id: 3,
    imageMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/home%2FIMG_7382_mobile.webp?alt=media&token=39fa6d96-62d4-4ef5-89fc-9dade2d2bb9b',
    imageDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/home%2FIMG_7382.webp?alt=media&token=47adb685-f8b8-41e1-a512-793605f20525',
    title: 'Знайди свій шлях і силу в Божій любові щодня',
    subtitle: 'Його любов – невичерпне джерело підтримки у кожній ситуації',
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Слайдер із зображеннями */}
      {slides.map((slide, index) => (
          <motion.div
              key={slide.id}
              className="absolute inset-0 w-full h-full"
              initial={{opacity: 0}}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.1,
              }}
              transition={{
                opacity: {duration: 1.2},
                scale: {duration: 8}
              }}
          >
            <div className="absolute inset-0 bg-black/50 z-10"/>
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.imageMobile}/>
              <img
                  src={slide.imageDesktop}
                  alt={`Фото з церковного служіння: ${slide.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
          </motion.div>
      ))}

      {/* Вміст слайдера */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 z-20">
        <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
        >
          {slides[current].title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200"
        >
          {slides[current].subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button to="/portfolio" variant="primary" size="lg">
            Переглянути проєкти
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Зв'язатись з нами
          </Button>
        </motion.div>
      </div>

      {/* Індикатори слайдера */}
      <div className="absolute bottom-32 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-accent-500 w-10' : 'bg-white/50'
            }`}
            aria-label={`Перейти до слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Кнопка прокрутки вниз */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -ml-16 text-white z-20 flex flex-col items-center"
        aria-label="Прокрутити вниз"
      >
        <span className="text-sm mb-2">Прокрутити вниз</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;