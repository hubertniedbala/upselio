import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

interface Icon {
  id: string;
  name: string;
  icon: string;
}

// Lista ikon z Font Awesome (regular)
const icons: Icon[] = [
  // Podstawowe
  { id: '1', name: 'Eye', icon: 'far fa-eye' },
  { id: '2', name: 'Monitor', icon: 'far fa-desktop' },
  { id: '3', name: 'Building', icon: 'far fa-building' },
  { id: '4', name: 'Coins', icon: 'far fa-coins' },
  { id: '5', name: 'Plane', icon: 'far fa-plane' },
  { id: '6', name: 'Star', icon: 'far fa-star' },
  { id: '7', name: 'Mail', icon: 'far fa-envelope' },
  
  // Komunikacja
  { id: '8', name: 'Phone', icon: 'far fa-phone' },
  { id: '9', name: 'Message', icon: 'far fa-message' },
  { id: '10', name: 'Chat', icon: 'far fa-comment' },
  { id: '11', name: 'Bell', icon: 'far fa-bell' },
  { id: '12', name: 'Inbox', icon: 'far fa-inbox' },
  
  // Biznes
  { id: '13', name: 'Briefcase', icon: 'far fa-briefcase' },
  { id: '14', name: 'Chart', icon: 'far fa-chart-bar' },
  { id: '15', name: 'Calculator', icon: 'far fa-calculator' },
  { id: '16', name: 'Dollar', icon: 'far fa-dollar-sign' },
  { id: '17', name: 'Credit Card', icon: 'far fa-credit-card' },
  
  // Media
  { id: '18', name: 'Image', icon: 'far fa-image' },
  { id: '19', name: 'Video', icon: 'far fa-video' },
  { id: '20', name: 'Music', icon: 'far fa-music' },
  { id: '21', name: 'Camera', icon: 'far fa-camera' },
  { id: '22', name: 'Play', icon: 'far fa-play' },
  
  // Interfejs
  { id: '23', name: 'Home', icon: 'far fa-home' },
  { id: '24', name: 'User', icon: 'far fa-user' },
  { id: '25', name: 'Settings', icon: 'far fa-cog' },
  { id: '26', name: 'Search', icon: 'far fa-search' },
  { id: '27', name: 'Lock', icon: 'far fa-lock' },
  
  // Dokumenty
  { id: '28', name: 'File', icon: 'far fa-file' },
  { id: '29', name: 'Folder', icon: 'far fa-folder' },
  { id: '30', name: 'Document', icon: 'far fa-file-alt' },
  { id: '31', name: 'Clipboard', icon: 'far fa-clipboard' },
  { id: '32', name: 'Calendar', icon: 'far fa-calendar' },
  
  // Social Media
  { id: '33', name: 'Heart', icon: 'far fa-heart' },
  { id: '34', name: 'Share', icon: 'far fa-share' },
  { id: '35', name: 'Thumbs Up', icon: 'far fa-thumbs-up' },
  { id: '36', name: 'Comment', icon: 'far fa-comment' },
  { id: '37', name: 'Bookmark', icon: 'far fa-bookmark' },
  
  // Technologia
  { id: '38', name: 'Laptop', icon: 'far fa-laptop' },
  { id: '39', name: 'Mobile', icon: 'far fa-mobile' },
  { id: '40', name: 'Tablet', icon: 'far fa-tablet' },
  { id: '41', name: 'Keyboard', icon: 'far fa-keyboard' },
  { id: '42', name: 'Mouse', icon: 'far fa-mouse' },
  
  // Transport
  { id: '43', name: 'Car', icon: 'far fa-car' },
  { id: '44', name: 'Truck', icon: 'far fa-truck' },
  { id: '45', name: 'Bus', icon: 'far fa-bus' },
  { id: '46', name: 'Bicycle', icon: 'far fa-bicycle' },
  { id: '47', name: 'Train', icon: 'far fa-train' },
  
  // Pogoda
  { id: '48', name: 'Sun', icon: 'far fa-sun' },
  { id: '49', name: 'Moon', icon: 'far fa-moon' },
  { id: '50', name: 'Cloud', icon: 'far fa-cloud' },
  { id: '51', name: 'Snowflake', icon: 'far fa-snowflake' },
  { id: '52', name: 'Wind', icon: 'far fa-wind' },
  
  // Narzędzia
  { id: '53', name: 'Tools', icon: 'far fa-tools' },
  { id: '54', name: 'Wrench', icon: 'far fa-wrench' },
  { id: '55', name: 'Screwdriver', icon: 'far fa-screwdriver' },
  { id: '56', name: 'Hammer', icon: 'far fa-hammer' },
  { id: '57', name: 'Ruler', icon: 'far fa-ruler' },
];

interface IconSelectProps {
  selectedIcon: Icon | null;
  onSelect: (icon: Icon) => void;
}

const IconSelect: FC<IconSelectProps> = ({ selectedIcon, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredIcons, setFilteredIcons] = useState(icons);

  useEffect(() => {
    const filtered = icons.filter((icon) =>
      icon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIcons(filtered);
  }, [query]);

  return (
    <div className="w-full">
      <Combobox value={selectedIcon} onChange={onSelect}>
        <div className="relative">
          <div className="relative w-full">
            <Combobox.Label className="block text-sm font-medium text-gray-600 mb-2">
              Lista ikon
            </Combobox.Label>
            <Combobox.Input
              className="w-full rounded-lg border border-gray-200 py-2 pl-3 pr-10 text-sm text-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(icon: Icon) => icon?.name || ''}
              placeholder="Wyszukaj ikonę..."
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Combobox.Button>
          </div>
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredIcons.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nie znaleziono ikon.
              </div>
            ) : (
              filteredIcons.map((icon) => (
                <Combobox.Option
                  key={icon.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    }`
                  }
                  value={icon}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <i className={`${icon.icon} w-5 h-5 mr-3`} />
                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                          {icon.name}
                        </span>
                      </div>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                            active ? 'text-white' : 'text-primary'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default IconSelect; 