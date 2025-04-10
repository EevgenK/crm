import React from 'react';
import { getSummaryCategories } from '@/lib/api';

import StatCard, { StatCardType } from '@/app/components/stat-card/stat-card';
import DashboardCard from '@/app/components/dashboard-card';
import { getAsyncDataWithDelay } from '@/lib/getAsyncDataWithDelay';

export default async function Page() {
  const data = await getAsyncDataWithDelay(getSummaryCategories, 1500);

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
