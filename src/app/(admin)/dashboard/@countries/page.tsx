import DashboardCard from '@/app/components/dashboard-card';
import { getCompanies, getCountries } from '@/lib/api';

import getCountById from '@/lib/utils/getCountById';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const Page = async ({}) => {
  const countries = await getCountries();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'countryId');

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <ul className="flex flex-col gap-2">
          {countries.map(({ id, title }) => (
            <li
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
              key={id}
            >
              {title} - {counts[id] || 0}
            </li>
          ))}
        </ul>
        <Image width={395} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
};

export default Page;
