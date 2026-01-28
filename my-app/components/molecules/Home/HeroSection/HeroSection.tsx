import HomePageButton from '@/components/atoms/HomePageButton/HomePageButton'

function HeroSection() {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
      
      {/* Section 1 */}
        <div className='h-[650px] w-full flex'>
          <div className="bg-black text-white w-[610px] h-[650px] flex justify-center items-center relative">
            
            <div className="absolute w-[6px] h-[304px] inset-0 top-[173px]">
              <img src='/images/line.svg' alt="" />
            </div>

            <div className='w-[387px] h-[304px]'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-[48px]">
                  CREATE AND SHARE YOUR PHOTO STORIES.
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-[25px] opacity-60">
                  Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                </p>

                <div className="mt-10 cursor-pointer bottom-0">
                  <HomePageButton
                    text="GET AN INVITE"
                    textColor="white"
                    arrowColor="white"
                    gap={4.5}
                  />
                </div> 
            </div>
          </div>
          <div className="w-[830px] h-[650px] ">
            <img
            src='/images/N1.svg' 
            className='w-full h-full object-cover'/>
          </div>
        </div>

      {/* Section 2 */}
        <div className='h-[600px] w-screen flex'>
          <div className="w-[830px] h-full ">
            <img
            src='/images/N2.svg' 
            className='w-full h-full object-cover'/>
          </div>
          <div className="bg-white text-black w-[610px] h-[600px] flex justify-center items-center">
            <div className='w-[387px] h-[329px]'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-[48px]">
                  BEAUTIFUL STORIES <br />EVERY TIME
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-[25px] opacity-60">
                  We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
                </p>

                <div className="mt-10 bottom-0">
                  <HomePageButton
                    text="VIEW THE STORIES"
                    textColor="black"
                    arrowColor="black"
                    gap={4.5}
                  />
                </div> 
            </div>
          </div>
        </div>

      {/* Section 3 */}
        <div className='h-[650px] w-full flex'>
          <div className="bg-white text-black w-[610px] h-[600px] flex justify-center items-center">
            <div className='w-[387px] h-[304px]'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-[48px]">
                  DESIGNED FOR EVERYONE
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-[25px] opacity-60">
                  Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. 
                </p>

                <div className="mt-10 bottom-0">
                  <HomePageButton
                    text="VIEW THE STORIES"
                    textColor="black"
                    arrowColor="black"
                    gap={4.5}
                  />
                </div> 
            </div>
          </div>
          <div className="w-[830px] h-[600px] ">
            <img
            src='/images/N3.svg' 
            className='w-full h-full object-cover'/>
          </div>
        </div>
        
    
    </div>
  )
}

export default HeroSection
