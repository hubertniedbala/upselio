import { FC, Fragment, useEffect, useState } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { useSidebarStore } from '../store/sidebarStore';
import type { SidebarProps } from '../types/sidebar';
import { TitleIcon, DescriptionIcon, LogoIcon, PriceIcon, LinkIcon } from '../icons/SidebarIcons';
import { Switch } from '@headlessui/react';
import { Listbox } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useUploadStore } from '../store/uploadStore';

interface DrawerState {
  isOpen: boolean;
}

const linkTexts = [
  'Przejdź do usługi',
  'Kup teraz',
  'Zamów',
  'Więcej informacji',
  'Sprawdź szczegóły'
];

const ElementView: FC<SidebarProps> = ({
  titleInputRef,
  priceInputRef,
  descriptionTextareaRef,
  linkInputRef
}) => {
  const activeElement = useSidebarStore((state) => state.activeElement);
  const [selectedLinkText, setSelectedLinkText] = useState('Przejdź do usługi');
  const [isEnabled, setIsEnabled] = useState(false);
  const { uploadedLogo, setUploadedLogo, uploadType, setUploadType } = useUploadStore();

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedLogo(file);
      setUploadType('image');
    }
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
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none"
            />
          </div>
        )}

        {activeElement === 'logo' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Typ logo</span>
              <Switch
                checked={isEnabled}
                onChange={setIsEnabled}
                className={`${
                  isEnabled ? 'bg-primary' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2`}
              >
                <span className="sr-only">Włącz typ logo</span>
                <span
                  className={`${
                    isEnabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
            
            {/* Upload section */}
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>
        )}

        {activeElement === 'price' && (
          <div>
            <input
              ref={priceInputRef}
              type="text"
              placeholder="Wpisz cenę"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          </div>
        )}

        {activeElement === 'link' && (
          <div className="space-y-4">
            <input
              ref={linkInputRef}
              type="url"
              placeholder="Wklej link"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
            
            <div>
              <Listbox value={selectedLinkText} onChange={setSelectedLinkText}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2.5 pl-4 pr-10 text-left border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2">
                    <span className="block truncate text-gray-600">{selectedLinkText}</span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {linkTexts.map((text) => (
                        <Listbox.Option
                          key={text}
                          value={text}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2.5 pl-10 pr-4 ${
                              active ? 'bg-primary/10 text-primary' : 'text-gray-600'
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                {text}
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
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 right-0 w-[400px] bg-white border-t border-gray-100">
        <div className="p-6">
          <button 
            onClick={() => useSidebarStore.getState().setActiveElement('library')}
            className="w-full px-4 py-2.5 bg-primary text-white rounded-md shadow border border-primary flex items-center justify-center hover:bg-primary-dark transition-colors"
          >
            <span className="text-sm font-medium">Gotowe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const LibraryView: FC = () => (
  <div className="transition-all duration-300 transform">
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-600 mb-4">Biblioteka komponentów</h2>
      <p className="text-sm text-gray-400">Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.</p>
    </div>
    
    <div className="text-sm font-medium text-gray-600 mb-4">Aktywne w komponencie</div>
    
    <div className="space-y-4">
      <SidebarItem 
        title="Tytuł usługi" 
        description="Tytuł usługi jaki chcesz dodać" 
        icon={TitleIcon} 
        type="title"
      />
      <SidebarItem 
        title="Opis" 
        description="Opis usługi jaki chcesz dodać" 
        icon={DescriptionIcon} 
        type="description"
      />
      <SidebarItem 
        title="Logo" 
        description="Jeśli chcesz dodać swoje logo" 
        icon={LogoIcon} 
        type="logo"
        hasDelete
      />
      <SidebarItem 
        title="Cena" 
        description="Wskaż wartość usługi" 
        icon={PriceIcon} 
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

const SidebarItem: FC<SidebarItemProps> = ({ title, description, icon: Icon, type, hasDelete }) => (
  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5 text-gray-500" />
      </div>
      <div className="ml-3 flex-grow">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      {hasDelete && (
        <button className="ml-3 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Usuń</span>
          {/* Możesz dodać ikonę usuwania */}
        </button>
      )}
    </div>
  </div>
);

const Sidebar: FC<SidebarProps> = ({
  titleInputRef,
  priceInputRef,
  descriptionTextareaRef,
  linkInputRef
}) => {
  const isOpen = useDrawerStore((state: DrawerState) => state.isOpen);
  const activeElement = useSidebarStore((state) => state.activeElement);
  const setActiveElement = useSidebarStore((state) => state.setActiveElement);

  useEffect(() => {
    const handleDrawerOpen = (e: CustomEvent<{ type: string }>) => {
      setActiveElement(e.detail.type);
    };

    window.addEventListener('openDrawer', handleDrawerOpen as EventListener);
    return () => {
      window.removeEventListener('openDrawer', handleDrawerOpen as EventListener);
    };
  }, [setActiveElement]);

  return (
    <aside 
      className={`
        fixed top-[184px] right-0 w-[400px] h-[calc(100vh-184px)] bg-white border-l border-gray-100 
        transform transition-transform duration-300 overflow-hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="p-6 w-full" style={{ marginRight: '-24px', paddingRight: '24px' }}>
          {activeElement === 'library' ? (
            <LibraryView />
          ) : (
            <ElementView 
              titleInputRef={titleInputRef}
              priceInputRef={priceInputRef}
              descriptionTextareaRef={descriptionTextareaRef}
              linkInputRef={linkInputRef}
            />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 