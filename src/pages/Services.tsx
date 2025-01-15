import { FC } from 'react';
import { ServiceCard } from '../components';

const mockServices = [
  {
    id: '1',
    name: 'Moja pierwsza usługa',
    date: '12.03.2024',
    price: '199 zł',
    category: 'Strony internetowe'
  }
];

const Services: FC = () => {
  return (
    <div className="container mx-auto px-8 py-6">
      <div className="grid grid-cols-3 gap-6">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services; 