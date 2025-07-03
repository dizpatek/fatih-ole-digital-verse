
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Starry background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-10"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
