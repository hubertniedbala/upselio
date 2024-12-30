import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDrawerStore } from '../store/drawerStore';
import { PlusIcon } from '../icons/interface';

const Sidebar: FC = () => {
  const location = useLocation();
  const { isOpen } = useDrawerStore();

  return (
    <div className={`w-[280px] bg-white border-r border-gray-200 flex-shrink-0 ${isOpen ? 'z-40' : ''}`}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-16 flex-shrink-0 px-6 flex items-center border-b border-gray-200">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            Upselio
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          <Link
            to="/services"
            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              location.pathname === '/services'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span>Usługi</span>
          </Link>
        </nav>

        {/* Bottom section */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <Link
            to="/services/new"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Nowa usługa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
