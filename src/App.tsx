import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Services from './pages/Services';
import ServicesNew from './pages/ServicesNew';

const App = () => {
  console.log('App rendering'); // Debugging

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/services" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/new" element={<ServicesNew />} />
        <Route path="*" element={<Navigate to="/services" replace />} />
      </Route>
    </Routes>
  );
};

export default App; 