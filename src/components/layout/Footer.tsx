import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип та опис */}
          <div className="space-y-4">
            <Link to="/" className="text-white font-bold text-2xl flex items-center">
              <Heart className="mr-2 text-accent-500" />
              <span>БлагаВість</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Ваші життя заслуговує найкращої якості. Ми створюємо атмосферу, яка змінює долі.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Facebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Навігація */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent-500 transition-colors">Головна</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent-500 transition-colors">Служіння</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-accent-500 transition-colors">Портфоліо</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-500 transition-colors">Про нас</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-accent-500 transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-500 transition-colors">Контакти</Link>
              </li>
            </ul>
          </div>

          {/* Послуги */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Наші служіння</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#wedding" className="text-gray-400 hover:text-accent-500 transition-colors">Недільне служіння</Link>
              </li>
              <li>
                <Link to="/services#event" className="text-gray-400 hover:text-accent-500 transition-colors">Молодіжні зустрічи</Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-gray-400 hover:text-accent-500 transition-colors">Молитовні зустрічи</Link>
              </li>
              <li>
                <Link to="/services#aerial" className="text-gray-400 hover:text-accent-500 transition-colors">Недільна школа</Link>
              </li>
              <li>
                <Link to="/services#portrait" className="text-gray-400 hover:text-accent-500 transition-colors">Підліткові зустрічи</Link>
              </li>
              <li>
                <Link to="/services#retouching" className="text-gray-400 hover:text-accent-500 transition-colors">Кормлення нужденних</Link>
              </li>
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Контакти</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-accent-500 mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-400">вул. Сінна 5, Черкаси, Україна</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent-500 mr-2 h-5 w-5" />
                <a href="tel:+380501234567" className="text-gray-400 hover:text-accent-500 transition-colors">+38 (050) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent-500 mr-2 h-5 w-5" />
                <a href="mailto:info@fotovideo.ua" className="text-gray-400 hover:text-accent-500 transition-colors">info@fotovideo.ua</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} БлагаВість. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;