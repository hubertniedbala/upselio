import { FC, useState } from 'react';
import { useDrawerStore } from '../store/drawerStore';

const LibraryIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-current"
  >
    <path 
      d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const TabNavigation: FC = () => {
  const [enabled, setEnabled] = useState(true);
  const { toggle, isOpen } = useDrawerStore();

  return (
    <div className="h-full flex justify-between items-center px-8 py-7">
      <div className="border-b flex items-start gap-2">
        <div className="flex items-start gap-4">
          {/* Active Tab */}
          <div className="px-1 pt-px pb-[11px] border-b-2 border-primary flex items-center gap-2">
            <div className="text-primary text-sm font-medium font-poppins">
              Widok komponentu
            </div>
          </div>

          {/* Inactive Tab */}
          <div className="px-1 pb-2.5 flex items-center gap-2">
            <div className="text-gray-300 text-sm font-medium font-poppins">
              Wszystkie
            </div>
          </div>

          {/* Inactive Tab with Error */}
          <div className="px-1 pb-2.5 flex items-center gap-2">
            <div className="text-gray-300 text-sm font-medium font-poppins">
              Warunki wyświetlania
            </div>
            <div className="w-1.5 h-[22px] pt-[9px] pb-[7px] flex items-center">
              <div className="w-1.5 h-1.5">
                <div className="w-1.5 h-1.5 bg-error rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          <div className={`
            w-9 h-5 
            ${enabled ? 'bg-primary' : 'bg-gray-200'}
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
          <LibraryIcon />
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