import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="h-[calc(100vh-184px)] bg-gray-50">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          <div className="w-[640px]">
            <ServiceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 