import React from 'react';
import ServicePreview from '../components/ServicePreview';
import Drawer from '../components/Drawer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <ServicePreview />
      </div>
      <Drawer />
    </div>
  );
};

export default Home;
