import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { MonitorIcon } from '../icons/media';
import { 
  TitleIcon, 
  DescriptionIcon, 
  CurrencyIcon, 
  PlusIcon 
} from '../icons/interface';

interface ServiceCardProps {
  name: string;
  date: string;
  price: string;
  category: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ name, date, price, category }) => {
  const { open } = useDrawerStore();

  const handleTitleClick = () => {
    open('title', 'Edytuj tytuł', name);
  };

  const handlePriceClick = () => {
    open('price', 'Edytuj cenę', price);
  };

  const handleDescriptionClick = () => {
    open('description', 'Edytuj opis', 'To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex flex-col gap-4">
        {/* Nagłówek karty */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#cde4f1] rounded-md flex items-center justify-center">
            <MonitorIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-grow">
            <h2 className="text-[18px] font-semibold text-gray-600">{name}</h2>
            <p className="text-[14px] text-gray-400">{date}</p>
          </div>
        </div>

        {/* Lista elementów */}
        <div className="space-y-4">
          <button 
            onClick={handleTitleClick}
            className="w-full flex items-center gap-4 p-4 rounded-md hover:bg-gray-50 hover:ring-1 hover:ring-primary transition-colors"
          >
            <TitleIcon className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Tytuł usługi</span>
            <PlusIcon className="w-4 h-4 text-gray-300 ml-auto" />
          </button>

          <button 
            onClick={handleDescriptionClick}
            className="w-full flex items-center gap-4 p-4 rounded-md hover:bg-gray-50 hover:ring-1 hover:ring-primary transition-colors"
          >
            <DescriptionIcon className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Opis</span>
            <PlusIcon className="w-4 h-4 text-gray-300 ml-auto" />
          </button>

          <button 
            onClick={handlePriceClick}
            className="w-full flex items-center gap-4 p-4 rounded-md hover:bg-gray-50 hover:ring-1 hover:ring-primary transition-colors"
          >
            <CurrencyIcon className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 text-sm font-medium">Cena</span>
            <PlusIcon className="w-4 h-4 text-gray-300 ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 