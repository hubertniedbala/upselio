import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import TabNavigation from '../components/TabNavigation';
import Drawer from '../components/Drawer';
import { useDrawerStore } from '../store/drawerStore';

const MainLayout: FC = () => {
  const { isOpen } = useDrawerStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Górny pasek z logo i nawigacją */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-[72px] bg-white shadow border-b border-gray-100">
          <div className="w-full h-full px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <a href="/all">
                <img src="/logo.svg" alt="Logo" className="h-8" />
              </a>
              <div className="flex items-center gap-1 ml-4">
                <a className="px-3 py-2 rounded-md text-gray-500" href="/all">
                  <span className="font-poppins text-sm font-medium">Usługi</span>
                </a>
                <a className="px-3 py-2 rounded-md text-gray-500" href="/settings">
                  <span className="font-poppins text-sm font-medium">Ustawienia</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="text-gray-500 font-poppins text-sm font-medium">Centrum pomocy</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pasek z zakładkami i kontrolkami */}
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100">
        <div className="h-[112px]">
          <TabNavigation />
        </div>
      </div>

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