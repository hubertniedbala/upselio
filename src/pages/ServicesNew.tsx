import { FC } from 'react';
import { ServiceCard } from '../components';

const mockService = {
  id: 'new',
  name: 'Nowa usługa',
  date: 'Dzisiaj',
  price: '0 zł',
  category: 'Wybierz kategorię'
};

const ServicesNew: FC = () => {
  return (
    <div className="container mx-auto px-8 py-6">
      <div className="max-w-md mx-auto">
        <ServiceCard {...mockService} />
      </div>
    </div>
  );
};

export default ServicesNew; 