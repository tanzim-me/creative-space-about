import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({subsets: ["latin"] });

const singleCard = ({icon, title, description}) => {
  return (
    <div className='w-[312px] h-[252px] bg-white p-8 rounded-4 shadow-sm'>
        <div className='mb-12'>{icon}</div>
        <div className={`${inter.className} font-semibold text-[20px] text-[#09231E] mb-4`}>{title}</div>
        <div className={`${inter.className} font-normal text-[16px] text-[#4A5565]`}>{description}</div>

    </div>
  )
}

export default singleCard