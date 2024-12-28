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
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center flex-shrink-0">
          <MonitorIcon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => open('title', 'Tytuł usługi', currentTitle)}
              className="text-left"
            >
              <h3 className="text-[15px] font-medium text-gray-600">
                {currentTitle}
              </h3>
            </button>
            <span className="text-[15px] font-medium text-gray-600">
              {price}
            </span>
          </div>
          <p className="text-[13px] text-gray-500 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <button className="text-[13px] text-primary hover:text-primary/80 transition-colors">
              Szczegóły
            </button>
            <button className="px-4 py-2 bg-white text-[13px] rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 