import { FC, useRef } from 'react';
import ServiceCard from '../components/ServiceCard';
import Sidebar from '../components/Sidebar';

const Home: FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-[calc(100vh-184px)] bg-gray-50">
      <div className="h-full w-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex items-center justify-center">
          <div className="w-[430px] my-6">
            <ServiceCard />
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