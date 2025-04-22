import Header from '@/app/components/header';
import { getCompany } from '@/lib/api';
import { Company } from '@/lib/api-types';
import getQueryClient from '@/lib/utils/getQueryClient';
import React from 'react';
export interface PageProps {
  params: { id: string };
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;

  return <Header>{company?.title}</Header>;
};

export default Page;
