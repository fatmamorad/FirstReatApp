// أعلى الملف
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../News/NavBar.jsx';
import Footer from '../footer/footer.jsx';

function Layout() {
  return (
    <>
      <NavBar />
          <Outlet /> 
      <Footer />
    </>
  );
}

export default Layout;
