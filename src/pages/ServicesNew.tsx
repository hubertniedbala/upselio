import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const defaultServiceData = {
  id: 'new-service',
  title: 'Moja pierwsza usługa',
  price: '100 zł',
  description: 'Opis mojej pierwszej usługi...'
};

const ServicesNew: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative bg-white rounded-lg p-6">
          <div className="relative z-10">
            <ServiceCard {...defaultServiceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNew; 