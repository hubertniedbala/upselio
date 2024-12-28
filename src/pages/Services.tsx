import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';

const Services: FC = () => {
  const { open } = useDrawerStore();
  const title = useDrawerStore(state => state.inputValue) || 'Moja pierwsza usługa';

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-gray-50 rounded-lg p-8">
        {/* Tytuł z możliwością edycji */}
        <button
          onClick={() => open('title', 'Tytuł usługi', title)}
          className="w-full text-left hover:bg-gray-100 p-2 rounded transition-colors"
        >
          <h1 className="text-xl font-medium text-gray-600">
            {title}
          </h1>
        </button>

        {/* Opis */}
        <p className="text-gray-500 mt-2">
          To jest wstępny opis mojej pierwszej usługi.
          Serdecznie zapraszam do korzystania! :)
        </p>

        {/* Cena */}
        <div className="mt-4">
          <span className="text-lg font-medium text-gray-600">
            79,00 zł
          </span>
        </div>

        {/* Szczegóły i przycisk Dodaj */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-primary hover:text-primary/80 transition-colors">
            Szczegóły
          </button>
          <button className="px-4 py-2 bg-white rounded-md border border-gray-200 shadow hover:bg-gray-50 transition-colors">
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 