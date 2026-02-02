'use client'
import { useState } from 'react'
import Image from 'next/image'
import plansFeatures from '../../../../public/plans-features.svg'
import plansFeaturesTablet from '../../../../public/plans-features-tablet.svg'
import plansFeaturesMobile from '../../../../public/plans-features-mobile.svg'
import Plan from './Plan'

function Subscription() {
  const [isYearly, setIsYearly] = useState(false)

  const handleToggle = () => {
    setIsYearly(!isYearly)
  }

  return (
    <div>
      <div className='w-full flex flex-col items-center mt-16 md:mt-28 lg:mt-30'>
        <div className='mb-12 flex gap-8 items-center'>
          <div className={`font-bold text-[18px]/[25px] transition-opacity duration-300 ${!isYearly ? 'opacity-100' : 'opacity-50'}`}>
            Monthly
          </div>
          <button
            onClick={handleToggle}
            className={`w-16 h-8 rounded-2xl flex items-center p-1 transition-colors duration-300 ${
              isYearly ? 'bg-black' : 'bg-[#DFDFDF]'
            }`}
          >
            <div
              className={`rounded-full w-6 h-6 transition-all duration-300 ${
                isYearly ? 'bg-white translate-x-8' : 'bg-black translate-x-0'
              }`}
            ></div>
          </button>
          <div className={`font-bold text-[18px]/[25px] transition-opacity duration-300 ${isYearly ? 'opacity-100' : 'opacity-50'}`}>
            Yearly
          </div>
        </div>
        
        <div className='flex flex-col lg:flex lg:flex-row items-center gap-6 lg:gap-7.5'>
          <Plan 
            h1='Basic' 
            h2='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
            price='19.00'
            backgroundColor='gray'
            isYearly={isYearly}
          />
          <Plan 
            h1='Pro' 
            h2='More advanced features available. Recommended for photography veterans and professionals.'
            price='39.00'
            backgroundColor='black'
            isMiddle
            isYearly={isYearly}
          />
          <Plan 
            h1='Business' 
            h2='Additional features available such as more detailed metrics. Recommended for business owners.'
            price='99.00'
            backgroundColor='gray'
            isYearly={isYearly}
          />
        </div>
      </div>

      <div className='w-screen flex flex-col items-center my-16 md:my-28 lg:my-40'>
        <div className='hidden md:flex lg:flex uppercase font-bold text-[40px]/[48px] tracking-[4.17px] md:mb-16 lg:mb-14'>Compare</div>
        <div className='flex md:hidden'>
          <Image src={plansFeaturesMobile} alt='Plan Features'/>
        </div>
        <div className='hidden md:flex lg:hidden'>
          <Image src={plansFeaturesTablet} alt='Plan Features'/>
        </div>
        <div className='hidden lg:flex'>
          <Image src={plansFeatures} alt='Plan Features'/>
        </div>
      </div>
    </div>
  )
}

export default Subscription