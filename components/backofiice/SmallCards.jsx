import React from 'react'
import SmallCard from '@/components/backofiice/SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

export default function SmallCards() {
  const orderStatus =[
    {
        title:"Total Orders",
        number:500,
        iconBg:"bg-green-600",
        icon:ShoppingCart,
    },
    {
        title:"Order Pending",
        number:320,
        iconBg:"bg-blue-600",
        icon:Loader2,
    },
    {
        title:"Order processing",
        number:80,
        iconBg:"bg-orange-600",
        icon:RefreshCcw,
    },
    {
        title:"Order Delviers",
        number:100,
        iconBg:"bg-purple-600",
        icon:CheckCheck,
    },
    ];
    
    return (
    
    <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5'>
        {
          orderStatus.map((item,i)=>(
            <SmallCard data ={item} key={i}/>
          ))
        }

    </div>
  )
}
