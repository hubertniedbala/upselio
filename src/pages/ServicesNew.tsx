import { FC } from 'react';
import { ServiceCard } from '../components';

const mockService = {
  id: '1',
  name: 'Nowa usługa',
  date: '12.03.2024',
  price: '199 zł',
  category: 'Strony internetowe'
};

const ServicesNew: FC = () => {
  return (
    <div className="container mx-auto px-8 py-6">
      <ServiceCard {...mockService} />
    </div>
  );
};

export default ServicesNew; 