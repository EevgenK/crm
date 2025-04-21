import React from 'react';
import SideBar from '../components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideBar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default Layout;
