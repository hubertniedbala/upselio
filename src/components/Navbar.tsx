import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HelpIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-500"
  >
    <path 
      d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSettings = location.pathname === '/settings';

  return (
    <div className="fixed top-0 left-0 right-0 h-[72px] bg-white shadow z-50">
      <div className="h-full w-full flex items-center">
        {/* Left side - Logo and Navigation */}
        <div className="pl-8 flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-primary">
            Upselio
          </Link>
          <div className="flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-4 py-2.5 rounded-md transition-colors ${
                isHome 
                  ? 'bg-gray-50 text-secondary' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-secondary'
              }`}
            >
              <span className="font-poppins text-sm font-medium">
                Usługi
              </span>
            </Link>
            <Link 
              to="/settings" 
              className={`px-4 py-2.5 rounded-md transition-colors ${
                isSettings 
                  ? 'bg-gray-50 text-secondary' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-secondary'
              }`}
            >
              <span className="font-poppins text-sm font-medium">
                Ustawienia
              </span>
            </Link>
          </div>
        </div>

        {/* Right side - Help */}
        <div className="ml-auto pr-8">
          <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <HelpIcon />
            <span className="text-gray-500 font-poppins text-sm font-medium">
              Centrum pomocy
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 