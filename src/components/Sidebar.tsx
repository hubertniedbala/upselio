import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <div className="w-[400px] bg-white shadow border-l border-gray-100">
      <div className="px-6 pb-6">
        <div className="pt-6 flex gap-4">
          <div className="flex-1">
            <h2 className="text-gray-600 text-xl font-semibold font-inter leading-[30px]">
              Biblioteka komponentów
            </h2>
            <p className="text-gray-400 text-sm font-normal font-inter">
              Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.
            </p>
          </div>
          <button className="p-2.5 rounded-lg">
            <span className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6">
        <h3 className="text-gray-500 text-sm font-medium font-poppins">
          Aktywne w komponencie
        </h3>
        
        {/* Component items */}
        <SidebarItem 
          title="Tytuł usługi"
          description="Opis usługi jaki chcesz dodać"
        />
        <SidebarItem 
          title="Opis"
          description="Opis usługi jaki chcesz dodać"
        />
        {/* Add more items... */}
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
      <div className="flex-1">
        <h4 className="text-gray-500 text-base font-medium font-poppins">
          {title}
        </h4>
        <p className="text-gray-400 text-sm font-normal font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Sidebar; 