import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDrawerStore } from '../store/drawerStore';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabNavigation from '../components/TabNavigation';

const MainLayout: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const location = useLocation();
  const showTabNav = location.pathname !== '/all';

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="h-[72px] bg-white shadow border-b border-gray-100">
          <Navbar />
        </div>
        {showTabNav && (
          <div className="h-[112px] bg-white border-b border-gray-100">
            <TabNavigation />
          </div>
        )}
      </header>

      <div className={showTabNav ? "pt-[184px]" : "pt-[72px]"}>
        <main className={`transition-all duration-300 ${isOpen ? 'mr-[400px]' : ''}`}>
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