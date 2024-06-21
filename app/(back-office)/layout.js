import React from 'react'
import Sidebar from '@/components/backofiice/Sidebar'
import Navbar from '@/components/backofiice/Navbar'

export default function Layout({children}) {
  return (
    <div className='flex '>
        {/* sidebar */}
        <Sidebar/>
        <br />
         {/* main section */}
        <div className="w-full">
            {/* header */}
          <Navbar/>
            <main className='ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-16'>{children}</main>
            {/* main */}
        </div>
       
    </div>
  )
}
