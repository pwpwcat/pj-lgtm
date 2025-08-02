import React from 'react';
import { Footer, Header } from '@/app/components';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    )
  }
export default Layout