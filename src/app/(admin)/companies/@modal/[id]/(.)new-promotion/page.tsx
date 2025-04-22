'use client';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = ({ params }: PageProps) => {
  const { id } = use(params);
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default Page;
