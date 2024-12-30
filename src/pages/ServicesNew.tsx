import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const defaultServiceData = {
  id: 'new-service',
  title: 'Moja nowa usługa',
  price: '0 zł',
  description: 'Opis nowej usługi...'
};

const ServicesNew: FC = () => {
  console.log('ServicesNew rendering'); // Debugging

  return (
    <div className="h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Nowa usługa</h1>
        <ServiceCard {...defaultServiceData} />
      </div>
    </div>
  );
};

export default ServicesNew; 