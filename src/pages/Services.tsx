import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  const defaultServiceData = {
    title: "Moja pierwsza usługa",
    price: "79,00 zł",
    description: "To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)"
  };

  return (
    <div>
      <ServiceCard {...defaultServiceData} />
    </div>
  );
};

export default Services; 