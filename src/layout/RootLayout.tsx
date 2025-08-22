import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps) => {
    return (
      <div>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    )
  }
export default RootLayout