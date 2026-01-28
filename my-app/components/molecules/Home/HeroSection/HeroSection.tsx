import HomePageButton from '@/components/atoms/HomePageButton/HomePageButton'

function HeroSection() {
  return (
    <div className='w-screen h-auto flex flex-col items-center'>
      
      {/* Section 1 */}
        <div className='h-162.5 w-full flex'>
          <div className="bg-black text-white w-[42%] h-162.5 flex justify-center items-center relative">
            
            <div className="absolute w-1.5 h-76 inset-0 top-43.25">
              <img src='/images/line.svg' alt="" />
            </div>

            <div className='w-96.75 h-76'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12">
                  CREATE AND SHARE YOUR PHOTO STORIES.
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
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
          <div className="w-[58%] h-162.5 ">
            <img
            src='/images/N1.svg' 
            className='w-full h-full object-cover'/>
          </div>
        </div>

      {/* Section 2 */}
        <div className='h-150 w-screen flex'>
          <div className="w-[58%] h-full ">
            <img
            src='/images/N2.svg' 
            className='w-full h-full object-cover'/>
          </div>
          <div className="bg-white text-black w-[42%] h-150 flex justify-center items-center">
            <div className='w-96.75 h-82.25'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12">
                  BEAUTIFUL STORIES <br />EVERY TIME
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
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
        <div className='h-162.5 w-full flex'>
          <div className="bg-white text-black w-[42%] h-150 flex justify-center items-center">
            <div className='w-96.75 h-76'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12">
                  DESIGNED FOR EVERYONE
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
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
          <div className="w-[58%] h-150 ">
            <img
            src='/images/N3.svg' 
            className='w-full h-full object-cover'/>
          </div>
        </div>
        
    
    </div>
  )
}

export default HeroSection
