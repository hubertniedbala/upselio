import { FC, useState } from 'react';
import { useDrawerStore } from '../store/drawerStore';

const TabNavigation: FC = () => {
  const [activeTab, setActiveTab] = useState('component');
  const [enabled, setEnabled] = useState(true);
  const { toggle } = useDrawerStore();

  return (
    <div className="h-full flex justify-between items-center px-8 py-7">
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
          className={`px-1 pt-px pb-[11px] flex items-center gap-2`}
        >
          <div className="text-sm font-medium font-poppins text-gray-300">
            Warunki wyświetlania
          </div>
          <div className="w-1.5 h-[22px] pt-[9px] pb-[7px] flex items-center">
            <div className="w-1.5 h-1.5">
              <div className="w-1.5 h-1.5 bg-error rounded-full" />
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center gap-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          <div className={`
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
          `}></div>
        </label>

        <button 
          onClick={toggle}
          className="px-4 py-2.5 bg-gray-50 text-secondary rounded-md shadow border border-gray-200 flex items-center gap-2"
        >
          <span className="font-poppins text-sm font-medium">Biblioteka</span>
        </button>

        <button className="px-4 py-2.5 bg-primary rounded-md shadow border border-primary flex items-center gap-2 hover:bg-primary-dark transition-colors">
          <span className="text-white text-sm font-medium font-poppins">Zapisz</span>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation; 