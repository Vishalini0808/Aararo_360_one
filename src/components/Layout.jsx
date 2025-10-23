// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer'; // You'll need to create this

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;