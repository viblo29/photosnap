import Image from 'next/image'
import React from 'react'
import siteLogo from '../../../../public/photosnap-black.svg'
import NavButtons from '@/components/atoms/NavButtons/NavButtons'
function Header() {
  return (
    <div>
      <div className='w-full h-18 flex justify-around items-center'>
        <div className='cursor-pointer p-1 transition-opacity duration-300 hover:opacity-70'>
          <Image src={siteLogo} alt='Website Logo'/>
        </div>
        <div className='flex gap-9.25 '>
          <NavButtons text="Stories" textColor="black"/>
          <NavButtons text="FEATURES" textColor="black"/>
          <NavButtons text="PRICING" textColor="black"/>

        </div>
        <button className=' font-bold text-xs tracking-[2px] px-6 py-3 bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out'>GET AN INVITE</button>
      </div>
    </div>
  )
}

export default Header