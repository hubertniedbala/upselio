import { FC, SVGProps } from 'react';
import { ServiceIcon } from './icons';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusIcon: FC<IconProps> = ({ className, ...props }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceCard: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-4">
      <div className="flex gap-3">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
            <ServiceIcon className="text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Title and Price */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-600 text-lg font-medium font-poppins">
              Tytuł usługi
            </h3>
            <div className="text-gray-600 text-lg font-medium font-poppins">
              0,00 zł
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm font-normal font-inter mb-4">
            Tutaj wpisz swój opis usługi. Treść powinna zachęcać klientów do skorzystania więc nie zapomnij o języku korzyści.
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <button className="text-primary text-sm font-medium font-poppins">
              Szczegóły
            </button>
            <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <PlusIcon className="text-gray-500" />
              <span className="text-gray-500 font-poppins text-sm font-medium">
                Dodaj
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 