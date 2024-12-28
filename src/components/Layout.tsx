import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D1D1D2' fill-opacity='0.4'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '20px 20px',
      }}
    >
      {children}
    </div>
  );
};

export default Layout; 