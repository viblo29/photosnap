import React from 'react'

function Benefits() {
  return (
    <div className='w-screen h-115 flex justify-center items-center'>
        <div className='h-59 w-277.5 flex justify-between'>

           {/* box1 */}
            <div className="w-87.5 h-full flex flex-col justify-between items-center">
                <div className='w-18 h-18 flex items-center'>
                    <img src="/images/Shape1.svg" alt="" />
                </div>
                <div className='w-full h-29 text-center'>
                    <p>100% Responsive</p>
                    <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div> 
            </div> 

            {/* box2 */}
            <div className="w-87.5 h-full">

            </div> 

            {/* box3 */}
            <div className="w-87.5 h-full">

            </div> 
        </div>  
    </div>
  )
}

export default Benefits