import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, HandHeart } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const services = [
  {
    icon: <BookOpen className="w-12 h-12 text-accent-500 mb-4" />,
    title: 'Недільне',
    description: 'Щонеділі ми збираємося разом як одна духовна родина, щоб піднести наші серця у поклонінні живому Богу. Це час співу хвали, щирої молитви, слухання Слова Божого та спілкування один з одним. Приєднуйтесь до нас, щоб отримати духовне збагачення та відчути Божу присутність.',
    link: '/services#photo',
  },
  {
    icon: <Users className="w-12 h-12 text-accent-500 mb-4" />,
    title: 'Молодіжне',
    description: 'Спеціальні зустрічі для молодих людей, де ми разом досліджуємо Біблію, обговорюємо важливі життєві питання, підтримуємо один одного у вірі та проводимо час у цікавому спілкуванні та активностях. Наша мета – допомогти молоді знайти свій шлях у Бозі та зростати духовно.',
    link: '/services#video',
  },
  {
    icon: <HandHeart className="w-12 h-12 text-accent-500 mb-4" />,
    title: 'Молитовне',
    description: 'Щотижневі зібрання, присвячені спільній молитві за потреби нашої церкви, громади, країни та світу. Ми віримо в силу молитви та запрошуємо кожного приєднатися до нас у цьому важливому служінні, підносячи наші прохання та подяки до Небесного Отця.',
    link: '/services#edit',
  },
];

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Наші служіння"
          subtitle="Разом переживаємо особливі зустрічі з Богом, зберігаючи важливі миті наших сердець."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-all hover:shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button to={service.link} variant="outline">
                Дізнатись більше
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/services" variant="primary" size="lg">
            Всі служіння
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;