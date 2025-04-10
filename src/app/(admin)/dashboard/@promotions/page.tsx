import React from 'react';
import { getSummaryPromotions } from '@/lib/api';

import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import { getAsyncDataWithDelay } from '@/lib/getAsyncDataWithDelay';

export default async function Page() {
  const data = await getAsyncDataWithDelay(getSummaryPromotions, 2500);

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ promotionId, companyTitle, promotionName, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`${discount * -1} %`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
