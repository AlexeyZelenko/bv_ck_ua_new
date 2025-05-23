import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Natali Shemshur',
    role: '',
    content: 'Місце для всієї родини! Ця церква насправді жива! Тут майже щодня щось відбувається! Якщо двері зачинені- Блага Звістка служить десь на вулиці))',
    image: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/testimonialsSection%2F162471019_749049262397878_8631024528005367393_n.jpg?alt=media&token=7776146e-614b-4438-9ca0-1a6adfbee768',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ігор Квак',
    role: '',
    content: 'Заходьте не пошкодуєте!',
    image: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/testimonialsSection%2F272766316_3173571926258614_741276702408796203_n%20(1).jpg?alt=media&token=b9a1d49c-ac68-4b97-b11c-3ebe5c9d44ed',
    rating: 5,
  },
  {
    id: 3,
    name: 'Александр Бобков',
    role: '',
    content: 'Великолепные служения Слава Богу!!!',
    image: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/testimonialsSection%2F229733086_871759646791846_1617665890780224503_n%20(1).jpg?alt=media&token=53148893-fad9-4a31-a663-5b0060d02e15',
    rating: 5,
  },
  {
    id: 4,
    name: 'Олег Шемшур',
    role: '',
    content: 'Живая церковь. Открытые люди. Настоящая семья',
    image: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/testimonialsSection%2F272766316_3173571926258614_741276702408796203_n.jpg?alt=media&token=7e18464b-e1d0-40b8-8abb-da8c390a81cd',
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
          title="Відгуки"
          subtitle="Ось що кажуть про нас"
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