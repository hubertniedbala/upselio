import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';

const TabBar: FC = () => {
  const { open } = useDrawerStore();

  const handleLibraryClick = () => {
    open('library', 'Biblioteka komponentów', 'Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.');
  };

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100">
      <div className="h-[112px]">
        <div className="h-full flex justify-between items-center px-8 py-7">
          <div className="flex items-start gap-4">
            <button className="px-1 pt-px pb-[11px] flex items-center gap-2 border-b-2 border-primary">
              <div className="text-sm font-medium font-poppins text-primary">
                Widok komponentu
              </div>
            </button>
            <button className="px-1 pt-px pb-[11px] flex items-center gap-2">
              <div className="text-sm font-medium font-poppins text-gray-300">
                Warunki wyświetlania
              </div>
              <div className="w-1.5 h-[22px] pt-[9px] pb-[7px] flex items-center">
                <div className="w-1.5 h-1.5">
                  <div className="w-1.5 h-1.5 bg-error rounded-full"></div>
                </div>
              </div>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLibraryClick}
              className="px-4 py-2.5 bg-gray-50 text-secondary rounded-md shadow border border-gray-200 flex items-center gap-2"
            >
              <span className="font-poppins text-sm font-medium">Biblioteka</span>
            </button>
            <button className="px-4 py-2.5 bg-primary rounded-md shadow border border-primary flex items-center gap-2 hover:bg-primary-dark transition-colors">
              <span className="text-white text-sm font-medium font-poppins">Zapisz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBar; 