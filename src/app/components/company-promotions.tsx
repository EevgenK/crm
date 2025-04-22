'use client';
import { getPromotions } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Promotions from './promotions';

export interface CompanyPromotionsProps {
  companyId: string;
}
const CompanyPromotions = ({ companyId }: CompanyPromotionsProps) => {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });
  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotions promotion={promotion} />
        </div>
      ))}
    </div>
  );
};

export default CompanyPromotions;
