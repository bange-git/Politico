import React from 'react';
import Header from '../Header/Header';
import FooterSection from '../Footer/FooterSection';

const Layout = ({children}) => {
  return (
    <>
     <Header />
      <main>{children}</main>
     <FooterSection />
    </>
  )
}

export default Layout