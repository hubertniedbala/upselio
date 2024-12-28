import { FC, Fragment, useEffect, useState } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { useSidebarStore } from '../store/sidebarStore';
import type { SidebarProps } from '../types/sidebar';
import { 
  TypeIcon, 
  DescriptionIcon, 
  HeartIcon, 
  CurrencyIcon,
  LinkIcon,
  TrashIcon,
  CheckIcon,
  ChevronDownIcon,
  MonitorIcon,
  GridIcon,
  MenuIcon
} from '../icons';
import { Switch, Listbox, Transition } from '@headlessui/react';
import { useUploadStore } from '../store/uploadStore';

const linkTexts = [
  'Przejdź do usługi',
  'Kup teraz',
  'Zamów',
  'Więcej informacji',
  'Sprawdź szczegóły'
];

interface IconOption {
  id: number;
  name: string;
  icon: typeof MonitorIcon;
}

const iconOptions: IconOption[] = [
  { id: 1, name: 'Monitor', icon: MonitorIcon },
];

const LibraryView: FC = () => (
  <div className="transition-all duration-300 transform">
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-600 mb-4">Biblioteka komponentów</h2>
      <p className="text-sm text-gray-400">Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.</p>
    </div>
    
    <div className="text-sm font-medium text-gray-600 mb-4">Aktywne w komponencie</div>
    
    <div className="space-y-4">
      <SidebarItem 
        title="Tytuł" 
        description="Dodaj tytuł swojej usługi" 
        icon={TypeIcon} 
        type="title"
      />
      <SidebarItem 
        title="Opis" 
        description="Dodaj opis swojej usługi" 
        icon={DescriptionIcon} 
        type="description"
      />
      <SidebarItem 
        title="Logo" 
        description="Jeśli chcesz dodać swoje logo" 
        icon={HeartIcon} 
        type="logo"
        hasDelete
      />
      <SidebarItem 
        title="Cena" 
        description="Wskaż wartość usługi" 
        icon={CurrencyIcon} 
        type="price"
      />
      <SidebarItem 
        title="Link" 
        description="Wklej link do wybranej usługi" 
        icon={LinkIcon} 
        type="link"
        hasDelete
      />
    </div>
  </div>
);

interface SidebarItemProps {
  title: string;
  description: string;
  icon: FC<{ className?: string }>;
  type: string;
  hasDelete?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ title, description, icon: Icon, type, hasDelete }) => {
  const setActiveElement = useSidebarStore((state) => state.setActiveElement);

  return (
    <div 
      className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm cursor-pointer hover:border-gray-200 transition-colors"
      onClick={() => setActiveElement(type)}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="ml-3 flex-grow">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        {hasDelete && (
          <button 
            className="ml-3 p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // handle delete
            }}
          >
            <span className="sr-only">Usuń</span>
            <TrashIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

const ElementView: FC<SidebarProps> = ({
  titleInputRef,
  priceInputRef,
  descriptionTextareaRef,
  linkInputRef
}) => {
  const [charCount, setCharCount] = useState(0);
  const [regularPrice, setRegularPrice] = useState('');
  const [promoPrice, setPromoPrice] = useState('');
  const [hasPromoPrice, setHasPromoPrice] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [isLogoMode, setIsLogoMode] = useState(true);
  const [selectedLinkText, setSelectedLinkText] = useState(linkTexts[0]);

  const activeElement = useSidebarStore((state) => state.activeElement);

  const getTitle = () => {
    switch (activeElement) {
      case 'title':
        return 'Tytuł usługi';
      case 'description':
        return 'Opis usługi';
      case 'logo':
        return 'Logo';
      case 'price':
        return 'Cena';
      case 'link':
        return 'Link do usługi';
      default:
        return '';
    }
  };

  const getDescription = () => {
    switch (activeElement) {
      case 'title':
        return 'Wpisz tytuł swojej usługi';
      case 'description':
        return 'Dodaj opis swojej usługi';
      case 'logo':
        return 'Dodaj logo lub wybierz ikonę';
      case 'price':
        return 'Ustaw cenę swojej usługi';
      case 'link':
        return 'Dodaj link do swojej usługi';
      default:
        return '';
    }
  };

  const formatPrice = (value: string) => {
    // Implementacja formatowania ceny
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " zł";
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-600 mb-2">{getTitle()}</h2>
          <p className="text-sm text-gray-400">{getDescription()}</p>
        </div>
        
        {activeElement === 'title' && (
          <div>
            <input
              ref={titleInputRef}
              type="text"
              placeholder="Wpisz tytuł usługi"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          </div>
        )}

        {activeElement === 'description' && (
          <div>
            <textarea
              ref={descriptionTextareaRef}
              placeholder="Wpisz opis usługi"
              rows={6}
              maxLength={500}
              onChange={(e) => setCharCount(e.target.value.length)}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none"
            />
            <div className="mt-2 text-sm text-gray-400 text-right">
              {charCount}/500 znaków
            </div>
          </div>
        )}

        {activeElement === 'logo' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">
                {isLogoMode ? 'Logo' : 'Ikona'}
              </span>
              <Switch
                checked={isLogoMode}
                onChange={setIsLogoMode}
                className={`${isLogoMode ? 'bg-primary' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Przełącz typ logo</span>
                <span className={`${isLogoMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>

            {isLogoMode ? (
              <LogoUpload />
            ) : (
              <Listbox value={selectedIcon} onChange={setSelectedIcon}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2.5 pl-4 pr-10 text-left border border-gray-200">
                    <span className="block truncate text-gray-600">
                      {selectedIcon !== null ? iconOptions.find(i => i.id === selectedIcon)?.name : 'Wybierz ikonę'}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {iconOptions.map((icon) => (
                        <Listbox.Option
                          key={icon.id}
                          value={icon.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2.5 pl-10 pr-4 ${
                              active ? 'bg-primary/10 text-primary' : 'text-gray-600'
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                {icon.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            )}
          </div>
        )}

        {activeElement === 'price' && (
          <div className="space-y-4">
            <input
              ref={priceInputRef}
              type="text"
              value={regularPrice}
              onChange={(e) => setRegularPrice(formatPrice(e.target.value))}
              placeholder="Wpisz cenę regularną"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md"
            />
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Cena promocyjna</span>
              <Switch
                checked={hasPromoPrice}
                onChange={setHasPromoPrice}
                className={`${hasPromoPrice ? 'bg-primary' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Włącz cenę promocyjną</span>
                <span className={`${hasPromoPrice ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
              </Switch>
            </div>

            {hasPromoPrice && (
              <input
                type="text"
                value={promoPrice}
                onChange={(e) => setPromoPrice(formatPrice(e.target.value))}
                placeholder="Wpisz cenę promocyjną"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md"
              />
            )}
          </div>
        )}

        {activeElement === 'link' && (
          <div>
            <input
              ref={linkInputRef}
              type="url"
              placeholder="Wklej link"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          </div>
        )}
      </div>

      <div className="fixed bottom-0 right-0 w-[400px] bg-white border-t border-gray-100">
        <div className="p-6 space-y-4">
          <button 
            onClick={() => useSidebarStore.getState().setActiveElement('library')}
            className="w-full px-4 py-2.5 bg-primary text-white rounded-md"
          >
            Gotowe
          </button>
          {(activeElement === 'logo' || activeElement === 'link') && (
            <button 
              className="w-full px-4 py-2.5 text-red-600 bg-white border border-red-200 rounded-md hover:bg-red-50"
            >
              Usuń
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const LogoUpload: FC = () => {
  const { uploadedLogo, setUploadedLogo } = useUploadStore();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(file);
  };

  const handleUpload = (file: File) => {
    setUploadedLogo(file);
    // Symulacja uploadu
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 200);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 transition-colors
        ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-200'}
        ${uploadedLogo ? 'bg-gray-50' : ''}`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      {uploadedLogo ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{uploadedLogo.name}</span>
            <button 
              onClick={() => setUploadedLogo(null)}
              className="text-gray-400 hover:text-gray-500"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
          {uploadProgress < 100 && (
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-200"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Przeciągnij i upuść plik lub
            <label className="ml-1 text-primary cursor-pointer hover:text-primary-dark">
              wybierz z dysku
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
              />
            </label>
          </p>
        </div>
      )}
    </div>
  );
};

const Sidebar: FC<SidebarProps> = (props) => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const activeElement = useSidebarStore((state) => state.activeElement);

  useEffect(() => {
    const handleDrawerOpen = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.type) {
        useSidebarStore.getState().setActiveElement(customEvent.detail.type);
      }
    };

    window.addEventListener('openDrawer', handleDrawerOpen);
    return () => window.removeEventListener('openDrawer', handleDrawerOpen);
  }, []);

  return (
    <aside 
      className={`
        fixed top-[184px] right-0 w-[400px] h-[calc(100vh-184px)] bg-white border-l border-gray-100 
        transform transition-transform duration-300 overflow-hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="p-6">
          {activeElement === 'library' ? (
            <LibraryView />
          ) : (
            <ElementView {...props} />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
