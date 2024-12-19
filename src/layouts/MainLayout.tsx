import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="h-[73px] bg-white shadow border-b border-gray-100">
        <Navbar />
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Left Content Area */}
        <div className="flex-grow">
          <div className="h-28 pt-12 pb-6 bg-white border-b border-gray-100">
            {/* Tab Navigation */}
            <div className="px-8">
              {/* ... tab content ... */}
            </div>
          </div>
          <main className="container mx-auto px-8 py-6">
            <Outlet />
          </main>
        </div>

        {/* Right Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout; 