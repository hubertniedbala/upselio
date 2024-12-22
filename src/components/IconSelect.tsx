import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Icon } from '../types/icon';

// Lista ikon z Font Awesome (regular)
const icons: Icon[] = [
  { id: '1', name: 'Eye', icon: 'fa-regular fa-eye' },
  { id: '2', name: 'Monitor', icon: 'fa-regular fa-desktop' },
  { id: '3', name: 'Building', icon: 'fa-regular fa-building' },
  { id: '4', name: 'Money Bill', icon: 'fa-regular fa-money-bill' },
  { id: '5', name: 'Paper Plane', icon: 'fa-regular fa-paper-plane' },
  { id: '6', name: 'Star', icon: 'fa-regular fa-star' },
  { id: '7', name: 'Envelope', icon: 'fa-regular fa-envelope' },
  { id: '8', name: 'Phone', icon: 'fa-regular fa-phone' },
  { id: '9', name: 'Message', icon: 'fa-regular fa-message' },
  { id: '10', name: 'Comment', icon: 'fa-regular fa-comment' },
  { id: '11', name: 'Bell', icon: 'fa-regular fa-bell' },
  { id: '12', name: 'Inbox', icon: 'fa-regular fa-inbox' },
  { id: '13', name: 'Briefcase', icon: 'fa-regular fa-briefcase' },
  { id: '14', name: 'Chart Bar', icon: 'fa-regular fa-chart-bar' },
  { id: '15', name: 'Calculator', icon: 'fa-regular fa-calculator' },
  { id: '16', name: 'Credit Card', icon: 'fa-regular fa-credit-card' },
  { id: '17', name: 'Image', icon: 'fa-regular fa-image' },
  { id: '18', name: 'Video', icon: 'fa-regular fa-video' },
  { id: '19', name: 'User', icon: 'fa-regular fa-user' },
  { id: '20', name: 'File', icon: 'fa-regular fa-file' }
];

interface IconSelectProps {
  selectedIcon: Icon | null;
  onSelect: (icon: Icon) => void;
}

const IconSelect: FC<IconSelectProps> = ({ selectedIcon, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredIcons, setFilteredIcons] = useState(icons);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredIcons(icons);
    } else {
      const filtered = icons.filter((icon) =>
        icon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredIcons(filtered);
    }
  }, [query]);

  const toggleList = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFilteredIcons(icons);
      setQuery('');
    }
  };

  return (
    <div className="w-full">
      <Combobox 
        value={selectedIcon} 
        onChange={(icon: Icon) => {
          onSelect(icon);
          setIsOpen(false);
        }}
        nullable={false}
      >
        <div className="relative w-full">
          <Combobox.Label className="block text-sm font-medium text-gray-600 mb-2">
            Lista ikon
          </Combobox.Label>
          <div className="relative">
            <Combobox.Button as="div" className="relative w-full">
              <Combobox.Input
                className="w-full rounded-lg border border-gray-200 py-2 pl-3 pr-10 text-sm text-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(icon: Icon) => icon?.name || ''}
                placeholder="Wyszukaj ikonę..."
                onClick={toggleList}
              />
              <button 
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onClick={toggleList}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Combobox.Button>
          </div>

          {isOpen && (
            <Combobox.Options static className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredIcons.map((icon) => (
                <Combobox.Option
                  key={icon.id}
                  value={icon}
                  className={({ active }) =>
                    `relative mx-1.5 cursor-pointer select-none py-2 pl-3 pr-9 rounded-md ${
                      active ? 'bg-gray-50' : ''
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                          <i className={`${icon.icon} text-lg`} />
                        </div>
                        <span className={`ml-3 block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                          {icon.name}
                        </span>
                      </div>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                            active ? 'text-gray-600' : 'text-primary'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
};

export default IconSelect; 