'use client';

import Header from '@/components/modules/Header/Header';
import MobileNavbar from '@/components/modules/MobileNavbar/MobileNavbar';

import { useMediaQuery } from '@/hooks/useMediaQuery';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800);

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <div className="">Footer</div>
    </>
  );
};

export default Layout;
