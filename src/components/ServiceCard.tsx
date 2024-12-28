import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { MonitorIcon } from '../icons/media';
import { PlusIcon } from '../icons/interface';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description }) => {
  const { open } = useDrawerStore();
  const currentTitle = useDrawerStore(state => state.inputValue) || title;

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-start gap-5">
        <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]">
          <MonitorIcon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between pt-[0.46rem]">
            <button
              onClick={() => open('title', 'Tytuł usługi', currentTitle)}
              className="text-left"
            >
              <h3 className="text-[18px] font-medium text-gray-600">
                {currentTitle}
              </h3>
            </button>
            <span className="text-[18px] font-medium text-gray-600">
              {price}
            </span>
          </div>
          <p className="text-[14px] text-gray-500 mt-2 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <button className="text-[14px] font-medium text-primary hover:text-primary/80 transition-colors">
              Szczegóły
            </button>
            <button className="px-4 py-2.5 bg-white text-sm font-medium rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <PlusIcon className="w-5 h-5" />
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 