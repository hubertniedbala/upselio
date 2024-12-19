import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary-600">
            Upselio
          </Link>
          <div className="space-x-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 