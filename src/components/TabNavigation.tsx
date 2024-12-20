import { FC, useState } from 'react';
import { useDrawerStore } from '../store/drawerStore';

type TabType = 'component' | 'conditions';

const TabNavigation: FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('component');
  const { toggle, isOpen } = useDrawerStore();

  return (
    <div className="h-full flex justify-between items-center px-8 py-7">
      {/* Tabs without bottom border */}
      <div className="flex items-start gap-4">
        <button
          onClick={() => setActiveTab('component')}
          className={`px-1 pt-px pb-[11px] flex items-center gap-2 ${
            activeTab === 'component' ? 'border-b-2 border-primary' : ''
          }`}
        >
          <div className={`text-sm font-medium font-poppins ${
            activeTab === 'component' ? 'text-primary' : 'text-gray-300'
          }`}>
            Widok komponentu
          </div>
        </button>

        <button
          onClick={() => setActiveTab('conditions')}
          className={`px-1 pt-px pb-[11px] flex items-center gap-2 ${
            activeTab === 'conditions' ? 'border-b-2 border-primary' : ''
          }`}
        >
          <div className={`text-sm font-medium font-poppins ${
            activeTab === 'conditions' ? 'text-primary' : 'text-gray-300'
          }`}>
            Warunki wyświetlania
          </div>
          <div className="w-1.5 h-[22px] pt-[9px] pb-[7px] flex items-center">
            <div className="w-1.5 h-1.5">
              <div className="w-1.5 h-1.5 bg-error rounded-full" />
            </div>
          </div>
        </button>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isOpen}
            onChange={toggle}
          />
          <div className={`
            w-9 h-5 
            ${isOpen ? 'bg-primary' : 'bg-gray-200'}
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
          `}></div>
        </label>

        {/* Library button */}
        <button 
          onClick={toggle}
          className={`
            px-4 py-2.5 rounded-md shadow border flex items-center gap-2 transition-colors
            ${isOpen 
              ? 'bg-gray-50 text-secondary border-gray-200' 
              : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
            }
          `}
        >
          <span className="font-poppins text-sm font-medium">
            Biblioteka
          </span>
        </button>

        {/* Save button */}
        <button className="px-4 py-2.5 bg-primary rounded-md shadow border border-primary flex items-center gap-2 hover:bg-primary-dark transition-colors">
          <span className="text-white text-sm font-medium font-poppins">
            Zapisz
          </span>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation; 