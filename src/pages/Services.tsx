import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div>
      <ServiceCard 
        title="Moja pierwsza usługa"
        price="79,00 zł"
        description="To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)"
      />
    </div>
  );
};

export default Services; 