import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { projects } from '../../data';

const PortfolioPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'service' | 'children' | 'young'>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects.slice(0, 6) 
    : projects.filter(project => project.category === activeCategory).slice(0, 6);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Наші проєкти"
          subtitle="Перегляньте деякі з наших останніх проєктів та переконайтеся в нашій якості"
          centered
          light
        />

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'service', 'children', 'young'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as any)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === category 
                    ? 'bg-accent-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category === 'all' && 'Всі'}
                {category === 'service' && 'Служіння'}
                {category === 'children' && 'Діти'}
                {category === 'young' && 'Молодь'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
              <motion.div
                  key={project.id}
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-100px'}}
                  transition={{duration: 0.5, delay: index * 0.1}}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <picture>
                  <source media="(max-width: 768px)" srcSet={project.imageUrlMobile}/>
                  <img
                      src={project.imageUrlDesktop}
                      alt={`Фото з церковного служіння: ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </picture>

                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center">
                  <span className="text-accent-400 text-sm mr-2">
                    {project.category === 'service' && 'Служіння'}
                    {project.category === 'children' && 'Діти'}
                    {project.category === 'young' && 'Молодь'}
                  </span>
                    <span className="text-gray-400 text-sm">{project.date}</span>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/portfolio" variant="primary" size="lg">
            Все портфоліо
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;