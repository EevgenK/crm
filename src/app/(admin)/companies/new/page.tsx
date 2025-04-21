'use client';
import CompanyForm from '@/app/components/company-form';
import React from 'react';

const Page = () => {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
};

export default Page;
