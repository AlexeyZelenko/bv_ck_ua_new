import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'БлагаВість Церква | Контакти';
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
              Виникли запитання? Скористайтеся наведеною нижче контактною інформацією або нашими соціальними мережами.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
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
                        вул. Сінна, 5<br />
                        Черкаси, 18000<br />
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
                      <a href="mailto:churchbvch@gmail.com" className="text-gray-600 hover:text-accent-600 transition-colors">
                        churchbvch@gmail.com
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
                        href="https://www.instagram.com/bv.ck.ua/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
                    >
                      <Instagram className="mr-4 h-6 w-6" />
                      <span>@bv.ck.ua</span>
                    </a>
                  </li>

                  <li>
                    <a
                        href="https://www.facebook.com/bv.ck.ua#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
                    >
                      <Facebook className="mr-4 h-6 w-6" />
                      <span>БлагаВість Церква</span>
                    </a>
                  </li>

                  <li>
                    <a
                        href="https://www.youtube.com/channel/UCSb71yKJmS0eHyhRRl00ioQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
                    >
                      <Youtube className="mr-4 h-6 w-6" />
                      <span>БлагаВість Церква</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white m-auto">
          <div className="container mx-auto px-4">
            <SectionTitle
                title="Де нас знайти"
                subtitle="Ми знаходимося в на площі 700-річчя Черкас"
                centered
            />

            <div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <iframe
                  width="100%"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2595.4405292888096!2d32.10316!3d49.419485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9101cca08af2968c!2z0KbQtdGA0LrQvtCy0Ywg0JHQu9Cw0LPQsNGPINCS0LXRgdGC0Ywg0KfQtdGA0LrQsNGB0YHRiw!5e0!3m2!1suk!2sus!4v1603789520347!5m2!1suk!2sus"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта розташування церкви"
              ></iframe>
            </div>
          </div>
        </section>
      </>
  );
};

export default ContactPage;