'use client';
import { use } from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = ({ params }: PageProps) => {
  const { id } = use(params);
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
};

export default Page;
