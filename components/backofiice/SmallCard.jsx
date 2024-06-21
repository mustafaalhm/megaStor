import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function SmallCard({data}) {
    const {title,number,iconBg,icon:Icon} =data;
  return (
    <div className='rounded-lg shadow-lg bg-slate-700 mt-8 p-4 '>
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconBg} rounded-full  items-center flex justify-center p-2`}>
            <Icon className=""/>
            </div>
            
            <div className="">
                <p>{title}</p>
                <h3 className='font-bold'>{number}</h3>
            </div>
        </div>
    </div>
  )
}
