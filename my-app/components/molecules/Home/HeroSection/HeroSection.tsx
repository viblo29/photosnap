import HomePageButton from '@/components/atoms/HomePageButton/HomePageButton'

function HeroSection() {
  return (
    <div>
      
        <div className='h-[650px] w-screen'>
          <div className="bg-black text-white w-[610px] h-[650px] flex justify-center items-center">
            <div className='w-[387px] h-[304px]'>
                <h1 className="text-[40px] font-bold tracking-[4.17px] leading-[48px]">
                  CREATE AND SHARE YOUR PHOTO STORIES.
                </h1>

                <p className="mt-4 text-[15px] font-normal leading-[25px] opacity-60">
                  Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                </p>

                <div className="mt-10 bottom-0">
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
            <img/>
          </div>
        </div>

        <div>
          <section className="bg-black text-white p-20">
            <h1 className="text-4xl font-bold tracking-wide">
              CREATE AND SHARE YOUR PHOTO STORIES.
            </h1>

            <p className="mt-6 text-sm max-w-sm opacity-70">
              Photosnap is a platform for photographers and visual storytellers.
            </p>

            <div className="mt-10">
              <HomePageButton
                text="GET AN INVITE"
                textColor="white"
                arrowColor="white"
                gap={4.5}
              />
            </div>
          </section>
        </div>
        
    
    </div>
  )
}

export default HeroSection
