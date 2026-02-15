'use client'
import { useState } from 'react'
import Image from 'next/image'
import plansFeatures from '../../../../public/plans-features.svg'

function Subscription() {
  const [isYearly, setIsYearly] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showLoginAlert, setShowLoginAlert] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState({
    name: '',
    price: '',
    billingPeriod: ''
  })

  const handleToggle = () => {
    setIsYearly(!isYearly)
  }

  const handlePickPlan = (planName: string, price: string) => {
    const loggedInUser = sessionStorage.getItem('photosnap-session')
    
    if (!loggedInUser) {
      setShowLoginAlert(true)
      return
    }
    const basePrice = parseFloat(price)
    const displayPrice = isYearly ? (basePrice * 10).toFixed(2) : basePrice.toFixed(2)
    const billingPeriod = isYearly ? 'per year' : 'per month'

    setSelectedPlan({
      name: planName,
      price: displayPrice,
      billingPeriod: billingPeriod
    })
    setIsModalOpen(true)
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
            className={`w-16 h-8 rounded-2xl cursor-pointer flex items-center p-1 transition-colors duration-300 ${
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
            onPickPlan={() => handlePickPlan('Basic', '19.00')}
          />
          <Plan 
            h1='Pro' 
            h2='More advanced features available. Recommended for photography veterans and professionals.'
            price='39.00'
            backgroundColor='black'
            isMiddle
            isYearly={isYearly}
            onPickPlan={() => handlePickPlan('Pro', '39.00')}
          />
          <Plan 
            h1='Business' 
            h2='Additional features available such as more detailed metrics. Recommended for business owners.'
            price='99.00'
            backgroundColor='gray'
            isYearly={isYearly}
            onPickPlan={() => handlePickPlan('Business', '99.00')}
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

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan.name}
        price={selectedPlan.price}
        billingPeriod={selectedPlan.billingPeriod}
      />

      {showLoginAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowLoginAlert(false)}
          ></div>

          <div className="relative bg-white w-full max-w-112.5 mx-4">
            <button
              onClick={() => setShowLoginAlert(false)}
              className="absolute top-6 right-6 text-black hover:text-gray-600 transition-colors text-2xl font-light cursor-pointer"
            >
              ×
            </button>

            <div className="p-12 text-center">
              <h2 className="font-bold text-[32px]/[40px] mb-4">Login Required</h2>
              
              <p className="text-[15px]/[25px] opacity-60 mb-8">
                Please log in first to subscribe to a plan. Click the "LOG IN" button in the top right corner.
              </p>

              <button
                onClick={() => setShowLoginAlert(false)}
                className="w-full h-12 bg-black text-white font-bold text-[12px] tracking-[2px] uppercase hover:bg-[#DFDFDF] hover:text-black transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Subscription