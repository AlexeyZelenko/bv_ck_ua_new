import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { teamMembers } from '../../data';
import Button from '../common/Button';

const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Наша команда" 
          subtitle="Познайомтеся з професіоналами, які втілюють ідеї в життя"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-4 relative overflow-hidden rounded-lg aspect-[3/4]">
                <picture>
                  <source media="(max-width: 768px)" srcSet={member.imageUrlMobile}/>
                  <img
                      src={member.imageUrlDesktop}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    {member.socialLinks?.instagram && (
                      <a 
                        href={member.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-500 transition-colors"
                      >
                        <Instagram />
                      </a>
                    )}
                    {member.socialLinks?.facebook && (
                      <a 
                        href={member.socialLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-500 transition-colors"
                      >
                        <Facebook />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-accent-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/about" variant="secondary">
            Більше про нас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;