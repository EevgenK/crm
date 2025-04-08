import Header from '@/app/components/header';
import React from 'react';

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
