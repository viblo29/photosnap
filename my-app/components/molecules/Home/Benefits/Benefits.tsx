import React from 'react'

function Benefits() {
  return (
    <div className='w-screen h-115 flex justify-center items-center max-[1200px]:h-250 max-[1200px]:justify-between max-[1200px]:p-22 '>
        <div className='h-59 w-277.5 flex justify-between max-[1200px]:w-full max-[1200px]:h-full max-[1200px]:flex-col max-[1200px]:items-center'>

           {/* box1 */}
            <div className="w-87.5 h-59 flex flex-col justify-between items-center max-[1200px]:w-114.25">
                <div className='w-18 h-18 flex items-center'>
                    <img src="/images/Shape1.svg" alt="" />
                </div>
                <div className='w-full h-29 text-center'>
                    <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>100% Responsive</p>
                    <p className='opacity-60 text-[15px]'>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div> 
            </div> 

            {/* box2 */}
             <div className="w-87.5 h-59 flex flex-col justify-between items-center max-[1200px]:w-114.25">
                <div className='w-18 h-18 flex items-center'>
                    <img src="/images/Shape2.svg" alt="" />
                </div>
                <div className='w-full h-29 text-center'>
                    <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>No Photo Upload Limit</p>
                    <p className='opacity-60 text-[15px]'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div> 
            </div>  

            {/* box3 */}
            <div className="w-87.5 h-59 flex flex-col justify-between items-center max-[1200px]:w-114.25">
                <div className='w-18 h-18 flex items-center'>
                    <img src="/images/Shape3.svg" alt="" />
                </div>
                <div className='w-full h-29 text-center'>
                    <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>Available to Embed</p>
                    <p className='opacity-60 text-[15px]'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                </div> 
            </div> 
        </div>  
    </div>
  )
}

export default Benefits