import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Camera, Grid, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Хедер */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Camera className="h-8 w-8 text-accent-500" />
              <span className="ml-2 text-xl font-bold">Адмін панель</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-accent-500 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Вийти
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Бічне меню */}
          <nav className="w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-accent-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <Grid className="h-5 w-5 mr-2" />
              Дашборд
            </NavLink>
            <NavLink
              to="/admin/portfolio"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-accent-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <Camera className="h-5 w-5 mr-2" />
              Портфоліо
            </NavLink>
          </nav>

          {/* Основний контент */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;