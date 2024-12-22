import { FC, Fragment, useEffect, useState } from 'react';
import { Transition, Listbox, Switch } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useDrawerStore } from '../store/drawerStore';
import { useSidebarStore } from '../stores/sidebarStore';
import { useUploadStore } from '../stores/uploadStore';
import {
  TitleIcon,
  DescriptionIcon,
  LogoIcon,
  PriceIcon,
  LinkIcon,
  Icon
} from './icons';

// ... (reszta kodu pozostaje bez zmian, ale z poprawnym typem dla Transition.as)

const Sidebar: FC<SidebarProps> = ({
  titleInputRef,
  priceInputRef,
  descriptionTextareaRef,
  linkInputRef
}) => {
  const isOpen = useDrawerStore((state) => state.isOpen);
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