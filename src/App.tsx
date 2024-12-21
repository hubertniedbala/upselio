import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Services from './pages/Services';
import Settings from './pages/Settings';
import AllServices from './pages/AllServices';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/all" replace />} />
          <Route path="/" element={<Services />} />
          <Route path="/all" element={<AllServices />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 