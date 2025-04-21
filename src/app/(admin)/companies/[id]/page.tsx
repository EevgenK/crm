import React from 'react';

import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const parsedID = Number.parseInt(id);
  if (Number.isNaN(parsedID)) {
    return notFound();
  }
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
