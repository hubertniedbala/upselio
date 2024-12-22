import { FC, useState } from 'react';
import { Monitor, Plus } from 'lucide-react';

interface ServiceCardProps {
  title?: string;
  price?: string;
  description?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title = "Moja pierwsza usługa",
  price = "79,00 zł",
  description = "To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)",
  isSelected = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBorderStyles = () => {
    if (isSelected) return 'border-primary';
    if (isHovered) return 'border-gray-300';
    return 'border-transparent';
  };

  return (
    <div 
      className={`flex p-3 w-[430px] border rounded-lg transition-all duration-200 ${getBorderStyles()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Icon Container */}
      <div className={`flex-none w-14 h-14 rounded-lg bg-[#333333] flex items-center justify-center ${isSelected ? 'border border-primary' : ''}`}>
        <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
          <Monitor className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow ml-4 space-y-2">
        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <div className={`px-2 py-1 rounded-md ${isSelected ? 'border border-primary' : ''}`}>
            <span className="text-lg font-medium text-[#10182a] tracking-tight">
              {title}
            </span>
          </div>
          <div className={`px-2 py-1 rounded-md ${isSelected ? 'border border-primary' : ''}`}>
            <span className="text-lg font-medium text-[#10182a] tracking-tight">
              {price}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className={`p-2 bg-[#f4f4f4] rounded-md ${isSelected ? 'border border-primary' : ''}`}>
          <p className="text-sm text-[#475466]">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-2">
          <button className={`text-sm font-medium text-primary px-2 py-1 rounded-md ${isSelected ? 'border border-primary' : ''}`}>
            Szczegóły
          </button>
          <button 
            className={`flex items-center px-4 py-2 bg-white border shadow-sm rounded-md transition-colors
              ${isSelected ? 'border-primary' : 'border-[#d0d4dc]'}
              hover:border-gray-400`}
          >
            <Plus className="text-[#34425a]" />
            <span className="ml-2 text-sm font-medium text-[#34425a]">
              Dodaj
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 