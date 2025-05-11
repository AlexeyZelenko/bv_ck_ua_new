import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Users, Award, Clock, Heart } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { teamMembers } from '../data';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'БлагаВість Церква | Про нас';
  }, []);

  const stats = [
    {
      icon: <Camera className="w-8 h-8 text-accent-500" />,
      value: '10000+',
      label: 'Змінених життів',
    },
    {
      icon: <Video className="w-8 h-8 text-accent-500" />,
      value: '100+',
      label: 'Проектів',
    },
    {
      icon: <Users className="w-8 h-8 text-accent-500" />,
      value: '10000+',
      label: 'Спасенних людей',
    },
    {
      icon: <Award className="w-8 h-8 text-accent-500" />,
      value: '25+',
      label: 'Років досвіду',
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Про нашу команду</h1>
            <p className="text-xl text-gray-200">
              Ми - команда професіоналів, які люблять свою справу та створюють чуда
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Наша історія</h2>
              <p className="text-gray-600 mb-4">
                Заснована у 1997 році, наша церква пройшла довгий шлях від невеликої до
                повноцінного духовного центру. За цей час ми реалізували сотні
                проектів та допомогли багатьом людям змінити їхні життя.
              </p>
              <p className="text-gray-600">
                Ми постійно розвиваємося, слідкуємо за новими трендами та технологіями, щоб 
                забезпечувати найкращу якість послуг для наших людей.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg" 
                alt="Студія" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg" 
                alt="Команда" 
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Наші досягнення"
            subtitle="Цифри, які говорять самі за себе"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Наша команда"
            subtitle="Познайомтеся з професіоналами, які створюють чуда"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 relative overflow-hidden rounded-lg aspect-[3/4]">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={member.imageUrlMobile}/>
                    <img
                        src={member.imageUrlDesktop}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </picture>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent-500 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <Clock className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Гнучкий графік</h3>
              <p className="text-gray-600">
                Працюємо в зручний для вас час, включаючи вихідні та святкові дні
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <Heart className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Індивідуальний підхід</h3>
              <p className="text-gray-600">
                Кожен проект унікальний, і ми знаходимо особливий підхід до кожного клієнта
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <Award className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Гарантія якості</h3>
              <p className="text-gray-600">
                Ми гарантуємо високу якість кожного проекту та задоволення клієнта
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;