import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Users, Award } from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  const stats = [
    {
      icon: <Camera className="h-8 w-8 text-accent-500" />,
      label: 'Проекти в портфоліо',
      value: '24',
    },
    {
      icon: <Video className="h-8 w-8 text-accent-500" />,
      label: 'Відео проекти',
      value: '12',
    },
    {
      icon: <Users className="h-8 w-8 text-accent-500" />,
      label: 'Команда',
      value: '8',
    },
    {
      icon: <Award className="h-8 w-8 text-accent-500" />,
      label: 'Завершені проекти',
      value: '150+',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Дашборд</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              {stat.icon}
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardPage;