import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ContactFormData } from '../../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      // Відправка даних в Firebase
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: new Date()
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
      });

      // Скидаємо статус після 5 секунд
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setError('Виникла помилка при відправці форми. Будь ласка, спробуйте пізніше.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Напишіть нам</h3>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-6 bg-green-50 rounded-lg border border-green-100"
        >
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h4 className="text-xl font-bold text-green-700 mb-2">Дякуємо за повідомлення!</h4>
          <p className="text-green-600">
            Ми отримали ваш запит і зв'яжемося з вами найближчим часом.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ім'я *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Послуга
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
              >
                <option value="">Виберіть послугу</option>
                <option value="wedding">Весільна фотозйомка</option>
                <option value="event">Відеозйомка заходів</option>
                <option value="commercial">Комерційна фотозйомка</option>
                <option value="aerial">Аерозйомка дроном</option>
                <option value="portrait">Портретна фотографія</option>
                <option value="other">Інше</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Повідомлення *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start p-4 bg-red-50 rounded-lg border border-red-100"
            >
              <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
              <p className="text-red-700">{error}</p>
            </motion.div>
          )}
          
          <div>
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full flex items-center justify-center"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Відправка...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Надіслати повідомлення
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;