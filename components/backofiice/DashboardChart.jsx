import React from 'react'
import WeeklySalesChart from '@/components/backofiice/WeeklySalesChart'
import BestSallingProductChart from '@/components/backofiice/BestSallingProductChart'
export default function DashboardChart() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  gap-2 '>
       <WeeklySalesChart/>
        <BestSallingProductChart/>
       
    </div>
  )
}
