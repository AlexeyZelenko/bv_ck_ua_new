import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TeamPreview from '../components/home/TeamPreview';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ФотоВідео Студія | Головна';
  }, []);

  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <TeamPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
};

export default HomePage;