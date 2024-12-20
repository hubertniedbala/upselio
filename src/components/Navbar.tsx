import { FC, SVGProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const Logo: FC<IconProps> = ({ className, ...props }) => (
  <svg 
    width="191" 
    height="33" 
    viewBox="0 0 191 33" 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    {...props}
  >
    <path d="M0.2,2.4H29v28.8H0.2V2.4z M23.3,8.6c0,4.1-2.7,7.6-6.4,8.7h6.5c0,5-4,9.1-9,9.1c-5,0-9-4.1-9-9.1h6.5 c-3.7-1.1-6.4-4.5-6.4-8.7H23.3z" fill="#16629F" fillRule="evenodd" clipRule="evenodd"/>
    <path d="M190.5,21.6c0,2-1.7,3.5-4.4,3.5c-2.8,0-4.7-1.7-4.8-3.8h2.5c0.1,1,1,1.8,2.3,1.8c1.4,0,2.1-0.6,2.1-1.4 c0-2.3-6.7-1-6.7-5.3c0-1.9,1.7-3.4,4.5-3.4c2.6,0,4.4,1.4,4.5,3.8h-2.4c-0.1-1-0.9-1.7-2.2-1.7c-1.3,0-2,0.5-2,1.3 C183.8,18.7,190.3,17.3,190.5,21.6z" fill="#16629F"/>
    <path d="M176.8,24.9v-6.6c0-2.2-1.2-3.3-2.9-3.3c-1.8,0-2.9,1.1-2.9,3.3v6.6h-2.4V13.1h2.4v1.3c0.8-1,2.1-1.5,3.5-1.5 c2.7,0,4.8,1.7,4.8,5v6.9H176.8z" fill="#16629F"/>
    <path d="M166.6,19c0,3.7-2.7,6.1-6,6.1c-3.3,0-5.8-2.4-5.8-6.1s2.6-6.1,5.9-6.1S166.6,15.3,166.6,19z M157.2,19 c0,2.7,1.6,4,3.4,4c1.8,0,3.6-1.3,3.6-4s-1.7-3.9-3.5-3.9C158.8,15,157.2,16.3,157.2,19z" fill="#16629F"/>
    <path d="M150.4,24.9V13.1h2.4v11.8H150.4z M151.6,11.6c-0.9,0-1.5-0.7-1.5-1.6c0-0.9,0.7-1.6,1.5-1.6 c0.8,0,1.5,0.7,1.5,1.6C153.1,10.9,152.5,11.6,151.6,11.6z" fill="#16629F"/>
    <path d="M148.2,21.6c0,2-1.7,3.5-4.4,3.5c-2.8,0-4.7-1.7-4.8-3.8h2.5c0.1,1,1,1.8,2.3,1.8c1.4,0,2.1-0.6,2.1-1.4 c0-2.3-6.7-1-6.7-5.3c0-1.9,1.7-3.4,4.5-3.4c2.6,0,4.4,1.4,4.5,3.8h-2.4c-0.1-1-0.9-1.7-2.2-1.7c-1.3,0-2,0.5-2,1.3 C141.6,18.7,148.1,17.3,148.2,21.6z" fill="#16629F"/>
    <path d="M134.6,24.9v-6.6c0-2.2-1.2-3.3-2.9-3.3c-1.8,0-2.9,1.1-2.9,3.3v6.6h-2.4V13.1h2.4v1.3c0.8-1,2.1-1.5,3.5-1.5 c2.7,0,4.8,1.7,4.8,5v6.9H134.6z" fill="#16629F"/>
    <path d="M118.6,15c-1.6,0-2.9,1.1-3.2,3h6.4C121.8,16.1,120.4,15,118.6,15z M124.1,21.4c-0.7,2-2.5,3.7-5.3,3.7 c-3.3,0-5.8-2.4-5.8-6.1s2.4-6.1,5.8-6.1c3.3,0,5.6,2.3,5.6,5.8c0,0.4,0,0.8-0.1,1.2h-8.9c0.2,1.9,1.5,3.1,3.3,3.1 c1.5,0,2.3-0.7,2.7-1.6H124.1z" fill="#16629F"/>
    <path d="M109.6,24.9l-2.5-4l-2.4,4h-2.5l3.8-5.8l-3.8-6h2.7l2.5,4l2.4-4h2.5l-3.8,5.8l3.8,6H109.6z" fill="#16629F"/>
    <path d="M101.1,10v2h-5.7v4.4h5.1v2h-5.1v4.5h5.7v2H93V10H101.1z" fill="#16629F"/>
    <path d="M90.8,21.6c0,2-1.7,3.5-4.4,3.5c-2.8,0-4.7-1.7-4.8-3.8H84c0.1,1,1,1.8,2.3,1.8c1.4,0,2.1-0.6,2.1-1.4 c0-2.3-6.7-1-6.7-5.3c0-1.9,1.7-3.4,4.5-3.4c2.6,0,4.4,1.4,4.5,3.8h-2.4c-0.1-1-0.9-1.7-2.2-1.7c-1.3,0-2,0.5-2,1.3 C84.2,18.7,90.7,17.3,90.8,21.6z" fill="#16629F"/>
    <path d="M74.5,15c-1.6,0-2.9,1.1-3.2,3h6.4C77.7,16.1,76.3,15,74.5,15z M79.9,21.4c-0.7,2-2.5,3.7-5.3,3.7 c-3.3,0-5.8-2.4-5.8-6.1s2.4-6.1,5.8-6.1c3.3,0,5.6,2.3,5.6,5.8c0,0.4,0,0.8-0.1,1.2h-8.9c0.2,1.9,1.5,3.1,3.3,3.1 c1.5,0,2.3-0.7,2.7-1.6H79.9z" fill="#16629F"/>
    <path d="M64.5,24.9V9.1h2.4v15.8H64.5z" fill="#16629F"/>
    <path d="M49.8,18.9c0-3.6,2.4-6,5.5-6c2,0,3.3,0.9,4,1.9v-1.7h2.4v11.8h-2.4v-1.8c-0.7,1-2.1,1.9-4.1,1.9 C52.2,25.1,49.8,22.6,49.8,18.9z M59.3,19c0-2.5-1.7-3.9-3.5-3.9c-1.8,0-3.5,1.4-3.5,3.9c0,2.5,1.7,4,3.5,4 C57.6,23,59.3,21.5,59.3,19z" fill="#16629F"/>
    <path d="M48.2,20.7c0,2.2-1.8,4.4-5.1,4.4c-2.9,0-5.2-1.6-5.2-4.2h2.6c0.1,1.2,0.9,2.2,2.6,2.2c1.7,0,2.6-0.9,2.6-2.2 c0-3.6-7.8-1.3-7.8-6.7c0-2.6,2-4.2,5-4.2c2.8,0,4.8,1.5,5,4h-2.7c-0.1-1-0.9-1.9-2.5-2c-1.4,0-2.5,0.6-2.5,2.1 C40.4,17.3,48.2,15.3,48.2,20.7z" fill="#16629F"/>
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