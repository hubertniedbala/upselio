import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Drawer from '../components/Drawer';
import { useDrawerStore } from '../store/drawerStore';

const MainLayout: FC = () => {
  const { isOpen } = useDrawerStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Górny pasek z logo i nawigacją */}
      <Header />

      {/* Pasek z zakładkami i kontrolkami */}
      <TabBar />

      {/* Główna zawartość */}
      <div className="pt-[184px]">
        <main className={`transition-all duration-300 ${isOpen ? 'mr-[400px]' : ''}`}>
          <Outlet />
        </main>
        {isOpen && <Drawer />}
      </div>
    </div>
  );
};

export default MainLayout; 