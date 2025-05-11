import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, GraduationCap, Users, Heart, BookOpenCheck, Church } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { services } from '../data';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'БлагаВість | Послуги';
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наші служіння</h1>
            <p className="text-xl text-gray-200">
              Служіння – це не просто час, а можливість відчути Бога у спільноті віруючих.
              Дозвольте кожному служінню наповнити ваше серце миром та натхненням від Бога.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-xl overflow-hidden ${
                  service.popular ? 'ring-2 ring-accent-500' : ''
                }`}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Популярне
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Включає:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    {/*<span className="text-2xl font-bold text-gray-900">*/}
                    {/*  {service.price}*/}
                    {/*</span>*/}
                    <Button to="/contact" variant="primary">
                      Детальніше
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Додаткові служіння"
            subtitle="Ми також проводимо інші служіння, які можуть бути вам корисні."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Church className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Водні хрещення</h3>
              <p className="text-gray-600">
                Хрещення у воді – це важливий крок у вашій вірі та посвяті Богу
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <BookOpenCheck className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Школи</h3>
              <p className="text-gray-600">
                Школи де ми навчаємо основам віри та служіння
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Users className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Консультації</h3>
              <p className="text-gray-600">
                Індивідуальні консультації для тих, хто шукає підтримку та поради
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
            >
              <HeartHandshake className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Реабілітація</h3>
              <p className="text-gray-600">
                Програма реабілітації для людей, які потребують допомоги у відновленні
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
            >
              <GraduationCap className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Інститут</h3>
              <p className="text-gray-600">
                Інститут, де ми навчаємо поглибленим основам віри та служіння
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Heart className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Капелани</h3>
              <p className="text-gray-600">
                Капеланські служіння для хворих та їхніх родин
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;