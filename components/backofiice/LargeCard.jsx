import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {
  return (
    <div className={`rounded-lg border-1 text-white ${data.color} p-8 shadow-md flex flex-col items-center gap-1 py-8`}>
       <Layers/>
        <h4>{data.period}</h4>
        <h2 className='lg:text-3xl text-2xl'>UGX.{data.sales}</h2>
    </div>
  )
}
