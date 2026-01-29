import React from 'react'
import siteLogoFooter from "../../../../public/photosnap-white.svg"
import Image from 'next/image'
import NavButtons from '@/components/atoms/NavButtons/NavButtons'
import HomePageButton from '@/components/atoms/HomePageButton/HomePageButton'
function Footer() {
  return (
    <div>
      <div className='w-full h-62.5 bg-black flex items-center pl-42.75 pr-41.25 justify-between'>
        <div className='flex gap-27.5'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-27.5 w-full'>
            <div className='pt-0.5 row-start-1 mb-8 lg:mb-0 mb- '>
              <Image src={siteLogoFooter} alt='Website Logo'/>
            </div>

            <div className='flex gap-[13.33px] row-start-2 md:row-start-3 lg:row-start-2 lg:col-start-1 self-end md:mt-18 lg:mt-0'>
              <div className='text-white'>OO</div>
              <div className='text-white'>OO</div>
              <div className='text-white'>OO</div>
              <div className='text-white'>OO</div>
            </div>

            <div className='mt-12.25 md:mt-0 flex flex-col gap-4.25 row-start-3 md:flex-row md:gap-6.5 md:row-start-2 md:items-center lg:flex-col lg:gap-4.25 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-start lg:items-start'>
              <div><NavButtons text='HOME' textColor='white'/></div>
              <div><NavButtons text='STORIES' textColor='white'/></div>
              <div><NavButtons text='FEATURES' textColor='white'/></div>
              <div><NavButtons text='PRICING' textColor='white'/></div>
            </div>
          </div>
        </div>



        <div className='flex-col'>
          <div className='flex justify-end'>
            <HomePageButton text='GET AN INVITE' textColor='white' gap={4.5}/>
          </div>
          <div className='text-[15px] opacity-[0.5] text-white mt-21.5'>Copyright 2019. All Rights Reserved</div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer