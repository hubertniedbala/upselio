import { FC, Fragment, useEffect, useState } from 'react';
import { Transition, Listbox, Switch } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useDrawerStore } from '../store/drawerStore';
import { useSidebarStore } from '../store/sidebarStore';
import { useUploadStore } from '../store/uploadStore';
import type { SidebarProps } from '../types/sidebar';
import {
  TitleIcon,
  DescriptionIcon,
  LogoIcon,
  PriceIcon,
  LinkIcon,
} from '../icons';

interface DrawerState {
  isOpen: boolean;
}

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

const ElementView: FC = () => {
  const activeElement = useSidebarStore((state) => state.activeElement);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

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
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Wpisz tytuł usługi"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          </div>
        )}

        {activeElement === 'description' && (
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Wpisz opis usługi"
              rows={6}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none"
            />
          </div>
        )}

        {activeElement === 'price' && (
          <div>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Wpisz cenę"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          </div>
        )}

        {activeElement === 'link' && (
          <div>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Wklej link"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
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
          {activeElement === 'library' ? <LibraryView /> : <ElementView />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 