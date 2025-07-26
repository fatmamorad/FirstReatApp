import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import Layout from '../Component/layout/layout.jsx';
import About from '../Component/About/About.jsx';
import Contact from '../Component/Contact/contact.jsx';
import Start from '../Component/start/start.jsx';
import Portfolio from '../Component/portifoli/portifoli.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Start /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'port', element: <Portfolio /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
