import { FC, useRef } from 'react';
import ServiceCard from '../components/ServiceCard';
import Sidebar from '../components/Sidebar';
import { useDrawerStore } from '../store/drawerStore';

const Home: FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);
  const { open } = useDrawerStore();

  const handleIconClick = () => {
    open();
    const event = new CustomEvent('openDrawer', { 
      detail: { type: 'logo' } 
    });
    window.dispatchEvent(event);
  };

  const handleTitleClick = () => {
    open();
    const event = new CustomEvent('openDrawer', { 
      detail: { type: 'title' } 
    });
    window.dispatchEvent(event);
    setTimeout(() => titleInputRef.current?.focus(), 100);
  };

  const handlePriceClick = () => {
    open();
    const event = new CustomEvent('openDrawer', { 
      detail: { type: 'price' } 
    });
    window.dispatchEvent(event);
    setTimeout(() => priceInputRef.current?.focus(), 100);
  };

  const handleDescriptionClick = () => {
    open();
    const event = new CustomEvent('openDrawer', { 
      detail: { type: 'description' } 
    });
    window.dispatchEvent(event);
    setTimeout(() => descriptionTextareaRef.current?.focus(), 100);
  };

  const handleLinkClick = () => {
    open();
    const event = new CustomEvent('openDrawer', { 
      detail: { type: 'link' } 
    });
    window.dispatchEvent(event);
    setTimeout(() => linkInputRef.current?.focus(), 100);
  };

  return (
    <div className="h-[calc(100vh-184px)] bg-gray-50">
      <div className="h-full w-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex items-center justify-center">
          <div className="w-[430px] my-6">
            <ServiceCard 
              onIconClick={handleIconClick}
              onTitleClick={handleTitleClick}
              onPriceClick={handlePriceClick}
              onDescriptionClick={handleDescriptionClick}
              onLinkClick={handleLinkClick}
            />
          </div>
        </div>
      </div>
      <Sidebar 
        titleInputRef={titleInputRef}
        priceInputRef={priceInputRef}
        descriptionTextareaRef={descriptionTextareaRef}
        linkInputRef={linkInputRef}
      />
    </div>
  );
};

export default Home; 