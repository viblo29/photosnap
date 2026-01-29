import HomePageButton from '@/components/atoms/HomePageButton/HomePageButton'

function HeroSection() {
  return (
    <div className='w-screen h-auto flex flex-col items-center justify-center'>
      
      {/* Section 1 */}
        <div className='h-162.5 w-full flex
                        max-[700px]:h-178.75 max-[700px]:flex-col'>
          <div className="bg-black text-white w-[42%] h-162.5 flex justify-center items-center relative
                          max-[1200px]:w-[64%]
                          max-[700px]:w-full max-[700px]:h-105 max-[700px]:order-2">
                          
            <div className="absolute w-1.5 h-76 inset-0 top-43.25 
                            transition-all duration-500 ease-in-out
                            max-[700px]:h-32 max-[700px]:w-1.5 max-[700px]:top-0 max-[700px]:left-45 max-[700px]:rotate-90 max-[700px]:origin-top-left">
              <img src='/images/line.svg' alt="" 
                    className="max-[700px]:h-35 object-contain"/>
            </div>

            <div className='w-96.75 h-76 max-[700px]:w-79.5 max-[700px]:h[275px]'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12
                               max-[700px]:text-[32px] max-[700px]:leading-10 max-[700px]:tracking-[3.33px]">
                  CREATE AND SHARE YOUR PHOTO STORIES.
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
                  Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                </p>

                <div className="mt-10 cursor-pointer bottom-0">
                  <HomePageButton
                    text="GET AN INVITE"
                    textColor="white"
                    gap={4.5}
                  />
                </div> 
            </div>
          </div>

          <div className="w-[58%] h-162.5   
                          max-[1200px]:w-[36%]
                          max-[700px]:w-full max-[700px]:h-73.75 max-[700px]:order-1">
            <img
            src='/images/N1.webp' 
            className='w-full h-full object-cover'/>
          </div>
        </div>

      {/* Section 2 */}
        <div className='h-150 w-screen flex
                        max-[700px]:h-172.5 max-[700px]:flex-col'>
          <div className="w-[58%]  max-[1200px]:w-[36%] overflow-hidden
                          max-[700px]:w-full max-[700px]:h-67.75 ">
            <img
            src='/images/N2.webp' 
            className='h-full w-full object-cover object-[30%_center]'/>
          </div>

          <div className="bg-white text-black w-[42%] h-150 flex justify-center items-center  max-[1200px]:w-[64%]
                          max-[700px]:w-full max-[700px]:h-104.75">
            <div className='w-96.75 h-82.25 max-[700px]:w-79.5 max-[700px]:h-68.75'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12
                              max-[700px]:text-[32px] max-[700px]:leading-10 max-[700px]:tracking-[3.33px]">
                  BEAUTIFUL STORIES <br />EVERY TIME
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
                  We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
                </p>

                <div className="mt-10 bottom-0">
                  <HomePageButton
                    text="VIEW THE STORIES"
                    textColor="black"
                    gap={4.5}
                  />
                </div> 
            </div>
          </div>
        </div>

      {/* Section 3 */}
        <div className='h-150 w-full flex max-[700px]:h-172.5 max-[700px]:flex-col'>
          <div className="bg-white text-black w-[42%] h-150 flex justify-center items-center  max-[1200px]:w-[64%]
                          max-[700px]:w-full max-[700px]:h-104.75 max-[700px]:order-2">
            <div className='w-96.75 h-76 max-[700px]:w-79.5 max-[700px]:h-68.75'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12
                              max-[700px]:text-[32px] max-[700px]:leading-10 max-[700px]:tracking-[3.33px]">
                  DESIGNED FOR EVERYONE
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
                  Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. 
                </p>

                <div className="mt-10 bottom-0">
                  <HomePageButton
                    text="VIEW THE STORIES"
                    textColor="black"
                    gap={4.5}
                  />
                </div> 
            </div>
          </div>

          <div className="w-[58%]  max-[1200px]:w-[36%] overflow-hidden
                          max-[700px]:w-full max-[700px]:h-67.75 max-[700px]:order-1">
            <img
            src='/images/N3.webp' 
            className='h-full w-full object-cover object-center'/>
          </div>

        </div>
        
    
    </div>
  )
}

export default HeroSection
