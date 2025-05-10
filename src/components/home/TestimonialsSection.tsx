import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Олена Іваненко',
    role: 'Наречена',
    content: 'Фотографії з нашого весілля вийшли неймовірними! Олександр та його команда зафіксували кожен особливий момент цього дня. Професійний підхід та увага до деталей зробили нашу співпрацю легкою та приємною.',
    image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Максим Петров',
    role: 'Власник бренду одягу',
    content: 'Співпраця з ФотоВідео студією була чудовим досвідом. Вони створили прекрасні фотографії для нашої нової колекції, що допомогло нам значно збільшити продажі. Креативний підхід та якість роботи на найвищому рівні!',
    image: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Юлія Мельник',
    role: 'Директор з маркетингу',
    content: 'Завдяки команді ФотоВідео ми отримали відмінний рекламний ролик для нашої компанії. Професійний підхід, креативні ідеї та швидка реалізація. Обов\'язково будемо співпрацювати ще!',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Відгуки клієнтів" 
          subtitle="Ось що кажуть наші клієнти про співпрацю з нами"
          centered
          light
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[current].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent-500 mb-6">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-xl italic text-gray-300 mb-8">"{testimonials[current].content}"</p>
              
              <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
              <p className="text-accent-400">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all focus:outline-none"
            aria-label="Попередній відгук"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all focus:outline-none"
            aria-label="Наступний відгук"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                index === current ? 'bg-accent-500 scale-125' : 'bg-gray-500'
              }`}
              aria-label={`Перейти до відгуку ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;