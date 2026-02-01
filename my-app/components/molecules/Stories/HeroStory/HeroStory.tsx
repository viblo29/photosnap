import HomePageButton from '@/components/atoms/HomePageButton/HomePageButton'
import React from 'react'

function HeroStory() {
  return (
      <div className='relative w-screen h-162.5 
                    bg-[url("/images/Bitmap.webp")] bg-cover bg-center 
                    max-[800px]:bg-[url("/images/Bitmap.png")]
                    flex justify-start items-center pl-28 group'>
          <div className='absolute inset-0 bg-[url("/images/StoryActive.svg")]
                          bg-cover bg-center
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity duration-300
                          pointer-events-none'></div>
          <div className='w-96.75 h-102 flex flex-col items-start justify-between text-white'>
              <div className='h-4 font-bold text-[12px] leading-[100%] tracking-[2px]'>LAST MONTH’S FEATURED STORY</div>
              <div className='h-36 font-bold text-[40px] leading-12 tracking-[4.17px]'>HAZY FULL MOON OF APPALACHIA</div>
              <div className='flex gap-2 font-normal text-[13px] leading-[100%] '>
                <span className='opacity-75'>March 2nd 2020</span>
                <span className='opacity-100'>by John Appleseed</span>
              </div>
              <div className='font-normal text-[15px] leading-6.25 tracking-[0] opacity-60'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</div>
              
              <div >
                <HomePageButton
                  text="READ THE STORY"
                  textColor="white"
                  gap={4.5}
                />
              </div> 
          </div>
      </div>
  )
}

export default HeroStory