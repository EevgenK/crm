'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import CompanyFormModal from '@/app/components/company-form-modal';

const Page = () => {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
};

export default Page;
