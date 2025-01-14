import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HelpIcon } from '../icons/interface';
import Logo from './Logo';

const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-[72px] bg-white shadow border-b border-gray-100">
        <div className="w-full h-full px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/all">
              <Logo />
            </Link>
            <div className="flex items-center gap-1 ml-4">
              <Link to="/all" className="px-3 py-2 rounded-md text-gray-500">
                <span className="font-poppins text-sm font-medium">Usługi</span>
              </Link>
              <Link to="/settings" className="px-3 py-2 rounded-md text-gray-500">
                <span className="font-poppins text-sm font-medium">Ustawienia</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <HelpIcon className="w-5 h-5 text-gray-500 [stroke-width:1.67]" />
              <span className="text-gray-500 font-poppins text-sm font-medium">
                Centrum pomocy
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 