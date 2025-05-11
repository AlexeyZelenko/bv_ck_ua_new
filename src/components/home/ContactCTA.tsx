import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail } from 'lucide-react';
import Button from '../common/Button';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0 md:max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готові доєднатися до нас?</h2>
            <p className="text-lg text-gray-100 mb-6">
              Зв'яжіться з нами сьогодні, щоб отримати консультацію. Ми чекаємо на Вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" size="lg" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Напишіть нам
              </Button>
              <Button href="tel:+380501234567" variant="outline" size="lg" className="flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Запланувати дзвінок
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-900 max-w-sm"
          >
            <h3 className="text-xl font-bold mb-2">Наші контакти</h3>
            <p className="text-gray-600 mb-4">Ми завжди раді відповісти на ваші запитання</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Телефон:</h4>
                <a 
                  href="tel:+380501234567" 
                  className="text-accent-600 hover:text-accent-800 transition-colors"
                >
                  +38 (050) 123-45-67
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg">Email:</h4>
                <a 
                  href="mailto:partner@bv.ck.ua"
                  className="text-accent-600 hover:text-accent-800 transition-colors"
                >
                  partner@bv.ck.ua
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg">Адреса:</h4>
                <address className="not-italic text-gray-600">
                  вул. Сіна, 5<br />
                  Черкаси, 18000<br />
                  Україна
                </address>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;