import { FC } from 'react';

const TabNavigation: FC = () => {
  return (
    <div className="self-stretch h-10 px-8 flex justify-between items-center">
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
        {/* Toggle */}
        <div className="flex-col gap-2.5">
          <div className="w-9 h-5 p-0.5 bg-primary rounded-xl flex items-center justify-end">
            <div className="w-4 h-4 bg-white rounded-full shadow" />
          </div>
        </div>

        {/* Library button */}
        <button className="px-4 py-2.5 bg-gray-50 rounded-md flex items-center gap-2">
          <span className="w-5 h-5" />
          <span className="text-secondary text-sm font-medium font-poppins">
            Biblioteka
          </span>
        </button>

        {/* Save button */}
        <button className="px-4 py-2.5 bg-primary rounded-md shadow border border-primary flex items-center gap-2">
          <span className="text-white text-sm font-medium font-poppins">
            Zapisz
          </span>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation; 