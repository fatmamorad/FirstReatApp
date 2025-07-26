// أعلى الملف
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../News/NavBar.jsx';
import Footer from '../footer/footer.jsx';

// داخل الـ function فقط JSX
function Layout() {
  return (
    <>
      <NavBar />
          <Outlet /> {/* ده اللي بيعرض الصفحات الفرعية */}
      <Footer />
    </>
  );
}

export default Layout;
