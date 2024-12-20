import { FC, useState } from 'react';
import { DeleteIcon, DuplicateIcon, EditIcon, CategoryIcon, ServiceIcon, PriceIcon } from './icons';

interface ServiceListItemProps {
  name: string;
  date: string;
  price: string;
  category: string;
  status: string;
}

const ServiceListItem: FC<ServiceListItemProps> = ({ name, date, price, category, status }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Service icon */}
          <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
            <ServiceIcon className="text-primary" />
          </div>

          {/* Service info */}
          <div className="space-y-1">
            <h3 className="text-gray-600 font-medium">{name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">{date}</p>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-gray-500 text-sm flex items-center gap-1">
                <CategoryIcon className="text-gray-400" />
                {category}
              </span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-gray-500 text-sm flex items-center gap-1">
                <PriceIcon className="text-gray-400" />
                {price}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <DeleteIcon />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <DuplicateIcon />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <EditIcon />
            </button>
          </div>

          {/* Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            />
            <div className={`
              w-9 h-5 
              ${enabled ? 'bg-primary' : 'bg-gray-200'}
              rounded-full 
              peer-focus:ring-2 
              peer-focus:ring-primary/25
              after:content-[''] 
              after:absolute 
              after:top-0.5 
              after:left-0.5 
              after:bg-white 
              after:rounded-full 
              after:h-4 
              after:w-4 
              after:transition-all
              peer-checked:after:translate-x-4
              peer-checked:after:border-white
              after:shadow
              transition-colors
            `}></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ServiceListItem; 