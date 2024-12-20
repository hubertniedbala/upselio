import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="w-[640px] mx-auto flex flex-col gap-6">
      <ServiceCard />
      <div className="w-[57.40px] h-[54.01px] bg-gray-50 rounded-md border" />
    </div>
  );
};

export default Services; 