import { FC } from 'react';
import { MonitorIcon } from '../icons/media';

interface IconSelectProps {
  onSelect: (icon: string) => void;
  selectedIcon?: string;
}

const IconSelect: FC<IconSelectProps> = ({ onSelect, selectedIcon }) => {
  const icons = [
    {
      id: 'monitor',
      icon: <MonitorIcon className="w-5 h-5" />,
      name: 'Monitor'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {icons.map((icon) => (
        <button
          key={icon.id}
          onClick={() => onSelect(icon.id)}
          className={`p-3 rounded-lg flex items-center justify-center ${
            selectedIcon === icon.id
              ? 'bg-primary/10 text-primary ring-2 ring-primary'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {icon.icon}
        </button>
      ))}
    </div>
  );
};

export default IconSelect; 