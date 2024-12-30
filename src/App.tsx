import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Services from './pages/Services';
import ServicesNew from './pages/ServicesNew';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="services" element={<Services />} />
        <Route path="services/new" element={<ServicesNew />} />
      </Route>
    </Routes>
  );
};

export default App; 