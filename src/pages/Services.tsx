import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const defaultServiceData = {
  id: '1',
  title: 'Moja pierwsza usługa',
  price: '100 zł',
  description: 'Opis mojej pierwszej usługi...'
};

const Services: FC = () => {
  console.log('Rendering Services page'); // Debugging

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Usługi</h1>
        <div className="grid gap-6">
          <ServiceCard {...defaultServiceData} />
        </div>
      </div>
    </div>
  );
};

export default Services; 