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
  title?: string;
  price?: string;
  description?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ 
  title = "Moja pierwsza usługa",
  description = "To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)",
  price = "79,00 zł"
}) => {
  const { open } = useDrawerStore();

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-start gap-5">
        <div className="rounded-md hover:ring-1 hover:ring-primary p-0.5 -m-0.5 transition-all">
          <button 
            onClick={() => open('logo', 'Logo', 'Jeśli chcesz dodać swoje logo')}
            className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center flex-shrink-0"
          >
            <MonitorIcon className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between pt-[0.46rem]">
            <button 
              onClick={() => open('title', 'Tytuł usługi', 'Opis usługi jaki chcesz dodać')}
              className="text-left rounded-md hover:ring-1 hover:ring-primary px-1 transition-all"
            >
              <h3 className="text-[18px] font-medium text-gray-600">{title}</h3>
            </button>
            <button 
              onClick={() => open('price', 'Cena', 'Wskaż wartość usługi')}
              className="text-[18px] font-medium text-gray-600 rounded-md hover:ring-1 hover:ring-primary px-1 transition-all"
            >
              {price}
            </button>
          </div>

          <button 
            onClick={() => open('description', 'Opis', 'Opis usługi jaki chcesz dodać')}
            className="text-left w-full rounded-md hover:ring-1 hover:ring-primary px-1 mt-2 transition-all"
          >
            <p className="text-[14px] text-gray-500">{description}</p>
          </button>

          <div className="flex items-center justify-between mt-4">
            <button 
              onClick={() => open('link', 'Link do usługi', 'Dodaj link do swojej usługi')}
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