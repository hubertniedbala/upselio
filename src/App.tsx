import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Services from './pages/Services';
import ServicesNew from './pages/ServicesNew';
import { Drawer } from './components';

const App: FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/new" element={<ServicesNew />} />
        </Routes>
        <Drawer />
      </MainLayout>
    </Router>
  );
};

export default App; 