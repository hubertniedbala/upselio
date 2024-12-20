import { FC, SVGProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const Logo: FC<IconProps> = ({ className, ...props }) => (
  <svg width="191" height="33" viewBox="0 0 191 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.15625 2.35938H28.9567V31.1599H0.15625V2.35938ZM23.3496 8.55573C23.3496 12.6561 20.6451 16.1201 16.9459 17.2152H23.4433C23.4433 22.2504 19.4171 26.3296 14.4474 26.3296C9.47778 26.3296 5.45161 22.2504 5.45161 17.2152H11.9432C8.24612 16.1221 5.54367 12.6677 5.54367 8.55573H23.3496Z" fill="#16629F"/>
    <path d="M190.476 21.596C190.476 23.5812 188.769 25.0754 186.03 25.0754C183.249 25.0754 181.29 23.4104 181.185 21.2759H183.671C183.755 22.2364 184.661 23.0262 185.988 23.0262C187.379 23.0262 188.116 22.4285 188.116 21.6174C188.116 19.312 181.374 20.6355 181.374 16.3237C181.374 14.4452 183.102 12.9297 185.841 12.9297C188.474 12.9297 190.202 14.3598 190.328 16.7079H187.926C187.842 15.6833 187.063 14.9789 185.756 14.9789C184.471 14.9789 183.797 15.5125 183.797 16.3023C183.797 18.6717 190.349 17.3482 190.476 21.596Z" fill="#16629F"/>
    {/* ... (reszta ścieżek SVG) ... */}
  </svg>
);

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
  const isAllActive = location.pathname === '/all' || location.pathname === '/';

  return (
    <div className="w-full h-full px-8 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Link to="/all">
          <Logo />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 ml-4">
          <Link 
            to="/all" 
            className={`px-3 py-2 rounded-md ${isAllActive ? 'bg-gray-50 text-secondary' : 'text-gray-500'}`}
          >
            <span className="font-poppins text-sm font-medium">
              Usługi
            </span>
          </Link>
          <Link 
            to="/settings" 
            className={`px-3 py-2 rounded-md ${location.pathname === '/settings' ? 'bg-gray-50 text-secondary' : 'text-gray-500'}`}
          >
            <span className="font-poppins text-sm font-medium">
              Ustawienia
            </span>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <HelpIcon />
          <span className="text-gray-500 font-poppins text-sm font-medium">
            Centrum pomocy
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar; 