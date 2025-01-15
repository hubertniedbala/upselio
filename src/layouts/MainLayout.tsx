import { FC, ReactNode } from 'react';
import { Header, TabBar } from '../components';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TabBar />
      <main className="pt-[184px]">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 