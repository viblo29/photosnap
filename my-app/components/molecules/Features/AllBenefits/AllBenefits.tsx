import React from 'react'

function AllBenefits() {
  return (
    <div className='w-screen p-40 pt-8 flex items-center justify-between flex-wrap     max-[1100px]:p-20 max-[1100px]:pt-10    max-[900px]:px-9    max-[767px]:justify-center'>

      {/* box1 */}
      <div className="w-87.5 h-59 flex flex-col justify-between items-center mt-26     max-[1100px]:w-85 max-[1100px]:mt-16
                    max-[540px]:w-77.5 ">
        <div className='w-18 h-18 flex items-center'>
          <img src="/images/Shape1.svg" alt="" />
        </div>
        <div className='w-full h-29 text-center'>
          <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>100% Responsive</p>
          <p className='opacity-60 text-[15px]'>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
        </div>
      </div>

      {/* box2 */}
      <div className="w-87.5 h-59 flex flex-col justify-between items-center mt-26       max-[1100px]:w-85 max-[1100px]:mt-16           max-[540px]:w-77.5 ">
        <div className='w-18 h-18 flex items-center'>
          <img src="/images/Shape2.svg" alt="" />
        </div>
        <div className='w-full h-29 text-center'>
          <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>No Photo Upload Limit</p>
          <p className='opacity-60 text-[15px]'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
        </div>
      </div>

      {/* box3 */}
      <div className="w-87.5 h-59 flex flex-col justify-between items-center mt-26        max-[1100px]:w-85 max-[1100px]:mt-16      max-[540px]:w-77.5 ">
        <div className='w-18 h-18 flex items-center'>
          <img src="/images/Shape3.svg" alt="" />
        </div>
        <div className='w-full h-29 text-center'>
          <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>Available to Embed</p>
          <p className='opacity-60 text-[15px]'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
        </div>
      </div> 

      {/* box4 */}
      <div className="w-87.5 h-59 flex flex-col justify-between items-center mt-26       max-[1100px]:w-85 max-[1100px]:mt-16      max-[540px]:w-77.5 ">
        <div className='w-20 h-18 flex items-center'>
          <img src="/images/Shape4.svg" alt="" />
        </div>
        <div className='w-full h-29 text-center'>
          <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>Custom Domain</p>
          <p className='opacity-60 text-[15px]'>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
        </div>
      </div> 

      {/* box5 */}
      <div className="w-87.5 h-59 flex flex-col justify-between items-center mt-26        max-[1100px]:w-85 max-[1100px]:mt-16      max-[540px]:w-77.5 ">
        <div className='w-18 h-18 flex items-center'>
          <img src="/images/Shape5.svg" alt="" />
        </div>
        <div className='w-full h-29 text-center'>
          <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>Boost Your Exposure</p>
          <p className='opacity-60 text-[15px]'>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
        </div>
      </div> 
      {/* box6 */}
      <div className="w-87.5 h-59 flex flex-col justify-between items-center mt-26          max-[1100px]:w-85 max-[1100px]:mt-16      max-[540px]:w-77.5 ">
        <div className='w-22.5 h-18 flex items-center'>
          <img src="/images/Shape6.svg" alt="" />
        </div>
        <div className='w-full h-29 text-center'>
          <p className='font-bold text-[18px] leading-6.25 tracking-normal mb-4.5'>Drag & Drop Image</p>
          <p className='opacity-60 text-[15px]'>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
        </div>
      </div>
      
    </div>
  )
}

export default AllBenefits