import { FC, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDrawerStore } from '../store/drawerStore';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TabNavigation from '../components/TabNavigation';

const MainLayout: FC = () => {
  const { isOpen, close } = useDrawerStore();
  const location = useLocation();
  const showTabNav = location.pathname !== '/all';
  const showSidebar = location.pathname === '/services/new';
  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!showSidebar) {
      close();
    }
  }, [location.pathname, close]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-[72px] bg-white shadow border-b border-gray-100">
          <Navbar />
        </div>
      </div>

      {showTabNav && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100">
          <div className="h-[112px]">
            <TabNavigation />
          </div>
        </div>
      )}

      <div className={showTabNav ? "pt-[184px]" : "pt-[72px]"}>
        <main className={`transition-all duration-300 ${showSidebar && isOpen ? 'mr-[400px]' : ''}`}>
          <Outlet />
        </main>
      </div>

      {showSidebar && <Sidebar 
        titleInputRef={titleInputRef}
        priceInputRef={priceInputRef}
        descriptionTextareaRef={descriptionTextareaRef}
        linkInputRef={linkInputRef}
      />}
    </div>
  );
};

export default MainLayout; 