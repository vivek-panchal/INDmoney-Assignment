import React from 'react'
import Image from 'next/image'
import { Headset, Search, X } from 'lucide-react';

export default function TopNavbar() {
  return (
    <nav className='flex justify-between p-4 border-b'>
      <div>
          <a href="https://www.indmoney.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
          </a>
      </div>
      <div className='flex gap-2 items-center'>
        <div>
            <a href="https://www.indmoney.com/login" target="_blank" rel="noopener noreferrer">
                <button className='px-3 py-1 rounded-2xl border border-[#33A34D] text-[#33A34D]'>
                    Log In
                </button>
            </a>
        </div>
        <div className='flex items-center gap-3'>
        <Headset color='grey' className='mr-3'/>
        <Search color='grey'/>
        <X size={28} color='grey'/>
        </div>
      </div>
    </nav>
  )
}
