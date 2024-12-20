import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="h-full flex items-center justify-center -mt-20">
      <div className="w-[640px]">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services; 