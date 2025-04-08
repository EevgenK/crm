import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import AddCompanyButton from '../../components/add-company-button';
import SearchInput from '../../components/search-input';
import CompanyTable from '../../components/company-table';
import ComponyRow from '../../components/company-row';
import { Status } from '../../components/status-label';

export interface PageProps {}
const Page = ({}: PageProps) => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <ComponyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'04.08.2025'}
        />
      </CompanyTable>
    </>
  );
};

export default Page;
