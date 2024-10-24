import { AIUsage } from './_components/ai-usage';
import { Sidebar } from './_components/sidebar';
import React from 'react';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='bg-gray- h-scren'>
        <div className='md:w-64 hidden md:block fixed'>
          <Sidebar />
          <AIUsage />
          </div>
        <div className='md:ml-64 bg-gray-50 h-fit pb-5'>{children}</div>
    </div>
  )
}

export default DashboardLayout;