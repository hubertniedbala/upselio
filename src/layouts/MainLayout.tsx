import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Drawer from '../components/Drawer';
import { useDrawerStore } from '../store/drawerStore';

interface DrawerRefs {
  titleInputRef: React.RefObject<HTMLInputElement>;
  priceInputRef: React.RefObject<HTMLInputElement>;
  descriptionTextareaRef: React.RefObject<HTMLTextAreaElement>;
  linkInputRef: React.RefObject<HTMLInputElement>;
}

const MainLayout: FC = () => {
  const { isOpen } = useDrawerStore();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <Outlet />
      </main>
      {isOpen && <Drawer />}
    </div>
  );
};

export default MainLayout; 