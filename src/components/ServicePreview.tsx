import React, { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';

const ServicePreview: FC = () => {
  const { open } = useDrawerStore();
  const title = useDrawerStore(state => state.inputValue) || 'Moja pierwsza usługa';

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <button
        onClick={() => open('title', 'Tytuł usługi', title)}
        className="w-full text-left hover:bg-gray-100 p-2 rounded transition-colors"
      >
        <h3 className="text-lg font-medium text-gray-600">
          {title}
        </h3>
      </button>
      {/* reszta komponentu */}
    </div>
  );
};

export default ServicePreview; 