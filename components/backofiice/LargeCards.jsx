import React from 'react'
import LargeCard from '@/components/backofiice/LargeCard'
export default function LargeCards() {
  const orderState =[
    {
        period:"Today Orders",
        sales:11000,
        color:"bg-green-600",
        icon:`<Layers/>`
    },
    {
        period:"Yesterday Orders",
        sales:12000,
        color:"bg-blue-600"
    },
    {
        period:"This Month",
        sales:450000,
        color:"bg-orange-600"
    },
    {
        period:"All Times Sales",
        sales:500000,
        color:"bg-purple-600"
    },
    ];
    return (
    
    <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {
            orderState.map((item,i)=>(
                 <LargeCard className='' key={i} data={item}/>
            ))
        }
       
       
    </div>
  )
}
