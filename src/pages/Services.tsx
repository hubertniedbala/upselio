import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="min-h-[calc(100vh-184px)] flex relative bg-gray-50">
      <div className="absolute inset-0 opacity-10 bg-service-pattern [background-size:8px_8px]" />
      <div className="m-auto w-[640px] relative z-10">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services; 