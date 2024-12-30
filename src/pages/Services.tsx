import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      id: '1',
      title: 'Moja pierwsza usługa',
      price: '100 zł',
      description: 'Opis mojej pierwszej usługi...'
    }
    // ... inne usługi
  ];

  return (
    <div className="h-[calc(100vh-184px)] bg-gray-50">
      <div className="h-full w-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex items-center justify-center">
          <div className="w-[430px] my-6">
            <ServiceCard {...defaultServiceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 