import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceListItem from '../components/ServiceListItem';

type TabType = 'active' | 'draft' | 'deleted';

const AllServices: FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('active');
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-600">
          Usługi
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2.5 bg-primary text-white rounded-md shadow border border-primary flex items-center gap-2 hover:bg-primary-dark transition-colors"
        >
          <span className="text-sm font-medium">+ Dodaj usługę</span>
        </button>
      </div>

      {/* ... (reszta kodu bez zmian) ... */}
    </div>
  );
};

export default AllServices; 