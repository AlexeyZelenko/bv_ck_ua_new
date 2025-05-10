import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { projects as mockProjects } from '../data';
import { Project } from '../types';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'photo' | 'video' | 'combined'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'ФотоВідео Студія | Портфоліо';
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];

      // Об'єднуємо реальні проекти з моковими
      setProjects([...mockProjects, ...projectsData]);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(mockProjects);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects = activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Наше портфоліо</h1>
              <p className="text-xl text-gray-200">
                Перегляньте наші найкращі роботи та переконайтеся в якості наших послуг
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap justify-center gap-2">
                {['all', 'photo', 'video', 'combined'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category as any)}
                        className={`px-6 py-2 rounded-full transition-all ${
                            activeCategory === category
                                ? 'bg-accent-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {category === 'all' && 'Всі роботи'}
                      {category === 'photo' && 'Фотографія'}
                      {category === 'video' && 'Відео'}
                      {category === 'combined' && 'Комбіновані'}
                    </button>
                ))}
              </div>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                      <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onClick={() => setSelectedProject(project)}
                          className="cursor-pointer group relative aspect-[4/3] rounded-lg overflow-hidden"
                      >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-200 mb-2">{project.description}</p>
                          <div className="flex items-center">
                      <span className="text-accent-400 text-sm mr-2">
                        {project.category === 'photo' && 'Фотографія'}
                        {project.category === 'video' && 'Відео'}
                        {project.category === 'combined' && 'Комбіновані'}
                      </span>
                            <span className="text-sm text-gray-300">{project.date}</span>
                          </div>
                        </div>
                      </motion.div>
                  ))}
                </div>
            )}
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="relative">
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white rounded-full p-2 transition-colors z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="aspect-video w-full">
                      <img
                          src={selectedProject.imageUrl}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-4">
                    <span className="bg-accent-500 text-white text-sm py-1 px-3 rounded-full mr-2">
                      {selectedProject.category === 'photo' && 'Фотографія'}
                      {selectedProject.category === 'video' && 'Відео'}
                      {selectedProject.category === 'combined' && 'Комбіновані'}
                    </span>
                        <span className="text-gray-500">{selectedProject.date}</span>
                      </div>

                      <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                      <p className="text-gray-700 mb-6">{selectedProject.description}</p>

                      {selectedProject?.fullDescription && (
                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Про проект</h3>
                            <p className="text-gray-600">{selectedProject.fullDescription}</p>
                          </div>
                      )}

                      {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-4">Галерея проекту</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {selectedProject.additionalImages.map((image, idx) => (
                                  <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`${selectedProject.title} - зображення ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                  </div>
                              ))}
                            </div>
                          </div>
                      )}

                      {selectedProject.videoUrl && (
                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-4">Відео</h3>
                            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                              <iframe
                                  src={selectedProject.videoUrl}
                                  title={selectedProject.title}
                                  className="w-full h-full"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                      )}

                      {selectedProject.client && (
                          <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Клієнт</h3>
                            <p className="text-gray-600">{selectedProject.client}</p>
                          </div>
                      )}

                      <div className="flex justify-end">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors"
                        >
                          Закрити
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
};

export default PortfolioPage;