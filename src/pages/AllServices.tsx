import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceListItem from '../components/ServiceListItem';

type TabType = 'active' | 'draft' | 'deleted';

const AllServices: FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('active');
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-8 py-6">
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

      {/* Tabs */}
      <div className="border-b flex items-start gap-2 mb-8">
        <div className="flex items-start gap-4">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-1 pt-px pb-[11px] flex items-center gap-2 ${
              activeTab === 'active' ? 'border-b-2 border-primary' : ''
            }`}
          >
            <div className={`text-sm font-medium font-poppins ${
              activeTab === 'active' ? 'text-primary' : 'text-gray-300'
            }`}>
              Aktywne
            </div>
          </button>

          <button
            onClick={() => setActiveTab('draft')}
            className={`px-1 pt-px pb-[11px] flex items-center gap-2 ${
              activeTab === 'draft' ? 'border-b-2 border-primary' : ''
            }`}
          >
            <div className={`text-sm font-medium font-poppins ${
              activeTab === 'draft' ? 'text-primary' : 'text-gray-300'
            }`}>
              Robocze
            </div>
          </button>

          <button
            onClick={() => setActiveTab('deleted')}
            className={`px-1 pt-px pb-[11px] flex items-center gap-2 ${
              activeTab === 'deleted' ? 'border-b-2 border-primary' : ''
            }`}
          >
            <div className={`text-sm font-medium font-poppins ${
              activeTab === 'deleted' ? 'text-primary' : 'text-gray-300'
            }`}>
              Usunięte
            </div>
          </button>
        </div>
      </div>

      {/* Service List */}
      <div className="space-y-4">
        <ServiceListItem 
          name="Moja pierwsza usługa"
          date="20 wrz 2023 11:30"
          price="79,00 zł"
          category="Kategoria 2"
          status="Gotowe"
        />
      </div>
    </div>
  );
};

export default AllServices; 