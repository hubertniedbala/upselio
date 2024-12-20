import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="w-[640px]">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services; 