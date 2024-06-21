import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between text-slate-500 ml-60 bg-slate-900 h-16 px-8 py-4 fixed top-0 w-full'>
        {/* icon */}
        <button>
            <AlignJustify/>
        </button>
        {/* 3icon */}
        <div className="flex space-x-3">
            <button><Sun/></button>
            <button><Bell/></button>
            <button><User/></button>
        </div>
    </div>
  )
}
