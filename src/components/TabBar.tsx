import { FC } from 'react';
import { PuzzleIcon } from '../icons/interface';

const TabBar: FC = () => {
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
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="
                w-9 h-5 
                bg-primary
                rounded-full 
                peer-focus:ring-2 
                peer-focus:ring-primary/25
                after:content-[''] 
                after:absolute 
                after:top-0.5 
                after:left-0.5 
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:after:translate-x-4
                peer-checked:after:border-white
                after:shadow
                transition-colors
              "></div>
            </label>
            <button className="
              px-4 py-2.5 rounded-md shadow border flex items-center gap-2 transition-colors
              bg-gray-50 text-secondary border-gray-200
            ">
              <PuzzleIcon className="w-5 h-5" />
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