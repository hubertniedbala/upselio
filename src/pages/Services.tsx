import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="w-[640px]">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services; 