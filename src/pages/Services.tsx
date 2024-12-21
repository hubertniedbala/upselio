import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="h-[calc(100vh-184px)] overflow-hidden bg-gray-50">
      <div className="h-full w-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex items-center justify-center">
          <div className="w-[640px] my-6">
            <ServiceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 