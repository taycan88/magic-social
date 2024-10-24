"use client";
import React, { useState } from 'react';
import SearchDashboard from './_components/search-dashboard';
import { TemplateList } from './_components/template-list';

export const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>('');
  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput}/>
      <TemplateList searchInput={searchInput as string}/>
    </div>
  );
};
export default Dashboard;