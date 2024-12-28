import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { MonitorIcon } from '../icons/media';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description }) => {
  const { open } = useDrawerStore();
  const currentTitle = useDrawerStore(state => state.inputValue) || title;

  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
          <MonitorIcon className="w-5 h-5 text-primary" />
        </div>
        
        {/* Tytuł z możliwością edycji */}
        <button
          onClick={() => open('title', 'Tytuł usługi', currentTitle)}
          className="text-left hover:bg-gray-50 p-2 rounded transition-colors"
        >
          <h3 className="text-gray-600 font-medium">
            {currentTitle}
          </h3>
        </button>
      </div>

      <p className="text-gray-500 mt-4">
        {description}
      </p>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-gray-600 font-medium">
          {price}
        </span>
        <div className="flex items-center gap-2">
          <button className="text-primary hover:text-primary/80 transition-colors">
            Szczegóły
          </button>
          <button className="px-4 py-2 bg-white rounded-md border border-gray-200 shadow hover:bg-gray-50 transition-colors">
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 