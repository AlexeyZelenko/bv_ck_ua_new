import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'ФотоВідео Студія | Контакти';
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Зв'яжіться з нами
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl text-gray-200"
          >
            Маєте запитання? Заповніть форму або зв'яжіться з нами за допомогою вказаних контактів.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Контактна інформація</h3>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <MapPin className="text-accent-500 mr-4 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Адреса:</h4>
                      <address className="not-italic text-gray-600">
                        вул. Хрещатик 22<br />
                        Київ, 01001<br />
                        Україна
                      </address>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Phone className="text-accent-500 mr-4 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Телефон:</h4>
                      <a href="tel:+380501234567" className="text-gray-600 hover:text-accent-600 transition-colors">
                        +38 (050) 123-45-67
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Mail className="text-accent-500 mr-4 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email:</h4>
                      <a href="mailto:info@fotovideo.ua" className="text-gray-600 hover:text-accent-600 transition-colors">
                        info@fotovideo.ua
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Clock className="text-accent-500 mr-4 h-6 w-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Графік роботи:</h4>
                      <p className="text-gray-600">
                        Пн-Пт: 10:00 - 19:00<br />
                        Сб: 11:00 - 16:00<br />
                        Нд: Вихідний
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Соціальні мережі</h3>
                
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
                    >
                      <Instagram className="mr-4 h-6 w-6" />
                      <span>@fotovideo.studio</span>
                    </a>
                  </li>
                  
                  <li>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
                    >
                      <Facebook className="mr-4 h-6 w-6" />
                      <span>ФотоВідео Студія</span>
                    </a>
                  </li>
                  
                  <li>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
                    >
                      <Youtube className="mr-4 h-6 w-6" />
                      <span>ФотоВідео Студія</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Де нас знайти" 
            subtitle="Ми знаходимося в центрі Києва, поруч з метро Хрещатик"
            centered
          />
          
          <div className="h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4894320718003!2d30.5197656!3d50.447723299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56b2456d3b%3A0xd062ae171b57e947!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwg0JrQuNC10LI!5e0!3m2!1sru!2sua!4v1634897440418!5m2!1sru!2sua" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Карта розташування студії"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;