import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NightSkyBackground from './NightSkyBackground';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-accent selection:text-brand-dark bg-gradient-to-br from-brand-dark via-[#021E20] to-brand-dark">
      <NightSkyBackground />
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow relative z-10">
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default Layout;
