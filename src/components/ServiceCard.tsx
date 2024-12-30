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
  description = "Tutaj wpisz swój opis usługi. Treść powinna zachęcać klientów do skorzystania więc nie zapomnij o języku korzyści.",
  price = "0,00 zł"
}) => {
  const { open } = useDrawerStore();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div 
              onClick={() => open('logo', 'Logo', 'Jeśli chcesz dodać swoje logo')}
              className="w-12 h-12 bg-[#cde4f1] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#bcd9e9] transition-colors"
            >
              <MonitorIcon className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div 
                onClick={() => open('title', 'Tytuł usługi', 'Opis usługi jaki chcesz dodać')}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <TitleIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
                  {title}
                </h3>
              </div>
              <div 
                onClick={() => open('price', 'Cena', 'Wskaż wartość usługi')}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <CurrencyIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
                  {price}
                </span>
              </div>
            </div>

            <div 
              onClick={() => open('description', 'Opis', 'Opis usługi jaki chcesz dodać')}
              className="flex items-start gap-2 cursor-pointer group mb-4"
            >
              <DescriptionIcon className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-primary transition-colors" />
              <p className="text-gray-600 group-hover:text-gray-800">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button 
                onClick={() => open('cta', 'CTA', 'Jeśli chcesz dodać przycisk?')}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Szczegóły
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                <PlusIcon className="w-5 h-5" />
                Dodaj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 