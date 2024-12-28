import React from 'react';
import { useDrawerStore } from '../store/drawerStore';

const Home = () => {
  const { open } = useDrawerStore();

  return (
    <div>
      {/* Przykład użycia z poprawnymi argumentami */}
      <button onClick={() => open('title', 'Tytuł usługi', 'Moja pierwsza usługa')}>
        Edytuj tytuł
      </button>
      
      <button onClick={() => open('description', 'Opis usługi', '')}>
        Edytuj opis
      </button>
      
      <button onClick={() => open('price', 'Cena usługi', '')}>
        Edytuj cenę
      </button>
      
      <button onClick={() => open('logo', 'Logo', '')}>
        Edytuj logo
      </button>
      
      <button onClick={() => open('link', 'Link', '')}>
        Edytuj link
      </button>
    </div>
  );
};

export default Home;
