import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Trash2, Loader } from 'lucide-react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase/config';
import { Project } from '../../types';

const schema = z.object({
  title: z.string().min(1, 'Назва обов\'язкова'),
  description: z.string().min(1, 'Опис обов\'язковий'),
  category: z.enum(['service', 'young', 'children'], {
    required_error: 'Виберіть категорію',
  }),
  image: z.instanceof(FileList).refine((files) => files.length > 0, 'Зображення обов\'язкове'),
});

type FormData = z.infer<typeof schema>;

const AdminPortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
    setIsLoading(false);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const file = data.image[0];
      const storageRef = ref(storage, `portfolio/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const imageUrlDesktop = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, 'projects'), {
        title: data.title,
        description: data.description,
        category: data.category,
        imageUrlDesktop,
        date: new Date().toISOString().split('T')[0],
      });

      reset();
      fetchProjects();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDelete = async (projectId: string) => {
    if (window.confirm('Ви впевнені, що хочете видалити цей проект?')) {
      setIsDeleting(projectId);
      try {
        await deleteDoc(doc(db, 'projects', projectId));
        await fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
      setIsDeleting(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Форма додавання проекту */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-bold mb-6">Додати новий проект</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Назва
            </label>
            <input
              type="text"
              {...register('title')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Опис
            </label>
            <textarea
              {...register('description')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Категорія
            </label>
            <select
              {...register('category')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500"
            >
              <option value="">Виберіть категорію</option>
              <option value="service">Служіння</option>
              <option value="yuong">Молодь</option>
              <option value="children">Діти</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Зображення
            </label>
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-accent-50 file:text-accent-700
                hover:file:bg-accent-100"
            />
            {errors.image && (
              <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                Додавання...
              </>
            ) : (
              <>
                <Plus className="-ml-1 mr-3 h-5 w-5" />
                Додати проект
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Список проектів */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-bold mb-6">Проекти в портфоліо</h2>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="animate-spin h-8 w-8 text-accent-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.imageUrlDesktop}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={isDeleting === project.id}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDeleting === project.id ? (
                      <Loader className="animate-spin h-5 w-5" />
                    ) : (
                      <Trash2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <span className="inline-block bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded">
                    {project.category === 'photo' && 'Фотографія'}
                    {project.category === 'video' && 'Відео'}
                    {project.category === 'combined' && 'Комбіновані'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminPortfolioPage;