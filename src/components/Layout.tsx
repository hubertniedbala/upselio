import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 bg-repeat bg-auto relative">
      {children}
    </div>
  );
};

export default Layout; 