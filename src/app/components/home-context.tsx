'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SidebarItem from './sidebar-item';
const HomeContext = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className=" flex justify-center items-center ">
        <SidebarItem
          additionalClass="border-2 p-5 bg-gray-900 rounded-md hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
          current={pathname === '/dashboard'}
          pathname="/dashboard"
          src="/icons/squares.svg"
          alt="dashboard icon"
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          additionalClass="border-2 p-5 bg-gray-900 rounded-md hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
          current={pathname === '/companies'}
          pathname="/companies"
          src="/icons/briefcase.svg"
          alt="companies icon"
        >
          Companies
        </SidebarItem>
      </ul>
    </div>
  );
};

export default HomeContext;
