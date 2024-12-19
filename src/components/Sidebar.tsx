import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';

const Sidebar: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);

  return (
    <div 
      className={`
        fixed top-[184px] right-0 bottom-0 
        w-[400px] bg-white shadow-lg border-l border-gray-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-600 font-inter">
                Biblioteka komponentów
              </h2>
              <p className="text-sm text-gray-400 font-inter">
                Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.
              </p>
            </div>
            <button className="p-2.5 rounded-lg hover:bg-gray-50">
              <span className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-4">
        <h3 className="text-sm font-medium text-gray-500 font-poppins">
          Aktywne w komponencie
        </h3>
        
        <div className="space-y-3">
          <SidebarItem 
            title="Tytuł usługi"
            description="Opis usługi jaki chcesz dodać"
          />
          <SidebarItem 
            title="Opis"
            description="Opis usługi jaki chcesz dodać"
          />
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  title: string;
  description: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ title, description }) => {
  return (
    <div className="p-5 bg-white rounded-md shadow border border-gray-100 flex gap-3">
      <div className="w-10 h-10 p-2.5 bg-[#cde4f1] rounded-[20px] flex items-center justify-center">
        <span className="w-5 h-5" />
      </div>
      <div className="space-y-0.5">
        <h4 className="text-base font-medium text-gray-500 font-poppins">
          {title}
        </h4>
        <p className="text-sm text-gray-400 font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Sidebar; 