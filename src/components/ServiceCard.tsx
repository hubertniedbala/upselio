import { FC, useState } from 'react';
import { Monitor, Plus } from 'lucide-react';

interface ServiceCardProps {
  title?: string;
  price?: string;
  description?: string;
  isSelected?: boolean;
  onClick?: () => void;
  onIconClick?: () => void;
  onTitleClick?: () => void;
  onPriceClick?: () => void;
  onDescriptionClick?: () => void;
  onLinkClick?: () => void;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title = "Moja pierwsza usługa",
  price = "79,00 zł",
  description = "To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)",
  isSelected = false,
  onClick,
  onIconClick,
  onTitleClick,
  onPriceClick,
  onDescriptionClick,
  onLinkClick
}) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [clickedElement, setClickedElement] = useState<string | null>(null);

  const handleClick = (element: string) => {
    setClickedElement(clickedElement === element ? null : element);
    if (onClick) onClick();
  };

  return (
    <div className="flex p-3 w-[430px] bg-white rounded-lg shadow-sm">
      {/* Icon Container */}
      <div 
        className={`flex-none w-14 h-14 rounded-lg flex items-center justify-center border
          ${hoveredElement === 'icon' ? 'border-[#D9DCE4]' : 'border-transparent'}
          ${clickedElement === 'icon' ? 'border-[#2271B1]' : ''}`}
        onMouseEnter={() => setHoveredElement('icon')}
        onMouseLeave={() => setHoveredElement(null)}
        onClick={() => handleClick('icon')}
      >
        <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
          <Monitor className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow ml-4 space-y-2">
        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <div 
            className={`px-2 py-1 rounded-md border
              ${hoveredElement === 'title' ? 'border-[#D9DCE4]' : 'border-transparent'}
              ${clickedElement === 'title' ? 'border-[#2271B1]' : ''}`}
            onMouseEnter={() => setHoveredElement('title')}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => handleClick('title')}
          >
            <span className="text-lg font-medium text-[#10182a] tracking-tight">
              {title}
            </span>
          </div>
          <div 
            className={`px-2 py-1 rounded-md border
              ${hoveredElement === 'price' ? 'border-[#D9DCE4]' : 'border-transparent'}
              ${clickedElement === 'price' ? 'border-[#2271B1]' : ''}`}
            onMouseEnter={() => setHoveredElement('price')}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => handleClick('price')}
          >
            <span className="text-lg font-medium text-[#10182a] tracking-tight">
              {price}
            </span>
          </div>
        </div>

        {/* Description */}
        <div 
          className={`p-2 rounded-md border
              ${hoveredElement === 'description' ? 'border-[#D9DCE4]' : 'border-transparent'}
              ${clickedElement === 'description' ? 'border-[#2271B1]' : ''}`}
          onMouseEnter={() => setHoveredElement('description')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => handleClick('description')}
        >
          <p className="text-sm text-[#475466]">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-2">
          <button 
            className={`text-sm font-medium text-primary px-2 py-1 rounded-md border
              ${hoveredElement === 'details' ? 'border-[#D9DCE4]' : 'border-transparent'}
              ${clickedElement === 'details' ? 'border-[#2271B1]' : ''}`}
            onMouseEnter={() => setHoveredElement('details')}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => handleClick('details')}
          >
            Szczegóły
          </button>
          <button 
            className={`flex items-center px-4 py-2 bg-white border shadow-sm rounded-md transition-colors
              ${hoveredElement === 'add' ? 'border-[#D9DCE4]' : 'border-[#d0d4dc]'}
              ${clickedElement === 'add' ? 'border-[#2271B1]' : ''}`}
            onMouseEnter={() => setHoveredElement('add')}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => handleClick('add')}
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