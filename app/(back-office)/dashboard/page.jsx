import React from 'react'
import Heading from '@/components/backofiice/Heading'
import LargeCards from '@/components/backofiice/LargeCards'
import SmallCards from '@/components/backofiice/SmallCards'
import DashboardChart from '@/components/backofiice/DashboardChart'
import CustomDataTable from './../../../components/backofiice/CustomDataTable';
export default function page() {
  return (
    <div className='py-10 gap-5'>
      <Heading title="DashBoard Overview "/>
      {/* large cards */}
      <LargeCards/>
      {/* small cards */}
      <SmallCards/>
      {/* chart */}
      <DashboardChart/>
      {/* recent order table */}
      <CustomDataTable/>
    </div>
  )
}
