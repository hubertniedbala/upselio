import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  const defaultServiceData = {
    title: "Moja pierwsza usługa",
    price: "79,00 zł",
    description: "To jest wstępny opis mojej pierwszej usługi. Serdecznie zapraszam do korzystania! :)"
  };

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