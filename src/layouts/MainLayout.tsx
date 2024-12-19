import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDrawerStore } from '../store/drawerStore';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabNavigation from '../components/TabNavigation';

const MainLayout: FC = () => {
  const isDrawerOpen = useDrawerStore((state) => state.isOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="h-[72px] bg-white shadow border-b border-gray-100">
          <Navbar />
        </div>
        <div className="bg-white border-b border-gray-100">
          <TabNavigation />
        </div>
      </header>

      <div className="pt-[128px]">
        <main className={`transition-all duration-300 ${isDrawerOpen ? 'mr-[400px]' : ''}`}>
          <div className="container mx-auto px-8 py-6">
            <Outlet />
          </div>
        </main>
      </div>

      <Sidebar />
    </div>
  );
};

export default MainLayout; 