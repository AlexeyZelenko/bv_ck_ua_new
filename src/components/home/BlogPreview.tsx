import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { blogPosts } from '../../data';
import Button from '../common/Button';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Наш блог" 
          subtitle="Дізнайтеся більше про фотографію, відеозйомку та тренди в індустрії"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-accent-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button to={`/blog/${post.id}`} variant="text">
                  Читати далі
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/blog" variant="secondary">
            Всі статті
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;