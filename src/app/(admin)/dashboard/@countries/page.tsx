import DashboardCard from '@/app/components/dashboard-card';
import { getSummaryCountries } from '@/lib/api';

import { getAsyncDataWithDelay } from '@/lib/getAsyncDataWithDelay';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const Page = async ({}) => {
  const data = await getAsyncDataWithDelay(getSummaryCountries, 2000);

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <ul className="flex flex-col gap-2">
          {data.map(({ countryId, countryTitle, count }) => (
            <li
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
              key={countryId}
            >
              {countryTitle} - {count}
            </li>
          ))}
        </ul>
        <Image width={395} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
};

export default Page;
