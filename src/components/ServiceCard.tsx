import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { useSidebarStore } from '../store/sidebarStore';
import { MonitorIcon } from '../icons/media';
import { PlusIcon } from '../icons/interface';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  id: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description, id }) => {
  const { setActiveElement } = useSidebarStore();
  const { open, titleValue, descriptionValue } = useDrawerStore();

  const handleTitleClick = () => {
    open('title', 'Edytuj tytuł', title);
    setActiveElement('title');
  };

  const handlePriceClick = () => {
    open('price', 'Edytuj cenę', price);
    setActiveElement('price');
  };

  const handleDescriptionClick = () => {
    open('description', 'Edytuj opis', description);
    setActiveElement('description');
  };

  const handleLinkClick = () => {
    open('link', 'Edytuj link');
    setActiveElement('link');
  };

  const handleLogoClick = () => {
    open('logo', 'Edytuj logo');
    setActiveElement('logo');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-start gap-5">
        <div className="rounded-md hover:ring-1 hover:ring-primary p-0.5 -m-0.5 transition-all">
          <button 
            onClick={handleLogoClick}
            className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center flex-shrink-0"
          >
            <MonitorIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between pt-[0.46rem]">
            <button
              onClick={handleTitleClick}
              className="text-left rounded-md hover:ring-1 hover:ring-primary px-1 transition-all"
            >
              <h3 className="text-[18px] font-medium text-gray-600">
                {titleValue || title}
              </h3>
            </button>
            <button
              onClick={handlePriceClick}
              className="text-[18px] font-medium text-gray-600 rounded-md hover:ring-1 hover:ring-primary px-1 transition-all"
            >
              {price}
            </button>
          </div>
          <button
            onClick={handleDescriptionClick}
            className="text-left w-full rounded-md hover:ring-1 hover:ring-primary px-1 mt-2 transition-all"
          >
            <p className="text-[14px] text-gray-500">
              {descriptionValue || description}
            </p>
          </button>
          <div className="flex items-center justify-between mt-4">
            <button 
              onClick={handleLinkClick}
              className="text-[14px] font-medium text-primary hover:text-primary/80 rounded-md hover:ring-1 hover:ring-primary px-1 transition-all"
            >
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