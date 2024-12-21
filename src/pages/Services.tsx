import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="min-h-[calc(100vh-184px)] flex overflow-hidden">
      <div className="m-auto w-[640px]">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services; 